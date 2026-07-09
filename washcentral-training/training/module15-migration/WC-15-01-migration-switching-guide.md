# WC-15-01 · WashAssist → WashCentral Migration (Migration Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

> Doc-sourced lesson. Every fact here comes from the **Migration FAQ**, attributed inline. There is no live platform walk. The recording is a title-card / document-over-narration piece, not a screen capture. When a client question falls outside the FAQ, park it and ask; never improvise a migration answer.

## Purpose

Give support techs the exact, correct answers for a client moving from WashAssist to WashCentral: what changes for the client, how a switch is performed, how it is reversed, and what happens to WashAssist afterward. These answers have to be verbatim-accurate because they affect a live client's access to their own system.

## Audience and prerequisites

Tech Support and Pre-Configuration/Onboarding technicians who field migration questions. You should already know the three-field sign-in (WC-00-02), since the most common migration question is about logging in.

## Source and rule

All statements below are attributed: *Migration note (source: Migration FAQ)*. You cannot observe any of this in the demo tenant, so never present it as observed platform behavior. If a client asks something the FAQ does not cover (pricing, contract terms, exact retirement dates), that is parked: say it is being confirmed and route the question, rather than guessing.

## What changes for the client (and what does not)

*Migration note (source: Migration FAQ):*

- To reach WashCentral, a client needs only the new WashCentral URL. It is provided directly or through an automatic redirect from WashAssist.
- **Credentials do not change.** Users are not re-created and data is not copied. WashCentral runs on the WashAssist data. A migrated client signs in with the same login they already had.
- New-client onboarding is unchanged. The Pre-Configuration team's standard process is the same as before; only the URL differs.

This is why a migrated client who says "I can't log in" is almost never a credentials problem. Their username, password, and tenant code carry over unchanged. Work the login playbook (PB-1) rather than resetting anything.

## How a switch is performed

*Migration note (source: Migration FAQ):* the switch method depends on the phase.

- **Beta phase:** submit a Jira ticket on the **CSI board** to Development, requesting the URL redirection. Development performs the redirect.
- **GA phase:** Tech Support performs the switch directly in the **Admin Portal**, with no Jira ticket.

After redirection, the client can no longer reach WashAssist unless the switch is reverted.

## How a switch is reversed

*Migration note (source: Migration FAQ):* reverting uses the same path that made the switch. In the beta phase, submit a Jira ticket on the **CSI board** to revert the redirection. Once reverted, the client is back on WashAssist. This is the answer to the common "we need to switch back for month-end" request during beta.

## What happens to WashAssist

*Migration note (source: Migration FAQ):* after a client moves, WashAssist enters **support mode** — critical fixes only — for a duration that is still to be determined, before it is eventually retired. The client's data remains available in WashCentral after WashAssist is retired, because WashCentral was already using the WashAssist data.

## Knowledge check

- A beta client wants to switch back to WashAssist for month-end. What is the exact process, and which board? (Answer: submit a Jira ticket on the CSI board to Development to revert the redirection; the same path that performed the switch reverses it.)
- A migrated client says their login stopped working. What is the first thing you rule out, and why? (Answer: it is not a credential migration issue. Credentials carry over unchanged; WashCentral uses WashAssist data. Work PB-1.)

## Related lessons

WC-00-02 Signing in · WC-15-02 Parity conversations · PB-1 Login failures.

**Verified against demo.washcentral.com on July 9, 2026.**
