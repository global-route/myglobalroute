# Global Route — Execution Status

**Date:** September 12, 2026  
**Phase:** Production Integrity & Migration Intelligence Core  
**Status:** Active — P0 execution  
**Branch:** `main`

## Current truth

Global Route is being rebuilt around an evidence-first, pathway-level migration intelligence model. The original blueprint remains intact; legacy Phase 3 blog/deployment notes below this document are historical and are no longer the active execution plan.

### P0 completed

- 26-country evidence-gated country registry.
- 52+ pathway records with authoritative source anchors.
- 45 field-level primary-source evidence records across the registry and dated addenda.
- Material evidence requirements and hard publishability gate.
- Six Germany/France/Spain pathways promoted to `publishable` with explicit `evidenceIds`.
- Finland, Italy and Norway evidence expanded in the latest primary-source batch.
- Evidence-gated route recommendation engine and Find My Route surface.
- Canonical calculator/search/runtime data-path fixes.
- Generated country/pathway detail pages with evidence/source trails.
- Generated-output integrity validation, including internal deep-link checks.
- Generated SEO/accessibility smoke gate wired into verification and CI.
- Privacy, disclaimer and terms baseline.
- SEO-origin hardening: unverified `myglobalroute.com` canonicals, metadata and sitemap references removed.
- Evidence provenance validation for future `publishable` pathways.
- Validation date is current-aware with `VALIDATION_AS_OF` available for deterministic release checks.

## P0 active blockers

1. **CI execution:** GitHub Actions is now executing the Quality Gate on `main`; final pass/fail is still pending. The workflow deliberately installs without npm cache because no lockfile is committed.
2. **Primary-source coverage:** most pathways remain `research_required`; only evidence-backed fields may become publishable.
3. **Pathway-specific legal-subroute review:** generic pathway records must be narrowed or explicitly qualified before broader promotion.
4. **Browser/E2E verification:** generated-output and SEO/accessibility static gates exist, but real browser interaction has not yet been executed.
5. **Production origin:** the authoritative Netlify project/domain has not been independently established. `myglobalroute.com` is not the repository deployment and must not be used as the canonical origin.
6. **Production smoke:** blocked until the authoritative deployment origin is verified.

## Verification rule

A green implementation is not a green release. Every production/data-trust claim requires objective verification. If CI runs and fails, record the actual failure and remediate it; never convert an unverified run into a pass.

## Next execution sequence

`CI pass/fix → primary-source evidence batches → legal-subroute review → publishable promotion → browser/E2E + accessibility/SEO → Netlify origin verification → restore canonical/sitemap/robots → production smoke → release`

## Historical documentation

Older Phase 3 blog/deployment documents may contain stale July/August 2026 status, URLs or assumptions. Treat `docs/sprints/ACTIVE_SPRINT.md`, `docs/project/RELEASE_VERIFICATION_2026-09-05.md`, `docs/project/EXECUTION_ROADMAP.md` and the repository state as authoritative for current execution.
