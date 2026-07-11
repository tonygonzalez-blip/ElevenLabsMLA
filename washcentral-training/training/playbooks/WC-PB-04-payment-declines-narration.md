# WC-PB-04 — Payment declines / auto-recharge failures · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-PB-04-s01.mp3`…`WC-PB-04-s13.mp3` + joined `WC-PB-04-full-narration-v1.0.mp3` (245.13s ≈ 4:05). Step duration = audio + 0.4 s. Per-step render seconds: s01 21.47 · s02 20.61 · s03 17.63 · s04 12.04 · s05 16.12 · s06 17.95 · s07 19.15 · s08 13.95 · s09 17.16 · s10 22.05 · s11 21 · s12 19.41 · s13 21.39.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-04-s01.mp3` … `WC-PB-04-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:37 (277 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the field names are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Customer 360 → "Customer three-sixty"
- OpenEdge → "Open Edge" · SmartTech → "Smart Tech" · CardConnect → "Card Connect" · OTHER block → "Other"
- Ask Shyne → "Ask Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S" · SMS → "S-M-S"
- "auto-recharge" → spoken naturally ("auto recharge"); "card updater" → spoken naturally

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Recover →** (step 2), **+ New Record** (step 8), **Export CSV** (step 11), **+ Add Card** or any credential control (steps 6, 10). Never read a masked credential value aloud or on camera.
- Steps 4–6 (Customer 360 → **Membership** / **Payments**) and step 10 (location **Payments & Credentials**) reference screens not in the July 9 corpus. Field names are attributed (Lesson 2.2 July 8 walk; gateway blocks per DISCREPANCIES #23); values are TBD — parked and captured live at record time.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Decline Rate baseline]
Start on the Command Center. <break time="1.4s" /> Down the left column, one number sizes the whole problem: the decline rate. Right now it reads a quarter of a percent, and the trend arrow points down. That's the entire network, not one member. Read it before you chase anyone. One expired card won't move it. A gateway going bad will.

[00:25 | Step 2 — Priority Intelligence]
Now scroll to Priority Intelligence. <break time="1.2s" /> WashCentral is already working the problem. One play flags eighteen recoverable billing failures through the card updater, worth about six hundred forty dollars to recover. Another shows the retry automation churning: thirty-seven queued, eleven already recovered. You're reading these, not launching them.

_[Director: do not click Recover.]_

[00:46 | Step 3 — Scope the ticket]
Before you click anything, size it. <break time="1.0s" /> One member says their card bounced? Head to Customer three-sixty. A wave of failures at one site? The declined card log, then that site's gateway. Charges about texts, not cards? That's a billing question. Same ticket, three different trails.

[01:07 | Step 4 — Open Customer 360]
Take the single-customer trail first. Open the member from the customer list. <break time="1.4s" /> Customer three-sixty opens on nine tabs, everything about this account in one place. The billing answers live two tabs in.

_[Director: Customer 360 detail is not in the July 9 corpus. Record against the live detail page; field names attributed to Lesson 2.2. Unshowable values: TBD — parked.]_

[01:23 | Step 5 — Membership billing cycle]
Open the Membership tab. <break time="1.4s" /> Find the billing cycle block. Two fields answer the ticket. Last payment result tells you whether the most recent charge failed. Next charge tells you when the system tries again. That's the member's side of the story in ten seconds.

[01:43 | Step 6 — Payments tab]
Now the Payments tab. <break time="1.4s" /> Here's the card on file and its expiry. Most single-member declines are just that: a card that expired or got pulled. The fix is a card update, or a link the member taps to re-enter it. That happens in production, with the right role. Never from this demo.

_[Director: do not click + Add Card; Update Card is production only, never sent from demo.]_

[02:06 | Step 7 — Declined Credit Card Log]
Back out to the many-customer trail. In Sales, open the declined credit card log. <break time="1.4s" /> Seven columns lay out every failed charge: date, customer, plan, amount, reason, attempts, location. When a member swears they paid and your record says declined, reason and attempts settle it.

[02:26 | Step 8 — Search and load state]
Search by customer or location to narrow it. <break time="1.2s" /> One caution from today's capture: the list came back empty with a fetch error. Don't read that as no declines. Confirm the data actually loaded before you tell a member their account is clean.

_[Director: do not click + New Record. Rows were not observable in the July 9 corpus — TBD — parked.]_

[02:45 | Step 9 — Settings Locations]
When it's the whole site, go to Settings, then Locations. <break time="1.4s" /> The locations list carries code, name, address, and last sync. And in the side menu, notice Payment Credential Approval. That's the gate every credential change has to pass through. Hold that thought.

[03:04 | Step 10 — Payments & Credentials]
Open the site and read its Payments and Credentials tab. <break time="1.4s" /> The processors sit in named blocks: Open Edge, Smart Tech, Other, and Card Connect. You report which block is involved. You never read the masked values, and you never hand-edit them. Any change goes through Payment Credential Approval, not this screen.

_[Director: read block names only. Tab body (AUTO CHARGE DECLINE ATTEMPTS / RECHARGE SCHEDULER) is TBD — parked; tab and blocks per DISCREPANCIES #23. Never expose a credential value.]_

[03:27 | Step 11 — Billing Usage by Source]
Different complaint, different page. If it's about text or email charges, open Billing, then Usage and Billing. <break time="1.4s" /> The Usage by Source panel breaks every charge down by campaign and automation: source, type, volume, cost, share. Card declines and messaging bills are two separate questions. This answers the second one.

_[Director: do not click Export CSV.]_

[03:49 | Step 12 — Package the escalation]
Now build the ticket. <break time="1.0s" /> Name the gateway. Attach a few decline samples with their reason and attempt count. Give the totals and the site or member affected. And the hard line: no card numbers, no credentials, not even masked. You diagnose and route. The retry and the fix happen upstream.

[04:11 | Step 13 — Recap]
So that's the playbook. <break time="0.8s" /> Read the decline rate to size it. Scope to one member or many. Follow it to Customer three-sixty, the declined log, or a site's gateway. Check Billing when the charge was really about messaging. Then escalate with the gateway, the samples, and the counts. You touched nothing. You just found the truth and passed it on.

_(Estimated total: about 4:37 / 277 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (field names spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: Command Center, Declined Credit Card Log, Settings Locations, and Billing Usage & Billing are grounded in the July 9 digests and screenshots. Customer 360 **Membership** / **Payments** (steps 4–6) are attributed to Lesson 2.2 (July 8 walk); location **Payments & Credentials** gateway block names (step 10) are grounded in DISCREPANCIES #23, with the tab body TBD — parked.
- No action row is triggered anywhere; every credential value stays masked and unspoken.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
