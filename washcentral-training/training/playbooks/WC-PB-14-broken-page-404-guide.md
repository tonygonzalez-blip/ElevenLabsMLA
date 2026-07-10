# WC-PB-14 · Broken page / 404 inside the platform (Troubleshooting playbook)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

A site or a coworker reports that "a page is broken." Three different problems all look like that at first glance, and each one has a different fix. This playbook teaches you to tell them apart before you touch a ticket: a hard **404** where the address serves nothing, a dead **#** stub where a menu item was never wired to a page, and a **Couldn't load records (Failed to fetch)** panel where the page loaded fine but its data call did not. By the end you can name which of the three you are looking at, capture the right evidence, and escalate with facts instead of a guess. Nothing here changes a record.

## Audience and prerequisites

Internal Micrologic Tech Support. You should be signed in and comfortable reaching modules from the left rail (WC-01-01) and using **Search ⌘K** and the location scope (WC-01-02). This is a read-and-classify playbook. You reproduce a symptom, read the address bar and the on-screen message, decide which failure class it is, and open an escalation ticket. You do not submit, export, or edit anything on the shared demo tenant.

## Navigation path

The playbook visits four surfaces, then escalates from a fifth. Reproduction lives at **Settings → LogicPOS** (the Settings hub), **IT & Support → System Alerts**, **CRM → Fundraiser**, and **Settings → Hardware → Terminals**. Escalation returns to **IT & Support → Support Tickets**.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. When a surface 404s or fails to load, read exactly what is on screen; do not stage or fake the missing content. No create, submit, or export control is clicked.

1. Reproduce the report yourself, then read two things: the address in the browser's URL bar and the message on the page. **Expected:** you are looking at the exact page the caller saw, at the exact address. Three failures all read as "broken" from a distance, and the URL plus the on-screen text is what separates them. This playbook walks one clean example of each.

2. Look at the first class: a hard **404** from the web server. The **Settings** hub advertises **LogicPOS** links (`logicpos/sales.html`, `logicpos/login.html`, `logicpos/dashboard.html`). **Expected:** these are the platform's known hard-404 example. When last confirmed on July 8, 2026, all three returned the IIS page "404 – File or directory not found". They were not re-crawled in the July 9 sweep, so treat their status today as **TBD — parked (PARKED-ITEMS.md #2)** and re-check on your own tenant. A hard 404 means the web server has no file at that address: the WashCentral header and sidebar are gone, replaced by the server's own error page.

3. Look at a second face of the same class, this one inside the app. Open **IT & Support → System Alerts**. **Expected:** in the July 9 capture, **System Alerts** returned a **Not Found** page reading "HTTP Error 404. The requested resource is not found." — even though **System Alerts** is still listed in the **IT & Support** sidebar. A listed feature can still 404. Do not tell a client the feature "doesn't exist"; a 404 on a real menu item usually means the page is release-gated or mid-deploy, not deleted. Where the working System Alerts content would be: **TBD — parked (reported as new; same pattern as PARKED-ITEMS.md #2)**.

4. Now the second class: a dead **#** stub. Open **CRM** and find **Fundraiser** in the sidebar. **Expected:** **Fundraiser** appears in the **CRM** sidebar, but its link target is "#" (a stub), so clicking it does nothing: the address gets a trailing "#" and the page you are on never changes. This is not a 404 and not your connection. The menu item exists, but no page has been wired behind it yet. It is tracked as **PARKED-ITEMS.md #3** (see also DISCREPANCIES.md #5).

5. Now the third class, the one most often mistaken for a broken page: a data-fetch error. Open **Settings → Hardware → Terminals** as a live example. **Expected:** the **Terminals** page itself loads (breadcrumb, the **Total Terminals** KPI, the **+ New Record** button, and the column headers all render), but where the rows should be it reads "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." Do not click **+ New Record**.

6. Read what still rendered on that Terminals page and draw the line. **Expected:** the header, the sidebar, the KPI band, and the column headers are all present. Only the row data is missing. That is the signature of a data-fetch error, not a broken page: the page shell came down fine, and a single background data call failed. It is usually transient. Refresh the page or check the connection first; the same banner appeared on roughly sixty pages in the July 9 sweep, which points to a service-wide hiccup that day rather than one broken screen.

7. Put the three side by side and pick one. **Expected:** the whole page is replaced by a 404 or "Not Found" error and the URL is the one you requested, so it is a hard **404** (class one). A menu click does nothing and the URL just gains a "#", so it is a dead **#** stub (class two). The page frame loads but a panel says "Couldn't load records (Failed to fetch)", so it is a data-fetch error (class three). One read of the screen plus the URL decides it.

8. Capture the evidence you will need, whichever class it is. **Expected:** you have the exact URL, a screenshot of the message, the module you were in, the link source (where you clicked to get there), and what you expected to load. For a 404, add whether it is a known parked item (LogicPOS is #2). For a "#" stub, note that the target is a stub (Fundraiser is #3). For a Failed-to-fetch banner, note whether it clears on refresh and how many pages show it.

9. Escalate cleanly. **Expected:** open **IT & Support → Support Tickets** and, on a real issue on your tenant, use **+ New Record** to raise a ticket carrying the URL, the screenshot, the module, the link source, and the expected target, plus which of the three classes it is. The list carries **Ticket #**, **Subject**, **Location**, **Priority**, **Status**, **Assigned To**, and **Created**; the **Support Queue** view offers the same escalation through **Create ticket** and sorts by **Ticket**, **Category**, **Location**, **Owner**, **Age**, and **Priority**. A transient Failed-to-fetch that clears on refresh needs no ticket; a persistent or platform-wide one is a service issue, not a broken page. Migration-related switches go to Jira, not here. Do not submit a ticket, and do not use **Export**, on the shared demo.

10. Recap the classification you just ran. **Expected:** read the URL and the message, then sort into one of three: a hard 404 (no file served, escalate as a broken-page or deploy issue), a "#" stub (menu item with no page, log it as release-gated, never as "gone"), or a Failed-to-fetch data error (page loaded, data call failed, retry first and escalate only if it persists). The ticket carries the URL, a screenshot, the module, the link source, and the expected target.

## Expected results

From a "this page is broken" report you can reproduce it, read the URL and the on-screen message, and place it in one of three classes: a hard **404** (the **LogicPOS** links, and the July 9 **System Alerts** page), a dead **#** stub (**Fundraiser** in **CRM**), or a **Couldn't load records (Failed to fetch)** data error (seen widely across the July 9 sweep, for example on **Terminals**). You escalate through **IT & Support → Support Tickets** with the URL, a screenshot, the module, the link source, and the expected target, and you never tell a client that a 404'd feature simply "does not exist." Where a page was parked or did not load, this playbook says so rather than inventing its contents.

## Notes and troubleshooting (observed behavior only)

- A hard **404** and a **Not Found** page are the same class from the technician's seat: the page you asked for is not being served. The **LogicPOS** links throw the web server's own "404 – File or directory not found" (last confirmed July 8; parked #2), while **System Alerts** returned an in-app "HTTP Error 404. The requested resource is not found." on July 9. Both mean the resource is missing right now, and both may come back after a deploy.
- An automated crawl and the on-screen message can disagree. The July 9 sweep's 404 flag came back clear for every crawled page (zero hard 404s by that check), yet **System Alerts** rendered a "HTTP Error 404" body. Read the page yourself and read the URL; do not trust a single automated signal to tell you whether a page is really broken.
- The **#** stub is the easiest class to misread. **Fundraiser** looks like a normal sidebar entry, so a click that "does nothing" gets blamed on a slow network. Check the URL: a stub click only adds a trailing "#" and leaves the current page in place. That is a missing page, not a connection problem.
- The **Couldn't load records (Failed to fetch). Check your connection to the AI agent service.** banner is a data-state, not a broken page. The page shell, KPIs, and column headers render; only the rows fail. It appeared on roughly sixty pages in the July 9 sweep, so a site-wide instance is a service issue to raise once, not sixty separate broken-page tickets.
- LogicPOS was not re-crawled in the July 9 corpus, so its current 404 status is parked (last verified July 8). Confirm it live on your tenant before you quote its behavior to a client.
- Nothing in this playbook changes a record. The create and export controls in the path (**+ New Record**, **Create ticket**, **Export**) are left alone.

## Knowledge check

The learning plan gives PB-14 no formal knowledge check, so use this read-only self-check:

1. A page shows a full-screen "HTTP Error 404. The requested resource is not found." and the sidebar is gone. Which class is it, and what is the one thing you must not tell the client?
2. A user clicks **Fundraiser** and "nothing happens." What do you check in the URL bar to prove it is a stub and not a slow load?
3. A list page shows its header, KPIs, and column titles but reads "Couldn't load records (Failed to fetch)" where the rows belong. Is this a broken page? What do you try before opening a ticket?
4. What five facts go into a broken-page escalation ticket?

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-PB-03 POS down / terminal offline · WC-PB-13 Integration down (Zoho/SSO/accounting) · WC-12-05 Hardware & UI/Display.

**Verified against demo.washcentral.com on July 9, 2026.**
