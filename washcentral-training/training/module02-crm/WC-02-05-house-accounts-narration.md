# WC-02-05 — House Accounts · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (18 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 18 blocks `WC-02-05-s01.mp3`…`WC-02-05-s18.mp3` + joined `WC-02-05-full-narration-v1.0.mp3` (301.69s ≈ 5:02). Step duration = audio + 0.4 s. Per-step render seconds: s01 14.99 · s02 13.87 · s03 15.65 · s04 16.43 · s05 12.36 · s06 12.83 · s07 16.93 · s08 12.93 · s09 15.23 · s10 12.12 · s11 18.21 · s12 12.36 · s13 21.89 · s14 19.33 · s15 14.68 · s16 17.08 · s17 28.45 · s18 19.15.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-05-s01.mp3` … `WC-02-05-s18.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s. Estimated per-step seconds: s01 17.9 · s02 19.2 · s03 18.4 · s04 19.2 · s05 14.6 · s06 18.4 · s07 22.1 · s08 15.0 · s09 19.2 · s10 13.4 · s11 18.4 · s12 17.5 · s13 25.8 · s14 22.9 · s15 19.6 · s16 20.4 · s17 25.8 · s18 25.2.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the transition lands before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a control means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- CRM → "C-R-M" · KPI → "K-P-I"
- AR → "A-R"; "AR Aging" → "A-R aging"
- Net 30 → "net thirty" · YTD → "year to date" · MTD → "month to date"
- RFID → "R-F-I-D" · ALPR → "A-L-P-R" · POS → "P-O-S"
- Shyne → "Shine"
- Dollar figures and percentages are spoken naturally ("ten thousand dollars", "forty-two percent"). Account numbers such as HA-0042 are not read aloud.

### Scope notes (non-spoken)

- Read-only tour of **CRM → House Accounts** plus one account's detail. No record is created, edited, billed, or deleted.
- **Generate Invoices** (list) runs month-end billing and sends invoices. Do not depict clicking it (Step 4). On the detail, **Statement**, **Delete Account**, and **Edit Account** are read and skipped (Step 8), and no tab's create button (**+ New Invoice**, **+ Record Payment**, **+ Add Vehicle**, **+ Add Contact**, **Upload Document**, **Post Note**) is pressed.
- The detail is a fixed demo sample account (**TS Tech Solutions Inc**, **HA-0042**); the figures are layout examples, not one live customer.
- July 9 capture state: the list KPI strip and insight cards rendered, but the row grid showed "Couldn't load records (Failed to fetch)." The **Activity** tab showed an "Activity Feed" header with a persistent "Loading…" and never rendered its feed; its contents are parked (TBD). Step 17 narrates that honestly rather than inventing a feed.
- Header **Search ⌘K** and **Ask Shyne** are covered in WC-01-02 and not re-taught. The idle "Still there?" prompt is out of scope (WC-01-03).

## Timed script

[00:00 | Step 1 — Open House Accounts]
Fleet and corporate customers wash now and pay later. <break time="1.4s" /> This is where they live. Portfolio totals up top, three insight panels, and the account list below. When a fleet manager calls about a bill, you start on this screen.

[00:17 | Step 2 — KPI strip]
Four numbers, the whole book. <break time="1.4s" /> How many accounts you carry, how many are live, what they owe you right now, and the average credit line you extend. Outstanding is the one your callers care about. It is the money on the street.

[00:37 | Step 3 — Insight cards]
Three panels read the portfolio's health. <break time="1.0s" /> A balance trend over the year, credit use broken out by location, and the split of active, suspended, and closed. Watch the utilization bars. An account near its limit is an account about to decline.

[00:55 | Step 4 — List card & Generate Invoices]
Down to the list card. <break time="1.4s" /> Three buttons sit here. One of them, Generate Invoices, runs month-end billing across every account and sends real invoices. We locate it and we leave it alone. Know where it lives; never press it on a whim.

_[Director: hover Generate Invoices, hold on the STOP ring, do not click. This runs live billing.]_

[01:14 | Step 5 — Search & columns]
The rest is a familiar list. <break time="1.0s" /> Search by account, company, or contact. Filters beside it. Seven columns, ending in status. If you have worked the Customer List, you already know this one.

[01:29 | Step 6 — Open an account]
Open one account. <break time="1.4s" /> Click a row and the full account view opens. In the demo tenant every row opens the same sample account, so read the numbers as a layout, not as one real customer. The shape is what matters.

_[Director: the demo loads a fixed sample account regardless of the row clicked. Do not present the figures as live data.]_

[01:47 | Step 7 — Detail header]
The header is the account at a glance. <break time="1.4s" /> Company name, an active badge, then the account number, home location, and primary contact on one line. Three chips carry the terms: net thirty, a ten thousand dollar limit, fourteen vehicles. You know the deal before you read a single tab.

[02:09 | Step 8 — Header buttons]
Five buttons up top. <break time="1.4s" /> Back and search are safe. Statement, delete, and edit change or generate records, so on a support call you read them and stop. Nothing here gets clicked today.

_[Director: hover Statement, Delete Account, and Edit Account under a STOP ring; do not click any of them.]_

[02:24 | Step 9 — Metric band]
Six metrics run under the header. <break time="1.0s" /> Total balance, available credit, the limit, a monthly average, the last payment date, and when the account opened. Balance and available credit add up to the limit, so one look tells you how much room is left.

[02:43 | Step 10 — Related chips]
Beside the band, a set of quick counts. <break time="1.0s" /> Vehicles, invoices, payments, documents. They are shortcuts into the same records the tabs hold, with the totals right on the chip.

[02:57 | Step 11 — The ten tabs]
Ten tabs across the account. <break time="1.4s" /> Overview, details, contacts, vehicles, invoices, payments, activity, documents, notes, and audit trail. You will not touch all ten on a call. Knowing they exist means you never have to guess where a fact is stored.

[03:15 | Step 12 — Monthly Charges]
Overview opens on the billing story. <break time="1.0s" /> Monthly charges show the average month, the peak month, and last month, over the past year. This is the account's normal rhythm. It is what you compare against when a charge looks wrong.

[03:33 | Step 13 — AR Aging]
Now the panel that earns this lesson. <break time="1.4s" /> Aging splits what the account owes by how long it has gone unpaid: current, thirty to sixty, sixty to ninety, ninety plus, and a total. Older buckets are older debt. Anything sitting in ninety plus is the account most likely to get suspended. Read this before you promise a customer anything.

[03:59 | Step 14 — Wash Frequency & Account Health]
Two more panels finish the picture. <break time="1.0s" /> Wash frequency shows how hard the fleet is using its vehicles. Account health rolls up credit use, a payment score, and average days to pay. Payment score and days to pay are your fast read on whether this account pays like clockwork or drags its feet.

[04:21 | Step 15 — Invoices tab]
Click into invoices. <break time="1.4s" /> Every bill the account has been sent, with its amount, what has been paid, the balance, and a status of paid, open, or overdue. When someone asks about a specific charge, this is where you find the invoice behind it.

[04:41 | Step 16 — Payments tab]
Then payments. <break time="1.4s" /> The ledger shows each payment, how it was applied to invoices, the method, and who posted it. Watch the status column. A voided row explains a payment that looked received but was reversed, which is often the real answer to a billing dispute.

[05:01 | Step 17 — Remaining tabs]
The rest of the tabs, in a sentence each. <break time="1.0s" /> Details is the full record. Contacts, the people. Vehicles, the fleet roster. Documents holds agreements. Notes carries internal comments, some for everyone and some for management only. Audit trail is the change history. Activity would be the live feed, but it did not load at capture, so we park it.

_[Director: do not fabricate the Activity feed. Its contents did not render on July 9 and are parked as TBD.]_

[05:27 | Step 18 — Back & recap]
Back to the list. <break time="1.2s" /> That is a house account, end to end. The list gives you the portfolio and the billing button you never run casually. The detail gives you one account's balance, its aging, and the invoices and payments that answer where a charge came from. Next time a fleet manager calls, you know the path.

_(Estimated narration total: ~353.0 s ≈ 05:53. Estimates at ~145 wpm pending render; no audio generated this session.)_

## Generation log

- Script v1.0 written to the project narration craft standard: a 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and the numbered steps are left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Forbidden actions never depicted: **Generate Invoices** (Step 4), **Statement / Delete Account / Edit Account** (Step 8), and every tab-level create button are read and skipped. Director notes mark each do-not-click cue.
- Corpus-grounded: all facts trace to the July 9 verification digests and screenshots (`verification/2026-07-09/digests/crm-house-accounts.json`; `verification/2026-07-09/lessons/WC-02-05/` detail digests, innertext, and screenshots). The **Activity** feed is parked (did not render at capture). Status set to **READY FOR GENERATION** because the ElevenLabs key is not available in this session.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
