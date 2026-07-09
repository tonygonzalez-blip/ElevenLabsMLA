# WC-01-04 · Interface conventions: lists (Foundations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

Almost every screen a technician opens in WashCentral is a list, and they are all built from the same parts. This lesson teaches that shared anatomy on two CRM lists, the **Customer List** and the **Gift Card List**: the KPI strip along the top, the insight cards beneath it, the search box and **Filters** control, the sortable column headers and status chips, and the pagination footer. Learn it once here and you can read any list in the platform without relearning the layout.

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in and able to reach the left sidebar, which is where WC-01-01 (global navigation) leaves you. No prior WashCentral experience is assumed. This lesson is a read-only tour: you open lists and read them, and you do not change any data.

## Navigation path

Both lists live in the **CRM** group of the left sidebar. Open `CRM → Customers` for the Customer List and `CRM → Gift Cards` for the Gift Card List. The same list anatomy repeats in Sales, Inventory, Team, Settings, and the other modules, so the two CRM examples stand in for all of them.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. Open `CRM → Customers` from the left sidebar. **Expected:** the Customer List loads. Three bands stack down the page: a KPI strip across the top, a row of insight cards beneath it, and the list card with the table at the bottom. Every list in WashCentral is built this way, so learning it here carries to every other screen.
2. Read the KPI strip along the top. **Expected:** four tiles summarize the list at a glance: **Total Customers** (2,418), **Active Members** (1,964), **At Risk** (146), and **Prospects** (308). These are the headline numbers for the whole customer base, and you read them before you touch the table.
3. Look at the three insight cards below the KPI strip. **Expected:** **Member Growth** plots the last 12 months (24,816, up 12.3%). **Plan Distribution** breaks active members down by plan (Unlimited Plus 38%, Unlimited 27%, Pay Per Wash 22%, Premium Detail 13%). **Risk Profile** shows customer health, 81% LOW, 13% MED, 6% HIGH. The cards are a read-only summary; you do not click into them here.
4. Look at the list card header. **Expected:** the eyebrow reads **CRM · MEMBER DATABASE**, the title is **Customer List**, and the subtitle is "All customers". Three actions sit at the top-right of the card: **Retention Log**, red **Delete**, and green **+ Add Customer**. **Delete** and **+ Add Customer** change data and stay out of scope here; each gets its own later lesson.
5. Find the search box above the table. **Expected:** the placeholder reads "Search by name, plate, email, location, or plan…", with a green **Search** button beside it. The placeholder names exactly which fields the search covers, so you never have to guess what a given list can be searched by.
6. Look at the **Filters** control to the right of the search box. **Expected:** the button carries a badge showing how many filters are active, reading **0** when none are set. Opening it reveals a panel for narrowing the list. The panel's own controls are TBD — parked (the filter panel was not captured open in the July 9 corpus). The badge is the quick tell: any number above 0 means the list in front of you is filtered.
7. Read the column headers. **Expected:** the table has six columns, **CUSTOMER**, **LOCATION**, **PLAN**, **MEMBER SINCE**, **PLAN $/MO**, and **STATUS**. A sort control sits beside each header, so any column can order the list. A checkbox column runs down the left edge with a select-all box in the header row; checking rows is what the **Delete** button acts on.
8. Read one row across. **Expected:** the **PLAN** cell shows a plan chip (for example **Cleanest Ultra Unlimited**, **Cleanest Unlimited**, or **No plan**), and the **STATUS** cell shows a status chip, **Active** in green or **Inactive** in grey. Chips are colour-coded so a row's state reads at a glance.
9. Look at the footer below the table. **Expected:** a rows-per-page selector is set to **25**, followed by numbered page buttons (1 through 5, then the final page, here 65,753) and ‹ previous / › next arrows. The Customer List paginates across more than 1.6 million migrated records, so these page controls, not scrolling, are how you move through it. The KPI tiles up top summarize a curated 2,418 members, which is why the headline count and the page count differ.
10. Open `CRM → Gift Cards` from the sidebar. **Expected:** the Gift Card List loads with the same three bands. The KPI strip now reads **Total Gift Cards**, **Outstanding Balance**, **Active Cards**, and **Redeemed / Zero Balance**. The insight cards keep their shape: **Issuance Trend** (a trend line, 1,284, up 9.2%), **Balance Distribution** (a breakdown by remaining balance), and **Card Status** (a health band, 66% ACTIVE, 28% REDEEMED, 6% EXPIRED). Different data, identical skeleton.
11. Read the Gift Card List controls and footer. **Expected:** the search placeholder changes to fit the data ("Search by card number, customer, location, or status…"); the columns are **CARD**, **CUSTOMER**, **LOCATION**, **BALANCE**, **STATUS**, and **LAST USED**; and the footer shows **ROWS PER PAGE:** with options **25 / 50 / 100** (set to 25) and ‹ › arrows. The same **Filters** control and red **Delete** appear, while the create action reads **+ Issue Gift Card** in place of + Add Customer. In this capture the table shows "Couldn't load records (Failed to fetch)" where the rows would be, and the KPI values read "—" for the same reason: that is the list's data-fetch error state, not an empty portfolio.
12. Recap the shared anatomy. **Expected:** every WashCentral list stacks the same parts, a KPI strip, insight cards, a list card with a search box and a **Filters** control, sortable columns with status chips, and a pagination footer. The labels change from module to module; the layout does not.

## Expected results

You can open any list in WashCentral and read it without hunting: the KPI strip gives you the headline numbers, the insight cards give you the trend and the health at a glance, the search box tells you in its placeholder what you can search by, the **Filters** badge tells you whether the list is already filtered, the column headers sort, the chips carry status by colour, and the footer moves you through the pages. Opening and reading any of these changes nothing.

## Notes and troubleshooting (observed behavior only)

- The KPI tiles count the full base and can differ from the paginated row count. The Customer List summarizes 2,418 members in its KPI strip while the table pages across 1.6 million-plus migrated records. Read the KPI strip for the headline and the footer for how far the table actually runs.
- The **Filters** badge shows the number of active filters, so **0** means nothing is filtering the list. The panel's own controls are parked (not captured open in the July 9 corpus); confirm them at record time.
- **Export** is on some lists and not others. The Tickets list under `Transactions → Tickets` carries an **Export** button, but the Customer List and Gift Card List do not, so do not assume every list can export.
- The rows-per-page options (25 / 50 / 100) and the ‹ › arrows are the same footer widget on every list. Large migrated datasets make the page controls the practical way to move: the Tickets list, for example, pages all the way to 5,049,509.
- Gift Cards showed "Couldn't load records (Failed to fetch)" in this capture, with KPI values rendered as "—". That is the data-fetch error state for a list, not a sign the portfolio is empty.

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · WC-01-05 Universal record pattern · WC-02-01 Customer List · WC-02-04 Gift Cards.

**Verified against demo.washcentral.com on July 9, 2026.**
