# WC-03-03 · The rest of the Transactions menu (Sales)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The **Sales** module's sidebar holds eight pages under the header **TRANSACTIONS**. Lessons WC-03-01 and WC-03-02 cover the first one, **Tickets**, and its Ticket View. This lesson walks the other seven so you know, at a glance, which page answers which support question. By the end you can open **Ticket Details**, **Payments**, **Payouts**, **Shifts**, **Declined Credit Card Log**, **Gift Card Transactions**, and **House Account Transactions**, and read each one's KPIs and columns. Every page is a read-only list you filter and search; none of them change data on open.

## Audience and prerequisites

Internal Micrologic technicians who have finished WC-03-01 (Tickets list) and WC-03-02 (Ticket View). You should be signed in and able to reach the **Sales** module from the left rail. This is a menu tour: it names each page and what it is for, not a deep dive into any single one. Payment declines and shift reconciliation get their own playbooks (PB-4 and PB-5).

## Navigation path

The Transactions sidebar sits under the **Sales** module in the left navigation; the page header reads **TRANSACTIONS**. All seven pages in this lesson are entries in that sidebar, so from any one of them you reach the next with a single click. Shorthand used below: `Sales → Payments`, `Sales → Payouts`, and so on.

## Steps

One action per step. On July 9 every list on this menu returned **Couldn't load records (Failed to fetch). Check your connection to the AI agent service.** in the capture environment, so the row areas are empty and the KPI values render as a placeholder dash. The column headers, KPI labels, and card names below are the observed page structure, and that structure is what this tour teaches. Hold each new screen for two to three seconds before moving on.

1. Open **Sales → Ticket Details** and look at the left sidebar. **Expected:** eight entries sit under the **TRANSACTIONS** header in this order: **Tickets**, **Ticket Details**, **Payments**, **Payouts**, **Shifts**, **Declined Credit Card Log**, **Gift Card Transactions**, **House Account Transactions**. **Tickets** and the Ticket View are WC-03-01 and WC-03-02; this lesson is the remaining seven.

2. Stay on **Ticket Details** and read the page. **Expected:** the breadcrumb reads **Transactions › Ticket Details**. The KPI strip shows **Total Line Items**, **Services (30d)**, **Discounts (30d)**, **Revenue (30d)**, with three cards beneath: **Line Item Trend**, **By Type**, **Revenue Health**. The search card **SEARCH TICKET DETAILS** has the placeholder "Search by location, ticket, type, description…", plus **Filters** and **Search**. The list **Ticket Detail List** (**ALL LINE ITEMS**) carries an **Export** button and these columns: **LOCATION · TICKET NO · DATE IN · TYPE · DESCRIPTION · TOTAL · TAXABLE · CASHIER**. Ticket Details is the line-item view: one row per line rung, not one row per ticket. Open it when you need to see the individual services, discounts, and adjustments on a sale rather than the ticket total.

3. Click **Payments**. **Expected:** **Sales Payments** loads. KPIs: **Total Payments**, **Top Method (30d)**, **2nd Method (30d)**, **Volume (30d)**. Cards: **Payment Volume**, **By Method**, **Payment Health**. Search card **SEARCH PAYMENTS**, placeholder "Search by ticket #…", with **Filters** and **Search**. The list **Payment List** (**ALL PAYMENTS**) has **Export** and columns **TIME · LOCATION · TICKET # · METHOD · AMOUNT**. This is every completed payment across the network. The **Payment Health** card states plainly that approval and decline status are not tracked here, because Payments records completed transactions only. Declined attempts live on their own page (step 6). Search by ticket number to see how one ticket was tendered.

4. Click **Payouts**. **Expected:** **Payouts** loads. KPIs: **Total Payouts**, **Top Vendor (30d)**, **2nd Vendor (30d)**, **Volume (30d)**. Cards: **Payout Trend**, **By Vendor**, **Payout Status**. Search card **SEARCH PAYOUTS**, placeholder "Search by vendor or cashier...", with **Filters ▾** and **Search**. The list **Payout List** (**ALL PAYOUTS**) has **+ New Record**, **Export**, and columns **LOCATION · PAYOUT ID · SHIFT # · CASHIER · TERMINAL · VENDOR · AMOUNT**. Payouts is cash paid out of the register, such as petty cash or a vendor paid on delivery. Each payout ties to a **SHIFT #** and a **CASHIER**, which is why it counts toward a drawer at reconciliation.

5. Click **Shifts**. **Expected:** **Shifts** loads with a simpler layout: a single **Total Shifts** count and no insight cards. The list **Shifts List** carries **+ New Record** and a search box, "Search by location or shift #…". Columns: **SHIFT # · LOCATION · TERMINAL · OPENED · CLOSED · OPENING DRAWER · CLOSING DRAWER · STATUS**. A shift is one drawer session: when a terminal opened and closed, the opening and closing cash counts, and its status. This is the page you open when a drawer will not balance. Compare **OPENING DRAWER** and **CLOSING DRAWER** against the shift's payments and payouts to find the gap.

6. Click **Declined Credit Card Log**. **Expected:** the page loads with the list titled **Declined Charges List**, a single KPI **Declined Charges (so far)**, **+ New Record**, and a search box, "Search by customer or location…". Columns: **DATE · CUSTOMER · PLAN · AMOUNT · REASON · ATTEMPTS · LOCATION**. This logs declined recurring-plan authorizations. When a member says they paid but you see no payment on their account, start here: the **REASON** column tells you why the charge failed, and **ATTEMPTS** tells you how many times it retried.

7. Click **Gift Card Transactions**. **Expected:** the page loads. KPIs: **Total Transactions**, **Top Type (30d)**, **2nd Type (30d)**, **Transactions (30d)**. Cards: **Gift Card Trend**, **By Type**, **Balance Health**. Search card **SEARCH GIFT CARD TRANSACTIONS**, placeholder "Search by card number...", with **Filters ▾** and **Search**. The list **Gift Card Transaction List** (**ALL TRANSACTIONS**) has **+ New Record**, **Export**, and columns **DATE · CARD NUMBER · TYPE · AMOUNT · BALANCE · CUSTOMER · LOCATION**. This is every load and redeem against a gift card. Search a card number to trace its history; the **BALANCE** column shows the running balance after each entry. The **Balance Health** card notes it records completed activity only, not card status, so to issue or check a card go to CRM Gift Cards (Lesson 2.4).

8. Click **House Account Transactions**. **Expected:** the page loads with a single **Total HA Transactions** count. The list **House Account Transactions List** carries **+ New Record** and a search box, "Search by customer, account, or ticket #…". Columns: **DATE · TICKET # · ACCOUNT · CUSTOMER · LOCATION · TOTAL**. These are charges billed to a house account instead of paid at the register. Each row ties a ticket to the **ACCOUNT** it was charged to, which feeds that account's balance and invoicing in CRM House Accounts (Lesson 2.5).

9. Recap the seven pages against the questions they answer. **Expected:** you can now name the page for each common request. Line items on a sale go to **Ticket Details**. How a ticket was paid goes to **Payments**. Cash out of the drawer goes to **Payouts**. A drawer that will not balance goes to **Shifts**. A "member says they paid" dispute goes to **Declined Credit Card Log**. A gift-card trace goes to **Gift Card Transactions**. A charge billed to an account goes to **House Account Transactions**.

**Knowledge check.** Name the page you open for each of these: (1) a member disputes a declined card, (2) a drawer that will not balance at close, (3) petty cash paid out of a register, (4) tracing a charge against a gift card. Answers: (1) **Declined Credit Card Log**, (2) **Shifts**, (3) **Payouts**, (4) **Gift Card Transactions**.

## Expected results

You can open all seven Transactions pages and read each one's purpose from its KPIs and columns without hunting. You know which page holds line items, completed payments, register cash-outs, drawer sessions, declined authorizations, gift-card activity, and house-account charges. You also know the two shapes this menu uses: the fuller pages (**Ticket Details**, **Payments**, **Payouts**, **Gift Card Transactions**) carry a four-KPI strip, three insight cards, and a search-with-filters card, while the leaner pages (**Shifts**, **Declined Credit Card Log**, **House Account Transactions**) show a single count and a plain search box. Opening any page changes nothing.

## Notes and troubleshooting (observed behavior only)

- On July 9 every list on this menu showed **Couldn't load records (Failed to fetch). Check your connection to the AI agent service.** in place of rows, and the KPI values showed a placeholder dash. The column headers, KPI labels, search placeholders, and card names still render, so the page structure taught here is what was observed; specific row values (statuses, reasons, methods, balances) were not loadable in that capture and are not stated. If you hit the same message live, it points at the record-loading service, not at the page itself.
- Three of the seven "health" cards carry the same kind of scope note, and it is worth reading. **Payment Health** says approval and decline status are not tracked on Payments (completed transactions only). **Payout Status** says approval and dispute status are not tracked on Payouts (completed disbursements only). **Balance Health** says active and expired card status are not tracked on Gift Card Transactions (completed activity only). The takeaway: these pages are records of what completed, not workflow queues. Declines have their own page; card and account status live in CRM.
- Sidebar label versus page title: a few pages present a slightly different name once open. **Declined Credit Card Log** opens as **Declined Charges List**; **Payments** opens as **Sales Payments**. The sidebar label is the one to use when directing a colleague.
- **Filters**, **Search**, **Export**, and **+ New Record** appear on the fuller pages; **+ New Record** also appears on the three leaner pages. This lesson is a list-level tour, so none of those are opened here. **Export** is a download action and stays untouched under tenant rules.
- Menu structure differs from the legacy WashAssist Sales menu (no Adjustments, Credit Card Transactions, Retail Customer Transactions, or Refunds Approval page; Adjustments moved to Inventory and refund approval is governed by Security Levels). This is the project's existing mapping, DISCREPANCIES.md #10.

## Related lessons

WC-03-01 Tickets list · WC-03-02 Ticket View · WC-02-04 Gift Cards · WC-02-05 House Accounts · PB-4 Payment declines · PB-5 Settlement variance.

**Verified against demo.washcentral.com on July 9, 2026.**
