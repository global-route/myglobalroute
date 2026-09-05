# Global Route — Current Project Assessment

**Reconciled:** September 5, 2026  
**Status:** Active remediation  
**Release readiness:** Not production-ready yet

## Executive finding

The project has a strong product direction and substantial planning/content work, but the repository's hardest product risks were previously underweighted: migration-data trust, duplicated runtime logic, deployment correctness, and missing automated quality gates.

The correct next phase is **Production Integrity → Migration Intelligence Core**, not simply more blog volume.

## Critical findings

| Finding | Severity | Current state |
|---|---|---|
| Runtime data path mismatch | P0 | Fixed |
| Duplicate calculator implementations | P0 | Fixed |
| Calculator currency inconsistency | P0 | Fixed in canonical engine |
| Timeline range parsing bug | P0 | Fixed |
| Unsafe HTML rendering of data-controlled values | P0 | Hardened in active modules |
| Static deployment SPA rewrite | P0 | Removed |
| Destructive gzip build step | P0 | Removed |
| Missing data validation script | P0 | Added |
| Migration provenance | P0 | Standard documented; implementation pending |
| Incomplete 26-country coverage | P0 | Still open; no fabricated records added |
| Pathway-level product model | P0 | Still open |
| Automated tests/build smoke tests | P0 | Still open |
| SEO completeness | P1 | Audit/implementation pending |
| Privacy/analytics governance | P1 | Audit pending |

## Verified technical corrections

### Runtime

Eleventy copies `src/data` into the generated `/data` output. The application now requests `/data/countries.json` instead of the source-tree path.

### Calculator

`calculator.js` is now the canonical calculation engine. The application layer only reads form values, calls the engine and renders results. Currency conversion is centralized and unsupported currencies fail explicitly. Timeline ranges such as `8-16 months` preserve both endpoints instead of losing the maximum value.

### Search

Search now uses Fuse.js when the browser bundle provides it, with a deterministic substring fallback. Result rendering escapes data-controlled text and IDs are encoded before insertion into links.

### Deployment

The Netlify configuration no longer contains two competing `[build]` blocks, no longer rewrites every URL to `index.html`, and no longer gzip-replaces source files in-place while retaining their original extensions.

## Data trust risk

The country dataset must not be treated as a verified migration database merely because records exist. Legal requirements, fees, processing times, approval rates and relocation costs change and require source/effective/verification metadata.

See `docs/reference/DATA_TRUST_STANDARD.md`.

The current coverage is below the 26-country blueprint target. Expansion is intentionally blocked on evidence quality rather than filled with guessed values.

## Architecture target

Move from:

`country → static aggregate data → calculator/blog`

toward:

`country → pathway → eligibility → evidence → cost → timeline → risks → recommendation → next action`

This preserves the original vision while making the product capable of answering user-specific route questions reliably.

## Release gates

The project should not be called production-ready until all P0 gates pass:

1. `npm run build` succeeds reproducibly.
2. `npm run data:validate` passes without critical errors.
3. Unit tests cover calculator/search/data validation.
4. Generated routes and static assets are smoke-tested.
5. Representative deep links work on the deployed site.
6. Migration claims have source/provenance metadata.
7. Unsupported or stale statistics are clearly labelled.
8. Accessibility and security baselines pass.

## What not to do yet

- Do not inflate the country count with unverified records.
- Do not publish estimated approval rates as official statistics.
- Do not add a second calculator/search implementation.
- Do not treat old percentage-complete numbers as release gates.
- Do not prioritize social/monetization work over P0 trust and correctness.

## Next execution sequence

**P0 now:** schema + provenance → tests → build/deploy smoke tests → pathway model.  
**Then:** evidence-backed country expansion → `Find My Route` → SEO → trust/compliance → growth.
