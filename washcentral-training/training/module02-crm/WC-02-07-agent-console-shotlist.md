# WC-02-07 — Agent Console (Service Desk) · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-02-07-agent-console-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON (this lesson has no keystroke display; it is mouse-only).
- [ ] Confirm the Handoff Queue is empty before rolling (queue reads "0 waiting"). If a real handoff is present, stop: do not open, answer, or reassign it. Re-roll only once the queue is clear, or park the take.
- [ ] Do NOT change the presence selector at any point (step 2). Do NOT click **Ask Shyne** or send anything (PARKED-ITEMS.md #8).

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. This is a read-only anatomy walk; nothing on the page changes and no conversation is opened.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | In the left sidebar, under **SERVICE DESK**, click **Agent Console** | Three-pane workspace loads: header reads **Agent Console** under SERVICE DESK; **Handoff Queue** left, empty center console, **Customer** panel right | 3s | Callout ① bracketing the three panes left-to-right; slow reveal, let the layout settle |
| 2 | Move the cursor to the presence selector at top-right (left of **Ask Shyne**) — do NOT click it | Presence control reads **Offline** at capture; its states are **Available**, **Away**, **Busy**, **Offline** | 3s | Callout ② on the presence pill; **STOP** callout with a red "do not click / do not change" ring; hover only, never open or change it |
| 3 | Point to the **Handoff Queue** header and the counter line beneath it | Pane titled **Handoff Queue**; line reads "0 waiting", "avg 0:00", "0 high priority" | 3s | Callout ③ on the three counters; zoom-in 150% on the counter line (1.5s); no click |
| 4 | Point to the queue search box | Placeholder reads "Search name, phone, plan, reason…" | 3s | Callout ④ on the placeholder; zoom-in 150% on the search box (1.5s); do not type |
| 5 | Sweep the cursor across the assignment filters **Mine**, **Unassigned**, **Team** | Three buttons, each with a count (0 at capture); **Team** is the selected filter | 3s | Callout ⑤ on the three buttons; slow left-to-right sweep (about 2s); note **Team** is highlighted; do not click a different one |
| 6 | Sweep the cursor across the channel chips **All**, **Voice**, **SMS**, **Web** | Four chips, each with a count (0 at capture); **All** is selected | 3s | Callout ⑥ tagging **Voice / SMS / Web** as "the channels that feed the queue"; slow sweep (about 2s); do not change the chip |
| 7 | Open the sort selector (reads "Longest wait first"), reveal the options, then close it WITHOUT choosing | Options: "Longest wait first", "Priority first", "Most recent first"; a "showing 0" count sits beside it | 4s | Callout ⑦ on the three sort options; open, hold on the list (about 2s), close by clicking the selector again or Esc; leave it on "Longest wait first" |
| 8 | Point to the empty queue body | Queue shows "No matching handoffs." (nothing waiting) | 2s | Callout ⑧ "empty because 0 waiting"; no click |
| 9 | Point to the center console | Chat-bubble icon above "Select a handoff from the queue to open its console." | 3s | Callout ⑨ on the center empty state; note that selecting a queue row would load a conversation here; no row exists to select |
| 10 | Point to the **Customer** context panel on the right | Panel titled **Customer**; reads "No conversation selected." | 3s | Callout ⑩ on the **Customer** panel; zoom-in 150% on the "No conversation selected." line (1.5s) |
| 11 | Hold on the full three-pane view; no cursor action | Steady frame of the empty workspace while the narration explains that escalations from the AI Agent land in this queue (WC-12-08) | 4s | Callout ⑪ "escalated AI conversations land here"; document-over frame, no click; source is platform documentation, not on-screen text |
| 12 | Slowly sweep the cursor once across all three panes, then rest on the header | Recap frame: **Handoff Queue** (with its filters), center console, **Customer** panel, presence selector in the header | 3s | Callout ⑫ tying the three panes together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:30 (narration total ~210s, estimated pending render). If any unexpected dialog, a real handoff in the queue, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Never open, answer, or reassign a live handoff. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

I can execute steps 1–12 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. The presence selector is never changed (step 2 hovers only), the sort selector is opened and closed without a choice (step 7), and **Ask Shyne** is never clicked. Say "drive lesson 02-07" when you're rolling.
