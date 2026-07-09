# WC-00-02 · Signing in (Setup)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson gets you into WashCentral. You will learn the sign-in page: the marketing panel on the left, the **Welcome back** form on the right, and the three fields the form asks for. Two of those are the usual pair, an account and a password. The third, the **Tenant / Customer Code**, is the one most software never asks for, and knowing why it exists is half of what makes login troubleshooting quick later. By the end you can read the page, sign in with the three values your administrator gave you, and confirm you landed on the Command Center.

## Audience and prerequisites

Internal Micrologic technicians opening WashCentral for the first time. You need a working browser from WC-00-01 (workstation prerequisites) and the three sign-in values issued by your administrator. No prior WashCentral experience is assumed. Signing out and the account menu belong to WC-00-03. Session timeouts and the "Still there?" idle prompt belong to WC-01-03, so they are not covered here.

Credentials are never shown on camera, spoken, or written into any file. Throughout this lesson the three values are described masked, as "issued by your administrator."

## Navigation path

Point your browser at `demo.washcentral.com`. The address redirects to the sign-in page, `/login.html`. After a successful sign-in you land on the Command Center, `/command-center.html`.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. Open your browser and go to `demo.washcentral.com`. **Expected:** the address redirects to the sign-in page ("WashCentral — Sign In"). The page splits in two: a tinted marketing panel on the left, and the **Welcome back** sign-in form on the right.
2. Look over the marketing panel on the left. **Expected:** the WashCentral logo sits at the top with "Powered by Micrologic." beneath it, followed by the headline "One platform for your entire car wash operation." and three feature cards that name the platform's main areas: **Command Center**, **CRM & Members**, and **Operational Intelligence**. A version tag, `v26.0628.001`, sits at the bottom corner. Nothing here is interactive. It is the product's front door.
3. Move to the **Welcome back** form on the right. **Expected:** below the heading is the line "Sign in to your WashCentral account.", then three fields stacked top to bottom, a **Remember me** checkbox, a **Forgot password?** link, and the **Sign In** button. The thing to notice is that the form asks for three values, not two.
4. Read the first field, **Email**. **Expected:** the label reads **Email** and the placeholder reads `you@company.com`. Enter the account your administrator issued you. Despite the label and the email-style placeholder, the field also accepts a plain username, so type whatever value you were given. (Do not type it while recording; enter it off camera.)
5. Read the second field, **Password**, and click the **Show password** eye at its right edge. **Expected:** the password entry hides its characters as dots. Clicking the **Show password** eye reveals the characters and switches the icon to a hide state; clicking it again masks them again. Use it to catch a typo when a sign-in fails, and only reveal the value when no one can see your screen.
6. Read the third field, **Tenant / Customer Code**. **Expected:** the label reads **Tenant / Customer Code**. This is the value most other software never asks for. WashCentral is multi-tenant: one installation hosts many separate car-wash companies, and this code routes your sign-in to the right company's data. That is why the form needs three values. Enter the code your administrator issued.
7. Look below the fields at **Remember me** and **Forgot password?**. **Expected:** **Remember me** is selected by default and keeps you signed in on this browser, so leave it on only for your own machine. **Forgot password?** opens a reset panel where you enter your username or email and the system sends you a reset link.
8. With all three values entered off camera, click **Sign In**. **Expected:** WashCentral checks the three values and, when they match, signs you in and moves you to the Command Center. *(Recording note: the three values are entered off camera. Stop recording before typing anything into the fields, sign in off camera, then resume recording on the Command Center for the next step.)*
9. Confirm you are signed in on the Command Center. **Expected:** the page title reads "Command Center — WashCentral" and the breadcrumb reads `Dashboard › Command Center`. Your initials show in the avatar at the top-right of the header (the demo account shows **MG**), which is the sign that login worked. Opening that avatar menu is WC-00-03.
10. Recap the three fields and where they came from. **Expected:** you signed in with **Email**, **Password**, and **Tenant / Customer Code**, all three issued by your administrator, none of them ever typed on camera or shared. The tenant code is the extra one, and it is what points you at the right company. Get all three right and you land on the Command Center.

## Expected results

You can open the sign-in page, tell the marketing panel apart from the **Welcome back** form, and name the three fields the form asks for. You can explain why the **Tenant / Customer Code** exists and enter all three values your administrator gave you without ever showing them on screen. A correct sign-in leaves you on the Command Center with your initials in the top-right avatar.

## Notes and troubleshooting (observed behavior only)

- The **Email** field accepts a plain username, not only an address in the `you@company.com` shape. Enter exactly the value your administrator issued.
- The **Show password** eye toggles the password between hidden dots and readable text and back. It is there to check a typo; reveal the value only when your screen is private.
- **Remember me** is checked when the page loads. Keep it on for your own workstation and clear it on any shared machine.
- The demo tenant carries an extra **Quick Access · mag** button that skips the three fields. It is a demo convenience that does not appear in a production sign-in, so it is not part of the flow you teach or record. Production sign-in always uses the three fields.
- The sign-in page also contains a two-factor verification step (a **Two-Factor Auth** panel with a one-time-code entry and a **Verify Code** button, plus a "Can't access your app? Use email instead" option) in its page structure. It did not appear during this verified sign-in, so whether a given tenant has two-factor enabled and exactly when it fires is `TBD — parked (NEW: MFA step "if enabled"; corpus shows the panel in page structure only, not a rendered sign-in)`. Do not depict or teach the two-factor screen until it is observed live.
- **Forgot password?** opens a **Reset password** panel; you enter a username or email, it sends a reset link, and a "Check your email" panel confirms it. A full password-reset walk is out of scope for this lesson.
- **Migration note (source: Migration FAQ):** credentials do not change when a client moves from WashAssist to WashCentral. Users and data carry over, and WashCentral runs on the WashAssist data. If a migrated client reports they "can't log in," they use the same credentials they had in WashAssist.
- *(Per Micrologic platform documentation:* sign-in is token-based, and sessions are bound to the device and browser to block session hijacking and cookie replay. You cannot see any of this on screen, so do not present it as observed.*)*
- The field labels differ from the legacy WashAssist documentation, which described **Username**, **Password**, and **Company/Account**. The live page reads **Email**, **Password**, and **Tenant / Customer Code** (logged in DISCREPANCIES.md #1). Point migrated users at the new labels.
- A wrong tenant code is a common cause of a sign-in that goes nowhere. Diagnosing login failures is the PB-1 playbook (Phase 4). Surprise logouts from session timeouts are WC-01-03.
- **Knowledge check:** Why does WashCentral ask for a third credential field when most software asks for two? And what happens to a migrated client's credentials after the switch from WashAssist?

## Related lessons

WC-00-01 Workstation prerequisites · WC-00-03 Account menu & personal setup · WC-01-03 Session behavior and timeouts.

**Verified against demo.washcentral.com on July 9, 2026.**
