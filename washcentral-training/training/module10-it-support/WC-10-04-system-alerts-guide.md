# WC-10-04 · System Alerts (IT & Support)

v2.0 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

> **Re-authoring note (July 11, 2026).** The v1.0 lesson taught a 404: on the July 9 sweep, `support-alerts.html` answered **Not Found** on its direct URL and the lesson was built around recognizing and reporting that. The July 11 credentialed pass reached **System Alerts** through the in-app sidebar and the page is real and fully rendered (`verification/2026-07-11/digests/support-alerts-inapp.json` + screenshot). This v2.0 guide teaches the actual page. The v1.0 narration narrates the 404 throughout and must be re-scripted and re-rendered before recording; see the narration file's status note.

## Purpose

**System Alerts** is the **IT & Support** page that gathers infrastructure alerts from every site into one feed: tunnel equipment, POS hardware, chemical levels, network events. This lesson walks the live page: the four-tile KPI band, the three summary panels, and the **Alert List** with its type, severity, and status columns. By the end you can read whether the network is quiet or on fire, tell a **Critical** tunnel alert from an **Info** network note, and pull the one location's alerts that a ticket is about. It is a read-only lesson; you open the page, read it, and click nothing that creates or exports.

## Audience and prerequisites

Internal Micrologic technicians working the NOC and Tech Support queue. You should be signed in with the **IT & Support** module open, which is where WC-10-01 (ML Command Center) and WC-10-02 (Support Tickets) leave you. No prior experience with this screen is assumed.

## Navigation path

`IT & Support → System Alerts`. In the **SUPPORT** group of the left sidebar, **System Alerts** sits between **Knowledge Base** and **Training Requests**. Reach it by clicking the sidebar link. Do not type `support-alerts.html` directly: the direct URL answered HTTP 404 on the July 9 sweep, while the sidebar link renders the full page. The breadcrumb on arrival reads **Support › System Alerts**.

## Steps

One action per step, and this whole walk is **[READ-ONLY]**. Hold each screen for two to three seconds before moving on.

1. Start on any **IT & Support** page. This walk starts on **Support Tickets**. Look at the left sidebar. **Expected:** the sidebar shows a **SUPPORT** group listing **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, and **Training Requests**, and below it an **AUDIT** group with **Audit Log**, **User Activity**, and **Change History**.
2. Click **System Alerts** in the **SUPPORT** group. **Expected:** the page loads inside the WashCentral shell with the breadcrumb **Support › System Alerts** and a four-tile KPI band across the top. (Sidebar click only — see the navigation caution above.)
3. Read the KPI band. **Expected:** **3 Active Alerts**, **14 Today**, **1 Critical**, and **2 Warnings**. That is the fast health read: what is open right now, today's volume, and how the open items split by weight. The **1 Critical** tile is the number that decides whether you finish your coffee first.
4. Look at the **Alert Volume** panel on the upper left. **Expected:** the subtitle reads **Last 12 months**, the total is **148** with a **↓ -8%** trend, and the axis runs **Jan** to **Dec**. Alert volume trending down is the long view a health review wants.
5. Read the **By Severity** panel (subtitle **Alert breakdown**). **Expected:** **Info 58%**, **Warning 28%**, **Error 10%**, **Critical 4%**. Four severity levels, and most traffic is informational; the critical slice is thin, which is why a **Critical** row deserves attention when it shows.
6. Read the **System Health** panel (subtitle **Alert overview**). **Expected:** **86% HEALTHY**, **10% WARNING**, **4% CRITICAL**. The 4% critical share here lines up with the **By Severity** panel's **Critical 4%** — the same fact shown two ways.
7. Drop to the **Alert List** and read the column headers. **Expected:** **DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**, with a **Search system alerts…** box, a **Filters ▾** control, a **Search** button, and **+ New Record** and **Export** buttons above the table. `[READ-ONLY]` Leave **+ New Record** and **Export** alone; a support read never creates an alert record, and **Export** is a restricted action on this tenant. Below the table sits a **ROWS PER PAGE** control (**25 / 50 / 100**) and the range readout **1–4 of 4**.
8. Read the four rows top to bottom. **Expected:** **2025-06-01 10:22 · Tunnel · Critical · MLAS · Conveyor belt tension exceeds threshold · Active**; **2025-06-01 09:48 · POS · Warning · SSNB · Low receipt paper on POS-2 · Active**; **2025-06-01 09:12 · Chemical · Warning · Piscataway · Chemical tank #2 below 20% · Active**; **2025-05-31 15:30 · Network · Info · MLAS · Backup connection activated · Resolved**. Four alert types on screen — **Tunnel**, **POS**, **Chemical**, **Network** — and the **STATUS** column separates what is still burning (**Active**) from what already closed (**Resolved**). The three **Active** rows are the **3 Active Alerts** tile, itemized.
9. Recap the read. **Expected:** KPI band for the instant answer, the three panels for trend and mix, and the **Alert List** for the specifics: which **TYPE**, at which **LOCATION**, saying what, still **Active** or already **Resolved**. On a "is this outage platform-wide or one site?" ticket, this page plus **Priority Intelligence** on the **Command Center** (WC-01-06) and the **ML Command Center** incident feed (WC-10-01) give you the whole picture.

## Expected results

From **IT & Support → System Alerts** (sidebar click) you land on the live alerts monitor and can read the KPI band (**3 Active Alerts · 14 Today · 1 Critical · 2 Warnings**), the **Alert Volume** trend (**148**, **↓ -8%**), the **By Severity** split (**Info 58% / Warning 28% / Error 10% / Critical 4%**), and the **System Health** gauge (**86% HEALTHY**). You can name the **Alert List** columns (**DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**), point to the **Critical** tunnel row at **MLAS**, and tell an **Active** alert from a **Resolved** one. You touched nothing: no record created, nothing exported.

## Notes and troubleshooting (observed behavior only)

- **Reach it via the sidebar, not the URL.** On July 9 the direct URL `support-alerts.html` returned a bare **HTTP Error 404**; on July 11 the same page rendered fully when opened from the **SUPPORT** sidebar link. If someone reports this page "gone," ask how they reached it before filing anything (and see WC-PB-14 if the sidebar route also fails).
- **List-count mismatch (new discrepancy, July 11).** The **Alert List** header reads **14 records**, matching the **14 Today** tile, but the table renders four rows and the pager reads **1–4 of 4**. The header count and the pager disagree; documented as observed and reported in the July 11 return. Teach from the pager (**1–4 of 4**) when counting rows.
- **Severity vocabulary.** The **By Severity** panel names four levels — **Info**, **Warning**, **Error**, **Critical** — while the four visible rows show three of them (no **Error** row on July 11). Do not invent an **Error** row; the level exists in the panel legend.
- **KPI cross-checks.** **3 Active Alerts** = the three **Active** rows; **1 Critical** = the tunnel row; **2 Warnings** = the POS and Chemical rows. The band and the list agree, and reading them together is the habit to build.
- **Companion surfaces.** **Priority Intelligence** on the **Command Center** (WC-01-06) and the **ML Command Center** incident feed (WC-10-01) carry the triage and ownership view; System Alerts is the infrastructure feed itself. PB-3 (POS down) uses all three.
- The idle **Still there?** session prompt can appear here as anywhere; dismiss it off-camera with **Stay Logged In** and re-roll the segment (session behavior is WC-01-03's subject).

**Knowledge check:** A client reports what might be a network-wide outage. (1) Which **IT & Support** entry shows the live infrastructure alert feed, and how do you open it? (2) Which two columns tell you whether the problem is one site or several? (3) Which tile and which rows answer "how bad is it right now"? (Answers: **System Alerts**, opened from the **SUPPORT** sidebar link, not by URL; **LOCATION** plus **TYPE** across the rows; the **1 Critical** / **3 Active Alerts** tiles and the **Active** rows in the list.)

## Related lessons

WC-10-01 ML Command Center (NOC) · WC-10-02 Support Tickets · WC-01-06 Command Center deep dive · WC-PB-03 POS down (uses this page) · WC-PB-14 Broken page / 404.

**Verified against demo.washcentral.com on July 11, 2026.**
