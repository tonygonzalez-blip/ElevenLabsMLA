# WC-15-02 · Parity Conversations with Clients (Migration Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

> Doc-sourced lesson. Architecture and parity claims come from Micrologic platform documentation (attributed). The "where did feature X go" answers come from this project's own verified restructure map (DISCREPANCIES.md #2–#23), captured against the live platform. The recording is a title-card piece, not a screen capture.

## Purpose

Handle the client conversation that starts with "this looks different" or "where did my feature go." You give two kinds of answer: the high-level parity story (attributed to platform documentation), and the specific relocation for a named feature (from the verified restructure map). The rule that keeps you out of trouble: a feature you cannot find live is "being confirmed," never "gone."

## Audience and prerequisites

Tech Support and Onboarding techs who talk to migrated clients. Helpful to have finished the Foundations phase so you know the current module layout (WC-01-01) and the CRM/Sales/Settings structure.

## The parity story (attributed)

*(Per Micrologic platform documentation:* all **179 WashAssist modules carried forward with full parity**, plus **16 or more new capability areas**. The platform was rebuilt on AWS with token-based authentication, device-bound sessions, and rate limiting. **Release 2** brings the Marketing module onto an event-driven backbone with bi-directional data replication. **Release 3** brings event-driven microservices.)*

Always attribute these. You cannot see them in the UI, so present them as what the documentation states, not as something you observed. Pricing, contract terms, and exact release dates are out of scope: park them.

## The "where did it go" map (verified live)

When a client names a feature, answer with its current location from the verified restructure map. The most common ones:

- **Navigation rail:** WashAssist's separate Employees, Gamification, and Scheduler modules are now inside **Team**. Maintenance, Incidents, and appointment Scheduling are inside **Operations**. Mobile and the customer Portal are inside **Digital**. Support and Audit are inside **IT & Support**. **Billing** and **Academy** are new modules.
- **Retention Log** is a button on the Customer List, not a CRM sidebar item.
- **Generate Invoices** is a button on House Accounts, not a separate CRM menu entry.
- **Rewards** moved to `Settings → Services → Rewards`.
- **Adjustments** moved from Sales into **Inventory**.
- **Forecasting** lives under **Analytics**, not Marketing.
- **Reports scheduling** is on the Reports hub (the **Schedule Report** button), not inside the Report Viewer.
- **Customer Portal settings** consolidated from many pages into a five-page hub (Overview, Branding & Appearance, Features & Modules, Access & Security, Content & Messaging).

For the full map, use DISCREPANCIES.md #2–#23. It is the project's own verified record of every relocation, so you are citing observed platform structure, not a guess.

## Features you cannot find live

Some legacy features are not visible in the current demo: PIN Codes, Loyalty Discounts (in CRM), Tech Commissions, Time Clock Site Watch, Store Closing Message, Schedule Variances, Weekly Staffing Report, Network Devices, the in-app User Guide, Time Clock Edit Reasons, Campaign Templates and Sources, and Landing Pages (see PARKED-ITEMS.md #14).

Do not tell a client any of these are "gone" or "removed." The honest, correct phrasing is that the feature's status is **being confirmed**. It may be relocated, it may be arriving in a later release, or it may be retired, and we do not assert which until it is verified. Log the specific ask so it can be confirmed and answered properly.

## Knowledge check

- A client says "your competitor told me WashCentral dropped half our modules." What is the attributed parity claim, and how do you frame it? (Answer: per platform documentation, all 179 WashAssist modules carried forward with full parity plus 16+ new capability areas; attribute it to the documentation, do not claim to have counted it yourself.)
- A client asks where PIN Codes went. What do you say? (Answer: its status is being confirmed; do not say it was removed. Log the ask.)

## Related lessons

WC-01-01 Global navigation rail · WC-15-01 Migration switching · WC-12-06 Users & Security.

**Verified against demo.washcentral.com on July 9, 2026.**
