# WC-10-04 · System Alerts (IT & Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

**System Alerts** is the **IT & Support** destination meant to gather infrastructure alerts from every site into one feed. This short lesson shows where the entry lives in the sidebar and what happens when you open it today: on the July 9 build the destination returns a server **Not Found** page instead of an alerts view. By the end you can reach the entry, recognize the broken result on sight, fall back to the surfaces that still carry live alert signal, and report the outage the right way. Nothing here is clicked beyond the one sidebar link. It is a read-only lesson.

## Audience and prerequisites

Internal Micrologic technicians working the NOC and Tech Support queue. You should be signed in with the **IT & Support** module open, which is where WC-10-01 (ML Command Center) and WC-10-02 (Support Tickets) leave you. No prior experience with this screen is assumed. You do not need to know what a healthy alerts page looks like, because on this build it does not load.

## Navigation path

`IT & Support → System Alerts`. In the **SUPPORT** group of the left sidebar, **System Alerts** sits between **Knowledge Base** and **Training Requests**. The entry opens `support-alerts.html`.

## Steps

One action per step, and this whole walk is **[READ-ONLY]**. Hold each screen for two to three seconds before moving on.

1. Start on any **IT & Support** page. This walk starts on **Support Tickets**. Look at the left sidebar. **Expected:** the sidebar shows a **SUPPORT** group listing **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, and **Training Requests**, and below it an **AUDIT** group with **Audit Log**, **User Activity**, and **Change History**.
2. Find **System Alerts** in the **SUPPORT** group. **Expected:** **System Alerts** sits just under **Knowledge Base**, a plain sidebar link like the ones you used to reach Support Tickets and the Knowledge Base. On paper it is the one place that collects infrastructure alerts across every site into a single list.
3. Click **System Alerts**. **Expected:** the browser navigates to `support-alerts.html`. Instead of an alerts board, a bare page loads with no WashCentral header and no sidebar. This is not the demo being slow; it is the web server itself answering that the page is not there.
4. Read exactly what the page says. **Expected:** a heading, **Not Found**, and one line of body text beneath it: **HTTP Error 404. The requested resource is not found.** There is no styling, no navigation, and no alert content. That wording matters when you report the page, so quote it word for word.
5. Note what is absent, and treat the alert content as parked. **Expected:** none of the alert monitor loads. There is no KPI band, no severity breakdown, and no alerts table. The curriculum's orientation notes describe this page as an alerts monitor with counters, a severity split, and a dated table of infrastructure alerts, but the July 9 build serves a 404 in place of all of it, so every one of those specifics is unverifiable: TBD — parked (new item, see structured findings). Do not reconstruct them from memory; a 404 gives you nothing to confirm against.
6. While the page is down, read live alert signal on the surfaces that do load. **Expected:** the **Command Center**'s **Priority Intelligence** panel (WC-01-06) still groups current network issues by severity, and the **ML Command Center** incident feed (WC-10-01) still lists open incidents. Neither is a full replacement for a dedicated alerts log, but between them they carry the operational signal a technician needs while System Alerts is unavailable.
7. Report the broken destination. **Expected:** a live sidebar link that answers with a raw 404 is a broken page, the same situation the broken-page playbook covers (WC-PB-14). Copy the address, `support-alerts.html`, and the exact error text, then file it so it reaches Micrologic, the way the LogicPOS pages were logged (PARKED-ITEMS.md #2). Reporting it is the job here; there is nothing on the page to work with.
8. Recap the entry and the fallback. **Expected:** **System Alerts** is a real **IT & Support** menu entry, but on the July 9 build it opens a 404 rather than an alerts view. Reach it from the **SUPPORT** group, know the **Not Found** page on sight, lean on **Priority Intelligence** and the **ML Command Center** for live signal, and report the outage. When the page returns, this lesson gets its full alerts walk.

## Expected results

From **IT & Support → System Alerts** you can locate the entry in the **SUPPORT** group and open it, and on the July 9 build you land on a plain **Not Found** page reading **HTTP Error 404. The requested resource is not found.** rather than an alerts dashboard. You can recognize that as a broken page, pull live alert signal from **Priority Intelligence** on the **Command Center** and the **ML Command Center** incident feed instead, and report the outage with the URL and the exact error text. The alert monitor the curriculum expects here, its counters, severity split, columns, and alert-type rows, is not present in this capture and is parked pending a working page.

## Notes and troubleshooting (observed behavior only)

- **The entry is real; its destination is not, on this build.** **System Alerts** is a live item in the **IT & Support** sidebar's **SUPPORT** group, but `support-alerts.html` returns **HTTP Error 404. The requested resource is not found.** The link works; the page behind it does not.
- **It is a server 404, not an in-app empty state.** The response is a bare **Not Found** page with no WashCentral header, sidebar, or styling. That look tells you the platform never rendered the page, which is different from an alerts view that loaded and simply had no rows.
- **The expected content is parked, not guessed.** The curriculum describes a KPI band, a four-level severity split, a dated alerts table, and infrastructure alert rows for this page. None of it is observable in the July 9 capture, so it is held as a new parked item (see structured findings) rather than written up as if seen. The specific labels the plan lists are recorded in this lesson's structured findings, not on the page.
- **Fallbacks that do load.** For live operational signal while the page is down, use **Priority Intelligence** on the **Command Center** (WC-01-06) and the incident feed on the **ML Command Center** (WC-10-01). Both are read-only reads; do not claim or assign anything from them while training.
- **Report it like any broken page.** Treat this as the WC-PB-14 case: capture `support-alerts.html` and the 404 text and route it to Micrologic, the same handling the LogicPOS 404s got (PARKED-ITEMS.md #2).

**Knowledge check:** A client reports what might be a network-wide outage and you want to check whether an alert is platform-wide or limited to one site. (1) Which **IT & Support** entry is designed for that? (2) What actually happens when you open it on this build? (3) So what do you do today to get the same read? (Answers: **System Alerts** in the **SUPPORT** group; it returns a **Not Found** / **HTTP Error 404** page; check **Priority Intelligence** on the **Command Center** and the **ML Command Center** incident feed for live signal, and report the broken page per WC-PB-14.)

## Related lessons

WC-10-01 ML Command Center (NOC) · WC-10-02 Support Tickets · WC-01-06 Command Center deep dive · WC-PB-14 Broken page / 404.

**Verified against demo.washcentral.com on July 9, 2026.**
