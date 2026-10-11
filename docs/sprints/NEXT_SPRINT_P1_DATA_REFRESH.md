# Next Sprint — P1-S1 Country Source Refresh & Dataset Reconciliation

**Status:** IN PROGRESS — manifest complete, 26 outcomes recorded, 25 relevant official pages/alternatives inspected; human sign-off and Russia jurisdiction confirmation remain.
**Prepared / reconciled:** 2026-10-11
**Release:** **NO-GO**

## Verified implementation and CI evidence

**Implementation/data SHA:** `95f960c081367305dea0144034d48a4ab7892426`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112572
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112454
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112490

**CI workflow follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`
- Quality Gate PASS (includes manifest synchronization): https://github.com/global-route/myglobalroute/actions/runs/38144183966
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183952
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183936

Quality Gate output: 26 countries, 56 pathways, 193 evidence records; zero dependency vulnerabilities; manifest synchronization passed; 18 suites / 122 tests passed; build integrity and SEO/accessibility checks passed across 168 generated HTML files.

## P1-S1.1 — Generate source manifest

- [x] Extract all 26 country IDs, names and URLs from the live registry.
- [x] Generate `docs/data/country-source-review-manifest.json`.
- [x] Add `scripts/generate-country-source-manifest.js`, registry-sync test and `npm run data:country-manifest`.
- [x] Add the manifest check to the Quality Gate workflow.
- [x] Capture baseline data validation, freshness output and full test/build verification in the Quality Gate logs linked above.

**Status: COMPLETE.** Registry validation passed: 26 countries, 56 pathways, 193 evidence records. The dataset-wide freshness date is deliberately not advanced.

## P1-S1.2 — Review every official source anchor

- [x] Record an auditable outcome for each of the 26 country anchors.
- [x] Inspect relevant official pages or official alternatives for 25 entries.
- [ ] Confirm the correct Russian MFA/consular source for the applicable target applicant jurisdictions; official Nigeria-mission visa material has now been located, but target-market coverage and human sign-off remain unresolved.
- [ ] Obtain human sign-off for all AI-assisted observations.
- [x] Update Austria and Czechia registry URLs only where more relevant official government entry points were verified.
- [x] Record Luxembourg official third-country immigration alternatives; consider replacing its generic root anchor after sign-off.

**Status: OUTCOMES RECORDED; REVIEW NOT SIGNED OFF.** Tool errors are not treated as proof that a source is down. Country-level anchor review does not verify pathway-specific eligibility or financial claims.

## P1-S1.3 — Reconcile metadata safely

- [x] Keep unsupported aggregates null and country records evidence-gated.
- [x] Keep `dataset.asOf=2026-09-05` unchanged.
- [ ] Obtain source-review sign-off and resolve or formally accept the Russia jurisdiction exception.
- [ ] Only then decide whether the dataset-wide freshness date can be advanced.
- [ ] Add an explicit date-advance guard if the project chooses to enforce the policy in code.

**Status: OPEN.** A reviewed landing page is not evidence that every route-level claim is current.

## P1-S1.4 — Verify and hand over

- [x] Data validation, manifest synchronization, evidence freshness report, unit tests, build/build verification, lint and browser smoke passed on the verified implementation/data SHA above.
- [x] Record exact run URLs in the active sprint, execution status, release verification and changelog.
- [x] Update the phase/sprint/roadmap/handover records to preserve open blockers.
- [ ] Complete P0-S5 external production verification separately; source-tree CI does not close it.

**Status: IMPLEMENTATION VERIFIED; RELEASE GATE STILL OPEN.**

## Exact country review checklist

A checked row means an official page or official alternative was inspected and the outcome recorded. It does **not** mean human sign-off is complete or pathway claims were verified. All records are in the machine-readable manifest.

| Outcome recorded | ID | Country | Official anchor currently registered | Review outcome / evidence |
|---|---|---|---|---|
| [x] | GB | United Kingdom | https://www.gov.uk/browse/visas-immigration | **reviewed_relevant_human_signoff_pending** — Official UK government hub for visit, work, study, family and settlement. Source: https://www.gov.uk/browse/visas-immigration |
| [x] | CA | Canada | https://www.canada.ca/en/services/immigration-citizenship.html | **reviewed_relevant_human_signoff_pending** — Official Government of Canada immigration hub; page details showed 2026-09-28. Source: https://www.canada.ca/en/services/immigration-citizenship.html |
| [x] | AU | Australia | https://immi.homeaffairs.gov.au/ | **reviewed_relevant_human_signoff_pending** — Department of Home Affairs immigration and citizenship entry point. Source: https://immi.homeaffairs.gov.au/ |
| [x] | NZ | New Zealand | https://www.immigration.govt.nz/ | **reviewed_relevant_human_signoff_pending** — Official portal covers visit, study, work and residence. Source: https://www.immigration.govt.nz/ |
| [x] | IE | Ireland | https://www.irishimmigration.ie/ | **reviewed_relevant_human_signoff_pending** — Official immigration service entry point with visit, work, study, live and family categories. Source: https://www.irishimmigration.ie/ |
| [x] | DE | Germany | https://www.auswaertiges-amt.de/en/visa-service | **reviewed_relevant_human_signoff_pending** — Official Federal Foreign Office visa-service entry point. Source: https://www.auswaertiges-amt.de/en/visa-service |
| [x] | IT | Italy | https://vistoperitalia.esteri.it/ | **reviewed_relevant_human_signoff_pending** — Official Italian visa portal opened; no pathway-specific Flussi claim verified. Source: https://vistoperitalia.esteri.it/ |
| [x] | FR | France | https://france-visas.gouv.fr/ | **reviewed_relevant_human_signoff_pending** — Official France-Visas portal. Source: https://france-visas.gouv.fr/ |
| [x] | HU | Hungary | https://oif.gov.hu/ | **reviewed_relevant_human_signoff_pending** — Official National Directorate-General for Aliens Policing site; confirm preferred English entry point. Source: https://oif.gov.hu/ |
| [x] | FI | Finland | https://migri.fi/en/home | **reviewed_alternate_official_human_signoff_pending** — Official Finnish Immigration Service page covers permits and citizenship; registered URL not directly retrievable by tool. Source: https://migri.fi/en/home?userLang=en |
| [x] | SE | Sweden | https://www.migrationsverket.se/ | **reviewed_authority_homepage_human_signoff_pending** — Official Swedish Migration Agency homepage opened; confirm English entry point. Source: https://www.migrationsverket.se/ |
| [x] | NO | Norway | https://www.udi.no/en/ | **reviewed_alternate_official_human_signoff_pending** — Official UDI page covers applications, renewals, checklists and waiting times. Source: https://www.udi.no/EN |
| [x] | LU | Luxembourg | https://guichet.public.lu/en.html | **reviewed_alternate_official_page_human_signoff_pending** — Official Guichet.lu third-country salaried-worker residence page located; a current French version was also indexed as updated 2026-10-01. The registered homepage still redirects to a generic citizens page, so consider a more direct country anchor. This is a source-navigation review only, not verification of any route claim. Source: https://guichet.public.lu/en/citoyens/immigration/vivre/non-luxembourg/immigration/pays-tiers/salarie/salarie-pays-tiers.html |
| [x] | LT | Lithuania | https://migracija.lrv.lt/en/ | **reviewed_relevant_human_signoff_pending** — Official Migration Department English entry point. Source: https://migracija.lrv.lt/en/ |
| [x] | IS | Iceland | https://island.is/en/o/directorate-of-immigration | **reviewed_alternate_official_human_signoff_pending** — Official page lists residence permits, visas, citizenship and international protection. Source: https://island.is/en/o/directorate-of-immigration |
| [x] | PT | Portugal | https://aima.gov.pt/ | **reviewed_alternate_official_human_signoff_pending** — Official AIMA residence-permit page; registered root needs direct human confirmation. Source: https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1 |
| [x] | ES | Spain | https://www.inclusion.gob.es/ | **reviewed_authority_homepage_human_signoff_pending** — Official ministry homepage includes migration in its remit. Source: https://www.inclusion.gob.es/ |
| [x] | AT | Austria | https://www.oesterreich.gv.at/en/themen/menschen_aus_anderen_staaten | **reviewed_alternate_official_human_signoff_pending** — Official Austrian government page covers residence, asylum, citizenship and visas; registry anchor updated. Source: https://www.oesterreich.gv.at/en/themen/menschen_aus_anderen_staaten |
| [x] | JP | Japan | https://www.moj.go.jp/isa/ | **reviewed_alternate_official_human_signoff_pending** — Official agency page found; preferred English entry point needs human confirmation. Source: https://www.moj.go.jp/isa/guidebook_all.html |
| [x] | KR | South Korea | https://www.immigration.go.kr/immigration_eng/index.do | **reviewed_relevant_human_signoff_pending** — Official English-language immigration service entry point. Source: https://www.immigration.go.kr/immigration_eng/index.do |
| [x] | CN | China | https://en.nia.gov.cn/ | **reviewed_relevant_human_signoff_pending** — Official National Immigration Administration English site. Source: https://en.nia.gov.cn/ |
| [x] | PL | Poland | https://www.gov.pl/web/udsc-en | **reviewed_relevant_human_signoff_pending** — Official Polish Office for Foreigners English entry point. Source: https://www.gov.pl/web/udsc-en |
| [x] | MT | Malta | https://identita.gov.mt/ | **reviewed_alternate_official_human_signoff_pending** — Official page states the Expatriates Unit handles residence documents and migration policy. Source: https://identita.gov.mt/working-residing-in-malta/ |
| [ ] | RU | Russia | https://mid.ru/en/ | **manual_review_required_jurisdiction_confirmation** — An official Russian Embassy in Nigeria tourist-visa checklist was located: https://nigeria.mid.ru/upload/iblock/841/ewh0w0sis0vj08rcu28qiqic2qe44r75.pdf. This is a better Nigeria-specific candidate than the previously found Denmark-mission page, but does not establish source coverage for every target applicant jurisdiction or verify pathway claims. Keep the blocker and human sign-off requirement open. |
| [x] | CH | Switzerland | https://www.sem.admin.ch/sem/en/home.html | **reviewed_authority_homepage_human_signoff_pending** — Official State Secretariat for Migration English homepage. Source: https://www.sem.admin.ch/sem/en/home.html |
| [x] | CZ | Czechia | https://ipc.gov.cz/en/ | **reviewed_replacement_found_human_signoff_pending** — Old Ministry URL redirects to archive; current official Ministry of Interior portal found and registry anchor updated. Source: https://ipc.gov.cz/en/ |

## Remaining handover

1. Confirm whether the platform's target market is Nigeria-only or broader African applicants; select the corresponding official Russian mission source(s), inspect them directly, and record human reviewer/date.
2. Obtain human sign-off on the 26-country review batch; review Luxembourg's registered root URL choice.
3. Keep `dataset.asOf` unchanged until review and exceptions are signed off.
4. Continue P1-REQ and P1-ROUTE separately; current structured requirement coverage is 12 declarations across 5/56 pathways, with 51 pathways still unstructured.
5. Continue P0-S5 in parallel: production host/deployed SHA, live CSP/security headers, production smoke and branch protection.

**Exit criteria are not fully met. P1-S1 and Phase 1 remain open; Phase 0 remains blocked; release remains NO-GO.**
