# WC-06-02 · The Analytics sidebar (22 pages) and Forecasting (Analytics)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The Analytics module is the biggest sidebar in WashCentral: 22 pages sorted into four labeled groups. This lesson is the map. By the end you can name every group, find any page from memory, and tell a rolled-up dashboard from a filterable report. We open five representative pages so you know what each kind of page looks like when it loads: **Downsells** (a save-flow dashboard), **Campaign Performance** (a marketing report), **BI Overview** (the intelligence hub), and **Forecasting** (the forward-looking workspace), with **Executive Dashboard** as the landing page. Everything here is read-only. You browse, you read, you change nothing.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and comfortable with the global header and the left rail from Module 1, and you should have seen the Executive Dashboard in WC-06-01. No analytics background is assumed. This lesson stays on the surface: it names the pages and shows what four of them look like. The deeper dashboards each get their own lessons later.

## Navigation path

`Left rail → Analytics`. The module opens on its first page, **Executive Dashboard**, with its own sidebar down the left. That sidebar is the subject of this lesson. Its header reads **Analytics**, and every page in the module lives under one of four group labels: **ANALYTICS**, **MARKETING**, **INTELLIGENCE**, **FORECASTING**.

## Steps

One action per step. Hold each new page for two to three seconds before moving on. Nothing in this lesson is clicked that would create, send, or change a record.

1. From the left rail, open the **Analytics** module and read the left sidebar. **Expected:** the sidebar header reads **Analytics**. Below it, 22 pages sit under four group labels in this order: **ANALYTICS**, **MARKETING**, **INTELLIGENCE**, and **FORECASTING**. The module opens on **Executive Dashboard**, the first item in the first group.

2. Read the **ANALYTICS** group top to bottom. **Expected:** ten pages: **Executive Dashboard**, **Location Summary**, **Gamification**, **Marketing**, **Memberships**, **Subscribers**, **Downsells**, **Online Sales**, **Live Conversion**, and **Retail Customers**. One naming trap: the item called **Marketing** here is a single dashboard. It is not the **MARKETING** group lower down, which holds five separate reports. Same word, different things.

3. Stay on **Executive Dashboard** and glance at its header. **Expected:** period toggles **Today / Week / Month / Quarter / YTD / 1Y**, an "Updated just now" note, and the **All Locations▾** scope selector. This is the default landing page and the whole subject of WC-06-01, so we read past it here and move to the pages that lesson does not cover.

4. Click **Downsells** in the **ANALYTICS** group. **Expected:** the **Downsells** page opens with six KPI cards across the top: **Cancel Attempts** (742), **Saves** (318), **Save Rate** (42.9%), **Revenue Retained** ($18,420), **Avg MRR Impact** (-$11/mo), and **Cancel Rate** (2.8%). The header keeps the same period toggles and the **All Locations▾** selector, so this dashboard scopes and time-filters the same way the Executive Dashboard does.

5. Read the two panels that explain the save flow. **Expected:** **Cancel attempts vs saves · last 30 days** plots daily volume; **Top reasons for cancel** ranks why members leave (Moving away 24%, Too expensive 22%, Don't use enough 18%, Got a new car 12%, Quality concern 9%, Other 15%); **Save rate by downsell offer** and **Revenue retained · top saves** show which downgrade offers hold revenue (Downgrade to Unlimited $8,420, Free month → renewal $4,210, Pause 60 days $3,180). **[READ-ONLY]** This page is the other end of a Command Center play: the Command Center flags **29 members with downsell signals**, and this is where the save-flow numbers behind that flag live. When a member hits cancel, the system offers a downgrade instead, and these cards score how often that works.

6. Point to the **MARKETING** group header. **Expected:** five report pages: **Campaign Performance**, **Segment Response**, **Offer Effectiveness**, **Acquisition Sources**, and **Win-Back Analysis**. These are reports, not dashboards. They read as filterable, exportable tables.

7. Click **Campaign Performance**. **Expected:** the report opens with a KPI band: **12 Campaigns Analyzed**, **94,200 Total Sent**, **34.2% Avg Open Rate**, **8.7% Avg Click Rate**, **1,847 Total Conversions**, and **$42,180 Revenue Attributed**. Instead of a location selector, the header carries **Filters** and **Export CSV**. The **All Campaigns** table has columns **Campaign Name · Channel(s) · Sent · Open Rate · Click Rate · Conversions · Revenue · ROI · Status**, with status chips **Active**, **Completed**, and **Draft**. That is the shape every MARKETING page shares: a summary band over a sortable table you can filter and export.

8. Point to the **INTELLIGENCE** group header. **Expected:** six pages: **BI Overview**, **Revenue Intelligence**, **Benchmarking**, **Churn Intelligence**, **LTV Intelligence**, and **Online Presence**.

9. Click **BI Overview**. **Expected:** the intelligence hub opens with eight KPI cards: **MRR** ($284,400), **Net Rev Retention** (94.2%), **Active Members** (18,816), **Monthly Churn** (8.1%), **Avg LTV** ($486), **NPS Score** (64), **Win-Back Rate** (34%), and **CAC** ($18.40). The header carries **Search ⌘K**, **Ask Shyne**, and the period toggles, but no location selector.

10. Read down the BI Overview body. **Expected:** **Revenue · last 12 months** ($15.8M, split into Membership, Pay-per-wash, and Retail); a **Customer Health** panel showing the active-member plan mix (Unlimited Plus 42%, Unlimited 30%, Premium 18%, Basic 10%) with **At-Risk: 127 members** and **Lapsed 90d: 284 members**; and a **DEEP DIVES** section titled "Explore by domain". BI Overview is the front door; the other five Intelligence pages are the deep dives it links into.

11. Point to the **FORECASTING** group header. **Expected:** one page, **Forecasting**. That closes the count: 10 under ANALYTICS, 5 under MARKETING, 6 under INTELLIGENCE, and 1 under FORECASTING makes 22.

12. Click **Forecasting**. **Expected:** four KPI tiles run across the top: **Next Month Forecast** ($248,400), **YTD Variance** (+2.4%), **Accuracy** (94%), and **Data Points** (18 months). The header here carries **Export** and **+ New Record**, controls the dashboards do not have.

13. Read the Forecasting body and the list. **Expected:** three panels, **Revenue Forecast** (Last 12 months, $2.84M), **Revenue by Location** (MLAS 34%, SSNB 28%, Piscataway 22%, Other Locations 16%), and **Forecast Accuracy** (94% ON TARGET, 4% OVER, 2% UNDER); then a **Forecast List** of 4 records with a **Search forecasting…** box, **Export**, **+ New Record**, and columns **PERIOD · LOCATION · FORECAST REVENUE · ACTUAL REVENUE · VARIANCE · CARS FORECAST · CONFIDENCE · ACTIONS**.

14. Read one closed row and one pending row, then leave the create button alone. **Expected:** the **May 2025 · All Locations** row shows **Forecast Revenue** $238,200 against **Actual Revenue** $241,840, a **Variance** of +1.5%, and **Confidence** 96%. That is a forecast the month has already settled. The **June 2025** row shows "—" for actual and variance because the month has not closed yet. The footer reads "Showing 1–4 of 4 records" with pagination ‹ 1 ›. **[READ-ONLY]** Do not click **+ New Record**; it starts a create form, and creating a forecast is not part of this tour.

15. Recap the map. **Expected:** the Analytics module is 22 pages in four groups: **ANALYTICS** for network and per-location dashboards, **MARKETING** for campaign reports, **INTELLIGENCE** for the BI hub and its deep dives, and **FORECASTING** for the one forecast workspace. Any page is one click away in the sidebar, and **Search ⌘K** jumps straight to a page by name when you would rather not scroll.

## Expected results

You can open the Analytics module and name its four groups without looking: ANALYTICS, MARKETING, INTELLIGENCE, FORECASTING. You can list what belongs in each and find any of the 22 pages in the sidebar. You can tell a rolled-up dashboard (KPI cards plus a location selector) from a report (a summary band plus a filterable, exportable table) and from the Forecasting workspace (forward-looking tiles plus a records list). Browsing every one of these pages changes nothing.

## Exercise 6.2a [READ-ONLY]

Open **Downsells** and connect it to the Command Center play **29 members with downsell signals**: read the **Save Rate** card and the **Top reasons for cancel** panel, and say in one sentence what the save flow is doing this month. Then open **Forecasting** and read the variance on one closed row (for example, **May 2025**: forecast $238,200 versus actual $241,840, +1.5%). Do not create or export anything.

## Knowledge check

Which sidebar group holds **Forecasting**, and how many pages does the Analytics module list in total across all four groups? (Reworded from the Module 6 exercise.)

## Notes and troubleshooting (observed behavior only)

- The four group labels (**ANALYTICS**, **MARKETING**, **INTELLIGENCE**, **FORECASTING**) are section headers, not pages. Only the 22 items under them navigate.
- Headers are not identical across the module. The ANALYTICS dashboards carry the **All Locations▾** scope selector and the period toggles; the MARKETING reports carry **Filters** and **Export CSV**; **BI Overview** carries the period toggles but no location selector; **Forecasting** carries **Export** and **+ New Record**. Read the header of the page you are on rather than assuming.
- Naming caution: the ANALYTICS item **Marketing** is a single dashboard, and the **MARKETING** group is five separate reports. Confirm which you opened by the page title before you read the numbers.
- Discrepancy to be aware of: the five **MARKETING** pages sit under the sidebar's MARKETING header, but their breadcrumb reads **Analytics › [page]** (for example, `Analytics › Campaign Performance`). The sidebar grouping and the breadcrumb label disagree; the sidebar is what this lesson teaches.
- The Forecasting **+ New Record** create form was not captured in this session, so its fields are not documented here: TBD — parked (new parked item, see structured return). Do not click it while recording.
- All values shown (Downsells $18,420 retained, BI Overview MRR $284,400, the Forecasting rows, and so on) are demo data captured April 2026. Live numbers will differ; the labels, columns, and layout are what you are learning.

## Related lessons

WC-06-01 Executive Dashboard · WC-01-01 Global navigation (Command Center plays) · WC-01-02 Search, location scope, and Ask Shyne.

**Verified against demo.washcentral.com on July 9, 2026.**
