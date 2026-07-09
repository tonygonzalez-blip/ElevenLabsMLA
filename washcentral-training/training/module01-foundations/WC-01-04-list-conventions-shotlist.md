# WC-01-04 — Interface conventions: lists · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-01-04-list-conventions-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/crm-customers.html`.
- [ ] Snagit: cursor highlight ON, click animation ON; on-screen keystroke display not needed (this lesson is mouse-only).
- [ ] Customer List fully loaded (KPI tiles show numbers, table rows visible, no open dropdown or modal). Location scope reads **All Locations** if visible.
- [ ] Do not click **Delete**, **+ Add Customer**, or **+ Issue Gift Card** at any point. The **Filters** panel may be opened and closed, but its contents are parked (not in the July 9 corpus): do not caption individual panel controls.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. This is a read-only tour; the data never changes.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on `CRM → Customers`; slowly pan the cursor top to bottom down the page | Customer List shows three stacked bands: KPI strip on top, three insight cards, then the **Customer List** card with the table | 3s | Callout ① bracketing the three bands ("every list is built this way"); slow vertical cursor pan (about 2s), no click |
| 2 | Sweep the cursor left to right across the four KPI tiles | Four tiles read **Total Customers** 2,418, **Active Members** 1,964, **At Risk** 146, **Prospects** 308 | 3s | Callout ② on the strip; zoom-in 130% across the four tiles (1.5s); do not click |
| 3 | Sweep across the three insight cards | **Member Growth** (24,816, +12.3%), **Plan Distribution** (Unlimited Plus 38% / Unlimited 27% / Pay Per Wash 22% / Premium Detail 13%), **Risk Profile** (81% LOW / 13% MED / 6% HIGH) | 3s | Callout ③ naming the three cards; slow left-to-right sweep (about 2s); read-only, no click |
| 4 | Point to the list-card eyebrow and title, then to the three top-right buttons | Eyebrow **CRM · MEMBER DATABASE**, title **Customer List**, subtitle "All customers"; buttons **Retention Log**, red **Delete**, green **+ Add Customer** | 3s | Callout ④ on the title; STOP callout (red "do not click" ring) covering **Delete** and **+ Add Customer**; hover only, never click |
| 5 | Hover the search box, then point to the **Search** button | Placeholder reads "Search by name, plate, email, location, or plan…"; green **Search** button to its right | 3s | Callout ⑤ on the placeholder; zoom-in 150% on the placeholder text (1.5s); do not type |
| 6 | Click **Filters** to open the panel, hold, then click **Filters** again (or click outside) to close | The **Filters** button shows a **0** active-filter badge; clicking opens a filter panel, then closes cleanly with the badge still **0** | 3s | Callout ⑥ on the **0** badge ("0 = nothing filtered"); caption the panel only as "filter panel (contents parked)"; do not label individual panel controls; confirm badge returns to 0 |
| 7 | Sweep across the six column headers, then point to the left checkbox column | Columns **CUSTOMER**, **LOCATION**, **PLAN**, **MEMBER SINCE**, **PLAN $/MO**, **STATUS**, each with a sort control; a select-all checkbox in the header, checkboxes down each row | 4s | Callout ⑦ on the sort controls and the checkbox column ("checkboxes feed Delete"); do not check any box; do not click a header if sorting would reorder on camera (hover only) |
| 8 | Point to one row's **PLAN** chip, then its **STATUS** chip | Plan chip (e.g. **Cleanest Ultra Unlimited** / **Cleanest Unlimited** / **No plan**) and a status chip, **Active** (green) or **Inactive** (grey) | 3s | Callout ⑧ on the two chips; zoom-in 150% on one row's chips (1.5s); no click |
| 9 | Scroll to the table footer; point to the rows-per-page selector, the page-number strip, and the ‹ › arrows | Footer shows a rows-per-page selector set to **25**, page buttons 1–5 then the final page **65,753**, and ‹ / › arrows | 4s | Callout ⑨ "1.6M+ records — page controls, not scroll"; hover the selector, do not change it; do not click a page number if it would navigate on camera (hover to show, optional single ›/‹ to demo, then return to page 1) |
| 10 | Click **Gift Cards** in the CRM sidebar | Gift Card List loads with the same three bands: KPI strip (**Total Gift Cards** / **Outstanding Balance** / **Active Cards** / **Redeemed / Zero Balance**) and insight cards **Issuance Trend** / **Balance Distribution** / **Card Status** | 3s | Callout ⑩ "same skeleton, different data"; travel to the sidebar (about 1.3s), single click; hold on the mirrored layout |
| 11 | Point to the search placeholder, the columns, then the footer selector | Placeholder "Search by card number, customer, location, or status…"; columns **CARD** / **CUSTOMER** / **LOCATION** / **BALANCE** / **STATUS** / **LAST USED**; footer **ROWS PER PAGE:** with **25 / 50 / 100** (set to 25) and ‹ › | 4s | Callout ⑪ on the rows-per-page options (25/50/100); if the table shows "Couldn't load records (Failed to fetch)", caption it as the data-fetch error state, not an empty list; note the tiles read "—" for the same reason |
| 12 | Slowly pan the cursor back up the Gift Cards page across all three bands | Recap state: KPI strip, insight cards, search + **Filters**, sortable columns with chips, pagination footer — the same anatomy on both lists | 3s | Callout ⑫ tying the parts together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:08 (estimated narration total ~248 s at 145 wpm, pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

When a live-driver session is restored, I can execute steps 1–12 with the timings above while you run Snagit (or any 1920×1080 MP4 recorder) on the window. No record is changed: **Delete**, **+ Add Customer**, and **+ Issue Gift Card** are never clicked, and the **Filters** panel is only opened and closed (its parked contents are not captioned). Say "drive lesson 01-04" when you're rolling.
