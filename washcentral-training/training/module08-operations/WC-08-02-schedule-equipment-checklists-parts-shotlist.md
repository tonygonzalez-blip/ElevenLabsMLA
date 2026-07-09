# WC-08-02 — Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-08-02-schedule-equipment-checklists-parts-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/maint-issues.html` (the sibling page that loads, so the MAINTENANCE sidebar is on screen for step 1).
- [ ] Snagit: cursor highlight ON, click animation ON. No keystroke display needed (this lesson is mouse navigation only).
- [ ] **State check before rolling:** on July 9 the four pages in this tour (`maint-schedule.html`, `maint-equipment.html`, `maint-checklist.html`, `maint-parts.html`) returned **Not Found** ("HTTP Error 404. The requested resource is not found."). If they still return Not Found, this recording documents that state as written. **If any page now loads real content, STOP: do not record, re-verify the page, and update the guide, shot list, and narration first.** Do not narrate KPIs or columns that are not on screen.
- [ ] Nothing is open on the Issues page: no modal, no "Still there?" idle dialog. If the idle dialog appears at any point, dismiss it off-camera with **Stay Logged In** and re-roll the affected segment.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. This is a list-level menu tour; the four target pages open to a Not Found screen in the current corpus, and the recording documents that honestly.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Maintenance Issues**; slowly sweep the cursor down the **MAINTENANCE** sidebar group | Under the **Operations** module the **MAINTENANCE** group shows five entries in order: **Issues**, **Maintenance Schedule**, **Equipment Registry**, **Checklists**, **Parts & Supplies**. Below it the sidebar continues into **INCIDENT REPORTS** (**All Reports**) and **SCHEDULER** (**Appointments** …) | 3s | Callout ① bracketing the five MAINTENANCE entries; label **Issues** as "WC-08-01" and the four below as "this lesson"; slow top-to-bottom cursor sweep (about 2.5s), no click |
| 2 | Click **Maintenance Schedule** in the sidebar | The page returns **Not Found**: heading "Not Found", body "HTTP Error 404. The requested resource is not found." No KPI band, cards, columns, or rows | 3s | Callout ② "menu entry is real; page not loaded in this corpus"; hold on the 404 text; do NOT invent any on-page content |
| 3 | Click **Equipment Registry** in the sidebar (use the browser Back button or re-open `maint-issues.html` first if the 404 page has no sidebar) | Same **Not Found** state: "HTTP Error 404. The requested resource is not found." | 3s | Callout ③ "asset registry, parked until it loads"; keep the hold identical to step 2 so the sequence reads as a set |
| 4 | Click **Checklists** in the sidebar | Same **Not Found** state | 3s | Callout ④ "standard inspection lists, parked"; note on screen "not the Hardware Lube Checklists" |
| 5 | Click **Parts & Supplies** in the sidebar | Same **Not Found** state | 3s | Callout ⑤ "maintenance parts — separate from Inventory Chemicals & Supplies"; hold on the 404 text |
| 6 | Return to **Maintenance Issues** (`maint-issues.html`) and slowly sweep the cursor back down the four covered entries | Recap state: the four entries sit under **Operations → MAINTENANCE** beside **Issues**; each opened to Not Found today, so their KPIs and columns are re-verified once they load | 3s | Callout ⑥ tying the four together with the question each answers (schedule / asset / inspection / parts); end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Note on navigation between steps: a browser 404 page has no WashCentral chrome, so after each Not Found screen return to the sidebar by pressing the browser **Back** button (or by re-opening `maint-issues.html`), then click the next entry. Keep these returns off the held frames; trim them in the edit so the tour reads as sidebar → 404 → sidebar.

Estimated runtime: about 3:40 (rendered narration total pending; see the narration script's estimated per-step timings). If any unexpected dialog, error other than the documented 404, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. If any of the four pages now loads real content, do not record: re-verify and re-author first.

## If Claude drives while you record

In this remote session there is no live browser, so these steps are authored from the July 9 corpus (page digests plus 1920×1080 screenshots). When a live tenant is available, I can execute steps 1–6 in the browser with the timings above while you run Snagit on the window. Nothing here clicks a destructive or send control; the four pages currently open to a read-only Not Found screen. Say "drive lesson 08-02" when a live tenant and the built pages are ready.
