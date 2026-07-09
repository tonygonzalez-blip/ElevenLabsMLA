# WC-02-06 · Prepaid Books, Vehicles, Retail Customers, Bundles (CRM)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a menu-level tour of four sibling lists that sit together in the CRM sidebar: **Prepaid Books**, **Vehicles**, **Retail Customers**, and **Bundles**. It is not a deep dive into any one of them. By the end you know what each list is for, what its headline tiles and columns tell you, and which one to open for a given ticket. You also learn that the CRM sidebar's **Fundraiser** entry is a parked stub, not a working page. Nothing here creates, edits, or removes a record. You point, you read the columns, and you move to the next list.

## Audience and prerequisites

Internal Micrologic technicians who handle customer calls and need to know where each kind of record lives. You should be signed in and able to reach a module from the left rail, which is where WC-01-01 (global navigation) leaves you. The header tools **Search ⌘K** and **Ask Shyne** are covered in WC-01-02 and are not re-taught here. The other CRM lists have their own lessons: **Customers** and **Gift Cards** and **House Accounts** are covered in WC-02-01, WC-02-04, and WC-02-05.

## Navigation path

Every list in this lesson opens from the CRM sidebar: `CRM → Prepaid Books`, `CRM → Vehicles`, `CRM → Retail Customers`, `CRM → Bundles`. Open **CRM** in the left navigation rail, then click the list name in the CRM sidebar. The breadcrumb over each page title reads **CRM › [list name]**.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a tour: read the tiles and columns, then move on. Do not open any **+ Add** or **+ New** form, and do not click a create button on the shared demo tenant.

1. In the left navigation rail, open **CRM** and read the CRM sidebar. **Expected:** the sidebar lists **Customers**, **Gift Cards**, **House Accounts**, **Prepaid Books**, **Vehicles**, **Retail Customers**, **Bundles**, and **Fundraiser**, and below a **SERVICE DESK** header, **Agent Console**. This lesson walks the four in the middle, **Prepaid Books** through **Bundles**, and confirms the **Fundraiser** entry at the end.

2. Click **Prepaid Books** and read the top of the page. **Expected:** the page title **Prepaid Books** loads under a small **CRM** label. A KPI band across the top reads **Total Books**, **Active**, **Completed**, and **Expiring Soon**. Below it are three insight panels: **New Books** ("Last 12 months of data"), **Package Type** ("Top packages by book count"), and **Book Status** ("Portfolio health at a glance") with **ACTIVE**, **COMPLETED**, and **EXPIRED** sub-tiles. In the July 9 capture these tiles and panels rendered their labels but not their numbers (the values showed as a dash or "Loading…"); the labels are stable and the figures return once the data loads. A prepaid book is a customer's pre-purchased set of washes, so this page answers "how many washes are left and when do they expire."

3. Drop to the **Prepaid Book List** and read its controls and columns. **Expected:** a small **CRM · PREPAID BOOKS** label, the heading **Prepaid Book List**, a green **+ Add Prepaid Book** button, a search box with the placeholder "Search by barcode or description…", a **Filters** control, and a **Search** button. The six columns read **Book**, **Customer**, **Package**, **Remaining**, **Wash Value**, and **Expiration**. **Remaining** and **Expiration** are the two a caller usually asks about. **[READ-ONLY]** In the July 9 capture the rows read "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." That is a data-fetch error, not an empty list; note the column structure and, live, refresh before you quote a customer anything. Do not click **+ Add Prepaid Book**.

4. Click **Vehicles** and read the top of the page. **Expected:** the page title **Vehicles** loads. The KPI band reads **3,892 Total Vehicles**, **2,104 Active Members**, **14 Flagged**, and **87 New This Month**, with values shown. The three panels are **Registration Trend** ("Last 12 months", **↑ +7.2%**), **Top Makes** ("By registration count": **Honda** 24%, **Toyota** 21%, **Ford** 18%, **Chevrolet** 14%, **Other** 23%), and **Vehicle Status** ("Portfolio health at a glance": **94% ACTIVE**, **5% INACTIVE**, **1% FLAGGED**, with "3,659 active" and "233 inactive / flagged"). This is the master vehicle list, and the **Flagged** tile is where an ALPR or plate dispute starts.

5. Drop to the **Vehicle List** and read its controls and columns. **Expected:** the heading **Vehicle List** with the subtitle "3,892 vehicles · 2,104 active members", a green **+ Add Vehicle** button, a search box with the placeholder "Search by plate, customer, make, or location…", a **Filters** control, and a **Search** button. The seven columns read **License Plate**, **Make / Model**, **Year**, **Customer**, **Location**, **Status**, and **Last Visit**. **License Plate** and **Status** are the two you check on a plate dispute. **[READ-ONLY]** In the July 9 capture the rows read "Couldn't load vehicles (Failed to fetch). Check your connection to the AI agent service." The KPI tiles above still loaded, so the failure is in the row fetch, not the whole page. Do not click **+ Add Vehicle**.

6. Click **Retail Customers** and read the page. **Expected:** the page title **Retail Customers** loads straight into the **Retail Customer List** with no KPI band and no insight panels above it. The list has a green **+ Add Customer** button, a single search box with the placeholder "Search by name, email, or plate…", and no **Filters** or **Search** button beside it. The five columns read **Customer**, **Plate**, **Home Location**, **Email**, and **Phone**. This is the leanest list of the four: walk-in and non-member records with just enough contact detail to look someone up. **[READ-ONLY]** In the July 9 capture the rows read "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." Note the column structure. Do not click **+ Add Customer**.

7. Click **Bundles** and read the top of the page. **Expected:** the page title **Bundles** loads. The KPI band reads **32 Total Bundles**, **28 Active**, **142 Sold This Month**, and **$8,436 Revenue**, with values shown. The three panels are **Bundle Sales Trend** ("Last 12 months", **↑ +22.3%**), **Revenue by Bundle** ("Share of monthly revenue": **Monthly Value Pack** 38%, **Spring Promo** 26%, **Summer Special** 18%, **Fleet Pack** 12%, **Quick Shine** 6%), and **Bundle Status** ("Portfolio health at a glance": **88% ACTIVE**, **12% INACTIVE**, with "28 active" and "4 inactive"). A bundle is a packaged offering the site sells, so this page tells you what is on the menu and how well each package moves.

8. Drop to the **Bundle List** and read its columns and rows. **Expected:** the heading **Bundle List** with the subtitle "32 bundles · 142 sold this month", a green **+ New Bundle** button (note it reads **New**, not **Add**), a search box with the placeholder "Search by bundle name or services…", a **Filters** control, and a **Search** button. The seven columns read **Bundle Name**, **Services Included**, **Price**, **Discount**, **Valid At**, **Status**, and **Sold**. Unlike the other three lists, the Bundle List loaded its rows in the July 9 capture; the top five are **Summer Special** (BD-001, Premium Wash, Interior Vac, $29.99, 15%, All Locations, **Active**, 23 sold), **Fleet Pack** (BD-002, 5 Premium Washes, $119.99, 20%, Fort Lauderdale, Tampa, **Active**, 8), **Monthly Value Pack** (BD-003, Unlimited Wash, Tire Shine, $49.99, 12%, All Locations, **Active**, 45), **Quick Shine** (BD-004, Basic Wash, Spot Free Rinse, $17.99, 10%, Miami North, Orlando, **Active**, 31), and **Spring Promo** (BD-005, Premium Wash, Wax, Detail, $59.99, 25%, All Locations, **Active**, 35). **Valid At** tells you which sites honor a bundle, which settles most "does this promo work at my location" questions.

9. Point to **Fundraiser** in the CRM sidebar, one entry below **Bundles**. **Expected:** the **Fundraiser** item is present in the sidebar but its link target is "#", so it opens nothing. It is a parked stub, not a working page: **TBD — parked (PARKED-ITEMS.md #3)**. Do not treat it as a fifth list in this tour and do not invent its contents. **[READ-ONLY]** Leave it alone; the entry is documented, the page is not built.

10. Recap the four lists. **Expected:** you can open each from the CRM sidebar and read it at a glance. **Prepaid Books** answers washes remaining and expiration; **Vehicles** is the master plate list for ALPR and plate disputes; **Retail Customers** holds walk-in and non-member records; **Bundles** shows the packaged offerings and where each is valid. **Fundraiser** stays parked. Reading any of these lists changes nothing.

**Knowledge check (reworded from the plan):** name the list you open for each ticket. (1) A customer disputes a plate the camera flagged at the gate. (2) A walk-in with no membership wants their record pulled up by phone number. (3) Someone asks how many washes are left on their pre-purchased book and when it expires. (4) A site manager asks which promo packages are live right now and what each includes.

## Expected results

You can open **CRM → Prepaid Books**, **Vehicles**, **Retail Customers**, and **Bundles**, and for each one read the KPI band (where present), the insight panels, and the column headers without opening a record. You can tell a caller which list holds their answer, and you know that **Fundraiser** is a parked stub with no page behind it. Reading and browsing these lists changes nothing on the tenant.

## Notes and troubleshooting (observed behavior only)

- Three of the four list bodies were in a data-fetch error state in the July 9 capture: Prepaid Books and Retail Customers read "Couldn't load records (Failed to fetch). Check your connection to the AI agent service.", and Vehicles read "Couldn't load vehicles (Failed to fetch). ...". This is an error in the row fetch, not an empty list. Note the column structure from the header row and, live, refresh or check the connection before quoting a customer. Example row values for these three lists are not recorded here because the rows were in the error state at capture.
- The **Bundle List** did load its rows in the July 9 capture, so its five example rows (BD-001 through BD-005) are recorded above. The **Vehicles** and **Bundles** KPI tiles also loaded their values; the **Prepaid Books** KPI tiles and insight panels showed labels only (dash or "Loading…").
- **Retail Customers** is the only one of the four with no KPI band and no insight panels, and its list has a search box but no **Filters** or **Search** button. The other three each carry a KPI band, three insight panels, a **Filters** control, and a **Search** button.
- The create button differs per list: **+ Add Prepaid Book**, **+ Add Vehicle**, **+ Add Customer**, and **+ New Bundle**. All four are write actions. Read them; do not open or submit any of them on the shared demo tenant. Record creation is a separate, permission-gated workflow.
- **Fundraiser** is a CRM sidebar entry whose link target is "#" (a stub). There is no Fundraiser page to walk, and none is invented here: **TBD — parked (PARKED-ITEMS.md #3)**. The full CRM menu (this stub included) is logged in DISCREPANCIES.md #5.
- Every page carries the global header (**Search ⌘K**, **Ask Shyne**, the account avatar), and the idle "Still there?" prompt can appear on any page after inactivity. That prompt is out of scope here and is covered in WC-01-03; see PARKED-ITEMS.md #9.

## Related lessons

WC-02-01 Customer List · WC-02-04 Gift Cards · WC-02-05 House Accounts · WC-02-07 Agent Console · WC-01-02 Search, location scope, and Ask Shyne.

**Verified against demo.washcentral.com on July 9, 2026.**
