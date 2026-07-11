# WC-13-01 — Reports Hub and Report Viewer · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-13-01-reports-hub-viewer-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/reports.html`, on the **All Reports** view with nothing else open.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Do NOT click **Schedule Report** at any point (step 5) — it is a send-type action.
- [ ] **▶ Run Report** in the viewer (step 11) IS allowed: it renders read-only and sends nothing. Do NOT click any schedule/export control inside the render.
- [ ] Before rolling, confirm the **Report Viewer** page live: its filter-bar labels, the render layout, and the exact "Generated … · Sample data" stamp were not in the July 9 corpus (parked). Re-verify them on `report-view.html?name=…` and update captions if the platform differs.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Click **Reports** in the left rail | Reports hub loads; breadcrumb **Reports›Reports**; opens on the **All Reports** view with a left **VIEWS**/**CATEGORIES** sidebar and the report list on the right | 3s | Callout ① on the two-column layout; slow cursor sweep from the rail to the sidebar |
| 2 | Point down the **VIEWS** list (do not click a view) | VIEWS shows **All Reports** (173), **Favorites** (5), **Scheduled Reports** (3), **Advanced Analytics** (23), **Custom Builder** | 3s | Callout ② on the VIEWS header; zoom-in 150% on the five rows + counts (1.5s); do not select |
| 3 | Point down the **CATEGORIES** list (do not click a category) | 19 category filters with counts: Financial (8), Traffic & Sales (4), Revenue (6), Commissions (5), Employee Labor (7), Employee Reports (6), Unlimited Programs (22), Customers (9), House Accounts (9), Transactions (21), Credit Cards (2), Inventory (17), Maintenance (16), Marketing (4), Scheduling (1), WashHub (1), Weather (1), Settings (3), Other (8) | 4s | Callout ③ "19 categories, live counts"; slow vertical cursor sweep down the list (about 3s); do not click a row |
| 4 | Point to the panel header and the **Search reports…** box (do not type) | Panel headed **All Reports** with a **173** counter and subtitle "Browse and run all standard and custom reports"; **Search reports…** box below | 3s | Callout ④ on the counter + search box; zoom-in 150% on the 173 chip (1.5s) |
| 5 | Point to **Schedule Report** at the top-right — do NOT click | **Schedule Report** button on the hub, above the report list | 3s | Callout ⑤ on the button; STOP callout with a red "do not click" ring; caption "send-type — hub only, not the viewer"; cursor hovers, never clicks |
| 6 | Point to the **Report List** column headers | Card **Report List** / "ANALYTICS AND PERFORMANCE REPORTS"; columns **★**, **Report Name**, **Category**, **Type**, **Last Run** | 3s | Callout ⑥ bracketing the five column headers; slow left-to-right sweep across them |
| 7 | Sweep the first rows and the **Type** chips (do not click a row yet) | Type chips **Standard** / **Scheduled** / **Analytics**; rows incl. **Daily, Period, and Shift Financial** (Financial Reports · Standard · —), **Daily, Period, and Shift Financial 2.0** (Scheduled · 03-25-2026 9:14 AM · ★), **Traffic Report - Sales Data** (Standard · 03-24-2026 2:30 PM · ★); pagination **‹ 1 2 3 4 ›**, 50 per page | 4s | Callout ⑦ on the Type column and the ★ favorites; brief zoom on a Standard vs Scheduled vs Analytics chip (1.5s); note the "—" = never run |
| 8 | Click the **Daily, Period, and Shift Financial** row | **Report Viewer** opens at `report-view.html?name=…`; the list is replaced by a filter bar on top and the report body below | 3s | Callout ⑧ "row opens the viewer"; VERIFY LIVE — viewer not in July 9 corpus; confirm the URL param and layout before the take |
| 9 | Point across the **REPORT FILTERS** bar (do not change a field) | Filter bar: **More Filters ▾**, **All Locations** selector, **Date Range** with **From** / **To** fields | 4s | Callout ⑨ on the three filter controls; caption "this All Locations scopes the report, not the whole app"; labels sourced from DISCREPANCIES.md #24 — re-caption if live differs |
| 10 | Point to **▶ Run Report** and **✕ Close Report** | Both buttons present on the viewer; **Schedule Report** is NOT here | 3s | Callout ⑩ on the two buttons; caption "run and close live here; schedule stays on the hub" |
| 11 | Click **▶ Run Report** (allowed — read-only render) | Report renders in place: summary tiles + table built from the filters | 4s | Callout ⑪ "read-only render, nothing sent"; PARKED — exact tiles/columns/values not in corpus; capture whatever renders live and hold; do NOT click any export/schedule control inside the render |
| 12 | Point to the generation stamp on the render | A "Generated … · Sample data" stamp on the rendered report | 3s | Callout ⑫ on the stamp; PARKED — exact stamp text not in corpus; zoom-in 150% on the actual stamp live (1.5s) and match the caption to it |
| 13 | Click **✕ Close Report** | Viewer closes; back on the Reports hub **All Reports** list; nothing changed | 2s | Callout ⑬ "closes clean, data untouched"; confirm the full list is back |
| 14 | None — slow cursor sweep across VIEWS, CATEGORIES, then the report list | Recap state: find by view or category, open, filter, **▶ Run Report**, read the stamp, **✕ Close Report** | 3s | Callout ⑭ tying the loop together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:20–4:45 (rendered narration total estimated ~4:18 pending render; on-screen holds carry the rest). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera (**Stay Logged In**), resolve or park, then re-record the segment — do not improvise.

## If Claude drives while you record

Steps 1–7 (the hub) are fully grounded in the July 9 corpus and can be driven with the timings above; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Steps 8–13 (the **Report Viewer**) were not captured in the July 9 corpus: verify the viewer live first, confirm the filter-bar labels and the render, and correct any caption before the take. **Schedule Report** is never clicked (step 5). **▶ Run Report** (step 11) is the only click that renders, and it reads data only. Say "drive lesson 13-01" when you are rolling.
