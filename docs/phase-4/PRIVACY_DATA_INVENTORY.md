# Privacy Data Inventory — Engineering Draft

**Status:** Source-tree inventory only; not legal advice or compliance sign-off.  
**Prepared:** 2026-10-11  
**Validation:** Not validated; testing and CI are paused by user direction.  
**Production identity:** Unconfirmed. This document does not establish which provider, domain, logs or third-party integrations are live.

## Purpose and scope

This inventory records data flows visible in the repository to support Phase 4 privacy, consent, retention and ownership review. It describes code intent, not verified behavior on a production deployment. A privacy/legal owner must confirm the actual deployed configuration and applicable jurisdictions before release.

## Current source-visible data flows

| Flow | Data / purpose | Processing visible in source | External transmission / storage | Status and controls |
|---|---|---|---|---|
| Find My Route | Goal selection (Study/Work); filter and display evidence-gated pathways | Form values are read in the browser and passed to the route engine; pathway/country registries are loaded as static JSON | No route-profile submission endpoint is wired in this page. Static data requests and hosting logs depend on the actual provider, which is not confirmed. | UI explicitly says this is a goal match, not an eligibility decision. Budget, income and experience are not collected for route matching because comparable evidence-backed fields are not available. |
| Budget calculator | Savings, monthly income, expenses and category used for local planning calculations | Values are read by browser-side code to calculate/display results | Current code path does not intentionally submit these values to an application API or analytics events. Static asset/data requests and provider logs remain outside this repository's visibility. | Treat these values as sensitive financial information. Do not add them to analytics, URLs, logs or partner redirects. |
| Analytics consent | Analytics choice (granted / denied) | Browser-side consent state gates analytics event emission | Stored in localStorage under globalroute.analyticsConsent when browser storage is available | User can reopen Privacy settings and change the choice. If storage is unavailable, persistence between visits is not guaranteed. |
| Advertising consent | Advertising storage / eligible ad-placement choice (granted / denied) | Separate state gates eligible ad placements | Stored in localStorage under globalroute.advertisingConsent when browser storage is available | Ads are gated on the advertising choice, not inferred from analytics consent. Provider behavior still requires deployed review. |
| Analytics events | Allowlisted event names and coarse dimensions such as page type, country/pathway IDs, placement IDs and source IDs | src/js/analytics.js rejects unknown events and unsupported/sensitive dimension keys; current call sites should send no calculator/profile values | A provider adapter emits only if a gtag function is present and a user has granted analytics consent. The actual deployed vendor/configuration is unverified. | Do not add email, phone, name, nationality, salary, income, expenses, savings, budget, identity, document, token, cookie or IP fields to event payloads. Review event names and dimensions before adding any new provider. |
| Contact | User-initiated email to hello@global-route.app | Contact page links to email; the unconnected static HTML form has been removed to avoid default GET submission of entered fields into a URL | Email transmission occurs only if the visitor chooses to send an email; mailbox processing/retention is not visible in this repository | Tell users not to send passports, identity documents, bank statements or immigration case files. Contact mailbox ownership, access and retention need confirmation. |
| Advertising / partners / leads | Potential future ad placements, partner referrals and lead events | Monetization module contains slot configuration; ad provider is unset and partner registry is empty. The legacy ad loader has an empty publisher ID and is disabled. | No live provider, lead destination or revenue source is established by repository configuration alone | Keep inactive until provider approval, consent/CMP requirements, disclosures, data-sharing terms, redirect ownership and reconciliation are confirmed. |

## Data minimisation rules

1. Do not collect passports, identity documents, bank statements or case files for general route discovery.
2. Keep calculator inputs client-side unless a documented product need and lawful basis are approved.
3. Do not put profile values in URLs, referrers, analytics dimensions, logs, partner redirects or support messages.
4. Do not enable accounts, saved routes, newsletters, lead capture, subscriptions or partner data sharing until each has a defined purpose, field inventory, lawful basis, retention/deletion rules, access controls and user-facing notice.
5. Keep analytics and advertising consent independently selectable. A consent choice must not be a condition for using the core migration-information features.
6. Do not claim legal compliance from the presence of a consent UI alone.

## Retention and user rights — unresolved owner decisions

The source tree does not establish a complete retention/deletion schedule for hosting logs, email, third-party analytics or any future lead/provider systems. Before launch, an accountable owner must define and document:

- Controller/entity name, contact address and privacy contact.
- Target applicant jurisdictions and applicable privacy regimes.
- Purposes and lawful bases for each data flow.
- Actual hosting provider, log fields, log retention and access policy.
- Actual analytics/ad vendors, configuration, data regions and retention.
- Process and response owner for access, correction, deletion and objection requests.
- Incident response and breach escalation process.
- Retention/deletion rules for contact email and any future account/newsletter/lead records.
- Cookie/storage inventory, consent categories and any consent-management platform obligations.
- Review cadence and named approver for privacy notice changes.

## Release gates

- [ ] Confirm authoritative production host/provider and inspect the deployed site, scripts, headers, cookies and network requests.
- [ ] Obtain qualified legal/privacy review for the product's target jurisdictions.
- [ ] Confirm analytics and advertising are independently gated in the actual deployed configuration.
- [ ] Approve data inventory, lawful basis, retention, deletion and user-rights process.
- [ ] Confirm contact mailbox ownership, access and retention.
- [ ] Complete keyboard/screen-reader and real-browser consent accessibility review after testing is resumed.
- [ ] Update this document with owner, date and evidence of approval.

**Current decision:** Phase 4 remains open. The repository-side controls are an implementation foundation only; they do not establish production behavior or legal compliance.
