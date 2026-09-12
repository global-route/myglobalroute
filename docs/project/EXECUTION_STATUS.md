# Global Route — Execution Status

**Date:** September 12, 2026  
**Phase:** Production Integrity & Migration Intelligence Core  
**Status:** Active — P0 execution  
**Branch:** `main`

## Current truth

Global Route is being rebuilt around an evidence-first, pathway-level migration intelligence model. The original blueprint remains intact; legacy Phase 3 blog/deployment notes below this document are historical and are no longer the active execution plan.

### P0 completed

- 26-country evidence-gated country registry.
- 52 pathway records with authoritative source anchors — two route records per country.
- 56 field-level primary-source evidence records across the registry and dated addenda.
- Material evidence requirements and hard publishability gate.
- Ten Germany/France/Spain/UK/Ireland pathways promoted to `publishable` with explicit `evidenceIds`.
- Finland, Italy and Norway evidence expanded in the latest primary-source batch.
- New UK and Ireland primary-source batch completed on September 12, 2026.
- Evidence-gated route recommendation engine and Find My Route surface.
- Zero-fit recommendations excluded from ranked results.
- Canonical calculator/search/runtime data-path fixes.
- Generated country/pathway detail pages with evidence/source trails.
- Generated-output integrity validation, including internal deep-link checks.
- Root homepage/public passthrough and generated research index restored.
- Generated core SEO/accessibility smoke gate wired into verification and CI.
- CI Quality Gate passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and core SEO/A11y smoke in the latest confirmed baseline.
- Dependency audit currently reports 0 high-severity-or-higher vulnerabilities after removing bundled Netlify CLI.
- CI and Netlify configuration aligned to Node 24.
- Privacy, disclaimer and terms baseline.
- SEO-origin hardening: unverified `myglobalroute.com` canonicals, metadata and sitemap references removed.
- Evidence provenance validation for future `publishable` pathways.
- Validation date is current-aware with `VALIDATION_AS_OF` available for deterministic release checks.

## P0 active blockers

1. **Primary-source coverage:** 42 pathways remain `research_required`; evidence expansion is still required.
2. **Pathway-specific legal-subroute review:** generic pathway records must be narrowed or explicitly qualified before broader promotion.
3. **Browser/E2E verification:** generated-output and core SEO/accessibility static gates are green, but real browser interaction has not yet been executed.
4. **Production origin:** the authoritative Netlify project/domain has not been independently established. `myglobalroute.com` is not the repository deployment and must not be used as the canonical origin.
5. **Production smoke:** blocked until the authoritative deployment origin is verified.
6. **Legacy editorial cleanup:** old blog/category links and several historical static pages still need a dedicated P1 SEO/accessibility pass.

## Verification rule

A green CI implementation is not a green production release. Every production/data-trust claim requires objective evidence. The latest confirmed CI baseline is green; deployment and browser behavior remain unverified.

## Next execution sequence

`Primary-source evidence batches → legal-subroute review → publishable promotion → browser/E2E → Netlify origin verification → production smoke → canonical/sitemap/robots restoration → P0 exit`

## Historical documentation

Older Phase 3 blog/deployment documents may contain stale July/August 2026 status, URLs or assumptions. Treat `docs/sprints/ACTIVE_SPRINT.md`, `docs/project/RELEASE_VERIFICATION_2026-09-05.md`, `docs/project/EXECUTION_ROADMAP.md` and the repository state as authoritative for current execution.
