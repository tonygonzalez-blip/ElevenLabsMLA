// compositor.mjs — external visual compositor for training videos.
//
// Reads the clean capture (no injected graphics) + the authoritative event log + the phrase
// transcript, and renders every instructional graphic OUTSIDE the application:
//   - cursor (drawn from the SAME pointer path that drove the real input)
//   - click ring synchronized to the real mouse-press frame
//   - numbered callouts ①–⑦ anchored to logged target rects
//   - highlights anchored to logged rects, gone the instant their target is gone
//   - phrase-level captions (compact card, <=2 lines) from the immutable narration
//   - editorial camera punch-ins (crop+scale, eased)
//   - completion treatment + visual fade
// then muxes the IMMUTABLE approved audio via stream copy (-c:a copy, no -shortest truncation).
//
// Approach: build a per-frame SVG overlay + a per-frame crop/scale plan, rasterize the overlay
// to a transparent PNG sequence, and run ONE final ffmpeg graph:
//   [capture] -> per-frame crop/zoom (sent as a zoompan-free scale using a filtergraph script) ->
//   overlay PNG sequence -> fade -> single H.264 encode; audio stream-copied from the master.
//
// To keep the camera exact and simple, the crop/scale is baked into the overlay compositing by
// pre-rendering each output frame from (a) the captured frame cropped+scaled and (b) the overlay.
// We render frames with node (SVG->PNG via ffmpeg/librsvg) and assemble. This avoids all app-DOM
// injection and gives frame-accurate control.
//
// Usage: node production/compositor.mjs production/lessons/WC-00-03.json

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync, spawn } from 'node:child_process';

const lessonPath = process.argv[2];
if (!lessonPath) { console.error('usage: node compositor.mjs <lesson.json>'); process.exit(2); }
const L = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
const repoRoot = path.resolve(path.dirname(path.resolve(lessonPath)), '../..');
const outDir = path.join(repoRoot, 'production/out');
const workDir = path.join(outDir, `${L.lesson}-frames`);
const events = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-events.json`), 'utf8'));
const transcript = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-transcript.json`), 'utf8'));
const capture = events.rawFile;
const audio = path.join(repoRoot, L.audioMaster);

const FPS = 30, W = 1920, H = 1080;
const offset = events.captureOffsetS;             // captureTime = audioTime + offset
if (offset == null) { console.error('event log missing captureOffsetS (record first)'); process.exit(1); }
const audioDur = transcript.audioDurationS;
const TAIL_S = 0.4;                                // visual continues past audio (spec: 300-500ms)
const totalOut = audioDur + TAIL_S;
const nFrames = Math.round(totalOut * FPS);

const CIRC = ['①', '②', '③', '④', '⑤', '⑥', '⑦'];

// ---- pointer path sampler (audio time) ----
const ptr = events.pointer.map(p => ({ t: p.t, x: p.x, y: p.y }));  // p.t already audio time (t0=drive start)
function pointerAt(t) {
  if (t <= ptr[0].t) return [ptr[0].x, ptr[0].y];
  for (let i = 1; i < ptr.length; i++) {
    if (t <= ptr[i].t) {
      const a = ptr[i - 1], b = ptr[i], u = (t - a.t) / ((b.t - a.t) || 1);
      return [a.x + (b.x - a.x) * u, a.y + (b.y - a.y) * u];
    }
  }
  return [ptr[ptr.length - 1].x, ptr[ptr.length - 1].y];
}

// ---- click events (real press times) ----
const clicks = events.ops.filter(o => o.op === 'click' && o.pressT != null)
  .map(o => ({ t: o.pressT, x: o.point[0], y: o.point[1] }));

// ---- camera (crop rect at output time) via keyframe interpolation ----
const cam = L.compositor.camera.slice().sort((a, b) => a.t - b.t);
const easeInOut = u => u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
function cameraAt(t) {
  let k0 = cam[0], k1 = cam[cam.length - 1];
  for (let i = 1; i < cam.length; i++) { if (t <= cam[i].t) { k0 = cam[i - 1]; k1 = cam[i]; break; } }
  let z, cx, cy;
  if (t <= k0.t) { z = k0.z; cx = k0.cx; cy = k0.cy; }
  else if (t >= k1.t) { z = k1.z; cx = k1.cx; cy = k1.cy; }
  else { const u = k1.ease ? easeInOut((t - k0.t) / (k1.t - k0.t)) : (t - k0.t) / (k1.t - k0.t);
    z = k0.z + (k1.z - k0.z) * u; cx = k0.cx + (k1.cx - k0.cx) * u; cy = k0.cy + (k1.cy - k0.cy) * u; }
  const cw = W / z, ch = H / z;
  let x = cx - cw / 2, y = cy - ch / 2;
  x = Math.max(0, Math.min(W - cw, x)); y = Math.max(0, Math.min(H - ch, y));
  return { x, y, w: cw, h: ch, z };
}

// ---- rect anchors from the event log (screen coords) ----
function rectByKey(key) {
  if (key.startsWith('screen:')) { const [x, y] = key.slice(7).split(',').map(Number); return { x, y, w: 0, h: 0, point: true }; }
  // literal screen-space rect, usable by highlights and callouts: "rect:x,y,w,h"
  if (key.startsWith('rect:')) { const [x, y, w, h] = key.slice(5).split(',').map(Number); return { x, y, w, h }; }
  // union of every item rect in a logged log-rects group: "union:<groupKey>"
  if (key.startsWith('union:')) {
    const items = events.rects[key.slice(6)]?.items; if (!items) return null;
    const rs = Object.values(items).map(i => i.rect).filter(Boolean);
    if (!rs.length) return null;
    const x0 = Math.min(...rs.map(r => r.x)), y0 = Math.min(...rs.map(r => r.y));
    return { x: x0, y: y0, w: Math.max(...rs.map(r => r.x + r.w)) - x0, h: Math.max(...rs.map(r => r.y + r.h)) - y0 };
  }
  if (key.includes('.')) { const [g, item] = key.split('.'); return events.rects[g]?.items?.[item]?.rect; }
  return events.rects[key]?.rect;
}

// map a screen point/rect into the current camera frame (output pixel space)
function toFrame(px, py, camr) { return [ (px - camr.x) / camr.w * W, (py - camr.y) / camr.h * H ]; }
function rectToFrame(r, camr) {
  const [x, y] = toFrame(r.x, r.y, camr);
  return { x, y, w: r.w / camr.w * W, h: r.h / camr.h * H };
}

// ---- caption lookup (phrase active at output time) ----
function captionAt(t) {
  // clear captions before the completion treatment
  if (t >= L.compositor.captionsBurnClearAt) return null;
  const p = transcript.phrases.find(p => t >= p.startS && t < p.endS);
  return p ? p.text : null;
}
function wrap2(text, maxChars = 52) {
  const words = text.split(' '); const lines = [''];
  for (const w of words) {
    if ((lines[lines.length - 1] + ' ' + w).trim().length <= maxChars || lines[lines.length - 1] === '') lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim();
    else lines.push(w);
  }
  if (lines.length > 2) { // force 2 lines: rebalance
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  }
  return lines;
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---- SVG overlay for one output frame ----
function overlaySVG(t, camr) {
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  // highlights (only while their anchor rect is valid AND its owning menu is on screen per timing)
  for (const hl of L.compositor.highlights) {
    if (t < hl.from || t >= hl.to) continue;
    const r = rectByKey(hl.anchor); if (!r || r.point) continue;
    const fr = rectToFrame(r, camr);
    if (fr.x + fr.w < 0 || fr.x > W || fr.y + fr.h < 0 || fr.y > H) continue;
    const appear = Math.min(1, (t - hl.from) / 0.28);
    const pad = 4;
    s += `<rect x="${(fr.x - pad).toFixed(1)}" y="${(fr.y - pad).toFixed(1)}" width="${(fr.w + 2 * pad).toFixed(1)}" height="${(fr.h + 2 * pad).toFixed(1)}" rx="7" fill="none" stroke="${hl.color || '#f59e0b'}" stroke-width="${(2.2).toFixed(1)}" opacity="${(appear).toFixed(2)}"/>`;
  }
  // keystroke chips: each genuine key event from the log shows a small chip bottom-right ~1.2s
  const keyEvents = (events.keys || []).filter(k => t >= k.t && t < k.t + 1.2);
  keyEvents.slice(-2).forEach((k, i) => {
    const a = Math.min(1, (t - k.t) / 0.15) * (k.t + 1.2 - t < 0.25 ? (k.t + 1.2 - t) / 0.25 : 1);
    const label = k.label || (k.keys || []).join(' ');
    const cw = Math.max(84, label.length * 15 + 30), chx = W - cw - 48, chy = H - 190 - i * 52;
    s += `<rect x="${chx}" y="${chy}" width="${cw}" height="40" rx="9" fill="#0c1016" opacity="${(0.88 * a).toFixed(2)}"/>`;
    s += `<text x="${chx + cw / 2}" y="${chy + 27}" font-family="DejaVu Sans" font-size="21" font-weight="600" fill="#fff" text-anchor="middle" opacity="${a.toFixed(2)}">${esc(label)}</text>`;
  });
  // callouts (numbered badge beside the anchor)
  for (const co of L.compositor.callouts) {
    if (t < co.from || t >= co.to) continue;
    const r = rectByKey(co.anchor); if (!r) continue;
    const fr = r.point ? { x: toFrame(r.x, r.y, camr)[0], y: toFrame(r.x, r.y, camr)[1], w: 0, h: 0 } : rectToFrame(r, camr);
    let bx, by;
    const place = co.place || 'left';
    if (place === 'below-left') { bx = fr.x - 6; by = fr.y + fr.h + 20; }
    else if (place === 'left' || place === 'left-top') { bx = fr.x - 52; by = fr.y + (place === 'left-top' ? 14 : fr.h / 2); }
    else if (place === 'right') { bx = fr.x + fr.w + 40; by = fr.y + fr.h / 2; }
    else { bx = fr.x; by = fr.y; } // 'at'
    bx = Math.max(22, Math.min(W - 22, bx)); by = Math.max(22, Math.min(H - 22, by));
    const appear = Math.min(1, (t - co.from) / 0.25);
    s += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="15" fill="#f59e0b" opacity="${appear.toFixed(2)}"/>`;
    s += `<text x="${bx.toFixed(1)}" y="${(by + 6).toFixed(1)}" font-family="DejaVu Sans" font-size="19" font-weight="700" fill="#1a1206" text-anchor="middle" opacity="${appear.toFixed(2)}">${co.n}</text>`;
  }
  // caption card (compact, bottom-center, <=2 lines)
  const cap = captionAt(t);
  if (cap) {
    const lines = wrap2(cap);
    const fontSize = 27, lh = 36, padX = 26, padY = 16;
    const longest = Math.max(...lines.map(l => l.length));
    const cardW = Math.min(W - 220, Math.max(340, longest * 15 + padX * 2));
    const cardH = lines.length * lh + padY * 2 - 6;
    const cardX = (W - cardW) / 2, cardY = H - cardH - 54;
    s += `<rect x="${cardX.toFixed(1)}" y="${cardY.toFixed(1)}" width="${cardW.toFixed(1)}" height="${cardH.toFixed(1)}" rx="12" fill="#0c1016" opacity="0.9"/>`;
    lines.forEach((ln, i) => {
      s += `<text x="${(W / 2).toFixed(1)}" y="${(cardY + padY + lh * (i + 1) - 8).toFixed(1)}" font-family="DejaVu Sans" font-size="${fontSize}" font-weight="500" fill="#ffffff" text-anchor="middle">${esc(ln)}</text>`;
    });
  }
  // click ring (140-180ms at the real press point)
  for (const c of clicks) {
    const dt = t - c.t;
    if (dt < 0 || dt > 0.17) continue;
    const [fx, fy] = toFrame(c.x, c.y, camr);
    const u = dt / 0.17;
    const rr = 6 + u * 22;
    s += `<circle cx="${fx.toFixed(1)}" cy="${fy.toFixed(1)}" r="${rr.toFixed(1)}" fill="none" stroke="#2563eb" stroke-width="${(2.6 * (1 - u) + 0.6).toFixed(2)}" opacity="${(1 - u).toFixed(2)}"/>`;
  }
  // cursor (from the same path that drove real input)
  const [px, py] = pointerAt(t);
  const [cxp, cyp] = toFrame(px, py, camr);
  const sc = 1.0; // 22px pointer at 1080p
  s += `<g transform="translate(${cxp.toFixed(1)},${cyp.toFixed(1)}) scale(${sc})">`
    + `<path d="M0,0 L0,15.5 L4.4,12 L7.2,18.5 L9.4,17.6 L6.6,11.3 L12,10.8 Z" fill="#ffffff" stroke="#111" stroke-width="1.1" stroke-linejoin="round"/></g>`;
  // completion treatment — card auto-sizes to its text (fixed 470px truncated long titles);
  // optional second line from lesson JSON `completion.stamp` (verification stamp)
  const comp = L.compositor.completion;
  if (comp && t >= comp.from) {
    const a = Math.min(1, (t - comp.from) / 0.4);
    const titleFS = 26, stampFS = 18;
    const textW = Math.ceil(Math.max(comp.text.length * titleFS * 0.63, comp.stamp ? comp.stamp.length * stampFS * 0.61 : 0));
    const cw = Math.min(W - 160, 88 + textW + 34), ch = comp.stamp ? 118 : 84;
    const cx = (W - cw) / 2, cy = (H - ch) / 2;
    s += `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="16" fill="#0c1016" opacity="${(0.92 * a).toFixed(2)}"/>`;
    s += `<circle cx="${cx + 54}" cy="${cy + ch / 2}" r="17" fill="none" stroke="#22c55e" stroke-width="3" opacity="${a.toFixed(2)}"/>`;
    s += `<path d="M${cx + 46},${cy + ch / 2} l6,7 l12,-15" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="${a.toFixed(2)}"/>`;
    const titleY = comp.stamp ? cy + 47 : cy + ch / 2 + 8;
    s += `<text x="${cx + 88}" y="${titleY}" font-family="DejaVu Sans" font-size="${titleFS}" font-weight="600" fill="#fff" opacity="${a.toFixed(2)}">${esc(comp.text)}</text>`;
    if (comp.stamp) s += `<text x="${cx + 88}" y="${cy + 82}" font-family="DejaVu Sans" font-size="${stampFS}" font-weight="400" fill="#9fb0c0" opacity="${a.toFixed(2)}">${esc(comp.stamp)}</text>`;
  }
  s += `</svg>`;
  return s;
}

// ---- camera as a zoompan expression (one pass, eased between keyframes) ----
// crop can't animate w/h (evaluated once), so we drive a per-frame zoom+pan with zoompan.
// Time base inside zoompan is the output frame counter `on`, so t = on/FPS.
function camExpr(field) {
  const T = `(on/${FPS})`;
  let expr = String(cam[cam.length - 1][field].toFixed(3));
  for (let i = cam.length - 1; i >= 1; i--) {
    const a = cam[i - 1], b = cam[i];
    const t0 = a.t, t1 = b.t, v0 = a[field], v1 = b[field];
    const u = `((${T}-${t0})/${(t1 - t0).toFixed(6)})`;
    const e = b.ease ? `if(lt(${u}\\,0.5)\\,2*${u}*${u}\\,1-pow(-2*${u}+2\\,2)/2)` : u;
    const val = `(${v0}+(${(v1 - v0).toFixed(6)})*(${e}))`;
    expr = `if(lt(${T}\\,${t1})\\,if(lt(${T}\\,${t0})\\,${v0}\\,${val})\\,${expr})`;
  }
  return expr;
}
const zExpr = camExpr('z'), cxExpr = camExpr('cx'), cyExpr = camExpr('cy');
// zoompan: zoom>=1; x,y are the crop's TOP-LEFT IN INPUT PIXELS of an (iw/zoom)x(ih/zoom)
// window (verified empirically with a coordinate-grid test pattern) — NOT coordinates in the
// zoom-scaled plane. The earlier scaled-plane formula (cx*zoom - W/2) therefore panned the
// camera (z-1)*cw/2-ish too far right/down at off-center framings, which misregistered every
// overlay inside zoomed shots. Mirror cameraAt()'s source-space math exactly:
//   x = cx - (W/z)/2, clamped to [0, W - W/z]  (same for y with H).
const zoomE = `max(1\\,${zExpr})`;
const panX = `clip((${cxExpr})-(${W}/2)/zoom\\,0\\,iw-iw/zoom)`;
const panY = `clip((${cyExpr})-(${H}/2)/zoom\\,0\\,ih-ih/zoom)`;

// ---- render ----
fs.rmSync(workDir, { recursive: true, force: true });
fs.mkdirSync(workDir, { recursive: true });
const camDir = path.join(workDir, 'cam'), ovDir = path.join(workDir, 'ov');
fs.mkdirSync(camDir); fs.mkdirSync(ovDir);
console.log(`compositing ${nFrames} frames (${totalOut.toFixed(2)}s @ ${FPS}fps)...`);

// Pass A (ONE ffmpeg): apply the eased camera zoom+pan to the capture -> cam PNG sequence.
console.log('  pass A: camera zoom+pan...');
execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-ss', offset.toFixed(3), '-i', capture,
  '-vf', `fps=${FPS},zoompan=z='${zoomE}':x='${panX}':y='${panY}':d=1:s=${W}x${H}:fps=${FPS}`,
  '-frames:v', String(nFrames), '-start_number', '0', path.join(camDir, 'c%05d.png')], { stdio: ['ignore', 'ignore', 'inherit'] });

// Pass A2: truthful loading-cut. A real navigation paints progressively; the spec forbids
// partial-render frames in the instructional timeline. For each nav, freeze the first fully
// stable destination frame across the load window [press+0.15s, stableT] so the learner never
// sees a half-painted page. This edits the VIDEO only — the website and audio are untouched.
const edits = { freezes: [] };
const idxPath = i => path.join(camDir, `c${String(i).padStart(5, '0')}.png`);
for (const key of Object.keys(events.stability)) {
  const st = events.stability[key];
  if (st.navPressT == null || st.stableT == null) continue;
  const holdFrom = st.navPressT + 0.15, holdTo = st.stableT;
  const stableIdx = Math.min(nFrames - 1, Math.round(st.stableT * FPS));
  const f0 = Math.max(0, Math.round(holdFrom * FPS)), f1 = Math.min(nFrames - 1, Math.round(holdTo * FPS));
  const stableBuf = fs.readFileSync(idxPath(stableIdx));
  for (let f = f0; f <= f1; f++) fs.writeFileSync(idxPath(f), stableBuf);
  edits.freezes.push({ key, fromS: +holdFrom.toFixed(3), toS: +holdTo.toFixed(3), navPressT: st.navPressT, stableT: st.stableT });
  console.log(`    loading-cut ${key}: froze ${f1 - f0 + 1} frames [${holdFrom.toFixed(2)}-${holdTo.toFixed(2)}s]`);
}
fs.writeFileSync(path.join(outDir, `${L.lesson}-edits.json`), JSON.stringify(edits, null, 2));

// Pass B: rasterize each overlay SVG -> transparent PNG (output space), parallel worker pool.
console.log('  pass B: rasterize overlays...');
for (let f = 0; f < nFrames; f++) {
  const t = f / FPS;
  fs.writeFileSync(path.join(ovDir, `s${String(f).padStart(5, '0')}.svg`), overlaySVG(t, cameraAt(t)));
}
const WORKERS = 8;
let next = 0, active = 0, done = 0;
await new Promise((resolve, reject) => {
  const pump = () => {
    while (active < WORKERS && next < nFrames) {
      const f = next++; active++;
      const idx = String(f).padStart(5, '0');
      const p = spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y',
        '-i', path.join(ovDir, `s${idx}.svg`), path.join(ovDir, `o${idx}.png`)], { stdio: 'ignore' });
      p.on('exit', (code) => {
        active--; done++;
        if (code !== 0) return reject(new Error(`overlay raster failed at frame ${f}`));
        if (done % 400 === 0) console.log(`    rasterized ${done}/${nFrames}`);
        if (done === nFrames) resolve(); else pump();
      });
    }
  };
  pump();
});

// Pass C (ONE ffmpeg): composite overlay over camera frames, end fade, final H.264 encode.
console.log('  pass C: composite + fade + encode...');
const fadeFrames = L.compositor.completion?.fadeOutFrames || 10;
const fadeStartS = (nFrames - fadeFrames) / FPS;
const silentVideo = path.join(outDir, `${L.lesson}-video.mp4`);
execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y',
  '-framerate', String(FPS), '-i', path.join(camDir, 'c%05d.png'),
  '-framerate', String(FPS), '-i', path.join(ovDir, 'o%05d.png'),
  '-filter_complex', `[0:v][1:v]overlay=0:0,fade=t=out:st=${fadeStartS.toFixed(3)}:d=${(fadeFrames / FPS).toFixed(3)}[o]`,
  '-map', '[o]', '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', String(FPS),
  '-movflags', '+faststart', silentVideo], { stdio: ['ignore', 'ignore', 'inherit'] });

const finalOut = path.join(path.dirname(audio), `${L.output || L.lesson + '-v1.1'}.mp4`);
// stream-copy audio (NO transcode, NO -shortest); video is longer than audio by TAIL_S
execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', silentVideo, '-i', audio,
  '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a', 'copy', '-movflags', '+faststart', finalOut]);

console.log(`FINAL: ${finalOut}`);
console.log(`  video frames: ${nFrames} (${totalOut.toFixed(2)}s), audio master stream-copied (${audioDur.toFixed(2)}s)`);
