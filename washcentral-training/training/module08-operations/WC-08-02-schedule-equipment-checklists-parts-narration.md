# WC-08-02 — Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v2.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (6 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 6 blocks `WC-08-02-s01.mp3`…`WC-08-02-s06.mp3` + joined `WC-08-02-full-narration-v1.0.mp3` (165.53s ≈ 2:46). Step duration = audio + 0.4 s. Per-step render seconds: s01 27.17 · s02 24.35 · s03 23.88 · s04 25.97 · s05 29 · s06 32.76.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice. Never switch without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Lube (as in Lube Checklists) → "loob"
- MG → "M-G" (spoken as letters; it is the avatar's initials on the demo)

### Scope notes (non-spoken)

- Menu-level tour of the four MAINTENANCE pages that follow Issues: Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies.
- All four pages verified **live** on the July 11, 2026 credentialed pass via in-app sidebar navigation; direct URLs still 404, which is why the July 9 probe missed them. Block s06 teaches the sidebar-only route without reading the error text aloud.
- Spoken numbers come from each page's KPI band (42/6/2/18 · 4/3/1/0 · 24/8/94%/1 · 142/8/12/$18,400) and its sample rows, all grounded in the July 11 digests and the v2.0 guide. Header record counts disagree with the four-row table footers on three pages (guide Notes); the narration voices KPI values only and never reads a row count.
- The live pages carry **+ New Record**, **Export**, **Filters ▾**, and search controls; the script keeps them read-only (nothing clicked, exported, or created).

## Timed script

[00:00 | Step 1 — Operations · Maintenance sidebar]
Start in Operations and look down the sidebar. <break time="1.0s" /> The whole module is laid out in three groups. Maintenance sits at the top, then Incident Reports, then the Scheduler pages. We are in Maintenance, where five entries stack together. The first is Issues, the work-order list you already know. The four below it are the planned side of upkeep, the routines and gear and parts that sit behind every ticket. That set is today's tour.

[00:31 | Step 2 — Maintenance Schedule]
Click Maintenance Schedule. <break time="1.4s" /> This is the planned side of upkeep. Forty two recurring tasks live on this calendar, six due this week and two already overdue. Each row is a job that repeats: lubricate the conveyor chain weekly, inspect the chemical pumps once a month. The column a manager reads first is Next Due, because it names the service that is coming before anything breaks.

[01:00 | Step 3 — Equipment Registry]
Now Equipment Registry. <break time="1.4s" /> Every machine a work order points back to. This tenant carries four assets: a blower system, a chemical pump array, the main tunnel conveyor, and a point of sale terminal. Three are operational and one sits in repair. When a caller says the air dryer is down, this page names the exact unit, places it at its site, and shows whether it is already flagged.

[01:30 | Step 4 — Checklists]
Open Checklists. <break time="1.4s" /> These are the fixed steps a tech follows so nothing gets skipped on a busy day. Daily opening and closing walks, a weekly safety inspection, a monthly deep clean. The completion column shows how faithfully each one gets done, and the average sits at ninety four percent. One caution. This is not the Lube Checklists page over in Hardware settings. Different place, different job.

[01:59 | Step 5 — Parts & Supplies]
Last one. Parts and Supplies. <break time="1.4s" /> The stock a repair pulls from. Drive belts, pump seal kits, dryer filters, a spare power supply. A hundred forty two parts, about eighteen thousand dollars sitting on the shelf. Read quantity on hand against the reorder point and you can answer a do we have it call in seconds. And keep it straight from Chemicals and Supplies over in Inventory; that page is wash chemistry and retail goods, this one is upkeep.

[02:32 | Step 6 — Recap]
So, the map. <break time="1.0s" /> Four live pages under Maintenance, right beside Issues. A recurring job lands on the Schedule, and Next Due says when. A question about a machine goes to the Registry. The steps a tech follows are the Checklists. The parts a repair burns through are Parts and Supplies. One habit before you go. Reach these pages from the sidebar inside Operations, because typing an address straight into the browser still fails. The sidebar is the front door.

_(Estimated total: ~186 s ≈ 03:06 at ~145 wpm. Timestamps are estimates pending render; regenerate durations from the rendered blocks and align to the recording.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI entry names (Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies) were left exact. The only em dashes are in the timed-block headers, which is the established `[mm:ss | Step N — target]` house format.
- Status history: v1.0 was READY FOR GENERATION against the July 9 corpus (pages Not Found by direct URL) and narrated the 404 state in blocks s02–s06. **July 11, 2026:** the four pages loaded via in-app sidebar navigation on the credentialed pass, contradicting those blocks; status moved to DO NOT GENERATE pending re-author. No audio was ever rendered from v1.0, so nothing approved was discarded.
- **July 11, 2026 — v2.0 re-author.** Blocks s02–s06 rewritten against the v2.0 guide and shot list and the July 11 digests (`maint-*-inapp.json`): each block now narrates the live page's KPI values, sample rows, and job, read-only throughout, with the sidebar-only route taught in s06. Block s01 unchanged. Timestamps recomputed at ~145 wpm; new estimated total ~03:06. Humanizer craft rules re-applied to the new blocks. Status returned to **READY FOR GENERATION**.
- Script text stamp updated to **July 11, 2026**, matching the v2.0 guide and shot list.
