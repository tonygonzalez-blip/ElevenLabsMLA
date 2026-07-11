# WC-13-02 · Audit trio: Audit Log, User Activity, and Change History (Reports & Audit)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

When a client asks "who did this?", the answer lives in one of three pages inside **IT & Support → AUDIT**. This lesson walks all three so you know which one to open before you start digging. **Audit Log** is the running record of every event, including the IP address it came from. **User Activity** is the sign-in picture: who is logging in, how often, and how many attempts failed. **Change History** is the field-level trail, showing the old value and the new value for a specific edit. By the end you can read the Audit Log dashboard, find a **Deleted** event and the record it touched, and know exactly which of the three pages answers a "who changed X?" ticket.

## Audience and prerequisites

Internal Micrologic technicians in Tech Support and Onboarding who field "who touched this?" and login questions. You should be signed in and comfortable moving around the left rail (WC-01-01). This is a read-only tour. You open pages and read them; you do not create, export, or edit anything.

Capture note for this build: only **Audit Log** was captured cleanly in the July 9 corpus. The **User Activity** and **Change History** pages returned HTTP 404 on their direct URLs and are reachable only by clicking through from the AUDIT sidebar in the running app. Their on-page numbers and rows are marked `TBD — parked` below and their structure is attributed to the learning plan. See the parked item at the end.

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
9. Back in the **AUDIT** group, click **User Activity**. **Expected:** the **User Activity** page opens from the sidebar link. `TBD — parked` The page opened only through this in-app link during authoring; its direct URL (audit-users.html) returned HTTP 404 in the July 9 corpus, so the on-page layout below is documented from the learning plan and re-verification is parked.
10. Read what **User Activity** tracks. Plan-documented (source: learning plan Module 13 preview + DISCREPANCIES.md #18; not re-verified against a live capture): KPI tiles **Active Users**, **Logins Today**, **Avg Session**, and **Failed Logins**. `TBD — parked` the live tile values are not observable in this build. **Failed Logins** is the one you reach for on a locked-out-user ticket.
11. Read the **User Activity** columns. Plan-documented (same source; not re-verified live): **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS**. `TBD — parked` the live rows are not observable in this build. This page answers "is this person actually signing in, and as what role?"
12. Back in the **AUDIT** group, click **Change History**. **Expected:** the **Change History** page opens from the sidebar link. `TBD — parked` as with User Activity, the direct URL (audit-changes.html) returned HTTP 404 in the July 9 corpus and the page opened only through the in-app link; the layout below is plan-documented and re-verification is parked.
13. Read what **Change History** tracks. Plan-documented (source: learning plan Module 13 preview + DISCREPANCIES.md #18; not re-verified live): KPI tiles **Changes Today**, **This Week**, and a split of configuration changes versus data changes. `TBD — parked` the live tile values are not observable in this build.
14. Read the **Change History** columns. Plan-documented (same source; not re-verified live): **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE**. `TBD — parked` the live rows are not observable in this build. Unlike the Audit Log, this page names the exact **FIELD** that changed and shows both its **OLD VALUE** and **NEW VALUE** side by side.
15. Read a price-change example. The learning plan's illustration is a **Monthly Price** field moving from **$29.99** to **$34.99**, captured as one row with the old value on one side and the new value on the other. `TBD — parked` the live Change History row is not observable in this build; use this example to picture the shape of the answer, then read the real **OLD VALUE / NEW VALUE** pair off the page when you walk it in-app.
16. Recap the trio. **Expected:** three pages, three questions. **Audit Log** tells you *what happened* and from which **IP ADDRESS**. **User Activity** tells you *who is signing in* and how many attempts failed. **Change History** tells you *who changed which field* and what the value was before and after. Pick the page by the question on the ticket.

## Expected results

You can open **IT & Support → AUDIT** and reach all three audit pages. On the **Audit Log** you can read the KPI band (**842 Events Today**, **5,240 This Week**, **18 Unique Users**, **3 Critical Events**), the **Action Types** split (Updated, Created, Login / Logout, Deleted), and the **Audit Log List** columns including **IP ADDRESS**, and you can point to a **Deleted** row and name the record it touched. You know that **User Activity** carries **Failed Logins** for locked-out-user tickets and **Change History** carries **OLD VALUE / NEW VALUE** for "who changed X?" tickets, and you know that both of those pages need an in-app click-through in this build because their direct URLs 404.

## Notes and troubleshooting (observed behavior only)

- The Audit Log is a read page for support. **Export** and **+ New Record** appear on the **Audit Log List**, but neither belongs in a "who did this?" lookup, and **Export** is a restricted action on the shared tenant. Leave both alone.
- The Audit Log's **3 Critical Events** tile and the **Event Severity** panel's **3% CRITICAL** are the same fact shown two ways: a count and a share. Read them together.
- A **Deleted** event names the record in the **RECORD** column (for example **Payment #TKT-10880**) and the source in **IP ADDRESS**. That pairing, who plus what plus where-from, is what makes the Audit Log the first stop for a missing-record ticket.
- Legacy WashAssist had a separate audit page per domain (Refund, Time Clock, Location, Tickets, Customers). WashCentral consolidates all of them into these three pages (per DISCREPANCIES.md #18). If a client asks for the old "Refund Audit" or "Time Clock Audit" screen, point them here.
- Capture gap in this build: **User Activity** (audit-users.html) and **Change History** (audit-changes.html) return HTTP 404 on their direct URLs in the July 9 corpus and were reachable only through the AUDIT sidebar links. Their KPI values and table rows read `TBD — parked` until a live in-app walk captures them. Their structure above is attributed to the learning plan and DISCREPANCIES.md #18, not observed.
- The idle **Still there?** session prompt can appear on any of these pages if the screen sits untouched; dismissing it is out of scope here (see WC-01-03 / session behavior). During recording, dismiss it off-camera with **Stay Logged In** and re-roll the segment.

## Knowledge check

Three tickets land in the queue. (1) A payment record vanished and the manager wants to know who removed it and from what machine. (2) A member says their monthly price jumped and wants to know who changed it and what it was before. (3) A cashier is locked out and you need to see how many failed sign-ins they had this month. Which of the three AUDIT pages answers each, and which single column or tile on that page gives you the answer?

## Related lessons

WC-13-01 Reports hub + Report Viewer · WC-PB-01 PB-1 Login failures (uses **User Activity**) · WC-PB-11 PB-11 "Who changed this?" (uses **Change History** + **Audit Log**).

**Verified against demo.washcentral.com on July 9, 2026.**
