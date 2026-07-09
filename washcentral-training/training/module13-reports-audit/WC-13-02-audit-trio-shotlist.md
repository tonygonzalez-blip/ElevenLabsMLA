# WC-13-02 — Audit trio (Audit Log, User Activity, Change History) · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-13-02-audit-trio-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON (no keystroke overlay needed; this lesson is mouse-only).
- [ ] IT & Support left rail is reachable and nothing is open: no command palette, no Ask Shyne modal.
- [ ] STOP reminder: on the **Audit Log List**, do not click **Export** or **+ New Record** (see steps 7 and 8).
- [ ] Capture-gap reminder: **User Activity** and **Change History** open only via the AUDIT sidebar links in the live app; do not type their URLs. Their on-page numbers/rows are parked — do not zoom in to read values that this build cannot confirm (steps 9–15).

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Every screen change is a page load in the IT & Support workspace; hold each new page before reading it.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open **IT & Support** from the global rail; slowly sweep the cursor down the sidebar to the **AUDIT** group | Sidebar shows a **SUPPORT** group (ML Command Center, Site Detail (Demo), Support Tickets, Help Desk (Zoho), Knowledge Base, System Alerts, Training Requests) and an **AUDIT** group: **Audit Log**, **User Activity**, **Change History** | 3s | Callout ① bracketing the **AUDIT** group's three items; slow top-to-bottom cursor sweep (about 2s); no click yet |
| 2 | Click **Audit Log** | The **Audit Log** page loads; breadcrumb reads **Audit › Audit Log**; a four-tile KPI band sits across the top | 3s | Callout ② on the breadcrumb; let the page settle before moving |
| 3 | Sweep the cursor across the four KPI tiles left to right | KPI band reads **842 Events Today**, **5,240 This Week**, **18 Unique Users**, **3 Critical Events** | 3s | Callout ③ under the four tiles; zoom-in 130% on **3 Critical Events** (1.5s); slow sweep, no click |
| 4 | Point to the **Event Volume** panel (upper left) | Panel shows subtitle **Last 12 months**, total **62,880**, trend **↑ +14.7%**, axis **Jan** to **Dec** | 3s | Callout ④ on the **62,880 / ↑ +14.7%** figure; brief hover on the trend line |
| 5 | Point to the **Action Types** panel (subtitle **By event category**) | Bars read **Updated 45%**, **Created 30%**, **Login / Logout 18%**, **Deleted 7%** | 4s | Callout ⑤ on the **Deleted 7%** bar specifically; slow cursor sweep down the four bars (about 2.5s) |
| 6 | Point to the **Event Severity** panel (subtitle **System health overview**) | Panel reads **91% NORMAL**, **6% WARNING**, **3% CRITICAL** | 3s | Callout ⑥ tying **3% CRITICAL** back to the **3 Critical Events** tile from step 3 |
| 7 | Scroll to the **Audit Log List**; sweep across the column headers | Columns read **DATE/TIME · USER · ACTION · MODULE · RECORD · LOCATION · IP ADDRESS**; list shows **4 records**; **Search audit log…** box, **Filters ▾**, **Search**, **Export**, **+ New Record** visible | 4s | Callout ⑦ on the **IP ADDRESS** column; **STOP callout** with a red "do not click" ring over **Export** and **+ New Record**; slow header sweep (about 3s), no click |
| 8 | Point to the **Deleted** action row | Row reads **2025-06-01 10:18 · J. Martinez · Deleted · Transactions · Payment #TKT-10880 · MLAS · 192.168.1.12** | 4s | Callout ⑧ tracing the row left to right (who → what action → which record → location → IP); zoom-in 130% on **Deleted** + **Payment #TKT-10880** (2s); do not click the row |
| 9 | In the **AUDIT** group, click **User Activity** | The **User Activity** page loads from the sidebar link | 3s | Callout ⑨ "reached by in-app link only". **Capture note for editor:** the July 9 corpus could not capture this page directly; frame the sidebar click and the page's own header/columns as they render live. Do NOT fabricate KPI values in the edit; hold on whatever the live page shows |
| 10 | Rest the cursor on the KPI tiles (top of **User Activity**) | Plan-documented tiles **Active Users**, **Logins Today**, **Avg Session**, **Failed Logins** (live values read at record time; not confirmed in this build) | 3s | Callout ⑩ on **Failed Logins**. Editor: capture the tiles as rendered; values are parked in the guide, so do not add a value overlay |
| 11 | Sweep the **User Activity** table column headers | Plan-documented columns **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS** (as rendered live) | 4s | Callout ⑪ on **ROLE** and **LOGINS THIS MONTH**; slow header sweep; do not click a row |
| 12 | In the **AUDIT** group, click **Change History** | The **Change History** page loads from the sidebar link | 3s | Callout ⑫ "reached by in-app link only". **Capture note for editor:** same as step 9 — this page had no clean July 9 capture; frame the live render, invent nothing |
| 13 | Rest the cursor on the KPI tiles (top of **Change History**) | Plan-documented tiles **Changes Today**, **This Week**, and a configuration-vs-data changes split (live values read at record time) | 3s | Callout ⑬ on the config-vs-data split; values parked, no value overlay |
| 14 | Sweep the **Change History** table column headers | Plan-documented columns **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE** (as rendered live) | 4s | Callout ⑭ bracketing **OLD VALUE** and **NEW VALUE** as a pair; this side-by-side is the page's whole purpose |
| 15 | Point to a price-change row (a **Monthly Price** change if present) | A **FIELD** row showing an old value and a new value side by side; the guide's illustration is **Monthly Price $29.99 → $34.99** | 4s | Callout ⑮ reading the **OLD VALUE → NEW VALUE** pair on whatever row renders live. Editor: if no price row is present, hold on any **FIELD** row; do not overlay the $29.99/$34.99 figures unless the live row shows them |
| 16 | Return to the **AUDIT** group; slowly sweep the cursor across the three links | Recap state: **Audit Log** = what happened (incl. **IP ADDRESS**), **User Activity** = who is signing in (incl. **Failed Logins**), **Change History** = who changed which **FIELD** (**OLD VALUE / NEW VALUE**) | 3s | Callout ⑯ tying the three pages to the three questions; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:55 (rendered narration total pending — see the narration script's per-step estimates). If any unexpected dialog, error, changed data, or a **Still there?** timeout prompt appears: stop, note it, dismiss off-camera with **Stay Logged In**, resolve or park, then re-record the segment. Do not improvise, and do not type a direct URL for **User Activity** or **Change History** — both must be reached from the AUDIT sidebar.

## If Claude drives while you record

I can execute steps 1–16 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Nothing destructive is triggered: **Export** and **+ New Record** are never clicked (steps 7–8 stop at the header), no rows are opened, and **User Activity** and **Change History** are reached only through the AUDIT sidebar links. Say "drive lesson 13-02" when you're rolling.
