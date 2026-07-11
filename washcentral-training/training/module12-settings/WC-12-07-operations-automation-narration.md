# WC-12-07 — Operations reason codes & Automation · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps). (**Blocks s03, s04, and s05 re-authored July 11, pending block re-render**; all other spoken lines unchanged — see scope notes.)

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-12-07-s01.mp3`…`WC-12-07-s14.mp3` + joined `WC-12-07-full-narration-v1.0.mp3` (235.72s ≈ 3:56). Step duration = audio + 0.4 s. Per-step render seconds: s01 15.8 · s02 16.35 · s03 17.4 · s04 18.21 · s05 15.31 · s06 14.45 · s07 15.49 · s08 12.51 · s09 15.88 · s10 17.4 · s11 16.85 · s12 17.01 · s13 15.49 · s14 21.97.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-07-s01.mp3` … `WC-12-07-s14.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- SMS → "S-M-S"
- Rewash → "re-wash"
- Shyne → "Shine" (if referenced)

### Scope notes (non-spoken)

- Read-only walk. **+ New Record** is present on every page and is never clicked. **Task Scheduler** is never edited and never run (steps 9–11).
- The July 11 credentialed corpus recovered the reason-code rows: **Cancellation Reasons** 33 live rows (30 shown on POS, 3 hidden), **Rewash Reasons** 12 rows, and **Refund Reasons** a genuine empty state ("No refund reasons found. The POS database may not be configured for this tenant yet."). **Event Types**, **Transaction Types**, **Task Parameters**, and **Mass SMS Log** were not re-captured; their rows stay parked.
- **s03, s04, s05 RE-AUTHORED July 11 — pending re-render.** The v1.0 takes described the July 9 "couldn't load / rows pending" state, which the July 11 corpus contradicts. The blocks below now narrate the live July 11 data: 33 cancellation rows (30 shown on POS, 3 hidden), a genuine Refund Reasons empty state ("No refund reasons found. The POS database may not be configured for this tenant yet."), and 12 rewash reasons. Re-render s03–s05 and re-measure before assembly. s11's spoken 18-vs-3 quirk was re-confirmed July 11 and stands; s12 and s13 speak load-pending states for pages not re-captured, so they hold until those pages are verified live.
- The **Task Scheduler** count mismatch (18 stated, 3 rendered) persists on July 11 and remains a reported item; do not invent row values.
- **User Levels** appears in the Automation sidebar but belongs to WC-12-06; it is named, not walked.

## Timed script

[00:00 | Step 1 — Operations group]
Open Settings, and expand the Operations group. <break time="1.4s" /> These lists are the raw material for dropdowns all over the platform. When a cashier reaches for a reason and it isn't there, the fix lives on one of these pages, not in the register.

[00:22 | Step 2 — Cancellation Reasons]
Open Cancellation Reasons. <break time="1.4s" /> Two columns here. One names the reason, the other decides whether a cashier ever sees it. That second column, Show on P-O-S, is the one to check first when a reason exists but never shows up at the register.

[00:44 | Step 3 — Live rows]
Look at the list body. <break time="1.2s" /> Thirty-three reasons, loaded live. The tiles above count thirty shown at the register and three kept hidden, and the footer pages you through the full set. Those three hidden rows read No in the second column: still on the books, invisible to the cashier.

[01:06 | Step 4 — Refund Reasons]
Now Refund Reasons. <break time="1.4s" /> One column, one job: it fills the reason picker on the refund screen. This tenant's list is genuinely empty, zero reasons, with a note that the P-O-S database may not be configured yet. That is a real empty state, not a load error.

[01:27 | Step 5 — Rewash Reasons]
Rewash Reasons, same idea. <break time="1.2s" /> This is the list an attendant picks from when a car goes back through the wash. Twelve reasons live here, everything from bugs on the car to wheels not clean. Identical shape to refunds, just with its rows filled in.

[01:47 | Step 6 — Event & Transaction Types]
Two more, back to back. Event Types, then Transaction Types. <break time="1.4s" /> One classifies things that happen, the other classifies money that moves, and reporting leans on both. The layout never changes: a description column and a count.

[02:08 | Step 7 — Issue Status Types]
Issue Status Types. <break time="1.4s" /> This one loaded, so you can see the real values. Open, in progress, pending parts, resolved, closed. Those five are the stages an issue walks through, and they're the same labels you'll meet on ticket records elsewhere.

[02:29 | Step 8 — Automation group]
Switch groups, over to Automation. <break time="1.4s" /> This is where the background jobs live: the scheduler, its parameters, and the mass text log. User Levels sits here too, but that's a security page, and it's covered on its own.

[02:47 | Step 9 — Task Scheduler tiles]
Open Task Scheduler. <break time="1.4s" /> Read the tiles first. They sum up the whole job list at a glance, and the one that earns your attention is Failed. When someone says a job didn't run, a non-zero Failed count is your fastest signal, before you open a single row.

[03:05 | Step 10 — Columns & jobs]
Now the list itself. <break time="1.4s" /> Five columns tell you a job's name, its schedule, when it last ran, when it runs next, and its status. The daily report email is right here. If it never arrived, read last run and status on that row before you blame the mailbox.

[03:28 | Step 11 — Read-only & count]
Notice the new-record and filter controls. <break time="1.4s" /> You read this page. You never edit a schedule, and you never run a task. One quirk worth knowing: today the header claims eighteen tasks, but only three rows actually rendered. The rest we've parked.

_[Director: read-only. Do not click + New Record, and do not run or edit a task on Task Scheduler.]_

[03:48 | Step 12 — Task Parameters]
Task Parameters. <break time="1.4s" /> These are the reusable inputs the jobs read when they run. The updated-by and updated columns tell you who last changed one, and when, which is exactly what you want the day a job starts behaving differently. Rows are loading from the service.

[04:08 | Step 13 — Mass SMS Log]
Last page. Mass S-M-S Log. <break time="1.4s" /> This is the delivery record for mass texts. When a customer swears they never got the message, the status column is where you confirm whether it actually went out. Same load error today, so the rows are pending.

[04:28 | Step 14 — Recap]
So, two groups, two kinds of ticket. <break time="1.0s" /> Operations feeds the dropdowns, so a missing reason ends there, and Show on P-O-S decides what a cashier sees. Automation runs the jobs, so a report that never came starts at the scheduler's last run and status. Learn which page owns which question, and the triage answers itself.

_(Estimated narration total: ~293 s ≈ 04:53 at 145 wpm plus breaks. Re-authored per-step estimates: s03 21.9 · s04 20.8 · s05 19.8. Final per-step render seconds to be measured with ffprobe once audio is generated; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Status is **READY FOR GENERATION** — s03, s04, and s05 re-authored July 11 against the credentialed corpus (pending block re-render); the remaining blocks were already ready. Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3, block-by-block, files `WC-12-07-s01.mp3`…`WC-12-07-s14.mp3`.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in this generation log.
- Corpus-grounded at authoring (July 9); the July 11 credentialed re-capture invalidated the load-error framing in s03–s05, which were re-authored July 11 against the live digests (`settings-cancellation-reasons-rows`, `settings-refund-reasons`, `settings-rewash-reasons`). Task Scheduler columns, KPI band, the three observed job rows, and the 18-vs-3 row-count mismatch were re-confirmed unchanged in the July 11 digest.
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**
