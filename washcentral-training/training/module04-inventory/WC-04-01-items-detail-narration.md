# WC-04-01 — Items and detail · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **PARTIAL RE-AUTHOR + RE-RENDER NEEDED (July 11, 2026).** The July 11 pass confirmed the row click opens the read-only **Item Detail** page (`inv-items-detail.html`: **← Back / Delete / Edit Record**, three tabs all captured), not the edit form this script describes. Blocks s07 (Cancel/Save Changes), s09 (required-field/dropdown/toggle layout), s10–s11 ("captured by name only… parked"), and s12 ("click Cancel") contradict the observed page; s10–s11 also miss the observed behavior that tabs 2–3 repeat the same eight fields (logged discrepancy). Spoken lines preserved unedited per the audio-lock rule; re-author against guide v2.0 before any TTS call. Render settings when re-authored: WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3, 13 blocks `WC-04-01-s01.mp3` … `WC-04-01-s13.mp3`.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-04-01-s01.mp3` … `WC-04-01-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 3:56 (235.8 s). Pending render.

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

- Read-only lesson. No record is created, edited, or saved. **Export** is never clicked.
- **July 11, 2026 update:** the row click opens the read-only detail page (**← Back / Delete / Edit Record**; exit by **← Back**), and tabs 2–3 render the same eight fields as **Item Details** (logged discrepancy). This script's blocks s07 and s09–s12 describe the July 9 edit-form state and are superseded — do not generate audio from them (see Status). The re-authored script must keep **Delete** and **Edit Record** untouched.
- Original July 9 notes, kept for history: the only record page captured then was the **Inventory Items Edit** form (left by **Cancel** only, **Save Changes** never clicked); the row-click loads a fixed sample item (INV-001) in the demo tenant — narrate it as "the item's record," not as the row you clicked; **Pricing & Stock** and **Storage & Location** fields were parked (captured by name only).
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

[01:53 | Step 7 — Cancel vs Save]
Look top-right: Cancel and Save Changes. <break time="1.2s" /> The same pair repeats at the bottom of the form. Save writes straight to the live record, so while you're documenting you never touch it. Cancel is your way out, every time.

_[Director: point out both buttons; do not click Save Changes at any point on this record.]_

[02:10 | Step 8 — Tabs]
The record splits its fields across three tabs. <break time="1.2s" /> Item details, pricing and stock, storage and location. The legacy Pricing and Tax and Commission and Service names are gone; this is the layout you'll actually see on the floor.

[02:27 | Step 9 — Item Details fields]
Start on Item Details. <break time="1.4s" /> S-K-U, description, and inventory type carry a star, so they're required. Vendor and category are dropdowns, and a single toggle marks whether the item is active. That's the item's identity in six fields.

[02:44 | Step 10 — Pricing & Stock]
Open the Pricing and Stock tab. <break time="1.4s" /> This is where the money and the counts live. We captured the tab by name only this pass, so the exact fields are parked until a live walk fills them in.

_[Director note, updated July 11, 2026: OUTDATED block. The tab is now captured — it renders the same eight fields as Item Details under a PRICING & STOCK heading (logged discrepancy). Queued for re-author + re-render; do not record against this audio.]_

[03:01 | Step 11 — Storage & Location]
Then Storage and Location. <break time="1.4s" /> Where a physical item sits and how it's binned, so a picker can find it fast. Same story as the last tab: it's named, not yet detailed in our capture, and parked for the next live pass.

_[Director note, updated July 11, 2026: OUTDATED block. The tab is now captured — same eight fields under a STORAGE & LOCATION heading; no bin/aisle/site fields on this tenant (logged discrepancy). Queued for re-author + re-render; do not record against this audio.]_

[03:19 | Step 12 — Cancel out]
Change nothing, then click Cancel. <break time="1.2s" /> The form closes and drops you back on the list, the record exactly as you found it. On a shared, live tenant that discipline matters: reading answers the ticket, and Cancel guarantees you left no mark.

[03:37 | Step 13 — Recap]
That's Inventory Items end to end. <break time="0.8s" /> Counts and trends up top, eight columns across the list, and a three-tab record behind every row. You read all of it and change none of it, which is exactly how a stock question should be answered.

_(Estimated narration total: 235.8 s ≈ 3:56 at ~145 wpm. Re-measure per block with ffprobe after render; adjust step markers if drift exceeds 0.5 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item phrasing.
- Read-only throughout: **Export** and **Save Changes** are never clicked; the item record is left by **Cancel**. Pricing & Stock and Storage & Location tab fields are parked (captured by name only) and no specific field is spoken for those tabs.
- **July 11, 2026:** read-only detail page confirmed and captured (guide v2.0, shot list v2.0); blocks s07 and s09–s12 contradict the platform, status changed to **PARTIAL RE-AUTHOR + RE-RENDER NEEDED**. No audio was ever rendered from v1.0, so nothing approved is discarded.
- Script text stamp remains **July 9, 2026** (the state it describes); the July 11 corpus check is logged above and in the v2.0 guide and shot list.
