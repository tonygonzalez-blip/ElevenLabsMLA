# WC-10-04 — System Alerts · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v2.0 · July 11, 2026 · Author: Claude — Micrologic training project. Steps match the v2.0 guide and shot list one-to-one (9 steps). Full re-script: the v1.0 script narrated `support-alerts.html` as a 404; the July 11 credentialed pass reached **System Alerts** through the in-app sidebar and the page is real (`verification/2026-07-11/digests/support-alerts-inapp.json`). No v1.0 audio was ever rendered, so nothing is superseded on disk.

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 9 blocks `WC-10-04-s01.mp3`…`WC-10-04-s09.mp3` + a joined `WC-10-04-full-narration-v2.0.mp3` once rendered. Audio is rendered later when the ElevenLabs key is available; timestamps below are estimates. Estimated per-step seconds (~145 wpm + break + 0.4 s tail): s01 20.4 · s02 22.1 · s03 20.6 · s04 19.6 · s05 20.6 · s06 17.1 · s07 26.2 · s08 28.7 · s09 26.0 (≈ 201 s ≈ 3:21 total).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-04-s01.mp3` … `WC-10-04-s09.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the result means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- System Alerts → "System Alerts" (plain)
- 404 → "four oh four"
- URL → "U-R-L"
- KPI → "K-P-I"
- MLAS → "M-L-A-S" · SSNB → "S-S-N-B"
- Piscataway → "Piss-CAT-uh-way"
- POS → "P-O-S" · ALPR → "A-L-P-R"
- Shyne → "Shine"

### Scope notes (non-spoken)

- Read-only lesson on the live **System Alerts** page. The only click is the **System Alerts** sidebar link (step 2). **+ New Record**, **Export**, **Filters ▾**, the rows-per-page control, and the rows themselves are never clicked.
- Navigation caution carried from the guide: reach the page by the sidebar only. The direct URL (`support-alerts.html`) answered HTTP 404 on the July 9 sweep; the sidebar route renders the full page (July 11 capture). Block s02 speaks this rule.
- Known on-page discrepancy (logged July 11): the list header reads **14 records** while the pager reads **1–4 of 4**. The narration counts rows from the pager and never speaks the header count as a row count.
- The **By Severity** panel names four levels; the visible rows show only three (no **Error** row on July 11). The script does not invent an Error row.
- The idle "Still there?" prompt is out of scope (lesson 1.3); dismiss off-camera and re-roll.

## Timed script

[00:00 | Step 1 — IT & Support sidebar]
Start on Support Tickets and look at the left rail. <break time="1.4s" /> The SUPPORT group keeps every support surface in one place, tickets, knowledge base, alerts, training requests. Today's stop is System Alerts, the one feed that pulls infrastructure trouble from every site onto a single page.

[00:20 | Step 2 — Open System Alerts]
Click System Alerts. <break time="1.4s" /> One rule before anything else. Reach this page through the sidebar, never by typing its address. The direct U-R-L still answers four oh four, while this link renders everything. The page settles inside the shell, breadcrumb up top, and four K-P-I tiles waiting across the band.

[00:42 | Step 3 — KPI band]
Read the band left to right. <break time="1.2s" /> Three alerts open right now. Fourteen logged today. And of the open three, one critical against two warnings. That single critical is the number that decides whether your coffee waits. Everything below this band exists to explain these four tiles.

[01:03 | Step 4 — Alert Volume panel]
Upper left, Alert Volume. <break time="1.4s" /> A year of history on one line, January through December, one hundred forty eight alerts in all and trending down eight percent. That slope is the long view. It is the sentence a quarterly health review wants to write.

[01:22 | Step 5 — By Severity panel]
Next panel, By Severity. <break time="1.2s" /> Four levels. Info carries fifty eight percent of the traffic, warnings twenty eight, errors ten, critical just four. Most of what this feed says is routine noise. Which is exactly why a critical row deserves your full attention when one shows up.

[01:43 | Step 6 — System Health panel]
Then System Health. <break time="1.0s" /> Eighty six percent healthy, ten warning, four critical. Hold on that four. It matches the critical slice next door, one fact drawn two ways. When two panels agree like that, you can trust the read.

[02:00 | Step 7 — Alert List columns]
Scroll to the Alert List. <break time="1.4s" /> Six columns carry each alert's story: when it fired, what kind, how severe, which site, what it said, and whether it is still open. Two buttons above the table stay untouched. New Record and Export act on the shared tenant, and a support read never creates an alert. The pager below counts four rows.

_[Director: STOP ring over **+ New Record** and **Export**; nothing above or inside the table is clicked. Do not zoom the "14 records" header label as if it counted the rows — the pager (**1–4 of 4**) is the row count (discrepancy logged July 11).]_

[02:26 | Step 8 — Read the four rows]
Now the rows, top to bottom. <break time="1.4s" /> The critical one is a tunnel alert at M-L-A-S, conveyor belt tension past its threshold, still active. Behind it, two warnings: receipt paper running low on a P-O-S at S-S-N-B, and a chemical tank under twenty percent at Piscataway. The last row already resolved, a network failover note. Three rows still active. That is the Active Alerts tile, itemized.

[02:55 | Step 9 — Recap]
That is the whole read. <break time="0.8s" /> The band for the instant answer. The panels for trend and mix. The list for specifics, which type, at which site, still burning or already out. When a ticket asks whether an outage is one site or the whole platform, this page and the Command Center's priority board answer it before the caller finishes explaining.

_(Estimated total: ~201 s ≈ 03:21 at ~145 wpm. Timestamps are estimates pending render; actual per-step durations replace them after generation.)_

## Generation log

- Script v2.0 (July 11, 2026): full re-script against the v2.0 guide and shot list (9 steps). The v1.0 script taught the July 9 direct-URL 404; the July 11 in-app capture proved the page real, so every block was rewritten to the live screen. v1.0 was never rendered — no audio is superseded.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Status **READY FOR GENERATION**: audio not rendered in this session (no ElevenLabs key available). Per-step seconds are estimates at ~145 wpm; replace with ffprobe durations on render.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation rule, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format), the version line, and director notes.
- Corpus-grounded on the July 11 in-app capture (`verification/2026-07-11/digests/support-alerts-inapp.json` + screenshot): KPI band **3 / 14 / 1 / 2**, **Alert Volume 148 ↓ -8%**, **By Severity** Info 58 / Warning 28 / Error 10 / Critical 4, **System Health 86% HEALTHY**, columns **DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**, and the four observed rows (Tunnel/POS/Chemical/Network). No Error row is depicted (none was on screen).
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**
