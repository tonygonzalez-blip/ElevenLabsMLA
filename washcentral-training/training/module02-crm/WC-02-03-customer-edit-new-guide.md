# WC-02-03 · Edit Customer and New Customer forms (CRM)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers the two forms behind every change to a customer record: the **Customer Edit** form you open from a customer's profile, and the blank **+ Add Customer** form you use to create a new one. By the end you can open each form, read its tabs and its Contact fields, and leave without touching the data. Both forms share one template, so learning one teaches you the other. The rule that never bends: while you document or record, you leave by **Cancel** and never by **Save Changes**.

## Audience and prerequisites

Internal Micrologic technicians who have finished WC-02-01 (Customer List) and WC-02-02 (Customer 360). You should be signed in and able to open a customer's profile, which is where WC-02-02 leaves you. No record is created or changed in this lesson.

## Navigation path

The edit form opens from a customer's profile: `CRM → Customers → [customer row] → Edit Customer`. The blank form opens from the list itself: `CRM → Customers → + Add Customer`. Both render the same form template, so the two paths end in near-identical screens.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing is typed and nothing is saved.

1. Start on a customer's **Customer 360** profile (covered in WC-02-02). In the header, click **Edit Customer**. **Expected:** the **Customer Edit** form opens. The breadcrumb reads **CRM › Customer Edit**, the same identity band from the profile stays across the top, and **Cancel** and **Save Changes** sit in the top-right.
2. Read the identity band and metric strip carried over from the profile. **Expected:** the customer's name and plan badge (**★ Unlimited Plus**) sit at the top with the status chips **Plate linked**, **Auto-pay active**, and **SMS subscribed**, above a metric strip labeled **Member Since**, **Lifetime Spend**, **Total Visits**, **Loyalty Points**, **Next Renewal**, and **Last Visit**. You are always editing a named record, and this band tells you whose.
3. Look at the form's tab strip. **Expected:** six tabs run across the form: **Contact**, **Membership**, **Payments**, **Vehicles**, **Communication**, and **Comments**, with a **Record Information** section link beneath them. These differ from the nine tabs on the 360 view. The edit form drops Overview, Linked Accounts, and Activity, and it renames Messaging to **Communication** and Notes to **Comments**.
4. On the **Contact** tab, read the **PERSONAL & BUSINESS** group. **Expected:** the fields are **First Name**, **Last Name**, **Company**, **Gender**, **Date of Birth**, **House Account**, and **Signature on File**. Gender is a dropdown, House Account and Signature on File are toggles, Company is marked optional, and Date of Birth takes an MM/DD/YYYY date.
5. Read the **ADDRESS** group below it. **Expected:** **Address Line 1**, **Address Line 2**, **City**, **State**, **ZIP Code**, and **Country**. Address Line 2 is optional and Country is a dropdown.
6. Read the **PHONE & EMAIL** group. **Expected:** **Phone**, **Mobile**, **Fax**, and **Email Address**. Fax is optional. This is the block you confirm when a member's texts or receipts are going to the wrong place.
7. Change nothing, then click **Cancel**. **Expected:** the form closes and you return to the customer's profile with nothing saved. **Do not click Save Changes.** The demo tenant is shared and live, so a real edit would stick.
8. Open the Customer List from the CRM sidebar: click **Customers**. **Expected:** the **Customer List** loads with its KPI strip (**Total Customers**, **Active Members**, **At Risk**, **Prospects**) and the button row **Retention Log**, **Delete**, and **+ Add Customer**.
9. Click **+ Add Customer**. **Expected:** a blank version of the same form opens. Its tabs and Contact field groups match the edit form, but every field is empty and shows its placeholder text. This is the form you fill in when a walk-in becomes a member. Its exact blank-form title and empty-state details were not separately captured this pass: TBD — parked.
10. Skim the blank form to confirm it matches the edit layout. **Expected:** the same **PERSONAL & BUSINESS**, **ADDRESS**, and **PHONE & EMAIL** groups appear, now empty, showing placeholders such as "First name", "Last name", and "Email address". One template covers both editing a record and creating one.
11. Change nothing, then click **Cancel**. **Expected:** the form closes and no customer is created. You have now opened both forms, read their fields, and left each one clean.

## Expected results

From any customer's profile you can open the Customer Edit form, and from the list you can open the blank **+ Add Customer** form. Both share one template with the same tabs and the same Contact fields. Reading or browsing either form changes nothing on its own. The only exit you use while documenting is **Cancel**, and **Save Changes** stays untouched.

## Notes and troubleshooting (observed behavior only)

- Demo quirk, fixed sample record. In this demo tenant the Customer Edit form opens a fixed sample customer regardless of which row you started from. That is a known demo artifact recorded in the project discrepancy log, not platform behavior. On a real tenant the form opens the customer you were viewing. Read the identity band to confirm whose record is loaded before you would ever edit.
- Cancel versus Save Changes. Both buttons appear in the top-right and again at the bottom of the form. **Cancel** discards and returns you to the profile. **Save Changes** writes to the live record, so you never click it while documenting or recording.
- Edit tabs versus view tabs. The 360 view has nine tabs; the edit form has six plus a **Record Information** link. On the edit form, **Communication** and **Comments** stand in for the view's Messaging and Notes.
- Record Information. The edit form shows a **Record Information** section link under the tab strip. Its expanded contents were not captured in this pass: TBD — parked.
- New Customer form. The blank **+ Add Customer** form reuses the edit template with empty fields. Its exact captured blank state, including any page title or empty header band, was not separately recorded this pass: TBD — parked.
- Dropdowns. **Gender** and **Country** are dropdowns; their full option lists were not captured, so this lesson names the fields without listing their choices.

## Related lessons

WC-02-01 Customer List · WC-02-02 Customer 360.

**Verified against demo.washcentral.com on July 9, 2026.**
