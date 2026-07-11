// record-x11.mjs — Linux/Xvfb recorder variant of record-lesson.mjs.
// Same cumulative scheduler + synthetic cursor/caption overlay + accessible-name targets,
// but captures the X display with ffmpeg x11grab (headed Chrome on Xvfb via CDP on 9222)
// instead of the Windows screencast skill. Produces <base>-v1.0.mp4 (narration muxed).
//
// Prereqs: Xvfb on $DISPLAY, headed Chrome on that display (kiosk, 1920x1080, remote-debug 9222),
//   already SIGNED IN off-camera (no credential UI on screen), page left on the lesson's start page.
//   Inputs in the lesson folder: <base>-durations.json, <base>-drive.json, <base>-full-narration-v1.0.mp3.
//
// Usage:
//   DISPLAY=:99 node record-x11.mjs <folder>/<WC-mm-ll> --rehearse   (drive only, no capture)
//   DISPLAY=:99 node record-x11.mjs <folder>/<WC-mm-ll> --record     (capture + trim + mux + probe)

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawn } from 'node:child_process';
import { CDP, dismissIdle, sleep } from './cdp-lib.mjs';

const CURSOR_TRAVEL_MS = 1300;
const DISPLAY = process.env.DISPLAY || ':99';
const basePath = process.argv[2];
const mode = process.argv.includes('--record') ? 'record' : 'rehearse';
if (!basePath) { console.error('usage: node record-x11.mjs <folder>/<WC-mm-ll> [--rehearse|--record]'); process.exit(1); }

const dir = path.dirname(path.resolve(basePath));
const base = path.basename(basePath);
const durations = JSON.parse(fs.readFileSync(path.join(dir, `${base}-durations.json`), 'utf8'));
const drive = JSON.parse(fs.readFileSync(path.join(dir, `${base}-drive.json`), 'utf8'));
if (drive.length !== durations.blocks.length) { console.error(`drive steps (${drive.length}) != narration blocks (${durations.blocks.length})`); process.exit(1); }

// Cursor continuity rules (user QA feedback on the v1 test video):
// 1. The overlay div dies with every navigation or app re-render; recreating it at a
//    default position made the cursor visibly jump to screen center and glide back out.
//    So the last position (and caption) persist in sessionStorage and recreation places
//    the cursor exactly where it was, with NO transition — invisible on camera.
// 2. A MutationObserver re-attaches the overlay the moment an app re-render drops it,
//    instead of leaving a gap until the next step's re-injection.
// 3. Glide duration scales with distance (constant velocity feel), clamped to
//    CURSOR_TRAVEL_MS so the click wait in runDrive always outlasts the glide.
const OVERLAY_JS = `(() => {
  let pos = [960, 540], cap = '', hl = null;
  try { pos = JSON.parse(sessionStorage.getItem('wc-cursor-pos')) || pos; } catch (e) {}
  try { cap = sessionStorage.getItem('wc-caption-text') || ''; } catch (e) {}
  try { hl = JSON.parse(sessionStorage.getItem('wc-hl-rect') || 'null'); } catch (e) {}
  let c = document.getElementById('wc-cursor');
  if (!c) {
    c = document.createElement('div'); c.id = 'wc-cursor';
    c.style.cssText = 'position:fixed;z-index:2147483647;width:28px;height:38px;pointer-events:none;left:' + (pos[0] - 2) + 'px;top:' + (pos[1] - 2) + 'px;filter:drop-shadow(1px 2px 3px rgba(0,0,0,0.35))';
    c.innerHTML = '<svg width="28" height="38" viewBox="0 0 28 38"><polygon points="2,2 2,30 9,24 13,35 17,33 12,23 20,22" fill="white" stroke="black" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    document.body.appendChild(c);
  }
  let b = document.getElementById('wc-subtitle');
  if (!b) {
    b = document.createElement('div'); b.id = 'wc-subtitle';
    b.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:2147483646;text-align:center;padding:14px 24px;background:rgba(12,16,22,0.82);color:#fff;font-family:-apple-system,"Segoe UI",Roboto,sans-serif;font-size:19px;font-weight:500;letter-spacing:.2px;transition:opacity .3s;pointer-events:none;opacity:0';
    b.textContent = cap; b.style.opacity = cap ? '1' : '0';
    document.body.appendChild(b);
  }
  let h = document.getElementById('wc-highlight');
  if (!h) {
    h = document.createElement('div'); h.id = 'wc-highlight';
    h.style.cssText = 'position:fixed;z-index:2147483645;pointer-events:none;border:3px solid #f59e0b;border-radius:10px;box-shadow:0 0 0 4px rgba(245,158,11,.22),0 0 18px 2px rgba(245,158,11,.4);transition:opacity .35s;opacity:0';
    if (hl) { h.style.left = (hl[0] - 6) + 'px'; h.style.top = (hl[1] - 6) + 'px'; h.style.width = (hl[2] + 12) + 'px'; h.style.height = (hl[3] + 12) + 'px'; h.style.opacity = '1'; }
    document.body.appendChild(h);
  }
  window.__wcCurEl = c; window.__wcCapEl = b; window.__wcHlEl = h;
  // Visual reference for narration about UI the cursor is not on: outline the element
  // being discussed. __wcHighlight(x,y,w,h) shows the outline; __wcHighlight() hides it.
  window.__wcHighlight = (x, y, w, h2) => {
    const el = window.__wcHlEl;
    if (!(w > 0)) { el.style.transition = 'opacity .35s ease'; el.style.opacity = '0'; try { sessionStorage.setItem('wc-hl-rect', ''); } catch (e) {} return; }
    const showing = el.style.opacity !== '1';
    if (showing) {
      // ease on: settle from a slight over-scale + fade, never materialize instantly
      el.style.transition = 'none';
      el.style.left = (x - 6) + 'px'; el.style.top = (y - 6) + 'px';
      el.style.width = (w + 12) + 'px'; el.style.height = (h2 + 12) + 'px';
      el.style.transform = 'scale(1.045)'; el.style.opacity = '0';
      void el.offsetWidth;
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      el.style.transform = 'scale(1)'; el.style.opacity = '1';
    } else {
      // retarget while visible: the box glides to the new element
      el.style.transition = 'left .5s ease, top .5s ease, width .5s ease, height .5s ease';
      el.style.left = (x - 6) + 'px'; el.style.top = (y - 6) + 'px';
      el.style.width = (w + 12) + 'px'; el.style.height = (h2 + 12) + 'px';
    }
    try { sessionStorage.setItem('wc-hl-rect', JSON.stringify([x, y, w, h2])); } catch (e) {}
  };
  window.__wcMoveCursor = (x, y) => {
    const el = window.__wcCurEl;
    const r = el.getBoundingClientRect();                         // mid-glide retargets scale to the remaining distance
    const dist = Math.hypot((x - 2) - r.left, (y - 2) - r.top);
    const ms = Math.max(420, Math.min(${CURSOR_TRAVEL_MS}, Math.round(dist * 1.15)));
    el.style.transition = 'left ' + (ms / 1000) + 's cubic-bezier(.4,.1,.3,1),top ' + (ms / 1000) + 's cubic-bezier(.4,.1,.3,1)';
    void el.offsetWidth;                                          // flush so the glide starts from the current position
    el.style.left = (x - 2) + 'px'; el.style.top = (y - 2) + 'px';
    window.__wcGlide = { x, y, until: performance.now() + ms };
    try { sessionStorage.setItem('wc-cursor-pos', JSON.stringify([Math.round(r.left) + 2, Math.round(r.top) + 2])); } catch (e) {}
    if (!window.__wcGlideSampler) {                               // persist the VISUAL position while gliding, not the target:
      window.__wcGlideSampler = setInterval(() => {               // a detach mid-glide must reappear where the cursor WAS
        const g = window.__wcGlide, s = window.__wcCurEl;
        if (!g) { clearInterval(window.__wcGlideSampler); window.__wcGlideSampler = null; return; }
        const done = performance.now() >= g.until;
        let px = g.x, py = g.y;
        if (!done && s && s.isConnected) { const rr = s.getBoundingClientRect(); px = Math.round(rr.left) + 2; py = Math.round(rr.top) + 2; }
        try { sessionStorage.setItem('wc-cursor-pos', JSON.stringify([px, py])); } catch (e) {}
        if (done) window.__wcGlide = null;
      }, 80);
    }
  };
  window.__wcCaption = (t) => {
    b.textContent = t || ''; b.style.opacity = t ? '1' : '0';
    try { sessionStorage.setItem('wc-caption-text', t || ''); } catch (e) {}
  };
  if (!window.__wcOverlayObs) {
    window.__wcOverlayObs = new MutationObserver((muts) => {
      const cur = window.__wcCurEl, cap = window.__wcCapEl, body = document.body;
      if (!body) return;
      if (cur && !cur.isConnected) {
        // detach cancels a running CSS transition and the element would re-render AT its
        // inline target — a visible pop. Restore the last sampled position, then resume.
        let p = null; try { p = JSON.parse(sessionStorage.getItem('wc-cursor-pos')); } catch (e) {}
        if (p) { cur.style.transition = 'none'; cur.style.left = (p[0] - 2) + 'px'; cur.style.top = (p[1] - 2) + 'px'; }
        body.appendChild(cur);
        const g = window.__wcGlide;
        if (g && performance.now() < g.until) window.__wcMoveCursor(g.x, g.y);
      }
      if (cap && !cap.isConnected) body.appendChild(cap);
      if (window.__wcHlEl && !window.__wcHlEl.isConnected) body.appendChild(window.__wcHlEl);
      // The demo's idle "Still there?" dialog must never paint on camera: hide its container
      // in the same mutation microtask it is inserted (pre-paint), then click Stay Logged In
      // so the app's idle timer resets through its own native path.
      if (muts.some(m => m.addedNodes.length)) {
        const stay = [...document.querySelectorAll('button')].find(x => /stay logged in|stay active/i.test(x.textContent || '') && x.getBoundingClientRect().width > 0);
        if (stay) {
          const dlg = stay.closest('[role=dialog],[class*="modal"],[class*="idle"],[class*="overlay"],[class*="dialog"]');
          if (dlg) dlg.style.display = 'none';
          stay.click();
        }
      }
    });
    window.__wcOverlayObs.observe(document.documentElement, { childList: true, subtree: true });
  }
  return true;
})()`;

// Fresh-start for each take: every lesson opens with the cursor parked at screen center
// and no caption, with no leftovers from a previous run in the same tab.
const RESET_JS = `(() => {
  if (window.__wcOverlayObs) { window.__wcOverlayObs.disconnect(); window.__wcOverlayObs = null; }
  if (window.__wcGlideSampler) { clearInterval(window.__wcGlideSampler); window.__wcGlideSampler = null; }
  window.__wcCurEl = null; window.__wcCapEl = null; window.__wcHlEl = null; window.__wcGlide = null;
  try { sessionStorage.removeItem('wc-cursor-pos'); sessionStorage.removeItem('wc-caption-text'); sessionStorage.removeItem('wc-hl-rect'); } catch (e) {}
  for (const id of ['wc-cursor', 'wc-subtitle', 'wc-highlight']) { const el = document.getElementById(id); if (el) el.remove(); }
  return true;
})()`;

// Registered once via Page.addScriptToEvaluateOnNewDocument: the overlay self-restores the
// moment each new document has a body, so the cursor/caption/highlight never visibly vanish
// during a navigation while waiting for the driver's next injection.
const BOOT_JS = `(function () {
  if (window.__wcBoot) return; window.__wcBoot = true;
  const run = () => { try { ${OVERLAY_JS} } catch (e) {} };
  if (document.body) run();
  else new MutationObserver((m, o) => { if (document.body) { o.disconnect(); run(); } }).observe(document.documentElement || document, { childList: true, subtree: true });
})()`;

// End-of-beat clear (caption + highlight) must not depend on the overlay functions existing:
// a click-triggered page load during the clear window would silently skip it and the persisted
// caption/highlight would resurrect on the next page. This snippet works on any window.
const CLEAR_BEAT_JS = `(() => {
  try { sessionStorage.setItem('wc-caption-text', ''); sessionStorage.setItem('wc-hl-rect', ''); } catch (e) {}
  const b = document.getElementById('wc-subtitle'); if (b) { b.textContent = ''; b.style.opacity = '0'; }
  const h = document.getElementById('wc-highlight'); if (h) h.style.opacity = '0';
  return true;
})()`;

const findTargetJS = (text, scope) => `(() => {
  const want = ${JSON.stringify(text)}.trim().toLowerCase();
  const els = [...document.querySelectorAll(${JSON.stringify(scope || 'button, a, [role=button], [role=tab], [aria-label], li, td, .nav-item')})];
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const norm = s => (s || '').trim().replace(/\\s+/g, ' ').toLowerCase();
  const el = els.find(e => vis(e) && norm(e.getAttribute('aria-label')) === want)
        || els.find(e => vis(e) && norm(e.textContent) === want)
        || els.find(e => vis(e) && norm(e.textContent).startsWith(want));
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2), label: (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 60) };
})()`;

// Resolve a highlight target to its viewport rect. Target is a CSS selector, or
// "text:Some Label" to match by accessible name / visible text (same rules as click-text).
const highlightRectJS = (target, scope) => {
  if (target.startsWith('text:')) {
    const text = target.slice(5);
    return `(() => {
      const want = ${JSON.stringify(text)}.trim().replace(/\\s+/g, ' ').toLowerCase();
      const els = [...document.querySelectorAll(${JSON.stringify(scope || 'button, a, [role=button], [role=tab], [aria-label], li, td, section, div[class], .nav-item')})];
      const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
      const norm = s => (s || '').trim().replace(/\\s+/g, ' ').toLowerCase();
      const el = els.find(e => vis(e) && norm(e.getAttribute('aria-label')) === want)
            || els.find(e => vis(e) && norm(e.textContent) === want);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), label: (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 60) };
    })()`;
  }
  return `(() => {
    const el = [...document.querySelectorAll(${JSON.stringify(target)})].find(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), label: (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 60) };
  })()`;
};

async function clickAt(cdp, x, y) {
  for (const type of ['mousePressed', 'mouseReleased'])
    await cdp.send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 });
}

async function runDrive(cdp, report) {
  const t0 = Date.now();
  for (let i = 0; i < drive.length; i++) {
    const d = drive[i];
    const stepStartMs = durations.blocks.slice(0, i).reduce((s, b) => s + b.stepS, 0) * 1000;
    const wait = stepStartMs - (Date.now() - t0);
    if (wait > 0) await sleep(wait);
    await dismissIdle(cdp);
    await cdp.eval(OVERLAY_JS);
    const entry = { step: d.step, action: d.action, scheduledS: +(stepStartMs / 1000).toFixed(2), actualS: +((Date.now() - t0) / 1000).toFixed(2) };
    try {
      if (d.action === 'none') { /* narration-only hold */ }
      else if (d.action === 'nav') { await cdp.navigate(d.target, 900); await cdp.eval(OVERLAY_JS); }
      else if (d.action === 'js') { await cdp.eval(d.target); }
      else if (d.action === 'key') { if (/^ctrl\+k$/i.test(d.target)) await cdp.pressKey('k', 2); else await cdp.pressKey(d.target); }
      else if (d.action === 'click-selector') {
        const pos = await cdp.eval(`(() => { const el = document.querySelector(${JSON.stringify(d.target)}); if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.left + r.width/2), y: Math.round(r.top + r.height/2) }; })()`);
        if (!pos) throw new Error(`selector not found: ${d.target}`);
        await cdp.eval(`window.__wcMoveCursor(${pos.x}, ${pos.y})`); await sleep(CURSOR_TRAVEL_MS + 200);
        await clickAt(cdp, pos.x, pos.y);
      } else if (d.action === 'highlight') {
        // Outline the element the narration is discussing; the cursor stays where it is.
        // Cleared automatically with the caption before the next step starts.
        const rect = await cdp.eval(highlightRectJS(d.target, d.scope));
        if (!rect) throw new Error(`highlight target not found: ${d.target}`);
        entry.resolved = rect.label;
        await cdp.eval(`window.__wcHighlight(${rect.x}, ${rect.y}, ${rect.w}, ${rect.h})`);
      } else if (d.action === 'click-text') {
        const pos = await cdp.eval(findTargetJS(d.target, d.scope));
        if (!pos) throw new Error(`target not found: "${d.target}"`);
        entry.resolved = pos.label;
        await cdp.eval(`window.__wcMoveCursor(${pos.x}, ${pos.y})`); await sleep(CURSOR_TRAVEL_MS + 200);
        await clickAt(cdp, pos.x, pos.y);
      } else throw new Error(`unknown action ${d.action}`);
      await sleep(700);
      await cdp.eval(OVERLAY_JS);
      if (d.caption) await cdp.eval(`window.__wcCaption(${JSON.stringify(d.caption)})`);
      entry.title = await cdp.eval('document.title');
      entry.ok = true;
    } catch (e) { entry.ok = false; entry.error = e.message; }
    report.push(entry);
    console.log(`  [${entry.ok ? 'OK ' : 'ERR'}] step ${d.step} @${entry.actualS}s (sched ${entry.scheduledS}s) ${d.action} ${entry.error || ''}`);
    const nextStart = durations.blocks.slice(0, i + 1).reduce((s, b) => s + b.stepS, 0) * 1000;
    const clearAt = nextStart - 1000 - (Date.now() - t0);
    if (clearAt > 0 && i < drive.length - 1) { await sleep(clearAt); await cdp.eval(CLEAR_BEAT_JS).catch(() => {}); }
  }
  const rest = durations.totalS * 1000 - (Date.now() - t0);
  if (rest > 0) await sleep(rest);
  return (Date.now() - t0) / 1000;
}

async function main() {
  const cdp = await CDP.connect('first');
  await cdp.send('Page.addScriptToEvaluateOnNewDocument', { source: BOOT_JS });
  await cdp.eval(RESET_JS);
  await cdp.eval(OVERLAY_JS);
  const report = [];
  if (mode === 'rehearse') {
    console.log(`REHEARSE ${base}: ${drive.length} steps, ${durations.totalS}s timeline`);
    const wall = await runDrive(cdp, report);
    const failures = report.filter(r => !r.ok);
    fs.writeFileSync(path.join(dir, `${base}-rehearsal.json`), JSON.stringify({ wallS: +wall.toFixed(2), report }, null, 2));
    console.log(`Rehearsal ${failures.length ? 'FAILED (' + failures.length + ')' : 'CLEAN'} · wall ${wall.toFixed(1)}s vs timeline ${durations.totalS}s`);
    process.exit(failures.length ? 1 : 0);
  }
  const raw = path.join(dir, `${base}-raw.mp4`);
  // ffmpeg x11grab: 30fps, exact 1920x1080 from top-left, no cursor, lossless-ish for later mux
  const ff = spawn('ffmpeg', ['-y', '-f', 'x11grab', '-draw_mouse', '0', '-framerate', '30',
    '-video_size', '1920x1080', '-i', `${DISPLAY}.0+0,0`,
    '-c:v', 'libx264', '-preset', 'ultrafast', '-pix_fmt', 'yuv420p', '-r', '30', raw],
    { stdio: ['ignore', 'ignore', 'inherit'] });
  await sleep(1500);                 // capture spin-up
  await cdp.eval(OVERLAY_JS);
  await sleep(500);
  await runDrive(cdp, report);
  await sleep(400);
  ff.kill('SIGINT');                 // clean ffmpeg finalize
  await new Promise(r => ff.on('exit', r));
  const failures = report.filter(r => !r.ok);
  if (failures.length) { console.error(`DRIVE HAD ${failures.length} ERRORS — do not ship. Re-roll.`); process.exit(1); }
  // Exact lead from the capture itself: it runs from ffmpeg's true start until 0.4s after the
  // drive ends, so lead = rawDuration - (timeline + 0.4). (Wall-clock spawn math over-estimated
  // this, and a stream-copy trim snapped back to the t=0 keyframe — a no-op that baked ~2s of
  // lead-in into the take and ran narration that far ahead of the visuals.) Re-encode the trim
  // for frame accuracy; veryfast/crf18 is visually lossless for screen content.
  const rawDur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', raw]).toString());
  const lead = rawDur - (durations.totalS + 0.4);
  if (!(lead >= 0 && lead < 6)) { console.error(`implausible capture lead ${lead.toFixed(2)}s (raw ${rawDur.toFixed(2)}s vs timeline ${durations.totalS}s) — re-roll.`); process.exit(1); }
  const trimmed = path.join(dir, `${base}-trimmed.mp4`);
  execFileSync('ffmpeg', ['-y', '-ss', lead.toFixed(3), '-i', raw, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', '30', trimmed]);
  const narration = path.join(dir, `${base}-full-narration-v1.0.mp3`);
  const final = path.join(dir, `${base}-v1.0.mp4`);
  execFileSync('ffmpeg', ['-y', '-i', trimmed, '-i', narration, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-map', '0:v', '-map', '1:a', '-shortest', final]);
  const probe = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height,r_frame_rate:format=duration', '-of', 'json', final]).toString();
  console.log('FINAL:', final, probe);
  cdp.close();                       // an open CDP socket keeps node alive forever — exit explicitly
  process.exit(0);
}

main().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
