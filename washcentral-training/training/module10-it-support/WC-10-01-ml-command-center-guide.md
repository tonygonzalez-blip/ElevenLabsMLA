# WC-10-01 · ML Command Center — Micrologic NOC (IT & Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The ML Command Center is Micrologic's cross-customer support cockpit. It is the one board where the NOC watches every customer tenant at once, so a tech-support or customer-success rep can see which accounts are in trouble before a customer calls. This is not the same screen as a tenant's own Command Center. That board covers a single wash operator's network; this one sits above all of them. By the end of this lesson you can read the header status, use the scope filters and the preset **VIEWS:** to focus the board, read the KPI band, the **NETWORK COVERAGE** map, and the incident feed, and you know that everything here is view-only. You watch from this screen and you act from other screens.

## Audience and prerequisites

Internal Micrologic technicians in Tech Support and Customer Success who cover more than one customer. You should be signed in and comfortable with the global header and the location scope selector from WC-01-02, because the scope filters here work the same way: they change what you see and nothing else. No prior NOC experience is assumed. The idle **Still there?** timeout prompt is not part of this lesson; see WC-01-03.

## Navigation path

`IT & Support → ML Command Center` (`ml-command-center.html`). In the left sidebar's **SUPPORT** group, **ML Command Center** is the first entry, above **Site Detail (Demo)** and **Support Tickets**; clicking it opens this board. The NOC runs full width with its own header: the standard sidebar collapses to the icon rail, the top-left reads **Micrologic NOC** with the subtitle **CUSTOMER SUCCESS & TECH SUPPORT OPERATIONS**, and everything in this lesson lives on that single page.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. In the left sidebar's **SUPPORT** group, click **ML Command Center**. **Expected:** the board loads with the header **Micrologic NOC** and the subtitle **CUSTOMER SUCCESS & TECH SUPPORT OPERATIONS** at top-left. This is the cross-customer view: one screen for every customer tenant Micrologic supports, which is what sets it apart from a single tenant's own Command Center.
2. Read the live-status cluster in the header. **Expected:** a red **2 CRITICAL** pill sits beside the title; on the right you see a green **LIVE** badge, **Updated just now**, a refresh control, and the **MG** account avatar. A header search box carries the placeholder "Search customers, locations, or incidents…", scoped to this board. The **LIVE** badge and **Updated just now** tell you the numbers refresh on their own, and the **2 CRITICAL** pill is the count of customers currently in a critical state (a live value).
3. Look at the scope filters below the header: **All Customers**, **Enterprise**, and **General**. **Expected:** **All Customers** is selected by default, so the board reflects every account. **Enterprise** and **General** are the two customer tiers. These are view filters, the same idea as the location scope in WC-01-02: they change which accounts the board reflects, and nothing else.
4. Click **Enterprise** to focus the board on that tier, then click **All Customers** to return. **Expected:** with **Enterprise** selected, the KPI band, the map, and the incident feed all narrow to Enterprise accounts; clicking **All Customers** puts every account back. No data changes and the switch is fully reversible.
5. Read the status chips beside the filters: **Critical 2**, **Warning 3**, and **Healthy 3**. **Expected:** these summarize how many customers sit in each health band right now. They are a fast read of the room before you open any single account. The counts are live.
6. Find the **VIEWS:** label and its three presets: **All Accounts**, **Enterprise Critical**, and **Needs Attention**. Click **Needs Attention**, then click **All Accounts** to return. **Expected:** **All Accounts** is the default. **Enterprise Critical** and **Needs Attention** are saved filters that pull the board down to the accounts worth looking at first. Like the scope filters, they reshape the view only.
7. Move to the KPI band across the top. **Expected:** five cards read left to right: **CUSTOMERS**, **CRITICAL**, **WARNING**, **HEALTHY**, and **AVG SLA**. The first four count customers by health band; the fifth is a service-level figure for the whole board. To the far right of this row a summary reads **8 customers · 43 locations**.
8. Read the small split under each of the first four cards. **Expected:** each shows an Enterprise-versus-General breakdown, written as **3E · 5G** under **CUSTOMERS**, **2E · 0G** under **CRITICAL**, **1E · 2G** under **WARNING**, and **0E · 3G** under **HEALTHY**. "E" is Enterprise and "G" is General, so a card tells you both the total and where the pressure sits by tier.
9. Read the **AVG SLA** card. **Expected:** it shows **97.1%** with **↓ 0.3% vs yesterday** underneath. That is the board's average service-level attainment and its day-over-day drift. A downward arrow is your cue to check what slipped. The value is live.
10. Drop to the **NETWORK COVERAGE** panel. **Expected:** the panel header reads **NETWORK COVERAGE** with **8 customers · 43 locations across 13 states**, a legend of **Healthy**, **Warning**, and **Critical**, and the map prompt **OVERVIEW — CLICK A STATE OR CLUSTER TO ZOOM IN**. The map plots every supported site, colored by health.
11. Look at the map controls and the cluster bubbles. **Expected:** zoom controls **+**, **−**, and **⤢** sit at the corner of the map; numbered bubbles group nearby sites, each colored by its worst-case health. Clicking a state or a cluster zooms in, which is how you go from the whole country to one region without leaving the board.
12. Move to the feed on the right and read its three tabs: **Incidents 9**, **Locations 43**, and **Customers 8**. **Expected:** **Incidents** is the default and lists open issues; **Locations** and **Customers** re-sort the same picture by site and by account. The badge on each tab is a live count.
13. Inside the **Incidents** tab, read the severity groups. **Expected:** the feed is banded into **CRITICAL**, **WARNING**, and **INFO / MONITORING**, each with its own count. These count incidents, while the KPI band and the status chips count customers, so the two sets of numbers answer different questions and will not always match.
14. Read the anatomy of one incident row. **Expected:** each row carries the customer name, a tier chip (**ENTERPRISE** or **GENERAL**), the incident title (for example **POS system offline — 0 transactions for 47 min**), a category tag (**TUNNEL DOWN**, **HARDWARE**, **PAYMENTS**, **EQUIPMENT**, **PERFORMANCE**, **SOFTWARE**, **MAINTENANCE**, or **BILLING**), an owner or status chip (a name such as **Tyler R.**, or **Unassigned**, or a state such as **Scheduled** or **In Progress**), and the age of the incident such as **47m ago**. Read the row. Do not claim or assign anything here.
15. Step back and take in the whole board. **Expected:** the ML Command Center is the cross-customer cockpit. The scope filters and the **VIEWS:** presets focus it, the KPI band and the **NETWORK COVERAGE** map give you the shape of the network at a glance, and the incident feed lists what is broken and who owns it. Everything here is read-only. You spot the problem on this screen, then you open the customer, the ticket, or the alert somewhere else to work it.

**Exercise 10.1a [READ-ONLY].** Switch **VIEWS:** from **All Accounts** to **Needs Attention**. Read the incident feed and find the oldest **Unassigned** incident. Say out loud which customer it belongs to, which tier it is, and where you would go to work it. You only read and point here; you do not assign, claim, or raise a ticket from this board.

## Expected results

From the ML Command Center you can read Micrologic's whole support picture on one screen: which customers are critical, how the network maps out, and every open incident with its owner. You can narrow the board by tier with **All Customers**, **Enterprise**, and **General**, or jump to a saved **VIEWS:** preset, and put it back with one click. Nothing you do here edits a record. The board is where you notice the problem; the work happens on the customer, ticket, or alert screens.

## Notes and troubleshooting (observed behavior only)

- The scope filters (**All Customers** / **Enterprise** / **General**) and the **VIEWS:** presets are view-only, the same as the location scope in WC-01-02. Selecting one reshapes what the board reflects and reverses in a single click. No record is edited.
- The KPI band and the status chips count customers by health band; the incident feed counts incidents. The two sets of numbers answer different questions, so a customer-level count and an incident-level count will not always line up.
- The board is live: the **LIVE** badge and **Updated just now** mean the numbers refresh on their own. The specific values in this guide (customer counts, **97.1%** AVG SLA, incident ages) are a July 9 snapshot and will differ when you record.
- The page also exposes a **View Full Profile →** link and a **Create Ticket** button tied to a selected customer or incident. The detail panel that surfaces them was not captured in the July 9 corpus, so its exact layout is TBD — parked (new parked item; see the package's structured notes). Do not open it while recording this lesson: selecting an incident risks an assign or claim surface, which is out of scope here.
- On this page the standard text sidebar collapses to the icon rail, with the support (headset) icon highlighted. The **SUPPORT** sidebar group that names **ML Command Center** is visible from the other IT & Support pages (documented in WC-10-02).
- If the idle **Still there?** prompt appears during a take, dismiss it off camera and re-roll the segment. Session-timeout behavior is out of scope here; see WC-01-03.

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · WC-01-06 Command Center deep dive (a tenant's own board) · WC-10-02 Support Tickets · WC-10-04 System Alerts · WC-PB-03 POS down / terminal offline.

**Verified against demo.washcentral.com on July 9, 2026.**
