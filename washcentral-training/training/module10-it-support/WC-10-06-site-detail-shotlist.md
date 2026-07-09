# WC-10-06 — Site Detail (Demo) · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-10-06-site-detail-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/site-detail.html`, landed on **Morris Plains, NJ**.
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this lesson has no keystrokes and no clicks).
- [ ] This is a read-only walk. Do NOT click **Work Order**, **Notify CSM**, **Escalate**, or any of the five **Quick Actions** (**Create Work Order**, **Schedule Maintenance**, **Dispatch Technician**, **Email Customer (MLAS Corp)**, **Remote Restart POS**). Cursor sweeps and hovers only.
- [ ] Page fully loaded: header, KPI band, **Equipment Status** grid (8 cards), **Active Incidents**, **Event Timeline**, and **Quick Actions** all visible before rolling.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then hold. No clicks land in this lesson; every target is a read.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Site Detail (Demo)**; slowly move the cursor from the sidebar item to the breadcrumb, then to the **‹ NOC** back link | Page shows the sample site; breadcrumb reads **Micrologic NOC › Morris Plains, NJ**; **‹ NOC** back link sits left of the site name | 3s | Callout ① on the breadcrumb + **‹ NOC**; note "drill-down from the NOC"; no click |
| 2 | Sweep the header block: site name, status chip, address line, owner line, sync | Header shows **Morris Plains, NJ** with a red **Critical** chip; address 23 Maple Ave, Morris Plains NJ 07950; **MLAS Corp · Tyler R. (CSM)**; **Last sync: 2m ago** | 3s | Callout ② bracketing the header; zoom-in 150% on the **Critical** chip + owner line (1.5s) |
| 3 | Hover across the three header buttons **Work Order**, **Notify CSM**, **Escalate** — do NOT click | Three response buttons visible top-right of the header | 3s | Callout ③ on the trio; STOP callout with a red "do not click" ring covering all three; hover only, no press |
| 4 | Slow left-to-right sweep across the KPI band | Six tiles: **Washes Today** 187 (avg 284), **Revenue Today** $1,247 (avg $1,891), **Avg Wait** 8.2m (target <6m), **SLA** 94.2% (target 98%), **Open Incidents** 3 (2 critical · 1 warn), **Uptime (30D)** 99.1% (22h downtime) | 4s | Callout ④ along the band; brief zoom on **Avg Wait** and **SLA** where today's number sits under target (1.5s) |
| 5 | Move to the **Equipment Status** header and its **8 units · click to drill down** hint | Panel header **Equipment Status** with **8 units · click to drill down** on the right; grid of eight cards below | 3s | Callout ⑤ on the panel header + drill-down hint; do not click a card (drill-down view is parked) |
| 6 | Point to the first card, **POS System** | Card shows Micrologic POS v4.2, Status **OFFLINE**, Last Transaction 47m ago, Transactions 0 today, **Health: —**; red bar + badge | 4s | Callout ⑥ on **OFFLINE** + **Health: —**; zoom-in 150% on the red card (1.5s); frame it as the unit in trouble |
| 7 | Slow cursor sweep across the remaining seven cards | **Tunnel Conveyor** (71/100), **Membership Scanner** (Backup, 68/100), **Chemical System** (92/100), **Dryer System** (88/100), **Water System** (95/100), **Entry Gate** (99/100), **LED Lighting** (100/100) | 4s | Callout ⑦ following the **Health** scores and color bars; sweep about 3s; do not click a card |
| 8 | Move to the **Active Incidents** panel (count 3) on the right; sweep the three rows | Three incidents: **POS System** · **PAYMENTS** (Tyler R.), **Tunnel Conveyor** · **EQUIPMENT** (Unassigned), **Membership Scanner** · **HARDWARE** (Sarah L.) | 4s | Callout ⑧ on the category chips + owner lines; hold on **Unassigned** to contrast with the assigned rows |
| 9 | Sweep the **Event Timeline** below the incidents | Timeline entries with timestamps: POS Terminal offline (10:42 AM), E-Stop triggered — Conveyor (10:51 AM), Membership scanner — backup mode (08:28 AM), Conveyor tension alert (07:44 AM), Site opened — shift start (07:00 AM), Yesterday — no incidents | 4s | Callout ⑨ on the timeline; slow vertical sweep down the entries (about 3s); read as the day's history |
| 10 | Hover down the **Quick Actions** column — do NOT click | Five actions: **Create Work Order**, **Schedule Maintenance**, **Dispatch Technician**, **Email Customer (MLAS Corp)**, **Remote Restart POS** | 4s | Callout ⑩ on the column; second STOP callout covering all five with a red "do not click" ring; hover only |
| 11 | Slow pull-back sweep across the whole page (header → KPIs → equipment → incidents → timeline → quick actions) | Recap state: one board reading site status, numbers, hardware, open incidents with owners, history, and where a response would start; nothing was clicked | 3s | Callout ⑪ tying the panels together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:45 (rendered narration total pending; timestamps in the narration script are estimates at ~145 wpm). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. This lesson never clicks a control, so any click on camera is a re-roll.

## If Claude drives while you record

Once a live session with browser access is restored, I can execute steps 1–11 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No control is ever clicked — every step is a cursor sweep or a hover, and both STOP callouts (the header buttons in step 3, the Quick Actions in step 10) stay untriggered. Say "drive lesson 10-06" when you're rolling.
