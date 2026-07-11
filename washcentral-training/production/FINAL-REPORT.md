# Final report — training-video production system (Phase 1) + repository audit (Phase 2)

Branch `fix/wc-00-03-training-production` off `origin/main` @ 2785003. Not merged; nothing deployed.
Date 2026-07-11. Every result below was produced by running the pipeline; no unexecuted test is
reported as passing, and no "complete/verified/passed" claim is made without the associated run.

## 1. Executive summary

Phase 1 replaced the DOM-injected cursor/click prototype with a real-input, externally-composited
production system and re-produced WC-00-03 to the internal-training standard: real browser input,
verified application state, immutable website, and the approved narration stream-copied unchanged.
WC-00-03 v1.1 passes 33/33 machine QA and a human review. Phase 2 audited the repository: the
security posture is clean, the pipeline is the single non-deprecated production path, and one lesson
of ~67 non-doc lessons is complete to standard. The remaining lessons are Incomplete pending
sequential production runs; the primary constraint is scale/time, not a code defect.

## 2. Branch & commit history

- `2785003` merge of PR #4 (base; prior prototype).
- `6b7fa5e` Phase 1: real-input production system + WC-00-03 v1.1 (this branch).
- Phase 2 audit docs committed on the same branch. Draft PR: #6.

## 3. Phase 1 changes

New: `production/engine.mjs`, `production/compositor.mjs`, `production/align-narration.mjs`,
`production/qa-verify.mjs`, `production/README.md`, `production/lessons/WC-00-03.json` +
`-phrases.json`. Delivery: `training/module00-setup/WC-00-03-account-menu-v1.1.mp4` + `.vtt`.
Shot list corrected to v1.1. Details: `production/WC-00-03-PHASE1-REPORT.md`.

## 4. Phase 1 rendered-video results

MP4 (`+faststart`), H.264 1920×1080 exact 30/1 fps yuv420p progressive, 89.10 s; MP3 narration
44.1 kHz mono stream-copied. Visual tail past audio 0.414 s. Ending: captions/cursor/highlights
cleared → "Account Menu — Complete" card → 10-frame fade; audio not faded.

## 5. Audio-integrity verification

Source SHA-256 `aeb0ed6e57d019992be6f11625027e89aebcf6442151e43291c8ea5ecb38e963`. Audio-packet MD5
identical source↔output (`a19062b6…`); packet counts 3395 = 3395. The delivered audio is the
approved bitstream, unchanged and complete. Stream-copied (no transcode); no fallback needed.

## 6. Training-video QA results

Automated: 33/33 (`production/out/WC-00-03-qa-report.json`). Human: reviewed via the timestamped
contact sheet (`production/out/WC-00-03-contact-sheet.png`), transition and end sequences, plus a
muted read-through. Corrections applied before sign-off: callout ② moved clear of the tenant text;
a My-Training emphasis added in the genuinely re-opened menu; a partial-render Command Center frame
during the return nav removed via a loading-cut freeze.

## 7. Reusable architecture implemented

Three layers (real interaction / authoritative event log / external compositor) driven by a
declarative per-lesson JSON. A new lesson needs data (targets, predicates, ops, camera, phrases),
not per-click code. See `production/README.md`.

## 8. Phase 2 repository audit

`production/PHASE2-COMPLETION-INVENTORY.md` classifies every item. Highlights: security clean (no
tracked secrets; env-sourced keys; sign-in helper untracked); the new pipeline is the only
non-deprecated production path; the old x11/Windows recorders are Deprecated (they violate the
immutable-site/audio rules); 71 lessons total — 2 doc-only, 1 complete to standard (WC-00-03 v1.1),
~66 Incomplete pending production, 4 legacy videos Deprecated (must not be reused).

## 9. Remaining project work completed (this run)

Security/credential scan (clean); completion inventory; final report; Phase 1 system + first lesson.

## 10–13. Tests executed / passed / failed / not tested

- Executed & passed: WC-00-03 rehearsal (clean), record (clean, 7/7 real interactions verified),
  machine QA (33/33), narration alignment, audio-integrity comparison, camera/overlay frame QA.
- Failed then corrected: QA checks 5 (audio-presence measure), 25 (pointer step), 14 (menu-interval),
  24 (loading-cut) — all now pass.
- Not tested: the ~66 unproduced lessons (no video rendered yet — not claimed as passing).

## 14. External blockers

Recording-stage availability (Xvfb + Chrome on CDP 9222; proxy port rotates on restart); demo-tenant
credentials required at record time (env, present this session); `ELEVENLABS_API_KEY` only if a
narration block must be re-rendered (e.g. WC-01-03 s08, flagged); scale/time for ~66 sequential
production runs.

## 15. Known limitations

Camera keyframes are hand-authored per lesson (data, not code). Overlay raster is per-frame
(ffmpeg+librsvg); camera and composite are single passes; ~89 s lesson composites in a few minutes.
Trackers still use the old pipeline's stage names and are updated per lesson as it is produced.

## 16. Security findings

No credential/secret exposure in tracked files. Keys are environment-sourced; the sign-in helper and
browser profile are untracked (scratchpad). The engine writes no credentials to logs and signs in
off-camera (QA check 28). No rotation required (nothing leaked).

## 17. Documentation added/updated

`production/README.md`, `production/WC-00-03-PHASE1-REPORT.md`,
`production/PHASE2-COMPLETION-INVENTORY.md`, this report, and the corrected v1.1 shot list.

## 18. Exact remaining work

Produce videos for the ~66 Incomplete lessons through the new system, one at a time — per lesson:
author `lessons/<id>.json` + verbatim `-phrases.json` from the existing shot list; live-verify
targets; `--rehearse` → `--record` → `compositor` → `qa-verify` (33/33) → human review; update the
trackers. Re-produce the 4 Deprecated legacy videos the same way. Optionally remove the deprecated
recorders once no lesson depends on them. None of these is claimed done; only WC-00-03 v1.1 is.
