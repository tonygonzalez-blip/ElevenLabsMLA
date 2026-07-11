# Phase 2 — repository completion inventory

Branch `fix/wc-00-03-training-production`. Date 2026-07-11. Compiled from the actual repository
state (file presence, trackers, code), not from aspiration. Classifications:
**Complete+verified · Implemented-unverified · Incomplete · Placeholder · Broken · Deprecated ·
Blocked(external) · Needs-product-decision.**

## A. Security / credential exposure — checked first (top priority)

- **No secrets in tracked files.** Scanned tracked files for credential/key/token patterns and
  literal secret assignments. All hits are legitimate training *content* (password-field UI, masked
  credential-configuration screens, token concepts) or env reads. **Complete+verified.**
- API keys are environment-sourced only: `render-narration.mjs` reads `ELEVENLABS_API_KEY`;
  the sign-in helper reads `WC_DEMO_*` and lives in the untracked scratchpad, never committed.
  No `.env`, browser profile, cookie jar, private key, or credential file is tracked. **Verified.**
- The new engine writes **no** credentials to the event log and signs in off-camera; QA check 28
  asserts no credential UI in the capture region. **Verified for WC-00-03.**

## B. Production system (the reusable pipeline)

| Component | State | Notes |
|---|---|---|
| `production/engine.mjs` (real interaction + event log) | **Complete+verified** | Drove WC-00-03 clean; real CDP input only, read-only DOM, aborts on failed verification. |
| `production/compositor.mjs` (external graphics, loading-cut, stream-copy) | **Complete+verified** | Produced WC-00-03 v1.1; audio bit-identical. |
| `production/align-narration.mjs` (transcript + WebVTT) | **Implemented-unverified beyond WC-00-03** | Adaptive silence alignment; run on 1 lesson. Should be spot-checked per lesson (some blocks fall back to proportional timing). |
| `production/qa-verify.mjs` (33 machine checks) | **Complete+verified** | 33/33 on WC-00-03; exits nonzero on failure. |
| `production/lessons/WC-00-03.json` + `-phrases.json` (declarative lesson) | **Complete+verified** | Template for all future lessons. |
| `tools/qa-scenescan.mjs` | **Complete** (supplementary) | Scene-change diagnostic, retained. |

## C. Deprecated production paths (superseded by section B)

- `tools/record-x11.mjs`, `tools/record-lesson.mjs` — DOM-injected cursor/caption overlays,
  `.click()` driving, storage writes, audio re-encode. **Deprecated.** They contradict the immutable-
  website / immutable-audio rules. Retained for history but should not be used for new lessons; a
  follow-up may remove them once no lesson depends on them.
- `tools/cdp.mjs`, `tools/sweep.mjs` — verification-sweep tooling from the authoring phase.
  **Implemented** (not part of delivery); harmless to keep.
- `tools/cdp-lib.mjs` — still used by the new engine. **Complete+verified.**

## D. Lessons (71 total in `tools/lesson-map.json`)

Aggregate artifact presence: 73 guides, 71 shot lists, 71 narration scripts, 69 durations files,
70 joined narration MP3s; **69 narration tracks RENDERED**. Final videos present: 5 (see below).

| Lesson video state | Count | Classification |
|---|---|---|
| Produced to the **new** internal-training standard (real input + external compositor + 33/33 QA) | **1** (WC-00-03 v1.1) | **Complete+verified** |
| Doc-only by design (no video): WC-00-01 workstation prerequisites, WC-CERT-01 certification exam/matrix | 2 | **Complete** (guide deliverables) |
| Authored + narration RENDERED, **no standard-compliant video yet** | ~66 | **Incomplete** — need a production run through the new system |
| Old prototype/legacy videos (DOM-injection or Windows pipeline) | 4 files: WC-00-03 v1.0, WC-01-01 v1.0 + v2.0, WC-01-02 v1.0 | **Deprecated** — known-bad outputs; must not be reused; re-produce through the new system |

Every non-doc lesson has its guide + shot list + narration script + rendered audio (the inputs the
new pipeline consumes). The remaining work per lesson is: author `lessons/<id>.json` + verbatim
`-phrases.json` from the existing shot list, live-verify targets, rehearse → record → composite →
QA → human-review. This is a **sequential** effort (single recording display) and was **not**
batch-declared complete — only WC-00-03 has actually been rendered and reviewed to standard.

## E. Trackers / documentation

- `00-curriculum.md`, `DISCREPANCIES.md`, `PARKED-ITEMS.md`, `QA-LOG.md`, `RECORDS-CREATED.md` —
  **Implemented**, current as of the July 11 authoring/verify run. They still describe the *old*
  pipeline stage names (Recorded→QA→Done via the Windows/x11 recorders). **Needs update** to reflect
  the new production system as lessons move through it (done incrementally, per lesson).
- `production/README.md` — **Complete** (dev setup + commands for the new system).

## F. External blockers (precise)

1. **Recording stage availability.** The pipeline needs Xvfb + headed Chrome on CDP 9222, signed in
   off-camera. The session's egress proxy port rotates on container restarts and takes Chrome down;
   it must be re-read and Chrome relaunched each time. Not a code defect — an environment fact.
2. **Demo-tenant credentials** are supplied at runtime via env (present this session). Producing a
   lesson requires them for the live-verify + record steps. If absent, production is blocked.
3. **Narration voice/model are locked** (WashCentral New / eleven_v3); no re-render is in scope.
   `ELEVENLABS_API_KEY` is only needed if a narration block must be re-rendered (e.g. WC-01-03 s08,
   flagged in its shot list as speaking a stale blank-tile state) — a **known-product-decision** item.
4. **Scale/time.** ~66 lessons × (author + verify + record + composite + QA + review) is a multi-run
   effort that cannot be faithfully completed in a single pass without violating the "render and
   review each" rule. This is the primary remaining-work driver, not a code blocker.

## G. Prioritized remaining work

1. (Security) — done; no exposure. Keep the sign-in helper out of version control (it is).
2. (Broken workflows) — none found; the new pipeline runs clean end-to-end.
3. (Data-loss/destructive risk) — none; the engine is read-only + real input, never sends/deletes;
   Logout is never clicked (QA-enforced).
4. (Audio/video integrity) — enforced by QA checks 4–6; verified for WC-00-03.
5. (Rendering reliability) — the new pipeline is deterministic and QA-gated.
6. (Automated QA) — 33 checks implemented; extend coverage as new lesson patterns appear.
7. (Core feature = the lessons) — produce the ~66 remaining videos through the new system,
   one at a time, rendered + reviewed. **Largest remaining item.**
8. (Test coverage) — the QA harness is the test suite; add per-lesson reports as produced.
9–12. (Tooling/docs/perf/polish) — remove deprecated recorders once unused; keep trackers current;
   the per-frame overlay raster could be optimized further but is acceptable.

## H. Honest completion statement

The project is **not** complete. Complete-and-verified to the new standard: the production system
(section B) and **one** lesson (WC-00-03 v1.1). Everything else in section D row 3 is **Incomplete**
pending a production run; the four legacy videos are **Deprecated**. No failed or unexecuted test is
represented as passing anywhere in this repository.
