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

| Step | Real action (live target) | Verified state | Camera | Callout / emphasis | Caption source |
|---|---|---|---|---|---|
| 1 | Cursor enters from the right edge and settles beside the **MG** avatar (`#user-menu-btn`). No click. | Avatar present at far right of the header, past Search ⌘K, All Locations ▾, Ask Shyne. | Restrained top-right punch-in (~1.4×) that keeps Search, the location selector, Ask Shyne, and the avatar in frame. | ① on the avatar. Cursor parks beside it, not over it. | s01 phrases |
| 2 | Genuine press+release on the avatar during the "Click it." beat. | Menu opens; `menuOpen` verified. Menu header shows the display name and tenant code. | Close framing (~1.55×) on the name + tenant-code header for ~1.5 s. | ② on the menu header (clear of the text); click ring on the real press. | s02 phrases |
| 3 | No click. Cursor parked left of the menu. | Menu stays open (watched, held for the whole explanation). Items: Profile, My Training, Notifications, Preferences, Dark Mode, Help Center, Logout. | Medium framing (~1.34×) that keeps the whole menu readable and enough interface for the coming theme flip. | ③ establishes the menu; a moving highlight tracks the items in the exact spoken order (Profile → Preferences → Notifications → Help Center → My Training → Dark Mode → Logout). Logout is named, never hovered. | s03 phrases |
| 4 | Genuine press on the **Dark Mode** item. | `themeDark` verified (page background luminance drops). Menu stays open. | Held medium framing; the genuine dark theme is visible across the framed interface. | ④ near the toggle; click ring on the real press. | s04 phrases |
| 5 | Genuine press on the **Light Mode** item (the same control, now labelled Light Mode). | `themeLight` verified. Menu stays open. | Held medium framing. | ⑤ near the toggle; click ring. | s05 phrases |
| 6 | Real click on inert header space dismisses the menu (`menuClosed` verified), then a real avatar click re-opens it (`menuOpen`), then a real click on **My Training** navigates. | Academy page loads and stabilizes (`onAcademy` + `pageReady` + settle). The genuine loading interval is cut by holding the first stable Academy frame — no partial-render frames. | Held medium framing for the re-open, then pulls wide as the Academy appears. | ⑥ on the real **My Dashboard** Academy heading (no fabricated URL bar). My Training emphasized before the click. | s06 phrases |
| 7 | Genuine click on the in-app Command Center rail control (a real navigation action, not a hardcoded URL). | `onCommandCenter` + `pageReady` verified; loading cut. Same session, unchanged. | Wide, stable. | ⑦ / completion. Cursor and captions clear. | s07 phrases |
| End | — | Stable Command Center held. | Wide. | Captions, cursor emphasis, highlights cleared; **"Account Menu — Complete"** card with a small check; 8–12-frame visual fade. Visual continues ~0.4 s past the unchanged audio; the audio is not faded or modified. | — |

Never click **Logout** on camera. If any unexpected dialog, changed data, or idle "Still there?" prompt appears mid-take, the engine aborts with a nonzero status and the take is re-rolled.

## Known residual (documented, not hidden)

- None affecting truthfulness. The narration's "the whole interface drops to a dark theme" matches the real application (the entire theme changes); framing shows the genuine extent.
