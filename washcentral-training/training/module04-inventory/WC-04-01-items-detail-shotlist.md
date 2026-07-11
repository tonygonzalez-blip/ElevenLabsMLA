# WC-04-01 — Items and detail · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-04-01-items-detail-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (13 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/inv-items.html`.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Inventory Items list is fully loaded before rolling: KPI strip, the three insight panels, and the five-row Item List all visible; nothing open.
- [ ] Do not click **Export** (step 4) and do not click **Save Changes** at any point on the item record (steps 6–12). Leave the record only by **Cancel**.
- [ ] Pricing & Stock and Storage & Location tab field contents are parked (captured by name only); record whatever renders live, and flag it for re-verification rather than narrating specific fields.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Hold 2–3s on every new screen.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on the **Inventory Items** list; slowly sweep the cursor down the Inventory sidebar | Breadcrumb **Inventory › Inventory Items**; sidebar lists **Inventory Items, Inventory Batches, Adjustments, Vendors, Chemicals & Supplies, Purchase Orders**; list body loaded | 3s | Callout ① bracketing the six sidebar items; slow top-to-bottom cursor sweep (about 2s), no click |
| 2 | Point across the KPI strip left to right (do not click) | Four tiles: **Total Items** 248, **Low Stock** 12, **Categories** 8, **Vendors** 14 | 3s | Callout ② on the strip; zoom-in 150% on the **Low Stock** tile (1.5s); label "watch this one" |
| 3 | Sweep the cursor across the three insight panels (do not click) | **Item Count Trend** (Last 12 months · 248 · ↑ +5%), **Items by Type** (Chemical 45%, Supplies 32%, Equipment 15%, Other 8%), **Item Status** (85% ACTIVE, 10% LOW, 5% DISC.) | 4s | Callout ③ over all three panels; slow left-to-right sweep (about 2.5s); do not click a segment |
| 4 | Point to the **Item List** toolbar: **+ New Record**, **Export**, **Filters ▾**, the **Search inventory items…** box, **Search** | Toolbar renders with the card line "248 records · retail inventory & stock management" | 3s | Callout ④ on the toolbar; **STOP** callout with a red "do not click" ring over **Export**; note **+ New Record** as create-only, not clicked |
| 5 | Sweep across the table header, then down the five rows (do not click yet) | Columns **ID · SKU · DESCRIPTION · ITEM COST · ITEM PRICE · QTY ON HAND · TYPE · VENDOR**; rows **INV-001**…**INV-005**; footer "Showing 1–5 of 5 records" | 4s | Callout ⑤ on the header row; slow cursor sweep down the SKU and QTY ON HAND columns (about 3s) |
| 6 | Click the first row, **INV-001** | The **Inventory Items Edit** record opens; breadcrumb **Inventory › Item Edit**; header card shows **INV-001**, an **Inventory Item** badge, subtitle "Track all inventory products, chemicals, and supplies", chips **Inventory / Chemical / In Stock** | 3s | Callout ⑥ on the header card; zoom-in 150% on the item ID + chips (1.5s) |
| 7 | Point to **Cancel** and **Save Changes** top-right, then to the same pair at the form's bottom | Both buttons visible top-right and repeated at the bottom of the form | 3s | Callout ⑦ on the button pair; **STOP** callout with a red "do not click" ring over **Save Changes**; label "leave by Cancel only" |
| 8 | Point to the tab strip | Three tabs: **Item Details** (active), **Pricing & Stock**, **Storage & Location** | 3s | Callout ⑧ on the tab strip; note "legacy Pricing & Tax / Commission & Service are gone" (DISCREPANCIES.md #9) |
| 9 | Sweep the **Item Details** fields top to bottom (do not type) | Fields **SKU***, **Description***, **Inventory Type*** (-- Select --), **Vendor** (-- Select --), **Category** (-- Select --), **Active** (toggle · Enabled); asterisks on the first three | 4s | Callout ⑨ on the six fields; zoom-in 150% on the three starred required fields (1.5s); no typing |
| 10 | Click the **Pricing & Stock** tab | The tab activates; its fields render live (contents parked — captured by name only) | 3s | Callout ⑩ "captured by name only — parked"; record exactly what appears, do not narrate specific field names |
| 11 | Click the **Storage & Location** tab | The tab activates; its fields render live (contents parked — captured by name only) | 3s | Callout ⑪ "captured by name only — parked"; record exactly what appears, do not narrate specific field names |
| 12 | Click **Cancel** | The form closes and the **Inventory Items** list returns; nothing was saved | 2s | Callout ⑫ "nothing saved, record untouched"; confirm you are back on the list |
| 13 | None — slowly sweep the cursor from the KPI strip down to the list one last time | Recap state: KPIs and insights up top, eight columns across the list, a three-tab record behind every row | 3s | Callout ⑬ tying list to record; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:56 (estimated narration total 235.8s at ~145 wpm; final duration pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

I can execute steps 1–13 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. **Export** is never clicked (step 4), and the item record is left only by **Cancel** (step 12) — **Save Changes** is never triggered. Say "drive lesson 04-01" when you're rolling.
