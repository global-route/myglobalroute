# Release Verification — 2026-09-12

## Result
**Release blocked.** The repository has materially stronger P0 architecture and evidence controls, but production cannot be declared healthy yet.

## Verified directly
- `main` contains the evidence-gated 26-country registry.
- 52+ pathway records exist with authoritative source URLs; most remain explicitly `research_required` by design.
- Unsupported approval-rate, cost and timeline claims remain blocked by the data validator.
- The primary-source evidence layer now contains 45 field-level records across the primary registry plus dated addenda.
- Sweden has primary-source records covering work-permit salary/eligibility, study maintenance and post-study search rights.
- Canada, Norway, Portugal and Japan have dated primary-source evidence records attached to their relevant pathway IDs; these records do not by themselves make a pathway publishable.
- Finland now has dated primary-source evidence covering study eligibility/finance and employed-worker income requirements.
- Italy now has dated primary-source evidence covering study eligibility and 2026/2027 financial means.
- Norway now has dated primary-source evidence covering study financial requirements and skilled-worker eligibility, alongside the earlier study-eligibility/job-offer evidence.
- Germany, France and Spain have a dedicated dated evidence batch covering eligibility and financial-requirement fields for six priority pathways.
- Six Germany/France/Spain pathways are now explicitly `publishable` with `evidenceIds` and minimum material-field coverage: DE study, DE Opportunity Card, FR study, FR Talent Passport, ES study and ES international teleworker.
- A material-field requirements registry defines `eligibility` and `financial-requirement` as the minimum evidence coverage for work and study pathways.
- The validator blocks `publishable` pathways when required material evidence fields are missing, in addition to requiring explicit `evidenceIds`.
- The validator now uses the current UTC date by default, with `VALIDATION_AS_OF` available for deterministic release/CI runs.
- The canonical route engine hard-gates viable recommendations on publishable country/pathway data.
- Find My Route is implemented and exposed from the homepage/primary navigation.
- The calculator excludes evidence-gated/unverified country costs instead of treating null or placeholder costs as actionable affordability data.
- The country explorer renders the canonical 26-country registry, supports filtering, and labels unavailable/unverified rates and costs explicitly.
- Programmatic country detail pages expose pathway navigation and country-level source status.
- Programmatic pathway detail pages expose official source links and field-level evidence trails.
- Generated-output verification checks the expected public country and pathway detail-page locations.
- A generated SEO/accessibility smoke gate checks language declaration, meaningful title/description, one H1, image alt text, accessible link text, duplicate IDs and robots/sitemap presence.
- The SEO/accessibility smoke gate is included in both `npm run verify` and the GitHub Actions quality workflow.
- CI workflow exists for dependency audit, data validation, tests and Eleventy build.
- Generated-output integrity checks and a reproducible `npm run verify` command exist.
- Pathway evidence-coverage reporting distinguishes evidenced pathways from the broader research-required registry.
- Publishable pathways are required by validation to carry explicit `evidenceIds` provenance links and complete material-field coverage.
- Privacy, disclaimer and terms pages exist.
- Stale `myglobalroute.com` canonical/package metadata references were removed from the recently hardened SEO surfaces.
- `robots.txt` and `sitemap.xml` no longer advertise the unverified production hostname.

## Not yet verified
- CI execution: no workflow run/status is exposed for the latest main commits in this session, so tests/build/audit are **Not Tested — no run available**.
- Browser/E2E behavior: not yet executed.
- Generated SEO/accessibility smoke execution: gate is implemented but has not yet been run against a generated build in this session.
- Complete primary-source field audit: most pathway records remain `research_required` by design.
- Broad pathway promotion: only six pathways currently meet the minimum material evidence gate; remaining pathways still require primary-source review and pathway-specific legal-subroute analysis.
- Production deployment: `https://myglobalroute.com` currently resolves to an unrelated Global Routes visa-consultancy site, not this repository. This remains a critical hostname/DNS/deployment mismatch.
- Authoritative Netlify production origin: not independently verified in the available connected tools; historical repo documentation mentions `myglobalroute.netlify.app`, but it must not be treated as verified solely from documentation.
- Final canonical, Open Graph and sitemap URLs: intentionally withheld/neutralized where the production origin is not authoritative.

## Release blockers
1. Identify and verify the intended Netlify deployment and correct production hostname.
2. Run and pass CI/build/data validation.
3. Run the generated SEO/accessibility smoke gate and address any real-build failures.
4. Verify generated `/data/countries.json`, Find My Route, calculator, country explorer, country detail pages, pathway detail pages and deep links in the deployed artifact.
5. Complete primary-source evidence for additional publishable pathway facts and promote only fully evidenced pathways.
6. Attach `evidenceIds` to every pathway promoted to `publishable` and enforce complete material-field coverage.
7. Review generic pathways that represent multiple legal sub-routes before promotion; evidence must describe the exact route being published.
8. Add browser/E2E smoke coverage.
9. Once the origin is verified, regenerate canonical metadata, robots sitemap and Open Graph URLs from that single source of truth.

## Rule
No “production ready” claim is permitted until every blocker above has objective evidence.
