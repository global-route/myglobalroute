# Release Verification — 2026-10-08

> **Current-head verification update:** 2026-10-11. This record retains its original filename for continuity; use the latest dated verification section below for current CI status.

## Current result

**Production release remains NO-GO.** The last fully tested code checkpoint is `c1670297f7e4846cb1ffd35a955e78f2da678e50`; subsequent commits reconcile documentation and the latest documentation-only head is undergoing its own workflow run. The authoritative hosting project/origin and deployed commit have not been independently confirmed. Live monetization remains gated.

## Current-head CI verification — 2026-10-11

All three required source-tree workflows completed successfully on the same tested code SHA, `c1670297f7e4846cb1ffd35a955e78f2da678e50` (the latest fully tested implementation checkpoint):

- **Quality Gate — PASS:** [run 38103017870](https://github.com/global-route/myglobalroute/actions/runs/38103017870). Includes dependency audit, migration-data validation, unit tests, build, generated-artifact verification and SEO/accessibility checks.
- **Lint — PASS:** [run 38103017906](https://github.com/global-route/myglobalroute/actions/runs/38103017906).
- **Browser Smoke — PASS:** [run 38103017883](https://github.com/global-route/myglobalroute/actions/runs/38103017883). Browser smoke completed successfully after fixing root-relative asset output paths, disabling unconfigured advertising code and preserving the hidden state of inactive ad/partner slots.

These are current source-tree results, not production-host verification. The code SHA includes runtime evidence/provenance guards in the route engine, required-budget enforcement for known funds thresholds, and a hardened deployed-site verifier that compares served registries with checked-out source. Recheck CI if `main` advances.

## Implemented since the earlier checkpoint

- Strict ISO calendar-date validation for dataset/evidence dates and corresponding unit tests.
- Route recommendations now fail closed when a publishable pathway lacks non-empty evidence IDs or an HTTPS source URL; positive `minFunds` thresholds require a valid supplied budget.
- Deployed-site smoke now compares served country/pathway registries with the checked-out source and checks application identity, critical assets, and direct 2xx responses.
- Explicit Eleventy passthrough mapping for CSS and JavaScript paths referenced by pages.
- Fail-closed legacy advertising loader when a real approved publisher ID is absent.
- Correct publisher-ID validation and CSS rules that keep unconfigured ad/partner placements hidden.
- Active sprint and handover documentation updated to record the fixes and remaining release blockers.

## Production origin — unresolved

Historical documents refer to Cloudflare Pages and `https://vrenum.app`; `myglobalroute.com` has also appeared in project context and has presented a different visa-consultancy/services site in an earlier public check. These references do not establish the authoritative host, ownership, or deployed commit. Do not guess the origin.

Required evidence:
1. Hosting account/project and custom-domain mapping.
2. Current deployment record and deployed commit SHA.
3. Reachable origin serving the expected application and data.

## Remaining P0-S5 release gates

- [ ] Confirm authoritative hosting project, production hostname and deployment owner.
- [ ] Verify the deployed commit matches intended `main` head.
- [ ] Run `npm run deploy:verify` against the confirmed origin.
- [ ] Verify representative country/pathway deep links, assets, JSON registries, calculator and route recommendations.
- [ ] Restore canonical/OG/sitemap absolute URLs only against the verified origin.
- [ ] Audit CSP and third-party inventory against the deployed environment.
- [ ] Resolve repository hardening issue #2: suitable branch protection/check policy and an explicit visibility decision.
- [ ] Record P0 exit only after all production gates pass.

## Monetization state

- Measurement, consent, placement registry and fail-closed advertising foundations are implemented; source-tree CI is green on the SHA above.
- Live advertising is not active; publisher, origin, privacy/CMP and provider gates remain.
- No live affiliate partner or provider-verified revenue is established.
- Qualified-lead collection remains blocked until consent, data minimization, secure delivery and reconciliation are designed and verified.
- Monetization must never influence pathway eligibility, evidence status or recommendation ranking.

## Release decision

**NO-GO for production release and live monetization until the production and provider gates above are evidenced.**
