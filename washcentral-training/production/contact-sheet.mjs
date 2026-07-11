// contact-sheet.mjs — timestamped review sheet for a produced lesson.
// Samples the final video at every click/key event (+0.6s, when the result is on screen),
// the first/last frames, and evenly-spaced filler, labels each with its timestamp, and tiles
// them into production/out/<LESSON>-contact-sheet.png for the human/visual review pass.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const lessonPath = process.argv[2];
const L = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
const repoRoot = path.resolve(path.dirname(path.resolve(lessonPath)), '../..');
const outDir = path.join(repoRoot, 'production/out');
const events = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-events.json`), 'utf8'));
const video = path.join(repoRoot, path.dirname(L.audioMaster), `${L.output || L.lesson + '-v1.1'}.mp4`);
const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video]).toString());

const marks = new Set([0.2, +(dur - 0.15).toFixed(2)]);
for (const o of events.ops) {
  if (o.pressT != null) marks.add(+Math.min(dur - 0.2, o.pressT + 0.6).toFixed(2));
  if (o.keyT != null) marks.add(+Math.min(dur - 0.2, o.keyT + 0.6).toFixed(2));
}
let ts = [...marks].sort((a, b) => a - b);
// fill to a 4-column grid with evenly spaced samples
const targetN = Math.max(12, Math.ceil(ts.length / 4) * 4);
for (let i = 1; ts.length < targetN && i < 40; i++) {
  const t = +((dur * i) / (targetN + 1)).toFixed(2);
  if (![...ts].some(x => Math.abs(x - t) < 1.2)) ts.push(t);
}
ts = ts.sort((a, b) => a - b).slice(0, 24);

const tmp = path.join(outDir, `${L.lesson}-cs-tmp`);
fs.rmSync(tmp, { recursive: true, force: true }); fs.mkdirSync(tmp, { recursive: true });
ts.forEach((t, i) => {
  execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-ss', String(t), '-i', video,
    '-vf', `scale=640:360,drawbox=x=0:y=0:w=130:h=28:color=black@0.75:t=fill,drawtext=text='t\\=${t}s':x=8:y=5:fontsize=18:fontcolor=white`,
    '-frames:v', '1', path.join(tmp, `m${String(i).padStart(2, '0')}.png`)]);
});
const cols = 4, rows = Math.ceil(ts.length / cols);
const layout = ts.map((_, i) => `${(i % cols) * 642}_${Math.floor(i / cols) * 362}`).join('|');
const inputs = ts.flatMap((_, i) => ['-i', path.join(tmp, `m${String(i).padStart(2, '0')}.png`)]);
const sheet = path.join(outDir, `${L.lesson}-contact-sheet.png`);
execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...inputs,
  '-filter_complex', `xstack=inputs=${ts.length}:layout=${layout}:fill=black`, '-frames:v', '1', sheet]);
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`contact sheet: ${sheet} (${ts.length} frames @ ${ts.join(', ')})`);
