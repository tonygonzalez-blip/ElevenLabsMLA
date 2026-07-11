# WC-10-06 · Site Detail (Demo): the single-site status board (IT & Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers the **Site Detail (Demo)** page in **IT & Support**: the drill-down status board for one wash location. The sample site is **Morris Plains, NJ**, and the page pulls its whole picture onto a single screen. You get the site header with its live status, a row of KPI tiles, the **Equipment Status** cards for every unit at the wash, the **Active Incidents** list, the **Event Timeline**, and a **Quick Actions** column. By the end you can read each panel, tell at a glance whether a site is healthy or in trouble, and see which controls dispatch real work so you leave those alone. Nothing on this page is clicked. It is a read-only lesson.

## Audience and prerequisites

Internal Micrologic technicians working the NOC and Tech Support queue. You should be signed in with the **IT & Support** module open, which is where WC-10-01 (ML Command Center) leaves you. This page is the site-level view you land on after drilling into a single location from the network operations center, so it helps to have seen the NOC first. No prior experience with this screen is assumed.

## Navigation path

`IT & Support → Site Detail (Demo)`. In the SUPPORT group of the left sidebar, **Site Detail (Demo)** sits directly under **ML Command Center**. The page opens on the sample site, and its breadcrumb reads **Micrologic NOC › Morris Plains, NJ**, which shows the same site can be reached by drilling into it from the NOC.

## Steps

One action per step, and this whole walk is **[READ-ONLY]**. Hold each panel for two to three seconds before moving on. Do not click any of the action buttons; several of them dispatch work, send email, or restart equipment.

1. In the SUPPORT group of the left sidebar, click **Site Detail (Demo)**. **Expected:** the page opens on the sample site. The breadcrumb reads **Micrologic NOC › Morris Plains, NJ**, and a **‹ NOC** back link sits to the left of the site name, which returns you to **ML Command Center**.
2. Read the site header block at the top. **Expected:** the site name **Morris Plains, NJ** shows with a red **Critical** status chip beside it. Below it: the address 23 Maple Ave, Morris Plains NJ 07950, then **MLAS Corp · Tyler R. (CSM)**, and **Last sync: 2m ago**. In one line you know the site, who owns it, its account manager, and how fresh the data is.
3. Look at the three buttons at the top-right of the header: **Work Order**, **Notify CSM**, and **Escalate**. Do not click them. **Expected:** these are the site-level response buttons. **Work Order** opens a job, **Notify CSM** messages the account manager, and **Escalate** raises the site's priority. Each one starts a real action, so you read them here and leave them alone.
4. Read the KPI band under the header, left to right. **Expected:** six tiles. **Washes Today** 187 (avg 284), **Revenue Today** $1,247 (avg $1,891), **Avg Wait** 8.2m (target <6m), **SLA** 94.2% (target 98%), **Open Incidents** 3 (2 critical · 1 warn), and **Uptime (30D)** 99.1% (22h downtime). Each tile carries its own benchmark, so you see today's number against the average or target without doing the math.
5. Move to the **Equipment Status** panel that fills the middle of the page. **Expected:** the header reads **Equipment Status** with **8 units · click to drill down** on the right. Below it, eight cards, one per unit, each showing the equipment name, its model, a few live readings, a **Health** score, and how long ago it updated.
6. Read the first card, **POS System**. **Expected:** it shows the model Micrologic POS v4.2, Status **OFFLINE**, Last Transaction 47m ago, Transactions 0 today, and **Health: —** with no score. A red bar and a badge mark it as the unit in trouble. When the point-of-sale terminal is down, the site takes no money, so this is the card you check first.
7. Sweep the other seven cards. **Expected:** **Tunnel Conveyor** (Sonny's TX-2200, Health 71/100), **Membership Scanner** (ML-Scan 500, Mode Backup, Health 68/100), **Chemical System** (ChemDose Pro 8000, Health 92/100), **Dryer System** (ForceDry 2400, Health 88/100), **Water System** (AquaMax Reclaim 1500, Health 95/100), **Entry Gate** (ML-Gate 200, Health 99/100), and **LED Lighting** (TunnelLED Pro, Health 100/100). The **Health** score plus the color bar give you a fast read on which units are fine and which need a look.
8. Turn to the **Active Incidents** panel on the right, which shows a count of 3. **Expected:** three incidents, each tagged with a category chip and an owner. **POS System** · **PAYMENTS** ("Terminal offline — 0 transactions for 47 min", Tyler R. · 47m ago); **Tunnel Conveyor** · **EQUIPMENT** ("E-Stop triggered — conveyor halted 18m ago", Unassigned · 18m ago); **Membership Scanner** · **HARDWARE** ("Backup mode — queue depth 7 cars at entry", Sarah L. · 1h 34m ago). The owner line tells you what already has an assignee and what is still **Unassigned**.
9. Read the **Event Timeline** below the incidents. **Expected:** a running list of the site's events with timestamps, such as "POS Terminal offline" (10:42 AM), "E-Stop triggered — Conveyor" (10:51 AM), "Membership scanner — backup mode" (08:28 AM), "Conveyor tension alert" (07:44 AM), "Site opened — shift start" (07:00 AM), and "Yesterday — no incidents". The timeline is the site's history, so you can see how today unfolded and what preceded an incident.
10. Read the **Quick Actions** column at the bottom-right. Do not click any of them. **Expected:** five actions: **Create Work Order**, **Schedule Maintenance**, **Dispatch Technician**, **Email Customer (MLAS Corp)**, and **Remote Restart POS**. These are the common responses gathered in one place. Every one triggers a real action, sends a message, or touches live equipment, so this lesson reads them and stops there.
11. Step back and read the page as one board. **Expected:** the header tells you the site and its status, the KPIs give the numbers, **Equipment Status** shows the hardware, **Active Incidents** shows what is open and who has it, the **Event Timeline** shows the history, and **Quick Actions** is where a response would start. You opened nothing and changed nothing; the whole page is a look, not a lever.

## Expected results

From **IT & Support → Site Detail (Demo)** you can read one location's complete state on a single screen: its status chip and account owner, the KPI tiles against their benchmarks, the eight **Equipment Status** cards with **Health** scores, the three **Active Incidents** with their categories and assignees, the **Event Timeline** of the day, and the **Quick Actions** column. You can tell that the POS is **OFFLINE** and driving the site's **Critical** status, and you know that the header buttons and Quick Actions dispatch real work, so a read-through leaves everything untouched.

## Notes and troubleshooting (observed behavior only)

- **(Demo) in the label is deliberate.** The sidebar item reads **Site Detail (Demo)** and the page opens on a fixed sample site, **Morris Plains, NJ**. Treat it as the reference layout for a single-site drill-down.
- **The action controls are live.** **Work Order**, **Notify CSM**, **Escalate**, and the five **Quick Actions** (**Create Work Order**, **Schedule Maintenance**, **Dispatch Technician**, **Email Customer (MLAS Corp)**, **Remote Restart POS**) all start real work, send a message, or touch equipment. Read them; do not click them while training.
- **The offline unit drives the site status.** The **POS System** card is **OFFLINE** with **Health: —**, the top **Active Incidents** entry is the same POS on **PAYMENTS**, and the site chip reads **Critical**. The three panels agree, which is how you confirm the root cause quickly.
- **Equipment cards say "click to drill down."** The **Equipment Status** header shows **8 units · click to drill down**, so each card opens a deeper unit view. That per-unit view was not part of the July 9 capture, so its layout is TBD — parked (new item, see structured findings).
- **Two extra controls appear in the page's control list but were not placed on the captured view.** The July 9 digest lists **Schedule PM** and **Acknowledge** as buttons on this page, but they are not visible on the default screen or the screenshot, so their exact trigger (likely a hover or drill-down action on an equipment card or incident) is TBD — parked (new item, see structured findings).
- **Session idle prompt.** As on every WashCentral page, the idle "Still there?" dialog can appear here. That timeout behavior is out of scope for this lesson; see PARKED-ITEMS.md #9 and WC-01-03.

**Knowledge check:** On **Site Detail (Demo)**, (1) which panel tells you a unit is offline and how long it has been down, (2) where do you see whether an open incident already has an owner, and (3) which control would hand this site to a field tech without leaving the page? (Answers: the **Equipment Status** card, or the matching **Active Incidents** entry; the assignee line on each **Active Incidents** row, such as Tyler R. versus **Unassigned**; **Quick Actions → Dispatch Technician**, which you read but do not click while training.)

## Related lessons

WC-10-01 ML Command Center (NOC) · WC-10-02 Support Tickets · WC-10-04 System Alerts.

**Verified against demo.washcentral.com on July 9, 2026.**
