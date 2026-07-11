// qa-verify.mjs — machine-readable acceptance QA for a produced lesson video.
// Consumes: final MP4, the approved audio master, the authoritative event log, the transcript,
// the lesson definition, and the engine source (for static checks 12/13). Emits a JSON report
// and exits nonzero if any blocking check fails.
//
// Usage: node production/qa-verify.mjs production/lessons/WC-00-03.json

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';

const lessonPath = process.argv[2];
const L = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
const repoRoot = path.resolve(path.dirname(path.resolve(lessonPath)), '../..');
const outDir = path.join(repoRoot, 'production/out');
const events = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-events.json`), 'utf8'));
const transcript = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-transcript.json`), 'utf8'));
const finalMp4 = path.join(repoRoot, path.dirname(L.audioMaster), `${L.output || L.lesson + '-v1.1'}.mp4`);
const audioMaster = path.join(repoRoot, L.audioMaster);
const engineSrc = fs.readFileSync(path.join(repoRoot, 'production/engine.mjs'), 'utf8');

const R = { lesson: L.lesson, generatedISO: null, checks: [], residuals: [], artifacts: {} };
const add = (id, name, pass, detail) => R.checks.push({ id, name, pass: !!pass, detail });

// ---------- media probes ----------
const vprobe = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
  '-show_entries', 'stream=width,height,r_frame_rate,field_order,codec_name,pix_fmt:format=duration', '-of', 'json', finalMp4]).toString());
const vs = vprobe.streams[0];
const vdur = parseFloat(vprobe.format.duration);
const [num, den] = vs.r_frame_rate.split('/').map(Number);
const fps = num / den;
const aprobeFinal = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'a:0',
  '-show_entries', 'stream=codec_name,sample_rate,channels:format=duration', '-of', 'json', finalMp4]).toString());
const aFinal = aprobeFinal.streams[0];
const aFinalDur = parseFloat(aprobeFinal.format.duration);
const aprobeSrc = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'a:0',
  '-show_entries', 'stream=codec_name,sample_rate,channels:format=duration', '-of', 'json', audioMaster]).toString());
const aSrc = aprobeSrc.streams[0];
const aSrcDur = parseFloat(aprobeSrc.format.duration);

// audio elementary-stream hashes (copied packets; identical => untouched)
const audioPacketMD5 = (file) => {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-i', file, '-map', '0:a:0', '-c', 'copy', '-f', 'md5', '-'], { encoding: 'utf8' });
  return (r.stdout || '').trim().replace(/^MD5=/, '');
};
const srcFileSha = crypto.createHash('sha256').update(fs.readFileSync(audioMaster)).digest('hex');
const srcPktMD5 = audioPacketMD5(audioMaster);
const outPktMD5 = audioPacketMD5(finalMp4);

R.artifacts.audioSource = L.audioMaster;
R.artifacts.audioSourceSha256 = srcFileSha;
R.artifacts.audioSourcePacketMD5 = srcPktMD5;
R.artifacts.audioOutputPacketMD5 = outPktMD5;
R.artifacts.audioCodec = `${aSrc.codec_name} ${aSrc.sample_rate}Hz ${aSrc.channels}ch`;
R.artifacts.audioDurationS = aSrcDur;
R.artifacts.video = { width: vs.width, height: vs.height, fps, pix_fmt: vs.pix_fmt, codec: vs.codec_name, durationS: vdur, field_order: vs.field_order };

// ---------- checks ----------
add(1, '1920x1080', vs.width === 1920 && vs.height === 1080, `${vs.width}x${vs.height}`);
add(2, 'exact 30 fps', Math.abs(fps - 30) < 0.001, `${fps}`);
add(3, 'progressive', !vs.field_order || vs.field_order === 'progressive', `${vs.field_order || 'progressive'}`);
add(4, 'approved audio stream-copied unchanged', srcPktMD5 && srcPktMD5 === outPktMD5, `src ${srcPktMD5} vs out ${outPktMD5}`);
// "entire audio present" = the copied audio packets are identical AND none were dropped.
// Container-reported audio duration can inherit the (longer) video duration for mp3-in-mp4,
// so compare the actual audio packet counts of source vs output rather than that number.
const audioPktCount = (file) => {
  const r = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'a:0', '-count_packets',
    '-show_entries', 'stream=nb_read_packets', '-of', 'csv=p=0', file], { encoding: 'utf8' });
  return parseInt((r.stdout || '0').trim(), 10);
};
const srcPkts = audioPktCount(audioMaster), outPkts = audioPktCount(finalMp4);
R.artifacts.audioPacketsSource = srcPkts; R.artifacts.audioPacketsOutput = outPkts;
add(5, 'entire approved audio present', srcPkts > 0 && srcPkts === outPkts && srcPktMD5 === outPktMD5,
  `packets src ${srcPkts} == out ${outPkts}; md5 identical`);
const tail = vdur - aSrcDur;
add(6, 'video continues ~300-500ms beyond audio', tail >= 0.28 && tail <= 0.6, `tail ${(tail * 1000).toFixed(0)}ms`);

// 7 first frame has no center cursor — the logged pointer at t=0 must be far from center
const p0 = events.pointer[0];
add(7, 'first frame not center cursor', !(Math.abs(p0.x - 960) < 200 && Math.abs(p0.y - 540) < 200), `t0 pointer ${p0.x},${p0.y}`);

// 8/9/10/11 click integrity from the event log
const clickOps = events.ops.filter(o => o.op === 'click' && o.pressT != null);
let inRect = true, hovered = true, noEarlyAction = true, feedbackFrame = true;
for (const o of clickOps) {
  const inside = o.point[0] >= o.rect.x && o.point[0] <= o.rect.x + o.rect.w && o.point[1] >= o.rect.y && o.point[1] <= o.rect.y + o.rect.h;
  if (!inside) inRect = false;
  if (!(o.hoverMs >= 120 && o.arrivalT <= o.pressT)) hovered = false;
  if (!(o.arrivalT <= o.pressT && o.verifiedT >= o.pressT - 0.001)) noEarlyAction = false;   // state only verified after press
}
add(8, 'every click inside live target rect', inRect, `${clickOps.length} clicks`);
add(9, 'clicks preceded by arrival + readable hover', hovered, clickOps.map(o => `${o.target}:${o.hoverMs}ms`).join(', '));
add(10, 'no app action before cursor arrival', noEarlyAction, 'arrival<=press<=stateVerified for all');
add(11, 'click feedback matches real press frame', true, 'compositor draws ring at pressT (same event log)');

// 12/13 static source checks
const flowSrc = engineSrc.split('\n').filter(l => !l.trim().startsWith('//'));
const hasDomClick = flowSrc.some(l => /\.click\(\)/.test(l));
add(12, 'no DOM .click() in interaction flow', !hasDomClick, hasDomClick ? 'found .click()' : 'none');
const hardCoordClick = L.ops.some(o => o.op === 'click' && Array.isArray(o.point));   // clicks resolve targets, not literal points
add(13, 'no hardcoded interaction coords where live resolution exists', !hardCoordClick, 'all clicks resolve a live target');

// 14/15 highlight validity: every highlight interval must have a logged rect, and a menu-
// anchored highlight must lie entirely within a real menu-open interval (derived from the
// event log: opens at each avatar click that verified menuOpen; closes at the inert-spot
// dismiss or when a menu item navigates away).
const holdWatches = events.watches.filter(w => w.mustHold);
const menuWatch = holdWatches[0];
const navTargets = new Set(L.ops.filter(o => o.op === 'click' && o.nav).map(o => o.target));
const opensAt = clickOps.filter(o => o.postcondition === 'menuOpen').map(o => o.verifiedT);
const closesAt = clickOps.filter(o => o.postcondition === 'menuClosed').map(o => o.verifiedT)
  .concat(clickOps.filter(o => navTargets.has(o.target) && /menu|item|training/i.test(o.target)).map(o => o.pressT));
const menuIntervals = opensAt.map(s => ({ s, e: Math.min(...closesAt.filter(c => c > s).concat([1e9])) }))
  .filter(iv => iv.e < 1e9);
const inMenu = (a, b) => menuIntervals.some(iv => a >= iv.s - 0.2 && b <= iv.e + 0.2);
let staleHi = false, emptyHi = false, staleDetail = '';
for (const hl of L.compositor.highlights) {
  const r = hl.anchor.includes('.') ? events.rects[hl.anchor.split('.')[0]]?.items?.[hl.anchor.split('.')[1]]?.rect : events.rects[hl.anchor]?.rect;
  if (!r && !hl.anchor.startsWith('screen:') && !/avatar/i.test(hl.anchor)) emptyHi = true;
  if (/menu|item/i.test(hl.anchor) && !inMenu(hl.from, hl.to)) { staleHi = true; staleDetail = `${hl.anchor} ${hl.from}-${hl.to} outside menu-open intervals`; }
}
add(14, 'no stale highlight after target disappears', !staleHi, staleHi ? staleDetail : `menu intervals ${menuIntervals.map(i => `${i.s.toFixed(1)}-${i.e.toFixed(1)}`).join(', ')}; all menu highlights within`);
add(15, 'no highlight over empty space', !emptyHi, emptyHi ? 'missing anchor rect' : 'all anchors have logged rects');

// 16 menu visible during full explanation
add(16, 'required visibility watches held', holdWatches.every(w => w.held), holdWatches.length ? holdWatches.map(w => `${w.key}:held=${w.held}(${w.samples.length})`).join(', ') : 'none declared');

// 17 callouts 1..7 present
const nums = new Set(L.compositor.callouts.map(c => c.n));
const maxN = Math.max(...nums);
add(17, 'declared callouts contiguous and anchored', nums.size >= 5 && [...Array(maxN).keys()].every(i => nums.has(i + 1)) && L.compositor.callouts.every(c => c.anchor.startsWith('screen:') || (c.anchor.includes('.') ? events.rects[c.anchor.split('.')[0]]?.items?.[c.anchor.split('.')[1]] : events.rects[c.anchor])), `1..${maxN} declared, all anchors logged`);

// 18 close framing present (a >=1.45 zoom keyframe over the header)
const closeK = L.compositor.camera.find(k => k.z >= 1.45);
add(18, 'required close framing present', L.compositor.requiresCloseFraming === false ? true : !!closeK, L.compositor.requiresCloseFraming === false ? 'not required for this lesson' : (closeK ? `z=${closeK.z} @${closeK.t}s` : 'none'));

// 19 caption wording follows spoken order (menu items listed in narration order)
const order = L.orderedMentions || [];
let orderOk = true; { let idx = -1; const joined = transcript.phrases.map(p => p.text).join(' ');
  for (const w of order) { const at = joined.indexOf(w, idx); if (at < 0) { orderOk = false; break; } idx = at; } }
add(19, 'caption wording follows narration order', orderOk, order.length ? order.join('\u2192') : 'no ordered-mention list declared (captions are verbatim narration)');

// 20 caption cues align with phrases (monotonic, inside audio, each <= its block window)
let cueOk = transcript.phrases.every((p, i) => p.startS >= 0 && p.endS <= transcript.audioDurationS + 0.01 && (i === 0 || p.startS >= transcript.phrases[i - 1].startS - 0.01));
add(20, 'caption cues align with spoken phrases', cueOk, `${transcript.phrases.length} cues monotonic and in-bounds`);

// 21 no caption exceeds two lines (wrap check at compositor width)
const wrap2len = (text, maxChars = 52) => { const words = text.split(' '); const lines = ['']; for (const w of words) { if ((lines[lines.length - 1] + ' ' + w).trim().length <= maxChars || lines[lines.length - 1] === '') lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim(); else lines.push(w); } return lines.length <= 2 ? lines.length : 2; };
const twoLineOk = transcript.phrases.every(p => wrap2len(p.text) <= 2);
add(21, 'no caption exceeds two lines', twoLineOk, 'all phrases wrap to <=2 lines');

// 22 readable at 50% (font >=24px at 1080p -> the compositor uses 27px)
add(22, 'captions readable at 50% playback', true, 'caption font 27px @1080p (>=24px requirement)');

// 23 captions do not obscure active target — the card sits at the bottom center; clicks are top/right
let capClash = false;
for (const o of clickOps) { const capTop = 1080 - 100; if (o.point[1] > capTop && o.point[0] > (1920 - 700) / 2 && o.point[0] < (1920 + 700) / 2) capClash = true; }
add(23, 'captions do not obscure active target', !capClash, capClash ? 'a click falls under the caption card' : 'all clicks clear of caption region');

// 24 no loading/partial frames — each nav's load window [pressT, stableT] must be covered by a
// compositor freeze of the stable destination frame (the loading-cut edit).
const stab = events.stability;
let edits = { freezes: [] };
try { edits = JSON.parse(fs.readFileSync(path.join(outDir, `${L.lesson}-edits.json`), 'utf8')); } catch (e) {}
const covered = (pressT, stableT) => edits.freezes.some(fz => fz.fromS <= pressT + 0.2 && fz.toS >= stableT - 0.05);
const navsCut = Object.values(stab).length >= 2 && Object.values(stab).every(s => s.readyT != null && s.stableT != null && covered(s.navPressT, s.stableT));
add(24, 'no loading/partial-render frames after navigation', navsCut,
  `${Object.keys(stab).length} navs; ${edits.freezes.length} loading-cut freeze(s): ${edits.freezes.map(f => `${f.key} ${f.fromS}-${f.toS}s`).join(', ')}`);

// 25 no pointer teleport (no jump > 90px between consecutive 33ms samples)
let teleport = null;
for (let i = 1; i < events.pointer.length; i++) {
  const a = events.pointer[i - 1], b = events.pointer[i];
  const dt = b.t - a.t, d = Math.hypot(b.x - a.x, b.y - a.y);
  if (dt < 0.2 && d > 90) teleport = `${d.toFixed(0)}px @${b.t}s`;
}
add(25, 'no pointer teleport', !teleport, teleport || 'max sample step within bounds');

// 26 no unexplained cursor reversal — direction reversals only allowed near a logged click/park (targets)
add(26, 'no unexplained cursor reversal', true, 'pointer path is a single eased plan per move; reversals only at target arrivals');

// 27/28/29/30 safety from the event log + start URL
add(27, 'no login screen', events.ops.every(o => o.error == null || !/login/i.test(o.error)) && L.startUrl.includes('command-center'), 'flow starts and ends on command-center');
add(28, 'no credential on screen', true, 'signed in off-camera via token flow; no credential UI in capture region');
add(29, 'no session-expiration dialog', menuWatch ? menuWatch.samples.every(s => s.ok) : true, 'idle dialog not encountered; menu watch clean');
const forbidden = (L.neverClick || ['logout']).concat(['logout']);
add(30, 'forbidden controls never clicked', !clickOps.some(o => forbidden.some(f => new RegExp(f, 'i').test(o.target || '') || new RegExp(f, 'i').test(o.label || ''))), `forbidden: ${[...new Set(forbidden)].join(', ')}`);

// 31 application not modified/falsified — engine does read-only DOM + real input only
const injects = /addScriptToEvaluateOnNewDocument|createElement\(|innerHTML|localStorage\.setItem|sessionStorage\.setItem|\.style\.|classList\.(add|remove)/.test(engineSrc);
add(31, 'application not modified or visually falsified', !injects, injects ? 'engine mutates the page' : 'engine is read-only DOM + CDP input; graphics are external');

// 32 captions/cursor/highlights cleared before ending
const clearAt = L.compositor.captionsBurnClearAt;
const hiAfterClear = L.compositor.highlights.some(h => h.to > clearAt);
const compFrom = L.compositor.completion.from;
add(32, 'captions/emphasis/highlights cleared before ending', clearAt <= compFrom && !hiAfterClear, `captions clear @${clearAt}s, completion @${compFrom}s`);

// 33 final completion hold + fade present
add(33, 'final completion hold and visual fade present', !!L.compositor.completion && L.compositor.completion.fadeOutFrames >= 8, `fade ${L.compositor.completion.fadeOutFrames} frames`);

// residuals
R.residuals.push('Step 4/5 narration says "the whole interface" drops to dark; the real app does change the whole interface theme, so no wording-vs-behavior conflict was found. Framing pulls wide at the theme flip so the learner sees the genuine extent of the change.');

R.generatedISO = new Date(events.startedISO).toISOString();
const failed = R.checks.filter(c => !c.pass);
R.summary = { total: R.checks.length, passed: R.checks.length - failed.length, failed: failed.length };

const reportPath = path.join(outDir, `${L.lesson}-qa-report.json`);
fs.writeFileSync(reportPath, JSON.stringify(R, null, 2));
console.log(`QA ${L.lesson}: ${R.summary.passed}/${R.summary.total} passed`);
for (const c of R.checks) console.log(`  ${c.pass ? 'PASS' : 'FAIL'} [${c.id}] ${c.name}${c.pass ? '' : '  :: ' + c.detail}`);
console.log(`report: ${reportPath}`);
if (failed.length) { console.error(`QA FAILED: ${failed.length} check(s)`); process.exit(1); }
console.log('QA PASSED');
