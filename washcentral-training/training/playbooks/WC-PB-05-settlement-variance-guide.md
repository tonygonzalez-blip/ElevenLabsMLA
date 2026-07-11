# WC-PB-05 · Settlement variance and batch reconciliation (Troubleshooting Playbook)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

A batch doesn't balance. The deposits that settled don't match what the day should have brought in, or a site manager flags a settlement that came up short. This playbook is the order you work that ticket: read the reconciliation ledger, find the batch that is off, then follow the money to the drawer sessions and the payouts at that location. You read and route. You never resolve the batch or run a refund from the demo tenant.

Work it as a triage flow. The **Payments Reconciliation** ledger tells you which batch is off and by how much, the **VARIANCE** and **STATUS** columns tell you whether it is balanced or needs review, and from there you cross-check the location's **Shifts** (drawer sessions) and **Payouts** (cash paid out) to explain the gap. Every screen in this playbook is read-only. Locate the **Resolve batch** control, but do not click it; closing a batch and executing any refund happen in production with the right role.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support and Onboarding who take reconciliation and settlement tickets. You should be signed in and comfortable with the global header and the left navigation rail (WC-01-01 and WC-01-02). No accounting background is assumed. This is a diagnosis-and-escalation playbook: you read the ledger and the supporting records, then hand the finding upstream. You do not resolve a batch, adjust a drawer, or process a refund here.

## Navigation path

Three pages carry this playbook, all reachable from the left navigation. **Payments Reconciliation** holds the settlement ledger (breadcrumb **Transactions › Payments Reconciliation**; it renders under the Analytics navigation rail with a **Payments** label above the **TRANSACTIONS** eyebrow). The two cross-check pages sit in the **Sales** module sidebar: **Sales → Shifts** for drawer sessions (breadcrumb **Transactions › Shifts**) and **Sales → Payouts** for cash disbursements (breadcrumb **Transactions › Payouts**).

## Steps

One action per step. Hold each new screen two to three seconds before moving on. Nothing in this playbook is created, edited, resolved, refunded, or exported.

1. Open **Payments Reconciliation** and read the **Payment List** columns. **Expected:** the breadcrumb reads **Transactions › Payments Reconciliation**; the panel is titled **Payment List** with the subtitle **RECONCILIATION AND SETTLEMENTS**; the table columns are **BATCH · LOCATION · EXPECTED · SETTLED · VARIANCE · STATUS**. This is the settlement ledger, one row per batch. **EXPECTED** is what the day should have deposited, **SETTLED** is what the processor actually deposited, and **VARIANCE** is the gap between them.

2. Read the **STATUS** chips and the **VARIANCE** column to find the batch that is off. **Expected:** each row carries a **Balanced** or a **Review** chip, and **VARIANCE** is **EXPECTED** minus **SETTLED**. In the July 9 capture the three batches read **BT-10392 · Fort Lauderdale · $18,420 · $18,420 · $0 · Balanced**, **BT-10393 · Miami North · $14,880 · $14,720 · $160 · Review**, and **BT-10394 · Orlando Central · $16,210 · $16,210 · $0 · Balanced**. A **$0** variance settles as **Balanced**; a nonzero gap flags **Review**. The batch you work is the **Review** row, here **BT-10393** at **Miami North**, short **$160**.

3. Narrow the ledger when you have more than a handful of batches. **Expected:** the **SEARCH PAYMENTS** box shows the placeholder "Search by batch, location, status…", with a **Filters** control and a **Search** button; the columns are sortable and rows-per-page offers **25 / 50 / 100** (the capture read **1–3 of 3**). Search by the batch ID or the location the ticket names, or sort on **VARIANCE** to pull the gaps to the top. This changes what you see only; no batch is touched.

4. Locate the **Resolve batch** control, and do not click it. **Expected:** **Resolve batch** sits at the top-right of the **Payment List** panel. That is the control a supervisor uses to work a **Review** batch to closure, so on this diagnostic playbook you find it and stop. Where the **Resolve batch** flow leads was not captured in the July 9 corpus, so its dialog is TBD — parked. If the variance traces to a refund that must be run, that execution is parked (PARKED-ITEMS.md #5) and is never done from the demo tenant. **[READ-ONLY]**

5. Decide which record explains the gap before you leave the ledger. **Expected:** a batch variance is usually one of two things at that location. Either the drawer came up over or short (**Shifts**), or cash was paid out of the drawer and never made the deposit (**Payouts**). Carry the batch's **LOCATION** (Miami North) to both cross-checks. The ledger has no date column, so you match on **LOCATION**, and a **SHIFT #** ties a payout back to the drawer session that funded it.

6. Cross-check the drawer sessions: go to **Sales → Shifts**. **Expected:** the breadcrumb reads **Transactions › Shifts**; the panel is **Shifts List** with a **Total Shifts** KPI; the columns are **SHIFT # · LOCATION · TERMINAL · OPENED · CLOSED · OPENING DRAWER · CLOSING DRAWER · STATUS**; the search box reads "Search by location or shift #…". **OPENING DRAWER** and **CLOSING DRAWER** are where a drawer over or short shows up for that site's day, which is the most common single-location cause of a settlement gap.

7. Read the **Shifts** load state, and do not click **+ New Record**. **Expected:** in the July 9 capture the list body returned "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." and the KPI read **— Total Shifts**. The column map is grounded from the captured screen; the actual shift rows and the **STATUS** legend are TBD — parked. When rows do load, filter to the batch's **LOCATION** and read the drawer figures for the session that maps to the batch. **+ New Record** creates a record and is never clicked here. **[READ-ONLY]**

8. Cross-check cash paid out: go to **Sales → Payouts**. **Expected:** the breadcrumb reads **Transactions › Payouts**; the KPI strip reads **Total Payouts · Top Vendor (30d) · 2nd Vendor (30d) · Volume (30d)**, above the **Payout Trend**, **By Vendor**, and **Payout Status** cards; the **Payout List** panel (**ALL PAYOUTS**) has the columns **LOCATION · PAYOUT ID · SHIFT # · CASHIER · TERMINAL · VENDOR · AMOUNT**; the search box reads "Search by vendor or cashier...". A payout ties to a drawer by **SHIFT #**, so cash pulled for a vendor accounts for part of a settlement gap without any money going missing.

9. Read the **Payouts** scope note and load state, and do not click **+ New Record** or **Export**. **Expected:** the **Payout Status** card reads "Approval/dispute status isn't tracked in this POS system — Payouts records completed disbursements only." So this page confirms completed disbursements; it will not show you an approval or dispute state. In the July 9 capture the list body returned the same "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." error and the KPIs read empty, so the columns and cards are grounded and the row values are TBD — parked. When rows load, filter to the batch's **LOCATION** and total the payouts against the variance. **[READ-ONLY]**

10. Package the escalation from what you read, and stop. **Expected:** a ticket that names the batch (**BT-10393**), the **LOCATION** (Miami North), the three amounts (**EXPECTED $14,880 · SETTLED $14,720 · VARIANCE $160**), the **STATUS** (**Review**), and whether a drawer figure (**Shifts**) or a payout (**Payouts**) accounts for the gap. You never resolve the batch and you never run a refund from the demo tenant; both are production actions with the right role. **[READ-ONLY]**

11. Recap the path. **Expected:** you read the **Payments Reconciliation** ledger, found the **Review** batch by its **STATUS** chip and its nonzero **VARIANCE**, located **Resolve batch** without clicking it, cross-checked the location's **Shifts** and **Payouts** to explain the gap, noted the fetch errors on both, and escalated with the batch ID and the amounts. Every screen was read-only.

## Expected results

You can tell a balanced batch from one that needs review by reading the **STATUS** chip and the **VARIANCE** column on the **Payments Reconciliation** ledger. You know that **EXPECTED** minus **SETTLED** is the gap, and that a nonzero gap flags **Review**. You know where to explain that gap: a drawer over or short in **Sales → Shifts** (**OPENING DRAWER** / **CLOSING DRAWER**), or cash disbursed in **Sales → Payouts** (matched to the drawer by **SHIFT #**). You locate **Resolve batch** but leave it alone, and you escalate with the batch ID, the location, the three amounts, and the **Review** status. You move no money and resolve no batch.

**Knowledge check:** (1) Which column tells you a batch is off, and how is it calculated? (2) Which **STATUS** chip marks a batch you need to work? (3) Which two pages explain a variance at a location, and what ties a payout back to a drawer session? (4) What goes into the escalation, and which two actions do you never perform from the demo tenant?

## Notes and troubleshooting (observed behavior only)

- The **Payments Reconciliation** ledger loaded its rows in the July 9 capture, so the three batch values are grounded and shown. **VARIANCE** is **EXPECTED** minus **SETTLED**: **BT-10393** at **Miami North** settled **$14,720** against an expected **$14,880**, a **$160** shortfall, which is why it carries the **Review** chip. The two **$0** batches read **Balanced**.
- Two pages in this playbook did not load their rows in the July 9 capture. **Sales → Shifts** and **Sales → Payouts** both returned "Couldn't load records (Failed to fetch). Check your connection to the AI agent service.", and their KPIs read empty. The columns, KPI labels, search boxes, and (on Payouts) the trend and status cards are grounded from the captured screens; the row values, the **Shifts** **STATUS** legend, and the **Payouts** vendor mix are TBD — parked. Treat an empty list the same way on the live tenant: confirm the fetch actually returned data before telling anyone there are no shifts or payouts on file.
- The ledger has no date column, so you cannot match a batch to its drawer sessions by date. Match on **LOCATION**, and use **SHIFT #** to tie a **Payouts** row to the **Shifts** session that funded it. (The plan's PB-5 step 2 says cross-check for the "same day"; the corpus exposes no date field on the reconciliation row, so location is the join.)
- **Payouts** records completed disbursements only. The **Payout Status** card states plainly that approval and dispute status are not tracked in this POS, so you will not see a payout's approval state here; a disputed or pending disbursement is not something this page answers.
- The **Resolve batch** control is grounded on the ledger, but its workflow was not captured (it is an action and was not clicked), so where it leads is TBD — parked. Running a refund end-to-end is a separate parked item (PARKED-ITEMS.md #5): a red **Refund** exists on Ticket View and a Refunds tab lists REFUND ID · AMOUNT · REASON · PROCESSED BY · STATUS, but no refund is executed from demo, and refund approval is role-gated (Lesson 12.6).
- Every page here also shows the session idle behavior ("Still there?" with a 2:00 countdown) and the **Ask Shyne** header button. Both are out of scope for this playbook; session behavior is parked (PARKED-ITEMS.md #9).

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · Lesson 3.3 The rest of the Transactions menu (Payments · Payouts · Shifts) · PB-4 Payment declines / auto-recharge failures · PB-7 Membership change requests (cancel/pause/refund).

**Verified against demo.washcentral.com on July 9, 2026.**
