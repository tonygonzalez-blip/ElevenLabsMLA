// align-narration.mjs — phrase-level alignment of the LOCKED narration master.
// The audio is immutable and is never touched: this tool only LISTENS (ffmpeg silencedetect)
// and produces a transcript with phrase timestamps for the production timeline, plus the
// WebVTT accessibility captions. Phrase text comes from the verbatim phrase manifest.
//
// Method: within each narration block's known window (from the per-step render durations),
// detect silences (the script's <break> tags and the TTS's natural sentence pauses), derive
// voiced segments, and assign phrases to segments in order. If a block has more phrases than
// detected segments, the extra phrases are split proportionally by word count inside their
// segment (accuracy noted in the output as "proportional").
//
// Usage: node production/align-narration.mjs production/lessons/WC-00-03-phrases.json

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const manifestPath = process.argv[2];
if (!manifestPath) { console.error('usage: node align-narration.mjs <phrases.json>'); process.exit(2); }
const man = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audio = path.resolve(path.dirname(path.resolve(manifestPath)), '../../', man.audioMaster);

// ffprobe the master (read-only identity for the report)
const probe = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries',
  'format=duration:stream=codec_name,sample_rate,channels', '-of', 'json', audio]).toString());
const audioDur = parseFloat(probe.format.duration);

// silencedetect across the whole master (read-only decode; the file is not modified);
// the detector reports on stderr. Several sensitivities are run and each block picks the
// one whose voiced-segment count best matches its phrase count.
const detect = (noise, d) => {
  const sd = spawnSync('ffmpeg', ['-hide_banner', '-i', audio, '-af', `silencedetect=noise=${noise}dB:d=${d}`, '-f', 'null', '-'],
    { encoding: 'utf8' }).stderr || '';
  const sil = [];
  let pend = null;
  for (const line of sd.split('\n')) {
    const s = line.match(/silence_start: ([0-9.]+)/);
    const e = line.match(/silence_end: ([0-9.]+)/);
    if (s) pend = parseFloat(s[1]);
    if (e && pend !== null) { sil.push([pend, parseFloat(e[1])]); pend = null; }
  }
  if (pend !== null) sil.push([pend, audioDur]);
  return sil.sort((a, b) => a[0] - b[0]);
};
const SENSITIVITIES = [[-32, 0.28], [-35, 0.24], [-38, 0.2]];
const silenceSets = SENSITIVITIES.map(([n, d]) => detect(n, d));

const words = t => t.split(/\s+/).filter(Boolean).length;

const out = { lesson: man.lesson, audioMaster: man.audioMaster, audioDurationS: +audioDur.toFixed(3), method: 'silencedetect -32dB/0.28s within known block windows; proportional fallback', phrases: [] };

const voicedInWindow = (silList, winStart, winEnd) => {
  const sil = silList.filter(([s, e]) => e > winStart + 0.05 && s < winEnd - 0.05)
    .map(([s, e]) => [Math.max(s, winStart), Math.min(e, winEnd)]);
  const voiced = [];
  let cur = winStart;
  for (const [s, e] of sil) {
    if (s - cur > 0.15) voiced.push([cur, s]);
    cur = Math.max(cur, e);
  }
  if (winEnd - cur > 0.15) voiced.push([cur, winEnd]);
  if (!voiced.length) voiced.push([winStart, winEnd]);
  return voiced;
};

for (const b of man.blocks) {
  const winStart = b.startS, winEnd = Math.min(b.endS, audioDur);
  // pick the sensitivity whose segment count best fits this block's phrase count:
  // exact match wins; otherwise the closest count from above; otherwise the most segments
  const candidates = silenceSets.map(sl => voicedInWindow(sl, winStart, winEnd));
  let voiced = candidates.find(v => v.length === b.phrases.length)
    || candidates.filter(v => v.length > b.phrases.length).sort((a, c) => a.length - c.length)[0]
    || candidates.sort((a, c) => c.length - a.length)[0];

  const ph = b.phrases;
  let cues;
  if (voiced.length >= ph.length) {
    // enough real pauses: assign one phrase per leading segment, merge extras into the last
    cues = ph.map((p, i) => {
      const seg = voiced[Math.min(i, voiced.length - 1)];
      const end = (i === ph.length - 1) ? voiced[voiced.length - 1][1] : seg[1];
      return { ...p, startS: +seg[0].toFixed(3), endS: +end.toFixed(3), timing: 'silence' };
    });
    // if more voiced segments than phrases, stretch each phrase across its share in order
    if (voiced.length > ph.length) {
      cues = ph.map((p, i) => {
        const startSeg = voiced[i];
        const endSeg = (i === ph.length - 1) ? voiced[voiced.length - 1] : voiced[i];
        return { ...p, startS: +startSeg[0].toFixed(3), endS: +endSeg[1].toFixed(3), timing: 'silence' };
      });
    }
  } else {
    // fewer real pauses than phrases: distribute phrases inside voiced spans by word share
    cues = [];
    let vi = 0, spanUsed = 0;
    const totalWords = ph.reduce((s, p) => s + words(p.text), 0);
    const totalVoiced = voiced.reduce((s, [a, z]) => s + (z - a), 0);
    for (const p of ph) {
      const need = (words(p.text) / totalWords) * totalVoiced;
      let start = voiced[vi][0] + spanUsed, remain = need, end = start;
      while (remain > 0 && vi < voiced.length) {
        const avail = voiced[vi][1] - (voiced[vi][0] + spanUsed);
        if (avail >= remain) { end = voiced[vi][0] + spanUsed + remain; spanUsed += remain; remain = 0; }
        else { remain -= avail; vi++; spanUsed = 0; end = vi < voiced.length ? voiced[vi][0] : voiced[voiced.length - 1][1]; }
      }
      cues.push({ ...p, startS: +start.toFixed(3), endS: +Math.min(end, winEnd).toFixed(3), timing: 'proportional' });
    }
  }
  for (const c of cues) out.phrases.push({ block: b.block, ...c });
}

// sanity: monotonic, inside audio
for (let i = 1; i < out.phrases.length; i++)
  if (out.phrases[i].startS < out.phrases[i - 1].startS) { console.error('non-monotonic cues'); process.exit(1); }

const outDir = path.resolve(path.dirname(path.resolve(manifestPath)), '../out');
fs.mkdirSync(outDir, { recursive: true });
const tPath = path.join(outDir, `${man.lesson}-transcript.json`);
fs.writeFileSync(tPath, JSON.stringify(out, null, 2));

// WebVTT (deliverable): phrase-level cues, verbatim text
const ts = s => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = (s % 60).toFixed(3).padStart(6, '0');
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${sec}`;
};
let vtt = 'WEBVTT\n\n';
for (const p of out.phrases) vtt += `${p.id}\n${ts(p.startS)} --> ${ts(p.endS)}\n${p.text}\n\n`;
const vttPath = path.resolve(path.dirname(audio), 'WC-00-03-account-menu-v1.1.vtt');
fs.writeFileSync(vttPath, vtt);

console.log(`transcript: ${tPath}`);
console.log(`vtt:        ${vttPath}`);
for (const p of out.phrases) console.log(`  ${p.block} ${p.id} ${p.startS.toFixed(2)}–${p.endS.toFixed(2)} [${p.timing}] ${p.text.slice(0, 60)}`);
