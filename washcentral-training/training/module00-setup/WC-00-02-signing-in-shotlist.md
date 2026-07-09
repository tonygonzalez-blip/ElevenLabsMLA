# WC-00-02 — Signing in · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-00-02-signing-in-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (10 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] **Signed out** for the first segment. Start URL: `demo.washcentral.com`, which redirects to `/login.html`. All three fields **empty**; **Remember me** in its default (checked) state; no dialog open.
- [ ] Snagit: cursor highlight ON, click animation ON, on-screen keystroke display **OFF** (no keystrokes are shown; credentials are never typed on camera).
- [ ] **Credentials never on camera.** Steps 1–7 record the empty sign-in page. Step 8 is the cut: stop recording before typing anything, sign in off camera, then resume recording on the Command Center for steps 9–10.
- [ ] If the demo's zero-size **Quick Access · mag** affordance is visible for any reason, keep it out of the taught flow and do not click it (it is a demo artifact, documented in the guide Notes).
- [ ] Two-factor / **Two-Factor Auth** is out of scope and parked; do not trigger or show it.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The sign-in page is a two-panel card; do not type into any field on camera.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Segment A opens on `/login.html` (already redirected from `demo.washcentral.com`); hold the full page still | Two-panel sign-in card: tinted marketing panel left, **Welcome back** form right; all three fields empty | 3s | Callout ① bracketing the two panels; no cursor movement for the first beat, then a slow settle; do not touch a field |
| 2 | Slowly sweep the cursor down the left marketing panel: logo → headline → the three cards → the version tag | Logo with "Powered by Micrologic."; headline "One platform for your entire car wash operation."; cards **Command Center**, **CRM & Members**, **Operational Intelligence**; `v26.0628.001` bottom corner | 3s | Callout ② naming the three cards; slow top-to-bottom sweep (about 2.5s); brief zoom 130% on the version tag (1.2s); no click |
| 3 | Move the cursor to the right and sweep down the **Welcome back** form: heading → the three fields → **Remember me** / **Forgot password?** → **Sign In** | Form shows "Sign in to your WashCentral account.", three stacked fields, the **Remember me** checkbox, the **Forgot password?** link, and the **Sign In** button | 3s | Callout ③ "three fields, not two"; slow vertical sweep (about 2s); do not click |
| 4 | Hover the **Email** field label and its placeholder (do NOT type) | Field labeled **Email**, placeholder `you@company.com`, empty | 3s | Callout ④ on the label + placeholder; zoom-in 150% on the empty field (1.5s); on-screen note "accepts a username too"; field stays empty |
| 5 | Hover the **Password** field, then click the **Show password** eye once, pause, click it again (field is empty, so nothing is revealed) | Empty **Password** field with masked styling; the **Show password** eye icon flips to a hide state on the first click and back on the second | 3s | Callout ⑤ on the eye control; show the icon flipping both ways; because the field is empty, no characters appear; do not type |
| 6 | Hover the **Tenant / Customer Code** field label (do NOT type) | Third field labeled **Tenant / Customer Code**, empty | 4s | Callout ⑥ "the third field: routes you to the right company"; zoom-in 150% on the label (1.5s); hold longer here, this is the lesson's key point; field stays empty |
| 7 | Hover **Remember me**, then the **Forgot password?** link (do NOT click either) | **Remember me** shown checked (default); **Forgot password?** link to its right | 3s | Callout ⑦ on the pair; note "Remember me is on by default"; do not open the reset panel; do not toggle the checkbox |
| 8 | **Cut point.** Stop the Segment A recording here. Off camera: enter the three administrator-issued values and click **Sign In**. Then start the Segment B recording on the Command Center | (Off camera) sign-in succeeds and the browser moves to `/command-center.html` | — | No footage of typing or of **Sign In** being clicked. STOP callout on this row in the edit timeline: "credentials off camera. Hard cut, resume on Command Center." Trim any frame that shows a filled field |
| 9 | Segment B opens already on `/command-center.html`; hold the page, then move the cursor to the top-right avatar (do NOT open the menu) | Page title "Command Center — WashCentral"; breadcrumb `Dashboard › Command Center`; avatar showing initials **MG** at the top-right of the header | 3s | Callout ⑨ on the avatar "you're signed in"; zoom-in 150% on the avatar initials (1.5s); do not open the account menu (that is WC-00-03) |
| 10 | Hold the Command Center for the recap beat; no interaction | Recap state: signed in via **Email**, **Password**, and **Tenant / Customer Code**, landed on the Command Center | 3s | Callout ⑩ tying the three fields to the landing; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:03 (narration total estimated ~183s at ~145 wpm, pending render). If any unexpected dialog, error, a two-factor prompt, or a "Still there?" timeout appears: stop, note it, dismiss off camera, resolve or park, then re-record the segment, and do not improvise. The account menu and session-timeout behavior are out of scope here (WC-00-03 and WC-01-03).

## If Claude drives while you record

Segment B (steps 9–10) can be driven live on the Command Center with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Credentials are never entered on camera: Segment A (steps 1–7) records the empty sign-in page, the sign-in itself happens off camera at step 8, and recording resumes for the landing. Say "drive lesson 00-02" when you're rolling.
