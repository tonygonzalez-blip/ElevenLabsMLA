# WC-12-09 — Integrations (SSO, Accounting, Help Desk) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-12-09-s01.mp3`…`WC-12-09-s14.mp3`, one TTS call per step, then joined to `WC-12-09-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available (not set in this session). Estimated total ~5:22 (matching the shot list's narration-bed estimate); per-block timestamps below are estimates at ~145 wpm plus break time plus a 0.4s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-09-s01.mp3` … `WC-12-09-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Zoho → "ZOH-ho"
- SSO → "S-S-O" · SCIM → "skim" · OAuth → "OH-auth"
- Entra → "EN-truh" · Okta → "OCK-tuh" · Cognito → "cog-NEE-toh"
- URI → "U-R-I" · ID → "I-D" · POS → "P-O-S" (not spoken in this script)
- Cron values are never read aloud digit by digit; describe the schedule in plain words instead.

### Scope notes (non-spoken)

- This lesson is view only from end to end. **Test Connection** is never clicked and never depicted firing; **Edit Configuration** is never opened; **Copy** on the redirect/URL fields is never clicked; no credential field is entered, edited, or read aloud.
- The **Instructions** tab content and the integrations hub landing page are TBD — parked (see the guide's Notes); neither is opened or described beyond its name.
- Credential values never appear in narration. Labels only. In this demo tenant the secret fields sit empty (Not set / —).
- The session-timeout "Still there?" dialog is out of scope (lesson 1.3; PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Zoho Desk page, breadcrumb and rail]
Every integration in WashCentral has its own page under Settings. <break time="0.8s" /> The breadcrumb confirms where you are, and the Integrations entry at the bottom of the left rail is the way in. We start on Zoho Desk, the help desk connector, because once you can read this page, you can read all eight.

[00:24 | Step 2 — Header identity block]
Start at the top. <break time="1.0s" /> The badge next to the title says what the integration is for, help desk in this case, and the pill beside it answers the client's first question. Not Configured means nothing is wired up in this tenant. One glance, and you already know the connection state.

[00:48 | Step 3 — Method chips]
Under the title, three small chips. <break time="1.0s" /> They name how WashCentral would talk to the vendor once connected. Every integration page swaps in its own set, so the chips become your fastest read on the method. Watch them change as we tour the other pages.

[01:10 | Step 4 — Test Connection and Edit Configuration]
Top right, two buttons, and we touch neither. <break time="1.4s" /> Test Connection fires a live call out to the vendor. Edit Configuration opens the credential editor. Both belong to an administrator. Your job on this page is to read it, and reading never requires a click up here.

_[Director: STOP rings on both buttons; hover near, never on. Neither is clicked at any point in the lesson.]_

[01:33 | Step 5 — Status tiles]
Now the tile strip. <break time="1.0s" /> Four tiles summarize health: the connection state, the data center, the org I-D, and which way data syncs. Notice Connection reads Not set, which agrees with the pill above. When those two match, you can trust the page's story.

[01:54 | Step 6 — Settings and Instructions tabs]
Below the tiles, two tabs. <break time="1.0s" /> Settings, the one that's open, holds the live field values. Instructions holds the vendor's setup steps, and we leave it closed today because its contents haven't been verified yet. Everything we need sits on the Settings tab.

[02:14 | Step 7 — CREDENTIALS group]
Scroll into the credentials group. <break time="1.4s" /> Client I-D, secrets, tokens, expiry. Here is the rule that never bends: you read the labels, never the values. In this demo tenant the fields sit empty anyway, but on a client's tenant a credential value never goes into a note, a screenshot, or a ticket.

[02:39 | Step 8 — Operational field groups]
Keep scrolling. <break time="1.2s" /> The remaining groups decide behavior once the connection is live. General turns it on, Routing picks a default department and assignee, Sync sets the direction, and Mapping ties Zoho's statuses to WashCentral's. That is the whole anatomy. The rest of this lesson is the same skeleton wearing different names.

[03:04 | Step 9 — Microsoft Entra ID]
Now Microsoft Entra I-D. <break time="1.4s" /> Same skeleton, different job. The badge now reads single sign-on, the chips describe Microsoft's method, and the tiles track the issuer, client I-D, and scopes instead of help desk fields. One field worth knowing: the redirect U-R-I, with its Copy button, is what an admin pastes into the identity provider.

[03:30 | Step 10 — Google, Okta, Cognito]
Google, Okta, Cognito. <break time="1.4s" /> Three more providers, one layout. Only the name and the method chips change from page to page, and every one of them sits at Not Configured here. Learn the Entra page and you have learned all four. That is the payoff of the shared anatomy.

[03:53 | Step 11 — SCIM Provisioning]
SCIM, pronounced skim, is the odd one out. <break time="1.4s" /> Instead of signing people in, it creates and deactivates users automatically from the identity provider. The tiles track its status and last event, and the sync log below stays empty until provisioning events start arriving.

[04:15 | Step 12 — Sage Accounting]
On to accounting. Open Sage. <break time="1.4s" /> The shape holds, but the fields turn financial. The sync schedule tile shows a cron value because Sage posts on a timer, two in the morning here, not on every sale. And note the safety group's dry run flag, a rehearsal switch that tests a sync without posting anything.

[04:40 | Step 13 — QuickBooks Online]
QuickBooks Online, the other ledger. <break time="1.4s" /> Same badge, same subtitle, different vendor. Its credentials add a realm, which is QuickBooks' name for the company I-D, alongside the usual tokens. Sage and QuickBooks do one job through two doors, the same pattern you just saw across the four sign-on providers.

[05:00 | Step 14 — Recap on Zoho Desk]
Back to Zoho for the read that matters. <break time="1.4s" /> A client says the integration is broken. You check three things in order: the status pill, then Test Connection, remembering an admin runs it, not you, then token expiry in the credentials. That answers "is it connected?" from one page, without filing a bug.

_[Director: sweep pill → Test Connection → TOKEN EXPIRY in that order; Test Connection is never clicked. End card carries the verification stamp.]_

_(Estimated narration total: ~322s ≈ 05:22, matching the shot list's narration-bed estimate. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after render and align each block to its step marker.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- View-only discipline honored throughout: **Test Connection** and **Edit Configuration** are located and never clicked or depicted firing; **Copy** is never clicked; credential values are never spoken (labels only). The **Instructions** tab and the hub landing page stay parked and unopened.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
