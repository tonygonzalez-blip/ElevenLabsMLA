# WC-08-02 · Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies (Operations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The **Operations** module's sidebar holds a **MAINTENANCE** group. Lesson WC-08-01 covers its first entry, **Issues**, the reactive work-order list. This lesson walks the other four entries so you know which one answers which upkeep question: **Maintenance Schedule** for planned recurring work, **Equipment Registry** for the machines those jobs run against, **Checklists** for the standard inspections a tech follows, and **Parts & Supplies** for the maintenance stock a job consumes. On July 9 each of these four pages returned a **Not Found** error in the capture environment, so this lesson teaches where the entries live and what each is for, and it parks the on-page detail until the pages render. Opening any entry changes nothing.

## Audience and prerequisites

Internal Micrologic technicians who have finished WC-08-01 (Maintenance Issues). You should be signed in and able to reach the **Operations** module from the left rail. This is a menu tour: it names each page and its job, not a deep dive into any one page. Because the four pages did not load their content on July 9, treat this lesson as an orientation to the menu that you re-verify once the pages are live.

## Navigation path

The **MAINTENANCE** group sits in the left sidebar under the **Operations** module. All five entries are one click apart, so from **Issues** you reach the next with a single click. Shorthand used below: `Operations → MAINTENANCE → Maintenance Schedule`, `Operations → MAINTENANCE → Equipment Registry`, and so on. When a page loads, its breadcrumb reads **Maintenance › [page name]** (as observed on **Issues**, which breadcrumbs **Maintenance › Maintenance Issues**).

## Steps

One action per step. On July 9 all four pages in this tour returned **Not Found** ("HTTP Error 404. The requested resource is not found.") when opened, so no KPI band, insight cards, columns, or rows rendered on them. The sidebar group, the module label, the breadcrumb pattern, and the page shape are grounded on the sibling **Issues** page, which did load. Hold each new screen for two to three seconds before moving on. This whole lesson is **[READ-ONLY]**.

1. From any page, go to the **Operations** module and read the **MAINTENANCE** group in the left sidebar. **Expected:** the group lists five entries in order: **Issues**, **Maintenance Schedule**, **Equipment Registry**, **Checklists**, and **Parts & Supplies**. **Issues** is WC-08-01, the work-order list. The other four are this lesson. Below MAINTENANCE the sidebar continues into the **INCIDENT REPORTS** group (**All Reports**, WC-08-03) and the **SCHEDULER** group (**Appointments** and its siblings, WC-08-04), so you can see how the whole Operations menu is laid out.

2. Open `Operations → MAINTENANCE → Maintenance Schedule`. **Expected:** in the July 9 corpus the page returns **Not Found** ("HTTP Error 404. The requested resource is not found."); no KPIs, columns, or rows render. This is the planned-work companion to **Issues**: where recurring preventive jobs (the upkeep you do on a calendar rather than because something broke) would be listed. Its list-level KPIs and columns could not be observed on July 9: TBD — parked (new item, see the package findings). When you open this page live and it loads, confirm its KPI band and columns before you teach from them.

3. Open `Operations → MAINTENANCE → Equipment Registry`. **Expected:** the page returns the same **Not Found** state as step 2. This is the asset registry: the record of the machines and equipment at each site that a work order or a preventive job ties back to. When a caller reports a tunnel motor or an air dryer by unit, this is the page that would name and locate the asset. Its KPIs and columns could not be observed on July 9: TBD — parked (new item).

4. Open `Operations → MAINTENANCE → Checklists`. **Expected:** the page returns the same **Not Found** state. This is where the standard inspection and maintenance checklists live: the fixed lists of steps a tech runs during a scheduled service or a shift walk-through. Its structure could not be observed on July 9: TBD — parked (new item). Do not confuse this with **Lube Checklists**, which the plan places under the Hardware settings pages, not here.

5. Open `Operations → MAINTENANCE → Parts & Supplies`. **Expected:** the page returns the same **Not Found** state. This is the maintenance parts and consumables list, the stock a repair or a preventive job draws from. It is separate from **Chemicals & Supplies** in the Inventory module (WC-04-02), which tracks wash chemistry and retail stock; this page is the maintenance side. Its KPIs and columns could not be observed on July 9: TBD — parked (new item).

6. Recap the four pages and where each question lands. **Expected:** you can find all four entries under **Operations → MAINTENANCE** and name each one's job. A recurring preventive task goes to **Maintenance Schedule**. A question about a specific machine goes to **Equipment Registry**. The steps a tech follows on a service go to **Checklists**. The parts a repair consumes go to **Parts & Supplies**. On July 9 all four opened to **Not Found**, so re-verify each page's real KPIs and columns the first time it loads for you.

**Knowledge check [READ-ONLY].** Two questions. (1) A site manager wants the list of preventive services due this month across the network; which of the four pages in this lesson would hold it? (Answer: **Maintenance Schedule**.) (2) You open **Equipment Registry** to look up an air dryer and the page shows "HTTP Error 404. The requested resource is not found." What is the correct move? (Answer: treat it as a not-yet-loadable page in this corpus, do not invent its contents, and re-verify once it renders; the entry is real in the sidebar, but its page did not load on July 9.)

## Expected results

You can reach all four maintenance pages from the **Operations → MAINTENANCE** sidebar in one click each and say what each one is for: **Maintenance Schedule** for planned recurring work, **Equipment Registry** for the assets those jobs run on, **Checklists** for the standard inspection steps, and **Parts & Supplies** for the maintenance stock a job consumes. You also know the honest state of the corpus: on July 9 all four opened to **Not Found**, so their KPIs, columns, and rows are parked rather than documented, and you re-verify them once the pages render. Opening any of these entries changes nothing.

## Notes and troubleshooting (observed behavior only)

- On July 9 each of the four pages (`maint-schedule.html`, `maint-equipment.html`, `maint-checklist.html`, `maint-parts.html`) returned **Not Found** with the body "HTTP Error 404. The requested resource is not found.", confirmed in both the page digest and the screenshot. The sidebar entries for all four are real and were observed on the sibling **Issues** page; it is the pages behind them that did not load. This matches the existing pattern in PARKED-ITEMS.md #2, where advertised pages return a 404 in the demo tenant.
- What did load is the sibling **Issues** page (WC-08-01), and it sets the shape the four pages will most likely follow when they render: a four-tile KPI band, insight cards, then a list card with **+ New**, **Export**, **Filters ▾**, and a **Search** box, over columns such as **LOCATION**, **TITLE**, **STATUS**, **PRIORITY**, and **DATE**. Use that as an expectation, not a claim: the KPIs and columns of the four pages in this lesson were not observed and are not stated here.
- Because nothing rendered on the four pages, there is nothing on them to click, export, or change, so there is no tenant-safety exposure in this lesson. When the pages do load, the usual rules apply: **Export** stays untouched, and **+ New** forms are opened only to read the layout, then left with **Cancel**.
- Orientation cross-reference: the plan notes that **Issue Status Types** (the statuses you see on the **Issues** list) are configured under **Settings → Operations**, covered in Lesson 12.7. That is a settings page, not one of the four in this lesson.
- Re-verification is required. The moment any of these four pages loads for you, walk its KPI band and columns, update this guide from what you see, and clear the parked item.

## Related lessons

WC-08-01 Maintenance Issues · WC-08-03 Incident Reports · WC-08-04 Appointment Scheduling · WC-04-02 Inventory (Chemicals & Supplies) · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**
