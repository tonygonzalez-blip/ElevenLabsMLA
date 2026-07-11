# WC-07-01 — Employees List and Detail · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (15 steps).

## Settings header

- **Status:** **PARTIAL RE-AUTHOR + RE-RENDER NEEDED (July 11, 2026).** Blocks s10, s12, and s13 voice the employee detail as "parked / not captured"; the July 11 credentialed pass captured the full detail page (header, metric band, five Overview panels, all six deeper tabs — see the v1.1 guide steps 10–13). Spoken lines are preserved unedited per the audio-lock rule; re-author s10, s12, s13 (and re-check s11, s14, s15 for flow) before any TTS call. Render settings when re-authored: WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later once the ElevenLabs key is available in this environment. 15 blocks `WC-07-01-s01.mp3`…`WC-07-01-s15.mp3`, assembled at each step's marker. Estimated per-step seconds (speech at ~145 wpm + break + 0.4 s tail): s01 15.3 · s02 17.9 · s03 18.4 · s04 15.9 · s05 13.8 · s06 14.8 · s07 19.8 · s08 15.5 · s09 17.7 · s10 20.4 · s11 21.9 · s12 17.3 · s13 17.7 · s14 16.1 · s15 22.1. Estimated total ~4:25; timestamps below are estimates pending render.
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
- **July 11, 2026 update:** the employee detail view is now fully captured (row-click on the list; the direct URL still 404s). The header, metric band, Overview panels, and per-tab fields are documented in guide v1.1 steps 10–13; the parked markers there are cleared. Blocks s10, s12, and s13 below still voice the July 9 "parked" state and are superseded — do not generate audio from them (see Status). The detail page carries **Delete**, **Edit Employee**, and **Assign Course** controls; the re-authored script must keep them untouched, with **← Back** as the only exit.
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
Click a name to open the record. <break time="1.4s" /> One click carries you from the list into a single employee's file. Heads up: today's capture stopped at the tab names, so the header and the panels around them are parked until a live walk fills them in.

_[Director note, updated July 11, 2026: the detail view is now fully captured (guide v1.1 step 10 — header band, ← Back / Delete / Edit Employee, five-tile metric band). This spoken block still says the capture "stopped at the tab names" and is queued for re-author + re-render. Do not depict Delete/Edit Employee.]_

[02:49 | Step 11 — Tab bar]
Look across the top of the file. <break time="1.2s" /> Seven tabs: overview, personal info, employment, schedule, emergency contact, notes and audit, and training. That's the whole person, sorted into seven drawers, and you land in the first one. Worth knowing this layout is the live one, not the old WashAssist record.

[03:11 | Step 12 — Overview]
Stay on Overview. <break time="1.2s" /> This is the dashboard for one person: how they're performing, how their attendance looks, what they've earned. The exact panels weren't captured today, so treat the numbers as parked, but this is where they live.

[03:28 | Step 13 — Six deeper tabs]
Six more tabs sit beside Overview. <break time="1.2s" /> Personal info, employment, schedule, emergency contact, notes and audit, training. Each one holds a slice of the record. The field-level detail is parked today, but you now know which drawer to reach for.

[03:46 | Step 14 — Read-only rule]
One rule holds this whole lesson. <break time="1.2s" /> We opened the record, read it, and changed nothing in it. Editing a person is a real workflow with its own approvals, and this lesson stays clear of it.

[04:02 | Step 15 — Recap]
So that's the Employees page. <break time="1.0s" /> A directory up front: headcount, a few charts, and a table you can search. Behind any name, a seven-tab file with Overview as its home. When a shift question walks in, start here and let the rest of the Team module branch off from it.

_(Estimated narration total: ~264.6 s ≈ 04:25. Timestamps are estimates at ~145 wpm pending render; regenerate this line from ffprobe once audio exists.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose cleared of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Tailing negations and staccato fragments were rewritten as full clauses. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format), the director notes, and the mandated `TBD — parked` string, all quoted verbatim.
- Detail-view internals voiced as parked (new parked item): header, metric band, Overview panels, and per-tab fields were not in the July 9 corpus. Only the seven tab names and the Overview analytics category are grounded (DISCREPANCIES.md #13). No Save/Edit is depicted.
- **July 11, 2026:** detail view captured in full via row click (direct URL still 404s); the parked markers cleared in guide v1.1 and shot list v1.1. Blocks s10/s12/s13 contradict the platform and the status changed to **PARTIAL RE-AUTHOR + RE-RENDER NEEDED**. No audio was ever rendered from v1.0, so nothing approved is discarded.
- Script text stamp remains **July 9, 2026** (the state it describes); the July 11 corpus check is logged above and in the v1.1 guide and shot list.
