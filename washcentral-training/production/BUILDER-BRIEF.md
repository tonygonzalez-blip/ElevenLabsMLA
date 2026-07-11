# Builder brief — hard-won rules (read with AUTHORING.md)

You author two files for a lesson: `production/lessons/<L>.json` and `production/lessons/<L>-phrases.json`.
Follow `production/AUTHORING.md` for the schema. These are the extra rules that trip builders up.

## Probing (stage 3 only)
- Probe ONLY via CDP `http://127.0.0.1:9224`. Open your OWN tab: `CDP.connect('new', 'http://127.0.0.1:9224')` (see `tools/cdp-lib.mjs`); close it when done. NEVER touch 9222/9223.
- NEVER navigate to `login.html` — it de-authenticates the shared profile. If the profile is signed out, STOP and report.
- The app's `styles.css` and bootstrap are fetched through a flaky proxy. If a page renders as a giant unstyled shell (`document.documentElement.scrollHeight` in the tens of thousands, `.app` `display:block`) or returns a 404, RELOAD (cache-bypass) until it renders styled+built (`.app` is `flex`/`grid`, `styles.css` has rules, docH < ~3000) before you probe. Verify every target selector/text resolves to one visible element with a stable rect, and every predicate evaluates as your ops assume.

## Block windows (measured-onset rule)
- Default: block start = cumulative Σ(ffprobe per-step audio + 0.4).
- If Σ(audio+0.4) misses the ffprobe-probed master duration by > 0.3s, the master was joined with different gaps — measure each block's true onset by FFT cross-correlation of `sNN.mp3` against the joined master (8 kHz mono PCM) and use those. Set `audioDurationS` to the probed master duration. Run `node production/align-narration.mjs production/lessons/<L>-phrases.json` until it is clean.

## orderedMentions — OMIT IT unless the narration truly enumerates
- QA check 19 only enforces order across terms the narration SPEAKS. The narration follows "show, don't read" — it narrates value and rarely recites UI labels. Do NOT list visual/top-to-bottom UI labels: most won't be spoken, and if the few spoken ones aren't in your listed order the check fails.
- Include `orderedMentions` ONLY when the locked narration literally speaks a list of items in a fixed order (verify each term appears in that order in the transcript). Otherwise OMIT the field entirely — callout↔narration alignment is already verified by callout timing (check 17). When in doubt, omit it.

## neverClick — literal labels are fine
- List every forbidden control's visible label/target (always include `logout`). Literal labels with `+`, parens, etc. are fine (QA matches them safely). Scope verbs so they don't collide with legitimate nav links you DO click (e.g. use `new schedule`, not bare `schedule`, if the flow clicks a "Schedule" nav tab).

## Safety (absolute — shared LIVE tenant)
- Browse-and-point by default. Prove any click is pure navigation (read the page's inline JS if unsure, as WC-05-01/WC-08-04 did) before using it.
- NEVER click anything that mutates or sends: save/edit/delete/new/add/submit/book/confirm/schedule/send/test/assign/approve/refund/activate/publish/export, or any create-form link. Point at them from BESIDE (offset `outside`) with a red `#dc2626` guardrail highlight, and add `watch{mustHold}` on a "page unchanged / row count unchanged" predicate to prove no mutation.
- NEVER click logout/Log Out Now. NEVER point at credential/SSN/personal values.
- Document every drift from the locked narration as a residual in your final report. Never stage or fake UI state.

## Deliverables
- Both JSONs parse (`node -e "require('./production/lessons/<L>.json')"`), align-narration runs clean, ops monotonic, callouts contiguous ①..N each anchored to a logged rect, camera z ≤ 1.55.
- Do NOT run the engine, touch `production/out` captures, or commit to git. Final report: files written, block-window method, probe evidence, safety notes (pointed-at vs clicked), residuals.
