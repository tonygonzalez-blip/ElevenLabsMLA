# WC-10-03 — Help Desk (Zoho) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the canonical spec, guide, and shot list one-to-one (10 steps). Timestamps are estimates at ~145 wpm pending render.

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 10 blocks `WC-10-03-s01.mp3`…`WC-10-03-s10.mp3` + joined `WC-10-03-full-narration-v1.0.mp3`. Estimated total ~190.3 s / ~3:10 (pending render; per-step seconds finalized after ffprobe).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-03-s01.mp3` … `WC-10-03-s10.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a tool means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Zoho → "ZOH-hoh"; Zoho Desk → "ZOH-hoh Desk"
- OAuth → "oh-auth"; OAuth 2.0 → "oh-auth two point oh"
- HTTP 404 → "H-T-T-P four-oh-four"
- API → "A-P-I" · POS → "P-O-S" · ALPR → "A-L-P-R"
- Shyne → "Shine"
- WC-12-09 → "lesson twelve point nine"

### Scope notes (non-spoken)

- Covers the **Help Desk (Zoho)** page and the read of its connection status on `Settings → Integrations → Zoho Desk`. Full field-by-field configuration is WC-12-09 and is out of scope here.
- **NEEDS PARTIAL RE-RENDER (July 11, 2026): block s02 only.** The July 11 in-app capture (`verification/2026-07-11/digests/zoho-tickets-inapp.json`) shows **Help Desk (Zoho)** renders its not-connected embedded view (subtitle **Support Tickets · Not connected**, — count placeholders, status/priority filters, empty-state card **Zoho Desk not connected** with **Go to Zoho Desk Settings →**) when reached from the sidebar; only the direct URL 404'd on July 9. Block s02's spoken "nothing loads. You get a bare Not Found page" contradicts the live page and must be re-scripted and re-rendered. All other blocks (s01, s03–s10) remain accurate. Spoken lines left untouched per the audio-lock rule.
- Read-only lesson. Do not depict clicking **Test Connection** or **Edit Configuration**, and do not open the **Instructions** tab content.

## Timed script

[00:00 | Step 1 — IT & Support sidebar]
Start in the left rail, under I-T and Support. <break time="1.0s" /> The Support group stacks your ticket tools together. Right below Support Tickets sits Help Desk, Zoho. One is WashCentral's own queue. The other is meant to mirror a help desk that lives outside the platform.

[00:20 | Step 2 — Open Help Desk (Zoho)]
Open Help Desk, Zoho. <break time="1.4s" /> In this training tenant, nothing loads. You get a bare Not Found page instead of a ticket list. That's your signal the outside connection isn't live, and the place to confirm it is over in Settings.

_[Director: SUPERSEDED July 11 — the page now renders its not-connected view via the sidebar (breadcrumb Support › Help Desk Tickets, — counts, empty-state card). This block's spoken text contradicts the live page; do not record until s02 is re-scripted and re-rendered.]_

[00:40 | Step 3 — Open Zoho Desk settings]
Head to Settings, Integrations, Zoho Desk. <break time="1.4s" /> This is the control room for the connection. Whether Zoho talks to WashCentral is read from this one page, so it's where support work on this integration starts.

[00:57 | Step 4 — Header & status]
Look at the header. <break time="1.4s" /> A warning badge reads Not Configured. That's the whole story in two words. The chips beside it name how the link would work once someone sets it up: oh-auth, a live view, a server-side token.

[01:16 | Step 5 — Status tiles]
Run across the four tiles. <break time="1.2s" /> Connection, not set. Data center, US. Sync direction, both. So the tenant has picked how it wants to sync, but no one has authorized the link yet.

[01:31 | Step 6 — Credentials]
Drop into the Credentials group. <break time="1.4s" /> Client I-D, blank. Secret, not set. Access and refresh tokens, not set. With nothing stored here, there's no live line to Zoho, which is exactly why the Help Desk view had nothing to show.

[01:50 | Step 7 — Routing, sync, behavior, mapping]
Keep reading down. <break time="1.2s" /> Routing, sync, behavior, mapping. These rules decide where tickets land and which way they flow once the link goes live. Notice Enabled says Yes while the status still says Not Configured. Switched on in intent, not yet connected.

[02:10 | Step 8 — Settings & Instructions tabs]
Two tabs sit under the header. <break time="1.0s" /> Settings, where you are, and Instructions. The full setup walk-through lives under Instructions, and in lesson twelve point nine. For today, stay on Settings and just read.

[02:25 | Step 9 — Guardrail buttons]
Top right, two buttons. <break time="1.4s" /> Test Connection, and Edit Configuration. Test Connection pings Zoho for real. Edit Configuration opens the credentials. Both touch the live integration, so neither one gets clicked in a read-only check, or in support unless the change is yours to make.

_[Director: do not click Test Connection or Edit Configuration.]_

[02:45 | Step 10 — Recap]
So, Help Desk, Zoho. <break time="1.0s" /> It's an embedded window into an outside help desk, empty here because the integration is Not Configured. When a real client's Zoho tickets go quiet, this is the page you open, and Token Expiry is the first field you read. You never have to click Test Connection to know where you stand.

_(Estimated narration total: ~190.3s ≈ 03:10, pending render. Per-step seconds to be confirmed with ffprobe at generation time.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside director notes.
- Read-only throughout: **Test Connection** and **Edit Configuration** are never clicked, and the **Instructions** tab content is never opened.
- Corpus note (updated July 11): the Help Desk (Zoho) direct URL returned HTTP 404 in the July 9 corpus; the July 11 in-app capture confirmed the not-connected embedded view, which invalidates block s02's spoken text (re-render needed for that block only). The connection status remains grounded on `settings-integrations-zoho.html`.
- Verification stamp: **Verified against demo.washcentral.com on July 11, 2026** (non-spoken notes only; spoken script v1.0 pending s02 re-script).
