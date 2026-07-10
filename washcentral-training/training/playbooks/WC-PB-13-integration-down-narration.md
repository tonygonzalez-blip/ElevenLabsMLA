# WC-PB-13 — Integration down: Zoho, SSO, and accounting · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-PB-13-s01.mp3` … `WC-PB-13-s12.mp3` + joined `WC-PB-13-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-13-s01.mp3` … `WC-PB-13-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:23 (263 s). Confirm against rendered per-step seconds once the key is available.

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
- Corpus gaps, all TBD — parked and never staged: the connected-state status label (step 2), the **Instructions** tab body (step 6), the **Help Desk (Zoho)** page contents (step 7 — 404 on July 9), the **System Users** rows (step 8 — fetch error on July 9), and the accounting connector's field contents (step 9).
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
Symptom one, the help desk surface. Open IT and Support, then Help Desk Zoho. <break time="1.4s" /> In today's capture this page came back as a four-oh-four. The menu item is real. The page is not serving. Until it loads, the connector's own status chip is your reliable signal for whether tickets sync.

_[Director: record whatever the live page serves; contents TBD — parked. New discrepancy: the plan expects an empty inbox here, the corpus shows a 404.]_

[02:35 | Step 8 — System Users SSO column]
Symptom two, single sign-on lockouts. Open System Users, under Users and Security. <break time="1.4s" /> Eight columns, and two carry this ticket. SSO flags who signs in through the provider. Last login shows when each of them last got in. Today the rows themselves failed to load, so treat the list as unconfirmed until the fetch succeeds.

_[Director: do not click + New Record. Rows TBD — parked.]_

[02:58 | Step 9 — Accounting connector]
Symptom three, the accounting export. <break time="1.4s" /> Back in Integrations, the accounting connector reads exactly like Zoho did: status chip, test button, token block. Same read, same rules, same hands off. And if the connection is fine but entries land under the wrong codes, that's GL Code mapping. Different lesson.

_[Director: STOP ring over its Test Connection too. Field contents TBD — parked; hold the parked card if unavailable.]_

[03:20 | Step 10 — Rule out transient errors]
One trap before you write anything up. <break time="1.2s" /> Two screens today failed with a fetch error, and one page four-oh-foured. None of that proves an integration is down. An empty list can be the app's own data service having a bad minute. Reload first. Then let the connector's status chip make the call.

[03:43 | Step 11 — Package the escalation]
Now the escalation. <break time="1.2s" /> Name the integration. Quote the status banner word for word. Say whether an admin ran Test Connection and what it returned. Give the failure window with timestamps. And keep every token, secret, and masked value out of it. No exceptions.

[04:02 | Step 12 — Recap]
That's the whole playbook. <break time="1.0s" /> Scope to one connector. Read the chip, then the token expiry. Locate Test Connection and leave it alone. Confirm the surface the user feels, rule out a transient fetch error, and route a ticket an admin can act on. Every screen stayed read-only, start to finish.

_(Estimated total: about 4:23 / 263 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (the status chip and token fields spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: the Zoho Desk connector (`settings-integrations-zoho`), the Integrations hub (`settings-integrations`), and System Users columns (`settings-system-users`) are grounded in the July 9 digests and screenshots; **Help Desk (Zoho)** 404'd in the corpus (`zoho-tickets`, contents TBD — parked); the connected-state label, Instructions tab body, System Users rows, and accounting connector fields are TBD — parked.
- **Test Connection** is never run and never depicted running; no credential value is spoken, zoomed, or copied; nothing is connected, edited, re-authenticated, or sent.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
