# WC-PB-09 — Reports wrong or missing · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (10 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 10 blocks `WC-PB-09-s01.mp3` … `WC-PB-09-s10.mp3` + joined `WC-PB-09-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-09-s01.mp3` … `WC-PB-09-s10.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 3:15 (195 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the filter and scheduler fields are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"
- KPI → "K-P-I" · SMS → "S-M-S"
- 6:00 AM → "six A M"
- "re-run" → spoken naturally ("re run")

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Schedule Report**, any export or download control, or **+ New Record** on **Task Scheduler**. **▶ Run Report** (step 4) is a read-only re-pull only; no report is scheduled, exported, or edited.
- Steps 3–4 (the **Report Viewer** and its filter bar) reference a screen not in the July 9 corpus; the filter-bar controls are attributed to DISCREPANCIES.md #24 (July 8 verified walk). Step 6 (the filtered **Scheduled Reports** view contents) was not separately captured; the exact three rows are TBD — parked and recorded live at record time.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Reports hub]
Open Reports from the left rail. <break time="1.4s" /> Every report a site runs lives in this one hub. A hundred seventy-three in all, five favorites, three on a schedule. Each row carries a type tag and the last time it ran.

_[Director: do not click Schedule Report on the hub.]_

[00:19 | Step 2 — Name the symptom]
Name the symptom before you touch a filter. <break time="1.0s" /> Wrong numbers or an empty report is a filter question. A scheduled report that never landed is a scheduler question. Decide which ticket you have, or you'll re-run the wrong report ten times.

[00:38 | Step 3 — Report Viewer]
Take the wrong-or-empty trail first. Open the report from the list. <break time="1.4s" /> It loads in the Report Viewer, and the filter bar across the top is the whole story. More filters, a location selector, a date range, and the run control.

_[Director: the viewer is not in the July 9 corpus; filter bar attributed to DISCREPANCIES #24. If unavailable at record time, hold the parked card: TBD — parked.]_

[00:57 | Step 4 — Fix the scope, re-run]
Now read the scope. <break time="1.2s" /> Most wrong-numbers tickets die here. The selector sat on one site when the manager meant the network, or the dates missed the week in question. Fix both, run it again, compare. A report is only wrong once its filters are right.

_[Director: do not click Schedule Report or any export control. Run Report is a read-only re-pull.]_

[01:18 | Step 5 — Demo-data caveat]
One caution before you file anything. <break time="1.0s" /> In this demo tenant, a KPI tile and the table beneath it often disagree, sometimes wildly. That's a known demo artifact, not a platform bug. Reproduce the numbers in production before you open a ticket.

[01:37 | Step 6 — Scheduled Reports view]
Now the report that never arrived. Open the Scheduled Reports view. <break time="1.4s" /> Three reports run on a schedule here. Confirm the missing one is actually among them, and read its last run. Not scheduled at all? There's your answer.

_[Director: the filtered view contents were not captured July 9 — TBD — parked. Fallback: zoom the Scheduled type chips and Last Run in the All Reports list.]_

[01:55 | Step 7 — Task Scheduler]
Cross-check the job that sends it. Settings, then Automation, then Task Scheduler. <break time="1.4s" /> Eighteen tasks, sixteen active, two running now. And the tile that matters reads failed, zero. Nothing errored overnight. When that count isn't zero, you have your lead.

[02:14 | Step 8 — Daily Report Email row]
Find the Daily Report Email row. <break time="1.4s" /> Read across it. Scheduled daily at six. Last ran today at six. Next run, tomorrow at six. Status, active. A missing report usually shows here as a stale last run or a status that isn't active. Read it, never edit it.

_[Director: do not click + New Record. The list shows 3 of 3 rows against an "18 records" header — demo-data artifact, per guide Notes.]_

[02:36 | Step 9 — Package the escalation]
Now build the ticket. <break time="1.0s" /> Name the report, the location scope, and the date range you ran it with. For a scheduled report, add the job's last run, next run, and status. Attach a screenshot. Leave the demo-tenant number quirks out of it.

[02:56 | Step 10 — Recap]
That's the playbook. <break time="0.8s" /> Name the symptom. Wrong or empty means the filter bar. Never arrived means Scheduled Reports and the Task Scheduler. Rule out the demo artifact, escalate with the filters and the run times, and change nothing along the way.

_(Estimated total: about 3:15 / 195 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (field names spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: the **Reports** hub (VIEWS, CATEGORIES, Report List) and **Settings → Automation → Task Scheduler** (KPI strip, **Daily Report Email** row) are grounded in the July 9 digests and screenshots. The **Report Viewer** filter bar (steps 3–4) is attributed to DISCREPANCIES.md #24; the filtered **Scheduled Reports** view contents (step 6) are TBD — parked.
- No report is scheduled, exported, or edited anywhere; **▶ Run Report** is the only click beyond navigation and it is a read-only re-pull.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
