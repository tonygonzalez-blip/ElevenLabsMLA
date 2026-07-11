# WC-10-04 — System Alerts · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the v1.0 guide and shot list one-to-one (8 steps).

> **SUPERSEDED — NEEDS RE-SCRIPT + RE-RENDER (July 11, 2026).** This v1.0 script narrates `support-alerts.html` as a 404 in every block. The July 11 credentialed pass reached **System Alerts** through the in-app sidebar and the page is real (`verification/2026-07-11/digests/support-alerts-inapp.json`): KPI band **3 Active Alerts / 14 Today / 1 Critical / 2 Warnings**, panels **Alert Volume / By Severity / System Health**, and an **Alert List** (**DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**) with Tunnel/POS/Chemical/Network rows. Do not generate or record against this script; a v2.0 script matching the v2.0 guide/shot list (9 steps) must be written and rendered first. Spoken lines below are left untouched per the audio-lock rule.

## Settings header

- **Status:** ~~READY FOR GENERATION~~ **BLOCKED — SUPERSEDED BY PLATFORM CHANGE (see note above)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 8 blocks `WC-10-04-s01.mp3`…`WC-10-04-s08.mp3` + a joined `WC-10-04-full-narration-v1.0.mp3` once rendered. Audio is rendered later when the ElevenLabs key is available; timestamps below are estimates. Estimated per-step seconds (~145 wpm + break + 0.4 s tail): s01 20.0 · s02 17.9 · s03 19.2 · s04 19.8 · s05 19.6 · s06 20.8 · s07 21.5 · s08 26.8 (≈ 2:46 total).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-04-s01.mp3` … `WC-10-04-s08.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the result means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- System Alerts → "System Alerts" (plain)
- 404 → "four oh four"
- HTTP → "H-T-T-P"
- URL → "U-R-L"
- KPI → "K-P-I"
- ML Command Center → "M-L Command Center"
- LogicPOS → "Logic P-O-S"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- Shyne → "Shine"

### Scope notes (non-spoken)

- (v1.0 premise, superseded — see the banner above.) On the July 9 direct-URL sweep, **System Alerts** (`support-alerts.html`) returned a server 404 and this script taught the outage. The July 11 in-app capture cleared that parked item: the page is real, and the v2.0 guide/shot list teach it.
- Read-only lesson. The only live click is the **System Alerts** sidebar link. The step-6 fallback frames (Command Center Priority Intelligence, ML Command Center incident feed) are read-only reference stills.
- Do not depict any alert content that the 404 does not show. Do not invent counters, severities, or rows.

## Timed script

[00:00 | Step 1 — IT & Support sidebar]
Start in the IT and Support sidebar. <break time="1.4s" /> Every support surface lives in this one rail. The SUPPORT group holds the tickets desk, the knowledge base, and the item we want, System Alerts. Below it, the audit pages. One rail, the whole job.

[00:20 | Step 2 — Locate System Alerts]
Find System Alerts in that group. <break time="1.0s" /> It sits just under the knowledge base, a plain link like the rest. On paper, it's the single place that pulls infrastructure alerts from every site into one feed.

[00:38 | Step 3 — Open System Alerts]
Click it. <break time="1.4s" /> Instead of an alerts board, the browser drops to a bare page. No header, no sidebar, nothing styled. This isn't the demo being slow. It's the server itself telling you the page isn't there.

[00:57 | Step 4 — Read the 404]
Read exactly what it says. <break time="1.2s" /> A heading: Not Found. One line under it: H-T-T-P error four oh four, the requested resource is not found. That wording earns its keep when you report the page, so quote it word for word.

[01:17 | Step 5 — What's missing, parked]
So there are no counters to read. No severity split. No table of alerts. <break time="1.0s" /> The curriculum expects all of that right here. Today the page can't show it, so we park those details rather than fill them in from memory.

_[Director: hold on the raw 404; the alert monitor's KPIs, severity split, columns, and rows are TBD — parked (new item, see structured findings). Do not depict any of them.]_

[01:36 | Step 6 — Live signal elsewhere]
You still need eyes on live problems. <break time="1.4s" /> Two boards carry that signal right now. Priority Intelligence on the Command Center groups current issues by severity, and the M-L Command Center runs an incident feed. Neither is the alerts log, but together they keep you covered.

[01:57 | Step 7 — Report it]
Then flag the broken door. <break time="1.2s" /> A live menu link that answers four oh four is a broken page, plain and simple. Copy the address and the error text, and send it up the same way the Logic P-O-S pages were reported. That's the broken-page playbook.

_[Director: read-only throughout; the only click was the sidebar link in step 3. Nothing on the 404 page is actionable.]_

[02:19 | Step 8 — Recap]
So, System Alerts. <break time="0.8s" /> A real entry in the support rail that, for now, opens a four oh four instead of a board. Reach it from the SUPPORT group, know the Not Found page on sight, lean on Priority Intelligence and the M-L Command Center for live signal, and report the outage. When the page comes back, this lesson gets its full alerts walk.

_(Estimated total: ~166 s ≈ 02:46 at ~145 wpm. Timestamps are estimates pending render; actual per-step durations replace them after generation.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Status **READY FOR GENERATION**: audio not rendered in this session (no ElevenLabs key available). Per-step seconds are estimates at ~145 wpm; replace with ffprobe durations on render.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels (**System Alerts**, **Not Found**, the 404 error text), the URL, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format), the version line, the director notes' parked-item string, and the estimate note.
- Corpus-grounded: the destination 404 is taken from the July 9 digest (`support-alerts.json`) and screenshot (`support-alerts.png`); the sidebar entries from `support.json` / `support-tickets.json`; **Priority Intelligence** from `command-center.json`; the ML Command Center incident feed from `ml-command-center.json`. No alert content is depicted, since the page shows none.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
