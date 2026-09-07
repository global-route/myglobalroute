# Release Verification — 2026-09-07

## Result
**Release blocked.** The repository has materially stronger P0 architecture and evidence controls, but production cannot be declared healthy yet.

## Verified directly
- `main` contains the evidence-gated 26-country registry.
- 52+ pathway records exist with authoritative source URLs and explicit `research_required` status.
- Unsupported approval-rate, cost and timeline claims remain blocked by the data validator.
- The primary-source evidence layer now contains 17 field-level records when the 14-record primary registry is combined with the dated Sweden addendum.
- Sweden now has primary-source records covering work-permit salary/eligibility, study maintenance and post-study search rights.
- The canonical route engine hard-gates viable recommendations on publishable country/pathway data.
- Find My Route is implemented and exposed from the homepage/primary navigation.
- CI workflow exists for dependency audit, data validation, tests and Eleventy build.
- Generated-output integrity checks and a reproducible `npm run verify` command exist.
- Pathway evidence-coverage reporting distinguishes evidenced pathways from the broader research-required registry.
- Publishable pathways are required by validation to carry explicit `evidenceIds` provenance links.
- Privacy, disclaimer and terms pages exist.
- Stale `myglobalroute.com` canonical/package metadata references were removed from the recently hardened SEO surfaces.
- `robots.txt` and `sitemap.xml` no longer advertise the unverified production hostname.

## Not yet verified
- CI execution: no workflow run/status is exposed for the latest main commits in this session, so tests/build/audit are **Not Tested — no run available**.
- Browser/E2E behavior: not yet executed.
- Accessibility/Lighthouse: not yet executed.
- Complete primary-source field audit: most pathway records remain `research_required` by design.
- Country/pathway explorer integration: not yet complete.
- Production deployment: `https://myglobalroute.com` currently resolves to an unrelated Global Routes visa-consultancy site, not this repository. This is a critical hostname/DNS/deployment mismatch and remains a release blocker.
- Authoritative Netlify production origin: not independently verified in the available connected tools; historical repo documentation mentions `myglobalroute.netlify.app`, but it must not be treated as verified solely from documentation.
- Final canonical, Open Graph and sitemap URLs: intentionally withheld/neutralized where the production origin is not authoritative.

## Release blockers
1. Identify and verify the intended Netlify deployment and correct production hostname.
2. Run and pass CI/build/data validation.
3. Verify generated `/data/countries.json`, Find My Route, calculator, page routes and deep links in the deployed artifact.
4. Complete primary-source evidence for publishable pathway facts and promote only fully evidenced pathways.
5. Attach `evidenceIds` to every pathway promoted to `publishable` and enforce complete material-field coverage.
6. Wire pathway evidence into country/pathway presentation pages.
7. Add browser, accessibility and SEO smoke checks.
8. Once the origin is verified, regenerate canonical metadata, robots sitemap and Open Graph URLs from that single source of truth.

## Rule
No “production ready” claim is permitted until every blocker above has objective evidence.
