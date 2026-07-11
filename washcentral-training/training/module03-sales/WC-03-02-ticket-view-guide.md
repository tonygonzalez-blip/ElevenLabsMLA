# WC-03-02 · Ticket View (Sales / Transactions)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

A ticket is one transaction at the wash. When a member calls about a charge, a cashier disputes a total, or a manager wants to know who rang a sale, you open that ticket's own page and read it. This lesson opens a single ticket from the **Tickets** list, reads the header and the four grouped sections on the **Main** tab, and finds where refunds are listed. By the end you can pull up any ticket, tell someone who the cashier was, which terminal and shift it ran on, and whether a refund was ever recorded against it. You will also learn to copy the ticket's own web address so you can paste it straight into a support ticket for the next person.

## Audience and prerequisites

Internal Micrologic technicians handling transaction questions: Tech Support and anyone tracing a charge, a tender, or a refund. You should be comfortable finding the **Tickets** list, which is WC-03-01. No prior WashCentral experience beyond that is assumed. Executing a refund is out of scope and stays parked; this lesson reads the ticket only.

## Navigation path

`Sales → Tickets → [ticket row] → sales-ticket-view.html?ticket=<id>`

The header reads **TRANSACTIONS**. You start on the **Tickets** list, click one ticket's row, and land on that ticket's own view page. The address bar picks up a `?ticket=<id>` on the end, which makes the page deep-linkable: paste that URL into a support ticket and the next technician opens the same ticket. The pattern was confirmed live on July 11 with `sales-ticket-view.html?ticket=1501159`. (Demo caveat: on July 11 the same deep link showed differing header data across two loads — see notes — so in the demo tenant confirm the **ID** field, which stayed stable, rather than the header ticket number.)

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. The red **Refund** button is never clicked in this lesson (see step 4).

1. Open **Sales → Tickets**. **Expected:** the **Tickets** list under the **TRANSACTIONS** header, with columns **LOCATION · TICKET # · DATE/TIME · TOTAL · STATUS · TENDER TYPE · CUSTOMER**. This is the list you filter down to find one transaction.
2. Click a ticket's row. **Expected:** that ticket's own page opens at `sales-ticket-view.html?ticket=<id>`. The address bar now carries the ticket's id on the end, so this page has a fixed web address you can share.
3. Read the header. **Expected:** the ticket number is the page title, with **Sales · Ticket** above it, and the ticket id, location, and timestamp sit beneath. Everything that follows describes this one transaction.
4. Find the two header buttons, top-right. **Expected:** **← Back to Tickets** returns to the list, and a red **Refund** button starts a refund. Do not click **Refund**. Running a refund on a pre-existing ticket is forbidden in the demo, and the end-to-end refund flow is out of scope here: TBD — parked (PARKED-ITEMS.md #5).
5. Read the metric band under the header. **Expected:** four figures summarize the ticket at a glance: **Ticket Total**, **Payments**, **Status**, and **Payment Type**. This is the answer to most "what happened on this ticket" questions before you open a single tab.
6. Look at the tab row. **Expected:** five tabs: **Main**, **Details**, **Payments**, **Refunds**, and **Notes**. **Main** is the default tab and holds the transaction record. All five tab contents were captured on July 11 (clearing the July 9 parked item). In brief: **Details** is the **TICKET DETAILS** line-item table with columns **TYPE · PART NUMBER · CATEGORY · PROFIT CENTER · SERVICE GROUP · DESCRIPTION · QTY · AMOUNT · TAX · TOTAL · TAXABLE · CASHIER · SHIFT** — one row per line rung, the same shape as the standalone Ticket Details page. **Payments** is the **PAYMENT RECORDS** table with columns **DATE · PAYMENT ID · METHOD · AMOUNT · REFERENCE**, listing every tender against the ticket. **Notes** is the **TICKET NOTES** panel; in the July 11 capture it showed the error "Couldn't load notes." (a fetch error, not proof the ticket has no notes — refresh before concluding). This lesson still works **Main** and **Refunds** on camera; the other tabs are documented here for reference.
7. On the **Main** tab, read the **TICKET INFORMATION** group. **Expected:** the identifying fields for the transaction: **ID**, **TICKET NUMBER**, **DATE/TIME IN**, **LOCATION**, **STATUS**, and **PAYMENT TYPE**. This is what confirms you have the right ticket.
8. Read the **FINANCIAL SUMMARY** group. **Expected:** the money on the ticket, broken out: **TOTAL**, **TAXES**, **TENDERED**, **CHANGE DUE**, **REVERSED**, **HOUSE ACCOUNT**, and **HOUSE ACCOUNT NAME**. When a member disputes a charge, this is the group you read the numbers from. **REVERSED** tells you whether money already came back, and the two house-account fields tell you whether a business account, and which one, was billed instead of a card.
9. Read the **STAFF & EQUIPMENT** and **CUSTOMER & VEHICLE** groups. **Expected:** **STAFF & EQUIPMENT** names **CASHIER**, **CASHIER CODE**, **CASHIER TERMINAL**, **GREETER NAME**, **GREETER TERMINAL**, and **SHIFT**, which is how you tie a ticket to a person, a register, and a drawer session. **CUSTOMER & VEHICLE** names **CUSTOMER**, **COMPANY**, **VEHICLE**, **VEHICLE PLATE**, and **VEHICLE STATE**, which is how you match a ticket to a plate on a dispute.
10. Click the **Refunds** tab. **Expected:** the **REFUND HISTORY** table with the columns **DATE · REFUND ID · AMOUNT · REASON · PROCESSED BY · STATUS** (confirmed July 11). On a ticket with no refunds, the table reads "No refunds recorded for this ticket." When a refund does exist, this tab is where you read when it happened, who processed it, and its status.
11. Confirm what is not on this page. **Expected:** there is no **Edit Ticket** button and no **+ Add Refund** control. The only way into a refund is the header **Refund** button, and whether you can complete one is governed by your account's Security Level, which is covered in WC-12-06. The legacy "90-day edit window" note does not appear on the live page: TBD — parked (PARKED-ITEMS.md #7).
12. Copy the ticket's web address from the browser, then click **← Back to Tickets**. **Expected:** the address you copied ends in `?ticket=<id>` and reopens this exact ticket when pasted into a browser, so you can hand it to another technician. **← Back to Tickets** returns you to the list, with nothing on the ticket changed.

**Exercise 3.2a [READ-ONLY]:** open any ticket from the list; on the **Main** tab, read off its **CASHIER TERMINAL** and **SHIFT**; open the **Refunds** tab and state whether any refund is recorded; copy the `?ticket=<id>` URL and reopen it in a new tab to confirm it deep-links back to the same ticket. Do not click **Refund**.

## Expected results

From the **Tickets** list you can open any single ticket and read it end to end without changing it. You can state the ticket total, its status, and its payment type from the metric band, then name the cashier, terminal, and shift from the **Main** tab, and read the plate off the **CUSTOMER & VEHICLE** group. You can open the **Refunds** tab to see whether money ever came back and who handled it. And you can copy the ticket's `?ticket=<id>` address to send someone straight to the same transaction. Opening or reading the ticket changes nothing; the **Refund** button is never pressed.

## Notes and troubleshooting (observed behavior only)

- The Ticket View surface, all five tabs, and the `?ticket=1501159` deep link were captured credentialed on July 11, 2026 (digests `sales-ticket-view-*`). Every group and column list in this guide traces to that capture; the July 9 caveat about the page never being re-opened no longer applies.
- **Demo-data quirks observed July 11 (all on ticket 1501159).** (1) The same deep link rendered two different headers across the capture's two passes — **Shift28753 · 121 - Groveport S Hamilton · 2026-01-11 04:51** on one load, **A349461 · 111 - Lancaster River Valley · 2022-10-23 18:24** on the other — while the **ID** stayed 1501159 throughout; the metric band's Ticket Total and Payment Type moved with it ($0.00/Cash vs $13.00/Credit Card). Anchor on the **ID** field when confirming a ticket in the demo. (2) The **Payments** tab listed more than twenty payment records spanning 2021–2025, totalling the band's **Payments** figure of $213.49, against this single ticket. Neither pattern is expected on production data; both are logged for DISCREPANCIES.md.
- The **Notes** tab returned "Couldn't load notes." in the July 11 capture — a fetch error. Refresh before concluding a ticket has no notes.
- **Refund** is a send-type action. Never click it on a pre-existing ticket in the demo tenant. Documenting the full refund flow, including where an approval lands, is parked (PARKED-ITEMS.md #5). Refund permission is set per Security Level; **REFUND APPROVAL REQUIRED** is on for the Low, LowMedium, and Medium levels (see WC-12-06).
- There is no **Edit Ticket** button and no "+ Add Refund" control on this page, unlike the legacy WashAssist guide. The header **Refund** button is the only refund entry point. `Migration note (source: Migration FAQ)`: WashAssist enters support mode after cutover, so the old ticket-edit path is not the reference for current behavior.
- The legacy 90-day ticket-edit window was not observed on the live page. Whether tickets past a certain age are locked is parked (PARKED-ITEMS.md #7); do not state a cutoff you cannot see.
- The `?ticket=<id>` deep link is the fastest way to hand a ticket to another technician. Confirm the URL reopens the same ticket (check the **ID** field, per the quirk above) before you rely on it in a support handoff.

## Related lessons

WC-03-01 Tickets list · WC-03-03 The rest of the Transactions menu · WC-12-06 User Levels and Security Levels (refund approval).

## Knowledge check

1. A member says a $40 charge is wrong. Which metric-band figure and which **Main** group do you read first, and which field tells you whether money already came back?
2. A manager asks who rang a sale and on which register. Name the two **STAFF & EQUIPMENT** fields you read.
3. You want another technician to open the exact same ticket. What do you send them, and where does it come from?
4. A ticket has no refund on it. What does the **Refunds** tab show, and what is the only control on this page that would start one?

**Verified against demo.washcentral.com on July 11, 2026.**
