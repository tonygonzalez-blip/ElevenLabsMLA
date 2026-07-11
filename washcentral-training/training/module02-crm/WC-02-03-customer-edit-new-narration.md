# WC-02-03 — Edit Customer & New Customer forms · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 11 blocks `WC-02-03-s01.mp3`…`WC-02-03-s11.mp3` + joined `WC-02-03-full-narration-v1.0.mp3` (148.48s ≈ 2:28). Step duration = audio + 0.4 s. Per-step render seconds: s01 14.11 · s02 13.48 · s03 15.8 · s04 14.52 · s05 13.71 · s06 11.15 · s07 13.95 · s08 8.83 · s09 11.81 · s10 12.51 · s11 14.21.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-03-s01.mp3` … `WC-02-03-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a form means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- CRM → "C-R-M"
- Customer 360 → "Customer three-sixty"
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Two forms, one template: the Customer Edit form (opened from a profile) and the blank + Add Customer form (opened from the list). Both are exited by Cancel.
- Tenant safety: **Save Changes** is never clicked. Every form is left via **Cancel**. No field is typed into on camera.
- Demo quirk: the Edit form loads a fixed sample record regardless of the row opened from (project discrepancy log). Do not narrate the sample customer's name or any personal values.
- The blank-form title and empty-state details, and the Record Information section contents, were not captured this pass (TBD — parked); do not describe them beyond "empty" and "a Record Information link".

## Timed script

[00:00 | Step 1 — Open Edit Customer]
Open any customer's profile and click Edit Customer. <break time="1.4s" /> The same record opens ready to change, every field now live. Two buttons wait in the corner. One saves your work, one backs out. Today, we only back out.

[00:18 | Step 2 — Identity band]
Before anything else, read the band across the top. <break time="1.2s" /> The name, the plan, and a few status chips ride along from the profile. It is your proof of whose record you are in, so you never edit the wrong person by accident.

[00:37 | Step 3 — Edit tabs]
Now the tabs. <break time="1.0s" /> Six here, not the nine on the profile. The view is built for reading a customer; this form is built for changing one, so the layout shifts. Messaging turns into Communication, Notes into Comments, and the read-only summaries fall away.

[00:57 | Step 4 — Personal & Business]
Start on Contact, the first group. <break time="1.4s" /> Name, company, gender, date of birth, plus two switches for house account and signature on file. This is the identity block, the details that decide how the customer shows up everywhere else.

[01:16 | Step 5 — Address]
Next, the address fields. <break time="1.2s" /> Street, city, state, zip, and country, with a second line for an apartment or suite. Keep these clean and the customer's mail, receipts, and location reports all line up.

[01:34 | Step 6 — Phone & Email]
Below that, phone and email. <break time="1.2s" /> Phone, mobile, fax, and email address. When a member says their texts or receipts are going nowhere, this is the block you check first.

[01:50 | Step 7 — Cancel out of Edit]
We changed nothing, so click Cancel. <break time="1.4s" /> The form closes and drops you right back on the profile, untouched. That Save button would have written straight to a live account, so while you are learning, Cancel is the only way out.

_[Director: do not touch any field; click Cancel, never Save Changes.]_

[02:11 | Step 8 — Back to the list]
Head back to the customer list. <break time="1.2s" /> Same database you started in. Up top sit the counts, and along the toolbar, the button that starts a brand new record.

[02:26 | Step 9 — Add Customer]
Click Add Customer. <break time="1.4s" /> The form looks familiar because it is the same one, just empty. Same tabs, same fields, every box blank and waiting. This is where a walk-in becomes a member.

[02:43 | Step 10 — Blank form matches]
Scan down the empty form. <break time="1.2s" /> Personal details, address, phone and email, all in the same order as the edit screen. Learn the layout once and you know both, whether you are fixing a record or building one.

[03:00 | Step 11 — Cancel out of New]
We are only touring, so click Cancel again. <break time="1.4s" /> No record is created, and nothing is left behind. Two forms, one template, and the same safe habit both times: read everything, change nothing, leave by Cancel.

_[Director: click Cancel; no field entry, no Save.]_

_(Estimated narration total: ~3:19 at 145 wpm pending render. Re-estimate from measured per-step seconds after generation.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the mandated `TBD — parked` string in the scope notes.
- Tenant safety honored throughout: no field is typed, **Save Changes** is never clicked, and every form is exited by **Cancel**. The fixed-sample-record demo quirk is not narrated by name or value.
- Status set to **READY FOR GENERATION**: no ElevenLabs key in this session; audio renders later, then timestamps get refreshed from measured seconds.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
