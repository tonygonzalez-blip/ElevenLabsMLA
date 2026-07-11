# WC-PB-03 — POS down / terminal offline · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 (spoken script unchanged; non-spoken notes updated July 11, 2026) · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 14 blocks `WC-PB-03-s01.mp3` … `WC-PB-03-s14.mp3` + joined `WC-PB-03-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available; timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, and firm up at render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice or model without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-03-s01.mp3` … `WC-PB-03-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a surface means for the outage in front of you, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S" · ALPR → "A-L-P-R" · LPR (ticket category) → "L-P-R"
- NOC → "N-O-C" · SLA → "S-L-A"
- IP → "I-P" · OS → "O-S" · ID → "I-D"
- Shyne → "Shine" · Micrologic → "My-kro-loj-ik" · LogicPOS → "Logic P-O-S" · Jira → "Jee-ruh"
- Henrico → "Hen-rye-co" · SUP-1042 → "S-U-P ten forty-two"

### Scope notes (non-spoken)

- Read-and-route playbook across five surfaces: Command Center (Priority Intelligence), ML Command Center (NOC incidents), System Alerts, Hardware / Terminals, and Sales Tickets; escalation via Support Tickets.
- Two scopes, kept distinct: the Command Center POS row ("Henrico W Broad, VA") is the operator's own network; the NOC incident ("MLAS CORP") is the cross-customer support view. Do not merge them.
- **NEEDS PARTIAL RE-RENDER (July 11, 2026): blocks s08 and s10.** The July 11 captures show **System Alerts** renders in full from the sidebar (`verification/2026-07-11/digests/support-alerts-inapp.json`: tiles 3/14/1/2, columns DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS, POS row "Low receipt paper on POS-2") and the **Terminals** list loads live rows (`settings-hardware-terminals.json`: Total Terminals 1,067, real Last Seen values). Block s08's spoken "today the page throws a four-oh-four" and block s10's "Today the rows did not load, so treat the values as parked" contradict the live pages and need re-script/re-render. Still parked, do not fabricate: the Priority Intelligence **Open →** destination (Step 4). Spoken lines left untouched per the audio-lock rule.
- No create, submit, or export control is triggered: **Open →** not followed, **Create Ticket** / **Create ticket** not submitted, **+ New Record** not used, **Export** not used.

## Timed script

[00:00 | Step 1 — Command Center]
Open the Command Center. <break time="1.4s" /> This is your first look when a site calls in a dead register. The dashboard pulls the whole network into one view, and the panel you want is lower down, under the map.

[00:17 | Step 2 — Priority Intelligence]
Find Priority Intelligence. <break time="1.4s" /> It ranks what needs you right now, worst first. Eleven items today, four of them urgent, and the Critical group is already sitting at the top.

[00:31 | Step 3 — POS-offline row]
There it is. <break time="1.4s" /> Henrico West Broad, POS system offline, card terminals down at peak. The row names the site, the symptom, and tells you a tech is already en route. Check one is done before you lifted a finger.

[00:49 | Step 4 — Deep link and ownership]
Now look right, not through. <break time="1.4s" /> The row has an Open arrow into the item. We leave it alone on the shared demo, and this pass did not capture where it lands. What earns your attention is Action Ownership beside it: Regional Ops already holds this one, due inside thirty minutes. Know who owns it before you move.

_[Director: hover the Open arrow, do not follow it; where it lands is TBD — parked (report as new).]_

[01:14 | Step 5 — Open the NOC]
Head to I-T and Support, and open M-L Command Center. <break time="1.4s" /> This is the Micrologic N-O-C, the room support watches across every customer. Two criticals live right now, and the incidents tab is where they land.

[01:32 | Step 6 — Incident feed]
Read the top incident. <break time="1.4s" /> POS system offline, zero transactions for forty-seven minutes. That zero is the tell. A slow lane still writes tickets; a stopped one does not, and this one stopped almost an hour ago.

[01:49 | Step 7 — Tag and assignee]
Two things on that card do your triage. <break time="1.4s" /> The tag tells you what broke: this one reads Tunnel Down, others say Hardware, Payments, Equipment. The assignee tells you who has it, or that it is unassigned and yours to claim. Create Ticket and View Full Profile are right there, but on the demo you only read them.

_[Director: read the tag and assignee; do not submit Create Ticket on the shared demo.]_

[02:14 | Step 8 — System Alerts]
Next check is System Alerts, under I-T and Support. <break time="1.4s" /> Honest one: today the page throws a four-oh-four. The link still sits in the sidebar, but nothing loads behind it. When it comes back on your tenant, filter to the site and read its POS alerts there. We do not invent them, the same way the parked Logic P-O-S screens stay parked.

_[Director: SUPERSEDED July 11 — System Alerts renders via the sidebar link (KPI band, severity panels, alert list with a live POS row). This block's spoken text contradicts the page; do not record s08 as written — re-script/re-render first.]_

[02:40 | Step 9 — Terminals page]
Into Settings, Hardware, Terminals. <break time="1.4s" /> This is the register you would check for that offline complaint. There is a plus New Record button up top; leave it alone. We are here to read, not to register anything.

[02:57 | Step 10 — Columns and Last Seen]
Run your eye across the columns. <break time="1.4s" /> Terminal, Location, I-P, Software Version, O-S, and Last Seen. Notice what is missing: no active or status column. So Last Seen is your answer, the moment the terminal last checked in. Today the rows did not load, so treat the values as parked. The columns are solid; the data fills in live.

_[Director: SUPERSEDED July 11 — the Terminals rows load live (Total Terminals 1,067; top row Last Seen 2026-01-10 22:47). This block's spoken "rows did not load" line contradicts the page; do not record s10 as written — re-script/re-render first.]_

[03:24 | Step 11 — Sales Tickets]
Last surface: Sales, then Tickets. <break time="1.4s" /> This is the live pulse of the lane. The list carries Location, Ticket number, Date and Time, Total, Status, Tender Type, and Customer, with a running total up top.

[03:40 | Step 12 — Filter and last ticket]
Filter to the site, then read the newest time stamp. <break time="1.4s" /> If the last ticket is minutes old, the lane is still writing. If it has been quiet for a stretch, that matches the N-O-C's zero transactions, and now you have a hard outage in writing. Skip Export.

_[Director: do not click Export; reading only.]_

[04:02 | Step 13 — Escalate]
Now escalate, cleanly. <break time="1.4s" /> Open Support Tickets and raise one with four things: the location code, the terminal I-D, the last-ticket time, and any alert I-Ds. The queue sorts by Ticket, Category, Location, Owner, Age, and Priority. Migration switches are the exception; those go to Jira, not here.

_[Director: do not submit a ticket on the shared demo.]_

[04:24 | Step 14 — Recap]
That is the whole loop. <break time="0.8s" /> Priority Intelligence to confirm the flag and its owner. The N-O-C for what broke and who has it. System Alerts and Terminals for the hardware picture. And the ticket feed to show whether the lane is still writing. Run them in that order every time, and your escalation carries the four facts a field tech needs to move without calling you back.

_(Estimated total ≈ 4:53. Timestamps are estimates at ~145 wpm; they firm up when the audio renders.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration prose. Verbatim UI strings, navigation paths, and the numbered steps are left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside verbatim platform strings quoted from the corpus (e.g. "POS system offline — 0 transactions for 47 min").
- Parked-surface status as of July 11: the Priority Intelligence deep-link destination (Step 4) remains TBD — parked; System Alerts (Step 8) and the Terminals rows (Step 10) are now observed live, which is why blocks s08 and s10 are flagged for re-render (see the scope note). LogicPOS 404 referenced as PARKED-ITEMS.md #2.
- No create, submit, or export control is triggered. Status: blocks s08/s10 pending re-script; do not generate until then.
- Verification stamp: **Verified against demo.washcentral.com on July 11, 2026** (non-spoken notes only; spoken script v1.0 pending s08/s10 re-script).
