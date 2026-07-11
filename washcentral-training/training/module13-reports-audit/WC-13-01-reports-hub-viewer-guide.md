# WC-13-01 · Reports Hub and Report Viewer (Reports & Audit)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson walks the **Reports** hub and the **Report Viewer** that opens when you run a report. By the end you can find any of the 173 reports through the **VIEWS** shortcuts or the 19 **CATEGORIES** filters, read the report list and its columns, locate the **Schedule Report** button without clicking it, open a report into the viewer, run it read-only, read its generation stamp, and close it. This is the first screen a technician opens when a client asks for last period's numbers, or asks why a report looks off.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and comfortable with the global header and left rail from WC-01-01 and WC-01-02. No prior Reports experience is assumed. Building a report from scratch in **Custom Builder** and putting a report on a delivery timer with **Schedule Report** are out of scope here. This lesson covers finding, opening, running, and closing an existing report.

## Navigation path

**Reports** rail button → `reports.html`. The hub opens on the **All Reports** view: a left sidebar split into **VIEWS** and **CATEGORIES**, and the report list filling the rest of the page. Clicking a report row loads the **Report Viewer** at `report-view.html?name=…`.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. Click the **Reports** button in the left rail. **Expected:** the Reports hub loads at `reports.html` with the breadcrumb **Reports›Reports** and the page title **Reports**. It opens on the **All Reports** view, which has a left sidebar (headed **VIEWS**, then **CATEGORIES**) and the report list on the right.
2. Read the **VIEWS** list at the top of the sidebar. **Expected:** five shortcuts, most with a count: **All Reports** (173), **Favorites** (5), **Scheduled Reports** (3), **Advanced Analytics** (23), and **Custom Builder**. These are saved slices of the same 173 reports. **Favorites** holds the ones you starred, **Scheduled Reports** the ones set to run on a timer, and **Advanced Analytics** the analytics-type set. **Custom Builder** is where a new report is built (out of scope here).
3. Read the **CATEGORIES** filters below VIEWS. **Expected:** 19 category filters, each with a count: **Financial** (8), **Traffic & Sales** (4), **Revenue** (6), **Commissions** (5), **Employee Labor** (7), **Employee Reports** (6), **Unlimited Programs** (22), **Customers** (9), **House Accounts** (9), **Transactions** (21), **Credit Cards** (2), **Inventory** (17), **Maintenance** (16), **Marketing** (4), **Scheduling** (1), **WashHub** (1), **Weather** (1), **Settings** (3), and **Other** (8). Clicking a category filters the list to that category, which is how you narrow 173 reports down to the few a question needs.
4. Read the top of the report panel. **Expected:** the panel is headed **All Reports** with a **173** counter chip and the subtitle "Browse and run all standard and custom reports". Below the heading is a **Search reports…** box that filters the list by name as you type.
5. Find the **Schedule Report** button at the top-right of the hub. Do not click it. **Expected:** **Schedule Report** sits on the hub itself, above the report list. It puts a report on a delivery timer, which is a send-type action, so it stays untouched here. The viewer you open later does NOT carry this button; scheduling is a hub-level action only.
6. Read the **Report List** table header. **Expected:** the card is titled **Report List** with the sub-label "ANALYTICS AND PERFORMANCE REPORTS". Its columns are **★** (favorite), **Report Name**, **Category**, **Type**, and **Last Run**.
7. Read the **Type** chips and a few example rows. **Expected:** the **Type** column tags each report **Standard**, **Scheduled**, or **Analytics**. Example rows: **Daily, Period, and Shift Financial** (**Financial Reports** · Standard · Last Run —), **Daily, Period, and Shift Financial 2.0** (Financial Reports · Scheduled · 03-25-2026 9:14 AM, marked with a ★), and **Traffic Report - Sales Data** (**Traffic and Sales Reports** · Standard · 03-24-2026 2:30 PM, marked ★). A dash in **Last Run** means the report has not been run yet. The list pages with **‹ 1 2 3 4 ›** at 50 rows per page.
8. Open a report: click the **Daily, Period, and Shift Financial** row. **Expected:** the **Report Viewer** opens at `report-view.html?name=…`. The viewer replaces the list with a filter bar across the top and the report body below.
9. Read the **REPORT FILTERS** bar. **Expected:** the filter bar carries **More Filters ▾**, an **All Locations** selector, and a **Date Range** with **From** and **To** fields. This **All Locations** is the report's own location filter; it scopes the report you are about to run, and it is separate from the global-header scope selector from WC-01-02.
10. Locate the **▶ Run Report** and **✕ Close Report** buttons. **Expected:** the viewer carries **▶ Run Report** to render the report and **✕ Close Report** to leave it. **Schedule Report** is NOT on the viewer; scheduling stays on the hub (step 5).
11. **[READ-ONLY]** Click **▶ Run Report**. **Expected:** the report renders in place with summary tiles and a table built from the current filters. Running a report only reads data and changes nothing. The exact tiles, columns, and values that render for this report are TBD — parked (see Notes).
12. Read the generation stamp on the rendered report. **Expected:** the render carries a "Generated … · Sample data" stamp that shows when it was produced and flags the demo tenant's figures as sample data. In a live client tenant the same line reads the real generation time and there is no sample-data flag. The exact stamp text is TBD — parked (see Notes).
13. Click **✕ Close Report**. **Expected:** the viewer closes and you are back on the Reports hub **All Reports** list. Running and closing a report leaves the underlying data untouched.
14. Recap the loop. **Expected:** you can reach any report through **VIEWS** or the 19 **CATEGORIES**, read its **Type** and **Last Run**, find **Schedule Report** on the hub, open a report into the **Report Viewer**, set the **REPORT FILTERS** bar, **▶ Run Report** to render it read-only, read the **Generated … · Sample data** stamp, and **✕ Close Report** to step back out.

**Exercise 13-01a [READ-ONLY]:** from the hub, open **Daily, Period, and Shift Financial**, leave the location filter on **All Locations**, and click **▶ Run Report**. In the rendered report, find the per-location and per-shift rows and the refund column, then click **✕ Close Report**. (The specific rows and columns the demo renders are TBD — parked; the drill is to run, read, and close cleanly.)

## Expected results

From the Reports hub you can find any of 173 reports two ways: the **VIEWS** shortcuts for saved slices, or the 19 **CATEGORIES** filters for a subject. The list tells you each report's **Type** and when it **Last Run**. **Schedule Report** stays on the hub, so nothing gets scheduled by accident from inside a report. Opening a report loads the **Report Viewer**, where the **REPORT FILTERS** bar sets the location and dates, **▶ Run Report** renders the result read-only with its **Generated … · Sample data** stamp, and **✕ Close Report** returns you to the list with nothing changed.

## Knowledge check

Reworded from the plan. Where do you find **Schedule Report**, on the hub or in the viewer? Which button renders a report, and which one steps you back out? Name the three values the **Type** column can show.

Answers: **Schedule Report** is on the hub only, never in the viewer. **▶ Run Report** renders the report; **✕ Close Report** exits it. The **Type** column reads **Standard**, **Scheduled**, or **Analytics**.

## Notes and troubleshooting (observed behavior only)

- The hub's **All Reports** total of **173**, the five **VIEWS** counts, the 19 **CATEGORIES** with their counts, the **Report List** columns, the example rows, the pagination, and the **Schedule Report** button are all confirmed on the July 9 capture of `reports.html`.
- The **Report Viewer** page (`report-view.html`) was not separately captured in the July 9 corpus. Its filter-bar labels (**More Filters ▾**, **All Locations**, **Date Range** From/To), **▶ Run Report**, and **✕ Close Report** come from the project's verified July 8 platform pass (DISCREPANCIES.md #24). The rendered report's summary tiles, table columns, values, and the exact **Generated … · Sample data** stamp text are TBD — parked (new parked item: Report Viewer render not in the July 9 corpus). Verify these live before recording.
- **Schedule Report** lives on the hub, not in the viewer. A legacy note that grouped Run, Schedule, and Close together on one report screen does not match the platform (DISCREPANCIES.md #24).
- **▶ Run Report** reads data only. It does not write, send, or schedule anything, so it is safe to run while documenting. Scheduling a report for delivery through **Schedule Report** is a send-type action and is out of scope here.
- The demo tenant's report figures are sample data, which the generation stamp flags. On a client tenant the same reports read that client's live data.
- The idle "Still there?" prompt can appear on any page during a long session. It is not part of this lesson; dismiss it with **Stay Logged In** and carry on. Session behavior is covered separately in the Foundations module.

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · WC-13-02 Audit trio · WC-PB-09 Reports wrong or missing.

**Verified against demo.washcentral.com on July 9, 2026.**
