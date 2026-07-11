# WC-13-01 — Reports Hub and Report Viewer · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-13-01-s01.mp3`…`WC-13-01-s14.mp3` + joined `WC-13-01-full-narration-v1.0.mp3` (210.73s ≈ 3:31). Step duration = audio + 0.4 s. Per-step render seconds: s01 12.43 · s02 14.52 · s03 22.36 · s04 13.09 · s05 10.53 · s06 13.56 · s07 21.39 · s08 12.2 · s09 13.24 · s10 12.36 · s11 16.35 · s12 13.4 · s13 9.09 · s14 20.61.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps below are estimates** at ~145 wpm plus break time plus the 0.4 s tail, cumulative; they are provisional pending render. Estimated total ~4:18.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- WashHub → "Wash Hub"
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- 173 → "one hundred seventy-three"
- Report names spoken as written (e.g. "Daily, Period, and Shift Financial")

### Scope notes (non-spoken)

- Covers the Reports hub (VIEWS, CATEGORIES, list columns, locating Schedule Report) and the Report Viewer (filter bar, Run Report read-only, generation stamp, Close Report).
- **Schedule Report** is send-type: it is located and named, never triggered.
- **Run Report** is read-only and allowed; nothing is sent or saved.
- The Report Viewer render (summary tiles, table columns, values, exact "Generated … · Sample data" stamp text) was not in the July 9 corpus — parked. Narration keeps the render general and frames the specifics as the exercise; verify live before render.

## Timed script

[00:00 | Step 1 — Open Reports hub]
Open the Reports module. <break time="1.4s" /> Every figure a client asks you for starts here. A hundred and seventy-three reports, already sorted so you're not digging through a folder. The left sidebar is your way in.

[00:15 | Step 2 — VIEWS]
Start at the top of the sidebar. <break time="1.0s" /> These five shortcuts are pre-built slices of the same list. The ones you starred, the ones running on a timer, the analytics set. When a client wants what they always want, you skip the search and click the view.

[00:36 | Step 3 — CATEGORIES]
Below that, nineteen categories. <break time="1.0s" /> Financial, transactions, employee labor, inventory, and the rest, each with a live count beside it. Some are broad, like transactions with twenty-one reports. Some hold just one, like weather. This is how you turn a wall of reports into the two or three that actually answer the question in front of you.

[01:00 | Step 4 — Panel header and search]
On the right, the list itself. <break time="1.0s" /> A search box sits above it. Type a few letters of a report's name and the list shrinks to match. Faster than paging through four screens when you already know what you're after.

[01:18 | Step 5 — Locate Schedule Report]
Top right, one button: Schedule Report. <break time="1.4s" /> That's how a report gets put on a timer and mailed out on its own. We're only pointing at it today. It sends, so we leave it alone.

_[Director: locate and name Schedule Report; do not click it.]_

[01:33 | Step 6 — Report List columns]
Now the columns. <break time="1.0s" /> A star for favorites, the report's name, its category, its type, and when it last ran. Five columns tell you what a report is and whether anyone has touched it lately.

[01:49 | Step 7 — Type chips and rows]
Look at the Type column. <break time="1.0s" /> Standard, Scheduled, or Analytics. A dash under Last Run means nobody has run it yet. A date and time means someone did. The daily financial, for instance, has a scheduled twin that last ran in late March. And the starred rows are your favorites, one click away in that view up top.

[02:14 | Step 8 — Open a report]
Click a report to open it. <break time="1.4s" /> Take the daily financial. The list steps aside and the report viewer takes over. Same idea as opening a file: you picked it, now you're inside it.

[02:29 | Step 9 — REPORT FILTERS bar]
Across the top, the filters. <break time="1.4s" /> A location selector, a date range with a from and a to, and a More Filters button for the rest. This is where you tell the report which sites and which days before you run it.

[02:47 | Step 10 — Run and Close]
Two buttons frame it. <break time="1.0s" /> Run Report renders it. Close Report backs you out. Notice Schedule Report isn't here. Scheduling stays on the hub; in here you only run and read.

[03:01 | Step 11 — Run Report]
Click Run Report. <break time="1.4s" /> Summary tiles and a table build from the filters you set. Running it only reads the numbers, so nothing is sent and nothing is saved. In the drill, you'll hunt down the per-location and per-shift rows, and the refund column, before you close it.

_[Director: Run Report is a read-only render and is allowed. The rendered tiles, columns, and values are parked (not in the July 9 corpus) — verify live before render.]_

[03:22 | Step 12 — Generation stamp]
Check the stamp on the result. <break time="1.0s" /> It carries the date the report was generated, and in this demo it flags the figures as sample data. On a real client tenant that same line reads their live numbers instead.

_[Director: exact "Generated … · Sample data" stamp text is parked — match the caption to the live stamp.]_

[03:39 | Step 13 — Close Report]
Done reading? Close Report. <break time="1.2s" /> The viewer folds away and the full list is back, exactly as you left it. You ran a report and touched nothing.

[03:51 | Step 14 — Recap]
That's the whole loop. <break time="0.8s" /> Find a report by view or category, open it, set the location and the dates, run it, read it, close it. When a client swears a report looks wrong, this is the screen you'll share with them. Now you know every control on it, and the next lesson takes you into the audit trail behind those numbers.

_(Estimated narration total ~257.9s ≈ 04:18 at ~145 wpm; provisional pending render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside quoted parked-item strings.
- Send-type safety: **Schedule Report** is located and named, never triggered. **Run Report** is read-only and allowed; no export/schedule control inside the render is touched.
- Grounding note: the Reports hub is grounded in the July 9 `reports.json` digest and `reports.png` screenshot. The Report Viewer (steps 8–13) was not in the July 9 corpus; its labels come from DISCREPANCIES.md #24 and the render specifics are parked. Verify the viewer live before rendering audio.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
