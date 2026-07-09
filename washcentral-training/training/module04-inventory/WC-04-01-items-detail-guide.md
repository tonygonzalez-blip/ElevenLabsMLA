# WC-04-01 · Items and detail (Inventory)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

Inventory Items is the master list of everything a site stocks and sells off the shelf: the chemicals that feed the tunnel, the towels and air fresheners at the counter, the equipment behind it. This lesson reads the list top to bottom, then opens one item to show the record behind a row. You learn where the headline counts come from, what each column tells you, and how the item record splits its fields across three tabs. You open and read only. Nothing is created, edited, or saved.

## Audience and prerequisites

Internal Micrologic technicians who field stock and pricing questions. You should be signed in and able to reach the **Inventory** module from the left rail. No prior inventory experience is assumed. Batches, Adjustments, Vendors, Chemicals & Supplies, and Purchase Orders are covered next in WC-04-02.

## Navigation path

`Inventory → Inventory Items` (`inv-items.html`). The list lives in the left sidebar under the **Inventory** module. Clicking a row opens that item's record.

**Grounding note (read once).** The **Inventory Items** list is captured in the July 9 corpus. Clicking a row opens the item record; the only item record page captured on July 9 is the **Inventory Items Edit** form (`inv-items-edit.html`), which loads a fixed sample item, **INV-001**, regardless of which row you click (a known demo artifact, described in the Notes section). The learning plan describes a separate read-only detail page (`inv-items-detail.html`) with **← Back / Delete / Edit Record** buttons; that page is not in the July 9 corpus, so this lesson documents the item record as the captured edit form and parks the read-only view for a live walk. On that form the default **Item Details** tab and its fields are captured; the **Pricing & Stock** and **Storage & Location** tabs were captured by name only, so their fields are marked TBD — parked.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing is typed and nothing is saved.

1. From the left rail, open **Inventory → Inventory Items**. **Expected:** the **Inventory Items** list loads. The breadcrumb reads **Inventory › Inventory Items**, and the Inventory sidebar lists six pages: **Inventory Items**, **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, and **Purchase Orders**.
2. Read the KPI strip across the top. **Expected:** four tiles: **Total Items** (248), **Low Stock** (12), **Categories** (8), and **Vendors** (14). Low Stock is the one to watch: it counts the items flagged low on stock before a cashier tells you the shelf is empty.
3. Read the three insight panels below the KPIs. **Expected:** **Item Count Trend** (Last 12 months, 248, ↑ +5%), **Items by Type** by category (Chemical 45%, Supplies 32%, Equipment 15%, Other 8%), and **Item Status** (85% ACTIVE, 10% LOW, 5% DISC.). These summarize the catalog before you touch a single row.
4. Look at the **Item List** card and its toolbar. **Expected:** the card is titled **Item List** with the line "248 records · retail inventory & stock management", and the toolbar holds **+ New Record**, **Export**, a **Filters ▾** menu, a **Search inventory items…** box, and a **Search** button. **+ New Record** is how a new item is created (a TRAIN- action, not performed here); **Export** is a data-out action and is not clicked in this lesson.
5. Read the table columns and sample rows. **Expected:** eight columns: **ID**, **SKU**, **Description**, **Item Cost**, **Item Price**, **QTY on Hand**, **Type**, and **Vendor**. The captured rows run **INV-001** (CarPro Iron X 1L, Chemical, ChemCo Inc) through **INV-005**, with "Showing 1–5 of 5 records" beneath. **ID** is the WashCentral item number and **SKU** is the item's stock-keeping code; **Item Cost** is what you pay and **Item Price** is what the customer pays.
6. Click the first row, **INV-001**, to open its record. **Expected:** the item record opens as the **Inventory Items Edit** form. The breadcrumb reads **Inventory › Item Edit**, and a header card shows **INV-001**, an **Inventory Item** badge, the line "Track all inventory products, chemicals, and supplies", and three chips: **Inventory**, **Chemical**, and **In Stock**.
7. Read the record's action buttons. Do not click **Save Changes**. **Expected:** **Cancel** and **Save Changes** sit in the top-right of the card and again at the bottom of the form. **Save Changes** writes to the live record, so while you document or record you leave by **Cancel** only.
8. Look at the tab strip under the header. **Expected:** three tabs: **Item Details**, **Pricing & Stock**, and **Storage & Location**, with **Item Details** active by default. These replace the legacy tabs Pricing & Tax and Commission & Service (see the Notes section).
9. On the **Item Details** tab, read the **ITEM DETAILS** fields. **Expected:** **SKU***, **Description***, **Inventory Type*** (a **-- Select --** dropdown), **Vendor** (dropdown), **Category** (dropdown), and **Active** (a toggle reading **Enabled**). The asterisk marks the three required fields: SKU, Description, and Inventory Type.
10. Click the **Pricing & Stock** tab. **Expected:** the tab activates and holds the item's pricing and stock-level fields. Their exact labels were not captured in the July 9 corpus: TBD — parked.
11. Click the **Storage & Location** tab. **Expected:** the tab activates and holds the item's storage and location fields. Their exact labels were not captured in the July 9 corpus: TBD — parked.
12. Change nothing, then click **Cancel**. **Expected:** the form closes and you return to the **Inventory Items** list with nothing saved. **Do not click Save Changes.**
13. Recap the page. **Expected:** the list answers the fast questions from its KPIs, its three insight panels, and its eight columns, and each row opens a record whose fields split across **Item Details**, **Pricing & Stock**, and **Storage & Location**. You read all of it without changing a record.

## Expected results

From the **Inventory Items** list you can read the catalog's headline counts, the trend and mix panels, and the eight columns that describe every item, then open any row to its record. The record carries the item's identity in the header and splits its fields across three tabs, with **Item Details** holding SKU, Description, Inventory Type, Vendor, Category, and the Active toggle. Reading the list or the record changes nothing. The only exit you use on the record is **Cancel**.

## Notes and troubleshooting (observed behavior only)

- Cancel versus Save Changes. Both buttons appear in the top-right of the record card and again at the bottom of the form. **Cancel** discards and returns you to the list. **Save Changes** writes to the live record, so you never click it while documenting or recording.
- Fixed sample record. In this demo tenant the item record opens the same sample item, **INV-001** (a Chemical marked In Stock), regardless of which row you click. That is a known demo artifact, not platform behavior; on a real tenant the record matches the row. Read the header ID to confirm which item is loaded before you would ever edit.
- Tabs differ from the legacy guide. The record shows **Item Details**, **Pricing & Stock**, and **Storage & Location**. The legacy guide's Pricing & Tax and Commission & Service tabs do not appear (see DISCREPANCIES.md #9).
- Inventory menu. The Inventory sidebar carries six pages (**Inventory Items, Inventory Batches, Adjustments, Vendors, Chemicals & Supplies, Purchase Orders**); the legacy "Inventory Types" page is gone and Adjustments now lives here (see DISCREPANCIES.md #8).
- Parked tab contents. The **Pricing & Stock** and **Storage & Location** tabs were captured by name only; their fields are TBD — parked pending a live row-click walk. The item cost, item price, and quantity from the list columns are not on the **Item Details** tab, so they most likely sit under **Pricing & Stock**, but that is not confirmed and is parked.
- Dropdown options. **Inventory Type**, **Vendor**, and **Category** are dropdowns shown as **-- Select --**; their option lists were not captured, so this lesson names the fields without listing their choices.
- Session prompt. The idle "Still there?" session dialog can appear on any page; it is out of scope here and is covered in WC-01-03.

**Knowledge check.** A cashier reports the counter is almost out of microfiber towels. On the **Inventory Items** list, which KPI tells you at a glance how many items are running low, and which two columns confirm the towel item's on-hand count and its stock code? (Answers: the **Low Stock** KPI; the **QTY on Hand** and **SKU** columns.)

## Related lessons

WC-04-02 Batches, Adjustments, Vendors, Chemicals, Purchase Orders · WC-01-01 Global navigation · WC-01-03 Session behavior.

**Verified against demo.washcentral.com on July 9, 2026.**
