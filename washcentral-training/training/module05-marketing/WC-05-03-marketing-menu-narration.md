# WC-05-03 — The rest of Marketing · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-05-03-s01.mp3`…`WC-05-03-s13.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; timestamps below are estimates at ~145 wpm plus break time, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-05-03-s01.mp3` … `WC-05-03-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and the new page land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what each page is for on a technician's day, not every label already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- SmartLinks → "Smart Links"
- CVR → "C-V-R" · ROAS → "R-O-A-S"
- SMS → "S-M-S" · RCS → "R-C-S"
- CTA → "C-T-A" · TCPA → "T-C-P-A" · KPI → "K-P-I"
- Meta and Google → said as normal words
- Shyne → "Shine" · ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- This is a menu tour of the Marketing sidebar past Campaigns and Automation (those are WC-05-01 and WC-05-02). One page per block.
- The demo tenant forbids sending. Do not depict composing, sending, syncing, or publishing on any page. Every **+ New**, **Export**, **Sync**, and **Save & Publish** stays unclicked.
- **Referral Program**, **Mobile Content Blocks**, and **Push Campaigns** open inside **Settings**; the breadcrumb confirms it.

## Timed script

[00:00 | Step 1 — Marketing sidebar]
Open Marketing and look down the left rail. <break time="1.4s" /> Campaigns and Automation you already know. Everything under them is what we map today. Think of this list as a lookup table: a client asks a question, and one of these pages holds the answer. By the end you'll go straight to the right one.

[00:20 | Step 2 — SmartLinks]
First, SmartLinks. <break time="1.4s" /> These are trackable links you drop into an email or a social post. When a manager asks whether that link actually brought cars through the bay, you don't guess. The page counts clicks, conversions, and the revenue each link earned.

[00:42 | Step 3 — Customer Segments]
Next, Customer Segments. <break time="1.4s" /> A segment is just a saved audience, a group like win-back or VIP that a campaign gets pointed at. So when someone asks who a message went to, the trail ends here. Every campaign starts from a list on this page.

[01:04 | Step 4 — Offers & Promotions]
Offers and Promotions. <break time="1.4s" /> This is where the discounts live. A member says their promo code bounced? Open the offer, check the dates it's valid, and check its status. Nine times out of ten the code simply expired.

[01:24 | Step 5 — Email Templates]
Email Templates. <break time="1.4s" /> These are the reusable email layouts the campaigns and the automated lifecycle flows draw from. They're sorted by moment: cancellation, refund, plan change, retention. When a client asks what the cancellation email says, you read it right here, without touching send.

[01:46 | Step 6 — Paid Media]
Paid Media, and notice the draft tag on it. <break time="1.4s" /> This one matches your members to ad accounts on Meta and Google, then ties the ad spend back to actual washes. It's powerful and it's still being built. _Read the tabs, but do not click Sync Now or a row Sync. Those push audience data out to the ad platforms._

[02:10 | Step 7 — Deliverability]
Now the page every technician should bookmark: Deliverability. <break time="1.4s" /> Before you ever write "the platform didn't send," come here. Inbox rate, bounces, spam complaints, and the suppression list. If an address was suppressed or bounced, the send didn't fail. The system did exactly what it was told.

[02:36 | Step 8 — Referral Program]
Click Referral Program, and watch the breadcrumb. <break time="1.4s" /> It jumps you into Settings. This is refer-a-friend: the reward the referrer gets, the reward the friend gets, and how many referrals each program has driven. Same menu, but it lives on the Settings side.

[02:58 | Step 9 — SMS Templates]
SMS Templates. <break time="1.4s" /> The text-message versions. Watch the character and segment counts here, because a text that runs long splits into two segments and costs more to send. Short and tight isn't a style choice on S-M-S. It's the budget.

[03:18 | Step 10 — RCS Templates]
RCS Templates, the richer cousin of texting. <break time="1.4s" /> Cards, carousels, images. On a newer phone the member sees the full experience. On an older one it quietly drops back to a plain text, and the fallback column tells you how often that safety net is in place.

[03:40 | Step 11 — Mobile Content Blocks]
Mobile Content Blocks, back on the Settings side. <break time="1.4s" /> This is what a customer sees inside the app: the promo banner, the card rail, the announcements. It's a live editor, so treat it gently. _Read the layout. Do not click Save and Publish._

[04:02 | Step 12 — Push Campaigns]
Last one, Push Campaigns. <break time="1.4s" /> This is where the app's push notifications get written and scheduled, with a preview of how they'll look on a lock screen. It's a compose-and-send surface, so we only name it. _Do not start a new campaign and do not publish. Read it and move on._

[04:24 | Step 13 — Recap]
That's the whole menu. <break time="1.0s" /> Links to SmartLinks, audiences to Segments, discounts to Offers, wording to the template pages, ad matching to Paid Media, and inbox health to Deliverability. Learn the map now, so when a client's win-back texts go quiet in one town, you already know the two pages that explain it before anyone files a bug.

_(Estimated total: about 4:50 at ~145 wpm, pending render. Timestamps above are estimates; re-measure per block with ffprobe after generation and set step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the required version line, both quoted verbatim.
- No sending depicted: every page is toured from its list or dashboard view. Paid Media **Sync**, Mobile Content Blocks **Save & Publish**, and Push Campaigns **+ New campaign** / **Save & Publish** are read, never clicked (director notes call this out at steps 6, 11, and 12).
- Status **READY FOR GENERATION** — audio not rendered in this session (no ElevenLabs key set). Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
