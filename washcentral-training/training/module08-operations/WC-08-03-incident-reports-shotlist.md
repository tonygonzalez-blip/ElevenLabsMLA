# WC-08-03 — Incident Reports · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-08-03-incident-reports-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/incident-reports.html`.
- [ ] Page loaded on **All Reports** with the five-row list visible and nothing open: no **+ New Report** form, no **Filters ▾** dropdown, no **Still there?** dialog.
- [ ] Snagit: cursor highlight ON, click animation ON. No keystroke display needed (this lesson is cursor-driven; no typing into the search box).
- [ ] Do not save or submit anything in **+ New Report** (see step 11). The form's type options are parked (not captured July 9); reveal them on camera, then leave via **Cancel**/**Close**.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then hold. The page underneath does not change until step 11, which opens and closes a form without saving.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **All Reports** (`incident-reports.html`); slowly sweep the cursor from the left sidebar **INCIDENT REPORTS → All Reports** up to the card header | Green page header reads **All Reports**; list card shows breadcrumb **OPERATIONS · INCIDENT REPORTS**, title **Incident Reports**, and **5 records**; five rows visible | 3s | Callout ① on the sidebar **All Reports** item + the **5 records** count; slow sidebar-to-header sweep (about 2s), no click |
| 2 | Sweep the cursor left-to-right across the table column headers | Five headers visible: **REPORT #**, **TYPE**, **LOCATION**, **DATE**, **STATUS** | 3s | Callout ② bracketing all five headers; slow left-to-right sweep (about 2s); do not click a header |
| 3 | Sweep the cursor down the **REPORT #** column | Column shows **IR-CI-0001**, **IR-EI-0001**, **IR-P-0001**, **IR-V-0001**, **IR-WED-0001** | 3s | Callout ③ on the **REPORT #** column; zoom-in 150% on the **IR-** prefixes (1.5s); slow vertical sweep down the five numbers |
| 4 | Sweep the cursor down the **TYPE** column, pausing on each chip | Five type chips: **Customer Injury**, **Employee Injury**, **Property Damage**, **Vehicle Damage**, **Wash Equipment Damage**, each aligned to its **IR-** code | 4s | Callout ④ pairing each chip with its code (CI, EI, P, V, WED); this is the memorize beat; hold 1s per chip; do not click a row |
| 5 | Point to the **STATUS** column | Four rows read **Open**; the **Vehicle Damage** row (**IR-V-0001**) reads **Under Review** | 3s | Callout ⑤ on the **Under Review** chip vs the **Open** chips; brief zoom on the two status styles (1.5s) |
| 6 | Point to the **LOCATION** column | Column shows **MLAS** on four rows and **SSNB** on the **Wash Equipment Damage** row | 3s | Callout ⑥ on the site codes; note they are location tags, not editable here; do not click |
| 7 | Point to the **DATE** column | Dates read year-first (`YYYY-MM-DD`), e.g. **2026-06-28** … **2026-07-01** | 2s | Callout ⑦ on the date format; brief zoom on one date cell (1.5s) |
| 8 | Hover the search box above the table (do not type) | Search box shows placeholder **Search incident reports…** | 3s | Callout ⑧ on the placeholder; zoom-in 150% on the box (1.5s); no typing in this take |
| 9 | Hover the **Filters ▾** button, then the **Search** button (do not open Filters) | **Filters ▾** and **Search** buttons sit to the right of the search box | 2s | Callout ⑨ naming both buttons; **Filters ▾** is not opened here (options out of scope); hover only |
| 10 | Point to the pagination footer at the bottom of the card | Footer reads **Showing 1–5 of 5 records** with the page control **‹ 1 ›** | 2s | Callout ⑩ on the counter + **‹ 1 ›**; note all five fit on one page |
| 11 | Click **+ New Report** (top-right of the card) to reveal the report-type choice, then leave via **Cancel**/**Close** — do NOT save/submit | A new-report form opens and begins by asking for the report **type**; on **Cancel**/**Close** it dismisses and returns to the list unchanged | 3s | Callout ⑪ on the type choice; **STOP** callout with a red "do not click" ring over any save/submit control in the form (label not captured — parked); the type options themselves are **TBD — parked** (new item, see structured return); record opening then cancelling only |
| 12 | Slowly sweep the cursor back across the list, ending on the header | Recap state: five columns, five report types by **IR-** code, **Open** vs **Under Review**, and **+ New Report** as the starting point | 3s | Callout ⑫ tying the five types to their codes; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:45 (narration estimated at ~145 wpm; final runtime confirmed after render). If any unexpected dialog, error, changed data, or a **Still there?** timeout prompt appears: stop, note it, dismiss off-camera with **Stay Logged In**, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

I can execute steps 1–12 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No record is filed — step 11 opens **+ New Report** only to reveal the type choice and leaves via **Cancel**/**Close**, and nothing is saved. Say "drive lesson 08-03" when you're rolling.
