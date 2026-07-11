// qa-scenescan.mjs — flicker/glitch detector for finished lesson videos.
// Principle: in a screen recording, every visual discontinuity must be explainable by an
// intended event — a drive step's action (click, menu, theme flip, navigation) shortly after
// its scheduled start, or the caption clearing just before the next step. Any spike outside
// those windows is a potential flicker/glitch and FAILS the take.
//
// Usage: node qa-scenescan.mjs <folder>/<WC-mm-ll> [threshold]
//   threshold: ffmpeg scene score 0..1 (default 0.05 — sensitive; theme flips score ~0.9)

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const basePath = process.argv[2];
const THRESH = parseFloat(process.argv[3] || '0.05');
if (!basePath) { console.error('usage: node qa-scenescan.mjs <folder>/<WC-mm-ll> [threshold]'); process.exit(2); }
const dir = path.dirname(path.resolve(basePath));
const base = path.basename(basePath);
const durations = JSON.parse(fs.readFileSync(path.join(dir, `${base}-durations.json`), 'utf8'));
const video = path.join(dir, `${base}-v1.0.mp4`);

// Cumulative step starts on the final-video timeline (video t0 == drive t0 after exact trim).
const starts = [];
let acc = 0;
for (const b of durations.blocks) { starts.push(+acc.toFixed(2)); acc += b.stepS; }

// An intended event window: [stepStart - 1.4, stepStart + 5.0].
// The trailing 5s covers cursor travel (<=1.3s), the ensure-menu-open re-click path, the
// click itself, and the app's own render/transition. The leading 1.4s covers the caption
// and highlight fade-out that the driver schedules 1s before the next step.
const explain = (t) => {
  for (let i = 0; i < starts.length; i++) {
    if (t >= starts[i] - 1.4 && t <= starts[i] + 5.0) return `step ${i + 1} (start ${starts[i]}s)`;
  }
  return null;
};

const r = spawnSync('ffmpeg', ['-i', video, '-vf', `select='gt(scene,${THRESH})',metadata=print:file=-`, '-an', '-f', 'null', '-'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const lines = (r.stdout || '').split('\n');
const spikes = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/pts_time:([0-9.]+)/);
  if (!m) continue;
  const s = (lines[i + 1] || '').match(/scene_score=([0-9.]+)/);
  spikes.push({ t: +(+m[1]).toFixed(2), score: s ? +(+s[1]).toFixed(3) : null });
}

let bad = 0;
console.log(`SCENESCAN ${base}: threshold ${THRESH}, ${spikes.length} spike(s)`);
for (const sp of spikes) {
  const why = explain(sp.t);
  if (!why) bad++;
  console.log(`  ${why ? 'ok ' : 'BAD'} @${sp.t}s score ${sp.score} ${why || '— UNEXPLAINED (possible flicker/glitch)'}`);
}
if (bad) { console.error(`FAIL: ${bad} unexplained visual discontinuity(ies). Inspect frames and re-roll.`); process.exit(1); }
console.log('PASS: every visual discontinuity maps to an intended step event.');
