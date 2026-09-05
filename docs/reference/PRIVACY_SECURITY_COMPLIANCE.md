# Privacy, Security & Compliance Baseline

## Product rule
Global Route is a migration-information product, not a document-collection or immigration-representation service. The MVP must not request passports, identity documents, bank statements, biometric data, immigration case files, or other sensitive personal documents.

## Data minimization
- Route recommendation inputs are processed locally where practical.
- Do not persist profile inputs unless an explicit account feature is introduced with a documented purpose.
- No sensitive personal data is required for the calculator or route finder.
- Third-party analytics/advertising must be documented and consent-aware where legally required.

## Trust and legal positioning
- Every immigration requirement, fee, threshold, processing-time or eligibility claim must have provenance.
- Official policy is distinguished from editorial interpretation and user strategy.
- Approval rates must not be presented unless a credible, methodology-disclosed dataset exists for the relevant applicant population and period. Otherwise display “not published by authority”.
- Global Route does not guarantee approval, admission, employment, residence or citizenship outcomes.

## Security baseline
- HTTPS only.
- CSP, clickjacking protection, MIME sniffing protection and restrictive permissions policy are configured at the edge.
- No secrets in source control.
- Dependencies are audited in CI.
- DOM output must be escaped; untrusted strings must never be interpolated into executable HTML.
- Contact forms, when enabled, require server-side validation, rate limiting and abuse protection.

## Retention
Until an authenticated user account exists, do not retain route-profile data server-side. If accounts are introduced, define retention/deletion controls before launch.

## Release gate
Production release is blocked when critical security findings, unverified migration claims, broken builds, failing tests, or missing privacy/legal disclosures remain open.
