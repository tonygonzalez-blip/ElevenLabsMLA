# WC-12-03 — Services & per-location values · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-12-03-services-per-location-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (16 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start with **Settings** open at `demo.washcentral.com/settings-services.html`.
- [ ] Confirm the **Services List** shows real rows before rolling. If it shows "Couldn't load services (Failed to fetch). Check your connection to the AI agent service." (seen in the July 9 capture), stop, reconnect the agent service, and re-verify. Do not record the error state.
- [ ] This lesson is read-only: **+ New Service** is located but never clicked, no service is created, and no edit is ever saved. Add a STOP callout over **+ New Service**.
- [ ] Steps 11–15 open a service and Edit Service. Record up to each screen and read it; the per-location gear dialog is parked (PARKED-ITEMS.md #1) — if it will not open, hold on the gear and its tooltip, then Cancel. Never click **Save**.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. All navigation stays inside Settings; nothing is edited or created.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Settings**; click **Services** in the **Services** sidebar group | The **Services** page loads: breadcrumb **Settings › Services**; KPI band on top; three summary cards; **Services List** card below | 3s | Callout ① on the page title and breadcrumb; slow settle on the whole layout |
| 2 | Sweep the cursor down the **Services** sidebar group | Group lists **Services · Service Types · Service Groups · Detail Types · Rewards · Loyalty Discount Types**, with **All Settings** above and **Integrations** below | 3s | Callout ② bracketing the group "the catalog and its vocabulary"; slow vertical sweep (~2s) |
| 3 | Point across the four KPI tiles left to right | Tiles read **24 Total Services · 21 Active · 6 Service Types · $14.99 Avg Price** | 4s | Callout ③ along the KPI band; zoom-in 130% on the four tiles (1.5s); note "catalog-wide, demo counts approximate" |
| 4 | Point to the **Services Trend** card, then the **Service Status** card | **Services Trend** shows last 12 months, up 4%; **Service Status** reads **88% ACTIVE · 0% DRAFT · 12% INACTIVE** | 4s | Callout ④ on Service Status "active sells, draft not yet, inactive retired"; brief hold on the health bar |
| 5 | Point to the **Service Distribution** card | Distribution by type: **Wash 42% · Add-On 33% · Detail 17% · Other 8%** | 3s | Callout ⑤ ringing the **Wash** row "our focus"; zoom-in 130% on the bars (1.5s) |
| 6 | Move to the **Services List** card | Card **Services List**; breadcrumb **SETTINGS · SERVICES**; **+ New Service** top-right | 3s | Callout ⑥ on the card header; STOP callout with red ring over **+ New Service** (never clicked) |
| 7 | Point across the list header row left to right | Columns **DESCRIPTION · CODE · TYPE · PRICE · ACTIVE** | 4s | Callout ⑦ along the column header; hold on **CODE** "controller code → POS/tunnel"; slow horizontal sweep (~2.5s) |
| 8 | Rest on the list body | When live, real service rows (wash packages, add-ons, tokens); the demo may load a fixed **Basic Wash** sample on a detail | 3s | Callout ⑧ "migrated catalog lives here"; if the "Couldn't load services" error shows, STOP and re-verify off-camera — do not record the error |
| 9 | Point to the **Search services…** box, then **Filters**, then **Search** | Placeholder "Search services…"; **Filters** dropdown; **Search** button | 3s | Callout ⑨ "search, don't scroll"; do NOT type or run a filter |
| 10 | Point to the pagination footer | **ROWS PER PAGE** offers **25 · 50 · 100**; footer paging control visible | 3s | Callout ⑩ on rows-per-page; brief hover, no click |
| 11 | Click one **WASH** service row to open its detail | Service detail opens with two tabs, **Service Main** and **Active Locations**, and header buttons **← Back · Delete Service · Edit Service** | 3s | Callout ⑪ on the two tabs; STOP callout over **Delete Service** (never clicked); values per July 8 pass — if the detail 404s, park and re-verify (PARKED-ITEMS.md #1) |
| 12 | On **Service Main**, sweep down the field groups | Groups **Basic Information · Pricing · Behavior · Display & Ordering · Commission · Classification · Lube & Oil · Additional**; rest on **CONTROLLER CODE** and **COUNT AS CAR** | 5s | Callout ⑫ tagging **CONTROLLER CODE** "POS mapping" and **COUNT AS CAR** "counts as traffic?"; slow vertical sweep (~3s) |
| 13 | Click the **Active Locations** tab | Tab lists the sites and groups where the service is sold, each with status and effective date | 4s | Callout ⑬ "where it sells = where it's active"; hold on one location row; do NOT toggle anything |
| 14 | Click **Edit Service**; rest on the per-location gears | Gear buttons (tooltip **Configure per location**) sit beside **DESCRIPTION · CONTROLLER CODE · AMOUNT · TAXABLE · TAX RATE (1) · TAX RATE (2) · TAX INCLUDED** | 5s | Callout ⑭ ringing the gear beside **AMOUNT**; hover to surface the **Configure per location** tooltip (~1.5s); do NOT change a field |
| 15 | Click one gear (beside **AMOUNT**) to open the override dialog | Parked: on the July 8 pass the "Configure Value For …" dialog did not open. Hold on the gear and tooltip, note the parked behavior, then leave with **← Back** or **Cancel** | 4s | Callout ⑮ "per-location override dialog — parked (PARKED-ITEMS.md #1)"; STOP callout over **Save** (never clicked); if the dialog does open on a production-like tenant, record it and update the guide |
| 16 | Slowly sweep from the **Active Locations** tab to the **AMOUNT** gear one last time | Recap state: one record, scoped by **Active Locations**, priced per site by the **Configure per location** gears | 3s | Callout ⑯ tying the tab and the gear together "one record, many sites"; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 5:56 (estimated narration total ~356s at ~145 wpm, pending render). If any unexpected dialog, the "Still there?" idle prompt, a "Couldn't load services" error, or changed data appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise. Never click **+ New Service**, **Delete Service**, or **Save**; steps 11–15 stay read-only and the per-location dialog is parked (PARKED-ITEMS.md #1).

## If Claude drives while you record

Steps 1–10 are read-only navigation and reading. Steps 11–15 open a service and Edit Service to document layout only; I stop at each screen, surface the **Configure per location** tooltip, and leave via **← Back** or **Cancel** — no field is changed, **Save** is never clicked, and the per-location dialog is parked (PARKED-ITEMS.md #1). Say "drive lesson 12-03" when you're rolling.
