# WC-11-01 — Usage & Billing · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-11-01-s01.mp3`…`WC-11-01-s14.mp3` + joined `WC-11-01-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; timestamps below are estimates at ~145 wpm plus break time, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-11-01-s01.mp3` … `WC-11-01-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- SMS → "S-M-S"
- Nth Wash Rewards → "Enth Wash Rewards"
- Shyne → "Shine"
- POS → "P-O-S"

### Scope notes (non-spoken)

- Covers the **Usage & Billing** page (`billing-usage.html`): the billing-period line, the KPI band, the three **Overview** panels, and the six-tab bar. Read-only throughout; nothing is exported and no invoice is touched.
- The export control on **Year-to-Date Summary** is never depicted in use and never named as a spoken label; the narration only warns it stays alone.
- The five tabs beyond **Overview** were not captured in the July 9 corpus. Their spoken blocks (steps 9–13) describe purpose only and defer contents to live confirmation; do not add spoken labels for anything inside those tabs.
- The "Last 6 months" caption versus seven rendered bars on **Monthly Usage Cost** is a logged discrepancy; the narration tells the viewer to count the bars.

## Timed script

[00:00 | Step 1 — Open Usage & Billing]
Messaging costs money, and this is the page where that money shows up. From the Billing area, open Usage and Billing. <break time="1.4s" /> One screen turns a wash's texts and emails into a bill. When a client calls about messaging charges, everything you need is here, and all of it is read only.

[00:22 | Step 2 — Billing-period line]
Read the line under the heading first. <break time="1.2s" /> Current billing period, May 2026, with the date range, the next invoice date, and the days remaining. Every number on this page belongs to that period. Anchor here before you quote a single figure to a client.

[00:42 | Step 3 — KPI band]
Now the four tiles. <break time="1.2s" /> Two of them are spend: what texting cost this period, and what email cost. The other two are volume, each with a delivered percentage beside it. Cost on the left, activity on the right. That's the whole bill at a glance.

[01:02 | Step 4 — Tab bar]
Under the band, six tabs. <break time="1.2s" /> Overview is the summary, and it's open now. The rest drill into one thing each: text detail, email detail, invoices, the rate card, and spending alerts. Notice the badge on Invoices. One open. That's a client's actual bill, waiting.

[01:22 | Step 5 — Monthly Usage Cost]
Start with the left panel, Monthly Usage Cost. <break time="1.2s" /> Stacked bars show combined text and email spend by month, back through November. The current month carries an asterisk: estimated, month not complete. Never quote May as final until it closes. And one caption quirk: the subtitle says six months, but seven bars render. Count the bars.

[01:45 | Step 6 — Usage by Source columns]
The right panel is the one to learn: Usage by Source. <break time="1.2s" /> Every row is one campaign, automation, or transactional stream, with its volume, its cost, and a share bar ranking it. This table answers the most common billing call there is: why did my bill move?

[02:05 | Step 7 — Usage by Source rows]
Read the rows top down. <break time="1.2s" /> This period, the Enth Wash Rewards automation is the biggest line at nearly thirty two dollars, ahead of the membership drive and the win-back campaigns. Receipts barely register. One row usually explains the whole swing, and the share bars point you straight at it.

[02:27 | Step 8 — Year-to-Date Summary]
Scroll to the Year to Date Summary. <break time="1.4s" /> Platform fees, text and email cost for the year, total billed, and total paid, with a checkmark reading current. Billed equals paid, so this account is square. There's an export control on this panel. Leave it alone; nothing exports in this walk.

_[Director: STOP at the export control on Year-to-Date Summary; it is never clicked and never shown in use.]_

[02:49 | Step 9 — SMS Usage tab]
Now walk the tabs. Click S-M-S Usage. <break time="1.4s" /> This is the detail behind the period's texting spend. Its panels weren't captured in the verification corpus, so read what renders and hold. The layout gets confirmed live before this segment ships.

_[Director: steps 9 through 13 open tabs whose contents are TBD — parked; hold on each view, interact with nothing inside it.]_

[03:07 | Step 10 — Email Usage tab]
Next, Email Usage. <break time="1.2s" /> Same idea for the email channel: the volume and cost behind the tile you read earlier. Layout parked, confirmed at record time.

[03:19 | Step 11 — Invoices tab]
Click Invoices, the tab with the badge. <break time="1.4s" /> Usage explains the charges; this tab holds the bill itself. When a client wants the document rather than the why, send them here. One invoice sits open in this period.

[03:36 | Step 12 — Rate Card tab]
Rate Card next. <break time="1.2s" /> Per message pricing lives here, the multiplier that turns volume into spend. Contents parked pending live confirmation.

[03:46 | Step 13 — Spending Alerts tab]
And Spending Alerts. <break time="1.2s" /> Thresholds that warn before messaging spend runs away. Worth knowing this exists when a client is surprised by a bill. Contents parked.

[03:58 | Step 14 — Back to Overview]
Back to Overview. <break time="1.2s" /> Two questions cover most billing calls. Why did the bill move? Usage by Source, top row first. Where's the bill itself? The Invoices tab, badged one open. Read the period line, respect the asterisk, and never touch the export. That's the whole page.

_(Estimated narration total: ~258s ≈ 04:18 at ~145 wpm plus break time. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: nothing exported, no invoice opened or approved, and the export control on **Year-to-Date Summary** is never depicted. Tab contents beyond **Overview** are parked and deferred to live confirmation; the spoken blocks for steps 9–13 name no unverified label.
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
