# WC-12-03 · Services & per-location values (Settings)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers the Services catalog and the pattern that lets one service carry different values at different sites. You read the **Services** list and its summary tiles, then open a wash service to see how a single record is scoped to locations. The payoff is one idea you will meet again and again: a service is defined once, but where it sells and what it costs can change per site through the **Active Locations** tab and the per-field **Configure per location** gears. Master it here and Discounts, Surcharges, and other site-variable records read the same way.

Everything you do here is read-only. The catalog is production configuration; you look, you do not edit or create.

## Audience and prerequisites

Internal Micrologic technicians in Tech Support and Pre-Configuration. You should be able to open **Settings** and read a WashCentral list (columns, KPI tiles, search box) from WC-01-04. No prior work with the Services module is assumed. Creating or editing a service is admin work and is not done in the demo tenant.

## Navigation path

The Services catalog lives under **Settings**. Open **Settings**, then the **Services** group in the left sidebar: `Settings → Services → Services`. The same group holds **Service Types**, **Service Groups**, **Detail Types**, **Rewards**, and **Loyalty Discount Types**. A header **Services▾** dropdown reaches the same pages.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate **+ New Service** but never click it, never save, and open a service only to read it.

1. Open **Settings** and click **Services** in the **Services** sidebar group. **Expected:** the **Services** page opens. The breadcrumb reads **Settings › Services**, a KPI band sits across the top, three summary cards follow, and the **Services List** card sits below them.

2. Read the **Services** sidebar group. **Expected:** the group lists **Services**, **Service Types**, **Service Groups**, **Detail Types**, **Rewards**, and **Loyalty Discount Types**, with **All Settings** and **Close Settings** above and **Integrations** below. **Services** is the catalog of things a site sells; the sibling pages define the vocabulary each service draws on (its type, its group, its detail codes).

3. Read the KPI band. **Expected:** four tiles, **24 Total Services**, **21 Active**, **6 Service Types**, and **$14.99 Avg Price**. These count the whole catalog, not one site. Treat the numbers as a health snapshot rather than an exact inventory: in this tenant the KPI count and the list count disagree, which is a known demo-data quirk (see Notes).

4. Read the **Services Trend** and **Service Status** cards. **Expected:** **Services Trend** shows the catalog over the last 12 months, up 4%. **Service Status** shows configuration health as **88% ACTIVE**, **0% DRAFT**, and **12% INACTIVE**. That is the lifecycle of a service: an active service sells, a draft is not live yet, and an inactive one is retired but kept for history.

5. Read the **Service Distribution** card. **Expected:** distribution by type reads **Wash 42%**, **Add-On 33%**, **Detail 17%**, and **Other 8%**. Wash is the largest slice and the kind of service this lesson opens.

6. Move to the **Services List** card. **Expected:** the card is titled **Services List** with the breadcrumb **SETTINGS · SERVICES**, and **+ New Service** sits top-right. Creating a service is admin or TRAIN- work, so leave **+ New Service** alone here.

7. Read the list columns. **Expected:** five columns, **DESCRIPTION**, **CODE**, **TYPE**, **PRICE**, and **ACTIVE**. **CODE** is the service's controller code, the value that ties the service to the POS and tunnel controller so a button on the point of sale fires the right wash.

8. Read the list body. **Expected:** in the July 9 capture the rows are replaced by the message "Couldn't load services (Failed to fetch). Check your connection to the AI agent service." On a healthy tenant this is where the migrated catalog appears, including wash packages, add-ons, and token sales. The demo also tends to load a single fixed sample record, "Basic Wash," when a detail opens (demo-data note, DISCREPANCIES.md). The message signals a data-service connection problem, not an empty catalog.

9. Note the **Search services…** box, **Filters**, and **Search**. **Expected:** the search box placeholder reads "Search services…", with a **Filters** dropdown and a **Search** button beside it. A real catalog runs to a couple hundred rows, so you search for a service rather than scroll. Read-only here: do not run a filter.

10. Read the pagination. **Expected:** **ROWS PER PAGE** offers **25**, **50**, and **100**, and the footer reads **1–1 of 1** because only the error row is present in this capture. On a loaded list this is how you page through the catalog.

11. **[READ-ONLY] exercise:** open a wash service to view its detail. **Expected:** on the July 8, 2026 verified pass, clicking a service row opens its detail with two tabs, **Service Main** and **Active Locations**, and header buttons **← Back**, **Delete Service**, and **Edit Service**. The July 9 sweep of `settings-service-edit.html` returned HTTP 404, so the detail page could not be re-verified in this corpus. TBD — parked (PARKED-ITEMS.md #1). Treat the tab and field names below as July 8 orientation pending live re-verification.

12. Read the **Service Main** tab (July 8 orientation). **Expected:** the field groups are **Basic Information**, **Pricing**, **Behavior**, **Display & Ordering**, **Commission**, **Classification**, **Lube & Oil**, and **Additional**. Two fields matter most for support. **CONTROLLER CODE** is the POS and tunnel-controller mapping from step 7. **COUNT AS CAR** decides whether the service adds to the site's car count, which is why an add-on or a token sale does not inflate traffic numbers. (PARKED-ITEMS.md #1 for re-verification.)

13. Read the **Active Locations** tab (July 8 orientation). **Expected:** this tab lists the sites and groups where the service is sold, each with a status and an effective date. A service only sells where it is active, so this tab is the answer to "where does this service apply." (PARKED-ITEMS.md #1 for re-verification.)

14. Open **Edit Service** and find the per-location gears (July 8 orientation). **Expected:** on the July 8 pass, gear buttons with the tooltip **Configure per location** sit beside **DESCRIPTION**, **CONTROLLER CODE**, **AMOUNT**, **TAXABLE**, **TAX RATE (1)**, **TAX RATE (2)**, and **TAX INCLUDED**. The plain field is the default used everywhere; a gear assigns an override for one location or group. So the same wash can carry a different price, tax treatment, or controller code at a single site without a second record. (PARKED-ITEMS.md #1 for re-verification.)

15. **[READ-ONLY] recording-time step:** click one gear to open the override dialog, then cancel. **Expected:** on the July 8 verified pass the gear did not open the "Configure Value For …" dialog the legacy guide describes; mouse clicks and programmatic clicks both left it closed. The intended behavior is a per-location value dialog where an admin sets the site or group override. Because the dialog would not open in the demo tenant, this step is parked: teach the concept, point to the gear, and leave the dialog verification for a production-like tenant. TBD — parked (PARKED-ITEMS.md #1). Then leave **Edit Service** with **← Back** or **Cancel**. Never click **Save**.

16. Recap the pattern. **Expected:** a service is one record, but the **Active Locations** tab sets where it sells and the per-field **Configure per location** gears set what it costs and how it is taxed at each site. This "one record, many sites" pattern repeats on Discounts, Surcharges, and other site-variable settings, so learning it once here carries across the module. (Knowledge check below.)

## Expected results

From Settings you can open the **Services** catalog and read its KPI band, its three health cards, and the **Services List** columns without changing anything. You can explain what **CODE**, **TYPE**, **PRICE**, and **ACTIVE** mean, and you can describe how a single service is scoped to sites through the **Active Locations** tab and priced per site through the **Configure per location** gears. Opening or reading any of this changes nothing, and you never create a service or save an edit.

## Notes and troubleshooting (observed behavior only)

- During the July 9 capture the **Services List** showed "Couldn't load services (Failed to fetch). Check your connection to the AI agent service." in place of rows. Row data on this page loads from the agent service, so that message signals a data-service connection problem, not an empty catalog. The KPI band, the three summary cards, and the list columns were captured intact. (Reported as a new parked item.)
- The `settings-service-edit.html` detail and edit page returned HTTP 404 during the July 9 sweep, so the two tabs, the **Service Main** field groups, and the per-location gears could not be re-verified in this corpus. Their labels come from the July 8, 2026 verified pass and PARKED-ITEMS.md #1. The detail page is normally reached by clicking a service row, which the failed list prevented. (Reported as a new parked item; the per-location dialog itself is the existing PARKED-ITEMS.md #1.)
- The catalog-wide KPI count and the row count disagree in this tenant, and several detail pages load a fixed sample record ("Basic Wash" for a service) regardless of the row clicked. Both are known demo-data behaviors; read the values as illustrative, not as this tenant's exact inventory (demo-data observations, DISCREPANCIES.md).
- The per-location **Configure per location** dialog is parked: on the July 8 pass the gear would not open the "Configure Value For …" dialog. Teach the concept and point to the gear; leave the dialog step for a production-like tenant (PARKED-ITEMS.md #1).
- The **Active Locations** plus per-field gear pattern is the same one used by Discounts and Surcharges in WC-12-04. Learn it once here.
- *Migration note (source: Migration FAQ): migrated data, including the service catalog, carries over from WashAssist, so a converted site keeps its existing services after cutover.*

## Knowledge check

"Why does the Works wash cost two dollars more at one site than at the others?" Which tab and which control answer that in one sentence? **Answer:** the **Active Locations** tab confirms the service sells at that site, and the **Configure per location** gear beside **AMOUNT** holds the site-specific price override, so the extra two dollars is a per-location value on one shared record, not a separate service.

## Related lessons

WC-01-04 Reading a WashCentral list · WC-12-02 Locations & groups · WC-12-04 Payments & Finance (Discounts, Tax Rates) · WC-12-05 Hardware & UI (POS button wiring) · WC-12-06 Users & Security.

**Verified against demo.washcentral.com on July 9, 2026.**
