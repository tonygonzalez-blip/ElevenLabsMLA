# WC-10-04 — System Alerts · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-10-04-system-alerts-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (8 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/support-tickets.html` (any IT & Support page with the full sidebar works).
- [ ] Left sidebar shows the **SUPPORT** group and the **AUDIT** group; **System Alerts** is visible between **Knowledge Base** and **Training Requests**.
- [ ] **Expected result is a 404.** On this build, clicking **System Alerts** loads a bare **Not Found** page (`support-alerts.html`, "HTTP Error 404. The requested resource is not found."). This is the intended captured state for steps 3–4. Do **not** re-roll on it and do not treat it as a recorder fault.
- [ ] This lesson is read-only. The only click is the **System Alerts** sidebar link (step 3). Do not click header tools, do not click any button on other IT & Support pages.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The one navigation in this lesson leaves the WashCentral shell entirely and lands on a raw server page; that is by design.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | None — open on **Support Tickets**; slowly move the cursor down the left sidebar across the **SUPPORT** group | Sidebar shows the **SUPPORT** group: **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**; below it the **AUDIT** group: **Audit Log**, **User Activity**, **Change History** | 3s | Callout ① bracketing the **SUPPORT** group; slow top-to-bottom cursor sweep (about 2s), no click |
| 2 | Hover **System Alerts** in the **SUPPORT** group (do not click yet) | **System Alerts** sits directly under **Knowledge Base**, styled as a standard sidebar link | 3s | Callout ② on **System Alerts**; zoom-in 150% on the three rows **Knowledge Base / System Alerts / Training Requests** (1.5s) |
| 3 | Click **System Alerts** | Browser navigates to `support-alerts.html`; the WashCentral header and sidebar disappear and a bare page begins to load | 2s | Callout ③ "opens support-alerts.html"; show the click animation; let the transition land fully before the hold |
| 4 | None — read the loaded page | A plain **Not Found** page: heading **Not Found** with one line beneath, **HTTP Error 404. The requested resource is not found.** No header, no sidebar, no styling | 4s | Callout ④ on the heading + error line; zoom-in 150% on "HTTP Error 404. The requested resource is not found." (2s); on-screen note "expected on this build — not a recorder fault" |
| 5 | None — hold on the 404 while the absence is narrated | Still the raw 404: no KPI band, no severity split, no alerts table anywhere on the page | 3s | Callout ⑤ "no counters · no severity split · no table"; hold steady on the empty page; lower-third card "alert content parked — TBD (new item)" |
| 6 | None — cut to a still or B-roll of **Command Center → Priority Intelligence** and the **ML Command Center** incident feed (captured separately, read-only) | Reference frames only: **Priority Intelligence** grouping issues by severity; the **ML Command Center** incident feed listing open incidents | 4s | Callout ⑥ "live signal while System Alerts is down"; use previously captured read-only stills of `command-center.html` and `ml-command-center.html`; do not click anything in the B-roll |
| 7 | None — return to the 404 frame; overlay the report action | Back on the **Not Found** page; on-screen the URL `support-alerts.html` and the copied error text are shown as the thing to report | 3s | Callout ⑦ "copy the URL + error text → report (WC-PB-14)"; reference PARKED-ITEMS.md #2 (LogicPOS 404s) as the same handling |
| 8 | None — brief end-card recap of the entry and the fallback | Recap state: **System Alerts** is a real **SUPPORT** entry that opens a 404 on this build; reach it from the sidebar, recognize **Not Found**, fall back to **Priority Intelligence** and the **ML Command Center**, report the outage | 3s | Callout ⑧ tying the entry, the 404, and the fallback together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 2:46 (narration estimate at ~145 wpm, pending render). The 404 in steps 3–5 is the intended footage. If any *other* unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. If a later build restores `support-alerts.html`, this shot list is superseded and the lesson is re-authored as a full alerts walk.

## If Claude drives while you record

I can execute the one live click (step 3) with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. The step-6 fallback frames are read-only stills of the Command Center and ML Command Center, captured separately. No form is opened and nothing is sent. Say "drive lesson 10-04" when you're rolling.
