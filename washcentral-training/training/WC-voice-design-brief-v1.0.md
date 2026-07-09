# WashCentral Narration Voice — Design Brief v1.2

July 8, 2026 · Rebuilt against the official ElevenLabs Voice Design prompting guide (docs → ElevenCreative → Voices → Voice Design), after two failed candidates.

**Why the last voice failed, in guide terms:** (1) the prompt didn't explicitly ask for *varied intonation*, so the model produced one melody and kept it, the "tone never changes" problem; (2) the preview text was calm narration, and per the guide the preview text **is the performance script**, so the voice inherits its delivery from how that text is written; (3) the prompt structure was freeform instead of the documented format. All three are fixed below.

**Voice goal (unchanged):** professional, enthusiastic, not dry, clear, concise, deliberate, and engaging. The idea is an expert who makes training genuinely interesting, with a touch of salesmanship.

---

## Prompt A — primary (paste as the voice description)

> Native American English, neutral US dialect. Male, mid-30s. Excellent quality. Persona: charismatic software trainer and product expert. Emotion: enthusiastic, warm, confident. Bright, resonant tenor with naturally varied intonation — it rises with genuine excitement when he reveals something new, then settles low and steady to land the key point. Conversational, deliberate pacing with a musical rhythm: quick through familiar ground, slowing for emphasis, never monotone; crisp diction and a slightly salesy, magnetic edge, like he's showing a friend his favorite tool.

**Guidance Scale: 30–35%.** (Per the guide, lower values favor performance and audio quality over literal prompt adherence, which is right for us, since delivery matters more than nailing a niche identity.) **Loudness: default.**

## Prompt B — alternate (female)

> Native American English, neutral US dialect. Female, early 30s. Excellent quality. Persona: dynamic product educator. Emotion: upbeat, engaging, self-assured. Warm, vibrant mezzo with expressive, constantly shifting melody — bright emphasis on discoveries, a knowing, confident settle on conclusions. Natural conversational pace that speeds up with excitement and slows to underline what matters; crisp articulation, infectious energy, and a touch of showmanship.

**Guidance Scale: 30–35%.**

## Prompt C — alternate (keynote presenter)

> Native American English, neutral US dialect. Male, early 40s. Studio quality. Persona: keynote demo presenter. Emotion: excited, persuasive, commanding. Rich, dynamic baritone with wide expressive range — he builds anticipation before a reveal, punches key words, drops to an intimate, confiding tone for asides, then lifts again with contagious enthusiasm. Deliberate, rhythmic pacing with purposeful pauses; polished, slightly salesy delivery that makes every feature sound like a headline.

**Guidance Scale: ~35%.**

---

## Text to preview (paste exactly — this is the performance script)

Per the guide, longer preview text gives more stable, more expressive results, and the model performs the voice *as this text asks to be performed*. This one is written to force dynamic range: excitement, a confiding aside, a slow landing, and a build:

> Okay — THIS is the part I've been waiting to show you. One dashboard… every location you run. Watch what happens when I click right here. Boom. Revenue, today. Members, live. Every car, counted the second it rolls through the tunnel. And see that little alert in the corner? That's the platform catching a problem BEFORE your phone rings. It gets better. Remember the reports you used to build by hand, every single Monday? Gone. Automated. Delivered before your coffee's done. Honestly… once you've run a wash this way, you will never go back. So let's dive in — because there is a LOT to see.

(Capitalized words cue emphasis, ellipses cue breath, and the short-long sentence mix cues rhythm. Don't swap this for calm text, because a calm script will design a calm voice.)

## Guide rules honored (so future edits don't regress)

- Language + dialect stated first; structured as: language → gender/age → quality → Persona → Emotion → timbre/pacing/delivery.
- Quality descriptor from the documented ladder ("Excellent quality" / "Studio quality").
- Intonation variation described explicitly (the guide's dynamic examples describe *how* pitch moves, not just a mood word).
- No FX words (no "reverb/echo/phone/tape"); "accent" used only for actual dialect, "intonation/emphasis" used for delivery.
- Preview text matches the persona and is long enough to stabilize expression.

## Selection checklist (pass = all six)

1. **Melody moves** — across the preview, at least three clearly different pitch contours. One tune repeated = fail.
2. **Punch** — "Boom." and "Gone. Automated." land as beats with energy behind them.
3. **The aside works** — "Honestly… once you've run a wash this way" drops to a confiding register, distinct from the excited lines.
4. **Credible, not cheesy** — salesy edge reads as belief in the product; "TV pitchman" = fail.
5. **Deliberate** — quick lines stay articulate; nothing smears; it could still honor a 1-second post-click buffer.
6. **Ten-minute test** — imagine a full lesson: engaging without exhausting. Constant maximum energy = fail.

## Production note (fixes "tone never changes" at generation time too)

Voice design is only half the fix. The other half is generation: for final lessons I'll generate narration **block-by-block** (one TTS call per script step, assembled in the editor against the shot list) instead of one long call. Generating per block gives each step its own fresh prosody, prevents the flattening that creeps into long single takes, and eliminates the timeout issue. The per-step files inherit the shot-list numbering (`…-s03.mp3`).

## After saving

Save the winner (suggest **`WashCentral v3`**), tell me the exact name, and I'll pull its ID, regenerate the WC-01-01 pilot block-by-block, and queue the A/B.
