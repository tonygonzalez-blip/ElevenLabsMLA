# WC-04-01 · Items and detail (Inventory)

v2.0 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.** (List page verified July 9; the row-click read-only detail page verified July 11, all three tabs.)

## Purpose

Inventory Items is the master list of everything a site stocks and sells off the shelf: the chemicals that feed the tunnel, the towels and air fresheners at the counter, the equipment behind it. This lesson reads the list top to bottom, then opens one item to show the record behind a row. You learn where the headline counts come from, what each column tells you, and how the read-only item record presents those facts under its header and three-tab strip. You open and read only. Nothing is created, edited, or saved.

## Audience and prerequisites

Internal Micrologic technicians who field stock and pricing questions. You should be signed in and able to reach the **Inventory** module from the left rail. No prior inventory experience is assumed. Batches, Adjustments, Vendors, Chemicals & Supplies, and Purchase Orders are covered next in WC-04-02.

## Navigation path

`Inventory → Inventory Items` (`inv-items.html`). The list lives in the left sidebar under the **Inventory** module. Clicking a row opens that item's record.

**Grounding note (read once).** The **Inventory Items** list is captured in the July 9 corpus. The July 11 credentialed pass settled the open question from July 9: the read-only detail page (`inv-items-detail.html`) **exists**, and clicking a row opens it — breadcrumb **Inventory › Item Detail**, header with **← Back / Delete / Edit Record**, and three tabs, all captured on July 11. It only loads from the row click; pasting its URL directly still 404s (in-app routing), which is why the July 9 probe missed it. The **Inventory Items Edit** form (`inv-items-edit.html`, with **Cancel / Save Changes** and the required-field layout) was captured separately on July 9 and is described in the Notes; the route to it from the detail page's **Edit Record** button is presumed but not yet observed (parked). This lesson documents the row-click record as the read-only detail page.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing is typed and nothing is saved.

1. From the left rail, open **Inventory → Inventory Items**. **Expected:** the **Inventory Items** list loads. The breadcrumb reads **Inventory › Inventory Items**, and the Inventory sidebar lists six pages: **Inventory Items**, **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, and **Purchase Orders**.
2. Read the KPI strip across the top. **Expected:** four tiles: **Total Items** (248), **Low Stock** (12), **Categories** (8), and **Vendors** (14). Low Stock is the one to watch: it counts the items flagged low on stock before a cashier tells you the shelf is empty.
3. Read the three insight panels below the KPIs. **Expected:** **Item Count Trend** (Last 12 months, 248, ↑ +5%), **Items by Type** by category (Chemical 45%, Supplies 32%, Equipment 15%, Other 8%), and **Item Status** (85% ACTIVE, 10% LOW, 5% DISC.). These summarize the catalog before you touch a single row.
4. Look at the **Item List** card and its toolbar. **Expected:** the card is titled **Item List** with the line "248 records · retail inventory & stock management", and the toolbar holds **+ New Record**, **Export**, a **Filters ▾** menu, a **Search inventory items…** box, and a **Search** button. **+ New Record** is how a new item is created (a TRAIN- action, not performed here); **Export** is a data-out action and is not clicked in this lesson.
5. Read the table columns and sample rows. **Expected:** eight columns: **ID**, **SKU**, **Description**, **Item Cost**, **Item Price**, **QTY on Hand**, **Type**, and **Vendor**. The captured rows run **INV-001** (CarPro Iron X 1L, Chemical, ChemCo Inc) through **INV-005**, with "Showing 1–5 of 5 records" beneath. **ID** is the WashCentral item number and **SKU** is the item's stock-keeping code; **Item Cost** is what you pay and **Item Price** is what the customer pays.
6. Click the first row, **INV-001**, to open its record. **Expected:** the read-only **Item Detail** page opens (`inv-items-detail.html` — row click only; the direct URL 404s). The breadcrumb reads **Inventory › Item Detail**, and a header card shows **INV-001**, an **Inventory Item** badge, the line "Track all inventory products, chemicals, and supplies.", and three chips: **Inventory**, **Chemical**, and **In Stock**. A four-tile KPI band under the header repeats the list page's catalog counts: **248 Total Items**, **12 Low Stock**, **8 Categories**, **14 Vendors**.
7. Read the record's action buttons. Do not click **Delete** or **Edit Record**. **Expected:** three buttons sit in the top-right of the card: **← Back**, **Delete**, and **Edit Record**. **← Back** returns you to the list and is the only one you use. **Delete** removes the record and is never clicked on the shared tenant. **Edit Record** opens the editing flow; editing is out of scope here (the edit form's layout is described in the Notes).
8. Look at the tab strip under the KPI band. **Expected:** three tabs: **Item Details**, **Pricing & Stock**, and **Storage & Location**, with **Item Details** active by default. These replace the legacy tabs Pricing & Tax and Commission & Service (see the Notes section).
9. On the **Item Details** tab, read the **ITEM DETAILS** fields. **Expected:** eight read-only fields: **ID** (INV-001), **SKU** (CHM-001), **DESCRIPTION** (CarPro Iron X 1L), **ITEM COST** ($12.50), **ITEM PRICE** ($24.99), **QTY ON HAND** (42), **TYPE** (Chemical), and **VENDOR** (ChemCo Inc). These are the same facts as the list's eight columns, presented one item at a time — the ticket answer for "what does it cost, what do we charge, how many are left."
10. Click the **Pricing & Stock** tab. **Expected:** the tab activates and the section heading changes to **PRICING & STOCK** — but the fields underneath are the same eight you just read on **Item Details** (ID through VENDOR). That repetition is the observed July 11 behavior, reported as a discrepancy (see Notes); do not expect distinct pricing-only fields on this tenant today.
11. Click the **Storage & Location** tab. **Expected:** the same pattern: the heading changes to **STORAGE & LOCATION**, and the identical eight fields render below it. No storage- or location-specific fields (bin, aisle, site) appear on this tenant as of July 11; that is observed and logged, not a documentation gap.
12. Change nothing, then click **← Back**. **Expected:** the detail page closes and you return to the **Inventory Items** list with nothing changed. **Do not click Delete or Edit Record.**
13. Recap the page. **Expected:** the list answers the fast questions from its KPIs, its three insight panels, and its eight columns, and each row opens a read-only record with the same facts in a header-plus-tabs layout. You read all of it without changing a record, and you left by **← Back**.

## Expected results

From the **Inventory Items** list you can read the catalog's headline counts, the trend and mix panels, and the eight columns that describe every item, then open any row to its read-only record. The record carries the item's identity in the header (ID, badge, chips), repeats the catalog KPIs, and presents the item's eight facts under a three-tab strip — knowing that on this tenant all three tabs currently render the same field set under different headings. Reading the list or the record changes nothing. The only exit you use on the record is **← Back**.

## Notes and troubleshooting (observed behavior only)

- Read-only detail confirmed (July 11, 2026). The row click opens `inv-items-detail.html` with **← Back / Delete / Edit Record**, resolving the July 9 open question in favor of the learning plan's description. The page loads from the row click only; its direct URL 404s (in-app routing). **Delete** is never clicked on the shared tenant.
- Tabs repeat their fields. On July 11 the **Pricing & Stock** and **Storage & Location** tabs each rendered the same eight fields as **Item Details** (ID, SKU, DESCRIPTION, ITEM COST, ITEM PRICE, QTY ON HAND, TYPE, VENDOR); only the section heading changed. Observed and reported as a new discrepancy — the tab names promise field groups the tenant does not yet deliver. Teach the tabs as navigation, and teach the eight fields once.
- The edit form still exists. The **Inventory Items Edit** form (`inv-items-edit.html`), captured July 9, carries **Cancel / Save Changes** (top-right and repeated at the bottom), required fields **SKU***, **Description***, and **Inventory Type***, plus **Vendor**, **Category**, and an **Active** toggle. **Save Changes** writes to the live record, so if you are ever on that form you leave by **Cancel** only. Whether the detail page's **Edit Record** button routes to this form is presumed but not observed: TBD — parked (new item).
- Fixed sample record. In this demo tenant the item record opens the same sample item, **INV-001** (a Chemical marked In Stock), regardless of which row you click. That is a known demo artifact, not platform behavior; on a real tenant the record matches the row. Read the header ID to confirm which item is loaded before you would ever edit.
- Tabs differ from the legacy guide. The record shows **Item Details**, **Pricing & Stock**, and **Storage & Location**. The legacy guide's Pricing & Tax and Commission & Service tabs do not appear (see DISCREPANCIES.md #9).
- Inventory menu. The Inventory sidebar carries six pages (**Inventory Items, Inventory Batches, Adjustments, Vendors, Chemicals & Supplies, Purchase Orders**); the legacy "Inventory Types" page is gone and Adjustments now lives here (see DISCREPANCIES.md #8).
- Narration status. The v1.0 narration voices the July 9 state (edit form, Cancel/Save exit, tabs 2–3 parked) in blocks s07 and s09–s12, which now contradicts the captured detail page. Those blocks need re-author and re-render before recording; see the narration file's status header.
- Session prompt. The idle "Still there?" session dialog can appear on any page; it is out of scope here and is covered in WC-01-03.

**Knowledge check.** A cashier reports the counter is almost out of microfiber towels. On the **Inventory Items** list, which KPI tells you at a glance how many items are running low, and which two columns confirm the towel item's on-hand count and its stock code? (Answers: the **Low Stock** KPI; the **QTY on Hand** and **SKU** columns.)

## Related lessons

WC-04-02 Batches, Adjustments, Vendors, Chemicals, Purchase Orders · WC-01-01 Global navigation · WC-01-03 Session behavior.

**Verified against demo.washcentral.com on July 11, 2026.**
