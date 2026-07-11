# WC-04-02 · Batches, Adjustments, Vendors, Chemicals, Purchase Orders (Inventory)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson walks the five Inventory list pages a support tech reaches after Inventory Items: **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, and **Purchase Orders**. It is a menu-level tour. For each page you read the KPI band across the top, the three insight cards under it, and the list columns, so when a caller asks what came in on a batch, why a stock count changed, or which chemical is running low, you know which page answers the question and what each column holds. You will not create, edit, or export anything.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and on any WashCentral page. WC-04-01 covers the first sidebar entry, **Inventory Items**, and the item detail view; this lesson picks up the rest of the Inventory menu at the list level. No prior inventory experience is assumed.

## Navigation path

All six Inventory pages sit in the left sidebar one click apart: **Inventory Items**, **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, **Purchase Orders**. This lesson opens the last five in order, as `Inventory → Inventory Batches`, `Inventory → Adjustments`, `Inventory → Vendors`, `Inventory → Chemicals & Supplies`, and `Inventory → Purchase Orders`.

## Steps

One action per step. Hold each new page for two to three seconds before moving on. This whole lesson is **[READ-ONLY]**: point at labels, do not click **Export** or **+ New Record**.

1. In the left sidebar, open `Inventory → Inventory Batches`. **Expected:** the **Inventory Batches** page loads. The Inventory sidebar shows its six pages in order: **Inventory Items**, **Inventory Batches**, **Adjustments**, **Vendors**, **Chemicals & Supplies**, and **Purchase Orders**. Every page in this lesson keeps the same shape: a KPI band, three insight cards, then a list card with **+ New Record**, **Export**, **Filters ▾**, and a **Search** box.

2. Read the **Inventory Batches** KPI band, the insight cards, and the **Batch List** columns. **Expected:** the KPI band reads **84 Total Batches**, **3 Open**, **6 This Month**, and **$14,280 Total Value**. The three cards are **Batch Receipts** (last 12 months), **Batch Status** (Received, Open, Partial, Closed), and **Batch Health** (**88% ON TIME**, **9% DELAYED**, **3% MISSING**). The **Batch List** columns are **Batch #**, **Date**, **Reference**, **Cost**, **Items**, and **Status**. The top row shows batch **BATCH-0084**, dated 2025-06-01, referencing **PO-2025-084**, at $1,240.00 for 18 items, marked **Received**. The **Reference** column ties each receipt back to the purchase order it filled, which is how a batch connects to the PO you will see in step 6.

3. Open `Inventory → Adjustments`. **Expected:** the **Inventory Adjustments** page loads. The KPI band reads **312 Total Adjustments**, **28 This Month**, **142 Positive**, and **170 Negative**. The cards are **Adjustment Volume**, **Adjustment Types** (Negative, Positive, Write-off, Correction), and **Adjustment Accuracy** (**82% VERIFIED**, **12% REVIEW**, **6% FLAGGED**). The **Adjustment List** columns are **Location**, **Ticket**, **Date/Time**, **Total**, **Shift #**, and **Cashier**. Each adjustment ties a stock correction to the site, ticket, shift, and person behind it, so a negative **Total** like -$24.99 is traceable to a shift and a cashier, not just a number.

4. Open `Inventory → Vendors`. **Expected:** the **Vendors** page loads. The KPI band reads **14 Total Vendors**, **12 Active**, **3 Open POs**, and **$48,200 YTD Spend**. The cards are **Vendor Spend**, **Vendors by Category** (Chemicals, Equipment, Supplies, Other), and **Vendor Status** (**86% ACTIVE**, **7% REVIEW**, **7% INACTIVE**). The **Vendor List** columns are **Account No.**, **Company**, **Contact**, **Address**, and **Phone**. This is the supplier directory: account **VND-001** is **ChemCo Inc**, contact Bob Hendricks, with the address and phone you would use to chase a late order. The **3 Open POs** count here is the same figure you can drill into on the Purchase Orders page.

5. Open `Inventory → Chemicals & Supplies`. **Expected:** the **Chemicals & Supplies** page loads. The KPI band reads **84 Total SKUs**, **12 Low Stock**, **3 Out of Stock**, and **$14,820 Value on Hand**. The cards are **Chemical Usage**, **SKUs by Category** (Chemical, Supply, Equipment, Safety), and **Stock Health** (**70% IN STOCK**, **14% LOW**, **4% OUT**). The **Chemical & Supply List** columns are **Item / SKU**, **Category**, **Stock Level**, **Par / Unit**, **Supplier**, **Unit Cost**, and **Status**. The **Status** column carries a chip for each row: **In Stock**, **Low Stock**, **Critical**, or **Out of Stock**. Read **Stock Level** against **Par / Unit** to see how far a SKU has fallen: Pre-Soak Detergent (SKU-0012) sits at 2 gal against a 30 gal par and shows **Critical**.

6. Open `Inventory → Purchase Orders`. **Expected:** the **Purchase Orders** page loads. The KPI band reads **5 Open Orders**, **2 Pending Approval**, **3 In Transit**, and **$8,420 Spend (30d)**. The cards are **PO Spend Trend**, **Spend by Supplier** (ChemMax Pro, EquipDirect, AutoShine Co., Others), and **Order Status** (**65% FULFILLED**, **22% TRANSIT**, **13% PENDING**). The **Purchase Order List** columns are **PO #**, **Supplier**, **Location**, **Items**, **Total**, **Created**, **Expected**, **Status**, and **Details**. The **Status** column shows chips **Pending Approval**, **In Transit**, or **Fulfilled**, and every row ends with a **View** button in the **Details** column. Order **PO-2028** goes to **ChemMax Pro** for Boca Raton, 2 items at $736.00, created Mar 26, expected Apr 1, marked **Pending Approval**.

7. In any Purchase Order row, click **View** in the **Details** column to open the quick-look. **Expected:** a **Purchase Order Details** panel opens over the list with an **Open Full Detail →** button and a **✕** to close. In the July 9 corpus the panel opened on a placeholder record (**PO-0000**) rather than the selected row, so the field contents of the peek are not documented here: TBD — parked (new item, see the package findings). **Open Full Detail →** is the route to the full purchase-order record. Close the panel with **✕**; nothing is changed.

8. Recap the five pages. **Expected:** you can open each Inventory list from the sidebar, read its KPI band and insight cards for the health of that area, and read its columns to answer a caller. Batches track receiving against a PO reference, Adjustments log stock corrections against a ticket and shift, Vendors is the supplier directory, Chemicals & Supplies is where a stock-level or reorder question lands, and Purchase Orders shows what is on order and where it is in approval and shipping.

**Knowledge check [READ-ONLY].** A field tech reports a System Alert that reads "Chemical tank #2 below 20%." Which Inventory page confirms the stock level and the supplier, and which columns tell you the item has dropped under its reorder point? (Answer: **Chemicals & Supplies**; read **Stock Level** against **Par / Unit**, and the **Status** chip will read **Low Stock**, **Critical**, or **Out of Stock**. The **Supplier** column names who to reorder from.)

## Expected results

From the Inventory sidebar you can reach all five list pages in one click each and read them at a glance. You know that Batches connect to a PO through the **Reference** column, that Adjustments are traceable to a location, ticket, shift, and cashier, that Vendors holds supplier contacts, that Chemicals & Supplies answers stock-level and reorder questions through **Stock Level**, **Par / Unit**, and the **Status** chip, and that Purchase Orders shows approval and shipping status with a **View** quick-look on each row. Opening and reading any of these pages changes nothing.

## Notes and troubleshooting (observed behavior only)

- Every page in this menu shares one layout: a four-tile KPI band, three insight cards, then a list card carrying **+ New Record**, **Export**, **Filters ▾**, a **Search** box, and sortable columns. Learn the shape once and every Inventory page reads the same way.
- Data state in the July 9 corpus: on four of the five pages the KPI band and the list-card record count report the full set while the table loads only a small demo sample. Inventory Batches says "84 records" but shows "Showing 1–4 of 4 records"; Adjustments says "312 records" and shows 4; Vendors says "14 records" and shows 4; Chemicals & Supplies says "84 records" and shows 8. Purchase Orders reconciles (7 records, all 7 shown). No "Failed to fetch" or error state appeared on any of the five pages; the tables rendered their sample rows normally. Read the KPI band, not the row count, for the true totals.
- The Purchase Orders **View** quick-look opened on a placeholder record (**PO-0000**) in the corpus capture rather than the row that was clicked. Treat the peek as a preview affordance and use **Open Full Detail →** for the real record; the full purchase-order detail page is out of scope for this lesson and is parked.
- Orientation: the learning plan places **Adjustments** in the Inventory menu (it sat under Sales in WashAssist), which is why its columns read like transaction data (**Location**, **Ticket**, **Shift #**, **Cashier**). This is orientation from the plan, not a claim about the current WashAssist product.
- Nothing in this lesson is destructive, but **Export** and **+ New Record** sit on every page. Neither is used here. Exporting is on the tenant no-touch list, and creating a record is out of scope for a menu tour.

## Related lessons

WC-04-01 Inventory Items and detail · WC-10-04 System Alerts (chemical low-stock alerts) · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**
