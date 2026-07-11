# WC-06-01 · Executive Dashboard (Analytics)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.** (Full-page capture July 11 confirmed the below-fold panels, including GOALS · Q2 2026.)

## Purpose

This lesson is a guided read of the **Executive Dashboard**, the page WashCentral opens to after sign-in. It is the network's top-level scorecard: one screen carrying the period toggles, six KPI cards, and a set of summary panels. A technician scans it to answer "how is the business doing right now" before drilling into a single site or ticket. Everything on this page is read-only. Changing the period reshapes what you see and never touches a record.

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in; since the Executive Dashboard is the demo's landing page, WC-01-01 (orientation) leaves you here. Knowing the global header tools from WC-01-02 (**Search ⌘K**, the **All Locations▾** scope, **Ask Shyne**) helps but is not required. The session timeout ("Still there?") behavior is not part of this lesson; that is covered in WC-01-03.

## Navigation path

`Analytics → Executive Dashboard`. It is the first item in the **ANALYTICS** group of the left sidebar, and it is the page WashCentral loads on sign-in, so you are usually here already.

## Steps

One action per step. Hold each screen for two to three seconds before moving on. Every step on this page is a read; the only clicks are the period toggles, the **REVENUE** card, and **Back**.

1. Confirm you are on **Analytics → Executive Dashboard**. **Expected:** the breadcrumb reads **Dashboard › Executive Dashboard**. The left sidebar shows the **Analytics** module, with **Executive Dashboard** highlighted at the top of the **ANALYTICS** group. The page title is **Executive Dashboard** under a **DASHBOARD** eyebrow, with the subtitle "Executive overview · revenue, members, locations, and operational health for the entire network." The global header tools sit top-right: **Search ⌘K**, **Ask Shyne**, **All Locations▾**, and the **MG** avatar.
2. Read the band directly under the header. **Expected:** an eyebrow reads **NETWORK · APRIL 2026 MTD**, the heading reads **The state of the business**, and the subtitle reads "All locations rolled up. Each card shows lifetime totals plus 14-day momentum." This band is the whole-network rollup. The **All Locations▾** selector in the header is what narrows it to a group or a single site.
3. Look to the right of that band for the period toggles. **Expected:** six toggles sit in a row: **Today**, **Week**, **Month**, **Quarter**, **YTD**, **1Y**. **Month** is selected. Next to them a small **Updated just now** timestamp shows how fresh the figures are.
4. **[READ-ONLY]** During recording, click each period in turn: **Today**, then **Week**, **Quarter**, **YTD**, **1Y**, and back to **Month**. **Expected:** the KPI cards and panels re-scope to the chosen window each time while the layout stays put. This is a view control only. It filters what the numbers cover and changes no data, and returning to **Month** restores the default view.
5. Read the top row of KPI cards, left to right, starting with the three scale cards. **Expected:** **REVENUE** shows **$1.42M** with **↑ 9.4% vs prior month**; **CARS WASHED** shows **19,606** with **↑ 8.2%**; **ACTIVE MEMBERS** shows **18,816** with **↑ 3.4% · +1,408 new**. Each card pairs a headline number with its change and a small sparkline of the trend.
6. Read the three remaining KPI cards. **Expected:** **CONVERSION RATE** shows **7.1%** with **↓ 0.3 pt vs target**; **AVG VISIT FREQUENCY** shows **2.6×** with **↑ 0.2× per member / mo**; **LABOR %** shows **17.4%**, flagged "↑ 2.4 pt — over target 15%". **LABOR %** is drawn in amber because it is running over its target. The color is the card calling out a number that needs attention.
7. Move to the panels below the cards. The first is **Revenue · last 12 months**. **Expected:** the panel subtitle reads "Membership recurring + retail visits, network-wide". The headline figure is **$15.8M** with **↑ 11.4% trailing 12 mo**. A stacked area chart runs May through April with a three-part legend: **Membership**, **Pay-per-wash**, and **Retail (gift cards, books)**.
8. Read the **Location health** panel on the right. **Expected:** the subtitle reads "Status across all 6 locations". Each site gets one row with a colored status dot, its revenue, its car count, its labor %, and a conv-to-target figure: **Fort Lauderdale** ($311k · 4,218 cars · Labor 13.2%) at 98.7% conv to target; **Miami North** ($284k · 3,892 cars · Labor 14.4%) at 98.7%; **Boca Raton** ($258k · 3,504 cars · Labor 17.8%) at 100%; **Tampa West** ($232k · 3,156 cars · Labor 18.6%) at 97.3%; **Orlando Central** ($216k · 2,944 cars · Labor 22.4%) at 89.3%; **Naples Coast** ($139k · 1,892 cars · Labor 26.8%) at 81.3%. The dots and the conv-to-target color shift from green toward red as a site slips, so the weakest site stands out at a glance (Naples Coast here).
9. Scroll to the **Members vs churn** panel. **Expected:** the subtitle reads "Monthly active members, gross adds, churn — last 12 months". It is a combined chart, confirmed in full by the July 11 full-page capture: a line for **Active members (right)** set against paired monthly bars for **Gross adds (left)** and **Churn (left)** across May through April. Individual bar values are not labeled on the chart and are not read in this lesson.
10. Read the **Revenue mix** panel beside it. **Expected:** the subtitle reads "Composition this month". A donut chart splits this month's revenue into four labeled segments (July 11 full-page capture): **Membership 68%**, **Pay-per-wash 22%**, **Retail 7%**, and **Add-ons 3%**. Membership carrying about two-thirds of the month is the shape to remember. Below these panels the page continues into the **GOALS · Q2 2026** section, headed **Where we are vs targets** (see Notes); it closes out the scroll and is read in passing here.
11. During recording, click the **REVENUE** card to open its detail view. **Expected:** a **Revenue Detail** page opens (breadcrumb **Dashboard › Revenue Detail**, a **Live Prototype** chip, and a **Back to Executive Dashboard** button). Its own KPI cards read **Revenue Today** **$184,260** ("Up 8.4% vs yesterday"), **Avg Ticket** **$26.93** ("Across 6,842 washes"), **Member Revenue** **$112,440** ("61% of total today"), and **Add-on Revenue** **$18,960** ("Tire shine, wax, ceramic"). Below sit a **30-day revenue trend**, a **Revenue actions** list, and a **Revenue by location** table with columns **Location · Washes · Avg Ticket · Revenue** (Fort Lauderdale, Tampa West, Orlando Central, Miami North). The KPI cards are launch points, not just readouts.
12. Click **Back to Executive Dashboard**. **Expected:** the Revenue Detail view closes and the Executive Dashboard returns exactly as you left it, still on **Month**.
13. Recap the scan. **Expected:** the Executive Dashboard gives you a one-screen read of the network. Pick a **period**, read the six KPI cards for scale and health, then the panels for the revenue trend, per-site status, membership movement, and revenue mix. Nothing here edits data, and any card can take you a level deeper when a number needs a closer look.

## Expected results

From the Executive Dashboard you can read the whole network at a glance: pick the reporting **period**, take the six KPI cards for scale (revenue, cars, members) and health (conversion, frequency, labor), then read the panels for the twelve-month revenue trend, each site's status, membership gains against churn, and the month's revenue mix. Flipping the period only changes the window you are looking at. Clicking a card opens a detail view and **Back to Executive Dashboard** returns you unchanged. No step on this page edits, moves, or deletes anything.

## Notes and troubleshooting (observed behavior only)

- The whole dashboard is read-only. The period toggles are a view control; changing the period re-scopes the cards and panels and does not modify any record. Selecting **Month** returns you to the default window.
- **LABOR %** renders in amber when it is over target (17.4% against a 15% target). In **Location health**, each site carries a colored status dot and its conv-to-target figure shades from green toward red as the site slips. These colors are the dashboard flagging where to look; they change nothing.
- The learning plan also lists a **GOALS · Q2 2026** panel (target-vs-actual bars including NPS). It sits below the captured viewport and does not appear in today's digest or screenshot, so it reads TBD — parked (new parked item; see structured return). Confirm and document it on a live pass.
- **Members vs churn** and **Revenue mix** have their titles and subtitles captured, but their internal chart values fall below the captured view, so this lesson documents them at the panel level only and does not quote per-bar or per-segment values.
- The **REVENUE** card drills into a **Revenue Detail** page that carries a **Live Prototype** chip. Use **Back to Executive Dashboard** to return; do not follow **Open Reports** or the **Jump to workflow** links during this lesson, which navigate away.
- The session timeout ("Still there?") prompt is not covered here. If it appears while recording, dismiss it off-camera and re-roll the segment. See WC-01-03.

## Related lessons

WC-01-02 Global header tools · WC-06-02 The Analytics sidebar.

**Verified against demo.washcentral.com on July 9, 2026.**
