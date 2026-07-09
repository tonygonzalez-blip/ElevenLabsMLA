// render-narration.mjs — ElevenLabs block-by-block narration renderer.
// Voice and model are LOCKED per project decision (PARKED-ITEMS.md resolved #12):
//   voice "WashCentral New" (CDbF7Jxnv3azemv9dXMP), model eleven_v3, 44.1 kHz MP3.
// Never regenerate approved audio: existing sNN.mp3 files are not overwritten without --force.
//
// Usage:
//   node render-narration.mjs <narration.md> [--parse-only] [--force]
// Requires ELEVENLABS_API_KEY in the environment (never echoed, never written to disk).
// Outputs, next to the narration file:
//   WC-<mm>-<ll>-sNN.mp3 (per block), WC-<mm>-<ll>-full-narration-v1.0.mp3 (joined,
//   0.4s tail per block), WC-<mm>-<ll>-durations.json (per-block seconds — drives recording).

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const VOICE_ID = 'CDbF7Jxnv3azemv9dXMP'; // WashCentral New — LOCKED
const MODEL_ID = 'eleven_v3';            // LOCKED
const OUTPUT_FORMAT = 'mp3_44100_128';   // 44.1 kHz MP3
const TAIL_S = 0.4;

const file = process.argv[2];
const parseOnly = process.argv.includes('--parse-only');
const force = process.argv.includes('--force');
if (!file) { console.error('usage: node render-narration.mjs <narration.md> [--parse-only] [--force]'); process.exit(1); }

const md = fs.readFileSync(file, 'utf8');
const dir = path.dirname(path.resolve(file));
const base = path.basename(file).match(/^(WC-[A-Z0-9]+-\d+)/i)?.[1] || path.basename(file).replace(/-narration.*$/, '');

// --- Parse timed blocks: [mm:ss | Step N — target] followed by spoken text ---
const lines = md.split(/\r?\n/);
const blocks = [];
let cur = null;
for (const line of lines) {
  const m = line.match(/^\[(\d{2}:\d{2})\s*\|\s*Step\s+(\d+[a-z]?)\s*[—-]\s*(.*)\]\s*$/);
  if (m) { if (cur) blocks.push(cur); cur = { step: m[2], target: m[3].trim(), text: [] }; continue; }
  if (!cur) continue;
  if (/^#{1,3}\s/.test(line)) { blocks.push(cur); cur = null; continue; }           // next section ends script
  const t = line.trim();
  if (!t) continue;
  if (/^_\[Director:/i.test(t) || /^_\(/.test(t) || /^\*\(/.test(t)) continue;      // director/stage notes are not spoken
  // strip INLINE stage notes too: _(…)_ and _[…]_ segments inside a spoken line
  const clean = t.replace(/_\([^)]*\)_/g, '').replace(/_\[[^\]]*\]_/g, '').trim();
  if (!clean) continue;
  cur.text.push(clean);
}
if (cur) blocks.push(cur);

const spoken = blocks.map(b => ({ ...b, text: b.text.join(' ').replace(/\s+/g, ' ').trim() })).filter(b => b.text);
if (!spoken.length) { console.error('No timed narration blocks found — check the [mm:ss | Step N — …] format.'); process.exit(1); }

console.log(`${base}: ${spoken.length} blocks parsed`);
spoken.forEach((b, i) => {
  const words = b.text.replace(/<break[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const breaks = [...b.text.matchAll(/<break time="([\d.]+)s"\s*\/>/g)].reduce((s, x) => s + parseFloat(x[1]), 0);
  const est = words / (145 / 60) + breaks;
  console.log(`  s${String(i + 1).padStart(2, '0')} step ${b.step} — ${b.target} · ${words}w · est ${est.toFixed(1)}s`);
});
if (parseOnly) process.exit(0);

const KEY = process.env.ELEVENLABS_API_KEY;
if (!KEY) { console.error('ELEVENLABS_API_KEY not set. Set it in the environment, then rerun.'); process.exit(2); }

const ffprobeDur = (p) => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p]).toString().trim());

async function tts(text, outPath) {
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=${OUTPUT_FORMAT}`, {
    method: 'POST',
    headers: { 'xi-api-key': KEY, 'content-type': 'application/json' },
    body: JSON.stringify({ text, model_id: MODEL_ID })
  });
  if (!r.ok) throw new Error(`TTS ${r.status}: ${(await r.text()).slice(0, 300)}`);
  fs.writeFileSync(outPath, Buffer.from(await r.arrayBuffer()));
}

const durations = [];
for (let i = 0; i < spoken.length; i++) {
  const n = String(i + 1).padStart(2, '0');
  const out = path.join(dir, `${base}-s${n}.mp3`);
  if (fs.existsSync(out) && !force) {
    console.log(`  s${n}: exists, keeping (use --force to re-render)`);
  } else {
    process.stdout.write(`  s${n}: rendering… `);
    await tts(spoken[i].text, out);
    console.log('done');
    await new Promise(r => setTimeout(r, 400)); // gentle pacing for the API
  }
  durations.push({ block: `s${n}`, step: spoken[i].step, target: spoken[i].target, audioS: +ffprobeDur(out).toFixed(2), stepS: +(ffprobeDur(out) + TAIL_S).toFixed(2), file: path.basename(out) });
}

// Join with 0.4s tail per block
const listFile = path.join(dir, `${base}-concat.txt`);
const silence = path.join(dir, `${base}-tail.mp3`);
execFileSync('ffmpeg', ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono', '-t', String(TAIL_S), '-q:a', '9', silence]);
fs.writeFileSync(listFile, durations.map(d => `file '${d.file.replace(/'/g, "'\\''")}'\nfile '${path.basename(silence)}'`).join('\n'));
const full = path.join(dir, `${base}-full-narration-v1.0.mp3`);
execFileSync('ffmpeg', ['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c:a', 'libmp3lame', '-ar', '44100', '-b:a', '128k', full], { cwd: dir });
fs.unlinkSync(listFile); fs.unlinkSync(silence);

const total = durations.reduce((s, d) => s + d.stepS, 0);
fs.writeFileSync(path.join(dir, `${base}-durations.json`), JSON.stringify({ base, voice: VOICE_ID, model: MODEL_ID, tailS: TAIL_S, totalS: +total.toFixed(2), blocks: durations }, null, 2));
console.log(`Joined: ${path.basename(full)} · total ${total.toFixed(2)}s (${Math.floor(total / 60)}:${String(Math.round(total % 60)).padStart(2, '0')})`);
console.log('NEXT: update the narration file Settings header to RENDERED with per-step seconds, and spot-check pronunciation before muxing.');
