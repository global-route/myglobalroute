# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

## 2026-10-11 — Migration-data integrity and status reconciliation

- Added machine-readable 26-country source-review manifest, generator/check command and regression tests.
- Added route recommendation tests for missing country records, research-required routes, absent structured requirements and unknown thresholds.
- Expanded structured requirements with evidence-backed declarations for UK Student admission offer, New Zealand Fee Paying Student funds (with duration/funding caveats), and Ireland Critical Skills job offer; coverage is 12 declarations across 5/56 pathways.
- README no longer claims Phase 2 complete or describes approval rates and monetization as live capabilities.
- Updated Austria and Czechia source anchors to current official government entry points; their retrieval dates alone were updated.
- Added country-manifest check to standard `npm run verify`; superseded task documents now explicitly identify historical checklists.
- 26/26 country anchors have outcomes; relevant official pages/alternatives inspected for 24. Luxembourg official alternatives are recorded; Russia needs mission-jurisdiction confirmation. Human sign-off required.
- `dataset.asOf` remains `2026-09-05`. No pathway-specific claims inferred from country landing pages.
- GitHub API reports `main` unprotected and no repository rulesets. Production host, deployed SHA and live CSP remain unverified. Release **NO-GO**.


## CI evidence note — 2026-10-11
The implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` passed Quality Gate, Lint and Browser Smoke on the same SHA (run links recorded in the active sprint and release verification docs). The follow-up CI configuration SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5` passed Quality Gate and Lint; its Browser Smoke run remains pending at last check. Release remains **NO-GO** due external production and human source-review gates.
