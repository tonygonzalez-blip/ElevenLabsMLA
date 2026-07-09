# WC-03-01 · Tickets List (Sales / Transactions)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson reads the **Tickets** list, the landing page of the Sales module and your first stop for any transaction question. By the end you can name the page from its header, read the KPI band and the three insight cards at a glance, use the **SEARCH TICKETS** card to narrow a list of more than 126 million tickets before you browse, and locate every column and the **Export** button without touching a record. You also learn what sits in the Sales sidebar so you know where the rest of the Transactions pages live.

## Audience and prerequisites

Internal Micrologic technicians who have finished the Foundations module (WC-01). You should be signed in and able to reach the global header tools from WC-01-02. No prior Sales experience is assumed. Opening an individual ticket is the next lesson, WC-03-02; this lesson stays on the list.

## Navigation path

`Sales → Tickets` (`sales-transactions.html`). The left rail shows the module as **Sales**, but the page header reads **TRANSACTIONS** and the breadcrumb reads **Transactions › Tickets**. Sales and Transactions name the same area of the platform: the module button on the rail, the section header on the page.

## Steps

One action per step. Hold each region for two to three seconds before moving on. This is a read-only lesson; nothing here changes a record.

1. Open **Sales → Tickets**. **Expected:** the page loads with the module marked **Sales** in the left rail, the eyebrow **TRANSACTIONS** above the page title **Tickets**, and the breadcrumb **Transactions › Tickets**. The global header at top-right still carries **Search ⌘K**, **Ask Shyne**, and your account avatar, exactly as on every page.
2. Read the KPI band across the top. **Expected:** four tiles sit side by side: **Total Tickets** shows **126,237,706**, and **Paid (30d)**, **Not Washed (30d)**, and **Revenue (30d)** each show a dash (—) instead of a number. The dash is a no-value state: the tile and its label are live, but no figure loaded for the 30-day window in this capture. Learn the layout (a headline count plus three rolling 30-day metrics); the exact values populate against live data. **Note:** demo KPI tiles and lists are known to disagree; see the troubleshooting notes.
3. Look at the first insight card, **Ticket Volume**. **Expected:** the card is subtitled **Last 12 months** and plots a trend line from **Jan** to **Dec** with the figure **1,370** and **↑ +14%**. It answers "is ticket volume rising or falling," not "what is any single ticket."
4. Look at the middle insight card, **By Status**. **Expected:** subtitled **Ticket breakdown**, it lists four status shares: **Paid/Washed 72%**, **Paid/NotWashed 24%**, **Voided 4%**, and **Other 0%**. These are the status buckets the platform sorts tickets into, and the split tells you what "normal" looks like before you go hunting for an exception.
5. Look at the right insight card, **Ticket Health**. **Expected:** subtitled **Status overview**, it shows three headline percentages: **96% PAID**, **3% NOT WASHED**, and **1% VOIDED**. Read it as the one-glance health check for the current scope.
6. Move to the **SEARCH TICKETS** card below the insights. **Expected:** a search box with the placeholder **Search by location, ticket #, customer, status…**, a **Filters** control, and a teal **Search** button. With more than 126 million migrated tickets behind this page, you search or filter first and browse second. This card's **Search** runs a query inside Tickets; the header's **Search ⌘K** is the separate tool that jumps between pages.
7. Look at the **Ticket List** card header. **Expected:** the card is titled **Ticket List** with a **126,237,706 RECORDS** count, and an **Export** button sits at the top-right of the card. Locate **Export**; you do not click it in this lesson (export is a data-out action and stays off in training).
8. Read the column headers of the list. **Expected:** seven columns, left to right: **LOCATION · TICKET # · DATE/TIME · TOTAL · STATUS · TENDER TYPE · CUSTOMER**. Each header carries a sort control, and a checkbox sits at the far left of every row for selection.
9. Read one example row without clicking it. **Expected:** a row such as **121 - Groveport S Hamilton · Shift28753 · 2026-01-11 04:51 · $0.00 · Paid / Not Washed · Cash · —**. The **TICKET #** value is a link that opens the Ticket View for that transaction; opening it is WC-03-02, so leave it alone here. **CUSTOMER** reads **—** when no customer is linked to the ticket, as on these cash tickets.
10. Look at the pagination control under the list. **Expected:** a page size of **25** and page numbers running **‹ 1 2 3 4 5 … 5,049,509 ›**. Five million pages of twenty-five is the same 126 million records restated, and it is the reason step 6 matters: filter before you page.
11. Read the Sales sidebar down the left of the list. **Expected:** eight pages in order: **Tickets · Ticket Details · Payments · Payouts · Shifts · Declined Credit Card Log · Gift Card Transactions · House Account Transactions**. You are on **Tickets**; the other seven are the rest of the Transactions menu, covered in WC-03-03. **Migration note (source: legacy User Guide vs. live platform, DISCREPANCIES.md #10):** this list is not the old Sales menu. Adjustments moved to Inventory, and there is no Credit Card Transactions, Retail Customer Transactions, or Refunds Approval page here; refund approval is governed by Security Levels instead (Lesson 12.6).
12. Recap what the page gives you. **Expected:** from **Sales → Tickets** you can read health at a glance from the KPI band and the three insight cards, narrow 126 million tickets with **SEARCH TICKETS** before browsing, read the seven-column list, find **Export**, and see the eight Sales pages in the sidebar.

**Exercise 3.1a [READ-ONLY]:** on **Sales → Tickets**, name the four KPI tiles, the three insight cards, and the seven column headers out loud; point to the **Export** button and the **Filters** control without clicking either; then read the eight Sales sidebar pages top to bottom. Change nothing.

**Knowledge check:** (1) With 126 million tickets in the list, what do you do before you start scrolling, and which control do you use? (2) Which button runs a search *inside* Tickets, and which one jumps *between* pages? (3) Name the three insight cards and say where **Export** lives.

## Expected results

You can open **Sales → Tickets**, name the page from its **TRANSACTIONS** header and breadcrumb, and read the KPI band and the **Ticket Volume**, **By Status**, and **Ticket Health** cards without opening a single ticket. You can use **SEARCH TICKETS** to filter before browsing, recite the seven columns, locate **Export**, and list the eight pages in the Sales sidebar. Nothing you do on this page changes a record.

## Notes and troubleshooting (observed behavior only)

- The three 30-day KPI tiles (**Paid (30d)**, **Not Washed (30d)**, **Revenue (30d)**) showed a dash (—) rather than a value in the July 9 capture. Treat the dash as "no value loaded," not zero, and teach the tile structure rather than a number. Report it if the tiles stay blank against live data.
- Demo KPI tiles and table counts are known to disagree across the tenant (a headline count can differ from the underlying rows). Use the KPI band for orientation and the filtered list for anything you act on.
- The list card's **Search** button and the header's **Search ⌘K** are different tools. The card's **Search** queries tickets; **Search ⌘K** is the global page jumper from WC-01-02.
- **Export** is located in this lesson but never clicked. It is a data-out action and stays off during training.
- **TICKET #** values are links into the Ticket View (`sales-ticket-view.html?ticket=…`). Reading a single ticket, the red **Refund** button, and the ticket tabs are WC-03-02; the refund workflow itself is parked (PARKED-ITEMS.md #5, #7).
- The **Filters** control shows a **0** (no active filters) in this capture. Its expanded panel was not captured in the July 9 corpus, so this lesson locates the control at button level only and leaves filter mechanics to the list-conventions and search lessons.
- Long idle on this page raises the session dialog ("Still there?") with **Stay Logged In** / **Log Out Now**. That is session behavior, out of scope here and covered in WC-01-03. During recording, dismiss it off-camera and re-roll the segment.

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · WC-03-02 Ticket View · WC-03-03 The rest of the Transactions menu · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**
