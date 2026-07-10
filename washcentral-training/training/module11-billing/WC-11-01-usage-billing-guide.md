# WC-11-01 · Usage & Billing (Billing)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers the **Usage & Billing** page, the one screen where a wash's text-message and email activity turns into money. By the end you can read the current billing period, the spend-and-volume KPI band, and the three **Overview** panels that explain a bill. You can name the six tabs and know which one answers which client question, and you can point a client to their open invoice. Everything here is read-only. You never change a charge and you never run an export.

## Audience and prerequisites

Internal Micrologic technicians who field billing questions from wash operators. You should be signed in and able to reach the left rail and the global header, which is where WC-01-01 and WC-01-02 leave you. No prior work with the Billing area is assumed. The session-timeout ("Still there?") behavior is out of scope here; see WC-01-03.

## Navigation path

From the left rail's **Billing** area, open **Usage & Billing** (`billing-usage.html`). The breadcrumb reads **Billing › Usage & Billing**. The global header tools (**Search ⌘K**, **Ask Shyne**, and your account avatar) stay in the top-right, the same as on every page.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the left rail's **Billing** area, open **Usage & Billing**. **Expected:** the page loads with the breadcrumb **Billing › Usage & Billing**, the heading **Usage & Billing**, and **Usage & Billing** highlighted in the sidebar. The global header tools sit in the top-right as usual.
2. Read the billing-period line directly under the heading. **Expected:** it reads **Current Billing Period — May 2026**, then **May 1 – May 31, 2026 · Next invoice: Jun 1, 2026 · 17 days remaining**. This line tells you which period every number below belongs to and when the next invoice generates.
3. Read the KPI band, the four tiles across the top. **Expected:** **$46.18 SMS Usage**, **$33.88 Email Usage**, **1,847 SMS Sent · 98.1% delivered**, and **42,350 Emails Sent · 99.1% delivered**. The first two are spend for the period. The last two are how many messages went out and the share that was delivered.
4. Look at the tab bar under the band. **Expected:** six tabs: **Overview** (open), **SMS Usage**, **Email Usage**, **Invoices** (badged **1 open**), **Rate Card**, and **Spending Alerts**. **Overview** is the summary; the other five drill into one channel or document each. The **1 open** badge on **Invoices** flags that one invoice is currently open.
5. On **Overview**, read the left panel, **Monthly Usage Cost**. **Expected:** the subtitle reads **Last 6 months — SMS & Email**, and stacked bars show combined text and email spend by month from Nov through May (Nov $61, Dec $48, Jan $73, Feb $68, Mar $89, Apr $76, May $80). A **SMS**/**Email** legend sits below, and the current month carries an asterisk and the note **\* Estimated, month not complete**.
6. Read the right panel, **Usage by Source — May 2026**, subtitle **Cost breakdown by campaign & automation**. **Expected:** a table with columns **SOURCE · TYPE · VOLUME · COST · SHARE**. Each row is one source of messaging for the period, tagged with a **Campaign**, **Automation**, or **Transactional** chip.
7. Read down the **Usage by Source** rows. **Expected:** **Summer Membership Drive** (**Campaign**, Email, 18,240, $14.59); **Nth Wash Rewards** (**Automation**, SMS + Email, 12,480 / 840, $31.98); **Win-Back: Lapsed 90 Days** (**Campaign**, Email + SMS, 7,420 / 612, $21.24); **No Visit Win-Back** (**Automation**, SMS, 395, $9.88); and **Receipts & Confirmations** (**Transactional**, Email, 4,210, $3.37). The **SHARE** bars rank the rows. Here **Nth Wash Rewards** at $31.98 is the largest single cost, which is usually the whole reason a bill moved.
8. Scroll to the full-width **Year-to-Date Summary** panel, ranged **Jan – May 2026**. **Expected:** five figures: **$2,495 Platform Fees**, **$203 SMS Cost YTD**, **$147 Email Cost YTD**, **$2,845 Total Billed YTD**, and **$2,845 Paid YTD · ✓ Current**. Total billed equals paid, and the **✓ Current** marker confirms the account is up to date for the year so far.
9. Click the **SMS Usage** tab. **Expected:** the **SMS Usage** view opens, the detail behind the period's texting spend. Its panels and columns were not captured in the July 9 corpus: **TBD — parked** (new parked item; confirm the live layout during recording).
10. Click the **Email Usage** tab. **Expected:** the **Email Usage** view opens, the email counterpart to the previous tab. Its layout was not captured in the July 9 corpus: **TBD — parked** (new parked item; confirm live).
11. Click the **Invoices** tab. **Expected:** the **Invoices** view opens; the tab badge **1 open** flags one open invoice. This is the tab that shows a client the actual bill rather than the usage behind it. The invoice list's columns and rows were not captured in the July 9 corpus: **TBD — parked** (new parked item; confirm live).
12. Click the **Rate Card** tab. **Expected:** the **Rate Card** view opens, where per-message pricing is defined. Its contents were not captured in the July 9 corpus: **TBD — parked** (new parked item; confirm live).
13. Click the **Spending Alerts** tab. **Expected:** the **Spending Alerts** view opens, where messaging-spend thresholds are set. Its contents were not captured in the July 9 corpus: **TBD — parked** (new parked item; confirm live).
14. Return to the **Overview** tab. **Expected:** you are back on the summary. From here you can answer the two most common billing questions: **Usage by Source** explains why a bill moved, and **Invoices** holds the open bill itself.

**Knowledge check [READ-ONLY].** A client disputes this month's messaging charges. Which view shows the per-campaign cost split, and which tab shows their open invoice? Answer: the **Usage by Source** panel on **Overview** breaks cost out per campaign and automation, and the **Invoices** tab, badged **1 open**, holds the open bill.

## Expected results

From the **Usage & Billing** page you can read a period at a glance: spend and volume in the KPI band, the month-by-month trend in **Monthly Usage Cost**, and the per-source breakdown in **Usage by Source**. When a client asks why a bill moved, the largest **Usage by Source** row is usually the answer. The **Invoices** tab, badged **1 open**, is where the client's actual bill lives. The **SMS Usage**, **Email Usage**, **Rate Card**, and **Spending Alerts** tabs each open their own view; their detailed contents are parked until confirmed live.

## Notes and troubleshooting (observed behavior only)

- The billing-period line drives everything below it. The KPI band, **Monthly Usage Cost**, and **Usage by Source** all report the period named in **Current Billing Period — May 2026**. The current month's figures are estimates until the month closes, which the asterisk and the **\* Estimated, month not complete** note mark on the last bar.
- **Usage by Source** is the answer to "why is my bill higher this month?" Read by the **SHARE** bars or the **COST** column and start at the top row. One campaign or automation usually accounts for the swing, as **Nth Wash Rewards** does in the May period.
- The campaigns and automations listed in **Usage by Source** are set up in the Marketing area, not here. This page reports their cost; it does not change them.
- The **Year-to-Date Summary** panel includes an export control that is out of scope for this read-only lesson. Leave it untouched.
- Panel-subtitle note: **Monthly Usage Cost** is captioned **Last 6 months — SMS & Email**, but seven monthly bars render (Nov through May). Read the bars, not the caption's count. Reported as a discrepancy for this lesson.
- Tab contents beyond **Overview** were not in the July 9 corpus. Author the tab names and badges from what is verified and confirm each tab's panels and columns live before recording those segments.
- If the **Still there?** idle dialog appears during a walk, dismiss it off-camera (move the mouse, or **Stay Logged In**) and re-roll the segment. Session-timeout behavior is out of scope here (see WC-01-03).

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne.

**Verified against demo.washcentral.com on July 9, 2026.**
