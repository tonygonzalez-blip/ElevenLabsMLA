# WC-12-08 — Customer Portal & AI Agent · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (20 steps, two parts: Part 1 = steps 1–9, Part 2 = steps 10–20).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 20 blocks `WC-12-08-s01.mp3`…`WC-12-08-s20.mp3` + joined `WC-12-08-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; timestamps below are estimates at ~145 wpm plus break time, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-08-s01.mp3` … `WC-12-08-s20.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- OTP → "O-T-P"
- AI → "A-I"
- API → "A-P-I"
- CRM → "C-R-M"
- SMS → "S-M-S"
- Shyne → "Shine"

### Scope notes (non-spoken)

- Two-part lesson. Part 1 (steps 1–9) walks the **Customer Portal** hub and its four subpages; Part 2 (steps 10–20) walks the **AI Agent** overview and its six subpages. Read-only throughout: **Publish Changes**, **Save Changes**, **Save & Publish**, **Enable All**/**Disable All**/**Reset to Defaults**, **Send Test Message**, **Send Test SMS**, **Place Test Call**, **Claim Next**, and **Export** are never clicked, and no test prompt is ever sent to the agent (PARKED-ITEMS.md #8).
- Tenant quirks narrated deliberately: **Configuration** renders as an unsaved form for a different demo brand, and **Knowledge Base** and **Conversations** render an empty tenant. The narration reads structure, not values, on those pages; the live saved values are parked (see the guide's notes).
- The hub card's **ENABLED MODULES 7 of 9** versus the subpage tile's **Modules Enabled 9 / 10** mismatch is spoken deliberately: the viewer is told the subpage number wins and to flag the mismatch.
- The gateway/customer names on screen (**Atlas Car Wash**, **Express Wash Concepts Demo**) are not read aloud; the narration says "a different demo brand" where the quirk matters.

## Timed script

### Part 1 — Customer Portal

[00:00 | Step 1 — Portal Overview hub]
Two Settings areas face the customer directly, and this lesson reads both. In the left rail, open Customer Portal, then Portal Overview. <break time="1.4s" /> This hub is the portal your client's members log into, summarized on one screen: its status, its address, and a version stamp. It's live. Treat it that way.

_[Director: the STOP ring sits on **Publish Changes** from the first frame; it is never clicked anywhere in this lesson.]_

[00:23 | Step 2 — Portal KPI band]
Read the tile band. <break time="1.2s" /> Registered members, logins today, average session, uptime, and the share on mobile. When someone reports the portal is slow or quiet, this row is your first read. Healthy numbers here move the problem somewhere else.

[00:41 | Step 3 — Four configuration cards]
Four cards sit below, one per configuration area. <break time="1.2s" /> Branding, features, access, and content. Each card previews its own headline values, like the login method and whether one time passwords are required. You can answer most portal questions from these cards without opening anything.

[01:00 | Step 4 — Activity feed & Portal Health]
Below the cards, two panels. <break time="1.4s" /> Recent activity lists what members did in the last day, including a security line: three failed login attempts from one address. Portal Health confirms the A-P-I connection, the certificate, and when the portal was last published. And note the button top right. Publish Changes pushes edits live to real customers. Support never clicks it.

[01:26 | Step 5 — Branding & Appearance]
Open Branding and Appearance. <break time="1.4s" /> Three tabs. Visual Identity holds the portal's name, tagline, logo, and header style, with a live preview underneath. Everything a customer sees before signing in gets styled here. There's a Save and Publish button at the bottom. We read; we never save.

[01:47 | Step 6 — Features & Modules]
Next, Features and Modules. <break time="1.4s" /> Every portal capability is a section here, from membership plans to gift cards to vehicle management, each with its own sub options. One catch: this page says nine of ten modules enabled, while the hub card said seven of nine. The two disagree. When you need the real number, read it here, and flag the mismatch.

[02:13 | Step 7 — Access & Security]
Open Access and Security, the page for login trouble. <break time="1.4s" /> The Authentication tab shows how members can sign in: phone yes, email yes, membership number no, and no guest access. Below that, the one time password rules and the password policy. A customer locked out of the portal? Start on this page, every time.

[02:36 | Step 8 — Content & Messaging]
Then Content and Messaging. <break time="1.2s" /> Welcome text, footer, contact details, and the FAQ list. Plain language a confused customer reads first. If a member quotes the portal saying something odd, this is where that wording lives.

[02:52 | Step 9 — Part 1 recap]
That's the portal. <break time="1.2s" /> For a login complaint, check two settings, the login method and whether O-T-P is required, then look for failed attempts in the activity feed. Back to Portal Overview, and remember the rule: nothing gets published, nothing gets saved.

_[Part 1 ends here. Hold a beat at the boundary; Part 2 opens at step 10 with the AI Agent overview.]_

### Part 2 — AI Agent

[03:10 | Step 10 — AI Agent Overview]
Part two. In the left rail, open A-I Agent, then Overview. <break time="1.4s" /> This is the automated agent answering your client's customers on web chat, text, and phone. The header says it's live on three channels. Same posture as the portal: everything here is read only.

[03:30 | Step 11 — Agent KPI band]
Read the metric band. <break time="1.2s" /> Conversations this month, average handle time, a satisfaction score. The number to watch is containment rate, the share of conversations the agent finished without a person. Seventy eight percent here. When that slides, humans are picking up the slack.

[03:50 | Step 12 — Channel cards]
Three channel cards. <break time="1.2s" /> Web chat carries the most volume and contains the most. Text runs through a provisioned number with quiet hours on. Voice is newer, still marked beta, with recording consent enabled. Each card shows its own contained percentage, so you can spot which channel is struggling.

[04:11 | Step 13 — Agent capabilities]
Now the capabilities panel. <break time="1.2s" /> Six actions the agent can take on its own, from looking up an account to processing a small refund to escalating to a human. They run through secure platform A-P-Is, and each one can be switched off individually under Configuration.

[04:30 | Step 14 — Configuration]
Open Configuration. <break time="1.4s" /> Status tiles up top, including a refund cap of fifty dollars, then five tabs covering identity, channels, tools, safety, and the model. One caution: in the captured tenant this page renders as an unsaved form for a different demo brand. Read the structure, trust nothing as the live values, and never save.

[04:54 | Step 15 — Knowledge Base]
Next, Knowledge Base. <break time="1.2s" /> These are the documents the agent searches before it answers, so it quotes policy instead of guessing. Tiles track articles, indexing, and the last sync. In this capture the table sits empty, which is a tenant quirk, not the real agent.

[05:13 | Step 16 — Channels & Deployment]
Open Channels and Deployment, and keep your hands off the buttons. <break time="1.4s" /> Each channel block carries a test control: send a test message, send a test text, place a test call. All three reach a real channel. None of them get clicked, ever, in the demo tenant. Read the uptime and latency, and move on.

_[Director: STOP rings on **Send Test Message**, **Send Test SMS**, and **Place Test Call**; no test prompt is sent (PARKED-ITEMS.md #8).]_

[05:36 | Step 17 — Conversations]
Then Conversations. <break time="1.2s" /> The transcript log: who talked to the agent, on which channel, about what, and how it ended. This is your audit trail when a client asks what the agent actually said. Empty in this capture, and the Export control stays untouched.

[05:54 | Step 18 — Escalations]
Escalations is the page to remember. <break time="1.4s" /> When the agent hits a limit, a refund over the cap, an angry customer, a direct ask for a manager, or a stalled conversation, it hands off here. Each row shows the reason, the priority, and who claimed it. Don't click Claim Next; that assigns a live escalation to you.

[06:19 | Step 19 — Analytics]
Last, Analytics. <break time="1.2s" /> The monthly review view: volume, containment, escalation rate, satisfaction, and what the agent costs to run, per channel and per conversation. When a client asks whether the agent is worth it, this page is the answer. Export stays alone here too.

[06:38 | Step 20 — Recap & Close Settings]
Two areas, one habit. <break time="1.0s" /> The portal hub answers login complaints through the login method and O-T-P settings, and the agent hands humans a conversation through the Escalations queue, which mirrors into the C-R-M Agent Console. You read everything and published nothing. Close Settings, and you're done.

_(Estimated narration total: ~418s ≈ 06:58 at ~145 wpm plus break time; with the shot list's holds the full take runs about 7:25, split at the step 9/10 boundary into Part 1 ≈ 3:25 and Part 2 ≈ 4:00. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: **Publish Changes** is never clicked and is called out as off-limits in step 4; no **Save**, no bulk toggle, no test send (**Send Test Message** / **Send Test SMS** / **Place Test Call**), no **Claim Next**, no **Export**. No test prompt is sent to the agent (PARKED-ITEMS.md #8).
- Tenant quirks narrated as quirks, not facts: the Configuration form's unsaved state and the empty Knowledge Base and Conversations tables are attributed to the capture, matching the guide's notes; live saved values remain parked.
- Two-part structure marked at the step 9/10 boundary in both this script and the shot list.
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
