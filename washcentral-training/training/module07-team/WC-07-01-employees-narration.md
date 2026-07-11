# WC-07-01 — Employees List and Detail · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.1 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (15 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 15 blocks `WC-07-01-s01.mp3`…`WC-07-01-s15.mp3` + joined `WC-07-01-full-narration-v1.0.mp3` (254.3s ≈ 4:14). Step duration = audio + 0.4 s. Per-step render seconds: s01 10.53 · s02 13.17 · s03 13.24 · s04 11.55 · s05 11.81 · s06 10.84 · s07 16.12 · s08 11.73 · s09 12.36 · s10 23.48 · s11 21.55 · s12 27.72 · s13 28.6 · s14 18.05 · s15 17.55.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-07-01-s01.mp3` … `WC-07-01-s15.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` (or a shorter tagged break) so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the screen means for the technician's day, not the labels already visible.

### Pronunciation guide

- WashCentral → "Wash Central"
- WashAssist → "Wash Assist"
- Shyne → "Shine" (the **Ask Shyne** button in the header; not exercised in this lesson)
- Location codes (MLAS, SSNB) are not spoken; narration says "one of the sites" rather than reading a code aloud.

### Scope notes (non-spoken)

- Read-only lesson. **Export** and **+ New Record** are located, never clicked. The employee record is opened but never edited (no Save, Delete, or field entry).
- **July 11, 2026:** the employee detail view is fully captured (row-click on the list; the direct URL still 404s — navigate in-app). The header, metric band, five Overview panels, and per-tab fields are documented in guide v1.1 steps 10–13, and blocks s10, s12, s13 narrate that captured page. The detail page carries **Delete**, **Edit Employee**, and **Assign Course** controls; the script keeps them untouched, with **← Back** as the only exit (voiced in s14).
- Per the pronunciation guide, no location code or site name is read aloud in the detail blocks; the header's site value is spoken as "his site." Spoken figures (tenure, monthly hours, attendance, performance, YTD earnings) come from the metric band and Overview panels in `emp-employee-detail-overview.json`.
- Original July 9 note, kept for history: the detail view was not captured on July 9 (direct probe 404'd); only the seven tab names and the Overview analytics category were grounded then (DISCREPANCIES.md #13). Do not depict Save.
- The idle "Still there?" timeout prompt is out of scope; session behavior belongs to WC-01-03.

## Timed script

[00:00 | Step 1 — Employees page]
This is the team, on one page. <break time="1.2s" /> The Employees screen is where you go when the question is about a person, not a wash. Headcount up top, a few charts, then the directory.

[00:15 | Step 2 — KPI strip]
Start with the four tiles. <break time="1.4s" /> They give you the whole crew at a glance. Everyone on the books, who's active, and the full-time against part-time split, so a staffing question gets answered before you ever scroll to the table.

[00:33 | Step 3 — Headcount Growth]
Now the charts. <break time="1.0s" /> The first tracks headcount over the last year, and right now it's trending up. When someone asks whether the team is growing, this is your answer in one line, and you skip pulling a report to get it.

[00:51 | Step 4 — By Location]
The middle chart splits your people by site. <break time="1.0s" /> It's the fast read on where everyone actually sits, which is exactly what you want when one location calls in short a body on a Saturday morning.

[01:07 | Step 5 — Employment Type]
Third chart, same crew, different cut. <break time="1.0s" /> Full-time against part-time as a percentage, plus the count of anyone inactive. It says the same thing as the tiles, drawn for the eye.

[01:21 | Step 6 — Employee List header]
Down to the directory. <break time="1.2s" /> Notice the two buttons in its corner. One exports data, one starts a new hire. We're only reading today, so find them and leave them where they are.

_[Director: hover **Export** and **+ New Record**; do not click either.]_

[01:36 | Step 7 — Columns]
Read the column headers. <break time="1.2s" /> Name, phone, hire date, type, status, location. Six columns, and the name cell doubles as a badge: an avatar and the person's role sit right next to who they are, so the job is obvious before you open a thing.

[01:55 | Step 8 — Row anatomy]
Look at one row. <break time="1.4s" /> A shift manager, full-time, active, at one of the sites. Run your eye down the role chips and you've read half the team's jobs without opening a single record.

[02:11 | Step 9 — Search & paging]
On a real site the roster runs long. <break time="1.2s" /> That's what the search box and filters are for: type a name, narrow the list, jump to your person. Here it's a five-row sample, so everyone already fits on one page.

[02:29 | Step 10 — Open the record]
Click a name to open the record. <break time="1.4s" /> One click, and the list becomes a person. The header introduces him with a role chip, his site, and his employment type. Three buttons sit beside it, and Back is the only one we touch. Below, five tiles size him up fast: three years in, a hundred sixty eight hours this month, attendance above ninety seven percent, and a performance score of four point six.

_[Director: point out ← Back, Delete, and Edit Employee; do not click Delete or Edit Employee at any point. ← Back is the only exit used (step 14).]_

[03:01 | Step 11 — Tab bar]
Look across the top of the file. <break time="1.2s" /> Seven tabs: overview, personal info, employment, schedule, emergency contact, notes and audit, and training. That's the whole person, sorted into seven drawers, and you land in the first one. Worth knowing this layout is the live one, not the old WashAssist record.

[03:23 | Step 12 — Overview]
Stay on Overview. <break time="1.2s" /> This is the dashboard for one person, five panels deep. Hours worked, month by month. How those hours split between regular time, overtime, and leave. Attendance across the year, with every missed shift counted. Earnings, closing in on fifteen thousand for the year. And a review trend running well above the location average. When a manager asks how someone is doing, this one tab answers it.

[03:53 | Step 13 — Six deeper tabs]
Six more tabs sit beside Overview. <break time="1.2s" /> Each one is a drawer. Personal info holds identity and address, with the social masked. Employment carries role, pay, reporting line, and benefits. Schedule pairs the current week with recent time clock punches. Emergency contact adds the medical basics. Notes and audit keeps a dated trail of every change to the record. And training tracks Academy courses, with an assign button we leave alone.

[04:23 | Step 14 — Read-only rule & ← Back]
One rule holds this whole lesson. <break time="1.2s" /> We opened the record, read it, and changed nothing in it. Editing a person is a real workflow with its own approvals, and this lesson stays clear of it. So click Back. The list returns, and the record sits exactly as you found it.

[04:46 | Step 15 — Recap]
So that's the Employees page. <break time="1.0s" /> A directory up front: headcount, a few charts, and a table you can search. Behind any name, a seven-tab file with Overview as its home. When a shift question walks in, start here and let the rest of the Team module branch off from it.

_(Estimated narration total: ~307.7 s ≈ 05:08. Timestamps are estimates at ~145 wpm pending render; regenerate this line from ffprobe once audio exists.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose cleared of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Tailing negations and staccato fragments were rewritten as full clauses. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format), the director notes, and the mandated `TBD — parked` string, all quoted verbatim.
- v1.0 history: detail-view internals were voiced as parked (header, metric band, Overview panels, and per-tab fields were not in the July 9 corpus; only the seven tab names and the Overview analytics category were grounded then — DISCREPANCIES.md #13).
- **July 11, 2026:** detail view captured in full via row click (direct URL still 404s); the parked markers cleared in guide v1.1 and shot list v1.1. Blocks s10/s12/s13 contradicted the platform and the status moved to PARTIAL RE-AUTHOR pending rewrite. No audio was ever rendered from v1.0, so nothing approved was discarded.
- **July 11, 2026 — v1.1 re-author.** Blocks s10, s12, s13 rewritten against guide v1.1 steps 10–13 and the `emp-employee-detail-*.json` digests (header band, five-tile metrics, five Overview panels, six deeper tabs); s14 extended to voice the **← Back** exit per guide step 14. Blocks s01–s09, s11, s15 unchanged. No Save, Delete, Edit Employee, or Assign Course is depicted. Timestamps recomputed at ~145 wpm; new estimated total ~05:08. Humanizer craft rules re-applied to the new blocks. Status: **READY FOR GENERATION**.
- Script text stamp updated to **July 11, 2026**, matching the v1.1 guide and shot list.
