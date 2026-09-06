# Release Verification — 2026-09-06

## Result
**Release blocked.** The repository has materially stronger P0 architecture and evidence controls, but production cannot be declared healthy yet.

## Verified directly
- `main` contains the evidence-gated 26-country registry.
- 52+ pathway records exist with authoritative source URLs and explicit `research_required` status.
- Unsupported approval-rate, cost and timeline claims remain blocked by the data validator.
- A primary-source evidence registry now contains 14 field-level records with authority, source URL, jurisdiction, retrieval date, methodology, confidence and review date.
- The canonical route engine hard-gates viable recommendations on publishable country/pathway data.
- Find My Route is implemented and exposed from the homepage/primary navigation.
- CI workflow exists for dependency audit, data validation, tests and Eleventy build.
- Netlify is configured for Node 20, matching CI.
- Privacy, disclaimer and terms pages exist.

## Not yet verified
- CI execution: no workflow run/status is exposed for the latest main commits in this session, so tests/build/audit are **Not Tested — no run available**.
- Browser/E2E behavior: not yet executed.
- Accessibility/Lighthouse: not yet executed.
- Complete primary-source field audit: most pathway records remain `research_required` by design.
- Country/pathway explorer integration: not yet complete.
- Production deployment: `https://myglobalroute.com` currently resolves to an unrelated Global Routes visa-consultancy site, not this repository. This is a critical hostname/DNS/deployment mismatch and remains a release blocker.
- The existing absolute canonical/OG/sitemap references cannot be treated as production-correct until the authoritative deployment hostname is confirmed.

## Release blockers
1. Connect the intended Netlify deployment to the correct production hostname.
2. Run and pass CI/build/data validation.
3. Verify generated `/data/countries.json`, Find My Route, calculator, page routes and deep links in the deployed artifact.
4. Complete primary-source evidence for publishable pathway facts and promote only fully evidenced pathways.
5. Wire pathway evidence into country/pathway presentation pages.
6. Add browser, accessibility and SEO smoke checks.
7. Replace stale absolute SEO URLs with the verified production origin.

## Rule
No “production ready” claim is permitted until every blocker above has objective evidence.
