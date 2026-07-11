# WC-04-02 — Batches, Adjustments, Vendors, Chemicals, Purchase Orders · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (8 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 8 blocks `WC-04-02-s01.mp3`…`WC-04-02-s08.mp3` to be rendered, then joined to `WC-04-02-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available; timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-04-02-s01.mp3` … `WC-04-02-s08.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Estimated per-step seconds (pending render):** s01 ≈ 20.0 · s02 ≈ 30.3 · s03 ≈ 27.4 · s04 ≈ 25.0 · s05 ≈ 32.0 · s06 ≈ 27.8 · s07 ≈ 22.0 · s08 ≈ 24.4. Estimated total ≈ 209 s (~3:29).
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a page changes. Each action cue is followed by `<break time="1.4s" />` so the click and the new page land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine" · ALPR → "A-L-P-R" · POS → "P-O-S"
- PO → "P-O"; POs → "P-Ohs"
- SKU → "skew"
- KPI → "K-P-I" · YTD → "Y-T-D"
- Par → "par" (rhymes with "car"); "par level" = the reorder point

### Scope notes (non-spoken)

- Menu-level lesson: five Inventory list pages (Inventory Batches, Adjustments, Vendors, Chemicals & Supplies, Purchase Orders). Inventory Items and item detail belong to lesson 4.1.
- Read-only. Do not depict clicking **Export** or **+ New Record** on any page. The only opening click is **View** on a Purchase Order row (step 7), closed with **✕**.
- The Purchase Orders **View** quick-look opened on a placeholder record in the corpus; do not read field values off it. Full PO detail is parked (see package findings).

## Timed script

[00:00 | Step 1 — Inventory sidebar]
Open the Inventory menu. <break time="1.4s" /> Six pages line the sidebar, and every one of them reads the same way. A row of headline numbers up top. Three cards under it. Then a searchable list. Item detail is its own lesson. Today we walk the other five.

[00:20 | Step 2 — Inventory Batches]
Start with Inventory Batches. <break time="1.4s" /> This is your receiving log. The tiles up top count how many batches arrived, how many are still open, and what they cost. But the column that earns its keep is Reference. It carries the purchase order each batch filled, so a receipt on screen ties straight back to the order behind it. When someone asks what actually landed on a P-O, you look here.

[00:50 | Step 3 — Adjustments]
Now Adjustments. <break time="1.4s" /> Every stock correction the network makes lands here, split into positives and negatives. What makes the page useful in support is that a correction is never anonymous. Each row names the location, the ticket, the shift, and the cashier behind it. So a write-off isn't just a dollar figure. It's a person and a moment you can go ask about.

[01:17 | Step 4 — Vendors]
Vendors is the supplier directory. <break time="1.4s" /> Account number, company, contact, address, phone. When an order runs late or a chemical shipment comes up short, this is the page that hands you the name and number to call. The tile up top counts three open P-Os. That's the same figure waiting for you one page over, on Purchase Orders.

[01:42 | Step 5 — Chemicals & Supplies]
Chemicals and Supplies. <break time="1.4s" /> For a field tech, this is the page that answers the call. Read Stock Level against Par, the reorder point, and the gap tells you how deep the hole is. The Status chip says the same thing in one word: In Stock, Low Stock, Critical, or Out of Stock. When an alert fires that a tank is low, you come here, confirm the level, and grab the supplier from the same row.

[02:14 | Step 6 — Purchase Orders]
Last page: Purchase Orders. <break time="1.4s" /> This is the order pipeline. The tiles split it by stage: open, pending approval, in transit. The list adds the supplier, the site, the money, and the two dates a caller cares about, when it was created and when it's expected. The Status chip tells you whether it's still waiting on a signoff, riding on a truck, or done.

[02:42 | Step 7 — Purchase Order quick-look]
Every order row has a View button. <break time="1.4s" /> Click it and a quick-look slides in over the list. In the demo it opens on a sample record, so we won't read fields off it. Open Full Detail is the door to the real order. Close the peek, and nothing moves.

_[Director: click View to open the quick-look, then close with ✕. Read-only. Do not read the placeholder record's fields; full PO detail is parked. Never click Export or + New Record on any page.]_

[03:04 | Step 8 — Recap]
Five pages, one sidebar. <break time="0.8s" /> Batches for what came in and which P-O it filled. Adjustments for who changed a count and why. Vendors for who to call. Chemicals and Supplies for what's running low. Purchase Orders for what's on the way. Same layout every time, so once you can read one, you can read all six.

_(Estimated narration total ≈ 209 s ≈ 3:29, pending render. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after generation and align each block to its click.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Ground truth: all facts trace to the July 9 verification corpus digests and screenshots for `inv-batches`, `inv-adjustments`, `inv-vendors`, `inv-chemicals`, and `inv-purchase-orders`. No live walk was performed (remote session, no browser).
- Read-only throughout: Export and + New Record are never clicked; the Purchase Orders View quick-look is opened and closed with ✕, with no field read off the placeholder record.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
