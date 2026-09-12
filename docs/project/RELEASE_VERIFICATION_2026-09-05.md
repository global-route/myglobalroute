# Release Verification — 2026-09-12

## Result
**Release blocked — but the local/CI quality gate is now green.** The remaining blockers are migration-evidence breadth, browser/E2E verification and deployment-origin verification.

## Verified directly
- `main` contains the evidence-gated 26-country registry.
- **52 pathway records** now exist, restoring two pathway records for every country; most remain explicitly `research_required` by design.
- Unsupported approval-rate, cost and timeline claims remain blocked by the data validator.
- The primary-source evidence layer contains **48 field-level records** across the primary registry plus dated addenda.
- Sweden has primary-source records covering work-permit salary/eligibility, study maintenance and post-study search rights.
- Canada, Norway, Portugal and Japan have dated primary-source evidence records attached to relevant pathway IDs; these records do not by themselves make a pathway publishable.
- Finland has dated primary-source evidence covering study eligibility/finance and employed-worker income requirements.
- Italy has dated primary-source evidence covering study eligibility and 2026/2027 financial means.
- Norway has dated primary-source evidence covering study financial requirements and skilled-worker eligibility, alongside earlier study-eligibility/job-offer evidence.
- Germany, France and Spain have a dedicated dated evidence batch covering eligibility and financial-requirement fields for six priority pathways.
- Six Germany/France/Spain pathways are explicitly `publishable` with `evidenceIds` and minimum material-field coverage: DE study, DE Opportunity Card, FR study, FR Talent Passport, ES study and ES international teleworker.
- A material-field requirements registry defines `eligibility` and `financial-requirement` as the minimum evidence coverage for work and study pathways.
- The validator blocks `publishable` pathways when required material evidence fields are missing, in addition to requiring explicit `evidenceIds`.
- The validator uses the current UTC date by default, with `VALIDATION_AS_OF` available for deterministic release/CI runs.
- The canonical route engine hard-gates viable recommendations on publishable country/pathway data and excludes zero-fit routes from ranked recommendations.
- Find My Route is implemented and exposed from the homepage/primary navigation.
- The calculator excludes evidence-gated/unverified country costs instead of treating null or placeholder costs as actionable affordability data.
- The country explorer renders the canonical 26-country registry, supports filtering, and labels unavailable/unverified rates and costs explicitly.
- Programmatic country detail pages expose pathway navigation and country-level source status.
- Programmatic pathway detail pages expose official source links and field-level evidence trails.
- Eleventy now correctly generates the root homepage, public robots/sitemap assets, research index and 52 pathway detail routes without duplicate country output conflicts.
- Generated-output verification checks the expected public country/pathway detail-page locations and core internal deep-link integrity.
- CI Quality Gate **run 123 passed**: dependency audit, data validation, unit tests (3 suites / 10 tests), Eleventy build, generated-output verification and SEO/accessibility smoke verification all passed.
- The dependency audit now reports **0 vulnerabilities** after removing the bundled Netlify CLI from the application dependency graph.
- CI now targets Node 24, removing the prior Node 20 deprecation warning path.
- Core-route SEO/accessibility smoke verification now checks the product surface strictly while leaving legacy editorial-page cleanup as a separate P1 task.
- Privacy, disclaimer and terms pages exist.
- Stale `myglobalroute.com` canonical/package metadata references were removed from the hardened SEO surfaces.
- `robots.txt` and `sitemap.xml` remain origin-neutral and do not advertise the unverified production hostname.

## Not yet verified
- Browser/E2E behavior: not yet executed.
- Full legacy blog/category/static-page SEO/accessibility cleanup: not yet complete; the strict smoke gate currently focuses on the core product routes.
- Complete primary-source field audit: 11/52 pathways currently have minimum material-field coverage; only six are promoted to publishable.
- Broad pathway promotion: remaining pathways still require primary-source review and pathway-specific legal-subroute analysis.
- Production deployment: `https://myglobalroute.com` currently resolves to an unrelated Global Routes visa-consultancy site, not this repository. This remains a critical hostname/DNS/deployment mismatch.
- Authoritative Netlify production origin: not independently verified in the available connected tools; historical documentation mentioning `myglobalroute.netlify.app` is not treated as proof.
- Final canonical, Open Graph and sitemap URLs: intentionally withheld/neutralized where the production origin is not authoritative.

## Release blockers
1. Complete additional primary-source evidence batches and pathway-specific legal-subroute review.
2. Promote only pathways that satisfy complete material evidence coverage with explicit `evidenceIds`.
3. Add browser/E2E smoke coverage and execute it against the generated product.
4. Identify and verify the intended Netlify deployment and correct production hostname.
5. Verify deployed `/data/countries.json`, Find My Route, calculator, country explorer, country detail pages, pathway detail pages and deep links.
6. Once the origin is verified, regenerate canonical metadata, robots sitemap and Open Graph URLs from that single source of truth.

## Rule
No “production ready” claim is permitted until every blocker above has objective evidence.
