# Session state — July 11, 2026, end of remote production run

**July 11 update (supersedes the notes below where they conflict):** the credentialed live-verify ran (corpus `verification/2026-07-11/`, 87 captures; PARKED #15–#19/#21 resolved; DISCREPANCIES #37–#42 added incl. platform drift), affected lessons were patched, and **all 69 narrations are RENDERED** (per-step MP3s + joined tracks + durations files; 31 stale blocks re-authored and re-rendered; QA sweep 73/73). The ONLY remaining stage is local: screen recording + mux + per-lesson QA on a 1920×1080 machine (`tools/record-lesson.mjs` + each lesson's shot list and durations.json). Note for that session: several pages are SPA-routed — navigate in-app via the sidebar, not by direct URL (see DISCREPANCIES #35/#39) — and re-check the July 11 drift items (Refund Approvals, Contract Renewals, Prepaid Activity, Customer List columns) at record time.

---

# (Superseded) Session state — July 9, 2026, end of remote authoring run

Written by Claude — Micrologic training project. Supersedes the earlier July 9 handoff in this file. Records exactly where production stands after the remote (Claude Code on the web) authoring run.

## What this run produced

**All 71 remaining lesson packages are authored.** Every lesson in `tools/lesson-map.json` now has its package in `training/<moduleFolder>/`: guide + shot list + narration script (status **READY FOR GENERATION**), steps synced 1:1 across the three artifacts, humanizer pass applied, stamped July 9, 2026. Doc-only deliverables (WC-00-01 workstation prerequisites; WC-CERT-01 written exam + practical matrix) are guide-only by design. WC-01-01 and WC-01-02 remain Done from July 8 and were not touched.

Branch: `main-kdmqi0`, PR: https://github.com/tonygonzalez-blip/ElevenLabsMLA/pull/1 (draft).

## How the packages are grounded (important)

A live re-walk was **not possible** this run. The demo's `assets/app.js` (v26.0704) now gates every interior page on a valid `wc-staff-token` JWT from a real credentialed login to `agentapiqa.washcentral.com`; the demo quick-access button (`#qa-btn`) sets the legacy localStorage flag but no longer passes the gate (PARKED #15). No credentials are available remotely and none were guessed.

Authoring therefore used the **committed July 9 authenticated sweep corpus** (`verification/2026-07-09/`: 251 signed-in digests + 251 screenshots + per-lesson evidence), which the authoring brief sanctions as ground-truth source (b). `tools/authoring-contract-remote.md` records the grounding contract every authoring agent followed. Every bold UI label traces to a digest/screenshot; anything unobservable is marked `TBD — parked (#n)`, never invented.

## Corpus limits found (all tracked; see PARKED #16–#22, DISCREPANCIES #26–#36)

1. **Agent-service fetch failures (#16):** ~60 pages captured column headers but "Couldn't load … (Failed to fetch)" instead of rows; KPI tiles "—". Structure taught; values attributed to the July 8 pass or parked.
2. **Direct-URL 404s (#17):** many SPA-routed pages 404 on direct navigation though their sidebar entries are live (audit-users/changes, support-alerts, four maint-* pages, six sched-* siblings, portal pages, lms-catalog/paths/my-learning, zoho-tickets, most -edit/-detail probes). Those lessons ship structure/menu-level with page bodies parked.
3. **Row-click detail views (#18):** Customer 360 view, Ticket View, employee detail interior etc. need URL params and are not in the static sweep; authored structurally from the July 8-verified plan, specifics parked. (House-account detail IS fully captured live with all ten tabs.)
4. Small parks: Filters panel (#19), sign-in 2FA (#20), Executive Dashboard below-fold GOALS panel (#21), MAIA/MLAS/SSNB pronunciations (#22).

Parked **#13 (Site Detail) is resolved** — the page was captured July 9 and WC-10-06 is authored from it.

## Pipeline stages remaining (per lesson)

1. **Pre-recording live verify:** one credentialed in-app walk per lesson to clear its `TBD — parked` markers and re-confirm labels (unblocks #15–#22). The walk instructions are already in each shot list.
2. **Narrate:** `tools/render-narration.mjs` per narration script (voice **WashCentral New** `CDbF7Jxnv3azemv9dXMP`, model **eleven_v3**, 44.1 kHz, block-by-block). Needs `ELEVENLABS_API_KEY` — not set in the remote environment. Never regenerate WC-01-01/WC-01-02 approved audio.
3. **Record:** `tools/record-lesson.mjs` per shot list on a 1920×1080 desktop with the validated screencast setup (local machine only).
4. **QA + trackers:** §11 checklist per lesson into `QA-LOG.md`; statuses to Recorded → QA → Done.

## Environment notes (remote, July 9)

- demo.washcentral.com reachable; site loads in headless Chromium only with `--ssl-version-max=tls1.2` through the session proxy (Chrome's TLS 1.3 handshake is reset by the egress proxy). Irrelevant once running locally.
- Trackers updated this run: `00-curriculum.md` (header + per-lesson production note, 10.6/14.2 rows), `DISCREPANCIES.md` (#26–#36), `PARKED-ITEMS.md` (#13 resolved; #15–#22 added), `tools/lesson-map.json` (two slug fixes: crm-gift-cards.html, settings-mobile-push.html).

**Remaining user-owned blockers:** demo-tenant credentials for the pre-recording live verify (#15), `ELEVENLABS_API_KEY` for narration, a recording-machine window, and the standing platform questions (#1 gear dialog, #2 LogicPOS, #4 Actions depth, #5 refund execution, #6 weather-pause config, #8 assistant naming/test prompts, #9 timeout thresholds, #14 legacy features).
