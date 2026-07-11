# WC-PB-03 · POS down / terminal offline (Troubleshooting playbook)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

When a site reports "the POS is down" or a terminal is offline, this playbook is the order you check WashCentral: confirm the outage, see who already owns it, and escalate with facts a field tech can act on. You start on the **Command Center**, confirm the flag in **Priority Intelligence**, cross to the **Micrologic NOC** for the live incident, then read **System Alerts**, the **Terminals** list, and the **Tickets** feed for that location. By the end you can tell a hard outage from a quiet lane, and you can hand off a ticket that carries the location, the terminal, the last-ticket time, and the alert IDs.

## Audience and prerequisites

Internal Micrologic Tech Support. You should be signed in and comfortable reaching modules from the left rail (WC-01-01) and using Search and the location scope (WC-01-02). This is a read-and-route playbook: you look across five surfaces and open a ticket. You do not change any record, add a terminal, or submit anything on the shared demo tenant.

## Navigation path

The playbook moves across five screens, each reached from the left rail: **Command Center** (Dashboard) → **ML Command Center** (IT & Support) → **System Alerts** (IT & Support) → **Hardware / Terminals** (Settings → Hardware) → **Tickets** (Sales). Escalation returns to **Support Tickets** under IT & Support.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing here edits a record; the create and export controls in the path are left alone.

1. Open the **Command Center** from the rail. **Expected:** the dashboard loads with the live KPI band (**Revenue Today**, **Active Members**, **Cars Washed**, **Decline Rate**) across the top and, below the map, the **PRIORITY INTELLIGENCE** panel. This is where a network-level problem shows before anyone files a ticket.
2. Read the **PRIORITY INTELLIGENCE** header and its **CRITICAL** group. **Expected:** the panel header reads "11 items · 4 urgent", and the **CRITICAL** group sits at the top with a count of 2. Priority Intelligence ranks what needs attention now, so a POS outage surfaces here first.
3. Read the POS-offline row. **Expected:** the top **CRITICAL** row reads "Henrico W Broad, VA — POS system offline" with the line "Card terminals down at peak window. On-site tech en route; queue forming.", a **Critical** chip, and an **Open →** action. That satisfies check one: the outage is flagged, the site and symptom are named, and someone is already on site.
4. Note the row's **Open →** deep link and glance at **ACTION OWNERSHIP** on the right. Do not follow the link on the shared demo. **Expected:** **Open →** is the row's deep link into the flagged item; its destination is not captured in this corpus, so treat it as **TBD — parked** (reported as new). The **ACTION OWNERSHIP** panel lists the same site under **REGIONAL OPS** with "Due: next 30 min" and an **Urgent** chip, so you can see who owns it before you touch anything.
5. Open **ML Command Center** from **IT & Support**. **Expected:** the **Micrologic NOC** loads ("Micrologic NOC — Enterprise Command Center") with a **2 CRITICAL** banner and three tabs: **Incidents 9**, **Locations 43**, **Customers 8**. The NOC is the cross-customer support view where live incidents are triaged.
6. On the **Incidents** tab, find the POS-offline incident. **Expected:** under the **CRITICAL** group, an incident reads "POS system offline — 0 transactions for 47 min" for **MLAS CORP** (**ENTERPRISE**), tagged **TUNNEL DOWN**, assigned to **Tyler R.**, "47m ago". "0 transactions for N minutes" is the signal that the lane has stopped, not just slowed.
7. Read the incident's tag and assignee. **Expected:** each incident carries a category tag (here **TUNNEL DOWN**; others in the feed include **HARDWARE**, **PAYMENTS**, and **EQUIPMENT**) and an assignee that is either a name or **Unassigned**. When it is **Unassigned**, this feed is where you claim or route it; **Create Ticket** and **View Full Profile →** are the actions on the incident. Read the assignee; do not submit **Create Ticket** on the shared demo.
8. Open **System Alerts** from **IT & Support** — click the sidebar link, never the URL (the direct URL 404'd on the July 9 sweep; the sidebar route renders the page, captured July 11). **Expected (observed July 11, 2026):** the page loads with the breadcrumb **Support › System Alerts**, KPI tiles **3 Active Alerts · 14 Today · 1 Critical · 2 Warnings**, and an **Alert List** with columns **DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**. The **TYPE** column carries the hardware categories you want on a POS ticket — the visible types are **Tunnel**, **POS**, **Chemical**, and **Network** — and the observed POS row reads **2025-06-01 09:48 · POS · Warning · SSNB · Low receipt paper on POS-2 · Active**. Use the **Search system alerts…** box or **Filters ▾** to scope to the location, then read its POS-type rows and their **STATUS** (**Active** vs **Resolved**). Do not click **+ New Record** or **Export**.
9. Open **Hardware / Terminals** from **Settings → Hardware**. **Expected:** the **Terminals** page loads (breadcrumb **Settings›Terminals**) with a **Total Terminals** KPI and a **+ New Record** button. Do not add a record.
10. Read the terminals list. **Expected (observed live July 11, 2026):** the columns are **Terminal**, **Location**, **IP**, **Software Version**, **OS**, and **Last Seen**, the **Total Terminals** KPI reads **1,067**, and the rows are live — the top row reads **Moo124-VQ · 124 - Gahanna Morrison · — · 25.8.2.3 · Windows 10 Enterprise 2016 LTSB · 2026-01-10 22:47**, with rows like **CLE814-KIOSK1 · 814 - Livonia · 10.0.1.100 · 25.8.11.1 · Windows 10 IoT Enterprise LTSC · 2026-01-10 20:44** beneath it. For a "terminal offline" report you confirm the terminal is present for that site and read **Last Seen** for its last check-in. There is no separate active or status column, so **Last Seen** is the freshness signal — and note the **IP** cell can read **—** on a healthy row, so a blank IP alone proves nothing. Use the "Search by terminal or location…" box to find the site; the list paginates (25 per page, 43 pages on July 11).
11. Open **Tickets** under **Sales**. **Expected:** the **Tickets** list loads (breadcrumb **Transactions›Tickets**) with a **Total Tickets** KPI and columns **Location**, **Ticket #**, **Date/Time**, **Total**, **Status**, **Tender Type**, and **Customer**.
12. Filter **Tickets** to the location and read the newest **Date/Time**. **Expected:** the **Filters** control and the **Search** box ("Search by location, ticket #, customer, status…") scope the list to the site. If the most recent ticket is minutes old, the lane is still writing. If nothing has been written for a stretch, that lines up with the NOC's "0 transactions" reading and points to a hard outage. Do not use **Export**.
13. Escalate with the facts. **Expected:** open **IT & Support → Support Tickets** and, on a real outage on your tenant, use **Create ticket** carrying the location code, the terminal ID, the last-ticket timestamp, and any alert IDs. The **Support Queue** lists tickets by **Ticket**, **Category**, **Location**, **Owner**, **Age**, and **Priority** (for example SUP-1042 / LPR / Miami North). Migration-related switches go to Jira, not here. Do not submit a ticket on the shared demo.
14. Recap the order you just ran. **Expected:** Priority Intelligence confirms the flag and its owner, the NOC incident gives you the tag and assignee, System Alerts and the Terminals list give the hardware picture, and the Tickets feed tells you whether the lane is still writing. You escalate with location code, terminal ID, last-ticket time, and alert IDs.

## Expected results

From a "POS down" report you can confirm the outage on the **Command Center** in **Priority Intelligence**, read the live incident and its **TUNNEL DOWN** or **HARDWARE** tag and assignee in the **Micrologic NOC**, check the location's alerts and its **Terminals** entry, and read the **Tickets** feed to see whether transactions are still being written. You leave every record untouched and escalate through **Support Tickets** with the location code, terminal ID, last-ticket timestamp, and alert IDs. **System Alerts** and the **Terminals** rows are observed live as of July 11; the one surface still not captured is the Priority Intelligence **Open →** deep-link destination, which stays parked.

## Notes and troubleshooting (observed behavior only)

- The Command Center POS row and the NOC incident are two different scopes. **Priority Intelligence** reflects your own network (the "Henrico W Broad, VA — POS system offline" row); the **Micrologic NOC** is the cross-customer support view (the **MLAS CORP** incident). Read each on its own surface; one row is not the other.
- The **Open →** deep link on a Priority Intelligence row was not followed in this pass. Its destination is parked, so the playbook navigates to the NOC directly instead.
- **System Alerts** answered a 404 on its direct URL on July 9 but renders in full from the **IT & Support** sidebar link (captured July 11: KPI band, severity panels, and the alert list with **Tunnel / POS / Chemical / Network** types). Reach it by sidebar click; if the sidebar route also fails, that is a WC-PB-14 case. Known page oddity, logged July 11: the list header says **14 records** while the pager reads **1–4 of 4**.
- The **Terminals** list loads live rows in the July 11 re-digest (**Total Terminals 1,067**), clearing the July 9 "Couldn't load records (Failed to fetch)" parked state. **Last Seen** values are real (top row **2026-01-10 22:47**), and a healthy row can carry **—** in **IP**. If the fetch banner appears, reload before reading anything into an empty list.
- The terminals list has no active or status column. **Last Seen** is what you read for the terminal's last check-in.
- Plan step four also asks you to match the terminal ID against a ticket View's cashier or greeter terminal field. That single-ticket View is not in this corpus; the **Ticket Details** line-item list exposes a **Cashier** column only, so the terminal cross-reference is parked.
- Nothing in this playbook changes a record. The create and export controls in the path (**+ New Record**, **Create Ticket** / **Create ticket**, **Export**) are left alone.

## Knowledge check

The learning plan gives PB-3 no formal knowledge check, so use this read-only self-check:

1. A site says "the card readers are dead." Which Command Center panel confirms it is already flagged, and which panel there tells you who owns it?
2. On a NOC incident, which two fields tell you what broke and whether anyone has it?
3. The Terminals list has no status column. Which column tells you when a terminal last checked in?
4. What four facts go into the escalation ticket?

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-10-04 System Alerts · WC-PB-02 Surprise logouts / frozen session · WC-PB-04 Payment declines / auto-recharge failures.

**Verified against demo.washcentral.com on July 11, 2026.**
