# WC-07-01 — Employees List and Detail · Snagit Shot List (operator-ready)

v1.1 · July 11, 2026 · Target output: **WC-07-01-employees-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 11, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/emp-employees.html` (or navigate there from the rail: **Team → Employees**).
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this lesson is mouse-only, no keyboard entry).
- [ ] Employees page fully loaded: KPI strip, the three insight cards, and the **Employee List** table all visible; nothing open, no idle dialog on screen.
- [ ] Do not click **Export** or **+ New Record** at any point (steps 6, 14). On the employee record, never click **Delete**, **Edit Employee**, or **Assign Course** (steps 10–14); leave only by **← Back**.
- [ ] Detail-view internals were captured July 11, 2026 (all seven tabs) and are documented in the guide. The detail page loads from the row click only — never paste `emp-employees-detail.html` (it 404s by direct URL).
- [ ] **Narration gate:** narration blocks s10, s12, and s13 (v1.0) voice the detail internals as "parked / not captured," which now contradicts the page. Do not record until those blocks are re-authored and re-rendered.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Steps 1–9 stay on the list; steps 10–15 open one employee and read the tab bar.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Team → Employees** (or land on `emp-employees.html`); slowly sweep the cursor top to bottom across the page | Employees page: breadcrumb **Employees › Employees**, four-tile KPI strip, three insight cards, **Employee List** table below | 3s | Callout ① naming the three bands (KPIs / insights / list); slow vertical cursor sweep (about 2s), no click |
| 2 | Sweep the cursor across the four KPI tiles left to right | **48 Total Employees**, **44 Active**, **32 Full Time**, **16 Part Time** | 3s | Callout ② bracketing all four tiles; zoom-in 150% across the strip (1.5s) |
| 3 | Point to the **Headcount Growth** card | **Headcount Growth / Last 12 months**, value **48**, **↑ +4.3%**, trend line Jan→Dec | 3s | Callout ③ on the +4.3% and the trend line |
| 4 | Point to the **By Location** card | **By Location / Staff distribution** — **MLAS 35%**, **SSNB 27%**, **Piscataway 23%**, **Other 15%** | 3s | Callout ④ down the four bars |
| 5 | Point to the **Employment Type** card | **Employment Type / Workforce composition** — **67% FULL-TIME**, **33% PART-TIME**, **4 INACTIVE** | 3s | Callout ⑤ on the 67/33 split and the INACTIVE tile |
| 6 | Point to the **Employee List** card header, then to **Export** and **+ New Record** — do NOT click either | Eyebrow **EMPLOYEES · STAFF DIRECTORY**, title **Employee List**, **5 records**; **Export** and **+ New Record** buttons top-right | 3s | Callout ⑥ on the two buttons with a red "do not click" ring on each; hover only, no click |
| 7 | Sweep the cursor across the column header row | Columns **EMPLOYEE · PHONE · HIRE DATE · TYPE · STATUS · LOCATION**; leading checkbox column; avatar in the EMPLOYEE cell | 3s | Callout ⑦ along the header; brief zoom on the EMPLOYEE cell showing avatar + name + role chip (1.5s) |
| 8 | Trace the **Jose Martinez** row, then sweep the role chips down the table | Row: **Jose Martinez**, **Shift Manager** chip, **973-555-0101**, **2022-03-15**, **Full-Time**, green **Active**, **MLAS**. Chips down the five rows: **Shift Manager, Cashier, Tunnel Attendant, Detail Tech, Greeter** | 4s | Callout ⑧ on the role chip; slow cursor sweep down the five chips (about 2.5s); do not click yet |
| 9 | Point to the **Search employees…** box, **Filters ▾**, and the pager | Placeholder **Search employees…**, a **Filters ▾** control, a **Search** button; footer **Showing 1–5 of 5 records** with **‹ 1 ›** | 3s | Callout ⑨ on the search box and the pager; no typing (mouse-only lesson) |
| 10 | Click the **Jose Martinez** row | The **Employee Detail** page opens: breadcrumb **Employees › Employee Detail**; header band with avatar, **Jose Martinez**, **Shift Manager** chip, **EMP-001 · Fort Lauderdale · Full-Time**, chips **Employees / Operations / Active**; buttons **← Back**, **Delete**, **Edit Employee**; metric band **3 yrs 1 mo Tenure · 168 Hours This Month · 97.2% Attendance Rate · Active Status · 4.6 / 5 Performance** | 4s | Callout ⑩ "one click opens the record"; STOP callout with red "do not click" rings over **Delete** and **Edit Employee**; zoom-in 140% on the header band (1.5s) |
| 11 | Sweep the cursor across the tab bar | Seven tabs: **Overview · Personal Info · Employment · Schedule · Emergency Contact · Notes & Audit · Training**, with **Overview** active | 4s | Callout ⑪ bracketing all seven tabs; slow left-to-right sweep (about 3s); do not switch tabs yet |
| 12 | Rest on the **Overview** tab | Five analytics panels: **Monthly Hours Worked** (162 avg / 168 this month / 488 YTD), **Hours Breakdown** (Regular 78% · OT 14% · PTO 6% · Unpaid 2%), **Attendance Rate** (97.2% 12-mo · 4 missed · 100% last month), **Monthly Earnings** ($14,820 YTD · $3,860 avg · $4,284 last month), **Performance Score Trend** (4.6 latest vs 3.9 location avg, ↑ +0.4, 8 reviews) | 5s | Callout ⑫ "Overview = analytics home"; slow sweep across the five panels (~3s); zoom-in 130% on **Performance Score Trend** (1.5s) |
| 13 | Click through the six deeper tabs in order, pausing on each (read-only) | **Personal Info** (personal + address fields, SSN masked) → **Employment** (role & classification, assignment & reporting, benefits) → **Schedule** (current-week grid + recent punches with **On Time / Minor OT** chips) → **Emergency Contact** (contact + medical panels) → **Notes & Audit** (manager notes + dated audit trail) → **Training** (progress tiles, learning paths, enrolled courses, **Assign Course** button NOT clicked) | 12s (~2s per tab) | Callout ⑬ naming each tab as it lands; STOP ring over **Assign Course** on the Training tab; no field is touched, nothing typed |
| 14 | Show the record unchanged, then click **← Back** | Nothing edited: no **Delete**, no **Edit Employee**, no **Assign Course**, no field touched; **← Back** returns to the **Employee List** | 2s | Callout ⑭ "read-only — nothing changed; ← Back is the only exit" |
| 15 | Return toward the **Employee List**; slow cursor sweep back across the page | Recap state: directory (KPIs + three insights + searchable table) and the one-click seven-tab profile with **Overview** as its analytics home | 3s | Callout ⑮ tying list to detail; end card / verification stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 4:25 (narration blocks estimated at ~145 wpm; timestamps pending render). If any unexpected dialog, error, changed data, or a **Still there?** timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

I can execute steps 1–15 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. The lesson is read-only: **Export** and **+ New Record** are only hovered (step 6), the employee record is opened but never edited (steps 10–14), and no keyboard entry is used. Say "drive lesson 07-01" when you're rolling.
