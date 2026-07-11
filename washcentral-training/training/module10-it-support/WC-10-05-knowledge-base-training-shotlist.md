# WC-10-05 — Knowledge Base and Training Requests · Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-10-05-knowledge-base-training-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (9 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Recording status (read before rolling)

In the July 9, 2026 verification corpus, both interior pages returned "Not Found" / "HTTP Error 404. The requested resource is not found." and did not render. Two consequences for the operator:

- **Steps 1, 2, 5, 8, 9 are recordable now:** they are navigation and header shots, grounded in the corpus.
- **Steps 3 and 6 (opening each page) are deferred.** Do not fabricate a Knowledge Base or Training Requests screen. If, in the live tenant, the page renders, capture it and this shot list gets a v1.1 update with the real KPI band, filters, and columns. If it still returns 404, record the not-found state as shown and use the parked title card noted in the Edit column. Do not record a full lesson walk of page contents that were never observed.

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start in the **IT & Support** module (`support.html`).
- [ ] Snagit: cursor highlight ON, click animation ON; keystroke display ON for step 8 (Ctrl+K).
- [ ] Left navigation fully visible: the **SUPPORT** group and the **AUDIT** group both in frame.
- [ ] Nothing open: no command palette, no **Ask Shyne** modal, no "Still there?" dialog.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on the **IT & Support** module; slowly sweep the cursor down the left navigation | Rail shows a **SUPPORT** group (**ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**) and an **AUDIT** group below; breadcrumb reads **Support ›** | 3s | Callout ① bracketing the **SUPPORT** group; slow top-to-bottom cursor sweep (about 2s); no click |
| 2 | Point to **Knowledge Base** in the **SUPPORT** group (do not click yet) | **Knowledge Base** sits between **Help Desk (Zoho)** and **System Alerts** | 3s | Callout ② on the **Knowledge Base** entry; zoom-in 150% on the nav label (1.5s) |
| 3 | Click **Knowledge Base** | **Deferred / parked.** As verified July 9, the page returned "Not Found" / "HTTP Error 404. The requested resource is not found." and did not render | 3s | STOP callout: do not stage a fake library. Record the 404 state as-is, then cut to parked title card "Knowledge Base — page not found on July 9, 2026 · contents TBD, pending live re-verification". If the live tenant renders the page, re-shoot and capture the real KPI band, category filters, and list columns for v1.1 |
| 4 | None — hold on the parked card while narration explains the page's role | Parked title card visible; no live UI claimed | 3s | Keep the card plain; no invented metrics, categories, columns, or article titles on screen |
| 5 | Return to the left navigation; point to **Training Requests** in the **SUPPORT** group | **Training Requests** sits just below **System Alerts** | 3s | Callout ⑤ on the **Training Requests** entry; zoom-in 150% on the nav label (1.5s) |
| 6 | Click **Training Requests** | **Deferred / parked.** As verified July 9, the page returned "Not Found" / "HTTP Error 404. The requested resource is not found." and did not render | 3s | STOP callout: do not stage a fake pipeline. Record the 404 state as-is, then cut to parked title card "Training Requests — page not found on July 9, 2026 · contents TBD, pending live re-verification". Re-shoot for v1.1 if the live page renders (capture KPIs, TYPE/CATEGORY splits, and columns) |
| 7 | None — hold on the parked card while narration explains the page's role | Parked title card visible; no live UI claimed | 3s | Keep the card plain; no invented fields or values on screen |
| 8 | Point to the global header: **Search ⌘K**, then **Ask Shyne**, next to the **MG** account button; press **Ctrl+K** to show the palette opens, then **Esc** to close | Header tools stay top-right on every IT & Support page; **Ctrl+K** opens the command palette, **Esc** closes it with nothing changed | 3s | Callout ⑧ "fallback when a page is down"; show the Ctrl+K and Esc keystrokes; do NOT type a query, do NOT open **Ask Shyne**; palette is opened and closed only |
| 9 | None — slowly sweep the cursor back across **Knowledge Base** and **Training Requests** in the nav | Recap state: both destinations live under **SUPPORT** in **IT & Support**; both returned 404 on July 9, so contents are parked pending live re-verification | 3s | Callout ⑨ tying the two entries together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:15 once narration is rendered (script total estimated ~4:15 at ~145 wpm plus breaks and tails, pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise a page that did not render.

## If Claude drives while you record

I can execute the recordable steps (1, 2, 5, 8, 9) live with the timings above on request; you run Snagit (or any 1920×1080 MP4 recorder) on the window. Steps 3 and 6 stay parked: I will open each nav entry so you can capture whatever the live tenant returns (a real page or the 404), but I will not stage page contents that were never observed. Say "drive lesson 10-05" when you are ready, and confirm first whether the two pages now render in your tenant.
