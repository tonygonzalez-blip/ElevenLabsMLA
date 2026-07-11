# WC-13-02 · Audit trio: Audit Log, User Activity, and Change History (Reports & Audit)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

When a client asks "who did this?", the answer lives in one of three pages inside **IT & Support → AUDIT**. This lesson walks all three so you know which one to open before you start digging. **Audit Log** is the running record of every event, including the IP address it came from. **User Activity** is the sign-in picture: who is logging in, how often, and how many attempts failed. **Change History** is the field-level trail, showing the old value and the new value for a specific edit. By the end you can read the Audit Log dashboard, find a **Deleted** event and the record it touched, and know exactly which of the three pages answers a "who changed X?" ticket.

## Audience and prerequisites

Internal Micrologic technicians in Tech Support and Onboarding who field "who touched this?" and login questions. You should be signed in and comfortable moving around the left rail (WC-01-01). This is a read-only tour. You open pages and read them; you do not create, export, or edit anything.

Capture note for this build: the July 11 credentialed pass captured **User Activity** and **Change History** live through the AUDIT sidebar, so the parked markers from July 9 are cleared and every number and row below is observed. One navigation caution stands: both pages returned HTTP 404 on their direct URLs (audit-users.html, audit-changes.html) in the July 9 sweep, so reach them by clicking their sidebar links, not by typing an address.

## Navigation path

The three audit pages live in the **IT & Support** module. Open **IT & Support** from the global rail; the sidebar shows a **SUPPORT** group at the top and an **AUDIT** group beneath it. The **AUDIT** group holds **Audit Log**, **User Activity**, and **Change History**. Written as a path: `IT & Support → AUDIT → Audit Log` (with **User Activity** and **Change History** as its two siblings).

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. The same step numbers run through the shot list and the narration.

1. From the global rail, open **IT & Support** and look at the sidebar. **Expected:** the sidebar shows a **SUPPORT** group (**ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**) and, below it, an **AUDIT** group listing **Audit Log**, **User Activity**, and **Change History**. These three are the whole audit surface.
2. Click **Audit Log**. **Expected:** the **Audit Log** page opens with the breadcrumb **Audit › Audit Log** and a four-tile KPI band across the top.
3. Read the KPI band. **Expected:** **842 Events Today**, **5,240 This Week**, **18 Unique Users**, and **3 Critical Events**. These four numbers are the fast health read: today's volume, the weekly trend, how many distinct people acted, and how many of those events were flagged critical.
4. Look at the **Event Volume** panel on the upper left. **Expected:** the subtitle reads **Last 12 months**, the total is **62,880** with a **↑ +14.7%** trend, and the axis runs from **Jan** to **Dec**. This is the long view: whether logged activity is climbing or flat over the year.
5. Read the **Action Types** panel (subtitle **By event category**). **Expected:** **Updated 45%**, **Created 30%**, **Login / Logout 18%**, **Deleted 7%**. Most audit traffic is edits and new records; deletions are the small slice you usually care about most on a ticket.
6. Read the **Event Severity** panel (subtitle **System health overview**). **Expected:** **91% NORMAL**, **6% WARNING**, **3% CRITICAL**. The critical share here lines up with the **3 Critical Events** tile at the top.
7. Drop to the **Audit Log List** and read the column headers. **Expected:** **DATE/TIME · USER · ACTION · MODULE · RECORD · LOCATION · IP ADDRESS**. The list shows **4 records**, with a **Search audit log…** box, a **Filters ▾** control, a **Search** button, and **Export** and **+ New Record** buttons. `[READ-ONLY]` Do not click **Export** or **+ New Record**; both are out of scope for a support read and **Export** is a restricted action on this tenant.
8. Find the **Deleted** action row. **Expected:** **2025-06-01 10:18 · J. Martinez · Deleted · Transactions · Payment #TKT-10880 · MLAS · 192.168.1.12**. Read it left to right: one row tells you who deleted what, which module it was in, which location, and the IP it came from. That is the whole point of the Audit Log. When a payment or record goes missing, this is the first page you open.
9. Back in the **AUDIT** group, click **User Activity**. **Expected:** the **User Activity** page opens from the sidebar link with the breadcrumb **Audit › User Activity**. (Observed live July 11, 2026; reach it through the sidebar — the direct URL 404'd on July 9.)
10. Read the **User Activity** KPI band. **Expected:** **14 Active Users**, **28 Logins Today**, **42 min Avg Session**, and **3 Failed Logins**. **Failed Logins** is the one you reach for on a locked-out-user ticket. One caution: it is a page-level count for the tenant, not a per-user column, so it tells you failures are happening, not who owns them. Below the band, the **Login Activity** panel (subtitle **Last 12 months**) shows **4,840** with a **↑ +6.4%** trend, **Users by Role** splits active sessions **Cashier 43% · Site Manager 29% · Technician 21% · Administrator 7%**, and **Account Status** reads **78% ACTIVE · 15% IDLE · 7% INACTIVE**.
11. Read the **User Activity** columns. **Expected:** **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS** — the set the plan promised, now confirmed on screen. The **User Activity List** shows **4 records**; the first row reads **Miguel Gonzalez · Administrator · 2025-06-01 09:55 · 18 · MLAS · Active**, and the **Kevin Davis** row shows **Inactive** in **STATUS**. This page answers "is this person actually signing in, and as what role?"
12. Back in the **AUDIT** group, click **Change History**. **Expected:** the **Change History** page opens from the sidebar link with the breadcrumb **Audit › Change History**. (Observed live July 11, 2026; same sidebar-only caution as User Activity.)
13. Read the **Change History** KPI band. **Expected:** **84 Changes Today**, **420 This Week**, **12 Config Changes**, and **408 Data Changes** — the config-versus-data split the plan described, with live values. The **Change Volume** panel (subtitle **Last 12 months**) shows **5,040** with **↑ +8.2%**, **By Module** splits changes **CRM 42% · Employees 28% · Settings 18% · Transactions 12%**, and **Change Types** reads **74% DATA · 19% CONFIG · 7% DELETE**.
14. Read the **Change History** columns. **Expected:** **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE**, confirmed live; the **Change History List** shows **3 records**. Unlike the Audit Log, this page names the exact **FIELD** that changed and shows both its **OLD VALUE** and **NEW VALUE** side by side.
15. Read the price-change row. **Expected:** the top row reads **2025-06-01 10:44 · M. Gonzalez · Settings · Monthly Price · $29.99 · $34.99** — the same example the learning plan used, now observed as a live row. The other two rows show the same shape on different modules: a **Customer Status** flip (**Active → At Risk**) in **CRM** and a **Pay Rate** change (**$15.00 → $16.50**) in **Employees**.
16. Recap the trio. **Expected:** three pages, three questions. **Audit Log** tells you *what happened* and from which **IP ADDRESS**. **User Activity** tells you *who is signing in* and how many attempts failed. **Change History** tells you *who changed which field* and what the value was before and after. Pick the page by the question on the ticket.

## Expected results

You can open **IT & Support → AUDIT** and reach all three audit pages. On the **Audit Log** you can read the KPI band (**842 Events Today**, **5,240 This Week**, **18 Unique Users**, **3 Critical Events**), the **Action Types** split (Updated, Created, Login / Logout, Deleted), and the **Audit Log List** columns including **IP ADDRESS**, and you can point to a **Deleted** row and name the record it touched. You can read **User Activity**'s KPI band (**14 Active Users · 28 Logins Today · 42 min Avg Session · 3 Failed Logins**) and its per-user columns, and **Change History**'s band (**84 · 420 · 12 · 408**) and its **FIELD / OLD VALUE / NEW VALUE** rows, including the live **Monthly Price $29.99 → $34.99** example. You also know that both of those pages need an in-app click-through in this build because their direct URLs 404'd on July 9.

## Notes and troubleshooting (observed behavior only)

- The Audit Log is a read page for support. **Export** and **+ New Record** appear on the **Audit Log List**, but neither belongs in a "who did this?" lookup, and **Export** is a restricted action on the shared tenant. Leave both alone.
- The Audit Log's **3 Critical Events** tile and the **Event Severity** panel's **3% CRITICAL** are the same fact shown two ways: a count and a share. Read them together.
- A **Deleted** event names the record in the **RECORD** column (for example **Payment #TKT-10880**) and the source in **IP ADDRESS**. That pairing, who plus what plus where-from, is what makes the Audit Log the first stop for a missing-record ticket.
- Legacy WashAssist had a separate audit page per domain (Refund, Time Clock, Location, Tickets, Customers). WashCentral consolidates all of them into these three pages (per DISCREPANCIES.md #18). If a client asks for the old "Refund Audit" or "Time Clock Audit" screen, point them here.
- Navigation caution: **User Activity** (audit-users.html) and **Change History** (audit-changes.html) returned HTTP 404 on their direct URLs in the July 9 sweep. The July 11 credentialed pass reached both through the AUDIT sidebar links and captured them in full (`verification/2026-07-11/digests/audit-users-inapp.json`, `audit-changes-inapp.json`), which cleared the July 9 parked markers. Reach both pages by sidebar click, never by typed URL.
- The column sets DISCREPANCIES.md #18 attributed to these pages held up on screen with one exception: **User Activity** has no per-user failed-login column. **Failed Logins** exists only as a page-level KPI tile (**3** on July 11). The per-user columns are **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS**. Reported as a new discrepancy in the July 11 return.
- The idle **Still there?** session prompt can appear on any of these pages if the screen sits untouched; dismissing it is out of scope here (see WC-01-03 / session behavior). During recording, dismiss it off-camera with **Stay Logged In** and re-roll the segment.

## Knowledge check

Three tickets land in the queue. (1) A payment record vanished and the manager wants to know who removed it and from what machine. (2) A member says their monthly price jumped and wants to know who changed it and what it was before. (3) A cashier is locked out and you need to see whether their account is even active and when they last got in. Which of the three AUDIT pages answers each, and which column or tile on that page gives you the answer? (For (3): **User Activity** — the **STATUS** and **LAST LOGIN** columns for the user, with the page-level **Failed Logins** tile telling you whether failures are piling up tenant-wide.)

## Related lessons

WC-13-01 Reports hub + Report Viewer · WC-PB-01 PB-1 Login failures (uses **User Activity**) · WC-PB-11 PB-11 "Who changed this?" (uses **Change History** + **Audit Log**).

**Verified against demo.washcentral.com on July 11, 2026.**
