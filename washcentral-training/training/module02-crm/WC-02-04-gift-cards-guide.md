# WC-02-04 · Gift Cards (CRM)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

This lesson is a tour of the **Gift Cards** page in CRM, the one screen that holds every prepaid card the network has sold. By the end you can read the four headline tiles, interpret the three insight panels, find the two list actions, and run the support staple this page exists for: a balance lookup by card number. You never issue or delete a card while you are here. You point, you read, and you report back what the row says.

## Audience and prerequisites

Internal Micrologic technicians who handle customer calls. You should be signed in and know how to reach a module from the left rail, which is where WC-01-01 (global navigation) leaves you. The header tools **Search ⌘K** and **Ask Shyne** are covered in WC-01-02 and are not re-taught here. No gift card experience is assumed.

## Navigation path

`CRM → Gift Cards`. Open **CRM** in the left navigation rail, then click **Gift Cards** in the CRM sidebar. The breadcrumb reads **CRM › Gift Cards**.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing in this lesson creates, edits, or removes a record.

1. In the left navigation rail, open **CRM**, then click **Gift Cards** in the CRM sidebar. **Expected:** the **Gift Cards** page loads with the page title **Gift Cards** under a small **CRM** label. The page has three regions from top to bottom: a row of four KPI tiles, three insight panels, and the **Gift Card List** with its search box and table.
2. Read the KPI band across the top. **Expected:** four tiles read **Total Gift Cards**, **Outstanding Balance**, **Active Cards**, and **Redeemed / Zero Balance**. These are the portfolio at a glance: how many cards exist, how much money is still owed on them, how many are live, and how many are spent down to zero. On July 11 the tiles carried live values: **116,524** total gift cards, **$2053032.67** outstanding balance, **71,481** active cards, and **45,043** redeemed / zero balance. (The outstanding figure renders as a raw unformatted number — no thousands separators — as shown; see notes.)
3. Look at the first insight panel, **Issuance Trend**. **Expected:** the panel is subtitled "Last 12 months" and shows a rising line from **Jan** to **Dec** with the running total **1,284** and **↑ +9.2%** at the top right. It tells you whether the program is growing without opening a report.
4. Look at the second panel, **Balance Distribution**. **Expected:** subtitled "Cards by remaining balance", it splits cards into four buckets by dollars left: **$50 – $100** at 34%, **$25 – $49** at 28%, **$1 – $24** at 24%, and **$100+** at 14%. Most cards carry small amounts, so a large remaining balance is the exception worth a second look on a dispute.
5. Look at the third panel, **Card Status**. **Expected:** subtitled "Portfolio health at a glance", it reads **66% ACTIVE**, **28% REDEEMED**, and **6% EXPIRED**, with a stacked bar and the counts **847 active** and **437 closed** beneath it. This is the same active/redeemed/expired split you will see in the **STATUS** column, rolled up.
6. Drop to the **Gift Card List** panel and read its header. **Expected:** a small **CRM · GIFT CARDS** label, the heading **Gift Card List**, and the record count **116,524 records**, which matches the **Total Gift Cards** KPI tile. (The July 9 capture showed a different subtitle here, "1,284 cards · $42,610 outstanding"; on July 11 the header reads the record count only — see the drift note below.)
7. Find the two list actions at the top right of the panel: **Delete** and **+ Issue Gift Card**. **Expected:** **Delete** removes a selected card and **+ Issue Gift Card** starts a new one. Both change real records. **[READ-ONLY]** You read these buttons; you do not click either one on the shared demo tenant. Issuing a card is out of scope for this lesson.
8. Look at the search row under the buttons. **Expected:** a search box with the placeholder "Search by card number, customer, location, or status…", a **Filters** control (its badge shows 0 active filters), and a **Search** button. This is how you pull one card out of the list.
9. Read the table column headers. **Expected:** six sortable columns, **CARD**, **CUSTOMER**, **LOCATION**, **BALANCE**, **STATUS**, and **LAST USED**, with a select checkbox at the left. **CARD** is the card number, **BALANCE** is what is left, **STATUS** is active, redeemed, or expired, and **LAST USED** is the date of the last transaction. Those last three answer most gift card calls.
10. Read the records area. **Expected:** live card rows, 25 per page, with the pager below running to page **4,661**. The first July 11 row reads **80016195493 · — · ACE24 · $11.00 · Active · Jan 10, 2026** (card number, customer, location, balance, status, last used); the **CUSTOMER** cell reads **—** on these rows, meaning no customer is linked to the card. **[READ-ONLY]** If the table instead shows "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." — the state the July 9 capture caught — that is a data-fetch error, not an empty portfolio; refresh the page or check the connection before you quote a customer anything.
11. **Exercise 2.4a [READ-ONLY]:** run a balance lookup. Type the customer's card number into the "Search by card number, customer, location, or status…" box and press **Search**. The matching row then shows the card's **BALANCE**, **STATUS**, and **LAST USED**; read those three back to the caller. Worked example from the July 11 capture: card **80016195493** returns **BALANCE** $11.00, **STATUS** Active, **LAST USED** Jan 10, 2026 — the answer to the caller is "eleven dollars left, card is active, last used January tenth." Live, use whatever real card number the caller gives you.
12. Recap the page. **Expected:** the KPI band gives you the portfolio totals, the three panels read out issuance, balances, and status at a glance, and the **Gift Card List** is where every lookup ends. To answer a gift card call you search the card number and read its **BALANCE**, **STATUS**, and **LAST USED**.

## Expected results

You can open **CRM → Gift Cards**, read the four KPI tiles and the three insight panels, and tell a manager the card count and outstanding total from the list header. You can find **Delete** and **+ Issue Gift Card** and know to leave both alone. And you can run the everyday lookup: search a card number, then read its balance, status, and last-used date from the row. Reading this page and searching it changes nothing.

## Notes and troubleshooting (observed behavior only)

- The four KPI tiles and the records table both draw their data from a live fetch. The July 11 credentialed capture caught both healthy (tiles populated, 116,524 records listing normally), which cleared the two parked value markers in steps 2 and 10–11. The July 9 capture had caught the failure mode — tiles at "—" and "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." in the rows area — so a failed table load does not mean the portfolio is empty. Refresh or check the connection first.
- **Display quirk (July 11):** the **Outstanding Balance** tile renders its dollar value unformatted, **$2053032.67**, with no thousands separators — read it as roughly $2.05 million. Every other money cell on the page formats normally.
- **Counts that do not reconcile (July 11, demo data):** the KPI band and list header agree at 116,524 cards, but the **Issuance Trend** panel total still reads 1,284, and the **Card Status** panel's "847 active / 437 closed" counts sit far below the KPI band's 71,481 active / 45,043 redeemed. Use the KPI band and the list for anything you quote; treat the panels as trend illustrations.
- **Drift (July 9 → July 11):** the **Gift Card List** header subtitle changed from "1,284 cards · $42,610 outstanding" to a plain record count, "116,524 records". The rendered narration block s06 speaks the old two-number subtitle and is flagged for re-render; block s10 narrates the July 9 error state and is likewise flagged now that rows load (see the narration script's July 11 note).
- **Delete** and **+ Issue Gift Card** are write actions. Read them; do not click either on the shared demo tenant. Issuing and deleting cards belong to a later, permission-gated workflow.
- Every column header is sortable, and the search box matches on card number, customer, location, or status, so most lookups need only the card number.
- The idle "Still there?" prompt can appear on any page after inactivity. It is out of scope here and is covered in WC-01-03; see PARKED-ITEMS.md #9.
- The worked balance-lookup example in step 11 (card 80016195493 · $11.00 · Active · Jan 10, 2026) comes from the July 11 capture; the previous parked marker is cleared. Demo balances move, so confirm against the live row before quoting.

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-02-05 House Accounts.

**Verified against demo.washcentral.com on July 11, 2026.**
