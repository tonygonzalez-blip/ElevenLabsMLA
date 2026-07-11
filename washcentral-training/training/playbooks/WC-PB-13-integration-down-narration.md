# WC-PB-13 — Integration down: Zoho, SSO, and accounting · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.1 (blocks s07, s08, and s10 re-scripted July 11, 2026, to the live captures; all other spoken lines unchanged) · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-PB-13-s01.mp3` … `WC-PB-13-s12.mp3` + joined `WC-PB-13-full-narration-v1.1.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-13-s01.mp3` … `WC-PB-13-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:32 (272 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the status chip and the token fields are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Zoho → "ZOH-hoh" · Zoho Desk → "ZOH-hoh Desk"
- SSO → "S-S-O" · GL → "G-L" · SMS → "S-M-S"
- QuickBooks → spoken naturally · Sage → spoken naturally
- 404 → "four-oh-four"
- "re-auth" → "ree-auth"; "single sign-on" → spoken naturally

### Scope notes (non-spoken)

- Read-only playbook. **Test Connection** and **Edit Configuration** are located and ringed, never clicked, never depicted running (steps 4 and 9). **+ New Record** (step 8) stays untouched. No credential value, masked or empty, is ever read aloud, zoomed, or copied.
- **Blocks s07, s08, and s10 re-scripted July 11, 2026** to the live captures: (a) **Help Desk (Zoho)** renders its not-connected view via the sidebar (`zoho-tickets-inapp.json`: subtitle **Support Tickets · Not connected**, **—** counts, **Zoho Desk not connected** card with **Go to Zoho Desk Settings →**; only the direct URL 404'd July 9) — s07 now teaches the dashes-in-a-healthy-frame read; (b) **System Users** loads live rows (`settings-system-users.json`: **8,022 Total Users**, **Yes/No** chips in **ACTIVE** and **SSO**) — s08 now reads the live list; (c) s10's transient-error rule no longer quotes the July 9 fetch-error and 404 states as "today." Reach Help Desk (Zoho) by the sidebar link only. Still TBD — parked, never staged: the connected-state status label (step 2), the **Instructions** tab body (step 6), and the accounting connector's field contents (step 9). No audio had been rendered, so the re-script supersedes nothing on disk.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope (PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Scope the ticket]
Three complaints, one shape. <break time="1.0s" /> Tickets stopped reaching Zoho. Single sign-on users locked out. An accounting export full of holes. Each one is a connector that quit authenticating, and each gets the same read: open the connector, check its status, check its token, then look at the surface the user actually feels.

[00:23 | Step 2 — Open the Zoho Desk connector]
Open the connector. Settings, Integrations, Zoho Desk. <break time="1.4s" /> One chip is the headline: Not Configured, with a warning triangle. In this demo tenant Zoho was never connected, so that reading is honest. On a live tenant that chip is your first and fastest read, before you touch anything else.

[00:46 | Step 3 — Four summary tiles]
Four tiles sit across the top of the card. <break time="1.4s" /> Connection reads Not set, which matches the banner. Data center, US. Sync direction, both. When a working connection drops, this row is the quick read before you go digging through credentials.

[01:04 | Step 4 — Locate Test Connection, never click]
Top right, two buttons. <break time="1.4s" /> Test Connection fires a live probe against the real integration. Edit Configuration opens the credential form. Both are admin actions on production. You locate them so your escalation can name them, and you never click either one from the demo tenant.

_[Director: STOP — cursor points only. Test Connection is never run and never depicted running.]_

[01:25 | Step 5 — Credentials and TOKEN EXPIRY]
Now the Settings tab, and the credentials block. <break time="1.4s" /> Client ID, secret, tokens: all blank or not set here. The field that matters most is token expiry. A connector that worked yesterday and fails today usually has a lapsed token behind it. Expiry in the past, access token gone. The re-auth is an admin job, and none of these values ever goes into your ticket.

_[Director: field names only on the zoom. Never expose a credential value, even masked or empty.]_

[01:53 | Step 6 — Enabled, sync, Instructions]
Two more reads before you leave. <break time="1.4s" /> Under General, Enabled says yes. Under Sync, the direction is both. So nobody switched it off. The failure is authentication. And the Instructions tab next door holds the reconnect procedure for the admin who runs it.

_[Director: point to the Instructions tab, do not open it. Body not in corpus — TBD — parked.]_

[02:13 | Step 7 — Help Desk (Zoho) surface]
Symptom one, the help desk surface. Open I-T and Support, then Help Desk Zoho. <break time="1.4s" /> The page loads, and it tells the truth. Every ticket count reads as a dash, and the card in the middle says Zoho Desk not connected, with a button routing back to Settings. Dashes in a healthy frame point at the connector, not the page. That is your ticket surface evidence.

_[Director: reach the page by the sidebar link only (the direct URL 404'd July 9). Hover the Go to Zoho Desk Settings → button; do not click it. Re-scripted July 11 to the live not-connected view; the July 9 "plan vs 404" discrepancy resolved in the plan's favor.]_

[02:42 | Step 8 — System Users SSO column]
Symptom two, single sign-on lockouts. Open System Users, under Users and Security. <break time="1.4s" /> More than eight thousand accounts load here, and two columns carry this ticket. S-S-O flags who signs in through the provider, plain yes or no chips. Last login shows when each of them last got in. When the provider drops, the yes rows are your outage list.

_[Director: do not click + New Record. Mask or scroll past identifiable rows. Re-scripted July 11 to the live list (8,022 Total Users; Yes/No chips in ACTIVE and SSO).]_

[03:10 | Step 9 — Accounting connector]
Symptom three, the accounting export. <break time="1.4s" /> Back in Integrations, the accounting connector reads exactly like Zoho did: status chip, test button, token block. Same read, same rules, same hands off. And if the connection is fine but entries land under the wrong codes, that's GL Code mapping. Different lesson.

_[Director: STOP ring over its Test Connection too. Field contents TBD — parked; hold the parked card if unavailable.]_

[03:32 | Step 10 — Rule out transient errors]
One trap before you write anything up. <break time="1.2s" /> Pages have bad minutes. A list that will not load, or a stray fetch error, can be the app's own data service hiccuping, and neither one proves an integration is down. Reload first. Then let the connector's status chip make the call.

[03:55 | Step 11 — Package the escalation]
Now the escalation. <break time="1.2s" /> Name the integration. Quote the status banner word for word. Say whether an admin ran Test Connection and what it returned. Give the failure window with timestamps. And keep every token, secret, and masked value out of it. No exceptions.

[04:14 | Step 12 — Recap]
That's the whole playbook. <break time="1.0s" /> Scope to one connector. Read the chip, then the token expiry. Locate Test Connection and leave it alone. Confirm the surface the user feels, rule out a transient fetch error, and route a ticket an admin can act on. Every screen stayed read-only, start to finish.

_(Estimated total: about 4:32 / 272 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION** (restored July 11 after the s07/s08/s10 re-script): script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (the status chip and token fields spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded: the Zoho Desk connector (`settings-integrations-zoho`) and the Integrations hub (`settings-integrations`) are grounded in the July 9 digests and screenshots; **Help Desk (Zoho)** (s07) and **System Users** (s08) are grounded in the July 11 in-app captures (`verification/2026-07-11/digests/zoho-tickets-inapp.json`, `settings-system-users.json`). The connected-state label, Instructions tab body, and accounting connector fields remain TBD — parked.
- Script v1.1 (July 11, 2026): blocks s07, s08, and s10 re-scripted to the July 11 captures (s07: not-connected view, not a 404; s08: live rows, 8,022 users; s10: transient-error rule no longer claims today's failures). Timestamps s08–s12 recomputed (+9 s estimated total). No other spoken line changed.
- **Test Connection** is never run and never depicted running; no credential value is spoken, zoomed, or copied; nothing is connected, edited, re-authenticated, or sent.
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**
