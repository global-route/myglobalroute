# Next Sprint — P1-S1 Country Source Refresh & Dataset Reconciliation

**Status:** Planned / not yet started.  
**Prepared:** 2026-10-11.  
**Baseline SHA:** 9d03a746311b6f3cf532afe8b7965068a43a8285.  
**Priority:** Data-trust work concurrent with externally blocked P0-S5.

## Objective

Re-open the official landing-source anchor for every country in src/data/countries.json, verify that it still points to the responsible authority and relevant migration entry point, record the outcome, and only then reconcile retrievedAt, review dates and dataset.asOf. The current dataset.asOf is 2026-09-05 and is stale. A fresh pathway evidence inventory does not prove that all 26 country landing-source anchors were reviewed.

## Rules

- Do not bulk-bump dates, treat HTTP 200 as substantive verification, or use a generic homepage as proof of pathway-specific claims.
- Record country ID, authority, URL, checked date, access/redirect status, relevant official page found, material changes, affected evidence IDs, reviewer and next review date.
- If automation is blocked, seek another official page/document from the same authority. If no source can be verified, preserve the old date and record the blocker.
- Keep aggregate approval rates, costs and timelines null until field-level evidence and methodology support them.
- Do not change pathway-level evidence dates merely because a country landing page was reviewed.

## Tasks

### P1-S1.1 — Generate source manifest
- [ ] Fetch current main and extract all 26 country IDs, names and URLs directly from countries.json.
- [ ] Generate a machine-readable manifest; assert 26 unique IDs and no missing URLs.
- [ ] Record baseline validation and evidence-freshness output.

**Exit:** inventory is generated from the actual registry, not hand-entered guesses.

### P1-S1.2 — Review every official anchor
- [ ] Review all 26 sources and record accessible, redirected, blocked or replaced outcomes.
- [ ] Update only entries actually checked.
- [ ] Preserve explicit blockers for inaccessible sources.

**Exit:** 26/26 country anchors have auditable outcomes; unresolved entries remain explicitly blocked.

### P1-S1.3 — Reconcile metadata safely
- [ ] Update dataset.asOf only after all 26 reviews are complete.
- [ ] Keep unsupported aggregates null and country records evidence-gated.
- [ ] Add/adjust tests so dataset.asOf cannot advance without a complete manifest or documented exception.

**Exit:** metadata date truthfully represents the completed review batch.

### P1-S1.4 — Verify and hand over
- [ ] Run data validation, evidence freshness, tests, build/build verification, lint and browser smoke.
- [ ] Update ACTIVE_SPRINT.md, PHASE_STATUS.md, EXECUTION_STATUS.md and release verification with exact SHA and run URLs.
- [ ] Mark only actually completed tasks complete and preserve remaining blockers.

**Exit:** same-head gates pass and the next sprint has a concrete backlog.

## Country review checklist

The first task must generate one row per exact country ID/name/URL directly from countries.json. Do not hand-enter a guessed list or infer missing rows from memory. Mark each row complete only after the registered official source has actually been reviewed and the outcome recorded.

- [ ] Generate source manifest from current countries.json.
- [ ] Review each of 26 official country anchors.
- [ ] Reconcile changed authorities/URLs and evidence impacts.
- [ ] Update country source dates only for reviewed entries.
- [ ] Reconcile dataset.asOf after all 26 are reviewed.
- [ ] Run all required same-SHA verification.

## Next after P1-S1

1. P1-REQ — expand structured requirements from exact official sources, preserving date, family-size, region, cost components and exceptions.
2. P1-ROUTE — add tests for missing inputs, stale/mismatched evidence, threshold boundaries, alternatives and no-match.
3. P0-S5 continues in parallel; Phase 0 cannot close until host, deployed SHA, live security headers, production smoke and branch protection are verified.

This plan is not evidence of completion. Do not mark P1-S1 or Phase 1 complete until exit criteria are demonstrated in code, docs and verification.
