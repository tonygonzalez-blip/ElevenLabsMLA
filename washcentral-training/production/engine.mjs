// engine.mjs — real interaction layer for training-video production.
//
// Hard rules (see the production goal):
//   - The website is immutable: nothing is injected, no CSS/DOM changes, no storage writes,
//     no element.click(). DOM access is READ-ONLY (locate targets, read rects, verify state).
//   - All visible interaction happens through genuine CDP input events (mouse move/press/release).
//   - Every action resolves its live target immediately beforehand, verifies visible/enabled/
//     unobscured/stable, moves the real pointer along an eased path, hovers, presses, and then
//     verifies the expected application state. Failures abort the take (nonzero exit).
//   - Everything is logged to one authoritative event log; the compositor and QA consume it.
//
// Usage:
//   DISPLAY=:99 node production/engine.mjs production/lessons/WC-00-03.json --rehearse
//   DISPLAY=:99 node production/engine.mjs production/lessons/WC-00-03.json --record

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawn } from 'node:child_process';
import { CDP, sleep, dismissIdle } from '../tools/cdp-lib.mjs';

const lessonPath = process.argv[2];
const mode = process.argv.includes('--record') ? 'record' : 'rehearse';
if (!lessonPath) { console.error('usage: node engine.mjs <lesson.json> [--rehearse|--record]'); process.exit(2); }
const L = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
const repoRoot = path.resolve(path.dirname(path.resolve(lessonPath)), '../..');
const outDir = path.join(repoRoot, 'production/out');
fs.mkdirSync(outDir, { recursive: true });

const CAPTURE_SPINUP_MS = 1700;
const CAPTURE_TAIL_S = 2.2;           // extra stable material after audio end, for hold + fade
const DISPLAY = process.env.DISPLAY || ':99';

// ---------- read-only target resolution ----------
const resolveJS = (t) => {
  if (t.selector) return `(() => {
    const el = document.querySelector(${JSON.stringify(t.selector)});
    return el ? window.__probeEl(el) : null;
  })()`;
  if (t.js) return `(() => {
    const found = (${t.js});
    return found ? window.__probeEl(found, ${JSON.stringify({ textRect: !!t.textRect })}) : null;
  })()`;
  if (t.text) return `(() => {
    const want = ${JSON.stringify(t.text)}.trim().toLowerCase();
    const els = [...document.querySelectorAll(${JSON.stringify(t.scope || 'a,button,[role=menuitem],li')})];
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const norm = s => (s || '').trim().replace(/\\s+/g, ' ').toLowerCase();
    const el = els.find(e => vis(e) && norm(e.textContent) === want)
          || els.find(e => vis(e) && norm(e.getAttribute('aria-label')) === want)
          || els.find(e => vis(e) && norm(e.textContent).startsWith(want));
    return el ? window.__probeEl(el) : null;
  })()`;
  throw new Error('target needs selector|js|text');
};

// __probeEl is installed per-eval (plain function value, nothing persisted on the page)
const PROBE_PRELUDE = `window.__probeEl = (el, opts) => {
  let r = el.getBoundingClientRect();
  if (opts && opts.textRect) {
    try { const rg = document.createRange(); rg.selectNodeContents(el); const rr = rg.getBoundingClientRect(); if (rr.width > 0 && rr.width < r.width - 20) r = rr; } catch (e) {}
  }
  const cx = Math.round(r.left + r.width / 2), cy = Math.round(r.top + r.height / 2);
  const at = document.elementFromPoint(cx, cy);
  const style = getComputedStyle(el);
  return {
    rect: { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) },
    cx, cy,
    visible: r.width > 0 && r.height > 0 && style.visibility !== 'hidden' && style.display !== 'none',
    disabled: !!(el.disabled || el.getAttribute('aria-disabled') === 'true'),
    obscured: !(at && (at === el || el.contains(at) || at.contains(el))),
    label: (el.getAttribute('aria-label') || el.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 60)
  };
};`;

// ---------- pointer model (the ONE pointer: what we dispatch is what gets drawn) ----------
const easeInOutCubic = (u) => u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
function planPath(from, to) {
  const dist = Math.hypot(to[0] - from[0], to[1] - from[1]);
  const durMs = Math.max(320, Math.min(1400, 90 + dist * 1.05));
  // gentle deterministic arc: perpendicular bow toward screen center (never off-screen)
  const mx = (from[0] + to[0]) / 2, my = (from[1] + to[1]) / 2;
  const nx = -(to[1] - from[1]) / (dist || 1), ny = (to[0] - from[0]) / (dist || 1);
  const towardCenter = Math.sign((960 - mx) * nx + (540 - my) * ny) || 1;
  const bow = Math.min(38, dist * 0.07) * towardCenter;
  const c = [mx + nx * bow, my + ny * bow];
  const pts = [];
  // dense enough that no eased step exceeds ~60px (peak velocity ~1.5x mean) and time gaps
  // stay <=~28ms, so both the real motion and the logged path read as continuous, not jumpy
  const steps = Math.max(6, Math.round(durMs / 24), Math.round(dist / 45));
  for (let i = 1; i <= steps; i++) {
    const u = easeInOutCubic(i / steps);
    const x = (1 - u) * (1 - u) * from[0] + 2 * (1 - u) * u * c[0] + u * u * to[0];
    const y = (1 - u) * (1 - u) * from[1] + 2 * (1 - u) * u * c[1] + u * u * to[1];
    pts.push([Math.round(x), Math.round(y)]);
  }
  return { durMs, pts };
}

// ---------- engine ----------
class Engine {
  constructor(cdp, log) { this.cdp = cdp; this.log = log; this.pointer = [960, 1079]; this.watchers = []; }
  now() { return (Date.now() - this.t0) / 1000; }
  async evalRO(expr) { return this.cdp.eval(`(() => { ${PROBE_PRELUDE} return (${expr}); })()`); }
  async resolve(name, { requireStableMs = 160, allowDisabled = false } = {}) {
    const t = L.targets[name];
    if (!t) throw new Error(`unknown target ${name}`);
    const one = async () => this.cdp.eval(`(() => { ${PROBE_PRELUDE} return (${resolveJS(t)}); })()`);
    const a = await one();
    if (!a) throw new Error(`target not found: ${name}`);
    await sleep(Math.max(60, requireStableMs / 2));
    const b = await one();
    if (!b) throw new Error(`target vanished during stability check: ${name}`);
    if (Math.abs(a.rect.x - b.rect.x) > 2 || Math.abs(a.rect.y - b.rect.y) > 2) throw new Error(`target rect unstable: ${name}`);
    if (!b.visible) throw new Error(`target not visible: ${name}`);
    if (b.disabled && !allowDisabled) throw new Error(`target disabled: ${name}`);
    return b;
  }
  dispatchMove(x, y) {
    // pipelined: the websocket preserves ordering; we only await the last one per glide
    const p = this.cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', buttons: 0 }).catch(() => {});
    this.pointer = [x, y];
    this.log.pointer.push({ t: +this.now().toFixed(3), x, y });
    return p;
  }
  async glideTo(to, { arriveBy = null } = {}) {
    const { durMs, pts } = planPath(this.pointer, to);
    let start = Date.now();
    if (arriveBy !== null) {
      const startAt = this.t0 + (arriveBy * 1000) - durMs;
      if (startAt > Date.now()) await sleep(startAt - Date.now());
      start = Date.now();
    }
    let lastP = null;
    for (let i = 0; i < pts.length; i++) {
      const due = start + (durMs * (i + 1)) / pts.length;
      const wait = due - Date.now();
      if (wait > 0) await sleep(wait);
      lastP = this.dispatchMove(pts[i][0], pts[i][1]);
    }
    if (lastP) await lastP;
    return durMs;
  }
  async resolveRetry(name, opts = {}, timeoutMs = 3000) {
    const until = Date.now() + timeoutMs;
    let last = null;
    for (;;) {
      try { return await this.resolve(name, opts); }
      catch (e) { last = e; if (Date.now() >= until) throw last; await sleep(150); }
    }
  }
  async press(x, y) {
    // settle the pointer at the exact press point first (proven-necessary for the click toggle)
    await this.cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', buttons: 0 });
    await sleep(60);
    const tPress = +this.now().toFixed(3);
    await this.cdp.send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', buttons: 1, clickCount: 1 });
    await sleep(85);
    await this.cdp.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', buttons: 0, clickCount: 1 });
    return { tPress, tRelease: +this.now().toFixed(3) };
  }
  async waitPredicate(expr, timeoutMs, label) {
    const until = Date.now() + timeoutMs;
    while (Date.now() < until) {
      try { if (await this.evalRO(L.predicates[expr] || expr)) return +this.now().toFixed(3); } catch (e) { /* navigating */ }
      await sleep(120);
    }
    throw new Error(`postcondition failed within ${timeoutMs}ms: ${label || expr}`);
  }
  startWatch(w) {
    const rec = { key: w.key, samples: [], mustHold: !!w.mustHold, predicate: w.predicate };
    this.log.watches.push(rec);
    const iv = setInterval(async () => {
      const t = this.now();
      if (t < w.from) return;
      if (t > w.to) { clearInterval(iv); return; }
      try { rec.samples.push({ t: +t.toFixed(2), ok: !!(await this.evalRO(L.predicates[w.predicate])) }); } catch (e) { /* nav */ }
    }, w.everyMs || 500);
    this.watchers.push(iv);
  }
  async waitUntil(audioT) {
    const due = this.t0 + audioT * 1000;
    const wait = due - Date.now();
    if (wait > 0) await sleep(wait);
  }

  async runOp(op) {
    const entry = { op: op.op, note: op.note, target: op.target, scheduled: op.at ?? op.pressAt ?? null };
    this.log.ops.push(entry);
    try {
      if (op.op === 'assert') {
        await this.waitUntil(Math.max(0, op.at ?? 0));
        entry.verifiedT = await this.waitPredicate(op.predicate, 2500, op.predicate);
      } else if (op.op === 'pointer-enter') {
        await this.waitUntil(op.at);
        this.pointer = op.from;
        await this.dispatchMove(op.from[0], op.from[1]);
        const tgt = await this.resolve(op.to.target);
        const to = [tgt.cx + (op.to.offset?.[0] || 0), tgt.cy + (op.to.offset?.[1] || 0)];
        entry.from = op.from; entry.to = to;
        await this.glideTo(to);
      } else if (op.op === 'move') {
        await this.waitUntil(op.at);
        let to;
        if (op.to.point) to = op.to.point;
        else {
          const tgt = await this.resolve(op.to.target);
          to = op.to.outside
            ? [tgt.rect.x + (op.to.offset?.[0] || 0), tgt.rect.y + (op.to.offset?.[1] || 0)]
            : [tgt.cx + (op.to.offset?.[0] || 0), tgt.cy + (op.to.offset?.[1] || 0)];
        }
        entry.to = to;
        await this.glideTo(to);
      } else if (op.op === 'click') {
        const tgt = await this.resolveRetry(op.target, { requireStableMs: 200 }, 3500);
        if (tgt.obscured) throw new Error(`target obscured: ${op.target}`);
        const t = L.targets[op.target];
        const point = t.clickPoint || [tgt.cx, tgt.cy];
        entry.rect = tgt.rect; entry.label = tgt.label; entry.point = point;
        const hoverMs = op.hoverMs ?? 380;
        await this.glideTo(point, { arriveBy: op.pressAt - hoverMs / 1000 });
        entry.arrivalT = +this.now().toFixed(3);
        // re-verify during the hover, before the scheduled press: the live rect must still
        // contain the press point (staleness window = the visible hover, ~0.4s)
        const again = await this.resolveRetry(op.target, { requireStableMs: 80 }, 1500);
        if (point[0] < again.rect.x || point[0] > again.rect.x + again.rect.w ||
            point[1] < again.rect.y || point[1] > again.rect.y + again.rect.h)
          throw new Error(`press point left the live target rect: ${op.target}`);
        await this.waitUntil(op.pressAt);
        const { tPress, tRelease } = await this.press(point[0], point[1]);
        entry.pressT = tPress; entry.releaseT = tRelease; entry.hoverMs = Math.round((tPress - entry.arrivalT) * 1000);
        entry.verifiedT = await this.waitPredicate(op.postcondition, op.timeoutMs ?? 4000, `${op.target} -> ${op.postcondition}`);
        entry.postcondition = op.postcondition;
        if (op.nav) this.log.navs.push({ target: op.target, pressT: tPress, verifiedT: entry.verifiedT });
      } else if (op.op === 'key') {
        // Genuine keyboard input via CDP (rawKeyDown/keyUp), for lessons that demonstrate
        // keystrokes (Ctrl+K, arrow keys, Escape). `keys` is one combo or an ordered list,
        // e.g. "ctrl+k", "ArrowDown", "Escape". Optional postcondition is verified after.
        await this.waitUntil(op.pressAt ?? op.at);
        const keyT = +this.now().toFixed(3);
        const combos = Array.isArray(op.keys) ? op.keys : [op.keys || op.key];
        const modMap = { ctrl: 2, alt: 1, meta: 4, shift: 8 };
        for (const combo of combos) {
          const parts = String(combo).split('+');
          const key = parts.pop();
          const mods = parts.reduce((m, p) => m | (modMap[p.toLowerCase()] || 0), 0);
          await this.cdp.pressKey(key, mods);
          await sleep(op.gapMs ?? 240);
        }
        entry.keyT = keyT; entry.keys = combos;
        this.log.keys.push({ t: keyT, keys: combos, label: op.keyLabel || combos.join(' ') });
        if (op.postcondition) {
          entry.verifiedT = await this.waitPredicate(op.postcondition, op.timeoutMs ?? 4000, `${combos.join(',')} -> ${op.postcondition}`);
          entry.postcondition = op.postcondition;
        }
      } else if (op.op === 'type') {
        // Genuine typed text via per-character CDP key events (keyDown carries `text`, so the
        // browser inserts it exactly as a keyboard would). Only ever used on lesson-reviewed,
        // read-only inputs (e.g. a live search box) — never on credential fields.
        await this.waitUntil(op.pressAt ?? op.at);
        const typeT = +this.now().toFixed(3);
        for (const ch of String(op.text)) {
          await this.cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', text: ch, unmodifiedText: ch, key: ch });
          await sleep(28);
          await this.cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: ch });
          await sleep(op.perCharMs ?? 95);
        }
        entry.typeT = typeT; entry.text = op.text;
        this.log.keys.push({ t: typeT, keys: [op.text], label: op.keyLabel || 'type: ' + op.text });
        if (op.postcondition) {
          entry.verifiedT = await this.waitPredicate(op.postcondition, op.timeoutMs ?? 4000, `type -> ${op.postcondition}`);
          entry.postcondition = op.postcondition;
        }
      } else if (op.op === 'log-rect') {
        await this.waitUntil(op.at);
        // log-rect only reads geometry for external graphics; a disabled control (e.g. a Send
        // button with an empty input) is a legitimate thing to point at, never to click
        const tgt = await this.resolveRetry(op.target, { requireStableMs: op.requireStableMs ?? 160, allowDisabled: true }, 3000);
        entry.rect = tgt.rect; entry.label = tgt.label;
        this.log.rects[op.key] = { t: +this.now().toFixed(3), rect: tgt.rect, label: tgt.label };
      } else if (op.op === 'log-rects') {
        await this.waitUntil(op.at);
        const group = {};
        for (const name of op.targets) {
          const tgt = await this.resolve(name, { allowDisabled: true });
          group[name] = { rect: tgt.rect, label: tgt.label };
        }
        this.log.rects[op.key] = { t: +this.now().toFixed(3), items: group };
        entry.items = Object.keys(group);
      } else if (op.op === 'watch') {
        this.startWatch(op);
      } else if (op.op === 'wait-stable') {
        const nav = this.log.navs[this.log.navs.length - 1];
        const tReady = await this.waitPredicate(op.predicate, op.timeoutMs ?? 8000, op.key);
        await sleep(op.settleMs ?? 700);
        // rect-stability probe on the page heading to call it visually stable
        const stableT = +this.now().toFixed(3);
        this.log.stability[op.key] = { navPressT: nav?.pressT ?? null, readyT: tReady, stableT };
        entry.stableT = stableT;
      } else throw new Error(`unknown op ${op.op}`);
      entry.ok = true;
    } catch (e) {
      entry.ok = false; entry.error = e.message;
      throw Object.assign(new Error(`[${op.op}${op.target ? ' ' + op.target : ''}] ${e.message}`), { entry });
    } finally {
      entry.actualT = +this.now().toFixed(3);
      const tag = entry.ok === false ? 'ERR' : 'OK ';
      console.log(`  [${tag}] ${op.op}${op.target ? ' ' + op.target : ''} @${entry.actualT}s${entry.pressT ? ` press@${entry.pressT}` : ''}${entry.error ? ' :: ' + entry.error : ''}`);
    }
  }
}

async function main() {
  const cdp = await CDP.connect('first');
  const log = {
    lesson: L.lesson, mode, startedISO: null, display: DISPLAY,
    pointer: [], ops: [], rects: {}, watches: [], navs: [], stability: {}, keys: [],
    audioDurationS: L.audioDurationS, captureOffsetS: null, rawFile: null
  };

  // pre-flight (off-camera, before any capture): stage the start page, dismiss any idle
  // "Still there?" session dialog via its own Stay-Logged-In button (a genuine user action),
  // and let the page settle. A live idle dialog on a fresh capture would abort QA check 29.
  // Always (re)load the start page: a fresh document guarantees no leftover overlay, modal,
  // theme, or dialog from prior activity can leak into the take.
  console.log(`  staging start page: ${L.startUrl}`);
  await cdp.navigate(L.startUrl, 1500);
  if (await dismissIdle(cdp)) { console.log('  dismissed idle session dialog (off-camera)'); await sleep(600); }
  await sleep(1200);

  // Capture in record mode:
  let ff = null, rawPath = null, sigintAt = null;
  if (mode === 'record') {
    rawPath = path.join(outDir, `${L.lesson}-capture.mkv`);
    ff = spawn('ffmpeg', ['-y', '-f', 'x11grab', '-draw_mouse', '0', '-framerate', '30',
      '-video_size', '1920x1080', '-i', `${DISPLAY}.0+0,0`,
      '-c:v', 'libx264', '-preset', 'ultrafast', '-qp', '6', '-pix_fmt', 'yuv444p', rawPath],
      { stdio: ['ignore', 'ignore', 'ignore'] });
    await sleep(CAPTURE_SPINUP_MS);
    log.rawFile = rawPath;
  }

  const engine = new Engine(cdp, log);
  engine.t0 = Date.now();
  log.startedISO = new Date().toISOString();

  let failed = null;
  try {
    for (const op of L.ops) await engine.runOp(op);
    // run the timeline out past audio end so the compositor has hold + fade material
    await engine.waitUntil(L.audioDurationS + CAPTURE_TAIL_S);
  } catch (e) {
    failed = e;
  }
  for (const iv of engine.watchers) clearInterval(iv);

  if (mode === 'record' && ff) {
    sigintAt = (Date.now() - engine.t0) / 1000;
    ff.kill('SIGINT');
    await new Promise(r => ff.on('exit', r));
    const rawDur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', rawPath]).toString());
    log.captureOffsetS = +(rawDur - sigintAt).toFixed(3);   // audioT + offset = capture time
    log.rawDurationS = +rawDur.toFixed(3);
  }

  // watch verdicts
  for (const w of log.watches) {
    w.held = w.samples.length > 0 && w.samples.every(s => s.ok);
    if (w.mustHold && !w.held && !failed) failed = new Error(`watch failed: ${w.key} did not hold`);
  }

  const logPath = path.join(outDir, `${L.lesson}-events${mode === 'record' ? '' : '-rehearsal'}.json`);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
  console.log(`${mode.toUpperCase()} ${failed ? 'FAILED' : 'CLEAN'} · events: ${logPath}`);
  if (failed) { console.error('ABORT:', failed.message); cdp.close(); process.exit(1); }
  cdp.close(); process.exit(0);
}

main().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
