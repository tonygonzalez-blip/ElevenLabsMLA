# WC-00-02 — Signing in · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (10 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later once the ElevenLabs key is available (not set in this session). 10 blocks `WC-00-02-s01.mp3`…`WC-00-02-s10.mp3` + joined `WC-00-02-full-narration-v1.0.mp3`. Estimated total ~182.7 s / ~3:03 at ~145 wpm; timestamps below are estimates pending render. Estimated per-step seconds: s01 16.3 · s02 19.6 · s03 17.3 · s04 17.1 · s05 17.5 · s06 21.3 · s07 16.3 · s08 20.0 · s09 17.9 · s10 19.4.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-00-02-s01.mp3` … `WC-00-02-s10.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a control means for the technician, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Micrologic → "My-kro-loj-ik" (on-screen in "Powered by Micrologic"; not spoken in this script, listed for future edits)
- Tenant / Customer Code → read plainly, "tenant, customer code"
- CRM → "C-R-M" (on-screen card; not spoken in this script)
- ALPR → "A-L-P-R" · POS → "P-O-S" · Shyne → "Shine"

### Scope notes (non-spoken)

- Credentials are never spoken, typed on camera, or written. All three values are described as issued by the administrator.
- The demo's **Quick Access · mag** button is a demo artifact and is not narrated as part of the flow.
- Two-factor / **Two-Factor Auth** is out of scope and parked (corpus shows the panel in page structure only, not a rendered sign-in). Not depicted or narrated.
- Sign-in records in two segments: the sign-in-page anatomy (steps 1–7, empty fields) and the Command Center landing (steps 9–10). The credential entry (step 8) happens off camera between the two segments.
- The account menu is WC-00-03; session timeouts and the "Still there?" dialog are WC-01-03. Neither is narrated here.

## Timed script

[00:00 | Step 1 — Open the sign-in page]
This is where every shift starts. <break time="1.4s" /> Send your browser to the WashCentral address and it lands here. The left side sells the platform. The right side is the part you actually use: the sign-in form.

[00:16 | Step 2 — Marketing panel]
Take the left panel in once, then leave it. <break time="1.0s" /> A logo, a short pitch, and three cards previewing the platform's main areas. In the corner, a version tag. Report a problem with this page and that number tells support which build you were on.

[00:36 | Step 3 — Welcome back form]
Now the form. <break time="1.2s" /> Top to bottom: three fields, a keep-me-signed-in checkbox, a reset link, and the Sign In button. Most logins want two things. This one wants three, and that third field is the point of the lesson.

[00:53 | Step 4 — Email field]
First field, Email. <break time="1.4s" /> The placeholder shows an email address, but a plain username works just as well, so enter whatever your administrator gave you. And enter it off camera. Your login values never belong on a recording.

[01:10 | Step 5 — Password and Show password eye]
Second field, your password. <break time="1.4s" /> The little eye reveals what you typed, then hides it again. Reach for it when a login fails and you suspect a typo. Just make sure no one is looking over your shoulder first.

[01:28 | Step 6 — Tenant / Customer Code]
Now the third field, the Tenant slash Customer Code. <break time="1.4s" /> This is the one most software never asks for. One WashCentral install runs many separate car wash companies, and this code routes you to yours. That is why sign-in takes three values, not two. Enter the code your administrator issued.

_[Director: hover the field only; do not type. This is the lesson's key beat, so hold it.]_

[01:49 | Step 7 — Remember me and Forgot password?]
Two more controls below. <break time="1.0s" /> Remember me is already ticked, so leave it on only at your own desk. Forgot password starts a reset and emails you a link. Neither one is part of signing in today.

[02:05 | Step 8 — Sign In]
Three values in, click Sign In. <break time="1.4s" /> WashCentral checks them, and when they match, it lets you through. In the recording, this happens off camera. We stop before anything is typed, sign in away from the lens, and pick back up on the far side.

_[Director: hard cut here. Credentials are entered off camera; stop recording before any field is filled, then resume on the Command Center.]_

[02:25 | Step 9 — Land on the Command Center]
And you're in. <break time="1.4s" /> This is the Command Center, your home base. The quiet proof it worked sits top-right: your initials in the avatar. That badge is where your account menu lives, and we open it in the next lesson.

[02:43 | Step 10 — Recap]
So, three fields. <break time="0.8s" /> An account, a password, and the tenant code that points you at the right company. All three come from your administrator, and none of them ever go on camera. Get them right and this screen is where you land every time.

_(Estimated narration total: ~182.7 s ≈ 03:03 at ~145 wpm. Timestamps are estimates pending render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the field names, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- No credentials anywhere: the three sign-in values are described as issued by the administrator, entered off camera at step 8, never spoken or shown. The demo **Quick Access · mag** button and the parked two-factor step are not narrated.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
