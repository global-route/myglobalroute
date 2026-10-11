# Next Sprint — P1-S1 Country Source Refresh & Dataset Reconciliation

**Status:** IN PROGRESS — manifest generated; source outcomes recorded; human sign-off and two source blockers remain.  
**Prepared:** 2026-10-11.  
**Initial planning baseline:** `933ca27d1542083078de104e2ac3550d8fde59c5`.
**Last pre-change source-tree checkpoint:** `cb1d5882442be39ef1f16a84e904125bf6c2f331` (Quality Gate pass; final same-head three-workflow verification pending).  
**Current implementation baseline:** `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`.  
**Exit status:** OPEN — no country anchor is marked reviewed until an auditable outcome is recorded.  
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
- [x] Extract all 26 country IDs, names and URLs from countries.json.
- [x] Generate `docs/data/country-source-review-manifest.json`; generator asserts 26 unique IDs and HTTPS source URLs.
- [ ] Capture baseline validation and evidence-freshness output on final implementation SHA.

**Current result:** manifest committed; task remains partially complete until baseline output is recorded on final verified SHA.

**Clarification:** the Markdown checklist below is prepared, but this does not complete the machine-readable manifest task. Keep P1-S1.1 open until the generated manifest and baseline output are committed and validated.

**Exit:** inventory is generated from the actual registry, not hand-entered guesses.

### P1-S1.2 — Review every official anchor
- [x] Record an auditable outcome for each of 26 anchors, including redirects and tool access limitations.
- [x] Inspect official landing pages or alternatives for 25 entries; record Luxembourg as needing a more specific migration entry point and Russia as requiring manual verification.
- [x] Update only two registry URLs whose current official replacements were verified (Austria and Czechia).
- [ ] Obtain human sign-off and resolve/accept the two blocked anchors.

**Current result:** 26/26 outcomes recorded; source review is not fully signed off.

**Exit:** 26/26 country anchors have auditable outcomes, unresolved entries are explicitly blocked and the batch is signed off. Current: outcomes recorded; sign-off and Luxembourg/Russia follow-up remain open.

### P1-S1.3 — Reconcile metadata safely
- [ ] Keep `dataset.asOf=2026-09-05` unchanged until review is signed off and blockers are resolved or formally excepted.
- [x] Keep unsupported aggregates null and country records evidence-gated.
- [ ] Add/adjust tests so dataset.asOf cannot advance without a complete manifest or documented exception.

**Exit:** metadata date truthfully represents the completed review batch.

### P1-S1.4 — Verify and hand over
- [ ] Run data validation, country-manifest check, evidence freshness, tests, build/build verification, lint and browser smoke on the same final SHA.
- [ ] Update ACTIVE_SPRINT.md, PHASE_STATUS.md, EXECUTION_STATUS.md and release verification with exact SHA and run URLs.
- [ ] Mark only actually completed tasks complete and preserve remaining blockers.

**Exit:** same-head gates pass and the next sprint has a concrete backlog.

## Exact country review checklist

Generated from the current countries.json registry (26 unique records). Mark a row complete only after the registered official anchor is actually reviewed and the result is recorded. A checked box means source review occurred, not merely that the URL exists.

| Done | ID | Country | Official anchor currently registered | Review outcome / evidence |
|---|---|---|---|---|
| [ ] | GB | United Kingdom | https://www.gov.uk/browse/visas-immigration | Not reviewed in this sprint |
| [ ] | CA | Canada | https://www.canada.ca/en/services/immigration-citizenship.html | Not reviewed in this sprint |
| [ ] | AU | Australia | https://immi.homeaffairs.gov.au/ | Not reviewed in this sprint |
| [ ] | NZ | New Zealand | https://www.immigration.govt.nz/ | Not reviewed in this sprint |
| [ ] | IE | Ireland | https://www.irishimmigration.ie/ | Not reviewed in this sprint |
| [ ] | DE | Germany | https://www.auswaertiges-amt.de/en/visa-service | Not reviewed in this sprint |
| [ ] | IT | Italy | https://vistoperitalia.esteri.it/ | Not reviewed in this sprint |
| [ ] | FR | France | https://france-visas.gouv.fr/ | Not reviewed in this sprint |
| [ ] | HU | Hungary | https://oif.gov.hu/ | Not reviewed in this sprint |
| [ ] | FI | Finland | https://migri.fi/en/home | Not reviewed in this sprint |
| [ ] | SE | Sweden | https://www.migrationsverket.se/ | Not reviewed in this sprint |
| [ ] | NO | Norway | https://www.udi.no/en/ | Not reviewed in this sprint |
| [ ] | LU | Luxembourg | https://guichet.public.lu/en.html | Not reviewed in this sprint |
| [ ] | LT | Lithuania | https://migracija.lrv.lt/en/ | Not reviewed in this sprint |
| [ ] | IS | Iceland | https://island.is/en/o/directorate-of-immigration | Not reviewed in this sprint |
| [ ] | PT | Portugal | https://aima.gov.pt/ | Not reviewed in this sprint |
| [ ] | ES | Spain | https://www.inclusion.gob.es/ | Not reviewed in this sprint |
| [ ] | AT | Austria | https://www.oesterreich.gv.at/en/themen/migration_und_integration.html | Not reviewed in this sprint |
| [ ] | JP | Japan | https://www.moj.go.jp/isa/ | Not reviewed in this sprint |
| [ ] | KR | South Korea | https://www.immigration.go.kr/immigration_eng/index.do | Not reviewed in this sprint |
| [ ] | CN | China | https://en.nia.gov.cn/ | Not reviewed in this sprint |
| [ ] | PL | Poland | https://www.gov.pl/web/udsc-en | Not reviewed in this sprint |
| [ ] | MT | Malta | https://identita.gov.mt/ | Not reviewed in this sprint |
| [ ] | RU | Russia | https://mid.ru/en/ | Not reviewed in this sprint |
| [ ] | CH | Switzerland | https://www.sem.admin.ch/sem/en/home.html | Not reviewed in this sprint |
| [ ] | CZ | Czechia | https://mv.gov.cz/mvcren/ | Not reviewed in this sprint |

## Baseline and execution log — 2026-10-11

- Latest completed same-SHA CI checkpoint: `fc3c06a0a6078df4473d2f09015391cff09eef3f`; implementation baseline: `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`.
- Quality Gate PASS: [run 38116957166](https://github.com/global-route/myglobalroute/actions/runs/38119296014) — 17 suites / 113 tests; 0 dependency vulnerabilities; data validation 26 countries / 56 pathways / 193 evidence records; build integrity and SEO/A11y checks passed (168 generated HTML files).
- Lint PASS: [run 38116957132](https://github.com/global-route/myglobalroute/actions/runs/38119295995).
- Browser Smoke PASS: [run 38116957147](https://github.com/global-route/myglobalroute/actions/runs/38119295980).
- Freshness inventory: 193 current / 0 overdue / 0 missing / 0 invalid review dates. This is a review-date inventory, not evidence that all country anchors were reopened.
- Country source-review checklist: **0/26 reviewed in this sprint**. All rows intentionally remain unchecked.
- `dataset.asOf=2026-09-05` is unchanged. Do not advance it until the 26-anchor review has auditable outcomes and the manifest/date guard is verified.
- P1-S1.1 remains open: the Markdown checklist exists, but a machine-readable manifest and captured baseline artifact have not yet been committed.

## Next after P1-S1

1. P1-REQ — expand structured requirements from exact official sources, preserving date, family-size, region, cost components and exceptions.
2. P1-ROUTE — add tests for missing inputs, stale/mismatched evidence, threshold boundaries, alternatives and no-match.
3. P0-S5 continues in parallel; Phase 0 cannot close until host, deployed SHA, live security headers, production smoke and branch protection are verified.

This plan is not evidence of completion. Do not mark P1-S1 or Phase 1 complete until exit criteria are demonstrated in code, docs and verification.


## Parallel P1-REQ delta — 2026-10-11
Three declarations were added for UK Student, New Zealand Fee Paying Student and Ireland Critical Skills. The schema validator test checks exact evidence, URL, jurisdiction, effective date and scoped cost components. Total: 12 declarations across 5/56 pathways; 51 remain unstructured. P1-REQ remains open.


### Follow-up — Luxembourg and Russia
- Luxembourg official third-country immigration pages have been logged as alternatives; the registered root remains a generic redirect and may be replaced after human review.
- Russia's official MFA consular page found in this pass is Denmark-mission-specific. Verify the applicable mission/official source for the target applicant jurisdiction before closing the source review.
- `dataset.asOf` remains unchanged pending human sign-off.
