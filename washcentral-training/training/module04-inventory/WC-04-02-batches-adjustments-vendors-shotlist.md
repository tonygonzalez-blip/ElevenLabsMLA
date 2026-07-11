# WC-04-02 — Batches, Adjustments, Vendors, Chemicals, Purchase Orders · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-04-02-batches-adjustments-vendors-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (8 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/inv-batches.html`.
- [ ] Snagit: cursor highlight ON, click animation ON. No keystroke display needed (this lesson is mouse-only; no typing).
- [ ] Inventory left sidebar fully visible; nothing open (no modal, no Filters dropdown). Each page loaded fresh before its step so the KPI band and cards are on screen.
- [ ] This lesson is read-only. Do not click **Export** or **+ New Record** on any page (see STOP callouts). The only click that opens anything is **View** on a Purchase Order row (step 7), closed with **✕**.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Each page opens by clicking its sidebar entry; let the page settle before reading.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Inventory Batches**; slowly sweep the cursor down the Inventory sidebar across its six entries | Sidebar shows **Inventory Items**, **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, **Purchase Orders**; the **Inventory Batches** page is loaded | 3s | Callout ① bracketing the six sidebar entries; note "this lesson = the last five, at list level"; slow top-to-bottom cursor sweep (about 2s), no click |
| 2 | Sweep the cursor across the **Inventory Batches** KPI band, then the three cards, then the **Batch List** columns | KPI band: **84 Total Batches · 3 Open · 6 This Month · $14,280 Total Value**. Cards: **Batch Receipts**, **Batch Status**, **Batch Health** (**88% ON TIME / 9% DELAYED / 3% MISSING**). Columns: **Batch # · Date · Reference · Cost · Items · Status**; top row BATCH-0084 → **PO-2025-084** → $1,240.00 → 18 → **Received** | 4s | Callout ② on the KPI band; zoom-in 150% on the **Reference** column tying BATCH-0084 to **PO-2025-084** (1.5s); STOP callout over **Export** and **+ New Record** with a red "do not click" ring |
| 3 | Click **Adjustments** in the sidebar | **Inventory Adjustments** loads. KPI band: **312 Total Adjustments · 28 This Month · 142 Positive · 170 Negative**. Cards: **Adjustment Volume**, **Adjustment Types**, **Adjustment Accuracy** (**82% VERIFIED / 12% REVIEW / 6% FLAGGED**). Columns: **Location · Ticket · Date/Time · Total · Shift # · Cashier** | 4s | Callout ③ on the KPI band; slow cursor sweep across the six columns (about 2s); zoom 150% on a negative **Total** row (-$24.99 → SHIFT-440 → L. Nguyen) showing the ticket/shift/cashier trace (1.5s) |
| 4 | Click **Vendors** in the sidebar | **Vendors** loads. KPI band: **14 Total Vendors · 12 Active · 3 Open POs · $48,200 YTD Spend**. Cards: **Vendor Spend**, **Vendors by Category**, **Vendor Status** (**86% ACTIVE / 7% REVIEW / 7% INACTIVE**). Columns: **Account No. · Company · Contact · Address · Phone**; row VND-001 **ChemCo Inc** | 4s | Callout ④ on the KPI band; point to **3 Open POs** and note it matches the Purchase Orders page; slow sweep across the five directory columns (about 2s) |
| 5 | Click **Chemicals & Supplies** in the sidebar | **Chemicals & Supplies** loads. KPI band: **84 Total SKUs · 12 Low Stock · 3 Out of Stock · $14,820 Value on Hand**. Cards: **Chemical Usage**, **SKUs by Category**, **Stock Health** (**70% IN STOCK / 14% LOW / 4% OUT**). Columns: **Item / SKU · Category · Stock Level · Par / Unit · Supplier · Unit Cost · Status**; chips **In Stock / Low Stock / Critical / Out of Stock** | 4s | Callout ⑤ on the **Status** chips; zoom-in 150% on Pre-Soak Detergent (SKU-0012): 2 gal vs 30 gal par → **Critical** (1.5s); STOP callout over **Export** |
| 6 | Click **Purchase Orders** in the sidebar | **Purchase Orders** loads. KPI band: **5 Open Orders · 2 Pending Approval · 3 In Transit · $8,420 Spend (30d)**. Cards: **PO Spend Trend**, **Spend by Supplier**, **Order Status** (**65% FULFILLED / 22% TRANSIT / 13% PENDING**). Columns: **PO # · Supplier · Location · Items · Total · Created · Expected · Status · Details**; chips **Pending Approval / In Transit / Fulfilled**; a **View** button on every row | 4s | Callout ⑥ on the KPI band; slow sweep across the nine columns (about 2.5s); point to the **View** button in the **Details** column to set up step 7 |
| 7 | Click **View** on any Purchase Order row (read-only quick-look) | A **Purchase Order Details** panel opens over the list with **Open Full Detail →** and a **✕**. In the demo it opens on a placeholder record (**PO-0000**); full detail is parked | 3s | Callout ⑦ on the panel title and **Open Full Detail →**; note "preview only, full detail parked"; close with **✕**; the panel is read-only, no field is touched |
| 8 | Slowly sweep the cursor back up the Inventory sidebar across the five pages | Recap state: five list pages, one click each. Batches → receiving vs **Reference**; Adjustments → corrections vs ticket/shift/cashier; Vendors → supplier directory; Chemicals & Supplies → stock levels and reorder; Purchase Orders → approval and shipping status | 3s | Callout ⑧ tying the five pages together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:30 (estimated narration total ≈ 209s pending render; the recorded video runs slightly longer with the per-step holds). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

I can execute steps 1–8 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. This lesson is read-only: **Export** and **+ New Record** are never clicked, and step 7 opens the **View** quick-look and closes it with **✕** without touching a field. Say "drive lesson 04-02" when you're rolling.
