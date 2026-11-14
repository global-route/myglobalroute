# ACTIVE SPRINT TASKFILE — MyPathway2Global
**Updated:** 2026-11-11 | **Commit:** `b6e5d7b` | **Tests:** 19/19, 214/214
**Posts:** 126 | **Countries:** 35 | **Pathways:** 75 | **Demand records:** 24 | **Evidence records:** 222
**Data validation:** PASSED | **Stale requirements:** 1 (IE-critical-skills — evidence-date locked)

Single source of truth for all outstanding work. Status: DONE / PENDING / BLOCKED

---

## PRIORITY 1 — Must fix before deploy (blocks production correctness)

| ID | Task | File | Status |
|---|---|---|---|
| P1-1 | Sitemap: add all 22 new posts (W1-W22) | `public/sitemap.xml` | **DONE** |
| P1-2 | Sitemap: add Bulgaria, Croatia, Guyana country pages | `public/sitemap.xml` | **DONE** |
| P1-3 | Sitemap: add Singapore country page | `public/sitemap.xml` | **DONE** |
| P1-4 | Sitemap: update lastmod dates on all existing entries to 2026-11-11 | `public/sitemap.xml` | **DONE** |
| P1-5 | IE Critical Skills stale requirement — evidence-date locked, cannot update without new evidence record | `src/data/pathways.json` | **BLOCKED** (evidence-locked) |
| P1-6 | About page: update post count (107→125), country count (31), pathway count (71) | `src/pages/about.html` | **DONE** `b6e5d7b` |
| P1-7 | Data validation: fix 57 effectiveDate mismatches + 12 expired reviewAfter evidence records | `src/data/pathways.json` + evidence files | **DONE** |
| P1-8 | Build verify + full test run after all P1 fixes | — | **DONE** — 214/214, DATA VALIDATION PASSED |
| P1-9 | Commit + push P1 fixes | — | **DONE** |

---

## PRIORITY 2 — Data completeness (WAA wizard gaps)

| ID | Task | File | Status |
|---|---|---|---|
| P2-1 | Add Bulgaria (BG) to `countries.json` | `src/data/countries.json` | **DONE** |
| P2-2 | Add Croatia (HR) to `countries.json` | `src/data/countries.json` | **DONE** |
| P2-3 | Add Guyana (GY) to `countries.json` | `src/data/countries.json` | **DONE** |
| P2-4 | Add BG-study pathway to `pathways.json` | `src/data/pathways.json` | **DONE** |
| P2-5 | Add HR-study pathway to `pathways.json` | `src/data/pathways.json` | **DONE** |
| P2-6 | Add GY-freelance-work pathway to `pathways.json` | `src/data/pathways.json` | **DONE** |
| P2-7 | Add OM-employer-sponsored-trades pathway to `pathways.json` | `src/data/pathways.json` | **DONE** |
| P2-8 | Add D7: `IE-healthcare-skilled-2026` demand record | `src/data/occupation-demand.json` | **DONE** |
| P2-9 | Add D8: `NL-software-it-skilled-2026` demand record | `src/data/occupation-demand.json` | **DONE** |
| P2-10 | Update `validate-data.js` country count 31→34 after BG/HR/GY added | `scripts/validate-data.js` | **DONE** |
| P2-11 | Update test files for new country count | `tests/data-contract.test.js`, `tests/country-source-manifest.test.js`, `tests/evidence-registry.test.js` | **DONE** |
| P2-12 | Regenerate country source manifest | `scripts/generate-country-source-manifest.js --write` | **DONE** |
| P2-13 | Commit + push P2 data additions | — | **DONE** |

---

## PRIORITY 3 — Content gaps (remaining posts)

| ID | Task | File | Status |
|---|---|---|---|
| P3-1 | W14: Antigua and Barbuda visa from Nigeria — safety framing, job-on-arrival pattern | `content/blog/country-audits/antigua-barbuda/antigua-barbuda-visa-from-nigeria-2026.md` | **DONE** |
| P3-2 | Bulgaria country audit blog post (W8 written as guide, needs country audit format) | Already done as W8 | **DONE** |
| P3-3 | Croatia country audit blog post | Already done as W9 | **DONE** |
| P3-4 | Guyana country audit blog post | Already done as W7 | **DONE** |
| P3-5 | Commit + push P3 content | — | **DONE** |

---

## PRIORITY 4 — Research tasks (from WAA_RESEARCH_PREP.md)

These are research actions that feed future content and agent pipeline. No code blocker.

| ID | Task | Source | Output |
|---|---|---|---|
| R1 | Verify Canada Francophone Immigration Pilot current status at canada.ca � confirm FCIP is still active and occupation list unchanged | `canada.ca/francophone-community` | **DONE** � FCIP active, claims verified |
| R2 | Verify Guyana freelance work permit at immigration.gov.gy � confirm 2-year permit still active, current fees | `immigration.gov.gy` | **DONE** � 2-year permit confirmed |
| R3 | Verify Oman Ministry of Labour trades salary data � confirm OMR 150-350 range is current | `mol.gov.om` | **DONE** � OMR range confirmed |
| R4 | Verify Bulgaria Schengen land border status � confirm Jan 2025 land border accession | `mfa.bg` | **DONE** � Jan 2025 confirmed |
| R5 | Verify Netherlands Highly Skilled Migrant salary thresholds for 2026 � EUR 46,107 / EUR 63,503 | `ind.nl` | **DONE** � thresholds confirmed |
| R6 | Verify Ireland NMBI registration fee � EUR 330 current | `nmbi.ie` | **DONE** � EUR 330 confirmed |
| R7 | Verify Germany Pflegekrafte B1 language acceptance � confirm B1 is accepted for care roles | `make-it-in-germany.com` | **DONE** � B1 confirmed |
| R8 | Agent vetting research — 8 companies from WAA_RESEARCH_PREP.md Section 8 | See WAA_RESEARCH_PREP.md | Feed WAA-3a agent pipeline |

**Agent companies to research (from field research images):**

| Company | Seen in | Verify at | Output |
|---|---|---|---|
| HelpOverseas | Facebook paid ads | helpoverseas.com + RCIC register iccrc-crcic.ca | Legitimate? RCIC registered? |
| HY BAZE Travels and Tours | Telegram | CAC register search.cac.gov.ng | CAC registered? |
| Aventria Tours and Events | Telegram | CAC register | CAC registered? |
| Liberty Track Travels | Telegram | CAC register + Ghana Tourism Authority | Registered in both countries? |
| Yellowlane | Telegram | yellowlanehq.com + CAC | Offices verified? |
| Future First Consulting Ltd | Telegram | futurefirstconsults.com | Study abroad referral — legitimate? |

---

## PRIORITY 5 — WAA-3a (blocked on owner — no code action until resolved)

| ID | Task | Status | Owner |
|---|---|---|---|
| WAA-3a-1 | Define agent vetting checklist (licence, reference, complaint history, signed agreement) | **BLOCKED** | Owner |
| WAA-3a-2 | Sign first commercial agreement — suggested corridor: NG-DE tech | **BLOCKED** | Owner |
| WAA-3a-3 | Confirm lead fee structure per qualified lead | **BLOCKED** | Owner |
| WAA-3a-4 | Choose form submission: Formspree (fast) or Cloudflare Worker (more control) | **BLOCKED** | Owner |
| WAA-3a-5 | Add first verified agent to `src/data/agents.json` with `verificationStatus: verified` | **BLOCKED** | Owner + dev (10 min once WAA-3a-1 to 4 done) |

When WAA-3a-1 to 4 are resolved, WAA-3b/3c/3d code already live activates automatically.

---

## PRIORITY 6 — Deployment (owner actions)

| ID | Task | Status |
|---|---|---|
| D1 | Fix wrangler DNS issue — downgrade to v3: `npm install --save-dev wrangler@3` | **OWNER ACTION** |
| D2 | Deploy: `npx wrangler deploy` | **OWNER ACTION** |
| D3 | Post-deploy smoke test: verify site loads, WAA wizard works, new posts accessible | **OWNER ACTION** |
| D4 | Re-run axe accessibility audit after deploy (WCAG 2.1 AA) | **OWNER ACTION** |

**Deploy command (macOS):**
```bash
npm install --save-dev wrangler@3
npx wrangler deploy
```

---

## PRIORITY 7 — Ongoing quality gates (run before every deploy)

| Gate | Command | Status |
|---|---|---|
| Tests | `npm test` | 19/19, 214/214 PASS |
| Data validation | `node scripts/validate-data.js` | PASS — 31 countries, 71 pathways, 222 evidence records |
| Agent registry | `node scripts/validate-agent-registry.js` | PASS (0 verified agents) |
| Commercial registry | `node scripts/validate-commercial-registry.js` | PASS |
| Build integrity | `node scripts/verify-build.js` | PASS |
| Stale pathways | `node scripts/check-stale-pathways.js` | 1 stale (IE-critical-skills — evidence-locked) |

---

## PRIORITY 8 — Post-deploy content pipeline (next sprint)

These are the next content items after deployment. No code blocker.

| ID | Post | Category | Why |
|---|---|---|---|
| N1 | Canada healthcare — nurses via Provincial Nominee Programs | Professional Playbook | High-volume corridor, no dedicated post |
| N2 | Germany care work — finding employers (Pflegeheime job search guide) | Guide — Work | Companion to W22, practical next step |
| N3 | UAE trades — electricians and plumbers (separate from domestic/construction) | Guide — Work | Demand record exists, no post |
| N4 | Singapore S Pass — mid-skilled route (separate from EP) | Guide — Work | S Pass demand record exists, no post |
| N5 | Ireland healthcare — beyond nursing (physiotherapy, radiography, OT) | Guide — Work | IE healthcare demand record covers more than nursing |
| N6 | Canada PNP tech streams — Ontario, BC, Alberta (companion to W1) | Professional Playbook | PNP is the fastest route for most tech applicants |
| N7 | Real budget breakdown: Nigeria to Germany (Chancenkarte journey) | Case Study | Gap area in CONTENT_PIPELINE.md |
| N8 | Real budget breakdown: Nigeria to UAE (construction/healthcare worker) | Case Study | Gap area in CONTENT_PIPELINE.md |
| N9 | Visa rejection recovery — what happened after refusal and what changed | Case Study | Gap area in CONTENT_PIPELINE.md |
| N10 | UK Innovator Founder Visa — updated with current endorsing bodies | Professional Playbook | Existing post needs freshness update |

---

## Platform state summary

| Metric | Current | Target (next deploy) |
|---|---|---|
| Blog posts | 126 | 126 ? |
| Countries in registry | 35 | 35 ? (after BG/HR/GY) |
| Pathways | 75 | 75 ? (after BG/HR/GY/OM) |
| Demand records | 24 | 24 ? (after D7 IE, D8 NL) |
| Evidence records | 222 | 222 |
| Sitemap URLs | 181 | 181 ✓ |
| Tests | 214/214 | 214/214 |
| Data validation | PASSED | PASSED |
| Watermark coverage | 125/125 posts | 125/125 |
| Agent records (verified) | 0 | 1 (after WAA-3a owner action) |

---

## Execution order recommendation

**Before deploy (code tasks — no owner needed):**
1. P1-1 to P1-4 (sitemap update) — ~20 min
2. P2-1 to P2-13 (BG/HR/GY countries + pathways + demand records) — ~45 min
3. P3-1 (W14 Antigua post) — ~20 min
4. Full test + data validation + build verify
5. Commit + push

**Deploy (owner action):**
6. `npm install --save-dev wrangler@3 && npx wrangler deploy`
7. Post-deploy smoke test

**After deploy (ongoing):**
8. R1-R7 research verification
9. R8 agent company research — feeds WAA-3a
10. N1-N10 next content sprint

**Blocked until owner action:**
- WAA-3a-1 to 5 — first verified agent
