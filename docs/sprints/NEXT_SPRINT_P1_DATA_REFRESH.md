# Next Sprint — P1-S1 Country Source Refresh & Dataset Reconciliation

**Status:** Ready for execution / source review not started.  
**Prepared:** 2026-10-11.  
**Planning baseline:** `933ca27d1542083078de104e2ac3550d8fde59c5`.  
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
- [ ] Fetch current main and extract all 26 country IDs, names and URLs directly from countries.json.
- [ ] Generate a machine-readable manifest; assert 26 unique IDs and no missing URLs.
- [ ] Record baseline validation and evidence-freshness output.

**Clarification:** the Markdown checklist below is prepared, but this does not complete the machine-readable manifest task. Keep P1-S1.1 open until the generated manifest and baseline output are committed and validated.

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

## Next after P1-S1

1. P1-REQ — expand structured requirements from exact official sources, preserving date, family-size, region, cost components and exceptions.
2. P1-ROUTE — add tests for missing inputs, stale/mismatched evidence, threshold boundaries, alternatives and no-match.
3. P0-S5 continues in parallel; Phase 0 cannot close until host, deployed SHA, live security headers, production smoke and branch protection are verified.

This plan is not evidence of completion. Do not mark P1-S1 or Phase 1 complete until exit criteria are demonstrated in code, docs and verification.
