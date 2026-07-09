# WC-02-04 — Gift Cards · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-02-04-gift-cards-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/crm-gift-cards.html`, or navigate live via `CRM → Gift Cards`.
- [ ] Snagit: cursor highlight ON, click animation ON, keystroke display ON for the search step only.
- [ ] Confirm the page has loaded in a healthy data state before rolling: the four KPI tiles show numbers (not "—") and the table lists card rows. In the July 9 capture the KPI tiles read "—" and the table read "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." If that error is still present, do not fake values: refresh; if it persists, record the structure only and keep the KPI figures and the balance-lookup values parked (TBD — PARKED-ITEMS new item; see guide steps 2, 10, 11).
- [ ] Do not click **Delete** or **+ Issue Gift Card** at any point (see step 7). Do not click **Search** on a real card number on camera unless a healthy data state is confirmed.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. This is a read-only tour; no record is created, edited, or deleted.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open **CRM** in the left rail, then click **Gift Cards** in the CRM sidebar | The **Gift Cards** page loads: small **CRM** label above the **Gift Cards** title; breadcrumb **CRM › Gift Cards**; three regions stacked (four KPI tiles, three insight panels, **Gift Card List**) | 3s | Callout ① bracketing the three page regions top to bottom; slow cursor settle on the **Gift Cards** sidebar item |
| 2 | Slowly sweep the cursor across the four KPI tiles | Tiles read **Total Gift Cards**, **Outstanding Balance**, **Active Cards**, **Redeemed / Zero Balance** | 3s | Callout ② bracketing all four labels; left-to-right sweep (about 2s). NOTE: July 9 capture showed values as "—"; record in a loaded state so live figures show, else hold on labels and flag values parked |
| 3 | Point to the **Issuance Trend** panel | Panel subtitled "Last 12 months"; rising line **Jan → Dec**; total **1,284** and **↑ +9.2%** at top right | 3s | Callout ③ on the total and trend; zoom-in 150% on **1,284 ↑ +9.2%** (1.5s) |
| 4 | Point to the **Balance Distribution** panel | Subtitled "Cards by remaining balance"; four bars: **$50 – $100** 34%, **$25 – $49** 28%, **$1 – $24** 24%, **$100+** 14% | 3s | Callout ④ on the four buckets; slow cursor sweep down the bars (about 2s) |
| 5 | Point to the **Card Status** panel | Subtitled "Portfolio health at a glance"; **66% ACTIVE**, **28% REDEEMED**, **6% EXPIRED**; stacked bar; **847 active** / **437 closed** beneath | 3s | Callout ⑤ tying the three status chips to the stacked bar; brief zoom on the counts (1.5s) |
| 6 | Move to the **Gift Card List** header | Small **CRM · GIFT CARDS** label; heading **Gift Card List**; subtitle **1,284 cards · $42,610 outstanding** | 3s | Callout ⑥ on the subtitle; zoom-in 150% on **1,284 cards · $42,610 outstanding** (1.5s) |
| 7 | Point to **Delete**, then to **+ Issue Gift Card** — do NOT click either | The two list actions sit at the top right of the panel: red **Delete**, teal **+ Issue Gift Card** | 4s | Callout ⑦ on both buttons; STOP callout with a red "do not click" ring covering **Delete** and **+ Issue Gift Card**; neither is ever clicked |
| 8 | Point to the search box, the **Filters** control, and the **Search** button | Search box placeholder "Search by card number, customer, location, or status…"; **Filters** (badge 0); **Search** button | 3s | Callout ⑧ on the placeholder; note the four things it matches on (card, customer, location, status) |
| 9 | Sweep the cursor across the table column headers | Six sortable columns: **CARD**, **CUSTOMER**, **LOCATION**, **BALANCE**, **STATUS**, **LAST USED**, with a select checkbox at the left | 4s | Callout ⑨ under **BALANCE**, **STATUS**, **LAST USED** ("these three answer most calls"); slow left-to-right sweep (about 2.5s) |
| 10 | Hold on the records area and the pager | If healthy: card rows list here. In the July 9 capture the area read "Couldn't load records (Failed to fetch). Check your connection to the AI agent service."; **ROWS PER PAGE** 25/50/100 and **‹ ›** pager below | 3s | Callout ⑩. If recording in the error state, caption "data-fetch error, not an empty portfolio" and keep row values parked; prefer a healthy re-capture. Do not fabricate rows |
| 11 | Type a card number into the search box and press **Search** (healthy state only) | The matching card row shows its **BALANCE**, **STATUS**, and **LAST USED** | 4s | Callout ⑪ on the matched row's three columns; show the keystrokes of the card number entry; zoom-in 150% on the **BALANCE / STATUS / LAST USED** cells. If in the error state, skip the live type and hold on the search box; example values TBD — parked |
| 12 | Slowly sweep back across the KPI band and the list | Recap state: KPI band = portfolio totals; three panels = issuance, balances, status; **Gift Card List** = where lookups end (search a card, read balance, status, last used) | 3s | Callout ⑫ tying the tour together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:00 (narration total estimated ~178s, pending render). If any unexpected dialog, error banner beyond the known records error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. The idle-timeout behavior is out of scope here (see WC-01-03).

## Operator directions (no live-driven take in this session)

This package is authored from the July 9 verification corpus; there is no live browser in this session, so the "do not click" steps above are recording-time directions for the operator. Record the page in a healthy data state so the KPI tiles and card rows show real figures. **Delete** and **+ Issue Gift Card** are never clicked (step 7). The step 11 balance lookup is recorded only if the records table is loading normally; if the "Couldn't load records" error persists, record the structure, caption the error state, and keep the KPI values and the example card row parked rather than inventing them.
