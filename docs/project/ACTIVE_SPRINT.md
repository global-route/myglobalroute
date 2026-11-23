# ACTIVE SPRINT TASKFILE — MyPathway2Global
**Updated:** 2026-11-23 | **Commit:** `pending-g3` | **Tests:** 19/19, 214/214
**Posts:** 145 | **Countries:** 35 | **Pathways:** 75 | **Demand records:** 24 | **Evidence records:** 222
**Data validation:** PASSED | **CI:** Quality Gate ✅ | Browser Smoke ✅ | Lint ✅ | Deploy ✅
**Overhaul:** Gates 0-1 PASS — see `docs/project/OVERHAUL_TASKFILE.md`

Single source of truth for current sprint execution. The official overhaul correction programme is tracked in [OVERHAUL_TASKFILE.md](OVERHAUL_TASKFILE.md); use that file for the full overhaul task register. Status: DONE / PENDING / BLOCKED\n\n> **Evidence integrity correction:** Do not bulk-bump `reviewAfter` dates to clear stale-evidence validation. Reverify each official source and dependent requirement, or explicitly quarantine/block the record. See Sprint O2 in [OVERHAUL_TASKFILE.md](OVERHAUL_TASKFILE.md) and the [implementation walkthrough](../implementation/OVERHAUL_IMPLEMENTATION_WALKTHROUGH.md).

---

## PRIORITY 0 — CI failures (blocks green CI)

### 0A — Data validation: 15 stale evidence records (pm run data:validate`)

All evidence records below were reported past their `reviewAfter` date and cannot back structured requirements. **Do not simply extend these dates.** Re-open the official source, verify the exact claim and scope, preserve the audit trail, update dependent requirements, and set a new review date only after verification. If verification is unavailable, keep the record blocked/research-required. Follow Sprint O2 in `docs/project/OVERHAUL_TASKFILE.md`.

| Route | Requirement ID | Evidence ID |
|---|---|---|
| DE-study | DE-study-admission-offer-2025-10-30 | DE-study-eligibility-2026-09-12 |
| DE-opportunity-card | DE-opportunity-card-minimum-funds-monthly-2026-09-12 | DE-opportunity-card-finance-2026-09-12 |
| DE-opportunity-card | DE-opportunity-card-minimum-points-score-2026-09-12 | DE-opportunity-card-eligibility-2026-09-12 |
| FR-study | FR-study-admission-offer-2026-09-12 | FR-study-eligibility-2026-09-12 |
| FR-study | FR-study-minimum-funds-monthly-2026-08-01 | FR-study-finance-2026-09-12 |
| FR-talent | FR-talent-job-offer-2026-09-12 | FR-talent-eligibility-2026-09-12 |
| FR-talent | FR-talent-minimum-annual-salary-2025-08-21 | FR-talent-finance-2026-09-12 |
| NO-study | NO-study-admission-offer-2026-09-14 | NO-study-eligibility-2026-09-14 |
| NO-study | NO-study-minimum-funds-annual-2026-09-14 | NO-study-finance-2026-09-14 |
| NO-work | NO-work-job-offer-2026-09-14 | NO-work-eligibility-2026-09-14 |
| LU-work | LU-work-job-offer-2026-09-13 | LU-work-eligibility-2026-09-13 |
| PT-study | PT-study-admission-offer-2026-09-13 | PT-study-eligibility-2026-09-13 |
| PT-digital-nomad | PT-digital-nomad-job-offer-2026-09-13 | PT-digital-nomad-eligibility-2026-09-13 |
| ES-study | ES-study-admission-offer-2025-11-01 | ES-study-eligibility-2026-09-12 |
| ES-digital-nomad | ES-digital-nomad-job-offer-2026-09-12 | ES-digital-nomad-eligibility-2026-09-12 |

### 0B — SEO/A11Y failures (pm run seo:a11y:verify`)

**Missing `lang` + meaningful `title` — 8 posts using wrong template (not blog-post.njk):**

| File | Issue |
|---|---|
| `blog/guides/work/australia-dama-shortage-occupations-2026/index.html` | missing lang, missing title |
| `blog/guides/work/domestic-worker-rights-gulf-2026/index.html` | missing lang, missing title |
| `blog/guides/work/germany-shortage-occupations-2026/index.html` | missing lang, missing title |
| `blog/guides/work/how-to-verify-recruitment-agent-2026/index.html` | missing lang, missing title |
| `blog/guides/work/qatar-work-visa-reality-check-2026/index.html` | missing lang, missing title |
| `blog/guides/work/uk-shortage-occupations-immigration-salary-list-2026/index.html` | missing lang, missing title |
| `blog/playbooks/professional/canada-francophone-immigration-caregivers-2026/index.html` | missing lang, missing title |
| `blog/playbooks/professional/canada-tech-express-entry-honest-guide-2026/index.html` | missing lang, missing title |

**Inaccessible links — `blog/index.html` (8 links with no text/aria-label):**
Blog index cards have links with no accessible text. Fix: add `aria-label` to card anchor tags.

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
| R6 | Verify Ireland NMBI registration fee � EUR 330 current | mbi.ie` | **DONE** � EUR 330 confirmed |
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
| D1 | Fix wrangler DNS issue — downgrade to v3: pm install --save-dev wrangler@3` | **DONE** |
| D2 | Deploy: px wrangler deploy` | **DONE** `2026-11-20` — 145 posts, 199 URLs, OG image live |
| D3 | Post-deploy smoke test: verify site loads, WAA wizard works, new posts accessible | **DONE** |
| D4 | Re-run axe accessibility audit after deploy (WCAG 2.1 AA) | **PENDING** — owner action |

**Deploy command (macOS):**
```bash
npm install --save-dev wrangler@3
npx wrangler deploy
```

---

## PRIORITY 7 — Ongoing quality gates (run before every deploy)

| Gate | Command | Status |
|---|---|---|
| Tests | pm test` | 19/19, 214/214 PASS |
| Data validation | ode scripts/validate-data.js` | PASS — 35 countries, 75 pathways, 222 evidence records |
| Agent registry | ode scripts/validate-agent-registry.js` | PASS (0 verified agents) |
| Commercial registry | ode scripts/validate-commercial-registry.js` | PASS |
| Build integrity | ode scripts/verify-build.js` | PASS |
| Stale pathways | ode scripts/check-stale-pathways.js` | 1 stale (IE-critical-skills — evidence-locked) |

---

## PRIORITY 8 — Next content sprint (19 posts + 2 updates)

No code blocker on any item. Execute in order. Full file paths in `docs/project/CONTENT_PIPELINE.md`.

### High priority — write first

| ID | Post | Category | Status |
|---|---|---|---|
| R6 | Canada RCIP — permanent rural immigration, opens Jan 1 2027. 14 communities, 5,500→6,500 PR slots. Job offer + community recommendation required. | Professional Playbook | ✅ Done `2026-11-20` |
| N16 | European study destinations 2027 — Lithuania, Slovakia, Latvia, Norway compared | Guide — Study | ✅ Done `2026-11-20` |

### Medium priority — work

| ID | Post | Category | Status |
|---|---|---|---|
| N11 | Ireland Critical Skills for African software engineers — EUR 38,000 threshold | Guide — Work | ✅ Done `2026-11-20` |
| N12 | French language as a Canada PR strategy — CRS 407 vs 490+ general draws | Professional Playbook | ✅ Done `2026-11-20` |
| N13 | Serbia work visa — what the 69.4M-view TikTok ads aren't telling you | Guide — Work | ✅ Done `2026-11-20` |
| N15 | Finland work permit for African software developers — ~EUR 3,000/month | Guide — Work | ✅ Done `2026-11-20` |
| N1 | Canada healthcare — nurses via Provincial Nominee Programs | Professional Playbook | ✅ Done `2026-11-20` |
| N2 | Germany care work — finding Pflegeheime employers | Guide — Work | ✅ Done `2026-11-20` |
| N3 | UAE trades — electricians and plumbers | Guide — Work | ✅ Done `2026-11-20` |
| N4 | Singapore S Pass — mid-skilled route | Guide — Work | ✅ Done `2026-11-20` |
| N5 | Ireland healthcare — physiotherapy, radiography, OT | Guide — Work | ✅ Done `2026-11-20` |
| N6 | Canada PNP tech streams — Ontario, BC, Alberta | Professional Playbook | ✅ Done `2026-11-20` |

### Medium priority — business

| ID | Post | Category | Status |
|---|---|---|---|
| NEW-B1 | RAK free zone company formation — privacy vs CRS, ~$900 fee | Business Playbook | ✅ Done `2026-11-20` | — verify `rakez.com` first |
| NEW-B2 | Antigua CBI — what $230,000 buys, CRS implications, UK access | Business Playbook | ✅ Done `2026-11-20` | — verify `cip.gov.ag` first |

### Low priority

| ID | Post | Category | Status |
|---|---|---|---|
| N7 | Real budget breakdown: Nigeria to Germany (Chancenkarte) | Case Study | ✅ Done `2026-11-20` |
| N8 | Real budget breakdown: Nigeria to UAE (construction/healthcare) | Case Study | ✅ Done `2026-11-20` |
| N9 | Visa rejection recovery — what happened after refusal | Case Study | ✅ Done `2026-11-20` |
| N10 | UK Innovator Founder Visa — updated endorsing bodies | Professional Playbook | ✅ Done `2026-11-20` | — file exists, needs update |
| N14 | Germany Ausbildung for Nigerians — why most people fail | Guide — Work | ✅ Done `2026-11-20` |

### Existing post updates (no new file)

| Post | Update | Status |
|---|---|---|
| Canada Express Entry 2026 | Add CEC no-proof-of-funds callout + PTE Core as accepted test | ✅ Done `2026-11-20` |
| Germany care work visa (W22) | Add honest Ausbildung section | ✅ Done `2026-11-20` |

---

## Platform state summary

| Metric | Current (17cc3d4) |
|---|---|
| Blog posts | 145 |
| Countries in registry | 35 |
| Pathways | 75 |
| Demand records | 24 |
| Evidence records | 222 |
| Sitemap URLs | 199 |
| Tests | 214/214 PASS |
| Data validation | PASSED |
| Watermark coverage | 126/126 posts |
| Agent records (verified) | 0 — blocked on owner |
| Posts under correction | 3 (AU/IE/NZ working holiday) |
| Posts evidenceStatus: research-required | 54 |

---

## PRIORITY 9 — Evidence verification queue

### 9A — Under correction (owner action — verify Nigerian eligibility at official source)

| Post | File | Verify at | Status |
|---|---|---|---|
| Australia Working Holiday Visa 2026 | `guides/work/australia-working-holiday-visa-2026.md` | `immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462` | ⬜ Owner |
| Ireland Working Holiday Authorisation 2026 | `guides/work/ireland-working-holiday-authorisation-2026.md` | `irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/working-holiday-authorisation/` | ⬜ Owner |
| New Zealand Working Holiday Visa 2026 | `guides/work/new-zealand-working-holiday-visa-2026.md` | `immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa` | ⬜ Owner |

For each: if Nigeria IS listed → set `eligibilityReviewStatus: verified-eligible`, remove correction banner. If NOT listed → set `eligibilityReviewStatus: verified-ineligible`, update banner to permanent notice.

---

### 9B — High trust risk (primary source re-verification before next content update)

These are live posts where claims directly affect professional/financial decisions. Verify key figures at primary source before next edit.

| Post | File | Key claims to verify | Status |
|---|---|---|---|
| UK Innovator Founder Visa 2026 | `playbooks/professional/uk-innovator-founder-visa-2026.md` | Current endorsing bodies list, GBP 50k investment threshold | ✅ Done `2026-11-20` |
| France Talent Passport 2026 | `playbooks/professional/france-talent-passport-deep-dive-2026.md` | Salary thresholds, eligible professions | ✅ Done `2026-11-20` |
| Portugal D3 Highly Qualified 2026 | `playbooks/professional/portugal-d3-highly-qualified-2026.md` | D3 salary threshold, updated 2024 criteria | ✅ Done `2026-11-20` |
| Namibia Digital Nomad Visa 2026 | `playbooks/professional/namibia-digital-nomad-visa-2026.md` | Programme still active, current fees | ✅ Done `2026-11-20` |
| Cape Verde Remote Work Visa 2026 | `playbooks/professional/cape-verde-remote-work-visa-2026.md` | Programme still active, current fees | ✅ Done `2026-11-20` |
| Mauritius Premium Visa 2026 | `playbooks/professional/mauritius-premium-visa-2026.md` | USD 1,500/month threshold, current fees | ✅ Done `2026-11-20` |
| Saskatchewan PNP Post-Graduation 2026 | `playbooks/professional/saskatchewan-pnp-post-graduation-2026.md` | SINP streams open/closed status | ✅ Done `2026-11-20` |
| US LLC Setup from Africa 2026 | `playbooks/business/us-llc-setup-from-africa-2026.md` | State fees, registered agent costs | ✅ Done `2026-11-20` |
| UK Company Setup from Africa 2026 | `playbooks/business/uk-company-setup-from-africa-2026.md` | Companies House fees (updated 2024) | ⬜ Pending |
| Mauritius Global Business Licence 2026 | `playbooks/business/mauritius-global-business-licence-2026.md` | FSC fees, GBL requirements | ⬜ Pending |

---

### 9C — Student playbooks (annual freshness check — scholarship deadlines change)

| Post | File | Status |
|---|---|---|
| Italy DSU Scholarship Complete Guide | `playbooks/student/italy-dsu-scholarship-complete-guide.md` | ⬜ Pending |
| Italy DSU Need-Blind Scholarship 2026 | `playbooks/student/italy-dsu-need-blind-scholarship-2026.md` | ⬜ Pending |
| Italy DSU vs Germany Public Universities 2026 | `playbooks/student/italy-dsu-vs-germany-public-universities-2026.md` | ⬜ Pending |
| UK Masters True Cost 2026 | `playbooks/student/uk-masters-true-cost-2026.md` | ⬜ Pending |
| Commonwealth Scholarships Nigeria 2026 | `playbooks/student/commonwealth-scholarships-nigeria-2026.md` | ⬜ Pending |
| DAAD Scholarships Nigeria 2026 | `playbooks/student/daad-scholarships-nigeria-2026.md` | ⬜ Pending |
| Erasmus Mundus Scholarships Africa 2026 | `playbooks/student/erasmus-mundus-scholarships-africa-2026.md` | ⬜ Pending |
| University of Saskatchewan Scholarships 2026 | `playbooks/student/university-of-saskatchewan-scholarships-2026.md` | ⬜ Pending |

---

### 9D — Policy updates (freshness check)

| Post | File | Issue | Status |
|---|---|---|---|
| Australia TSMIT Increase 2024 | `policy-updates/2026/australia-tsmit-increase-2024.md` | Dated 2024 — verify current TSMIT figure | ⬜ Pending |
| UK Skilled Worker Salary Threshold Increase 2024 | `policy-updates/2026/uk-skilled-worker-salary-threshold-increase-2024.md` | Dated 2024 — confirm GBP 38,700 still current | ⬜ Pending |

---

### 9E — Quarterly audit cycle (lower urgency — roundup/overview guides)

14 regional roundup guides + 17 general guides carry `evidenceStatus: research-required`. These link out to primary sources rather than making specific claims. Schedule for quarterly stale audit via ode scripts/check-stale-pathways.js`.

Key files:
- `guides/work/asia-pacific-work-visas-africa-2026.md`
- `guides/work/europe-work-visas-africa-2026.md`
- `guides/work/middle-east-work-visas-africa-2026.md`
- `guides/work/north-america-work-visas-africa-2026.md`
- `guides/work/intra-africa-work-opportunities-2026.md`
- `guides/mobility/best-countries-african-digital-nomads-2026.md`
- `guides/mobility/african-digital-nomad-hubs-2026.md`
- `guides/tax/*` (6 posts — CRS, FATCA, split residency, UAE, Mauritius, FIRS)
- `guides/visas/schengen-visa-financial-proof-nigeria-2026.md`
- `guides/visas/schengen-visa-rejection-recovery-2026.md`

---

## Execution order — next actions

**Content sprint — ALL DONE:**
- R6, N1-N16, NEW-B1, NEW-B2, N10 update, 2 post updates — all complete
- WM-8 to WM-13 — Sprint A hybrid watermark — all complete

**Deploy (owner action — ready now):**

**Evidence verification (parallel — can run alongside writing):**
6. P9A — Owner verifies AU/IE/NZ working holiday eligibility
7. P9B — Re-verify 10 high trust risk playbooks at primary source
8. P9C — Student playbook freshness check (annual)
9. P9D — Policy update freshness check

**Deploy (owner action — ready now):**
```bash
npm install --save-dev wrangler@3
npx wrangler deploy
```
Then: post-deploy smoke test + axe ARIA audit

**Blocked until owner action:**
- WAA-3a-1 to 5 — first verified agent
- Working-holiday article verification AU/IE/NZ (P9A above)
- WAA-3a-1 to 5 — first verified agent (R8 agent company research feeds this)
- Working-holiday article verification AU/IE/NZ (Action 6 in OWNER_ACTIONS.md)

---

## PRIORITY 10 — Blog UX features (Sprint B)

Standard blog features missing from the current template. All are template/CSS changes — no data changes, no test impact.

| ID | Feature | File | Status |
|---|---|---|---|
| B1 | WhatsApp share button | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B2 | Facebook share button | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B3 | Copy link button (clipboard) | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B4 | Related articles block | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B5 | Reading progress bar | `src/templates/blog-post.njk` + `blog-post.css` | ✅ Done `2026-11-20` |
| B6 | Back to top button | `src/templates/blog-post.njk` + `blog-post.css` | ✅ Done `2026-11-20` |
| B7 | Table of contents (auto-generated from H2s) | `src/templates/blog-post.njk` + JS | ✅ Done `2026-11-20` |
| B8 | Key numbers callout box (CSS class) | `src/css/blog-post.css` | ✅ Done `2026-11-20` |

---

## PRIORITY 10 — Blog UX features (Sprint B)

Standard blog features missing from the current template. All are template/CSS changes — no data changes, no test impact.

| ID | Feature | File | Status |
|---|---|---|---|
| B1 | WhatsApp share button | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B2 | Facebook share button | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B3 | Copy link button (clipboard) | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B4 | Related articles block | `src/templates/blog-post.njk` | ✅ Done `2026-11-20` |
| B5 | Reading progress bar | `src/templates/blog-post.njk` + `blog-post.css` | ✅ Done `2026-11-20` |
| B6 | Back to top button | `src/templates/blog-post.njk` + `blog-post.css` | ✅ Done `2026-11-20` |
| B7 | Table of contents (auto-generated from H2s) | `src/templates/blog-post.njk` + JS | ✅ Done `2026-11-20` |
| B8 | Key numbers callout box (CSS class) | `src/css/blog-post.css` | ✅ Done `2026-11-20` |
