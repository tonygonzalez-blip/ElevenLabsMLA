# WC-02-01 · Customer List (CRM)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

The Customer List is where most support work starts. It is the CRM member database: the screen you open to find a customer, read their status at a glance, and step into their full record. This lesson walks the whole page. The KPI strip, the three insight cards, the list card with its search box and **Filters** control, the action buttons, the columns and status chips, and the pagination footer. It then opens the **Retention Log**, a read-only page reached from this list that records why members leave and how many were saved. By the end you can read the Customer List without hunting and pull up the Retention Log when a churn question comes in.

## Audience and prerequisites

Internal Micrologic technicians who handle customer calls. You should be signed in and able to reach a module from the left navigation rail, which is where WC-01-01 (global navigation) leaves you. WC-01-04 (interface conventions: lists) covers the shared list layout that every screen reuses; this lesson is the CRM-specific version of it. No prior WashCentral experience is assumed. Apart from typing into the search box, which filters your view without touching a record, this is a read-only tour.

## Navigation path

`CRM → Customers`. Open **CRM** in the left navigation rail, then click **Customers** in the CRM sidebar. The breadcrumb reads **CRM › Customers**. The **Retention Log** opens from a button on the Customer List card and returns you here; both pages live under the **CRM** group.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing in this lesson creates, edits, or removes a record.

1. Open `CRM → Customers` from the left navigation. **Expected:** the Customer List loads with the breadcrumb **CRM › Customers**. Three bands stack down the page: a KPI strip across the top, a row of insight cards, and the list card with the table.
2. Read the KPI strip along the top. **Expected:** four tiles summarize the member base: **Total Customers** (2,418), **Active Members** (1,964), **At Risk** (146), and **Prospects** (308). These are the headline numbers for the whole base, not for the page you happen to be on, so you read them first.
3. Look at the three insight cards under the KPI strip. **Expected:** **Member Growth** plots the last 12 months (24,816, up 12.3%). **Plan Distribution** breaks active members down by plan (Unlimited Plus 38%, Unlimited 27%, Pay Per Wash 22%, Premium Detail 13%). **Risk Profile** grades customer health at a glance (81% LOW, 13% MED, 6% HIGH), with 1,961 healthy against 146 at risk. The cards are a read-only summary; you do not click into them here.
4. Look at the list card header. **Expected:** the eyebrow reads **CRM · MEMBER DATABASE**, the title is **Customer List**, and the subtitle is "All customers". This card holds the searchable table of every customer.
5. Find the three action buttons at the top-right of the list card. **Expected:** **Retention Log**, a red **Delete**, and a green **+ Add Customer**. You open **Retention Log** later in this lesson. **Delete** and **+ Add Customer** change data and stay out of scope here; adding a customer gets its own lesson (WC-02-03).
6. Find the search box above the table. **Expected:** the placeholder reads "Search by name, plate, email, location, or plan…", with a green **Search** button beside it. The placeholder names the exact fields the search covers, so you never have to guess what this list can be searched by.
7. Click the **Filters** control to the right of the search box to open it, then close it without setting anything. **Expected:** it carries a count badge that reads **0** when nothing is filtering, and a ▾ chevron that opens the **FILTER BY FIELD** panel (captured open July 11; resolves PARKED-ITEMS.md #19). The panel holds eight per-field controls: text inputs for **NAME** (e.g. Gonzalez), **CUSTOMER ID** (e.g. CUS-10284), **LICENSE PLATE** (e.g. FLA-4821), and **EMAIL** (e.g. @email.com); a **LOCATION** box that reads "All Locations — type to filter"; **MEMBERSHIP PLAN** and **STATUS** dropdowns (**All Plans ▾**, **All Statuses ▾**); and a **SIGN UP DATE** range with **From** and **To** date pickers. Two buttons run it: **✕ Clear all** and **✓ Apply Filters**. Close the panel without applying anything. The badge is the quick tell: any number above 0 means the list in front of you is already filtered.
8. Read the column headers. **Expected:** eight columns, **CUSTOMER**, **LOCATION**, **PLAN**, **MEMBER SINCE**, **STATUS**, **VISITS**, **TOTAL SPEND**, and **LAST VISIT**. (The column set changed between the July 9 and July 11 captures: **PLAN $/MO** is gone and **VISITS**, **TOTAL SPEND**, and **LAST VISIT** are new — see the drift note below.) A sort control sits beside each header, so any column can order the list. A checkbox column runs down the left edge with a select-all box in the header row for selecting rows. What the red **Delete** button does with a selection was not exercised (tenant safety) and is TBD — parked (PARKED-ITEMS.md #18); leave every box unchecked.
9. Read one row across, then check the two chip columns. **Expected:** the **CUSTOMER** cell shows a name over a **CUST-** id, **LOCATION** shows a site code (for example CLE17), and **PLAN** shows a plan chip such as **Cleanest Ultra Unlimited**, **Cleanest Unlimited**, or **No plan**. The **STATUS** cell shows a status chip, **Active** in green or **Inactive** in grey. The three right-hand columns carry the member's numbers: a July 11 example row reads **PATRICIA A COOK / CUST-4420000001643489 · CLE17 · Cleanest Ultra Unlimited · Jan 2026 · Active · 1 · $20.00 · Jan 10, 2026**. The chips are colour-coded so a row's plan and state read at a glance.
10. Look at the pagination footer below the table. **Expected:** a rows-per-page selector set to **25**, numbered page buttons (1 through 5, then the final page, 65,753), and ‹ previous / › next arrows. The list pages across more than 1.6 million migrated records, so search, not paging, is how you find someone. The KPI strip reads 2,418 while the table pages far past that; the two do not reconcile in the demo tenant (a known demo-data quirk, see DISCREPANCIES.md demo-data observations).
11. Click **Retention Log** at the top-right of the list card. **Expected:** the Retention Log page loads with the breadcrumb **CRM › Retention Log**. Its own KPI strip reads **Total Events** (142), **Saves This Month** (38), **Cancellations** (67), and **Churn Rate** (4.2%). This page carries no **Delete** or **+ Add** action; it is a read-only record of member churn events.
12. Read the Retention Log body. **Expected:** three insight cards (**Retention Rate Trend** at 72%, down 2.1%; **Event Type** by outcome category, Saved 46% / Cancelled 39% / Downgraded 10% / At Risk 5%; **Save Outcomes** at 46% SAVED, 39% CANCELLED, 15% DOWNGRADED). The table has five columns, **DATE**, **CUSTOMER**, **LOCATION**, **EVENT TYPE**, and **OUTCOME**. The **EVENT TYPE** cell carries a chip, **Saved**, **Cancelled**, **Downgraded**, or **At Risk**, and the **OUTCOME** cell says what happened, for example "Offered discount" or "Non-recoverable". This is where a churn question gets answered: who left, from which site, and how it resolved.
13. Return to the Customer List. **Expected:** click the sidebar **Customers** item to go back; the Customer List loads again with its KPI strip and table.
14. Click into the search box and type a short name fragment, such as the first letters of a name you can see in the list, then press **Search**. **Expected:** the table narrows to customers whose name, plate, email, location, or plan matches what you typed. Searching is how you reach one of 1.6 million records without paging to it.
15. Clear the search box to restore the full list. **Expected:** the table returns to the unfiltered view and the pagination footer shows the full page range again. Nothing you did in the search box changed a record.

**Exercise 2.1a [READ-ONLY]:** on the Customer List, sort the table by **MEMBER SINCE** using the sort control beside that header, open **Filters** to see the narrowing panel (leave it as-is and close it), then open **Retention Log** and describe in your own words what it tracks and how a "Saved" event differs from a "Cancelled" one. Return to the Customer List when you are done. Change no records.

## Expected results

You can open the Customer List, read the KPI strip and insight cards for the base's headline numbers and health, search by any of the fields named in the placeholder, read the columns and status chips, and page through the table. You can open the **Retention Log** to see member churn events and their outcomes, then return to the list. Opening, reading, sorting, and searching change nothing. Only **Delete** and **+ Add Customer**, both out of scope here, would.

## Notes and troubleshooting (observed behavior only)

- The KPI strip reads 2,418 while the table pages across more than 1.6 million migrated records (the last page button reads 65,753 at 25 rows per page). The two counts do not reconcile in the demo tenant (known demo-data quirk). Read the KPI strip for the headline and the footer for how far the table actually runs.
- Search beats paging on this list. Typing into the search box filters the visible rows by name, plate, email, location, or plan, as the placeholder states. The exact rows returned depend on the fragment you type and render live at record time.
- The **Filters** badge shows how many filters are active, so **0** means nothing is filtering the list. The open panel (**FILTER BY FIELD**) was captured on July 11, resolving PARKED-ITEMS.md #19: eight field controls (NAME, CUSTOMER ID, LICENSE PLATE, EMAIL, LOCATION, MEMBERSHIP PLAN, STATUS, SIGN UP DATE From/To) plus **✕ Clear all** and **✓ Apply Filters**. Nothing filters until **✓ Apply Filters** is clicked, so opening and closing the panel is safe.
- **Column drift (July 9 → July 11).** The table's column set changed between captures: **PLAN $/MO** no longer appears, and **VISITS**, **TOTAL SPEND**, and **LAST VISIT** were added, making eight columns. The rendered narration for this lesson still speaks the July 9 six-column set (block s08) and is flagged for re-render; teach the eight columns shown live.
- The **Retention Log** is read-only. It opens from the Customer List card and has no create, edit, or delete controls, so you can open and read it safely. It is the page to reach for churn and save questions.
- The left-edge checkbox column selects rows. What the red **Delete** button does with a selection was not exercised and is parked (PARKED-ITEMS.md #18). On a read-only tour, leave every box unchecked and never click **Delete**.

## Related lessons

WC-01-04 Interface conventions: lists · WC-02-02 Customer 360 · WC-02-03 Edit / New Customer forms · WC-02-04 Gift Cards.

**Verified against demo.washcentral.com on July 11, 2026.**
