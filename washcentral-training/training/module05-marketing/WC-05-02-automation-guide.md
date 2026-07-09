# WC-05-02 · Marketing Automation (Marketing)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a read-only tour of the **Marketing Automation** dashboard, the page you open when a client asks why a lifecycle message did or didn't go out. By the end you can read the four KPI cards at the top, interpret the three summary panels (**Send Volume**, **Status Breakdown**, **Top Triggers**), and read the automations table row by row: which trigger fires each flow, when it was created and last modified, and whether it is **Published**, **Draft**, or paused by weather. You open the page, read it, and leave. You never publish, unpublish, or send anything from here.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and comfortable reaching a module from the left rail (WC-01-01). No prior Marketing experience is assumed. This lesson does not create, edit, publish, or send an automation. Those actions are out of scope, and on the shared demo tenant they are off limits.

## Navigation path

`Marketing → Automation`. The page header reads **Marketing Automation** with the breadcrumb **Marketing › Marketing Automation**. In the left rail, **Automation** is the active item, directly under **Campaigns**.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing in this lesson is clicked that changes a record.

1. In the left rail under **Marketing**, open **Automation**. **Expected:** the page loads with the breadcrumb **Marketing › Marketing Automation** and the page title **Marketing Automation**. The header carries **Search ⌘K** and **Ask Shyne**; the left rail shows **Automation** highlighted beneath **Campaigns**.
2. Read the KPI band across the top. **Expected:** four cards read **4 Total Automations**, **3 Published**, **1 Draft**, and **4,804 Total Sends MTD**. That is: how many automations exist, how many are live, how many are still drafts, and how many messages they have sent month to date.
3. Look at the **Send Volume** panel on the left. **Expected:** a panel titled **Send Volume** with the subtitle **30-day send trend**, drawn as a line of daily sends over the last 30 days. The individual day values are not labeled, so read it as a shape, not a table. If a client says the texts stopped last week, a dip here is your first signal.
4. Look at the **Status Breakdown** panel in the middle. **Expected:** a panel titled **Status Breakdown**, subtitle **Published vs Draft**, splitting the automations into published and draft. Take the actual count from the KPI cards above (3 Published, 1 Draft); the panel is a visual of the same split. Its inline figures do not reconcile with the KPI cards, so trust the cards: TBD — parked (new parked item, see this lesson's report).
5. Look at the **Top Triggers** panel on the right. **Expected:** a panel titled **Top Triggers**, subtitle **Automation distribution by trigger**, drawn as a donut with five labeled slices: **Cancel 18%**, **Recharge 15%**, **Plan Upg. 12%**, **Buy Plan 11%**, and **Other 44%**. These are the chart's own rollup labels for where automated activity concentrates, and they are worded differently from the **TRIGGER** column values you will read in the table below.
6. Drop to the list card below the panels. **Expected:** the card eyebrow reads **MARKETING · AUTOMATION**, the heading **Marketing Automations**, and the subtitle **4 automations on record**. Top-right of the card sit **Export** and **+ New Automation**. Neither is used in this lesson: **Export** downloads data, and **+ New Automation** opens a create form.
7. Read the list controls under the heading. **Expected:** a search box with the placeholder **Search automations…**, a **Filters** control, and a **Search** button. Typing a name narrows the list; browsing filters nothing until you actually search, and nothing is edited by looking.
8. Read the table column headers. **Expected:** five columns, **NAME · TRIGGER · CREATED · MODIFIED · STATUS**. The **STATUS** column is the one you check most on a support call.
9. Read the first row. **Expected:** **Win-Back — No Visit 90 Days**, trigger **No Visit**, created **Jul 6, 2026**, modified **Jul 6, 2026**, status **Draft**. Its trigger is a customer who has not returned. Because the status is **Draft**, it is not live and nothing is going out from it yet.
10. Read the second row. **Expected:** **Cancel Plan Recovery**, trigger **Cancellation**, created **May 10, 2026**, modified **Jul 7, 2026**, status **Published** with the overlay chip **⛅ Weather paused — 6 locations**. **Published** means the flow is live, and the weather chip means its sends are currently paused at six sites. A flow can be live and paused at the same time, which is often the real answer to a "the texts stopped" call.
11. Read the third and fourth rows. **Expected:** **Birthday Surprise**, trigger **Member Birthday**, created **Jan 10, 2026**, modified **Jun 9, 2026**, status **Published** (running clean); and **First Wash Welcome**, trigger **Wash First**, created **Dec 21, 2025**, modified **May 10, 2026**, status **Published** with **⛅ Weather paused — 5 locations**.
12. Read the status chips and the pagination footer. **Expected:** statuses render as a **Draft** chip and a **Published** chip, with the **⛅ Weather paused — N locations** chip layered alongside where a pause is active. The footer shows **ROWS PER PAGE: 10** and **1–4 of 4** with the page control **‹ 1 ›**; all four automations fit on a single page.
13. Recap the page. **Expected:** four KPI cards up top, three panels for the trends, one table for the detail. From here you can tell within seconds whether a flow is a draft, a live-but-paused automation, or something that warrants a bug, without changing a thing.

## Expected results

From the **Marketing Automation** page you can, without touching a record, read how many automations exist and how many are live (**4 Total Automations**, **3 Published**, **1 Draft**), see the month's send volume (**4,804 Total Sends MTD**) and its 30-day trend, read the trigger distribution donut, and work the table row by row to see each flow's trigger, dates, and status. You can tell a **Draft** from a **Published** automation, and you can spot the **⛅ Weather paused — N locations** chip that explains why a live flow is not sending at some sites. Reading or searching the page changes nothing.

## Knowledge check

A client reports that their **Cancel Plan Recovery** texts stopped going out at several of their washes. On this page, name the column and the chip that together tell you the flow is live but paused, and where you would read how many sites are affected, before you open a bug. (Answer: the **STATUS** column shows **Published**, so the flow is live; the **⛅ Weather paused — N locations** chip beside it shows the pause and the site count. Where weather pausing is configured is TBD — parked (PARKED-ITEMS.md #6).)

## Notes and troubleshooting (observed behavior only)

- **Draft vs Published.** A **Published** chip means the automation is live; **Draft** means it is not yet sending. This lesson never toggles between them, and on the shared tenant you never change an automation's status.
- **Weather pause.** The **⛅ Weather paused — N locations** overlay chip appears on a **Published** automation when weather has paused its sends at N sites (six on **Cancel Plan Recovery**, five on **First Wash Welcome**). Where weather pausing is configured, and exactly what it gates, is TBD — parked (PARKED-ITEMS.md #6).
- **KPI cards are the count of record.** Use the KPI band (3 Published, 1 Draft) for the published/draft counts. The **Status Breakdown** panel's inline figures do not reconcile with the KPI cards; read the panel as a visual of the split, not as a second count.
- **Donut labels are not the TRIGGER column.** The **Top Triggers** donut labels (Cancel, Recharge, Plan Upg., Buy Plan, Other) are the chart's own rollup names and do not line up one-to-one with the **TRIGGER** column values on the four rows (No Visit, Cancellation, Member Birthday, Wash First).
- **Export and + New Automation are not used here.** This is a read-only lesson. **Export** downloads data and **+ New Automation** opens a create form whose layout was not captured in the July 9 corpus, so it is not documented in this package (TBD — parked, new item).
- **Send Volume has no labeled day values.** Treat the panel as a trend line; precise daily figures are not legible in the corpus.
- **Session timeout.** A "Still there?" idle dialog with a 2:00 countdown can appear (see the header's **Stay Logged In** control). If it does during a recording, dismiss it off-camera and re-roll the segment. Timeout behavior is out of scope here (see WC-01-03; PARKED-ITEMS.md #9).

## Related lessons

WC-05-01 Campaigns · WC-05-03 The rest of Marketing · WC-01-01 Global navigation.

**Verified against demo.washcentral.com on July 9, 2026.**
