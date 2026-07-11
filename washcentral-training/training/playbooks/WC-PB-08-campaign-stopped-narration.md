# WC-PB-08 — Campaign / automation stopped sending · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · July 9, 2026 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-PB-08-s01.mp3`…`WC-PB-08-s12.mp3` + joined `WC-PB-08-full-narration-v1.0.mp3` (229.04s ≈ 3:49). Step duration = audio + 0.4 s. Per-step render seconds: s01 17.32 · s02 16.85 · s03 18.52 · s04 19.88 · s05 21.24 · s06 20.27 · s07 19.57 · s08 19.15 · s09 19.15 · s10 14.52 · s11 20.69 · s12 17.08.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-08-s01.mp3` … `WC-PB-08-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:09 (249 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the status values and the scheduler cells are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- SMS → "S-M-S" · TCPA → "T-C-P-A" · POS → "P-O-S"
- Ask Shyne → "Ask Shine"
- ⛅ Weather paused → spoken "weather paused" (the pill icon is never voiced)
- 0.18% → "point one eight percent" · 0.10% → "point one zero"

### Scope notes (non-spoken)

- Read-only playbook. Never trigger a campaign row's action, the **Review campaign →** link (step 4), any **Engagement-Based Suppression** toggle (step 5), **+ New Record** (steps 7, 8), or **Export CSV** (step 9). Never resume, launch, or reconfigure a campaign.
- The weather-pause config surface (step 3) and the **Spending Alerts** tab contents (step 9) are not in the July 9 corpus — TBD — parked (PARKED-ITEMS.md #6 for weather-pause). The **Mass SMS Log** body (step 8) showed a fetch error in the corpus; rows are TBD — parked.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Campaign KPIs]
Start in Marketing, on Campaigns. <break time="1.4s" /> Four tiles across the top, and one is the headline: zero sent this month. When a manager says nothing went out, that tile confirms it at the network level. Sends have stalled. This is bigger than one missed text.

[00:20 | Step 2 — The Status column]
Drop to the campaign list. Read, don't click. <break time="1.4s" /> The column that matters is status. A draft was never launched. A completed campaign already finished its run. Neither will send now. Only scheduled and active campaigns are eligible, so those rows are the investigation.

_[Director: do not click a row. The Automation sibling list is not in the July 9 corpus — TBD — parked.]_

[00:40 | Step 3 — The weather-pause pill]
Look closer at the eligible rows. <break time="1.2s" /> Two carry a pill: weather paused, six locations. That is a built-in hold, not an error. The platform is holding sends at those six sites on purpose. Name the pill in the ticket, and route the config question. Where it is set is not visible here.

_[Director: do not click the pill. Weather-pause config and what it gates are TBD — parked (PARKED-ITEMS.md #6).]_

[01:03 | Step 4 — Deliverability banner]
Now Marketing, Deliverability. <break time="1.4s" /> The banner is the second reason a campaign goes quiet. Spam complaints on Flash Sale Weekend hit point one eight percent against a point one zero threshold, so the platform recommends pausing sends to protect the domain. A campaign can look active and still be held here.

_[Director: do not click Review campaign →.]_

[01:25 | Step 5 — List health and suppression]
Sweep the numbers underneath. <break time="1.4s" /> In the metrics list, spam complaint rate is flagged for action. That flag is what the banner reacts to. Below it sit the engagement suppression toggles, live switches that decide who the platform stops emailing. Note their state. Never flip one while diagnosing.

_[Director: do not flip any Engagement-Based Suppression toggle; do not click Run Full Audit.]_

[01:46 | Step 6 — Task Scheduler KPIs]
Third stop: the engine. Settings, Automation, Task Scheduler. <break time="1.4s" /> Eighteen tasks, sixteen active, zero failed. Read zero failed first. The scheduling engine is healthy, so a stopped campaign is more likely a status or a guardrail than a broken job. A positive number here would change that instantly.

[02:08 | Step 7 — The SMS Campaigns row]
Find the S-M-S Campaigns row. <break time="1.4s" /> This is the heartbeat of outbound texting. It runs hourly, it last ran an hour ago, it is due again in fifty-two minutes, and its status is active. An eligible, unpaused campaign that is still silent, plus a stale or inactive row here? That is your evidence.

_[Director: do not click + New Record. Only three of a claimed eighteen rows loaded July 9 — TBD — parked.]_

[02:28 | Step 8 — Mass SMS Log]
Fourth stop: the trail. Settings, Automation, Mass S-M-S Log. <break time="1.4s" /> One row per recipient, with a status on each. Today's capture returned a fetch error and zero entries. Do not read that as nothing sent. Confirm the data loaded before you tell anyone the messages never went out.

_[Director: do not click + New Record. Send rows TBD — parked (Failed to fetch, July 9).]_

[02:49 | Step 9 — Billing tabs]
Last angle: money. Open Billing, then Usage and Billing. <break time="1.4s" /> Two tabs matter. Invoices shows one open, an unpaid bill. Spending Alerts is where a usage cap would live. Both are places to check, not confirmed causes. Name the tab and the count. Do not assert the mechanism.

_[Director: do not click Export CSV; do not open Spending Alerts on camera if empty. Its contents are TBD — parked (only Overview in corpus).]_

[03:10 | Step 10 — Usage by Source]
Stay on Overview and read Usage by Source. <break time="1.4s" /> Every row is a campaign, an automation, or a transactional send, with volume and cost this period. If the ticket names a campaign, this panel settles it: did it send anything this month, and how much.

[03:30 | Step 11 — Package the escalation]
Now build the ticket. <break time="1.0s" /> The campaign name, its type and status chip, the weather pause pill if present. The deliverability signal. The scheduler timestamps, last run and next run. State which gate you found. Resuming the campaign happens in production with the right role. Never here.

[03:51 | Step 12 — Recap]
That's the narrowing flow. <break time="0.8s" /> Status first, because draft and completed never send. Deliverability for a reputation hold. Task Scheduler for the heartbeat. The log for the trail. Billing for a cap or an open invoice. You escalated with evidence and moved nothing.

_(Estimated total: about 4:09 / 249 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (status values and scheduler cells spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: Marketing Campaigns, Deliverability, Task Scheduler, Mass SMS Log, and Billing Usage & Billing are grounded in the July 9 digests and screenshots. The weather-pause config surface and the **Spending Alerts** tab contents were not captured and stay TBD — parked; the **Mass SMS Log** rows showed a fetch error and stay TBD — parked.
- No action is triggered anywhere; no campaign is resumed, launched, or reconfigured, and no suppression toggle is flipped.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
