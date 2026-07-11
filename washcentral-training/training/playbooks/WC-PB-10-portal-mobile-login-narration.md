# WC-PB-10 — Portal/mobile "can't log in / can't see feature" · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 11 blocks `WC-PB-10-s01.mp3`…`WC-PB-10-s11.mp3` + joined `WC-PB-10-full-narration-v1.0.mp3` (214.9s ≈ 3:35). Step duration = audio + 0.4 s. Per-step render seconds: s01 17.71 · s02 17.87 · s03 18.36 · s04 17.63 · s05 23.07 · s06 20.85 · s07 18.6 · s08 15.49 · s09 19.72 · s10 21.79 · s11 19.41.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-10-s01.mp3` … `WC-PB-10-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 3:58 (238 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the login settings are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"
- OTP → "O-T-P" · SMS → "S-M-S" · API → "A-P-I" · SSL → "S-S-L" · URL → "U-R-L"
- iOS → "eye O S" · Android → spoken naturally
- 4.0.5 → "four point oh five" · 4.2.1 → "four point two one" · v2.4.1 → "version two point four point one"
- portalv2.wash.me/MLASALE → never spoken; shown on screen only ("the portal address")

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Publish Changes**, **Save Changes**, **Export**, or **+ New Record**. **Preview Portal** (step 3) is opened read-only to reproduce the member view, then closed.
- The **Session & Limits** and **Allowed Domains** tabs (step 6), the **Features & Modules** subpage (step 4), and the **Mobile App Preview** (step 9) were not captured in the July 9 corpus. They are named on camera but never opened; contents TBD — parked per the guide Notes.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Portal hub and the Live chip]
Start in Settings, under Customer Portal. <break time="1.4s" /> The hub names the portal and, right beside it, one chip does the heavy lifting: Live. If that chip isn't showing, nobody signs in and the ticket is portal-wide. It is, so keep going. And leave Publish Changes alone.

_[Director: do not click Publish Changes.]_

[00:22 | Step 2 — Portal KPI strip]
Now the five tiles across the top. <break time="1.2s" /> Eighteen hundred forty registered members. Two hundred forty-seven logins today. That second number is your triage: members are getting in right now, so this ticket is probably one account. Zero logins on a live portal means the opposite.

[00:43 | Step 3 — URL and Preview Portal]
Next, the address. Click Copy and compare it to the link the member is using. <break time="1.4s" /> A stale URL is the most common can't-log-in there is. Then open Preview Portal and try to reproduce what they see. Portal Health backs you up: API connected, certificate valid. The backend is fine.

_[Director: Preview Portal is read-only; close it after the read. Do not click Publish Changes.]_

[01:05 | Step 4 — The two hub cards]
Back on the hub, two cards settle most of these tickets. <break time="1.2s" /> Access and Security holds the login rules: phone and email, OTP on, thirty-minute sessions. Features and Modules reads seven of nine enabled. For a missing feature, that line is usually the whole answer. Two modules are just off.

_[Director: do not open the Features & Modules subpage; which two modules are off is TBD — parked.]_

[01:27 | Step 5 — Login methods]
Open Access and Security and read the login methods. <break time="1.4s" /> Phone, yes. Email, yes. Membership number, no. Guest access, no. So the member typing their membership number at sign-in isn't broken, and neither is the portal. That method is switched off. Match how they log in against what's actually enabled.

_[Director: stay on the Authentication tab; Session & Limits and Allowed Domains are TBD — parked.]_

[01:49 | Step 6 — OTP and password policy]
Stay on this tab for the quiet culprit: OTP. <break time="1.2s" /> A one-time code is required on every login, delivered by SMS, and it dies after ten minutes. A wrong or dead mobile number means the code never lands. The password rules sit just below: eight characters minimum, nothing fancier required.

_[Director: do not click Save Changes.]_

[02:11 | Step 7 — Recent Portal Activity]
Back on the hub, read Recent Portal Activity. <break time="1.4s" /> One line is worth the whole feed: three failed login attempts on one account, this morning, from mobile. That names the member, counts the tries, stamps the time, and tells you which channel to test. They're reaching the login and getting rejected.

[02:33 | Step 8 — Mobile App Users]
For a mobile-app complaint, switch to Digital and open Mobile App Users. <break time="1.4s" /> Forty-eight hundred twenty users, more than half on iOS. The list below carries the three columns that explain most app tickets: app version, notifications, and status.

[02:51 | Step 9 — The member's row]
Find the member's row. <break time="1.2s" /> Tom Brown is running four point oh five on Android while others are on four point two one. An out-of-date build explains a login that fails or a feature that never appears. Notifications off explains I never get alerts. And status confirms the account itself is active.

_[Director: do not click Export or + New Record. Mobile App Preview is named only; its location is TBD — parked.]_

[03:14 | Step 10 — Package the escalation]
Now write it up. <break time="1.0s" /> Portal live, on the right address. Which login method they used against what's enabled. OTP required, delivered by SMS. The failed-login line with its account, count, time, and channel. For mobile, the app version, notifications, and status. Flipping any of those switches happens in production, never here.

[03:37 | Step 11 — Recap]
That's the flow. <break time="0.8s" /> Read the Live chip and the logins before you blame one account. Check the login methods and OTP when sign-in fails. Read the activity feed for proof. Check the member's app row when it's mobile. Then route it, with nothing published and nothing saved.

_(Estimated total: about 3:58 / 238 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (settings spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: **Portal Overview** (Live chip, KPI strip, hub cards, Portal Health, Recent Portal Activity), **Access & Security → Authentication** (login methods, OTP, password policy), and **Digital → Mobile App Users** are grounded in the July 9 digests and screenshots. The **Session & Limits** / **Allowed Domains** tabs, the **Features & Modules** subpage, and the **Mobile App Preview** are named but not opened; contents TBD — parked per the guide Notes.
- Nothing is published, saved, exported, or created anywhere; **Preview Portal** is the only non-navigation click and it is a read-only view of the member sign-in.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
