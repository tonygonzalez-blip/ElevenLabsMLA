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

const OVERLAY_JS = `(() => {
  let c = document.getElementById('wc-cursor');
  if (!c) {
    c = document.createElement('div'); c.id = 'wc-cursor';
    c.style.cssText = 'position:fixed;z-index:2147483647;width:28px;height:38px;pointer-events:none;left:960px;top:540px;transition:left ${CURSOR_TRAVEL_MS / 1000}s cubic-bezier(.4,.1,.3,1),top ${CURSOR_TRAVEL_MS / 1000}s cubic-bezier(.4,.1,.3,1);filter:drop-shadow(1px 2px 3px rgba(0,0,0,0.35))';
    c.innerHTML = '<svg width="28" height="38" viewBox="0 0 28 38"><polygon points="2,2 2,30 9,24 13,35 17,33 12,23 20,22" fill="white" stroke="black" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    document.body.appendChild(c);
  }
  let b = document.getElementById('wc-subtitle');
  if (!b) {
    b = document.createElement('div'); b.id = 'wc-subtitle';
    b.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:2147483646;text-align:center;padding:14px 24px;background:rgba(12,16,22,0.82);color:#fff;font-family:-apple-system,"Segoe UI",Roboto,sans-serif;font-size:19px;font-weight:500;letter-spacing:.2px;transition:opacity .3s;pointer-events:none;opacity:0';
    document.body.appendChild(b);
  }
  window.__wcMoveCursor = (x, y) => { c.style.left = (x - 2) + 'px'; c.style.top = (y - 2) + 'px'; };
  window.__wcCaption = (t) => { b.textContent = t || ''; b.style.opacity = t ? '1' : '0'; };
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
    if (clearAt > 0 && i < drive.length - 1) { await sleep(clearAt); await cdp.eval(`window.__wcCaption('')`).catch(() => {}); }
  }
  const rest = durations.totalS * 1000 - (Date.now() - t0);
  if (rest > 0) await sleep(rest);
  return (Date.now() - t0) / 1000;
}

async function main() {
  const cdp = await CDP.connect('first');
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
  const captureStart = Date.now();
  await cdp.eval(OVERLAY_JS);
  await sleep(500);
  const driveStart = Date.now();
  await runDrive(cdp, report);
  await sleep(400);
  ff.kill('SIGINT');                 // clean ffmpeg finalize
  await new Promise(r => ff.on('exit', r));
  const failures = report.filter(r => !r.ok);
  if (failures.length) { console.error(`DRIVE HAD ${failures.length} ERRORS — do not ship. Re-roll.`); process.exit(1); }
  const lead = (driveStart - captureStart + 500) / 1000;
  const trimmed = path.join(dir, `${base}-trimmed.mp4`);
  execFileSync('ffmpeg', ['-y', '-ss', lead.toFixed(2), '-i', raw, '-c', 'copy', trimmed]);
  const narration = path.join(dir, `${base}-full-narration-v1.0.mp3`);
  const final = path.join(dir, `${base}-v1.0.mp4`);
  execFileSync('ffmpeg', ['-y', '-i', trimmed, '-i', narration, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-map', '0:v', '-map', '1:a', '-shortest', final]);
  const probe = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height,r_frame_rate:format=duration', '-of', 'json', final]).toString();
  console.log('FINAL:', final, probe);
}

main().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
