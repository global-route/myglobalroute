# Release Verification — 2026-09-13

## Result
**Release blocked.** The phase has progressed materially: the product has a 26-country / 52-pathway registry, a hard evidence gate, dedicated country/pathway pages, and multiple primary-source evidence waves. The latest quality runs exposed and drove remediation of duplicate evidence records; a fresh corrected-state run is still required.

## Verified directly
- `main` contains the evidence-gated 26-country registry.
- **52 pathway records** exist, restoring two pathway records for every country; most remain explicitly `research_required` by design.
- Unsupported approval-rate, cost and timeline claims remain blocked by the data validator.
- The primary-source evidence layer now contains the earlier evidence plus a dated Australia/Canada/New Zealand batch; duplicate Italy/Norway evidence records were removed rather than weakening validation.
- Canada now has material study-permit eligibility and financial-support evidence, including the September 1, 2026 living-expense threshold for applicants outside Quebec.
- Australia now has material Subclass 500 student eligibility and financial-capacity evidence.
- New Zealand now has material Fee Paying Student Visa eligibility/finance evidence and Skilled Migrant Category eligibility/remuneration evidence.
- Finland, Italy and Norway have dated primary-source evidence covering priority study/work fields; Norway's duplicate evidence ID was identified by CI and the redundant addendum was removed.
- Germany, France and Spain have a dedicated dated evidence batch covering eligibility and financial-requirement fields for six priority pathways.
- Six Germany/France/Spain pathways are explicitly `publishable` with `evidenceIds` and minimum material-field coverage.
- The material-field requirements registry and validator block unsupported `publishable` promotion.
- The canonical route engine hard-gates viable recommendations on publishable country/pathway data and excludes zero-fit routes.
- Find My Route, calculator safety, country explorer and programmatic country/pathway detail pages are implemented.
- Generated-output verification checks core public routes, data endpoints, detail pages and internal deep-link integrity.
- CI Quality Gate has executed on `main`; dependency audit passed with 0 vulnerabilities, while recent runs 140–142 failed specifically during data validation because of duplicate evidence IDs. The underlying duplicate records have now been removed in commits `3014fe8` and `2d7eee8`.
- The CI workflow targets Node 24 and the Netlify configuration is aligned to Node 24.
- Core-route SEO/accessibility smoke verification exists and has passed in an earlier successful CI run.
- Privacy, disclaimer and terms pages exist.
- Stale `myglobalroute.com` canonical/package metadata references were removed from hardened SEO surfaces.
- `robots.txt` and `sitemap.xml` remain origin-neutral and do not advertise the unverified production hostname.

## Not yet verified
- Corrected-state CI: **pending next workflow run** after duplicate-evidence remediation.
- Browser/E2E behavior: not yet executed.
- Full legacy blog/category/static-page SEO/accessibility cleanup: not yet complete.
- Complete primary-source field audit: many of the 52 pathways remain `research_required` by design; new evidence records still need exact `evidenceIds` attachment and route-specific review before promotion.
- Production deployment: `https://myglobalroute.com` resolves to an unrelated Global Routes visa-consultancy site, not this repository; this remains a critical hostname/DNS/deployment mismatch.
- Authoritative Netlify production origin: not independently verified in the available connected tools; historical `myglobalroute.netlify.app` documentation is not treated as proof.
- Final canonical, Open Graph and sitemap URLs: intentionally withheld/neutralized until the production origin is authoritative.

## Release blockers
1. Get a corrected-state CI run through data validation, tests, build, generated-output verification and SEO/accessibility smoke.
2. Attach new evidence IDs and promote only pathways that satisfy complete material coverage and exact-route review.
3. Continue primary-source evidence waves across the remaining priority countries.
4. Add browser/E2E smoke coverage and execute it against the generated product.
5. Identify and verify the intended Netlify deployment and production hostname.
6. Verify deployed `/data/countries.json`, Find My Route, calculator, country explorer, country detail pages, pathway detail pages and deep links.
7. Once the origin is verified, regenerate canonical metadata, robots sitemap and Open Graph URLs from that single source of truth.

## Rule
No “production ready” claim is permitted until every blocker above has objective evidence.
