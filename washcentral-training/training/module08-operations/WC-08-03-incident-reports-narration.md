# WC-08-03 — Incident Reports · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-08-03-s01.mp3`…`WC-08-03-s12.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; it is not set in this session. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-08-03-s01.mp3` … `WC-08-03-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already visible.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"; Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- IR (report-number prefix) → "I-R"
- Type codes when voiced: C-I → "C, I" · E-I → "E, I" · P → "pee" · V → "vee" · W-E-D → "W, E, D"
- Location codes (MLAS, SSNB) are not read aloud (show, don't read); if voiced, spell them as letters.

### Scope notes (non-spoken)

- Read-only list-anatomy lesson. The five report types come from the visible rows, not from the new-report form.
- **+ New Report** is opened on camera only to reveal the report-type choice, then closed via **Cancel**/**Close**; nothing is filed. The form's exact type options are parked (not captured in the July 9 corpus).
- Filter options, and any report's detail view, are out of scope.
- The idle **Still there?** timeout belongs to WC-01-03.

## Timed script

[00:00 | Step 1 — Incident Reports list]
This is where every damage claim and injury report lands. <break time="1.4s" /> One list, under Operations. When a customer calls about a scratch from the tunnel, or a manager reports someone hurt on site, the record lives right here. Know this screen and you can pull up any incident without hunting through menus.

[00:22 | Step 2 — Column headers]
Five columns run across the top. <break time="1.0s" /> Report number, type, location, date, status. Read them left to right and you have the whole story of an incident before you open a single record.

[00:37 | Step 3 — Report number prefixes]
Look at the first column. <break time="1.4s" /> Every report number starts with I-R, then a short code for what happened. The code is not decoration. It tells you the kind of incident at a glance, before you read anything else.

[00:55 | Step 4 — The five types]
Now the type column, and this is the part to memorize. <break time="1.4s" /> Five kinds of report, five codes. Customer Injury is C-I. Employee Injury, E-I. Property Damage is P. Vehicle Damage, V. And wash equipment damage carries W-E-D. Every incident you log is one of these five.

[01:15 | Step 5 — Status]
Over on the right, the status. <break time="1.2s" /> Most reports sit at Open. One here reads Under Review. That is the report's place in its lifecycle, so a quick scan of this column tells you what still needs attention.

[01:32 | Step 6 — Location]
Third column, the location code. <break time="1.2s" /> Each report is tagged to the site where it happened, shown as a short code like the ones in this list. On a support call, that tag tells you which wash and which manager you are dealing with.

[01:52 | Step 7 — Date]
Then the date. <break time="1.0s" /> Written year first, month, then day, so the column sorts cleanly and reads the same for everyone. It is the day the incident occurred, not the day someone typed it up.

[02:07 | Step 8 — Search box]
Say the list is hundreds long, not five. <break time="1.4s" /> The search box up top takes a report number or a keyword and narrows the table as you type. When a customer gives you a claim number, this is your fastest way in.

[02:26 | Step 9 — Filters and Search]
Next to it, two more tools. <break time="1.0s" /> Filters opens options to narrow the list, and the Search button runs what you have entered. We are not stepping through the filter choices here.

[02:40 | Step 10 — Pagination]
At the bottom, a count. <break time="1.0s" /> Showing one through five of five records, on a single page. On a busy site, this footer and its page arrows are how you work through the backlog.

[02:55 | Step 11 — New Report]
Top right sits New Report. <break time="1.4s" /> That is how a fresh incident gets started, and it opens by asking for the report type. On camera we open it to show the choices, then cancel straight back out. We file nothing today.

_[Director: open + New Report only to reveal the report-type choice, then leave via Cancel or Close. Do not save or submit. The exact type options are TBD — parked (new item; see the package's structured return).]_

[03:14 | Step 12 — Recap]
So the incident log, in one screen. <break time="0.8s" /> Five report types, each with its own code. A status that shows what is still open. Search and filters for when the list runs long. Picture the calls: a scratched car is Vehicle Damage, an employee who slips is Employee Injury, and both are logged right here. Learn the five types now, because on a support call you will be naming them from memory.

_(Estimated narration total: ~225 s ≈ 03:45 at 145 wpm. Timestamps are estimates pending render; the ElevenLabs key is not set in this session.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format), the required version/stamp line, and the mandated `TBD — parked` string quoted verbatim in the director note.
- **+ New Report** is opened on camera only to reveal the report-type choice; nothing is filed (Cancel/Close), and the form's exact type options are parked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
