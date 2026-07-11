# WC-09-01 · Portal pages (Digital)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson walks the **CUSTOMER PORTAL** group inside the **Digital** module: the pages that back the customer-facing portal your washes' members log in to. You will learn where the group lives, read **Portal Members** end to end (its KPIs, its three health cards, and its member roster columns), and locate the four service entries that sit beside it: **Booking Page (Customer)**, **Portal Messages**, **Portal Billing**, and **Portal Notifications**. This is a menu-level tour. You open pages and read them; you never send a message or a notification, and you never edit a member.

One thing to set expectations early: on the July 9 verification pass, only **Portal Members** resolved to a live page. The other four entries in the group returned an HTTP 404, so their on-page contents are parked, not guessed. You will still learn what each entry is and where it lives.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and comfortable with the global header (WC-01-01) and with WashCentral's list layout, KPIs, and filters (WC-01-04). No portal-admin experience is assumed. Session-timeout behavior (the "Still there?" prompt) is out of scope here; see WC-01-03.

## Navigation path

`Digital → CUSTOMER PORTAL → Portal Members` for the one list this lesson reads in full. Open the **Digital** module on the left rail; the sidebar then shows two groups, **CUSTOMER PORTAL** on top and **MOBILE** below it. The five entries this lesson covers all sit in **CUSTOMER PORTAL**: **Booking Page (Customer)**, **Portal Members**, **Portal Messages**, **Portal Billing**, and **Portal Notifications**. The consolidation of portal and mobile surfaces under one **Digital** module is the current platform layout (see DISCREPANCIES.md #16).

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Steps 8 through 11 are read-only sidebar orientation; nothing in the group is sent, edited, or launched.

1. On the left rail, open the **Digital** module and look at the sidebar. **Expected:** the sidebar header reads **Digital**, and the pages split into two groups. The top group, **CUSTOMER PORTAL**, lists five entries: **Booking Page (Customer)**, **Portal Members**, **Portal Messages**, **Portal Billing**, and **Portal Notifications**. Below it, a **MOBILE** group holds the mobile-app pages, which are a separate lesson (WC-09-02).
2. Click **Portal Members**. **Expected:** the page opens with the eyebrow **CUSTOMER PORTAL** above the title **Portal Members**, and the breadcrumb reads `Customer Portal › Portal Members`. This is the roster of everyone who holds a portal login.
3. Read the KPI strip across the top. **Expected:** four figures sit in a row: **Registered** (1,840), **Active This Month** (1,240), **New This Week** (42), and **Mobile Users** (68%). Together they answer "how big is the portal audience, and how much of it is live right now."
4. Read the three insight cards below the KPIs. **Expected:** **Member Growth** (subtitle "Last 12 months") trends the registered count over the year. **By Plan** (subtitle "Plan distribution") breaks the base down by plan, with Monthly Unlimited the largest share, then Annual Plan, Monthly Basic, and Trial. **Member Status** (subtitle "Account health") splits the base into Active, Inactive, and Suspended. These are the same shapes you will meet on other WashCentral list pages: a KPI strip, then a few summary cards, then the list.
5. Read the **Member List** card header and its toolbar. **Expected:** the card is labelled **PORTAL · MEMBERS** with the title **Member List** and a record count ("4 records"). On the right sit **+ New Record** and **Export**. Below them is a search box with the placeholder "Search portal members…", a **Filters ▾** control, and a **Search** button. In this lesson you locate these controls; you do not create a record and you do not export.
6. Read the Member List column headers. **Expected:** six columns run left to right: **NAME**, **EMAIL**, **MEMBER SINCE**, **PLAN**, **PORTAL STATUS**, and **LAST LOGIN**. **PORTAL STATUS** is the one to check first on a "customer cannot log in to the portal" call; the four sample rows all read Active, and the **Member Status** card above splits the wider base into Active, Inactive, and Suspended.
7. Read the pagination row under the list. **Expected:** the footer shows **ROWS PER PAGE** with options 25, 50, and 100, a counter reading "1–4 of 4", and a pager (`‹ 1 ›`). Reading the list, paging it, and searching it change nothing. **+ New Record** would open a create form; that form did not resolve in the July 9 corpus, so its layout is TBD — parked (new parked item; see Notes). **Export** is a data-out action and is not clicked in this lesson.
8. Point to **Booking Page (Customer)** in the **CUSTOMER PORTAL** group. Do not click it. **Expected:** the entry names the customer-facing booking surface for the portal. On the July 9 pass its standalone page returned an HTTP 404, so its KPIs and columns are TBD — parked (new parked item; see Notes). Its sidebar entry is confirmed; its contents are not yet documented.
9. Point to **Portal Messages**. Do not open a compose or send flow. **Expected:** the entry is the portal-side messaging surface. Messaging is a send-type area, so it is never exercised in training; you locate the entry only. Its page returned an HTTP 404 on July 9, so its contents are TBD — parked (new parked item; see Notes).
10. Point to **Portal Billing**. **Expected:** the entry is the portal-side billing surface. Its page returned an HTTP 404 on July 9, so its KPIs and columns are TBD — parked (new parked item; see Notes). The entry is confirmed in the sidebar.
11. Point to **Portal Notifications**. Do not send a notification. **Expected:** the entry is the portal-side notifications surface, and like Portal Messages it is a send-type area you never exercise in training. Its page returned an HTTP 404 on July 9, so its contents are TBD — parked (new parked item; see Notes).
12. Recap the group. **Expected:** the **CUSTOMER PORTAL** group holds five entries. **Portal Members** is the one that reads in full today: a KPI strip, three health cards, and a six-column roster you check for portal-login questions. The other four (**Booking Page (Customer)**, **Portal Messages**, **Portal Billing**, **Portal Notifications**) are named and located, with their contents parked until the pages resolve. Nothing in the group is sent, edited, or exported during this walk.

## Expected results

You can open the **Digital** module, find the **CUSTOMER PORTAL** group, and open **Portal Members**. On Portal Members you can read the four KPIs, the three health cards, and the six roster columns, and you know **PORTAL STATUS** is the field to check when a member reports a portal-login problem. You can point out the other four entries in the group and state honestly which parts are documented and which are parked. Reading these pages changes nothing, and no message, notification, export, or edit happens during the walk.

## Notes and troubleshooting (observed behavior only)

- **Portal Members** is the only page in the **CUSTOMER PORTAL** group that resolved on the July 9 verification pass. Its labels, KPIs, and columns in this guide are read from that live capture.
- **Booking Page (Customer)**, **Portal Messages**, **Portal Billing**, and **Portal Notifications** each have a confirmed sidebar entry, but their standalone pages returned an HTTP 404 in the July 9 corpus. Their KPIs and columns are TBD — parked as a NEW parked item (portal service pages not resolving in the corpus). The plan (Lesson 9.1) describes these as portal-side service surfaces; that is orientation only and is not presented here as observed, because the pages could not be read.
- The **Portal Members** create/edit form (`portal-members-edit.html`) also returned an HTTP 404 on July 9, so the **+ New Record** form layout is parked under the same new item.
- **Portal Messages** and **Portal Notifications** are send-type surfaces. Consistent with tenant-safety rules, no compose or send flow is opened, and no message or notification is depicted at any point.
- **Export** on Portal Members is a data-out action and is not clicked during this lesson.
- If the idle "Still there?" prompt appears while you are on Portal Members, it belongs to session-timeout behavior, not this lesson. Dismiss it and continue; see WC-01-03.

**Knowledge check [READ-ONLY].** (1) Which page in the **CUSTOMER PORTAL** group carries the member roster, and which column do you check first for a "cannot log in to the portal" call? (2) Name the four KPIs on **Portal Members**. (3) Of the five entries in the group, how many resolved to a live page on July 9, and what is the correct thing to write for the others rather than guess their contents? (Answers: (1) **Portal Members**; **PORTAL STATUS**. (2) **Registered**, **Active This Month**, **New This Week**, **Mobile Users**. (3) One, **Portal Members**; write "TBD — parked" for the four that returned 404.)

## Related lessons

WC-09-02 Mobile app pages · WC-01-04 List conventions · WC-12-08 Customer Portal & AI Agent (Settings-side portal configuration).

**Verified against demo.washcentral.com on July 9, 2026.**
