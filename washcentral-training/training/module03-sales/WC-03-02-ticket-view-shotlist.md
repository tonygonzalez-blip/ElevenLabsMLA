# WC-03-02 — Ticket View · Snagit Shot List (operator-ready)

v1.1 · July 11, 2026 · Target output: **WC-03-02-ticket-view-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/sales-transactions.html` (the **Tickets** list under **TRANSACTIONS**).
- [ ] Pick the ticket to open BEFORE rolling: filter the list to one real ticket that has a cashier, terminal, and shift populated, so the **Main** tab reads cleanly on camera. Do not record the filtering.
- [ ] Snagit: cursor highlight ON, click animation ON. Keystroke display only needed at step 12 (copy URL).
- [ ] Address bar visible for steps 2 and 12 so the `?ticket=<id>` deep link is legible on camera.
- [ ] Do NOT click the red **Refund** button at any point (step 4). Refund execution is parked (PARKED-ITEMS.md #5). The **Details**, **Payments**, and **Notes** tabs are still not opened in this lesson — their contents were captured July 11 and are documented in the guide, but the locked narration (s06) does not cover opening them.
- [ ] AUDIO NOTE — narration s06 says those three tabs "still need a live capture", which is no longer true after July 11; the block is flagged for re-render. Also confirm on a live load that the header data stays consistent: on July 11 the same `?ticket=1501159` deep link showed two different headers across loads (see guide notes) — anchor on the **ID** field and re-roll if the header changes mid-take.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The ticket view opens as a full page; **Back to Tickets** returns to the list without changing the ticket.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on the **Tickets** list; slowly sweep the cursor across the column headers | **Tickets** list under **TRANSACTIONS**; columns **LOCATION · TICKET # · DATE/TIME · TOTAL · STATUS · TENDER TYPE · CUSTOMER** | 3s | Callout ① along the column header row; slow left-to-right sweep (about 2s); do not click yet |
| 2 | Click the pre-chosen ticket row | That ticket's page opens at `sales-ticket-view.html?ticket=<id>`; the address bar now shows the `?ticket=<id>` on the end | 3s | Callout ② on the address bar; zoom-in 150% on the `?ticket=<id>` tail of the URL (1.5s); cursor travels to the row (about 1.3s) before the click |
| 3 | Point to the header title block | Header shows the ticket number as the page title, **Sales · Ticket** above it, and the ticket id, location, and timestamp beneath | 3s | Callout ③ bracketing the header block; slow cursor from title down to the id/location/timestamp line |
| 4 | Point to the top-right buttons **← Back to Tickets** and the red **Refund** — do NOT click **Refund** | **← Back to Tickets** and a red **Refund** button are visible top-right | 3s | Callout ④ on the pair; **STOP** callout covering the red **Refund** button with a red "do not click" ring; hold on it; Refund is never clicked (PARKED-ITEMS.md #5) |
| 5 | Sweep the cursor across the metric band under the header | Four figures: **Ticket Total**, **Payments**, **Status**, **Payment Type** | 3s | Callout ⑤ across all four tiles; slow sweep (about 2s); no click |
| 6 | Point to the tab row | Five tabs: **Main**, **Details**, **Payments**, **Refunds**, **Notes**; **Main** is active/default | 3s | Callout ⑥ along the tab row; label **Main** "default"; label **Details / Payments / Notes** "documented in the guide — not opened this lesson"; do not click Details/Payments/Notes. AUDIO NOTE: s06's "still need a live capture" line is stale (captured July 11) — re-render before assembly |
| 7 | On **Main**, point to the **TICKET INFORMATION** group | Group **TICKET INFORMATION**: **ID**, **TICKET NUMBER**, **DATE/TIME IN**, **LOCATION**, **STATUS**, **PAYMENT TYPE** | 3s | Callout ⑦ on the group header; slow cursor down the six fields (about 2s) |
| 8 | Point to the **FINANCIAL SUMMARY** group | Group **FINANCIAL SUMMARY**: **TOTAL**, **TAXES**, **TENDERED**, **CHANGE DUE**, **REVERSED**, **HOUSE ACCOUNT**, **HOUSE ACCOUNT NAME** | 4s | Callout ⑧ on the group; brief zoom 150% on **REVERSED** (1.5s) — "did money already come back?"; slow sweep the seven fields |
| 9 | Point to the **STAFF & EQUIPMENT** group, then the **CUSTOMER & VEHICLE** group | **STAFF & EQUIPMENT**: **CASHIER**, **CASHIER CODE**, **CASHIER TERMINAL**, **GREETER NAME**, **GREETER TERMINAL**, **SHIFT**. **CUSTOMER & VEHICLE**: **CUSTOMER**, **COMPANY**, **VEHICLE**, **VEHICLE PLATE**, **VEHICLE STATE** | 4s | Callout ⑨ on both group headers in turn; slow cursor across each; zoom 150% on **CASHIER TERMINAL** + **SHIFT** (1.5s) |
| 10 | Click the **Refunds** tab | **REFUND HISTORY** table with columns **DATE · REFUND ID · AMOUNT · REASON · PROCESSED BY · STATUS** (confirmed July 11); empty state reads "No refunds recorded for this ticket." | 4s | Callout ⑩ on the column header row; hold on the empty-state line; cursor travels to the tab (about 1.3s) before the click |
| 11 | Hold on the page; confirm there is no **Edit Ticket** and no **+ Add Refund** control | No **Edit Ticket** button, no "+ Add Refund" control anywhere on the page | 3s | Callout ⑪ "no Edit Ticket · no +Add Refund · no 90-day note"; refund permission is per Security Level (WC-12-06); 90-day window parked (PARKED-ITEMS.md #7) |
| 12 | Copy the URL from the address bar (Ctrl+L, Ctrl+C), then click **← Back to Tickets** | The copied address ends in `?ticket=<id>` (July 11 confirmed pattern: `?ticket=1501159`); **← Back to Tickets** returns to the **Tickets** list with the ticket unchanged | 3s | Callout ⑫ on the address bar as it is copied; show the Ctrl+L / Ctrl+C keystrokes; end card / verification stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 4:55 (rendered narration total pending; see the narration script's per-step estimates). If any unexpected dialog, error, changed data, refund confirmation prompt, or a "Still there?" timeout appears: stop, note it, dismiss off-camera (**No, Keep** / **Cancel** / **Stay Logged In**), resolve or park, then re-record the segment. Do not improvise, and never click **Refund**.

## If Claude drives while you record

The Ticket View page and all five tabs were captured credentialed on July 11 (`?ticket=1501159`); the expected states above match that capture. I can execute steps 1–12 live with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. **Refund** is never triggered (step 4 stops at the guardrail), and the **Details**, **Payments**, and **Notes** tabs are left unopened until their contents are captured. Say "drive lesson 03-02" when you're rolling.
