# WC-08-02 — Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (6 steps).

## Settings header

- **Status:** **DO NOT GENERATE — NEEDS RE-AUTHOR + RE-RENDER (July 11, 2026).** The July 11 credentialed pass reached all four pages through the in-app sidebar (direct URLs still 404). Blocks s02–s06 below narrate the July 9 Not-Found state ("four oh four", "the page is parked", "opened to Not Found today") and now contradict the live pages. Spoken lines are preserved unedited per the audio-lock rule; re-author this script against the v2.0 guide and shot list before any TTS call. Render settings when re-authored: voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3, block-by-block, one TTS call per step, files `WC-08-02-s01.mp3` … `WC-08-02-s06.mp3`. Step duration = audio + 0.4 s.
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
- 404 → "four oh four"
- Lube (as in Lube Checklists) → "loob"
- MG → "M-G" (spoken as letters; it is the avatar's initials on the demo)

### Scope notes (non-spoken)

- Menu-level tour of the four MAINTENANCE pages that follow Issues: Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies.
- **July 11, 2026 update:** all four pages are real and loaded on the July 11 credentialed pass when reached via the in-app sidebar; direct URLs still 404. The v2.0 guide and shot list document the observed KPIs, cards, and columns. This v1.0 script still narrates the July 9 Not-Found state in blocks s02–s06 and is superseded — re-author before generating any audio (see Status).
- On July 9, all four pages returned **Not Found** ("HTTP Error 404. The requested resource is not found.") when probed by direct URL; that is what this script documents.
- The live pages carry **+ New Record**, **Export**, **Filters ▾**, and search controls; the re-authored script must keep them read-only (nothing clicked, exported, or created).

## Timed script

[00:00 | Step 1 — Operations · Maintenance sidebar]
Start in Operations and look down the sidebar. <break time="1.0s" /> The whole module is laid out in three groups. Maintenance sits at the top, then Incident Reports, then the Scheduler pages. We are in Maintenance, where five entries stack together. The first is Issues, the work-order list you already know. The four below it are the planned side of upkeep, the routines and gear and parts that sit behind every ticket. That set is today's tour.

[00:31 | Step 2 — Maintenance Schedule]
Click Maintenance Schedule. <break time="1.4s" /> Here is the honest part. Today this page comes back Not Found, a plain four oh four, so there are no numbers to read yet. What it is built for is preventive work, the upkeep you run on a calendar instead of waiting for something to break. Once it loads, this is where a manager pulls up what service is due this month, and where a recurring job like a monthly brush change would live. Until then, we note the entry and we do not invent what is not on the screen.

_[Director note, updated July 11, 2026: this block is OUTDATED. The page now loads via the in-app sidebar (KPIs 42 / 6 / 2 / 18, seven columns). Do not record against this audio; the block is queued for re-author + re-render.]_

[01:11 | Step 3 — Equipment Registry]
Now Equipment Registry. <break time="1.4s" /> Same result today, the same four oh four. Picture what it will hold once it is live: every machine at every site, the asset that a work order points back to. A field tech calls in and says the air dryer in bay two is down. This is the page that would name that exact unit, tell you where it sits, and tie it to its service history. For now the entry is real and the page is parked.

[01:45 | Step 4 — Checklists]
Open Checklists. <break time="1.4s" /> Not Found again. This one is meant for the standard steps a tech runs, the fixed inspection a scheduled service follows so nothing gets skipped on a busy day. One caution for when it loads: this is not the Lube Checklists page that lives over in Hardware settings. Different place, different job. We flag the difference now so you do not go looking in the wrong menu later.

[02:15 | Step 5 — Parts & Supplies]
Last one. Parts and Supplies. <break time="1.4s" /> Not Found, like the other three. When it comes up, it is the maintenance stock a repair pulls from, the belts and filters and fittings behind a fix. Keep it straight from Chemicals and Supplies over in Inventory, which is wash chemistry and retail goods. This page is the parts side of upkeep, and its columns wait until it actually loads.

[02:43 | Step 6 — Recap]
So, the map. <break time="1.0s" /> Four entries under Maintenance, right beside Issues. A recurring job lands on the Schedule. A question about a machine goes to the Registry. The steps a tech follows are the Checklists. The parts a repair burns through are Parts and Supplies. Every one of them opened to Not Found today, so the first time a page loads for you, walk its numbers and its columns and write them down. Learn the map now. The detail comes when the pages do.

_(Estimated total: ~199 s ≈ 03:19 at ~145 wpm. Timestamps are estimates pending render; regenerate durations from the rendered blocks and align to the recording.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI entry names (Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies) and the observed error state (Not Found / 404) were left exact. The only em dashes are in the timed-block headers, which is the established `[mm:ss | Step N — target]` house format.
- Status history: v1.0 was READY FOR GENERATION against the July 9 corpus (pages Not Found by direct URL). **July 11, 2026:** the four pages loaded via in-app sidebar navigation on the credentialed pass, so blocks s02–s06 contradict the platform. Status changed to **DO NOT GENERATE — NEEDS RE-AUTHOR + RE-RENDER**. No audio was ever rendered from this script, so nothing approved is being discarded.
- Script text stamp remains **July 9, 2026** (the state it describes); the July 11 corpus check is logged above and in the v2.0 guide and shot list.
