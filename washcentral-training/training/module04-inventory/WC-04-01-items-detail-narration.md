# WC-04-01 — Items and detail · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v2.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-04-01-s01.mp3`…`WC-04-01-s13.mp3` + joined `WC-04-01-full-narration-v1.0.mp3` (218.64s ≈ 3:39). Step duration = audio + 0.4 s. Per-step render seconds: s01 16.27 · s02 13.17 · s03 16.43 · s04 16.12 · s05 17.87 · s06 15.31 · s07 20.27 · s08 13.56 · s09 19.64 · s10 17.08 · s11 17.24 · s12 17.16 · s13 13.32.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-04-01-s01.mp3` … `WC-04-01-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:22 (262 s). Pending render.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- SKU → "S-K-U" (spell it out)
- QTY → "quantity"
- Item codes such as INV-001 → not read aloud; refer to "the first item" / "this item"
- Ask Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Read-only lesson. No record is created, edited, or saved. **Export** is never clicked; **Delete** and **Edit Record** are never clicked; the record is left by **← Back** only (voiced in s12).
- **July 11, 2026:** the row click opens the read-only **Item Detail** page (**← Back / Delete / Edit Record**), and tabs 2–3 render the same eight fields as **Item Details** (logged discrepancy). Blocks s07 and s09–s12 narrate that observed page; spoken field values (SKU, description, cost, price, quantity, type, vendor) come from the `inv-item-detail-*.json` digests and guide v2.0 steps 9–11.
- The **Inventory Items Edit** form (Cancel/Save Changes, captured July 9) is out of scope for this script; whether **Edit Record** routes to it is TBD — parked (guide Notes). In the demo tenant the row click loads the fixed sample item INV-001 regardless of row (guide Notes); the script follows guide step 6 and clicks the first row, which is INV-001.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to lesson 1.3.

## Timed script

[00:00 | Step 1 — Inventory Items]
Open Inventory, then Inventory Items. <break time="1.4s" /> This is the master catalog of everything a site stocks and sells off the shelf. Tunnel chemicals, counter supplies, the equipment behind them. The rest of the inventory pages wait in the sidebar for the next lesson.

[00:19 | Step 2 — KPI strip]
Start with the four tiles up top. <break time="1.2s" /> Total items, low stock, categories, vendors. The one that earns a daily glance is low stock. It counts what's running thin before a cashier tells you the shelf is empty.

[00:36 | Step 3 — Insight panels]
Below them, three quick reads. <break time="1.2s" /> A twelve-month count trend, the mix by category, and the split between active, low, and discontinued stock. You size up the whole catalog here before scrolling a single row, which is often all a quick stock question needs.

[00:55 | Step 4 — Item List toolbar]
Now the list itself. <break time="1.4s" /> New Record builds an item from scratch; that's a training exercise, not for today. Export ships the data out, so leave it alone. Filters and search are how you find one item in a long catalog.

[01:14 | Step 5 — Columns]
Read across the columns. <break time="1.4s" /> Two IDs, two prices, a count, a type, a vendor. The item ID is WashCentral's own number; the S-K-U is the stock code you match against a shipment. Cost is what you pay, price is what the customer pays.

[01:33 | Step 6 — Open item]
Click the first row to open its record. <break time="1.4s" /> The header names the item, badges it as an inventory item, and tags it with type and stock chips, so you know what you're holding before you read a field. One row, one full record behind it.

[01:53 | Step 7 — Action buttons]
Look top right: three buttons. <break time="1.2s" /> Back, Delete, and Edit Record. Back is the only one we use. Delete removes a record from a live shared tenant, so it never gets clicked in training. Edit Record opens the editing flow, and editing is its own workflow with its own rules. Find all three, then leave two of them alone.

_[Director: point out all three buttons; do not click Delete or Edit Record at any point on this record.]_

[02:18 | Step 8 — Tabs]
The record splits its fields across three tabs. <break time="1.2s" /> Item details, pricing and stock, storage and location. The legacy Pricing and Tax and Commission and Service names are gone; this is the layout you'll actually see on the floor.

[02:35 | Step 9 — Item Details fields]
Start on Item Details. <break time="1.4s" /> Eight read-only fields, mirroring the eight columns you just left. The item's two IDs, its description, what it costs, what it sells for, forty two units on hand, its type, and its vendor. That is the ticket answer in one card. What do we charge, and how many are left.

[03:00 | Step 10 — Pricing & Stock]
Open the Pricing and Stock tab. <break time="1.4s" /> Watch what changes. The heading does. The fields underneath do not. The same eight facts render again, top to bottom. That repetition is what this tenant actually shows today, and it is logged, so do not hunt for pricing-only fields that are not there.

[03:23 | Step 11 — Storage & Location]
Then Storage and Location. <break time="1.4s" /> Same pattern. A new heading, the identical eight fields, and no bin, aisle, or site anywhere on the page. So treat the tabs as navigation and learn the eight fields once. If storage detail lands here on a later build, a future pass will pick it up.

[03:44 | Step 12 — Back out]
Change nothing, then click Back. <break time="1.2s" /> The detail page closes and drops you back on the list, the record exactly as you found it. On a shared live tenant that discipline matters. Reading answers the ticket, and Back guarantees you left no mark.

[04:03 | Step 13 — Recap]
That's Inventory Items end to end. <break time="0.8s" /> Counts and trends up top, eight columns across the list, and a three-tab record behind every row. You read all of it and change none of it, which is exactly how a stock question should be answered.

_(Estimated narration total: ~262 s ≈ 4:22 at ~145 wpm. Re-measure per block with ffprobe after render; adjust step markers if drift exceeds 0.5 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item phrasing.
- v1.0 history: written against the July 9 corpus, where the only record page captured was the **Inventory Items Edit** form; blocks s07 and s09–s12 voiced the Cancel/Save layout and parked tabs 2–3 (captured by name only).
- **July 11, 2026:** read-only detail page confirmed and captured (guide v2.0, shot list v2.0); blocks s07 and s09–s12 contradicted the platform and the status moved to PARTIAL RE-AUTHOR pending rewrite. No audio was ever rendered from v1.0, so nothing approved was discarded.
- **July 11, 2026 — v2.0 re-author.** Blocks s07 and s09–s12 rewritten against guide v2.0 steps 7 and 9–12 and the `inv-item-detail-*.json` digests: the **← Back / Delete / Edit Record** buttons (only **← Back** used), the eight read-only **ITEM DETAILS** fields, the observed same-eight-fields repetition on **Pricing & Stock** and **Storage & Location** (logged discrepancy), and the **← Back** exit. Blocks s01–s06, s08, s13 unchanged. Timestamps recomputed at ~145 wpm; new estimated total ~4:22. Humanizer craft rules re-applied to the new blocks. Status: **READY FOR GENERATION**.
- Script text stamp updated to **July 11, 2026**, matching the v2.0 guide and shot list.
