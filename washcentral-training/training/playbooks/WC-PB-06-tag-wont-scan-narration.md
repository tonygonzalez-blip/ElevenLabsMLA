# WC-PB-06 — My tag/plate won't scan · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · July 9, 2026 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (10 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 10 blocks `WC-PB-06-s01.mp3` … `WC-PB-06-s10.mp3` + joined `WC-PB-06-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-06-s01.mp3` … `WC-PB-06-s10.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:30 (270 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the field names are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Customer 360 → "Customer three-sixty"
- ALPR → "A-L-P-R" · LPR → "L-P-R" · RFID → "R-F-I-D" · POS → "P-O-S" · SMS → "S-M-S"
- Ask Shyne → "Ask Shine"
- "won't-scan" → spoken naturally ("won't scan"); "blocklist" → spoken naturally

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **+ Add Vehicle** (steps 3, 4), **+ New Record** (step 5), or **Create ticket** (step 7). Never blacklist, unblock, relink, add, or edit a plate.
- Steps 2–3 (Customer 360 **Membership** / **Vehicles** tab and header chips) reference the detail page, not in the July 9 corpus. Field and chip labels are attributed (Lesson 2.2, July 8 walk); values are TBD — parked and captured live at record time.
- Step 6 (**System Alerts**) 404'd in the July 9 corpus; the narration allows for the parked card. Steps 4, 5, and 8 list bodies showed fetch errors; rows are TBD — parked.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Frame it on Vehicles]
Start in CRM, on Vehicles. <break time="1.4s" /> Read the top band before you open anyone's account. Nearly four thousand vehicles on file, and fourteen flagged. Fourteen. Across the whole network. That tells you this ticket is almost certainly one member, not a wave. So work the funnel in order: the account, the plate, the blocklist, the hardware.

[00:25 | Step 2 — Membership tab]
Open the member from the customer list and go to the Membership tab. <break time="1.4s" /> Three blocks answer most of these tickets. Loyalty and points holds the barcode. That is the code the P-O-S actually reads. Plan details tells you the status is active. Billing cycle tells you the next charge, so the plan is not past due. Any of those fails, and you already have your answer.

_[Director: Customer 360 detail is not in the July 9 corpus. Record against the live detail page; field labels attributed to Lesson 2.2. Unshowable values: TBD — parked.]_

[00:54 | Step 3 — Plate linked and the Vehicles tab]
Now the header chips. <break time="1.4s" /> Plate linked is the one that matters here. It says a plate is on file for the cameras. Open the Vehicles tab and read what is actually on the account. No chip, or the wrong plate, and the gate has nothing to match. Do not add a vehicle. You report the gap. You never fill it from the demo.

_[Director: do not click + Add Vehicle. Chip states and plates on file are TBD — parked (view page not in the July 9 corpus).]_

[01:22 | Step 4 — Master vehicle list]
Back out to CRM Vehicles and search the exact plate. <break time="1.4s" /> The master list is the plate's own record: license plate, make and model, year, customer, location, status, last visit. Confirm three things. Right customer. A sane status. A last visit that matches the member's story. One caution from today's capture: the list returned a fetch error. Make sure rows actually loaded before you say a plate is not on file.

_[Director: do not click + Add Vehicle. Rows were not observable in the July 9 corpus — TBD — parked.]_

[01:52 | Step 5 — Blacklisted]
Now the blocklist. Settings, Users and Security, Blacklisted. <break time="1.4s" /> Four columns: plate, terminal, created by, created. A plate on this list is refused at the gate no matter how healthy the membership looks. So a clean account with a won't-scan symptom sends you straight here. Read it and leave it alone. Adding or removing a blacklisted plate from the demo is forbidden.

_[Director: do not click + New Record. List body fetch error July 9 — rows TBD — parked.]_

[02:19 | Step 6 — System Alerts]
Both clean? Then it's the site. Open IT and Support, then System Alerts. <break time="1.4s" /> A tunnel or P-O-S fault at the member's location would surface here. In today's corpus the page would not load at all. If it is still down when you get there, hold the parked card and route the hardware question to the site team.

_[Director: support-alerts.html 404'd in the July 9 corpus — hold the parked card if the live page still 404s.]_

[02:45 | Step 7 — Support Queue]
Still in IT and Support, open the Support Queue. <break time="1.4s" /> You want an open ticket at the member's home site. Today's capture has one: an L-P-R ticket at Miami North, high priority. L-P-R is the plate-reading hardware. An open ticket there changes your whole read. This stops being one member and becomes an attachment to a known site issue.

_[Director: do not click Create ticket.]_

[03:11 | Step 8 — Cancellation reason]
One last stop, and it's a quiet one. Settings, Operations, Cancellation Reasons. <break time="1.4s" /> The migrated reason set includes R-F-I-D tag issues, not reading. That is a recognized failure mode, and naming it tells the next team exactly what the field already knows. Confirm the wording against the live list. The rows did not load in today's capture.

_[Director: reason strings are plan-sourced (PB-6, July 8 walk) — TBD — parked.]_

[03:36 | Step 9 — Package the escalation]
Now build the ticket. <break time="1.0s" /> State which checks passed and which failed. Barcode present, plan active, or not. Plate linked, or not. The master-list status. Whether the plate appears on Blacklisted. Any open L-P-R ticket or system alert at the site. Tag the R-F-I-D reason when it fits, and name the location. The fix happens in production with the right role. A relink, a blocklist removal, a dispatch. Never here.

[04:05 | Step 10 — Recap]
That's the funnel. <break time="0.8s" /> Frame it on the vehicle list. Read the barcode, the status, and the next charge. Confirm the plate is linked, find it in the master list, check the blocklist, then work the hardware trail through alerts and the queue. Most tickets never reach the bottom. And you changed nothing on the way down.

_(Estimated total: about 4:30 / 270 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (field names spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: CRM Vehicles, Blacklisted, Cancellation Reasons, and the Support Queue are grounded in the July 9 digests and screenshots. Customer 360 **Membership** / **Vehicles** and the header chips (steps 2–3) are attributed to Lesson 2.2 (July 8 walk); **System Alerts** (step 6) 404'd in the corpus and is narrated with the parked fallback; the **RFID Tag Issues** reason (step 8) is plan-sourced with the live wording TBD — parked.
- No action row is triggered anywhere; no plate is added, edited, linked, blacklisted, or unblocked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
