# WC-10-06 — Site Detail (Demo) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 11 blocks `WC-10-06-s01.mp3`…`WC-10-06-s11.mp3` + joined `WC-10-06-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available in the session; timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-06-s01.mp3` … `WC-10-06-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the pan or hover lands before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel means for the technician's shift, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- NOC → "N-O-C"
- CSM → "C-S-M"
- SLA → "S-L-A"
- MLAS → "M-L-A-S"
- E-Stop → "E-stop"
- Shyne → "Shine" · ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Read-only walk of `site-detail.html` (the sample site, Morris Plains, NJ). No control is clicked.
- Header buttons (**Work Order**, **Notify CSM**, **Escalate**) and the five **Quick Actions** are do-not-click; they are read, not triggered. Director notes flag them.
- Equipment-card drill-down and the digest-listed **Schedule PM** / **Acknowledge** controls were not captured on July 9; they are parked, not narrated.
- Session-timeout ("Still there?") behavior is out of scope — see PARKED-ITEMS.md #9 and lesson 1.3.

## Timed script

[00:00 | Step 1 — Open Site Detail]
Open the site's own status board. <break time="1.0s" /> One location, pulled onto one screen. The trail up top shows you drilled in from the network center, and the back link runs you straight back there when you're done.

[00:20 | Step 2 — Site header]
Start with the header. <break time="1.4s" /> Site, status, address, the account it belongs to, and who manages it, all in a single strip. The sync time tells you how current this is. Right now it's a couple of minutes old, and the status reads critical.

[00:42 | Step 3 — Header buttons]
Three buttons sit to the right. <break time="1.4s" /> These are your fast responses: open a job, ping the account manager, or push the site up the priority list. Each one kicks off something real, so today we read them and keep our hands off.

_[Director: hover only; do not click Work Order, Notify CSM, or Escalate.]_

[01:05 | Step 4 — KPI band]
Now the numbers. <break time="1.0s" /> Six tiles across, and every one carries its own yardstick. Washes and revenue today against their averages. Wait time and service level against target. And the count of open incidents, which is where the trouble surfaces. You read today's figure next to its benchmark, without doing the math yourself.

[01:31 | Step 5 — Equipment Status]
Middle of the page, the equipment panel. <break time="1.4s" /> Eight units at this wash, one card each, every card showing a few live readings and a health score. It's the hardware view of the site, and any card drills deeper on a click.

[01:52 | Step 6 — POS offline]
Look at the first card. <break time="1.4s" /> The point-of-sale is offline. No health score, no transactions in forty-seven minutes, a red bar flagging it. When the P-O-S is down the site takes no money, so this is the card you check first.

[02:14 | Step 7 — Other units]
Sweep the rest. <break time="1.0s" /> Conveyor, scanner, chemicals, dryers, water, gate, lighting. Most run green and healthy; a couple sit lower and earn a second look. The health number and the color bar do your triage at a glance.

[02:34 | Step 8 — Active Incidents]
On the right, the open incidents. <break time="1.4s" /> Three of them, each tagged by type and, just as usefully, by owner. The payments outage is on the account manager. The conveyor stop is still unassigned. That owner line tells you what already has a name on it and what's waiting for one.

[02:57 | Step 9 — Event Timeline]
Underneath, the timeline. <break time="1.0s" /> Every event with a timestamp, from the shift opening this morning to the terminal dropping offline later on. This is the site's story of the day. When you need to know what led up to an incident, you scroll here.

[03:18 | Step 10 — Quick Actions]
Bottom right, the quick actions. <break time="1.4s" /> The common responses, gathered so you don't go hunting: raise a work order, book maintenance, send a tech, email the customer, restart the P-O-S. Every one does something real, so we read the list and stop there.

_[Director: hover only; do not click any Quick Action.]_

[03:40 | Step 11 — Recap]
Step back and take it in. <break time="0.8s" /> One page: status up top, then the numbers, the hardware, the open incidents with owners, the day's history, and the actions that answer them. Read it top to bottom and you know this site cold, and you did it without touching a thing.

_(Estimated total: ≈ 4:00 at ~145 wpm pending render. Timestamps are estimates; re-measure with ffprobe after generation and align to the recording.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, navigation paths, and numbered steps left exact. The only em dashes are in the `[mm:ss | Step N — target]` house-format block headers.
- Read-only throughout: header buttons and Quick Actions are read but never clicked (director notes on steps 3 and 10). Equipment drill-down and the parked Schedule PM / Acknowledge controls are not narrated.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
