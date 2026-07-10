# WC-PB-05 — Settlement variance and batch reconciliation · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-PB-05-settlement-variance-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (11 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/payments-reconciliation.html`.
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this playbook is navigation and reading, no keyboard entry).
- [ ] This is a read-only playbook. Do NOT click **Resolve batch** (step 4), **+ New Record** (steps 7, 9), or **Export** (step 9). No refund is run and no batch is resolved from the demo tenant.
- [ ] Steps 6–9 (**Sales → Shifts** and **Sales → Payouts**) returned "Couldn't load records (Failed to fetch)" in the July 9 corpus. Record them live; if the live list still shows the fetch error, hold it and caption the parked-rows note rather than fabricate values.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. This is a diagnostic walk; the underlying data is never changed.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Payments Reconciliation**; sweep the cursor across the **Payment List** column headers | Breadcrumb **Transactions › Payments Reconciliation**; panel **Payment List** / **RECONCILIATION AND SETTLEMENTS**; columns **BATCH · LOCATION · EXPECTED · SETTLED · VARIANCE · STATUS** | 3s | Callout ① slow cursor sweep across the six headers; zoom-in 150% on **EXPECTED · SETTLED · VARIANCE** (1.5s); label "settled vs expected = the gap" |
| 2 | Point down the **STATUS** column, then to the **BT-10393** row | Rows read **BT-10392 · Fort Lauderdale · $18,420 · $18,420 · $0 · Balanced**, **BT-10393 · Miami North · $14,880 · $14,720 · $160 · Review**, **BT-10394 · Orlando Central · $16,210 · $16,210 · $0 · Balanced** | 4s | Callout ② zoom-in 150% on the **Review** chip and the **$160** variance on the **BT-10393** row; label "nonzero variance = Review = work this one"; do not click the row |
| 3 | Point to **SEARCH PAYMENTS** and the **Filters** / **Search** controls; hover a sort icon (do not type) | Search placeholder "Search by batch, location, status…"; **Filters** and **Search** present; sortable columns; rows-per-page **25 / 50 / 100**; footer **1–3 of 3** | 3s | Callout ③ on the search box and a column sort arrow; caption "search or sort on VARIANCE to surface the gaps"; no text entered |
| 4 | Point to the **Resolve batch** button at the top-right of the **Payment List** panel — do NOT click it | **Resolve batch** button is visible, top-right of the panel | 3s | Callout ④ STOP callout with a red "do not click" ring over **Resolve batch**; caption "locate only — resolve happens in production"; where the flow leads = TBD — parked |
| 5 | None — hold on the ledger while narration frames the two cross-checks | Static ledger; on-screen branch caption: "variance → drawer over/short (Shifts) · cash paid out (Payouts) · match on LOCATION, tie by SHIFT #" | 3s | Callout ⑤ a simple two-way branch graphic keyed to steps 6 and 8; note "no date column — join on LOCATION"; no navigation |
| 6 | Navigate **Sales → Shifts**; sweep the column headers | Breadcrumb **Transactions › Shifts**; panel **Shifts List**; **Total Shifts** KPI; columns **SHIFT # · LOCATION · TERMINAL · OPENED · CLOSED · OPENING DRAWER · CLOSING DRAWER · STATUS**; search "Search by location or shift #…" | 3s | Callout ⑥ slow cursor sweep across the eight headers; zoom-in on **OPENING DRAWER · CLOSING DRAWER** (1.5s); caption "drawer over/short lives here" |
| 7 | Point to the list body and the search box; do NOT click **+ New Record** | In the July 9 capture the body reads "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." and the KPI reads **— Total Shifts** | 3s | Callout ⑦ on the fetch-error line; STOP callout over **+ New Record**; caption "confirm the fetch before saying no shifts" (rows = TBD — parked); if the live list loads, filter to the batch LOCATION instead |
| 8 | Navigate **Sales → Payouts**; sweep the KPI strip and the **Payout List** headers | Breadcrumb **Transactions › Payouts**; KPIs **Total Payouts · Top Vendor (30d) · 2nd Vendor (30d) · Volume (30d)**; cards **Payout Trend · By Vendor · Payout Status**; panel **Payout List** / **ALL PAYOUTS**; columns **LOCATION · PAYOUT ID · SHIFT # · CASHIER · TERMINAL · VENDOR · AMOUNT**; search "Search by vendor or cashier..." | 4s | Callout ⑧ sweep the seven columns; zoom-in on **SHIFT #** and **AMOUNT** (1.5s); caption "payout ties to a drawer by SHIFT #" |
| 9 | Point to the **Payout Status** card and the list body; do NOT click **+ New Record** or **Export** | **Payout Status** card reads "Approval/dispute status isn't tracked in this POS system — Payouts records completed disbursements only."; body reads "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." with empty KPIs | 4s | Callout ⑨ on the **Payout Status** copy; STOP callout over **+ New Record** and **Export**; caption "completed disbursements only, no approval state" (rows = TBD — parked) |
| 10 | None — hold on Payouts (or return to the ledger) while narration lists the escalation contents | Static screen; on-screen checklist caption: "batch BT-10393 · Miami North · EXPECTED $14,880 / SETTLED $14,720 / VARIANCE $160 · Review · drawer or payout" | 3s | Callout ⑩ the escalation checklist; STOP reminder "never resolve the batch or run a refund from demo (parked #5)" |
| 11 | Navigate back to **Payments Reconciliation**; slow cursor sweep across the ledger | Recap state: read the ledger → find the **Review** batch by **STATUS** and **VARIANCE** → locate **Resolve batch** → cross-check **Shifts** and **Payouts** → escalate. Every screen was read-only | 3s | Callout ⑪ tying the flow together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:05 (see narration for the block-by-block total, pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Steps 6–9 are recorded against pages that returned a fetch error in the July 9 corpus; if a list is empty at record time, hold the fetch-error state and caption the parked-rows note rather than fabricate rows.

## If Claude drives while you record

Once the live tenant is reachable I can execute steps 1–11 with the timings above on request; you run Snagit (or any 1920×1080 MP4 recorder) on the window. No action row is ever triggered: **Resolve batch**, **+ New Record**, and **Export** are read-only holds, and no batch is resolved and no refund is run from demo. Say "drive playbook PB-5" when you're rolling.
