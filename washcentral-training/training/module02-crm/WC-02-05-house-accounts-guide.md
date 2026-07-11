# WC-02-05 · House Accounts (CRM)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

House accounts are the fleet and corporate customers who wash on credit and get billed later, so a support call about one is usually about money: a balance, an invoice, or a payment that did or did not post. This lesson covers both halves of that workflow. First the **House Accounts** list, where the portfolio totals live and where month-end billing starts. Then a single account's detail view, where you read its balance, its aging, and the tabs that answer "what was this charge?" By the end you can find any account, read its **AR Aging** at a glance, and trace a charge through the **Invoices** and **Payments** tabs. You also know which two buttons never get clicked in a support session.

## Audience and prerequisites

Internal Micrologic technicians who handle CRM and billing questions. You should be signed in and comfortable with the global header (WC-01-02) and with how a WashCentral list works (WC-01-04): the KPI strip, insight cards, search, and column headers. No house-account experience is assumed. The idle "Still there?" prompt is out of scope here (WC-01-03).

## Navigation path

`CRM → House Accounts` for the list. Open one account with `CRM → House Accounts → [account row] → Overview tab`. The account detail sits on `crm-house-account-detail.html`.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only lesson: no record is created, edited, billed, or deleted.

1. From the CRM sidebar, click **House Accounts**. **Expected:** the House Accounts page loads with the breadcrumb **CRM › House Accounts** and a four-tile KPI strip across the top.
2. Read the KPI strip. **Expected:** four headline tiles show **24 Total Accounts**, **21 Active**, **$14,820 Outstanding**, and **$5,000 Avg Credit**. That is the whole portfolio in one line: how many accounts you carry, how many are live, what they owe you right now, and the average credit line you extend.
3. Look at the three insight cards below the strip. **Expected:** **Balance Trend** plots the last twelve months and reads **↑ +8.3%**; **Credit Utilization** breaks down **By location** (Fort Lauderdale 62%, Miami North 48%, Orlando 38%, Tampa 71%); **Account Status** shows portfolio health as **88% ACTIVE**, **8% SUSPENDED**, **4% CLOSED**, with **21 active** and **3 inactive**. Utilization near the top of the bar is the one to watch: an account close to its limit is close to declining.
4. Move down to the **House Account List** card and read its three buttons: **Delete**, **Generate Invoices**, and **+ New House Account**. **Expected:** the card is subtitled **24 accounts · $14,820 outstanding**. Find **Generate Invoices** and leave it alone. That button runs month-end billing across the portfolio and sends real invoices, so it is located in training and never clicked. **[READ-ONLY]**
5. Look at the list controls and columns. **Expected:** a search box reads **Search by account, company, or contact…**, next to a **Filters** control and a **Search** button. The column headers are **ACCOUNT #**, **COMPANY**, **CONTACT**, **LOCATION**, **WASH COUNT**, **EMAIL**, and **STATUS**. **ROWS PER PAGE** offers **25**, **50**, and **100**. This is the standard WashCentral list, so the muscle memory from the Customer List carries straight over.
6. Click any account row to open its detail. **Expected:** the **House Account Detail** view opens on `crm-house-account-detail.html`. In the demo tenant every row opens the same fixed sample account, **TS Tech Solutions Inc** (**HA-0042**), so treat the figures below as an example of the layout rather than one real customer's numbers.
7. Read the detail header. **Expected:** the company name **TS Tech Solutions Inc** sits beside an **Active** badge, with the identity line **HA-0042 · Fort Lauderdale · John Smith** underneath (account number, home location, primary contact). Three chips summarize the terms: **Net 30**, **$10,000 Credit Limit**, and **14 Vehicles**. The chips tell you the billing terms and the size of the fleet before you read anything else.
8. Look at the buttons in the header. **Expected:** **← Back**, **Search**, **Statement**, **Delete Account**, and **Edit Account**. **← Back** returns to the list and **Search** is safe. **Statement**, **Delete Account**, and **Edit Account** change or generate records, so in a support session you read them and stop. **[READ-ONLY]**
9. Read the metric band under the header. **Expected:** six metrics run left to right: **$4,280 Total Balance**, **$5,720 Available Credit**, **$10,000 Credit Limit**, **$892 Monthly Avg**, **Mar 24, 2026 Last Payment**, and **Feb 8, 2024 Account Since**. Balance plus available credit equals the limit, so a glance here tells you how much room the account has left.
10. Look at the **RELATED** chips beside the metric band. **Expected:** **Vehicles 14**, **Invoices 10**, **Payments 8**, **Documents 3**, and **Statement**. These are quick counts and jump-offs into the same records the tabs hold.
11. Read the row of tabs across the detail. **Expected:** ten tabs in order: **Overview**, **Details**, **Contacts**, **Vehicles**, **Invoices**, **Payments**, **Activity**, **Documents**, **Notes**, and **Audit Trail**. **Overview** is open by default. You will not need all ten on a typical call, but knowing they exist means you never have to guess where a fact lives.
12. On the **Overview** tab, read the **Monthly Charges** panel. **Expected:** billed-to-account figures for the last twelve months: **AVG / MONTH $924**, **PEAK MONTH Oct '25**, and **LAST MONTH $892**. This is the account's normal billing rhythm, which is what you compare against when a charge looks off.
13. Read the **AR Aging** panel. **Expected:** outstanding balance split by age bucket: **Current (0–30 days)**, **31–60 days**, **61–90 days**, **90+ days**, and **Total Outstanding**. In the sample account those read $892.50, $1,750.00, $1,637.50, $0.00, and a **Total Outstanding** of $4,280.00. Aging is the collections view: money in the older buckets has sat unpaid longer, and anything in **90+ days** is the account most likely to get suspended.
14. Read the **Vehicle Wash Frequency** and **Account Health** panels. **Expected:** **Vehicle Wash Frequency** shows washes per vehicle over the last thirty days (**TOTAL WASHES**, **ACTIVE VEHICLES**, **AVG / VEHICLE**). **Account Health** rolls up **Credit Utilization**, **PAYMENT SCORE** (here **On Time**), **AVG DAYS TO PAY**, **INVOICES THIS YEAR**, **TOTAL PAID YTD**, and **PENDING INVOICES**. Payment score and average days to pay are your fast read on whether this account pays reliably.
15. Click the **Invoices** tab. **Expected:** the per-invoice list opens with columns **INVOICE #**, **ISSUE DATE**, **DUE DATE**, **AMOUNT**, **PAID**, **BALANCE**, and **STATUS**, and a running total at the bottom. Statuses you will see include **Paid**, **Open**, and **Overdue**. This is where you find the specific invoice behind a charge and check whether it has been paid. **[READ-ONLY]**
16. Click the **Payments** tab. **Expected:** the **Payment History** ledger opens with columns **DATE**, **REFERENCE #**, **METHOD**, **AMOUNT**, **APPLIED TO**, **RUNNING BALANCE**, **STATUS**, and **POSTED BY**. Each row shows how a payment was applied to invoices, by what method, and who posted it. A **Voided** row here explains a payment that looked received but was reversed. **[READ-ONLY]**
17. Look across the remaining tabs without clicking through each one. **Expected:** **Details** holds the full record (company, billing, tax, and status fields); **Contacts** lists the people on the account with a primary flag; **Vehicles** is the fleet roster with plates and RFID tags; **Documents** stores agreements and files; **Notes** carries internal notes with an **Everyone** or **Management Only** visibility; **Audit Trail** is the field-level change history. The **Activity** tab shows an **Activity Feed** header; its contents did not render in the July 9 capture, so its inner feed is TBD — parked (see Notes). Knowing the shape of each tab is enough for now.
18. Click **← Back** to return to the list. **Expected:** you land back on the House Accounts list, unchanged. Recap: the list gives you portfolio totals and the **Generate Invoices** button you never run casually; the detail gives you one account's balance, its **AR Aging**, and the **Invoices** and **Payments** tabs that answer where a charge came from.

### Exercise 2.5a [READ-ONLY]

Open a house account, read its **AR Aging**, then find one of its invoices on the **Invoices** tab. Locate the **Generate Invoices** button on the list card and say out loud what it would do at month-end. Do not run it.

### Knowledge check

A fleet manager calls: "Why was our card charged this amount this month?" Name the tabs you would open, in order, and why. A defensible answer: **Invoices** to find the invoice and its amount and status, then **Payments** to see the payment that posted and how it was applied and by whom, then **Overview** (the **AR Aging** panel) or **Audit Trail** for the surrounding history.

## Expected results

From the **House Accounts** list you can read the portfolio at a glance and locate the month-end **Generate Invoices** action without triggering it. From a single account's detail you can read its balance and credit room in the metric band, read its collections position in **AR Aging**, and trace any charge through **Invoices** and **Payments**. Opening the account and reading its tabs changes nothing, and **← Back** returns you to the list exactly as you left it.

## Notes and troubleshooting (observed behavior only)

- In the July 9 capture the list's KPI strip and all three insight cards rendered, but the row grid showed **Couldn't load records (Failed to fetch). Check your connection to the AI agent service.** That is a data-fetch error, not an empty portfolio. If you see it on a live call, the account totals are still trustworthy; the row list needs a refresh or a working connection to the records service.
- The account detail in the demo tenant is a fixed sample record: whatever row you click, it opens **TS Tech Solutions Inc** (**HA-0042**). Several WashCentral detail pages behave this way in the demo. Use the values as layout examples, not as one customer's live data.
- **Generate Invoices** (list) runs month-end billing across the portfolio and sends invoices. It is a training stop: located, explained, never clicked. On the detail, **Statement**, **Delete Account**, and **Edit Account** are the same kind of stop for a read-only session.
- Legacy note: older WashAssist-era documentation listed a separate CRM menu item for generating house-account invoices. In WashCentral that is a button on this list, not its own page. Follow the platform.
- The **Activity** tab shows only an **Activity Feed** header with a persistent "Loading…" state in the July 9 capture; its feed contents did not render and are TBD — parked (see the structured return for this lesson). Every other tab loaded.
- Header **Search ⌘K** and **Ask Shyne** are covered in WC-01-02 and are not re-taught here. The idle "Still there?" prompt is out of scope (WC-01-03).

## Related lessons

WC-01-04 List conventions · WC-02-01 Customer List · WC-02-02 Customer 360 · WC-03-03 House Account Transactions · WC-13-01 Reports (House Accounts category).

**Verified against demo.washcentral.com on July 9, 2026.**
