# Phase 1 implementation report — WC-00-03 training-video production system

Branch: `fix/wc-00-03-training-production` (from `origin/main` @ 2785003). Not merged. Nothing deployed.
Date: 2026-07-11. All results below were produced by actually running the pipeline; nothing is asserted that was not executed.

## Executive summary

The disconnected cursor-and-click prototype was replaced with one authoritative three-layer system
(real CDP interaction → authoritative event log → external compositor). WC-00-03 was re-driven with
genuine browser input, recorded cleanly, and composited externally into
`training/module00-setup/WC-00-03-account-menu-v1.1.mp4` with the approved narration **stream-copied
unchanged**. Machine QA (33/33) and a human review pass both pass.

## Architecture changed

- **Removed** (for this lesson's pipeline): DOM-injected cursor/caption/highlight overlays,
  `sessionStorage` recording state, DOM `.click()` driving, hardcoded pixel targets, per-step fixed
  delays, the no-op stream-copy trim, and audio re-encode (`-c:a aac … -shortest`).
- **Added:** `production/engine.mjs` (real interaction + event log), `production/compositor.mjs`
  (external graphics + loading-cut + single delivery encode + audio stream-copy),
  `production/align-narration.mjs` (phrase alignment + WebVTT from the immutable master),
  `production/qa-verify.mjs` (33 machine checks), and the declarative
  `production/lessons/WC-00-03.json` + verbatim `production/lessons/WC-00-03-phrases.json`.

## Files changed / added

- `production/engine.mjs`, `production/compositor.mjs`, `production/align-narration.mjs`,
  `production/qa-verify.mjs`, `production/README.md`
- `production/lessons/WC-00-03.json`, `production/lessons/WC-00-03-phrases.json`
- `training/module00-setup/WC-00-03-account-menu-v1.1.mp4` (delivery)
- `training/module00-setup/WC-00-03-account-menu-v1.1.vtt` (accessibility captions)
- `training/module00-setup/WC-00-03-account-menu-shotlist.md` (corrected to v1.1)
- `production/out/WC-00-03-qa-report.json`, `production/out/WC-00-03-contact-sheet.png`,
  `production/out/WC-00-03-events.json`, `production/out/WC-00-03-transcript.json`,
  `production/out/WC-00-03-edits.json`
- `tools/qa-scenescan.mjs` (supplementary scene-change diagnostic, retained)

## Commands actually run

`align-narration.mjs` (transcript + VTT) → `engine.mjs --rehearse` (clean) → `engine.mjs --record`
(clean, 7/7 real interactions verified) → `compositor.mjs` (3-pass: zoompan camera, parallel
overlay raster, composite+fade+encode, then audio stream-copy) → `qa-verify.mjs` (33/33). All exit 0.

## Rendered-video results

- Container: MP4, `+faststart`. Video: H.264, 1920×1080, exact 30/1 fps, yuv420p, progressive,
  89.10 s. Audio: MP3 44.1 kHz mono, **stream-copied**.
- Visual tail past audio: 89.10 − 88.686 = 0.414 s (within 300–500 ms). End: captions/cursor/
  highlights cleared, "Account Menu — Complete" card, 10-frame fade. Audio not faded/modified.

## Audio-integrity verification

- Source: `training/module00-setup/WC-00-03-full-narration-v1.0.mp3`
- SHA-256: `aeb0ed6e57d019992be6f11625027e89aebcf6442151e43291c8ea5ecb38e963`
- Audio elementary-stream MD5 — source `a19062b64c4bd0e50c56513d9d6e0d41`, output
  `a19062b64c4bd0e50c56513d9d6e0d41` → **identical**. Packet count 3395 = 3395.
- Conclusion: the delivered audio is the approved bitstream, unchanged, complete. MP3→MP4 was
  stream-copied (supported), so no transcode occurred; no compatibility fallback was needed.

## Real-interaction / synchronization results (from the event log)

Every visible action is a genuine press verified against real application state, preceded by cursor
arrival + a readable hover, inside the live target rect:

| Step | target | press (s) | hover | verified state |
|---|---|---|---|---|
| 2 | avatar | 12.99 | 459 ms | menuOpen |
| 4 | Dark Mode | 44.92 | 385 ms | themeDark |
| 5 | Light Mode | 55.76 | 456 ms | themeLight |
| 6a | inert header (dismiss) | 63.29 | 331 ms | menuClosed |
| 6b | avatar (re-open) | 65.12 | 427 ms | menuOpen |
| 6c | My Training | 66.58 | 446 ms | onAcademy (nav) |
| 7 | Command Center rail | 78.46 | 446 ms | onCommandCenter (nav) |

The menu-visible watch held across the full explanation (14.5–44.3 s). Loading cut by holding the
first stable frame: academyStable 66.73–67.57 s; commandCenterStable 78.61–79.52 s.

## Automated QA — every test executed, pass/fail

33/33 PASS. Full machine report: `production/out/WC-00-03-qa-report.json`. Checks cover format
(1–3), audio integrity + presence + tail (4–6), first-frame cursor (7), click integrity 8–11,
static no-DOM-click / no-hardcoded-coords (12–13), highlight validity 14–15, menu continuity 16,
callouts + close framing 17–18, caption order/timing/lines/readability/occlusion 19–23,
loading-cut 24, motion 25–26, safety 27–31, ending cleanup 32, completion + fade 33.

## Human QA — completed

Reviewed via timestamped contact sheets (`production/out/WC-00-03-contact-sheet.png`) at full frame,
and transition/end sequences; a muted read-through confirmed the visual sequence is understandable
without audio. Findings that were corrected before sign-off: callout ② overlapped the tenant code
(moved clear of the text); no highlight when the narration said "choose My Training" (added a brief
My-Training emphasis in the genuinely re-opened menu); a partial-render Command Center frame during
the return nav (loading-cut freeze added). All demonstrated controls are identifiable; the pointer
never covers the active label; no marketing-style motion.

## Failures corrected during Phase 1

1. Avatar click did not open the menu in-engine — root cause: the menu is a genuine click toggle
   and a `pointerType:'mouse'` field on the press suppressed it; fixed by matching the proven press
   event shape (settle-move + press + release). 2. Audio-presence QA misread the mp3-in-mp4 container
   duration — changed to an audio-packet-count + MD5 comparison. 3. A 96 px pointer step on the long
   final park — increased path sampling density (no step > ~60 px). 4. Partial-render nav frames —
   added the loading-cut freeze and tied QA check 24 to it. 5. Callout ②/My-Training-highlight polish
   (above).

## Remaining limitations

- The camera keyframes are hand-authored per lesson (a deliberate editorial choice); they are data,
  not code, and reused via the same engine.
- The compositor rasterizes overlays per frame via ffmpeg+librsvg (no standalone rasterizer in this
  environment); the camera and final composite are single ffmpeg passes. Runtime for an ~89 s lesson
  is a few minutes.
- The recording stage (Xvfb + headed Chrome on CDP 9222, signed in off-camera) must be up; the
  session's egress proxy port rotates on container restarts and must be re-read when re-launching
  Chrome.

## Commit

Committed to `fix/wc-00-03-training-production` (see branch history). Not merged to the default
branch; nothing deployed.
