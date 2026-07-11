# WC-08-01 — Maintenance Issues (work orders) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-08-01-s01.mp3`…`WC-08-01-s14.mp3` + joined `WC-08-01-full-narration-v1.0.mp3` (201.85s ≈ 3:22). Step duration = audio + 0.4 s. Per-step render seconds: s01 16.35 · s02 15.15 · s03 15.57 · s04 13.64 · s05 13.71 · s06 12.83 · s07 11.96 · s08 11.65 · s09 12.51 · s10 13.87 · s11 17.4 · s12 13.71 · s13 10.11 · s14 17.79.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-08-01-s01.mp3` … `WC-08-01-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel or column means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- SSNB → "S-S-N-B" (location code)
- MLAS → "M-L-A-S" (location code)
- POS → "P-O-S"
- Shyne → "Shine" (header tool only; out of scope here)
- KPI → "K-P-I" (if spoken)

### Scope notes (non-spoken)

- Reads the **Maintenance Issues** list and its summaries only. Sibling maintenance pages are WC-08-02; issue status configuration is WC-12-07.
- **+ New Issue** is a create-type form. Do not depict saving. Its field layout is parked (not captured in the July 9 corpus); at recording time open it to show layout, then leave with **Cancel**. Never **Save**.
- **Export** is a download action and is not clicked.
- The global header tools (**Search ⌘K**, **Ask Shyne**, the avatar) are out of scope; they are covered in WC-01-02.

## Timed script

[00:00 | Step 1 — Open Maintenance Issues]
Open the Operations module, then Issues. <break time="1.4s" /> This is Maintenance Issues. Every equipment problem across your sites lands here as one work order. A dryer that won't heat, a touch screen that quit, a leaking pump. One list tracks them all the way to fixed.

[00:20 | Step 2 — KPI strip]
Start at the top. <break time="1.0s" /> Four numbers frame the board: how many issues are open, how many are being worked, how many are high priority, and the average time to a fix. Before you read a single row, you know how heavy the load is.

[00:39 | Step 3 — Issues Reported]
First panel, the twelve-month trend. <break time="1.4s" /> It counts issues reported over the last year and flags the recent change. A rising line means more tickets coming in. Useful when someone asks whether last month was really busier, or it just felt that way.

[00:59 | Step 4 — Issues by Priority]
Next, the priority breakdown. <break time="1.2s" /> Low, Medium, High, and Critical, each as a share of the total. This is your triage picture. When High and Critical creep up, that's where the day's attention goes.

[01:15 | Step 5 — Resolution Status]
Third panel, the pipeline. <break time="1.2s" /> It splits the open work into Resolved, in Progress, and Blocked. Blocked is the one to watch. A blocked job is stuck waiting on a part or a person, and it won't clear itself.

[01:33 | Step 6 — Issue List card]
Now the list itself. <break time="1.0s" /> The header calls it the Issue List and gives the record count. The subtitle says the job out loud: work order tracking. Everything above this card is just the summary.

[01:49 | Step 7 — New Issue and Export]
Top-right of that card, two buttons. <break time="1.2s" /> New Issue opens a blank work order. Export pulls the list out to a file. We won't export anything today; just know where it is when a manager asks for it.

[02:07 | Step 8 — Open New Issue form]
Click New Issue to see the form. <break time="1.4s" /> This is where a technician writes up a new problem: what broke, where, and how urgent. We're only looking, so we back out without saving. Nothing gets logged.

_[Director: recording-time only. The blank form's fields were not captured in the July 9 corpus; open it to show the layout, then leave via **Cancel**. Never click **Save**. Field list: TBD — parked (new parked item).]_

[02:24 | Step 9 — Search and filters]
Below the buttons, the search row. <break time="1.2s" /> Type a few letters to find an issue by title, or open Filters to narrow by status, priority, or site. On a long list, this is how you reach one ticket fast.

[02:42 | Step 10 — Columns]
The table has seven columns. <break time="1.4s" /> Which site logged it, the title, its status, its priority, who owns it, who reported it, and the date. Read across one row and you have the whole story of a work order.

[03:02 | Step 11 — Example rows]
Look at the live examples. <break time="1.2s" /> An air dryer not reaching temperature, marked Open and high. A conveyor belt squeaking in the tunnel, already In Progress. A chemical pump leak, Critical, and already Resolved. Real problems, each at a different stage.

[03:19 | Step 12 — Assigned / Created columns]
Notice two columns are blank. <break time="1.2s" /> Assigned To and Created By show a dash on every row here. In a live tenant they carry names. A row with no owner is your cue that somebody still needs to pick it up.

[03:36 | Step 13 — Pagination]
At the foot of the list, the counter. <break time="1.0s" /> It reads five of five, on one page. When your network fills this up, the arrows here walk you through the rest.

[03:50 | Step 14 — Recap]
So that's the work-order board. <break time="0.8s" /> The four numbers up top tell you the load, the three panels tell you its shape, and the list is where every fix gets tracked. New Issue starts one; the columns tell you where it stands. This is the page you live in for anything broken on site.

_(Estimated narration total: ~252 s ≈ 04:12 at 145 wpm, pending render. Step timings finalize after the block-by-block generation.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three for its own sake, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, quoted verbatim.
- **+ New Issue** left unsaved throughout: the form is opened at recording time to show layout only, then dismissed with **Cancel**; its field layout is parked (not in the July 9 corpus). **Export** is never clicked.
- Status **READY FOR GENERATION** — audio renders once the ElevenLabs key is available; timestamps above are estimates pending render.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
