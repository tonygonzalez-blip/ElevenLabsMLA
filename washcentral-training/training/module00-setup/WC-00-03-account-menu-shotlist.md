# WC-00-03 — The Account Menu and Personal Setup · Shot List v1.1

v1.1 · July 11, 2026 · Output: **WC-00-03-account-menu-v1.1.mp4** · MP4 (H.264 + stream-copied MP3 narration) · 30 fps · **1920×1080 native, no scaling** · captions burned + sidecar **WebVTT**.
**Verified against demo.washcentral.com on July 11, 2026.**

This shot list describes what the produced video shows. It is internally consistent with: internal-training use; an immutable website (no injected graphics, no forced states); immutable approved audio (the narration master is the clock); browser-capture in kiosk mode (no OS browser chrome / no URL bar on camera); and the real application behavior observed live.

## Production model (how this lesson is made)

- **Real interaction only.** Every action is a genuine CDP mouse move / press / release against the live page. Targets are resolved live and verified (visible, enabled, unobscured, stable) immediately before each action; the resulting application state is verified after. No DOM `.click()`, no injected elements, no storage writes, no forced menu. Config: `production/lessons/WC-00-03.json`. Engine: `production/engine.mjs`.
- **External graphics.** Cursor, click ring, numbered callouts ①–⑦, highlights, captions, camera punch-ins, completion card and fade are composited *outside* the application from the authoritative event log. Compositor: `production/compositor.mjs`.
- **The account menu is a click toggle** (press opens, press again closes; hover does nothing). Observed live July 11.
- **Menu continuity.** The menu is opened once (step 2) and stays genuinely open through the entire explanation and both theme toggles (steps 3–5); the camera frames it. It is dismissed with a real click on inert header space before it is genuinely re-opened for step 6.

## Shots

Format: Step, real action, expected + verified state, camera, callout/emphasis, caption cue.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on Command Center; move the cursor slowly to the top-right header and rest on the avatar | The **MG** avatar badge sits at the far right of the header, past Search ⌘K, All Locations▾, and Ask Shyne | 3s | Callout ① on the avatar; slow cursor travel; no click yet |
| 2 | Click the **MG** avatar | The account menu opens; its header shows the display name and tenant code | 3s | Callout ② on the menu header (name + tenant code); zoom-in 150% on the header for 1.5s |
| 3 | Cursor rests on the avatar; highlight-outline the open menu panel (do not click) | Menu lists **Profile**, **My Training**, **Notifications**, **Preferences**, **Dark Mode** toggle, **Help Center**, **Logout** | 4s | Callout ③ = amber highlight outline around the whole menu panel while the items are read; outline clears before step 4. Never click **Logout** |
| 4 | Click the **Dark Mode** toggle | The interface switches to the dark theme immediately | 3s | Callout ④ "view-only, your display"; hold on the theme change so the switch is obvious |
| 5 | Click **Dark Mode** again | The interface returns to the light theme | 2s | Callout ⑤ "toggles back, no data touched" |
| 6 | Open the avatar menu again and click **My Training** | The WashCentral Academy loads at `lms-home.html` | 3s | Callout ⑥ on the Academy landing; note the URL bar shows lms-home.html |
| 7 | Navigate back to the **Command Center** | Back on the Command Center; the session is unchanged | 2s | Callout ⑦ "one step back to the menu from anywhere"; end card / verification stamp; fade out. Do NOT click Logout on camera |

Never click **Logout** on camera. If any unexpected dialog, changed data, or idle "Still there?" prompt appears mid-take, the engine aborts with a nonzero status and the take is re-rolled.

## Known residual (documented, not hidden)

- None affecting truthfulness. The narration's "the whole interface drops to a dark theme" matches the real application (the entire theme changes); framing shows the genuine extent.
