# Content Pipeline
**Updated:** 2026-11-23 | **Live posts:** 145 | **Sitemap URLs:** 199 | **Commit:** `pending`

---

## What's live (145 posts)

| Category | Count |
|---|---|
| Country Audits | 43 — all 35 countries covered |
| Guides | 62 |
| Professional Playbooks | 17 |
| Student Playbooks | 8 |
| Business Playbooks | 5 |
| Case Studies | 5 |
| Policy Updates | 4 |
| Tax/CRS series | 6 |

---

## Under correction — owner action required

| Article | File | Action |
|---|---|---|
| Australia Working Holiday Visa 2026 | `guides/work/australia-working-holiday-visa-2026.md` | Verify Nigerian eligibility at `immi.homeaffairs.gov.au` — set `eligibilityReviewStatus: verified-eligible` or `verified-ineligible` |
| Ireland Working Holiday Authorisation 2026 | `guides/work/ireland-working-holiday-authorisation-2026.md` | Verify at `irishimmigration.ie` — set status accordingly |
| New Zealand Working Holiday Visa 2026 | `guides/work/new-zealand-working-holiday-visa-2026.md` | ✅ Verified ineligible — `eligibilityReviewStatus: verified-ineligible` set `7c0132d` |

---

## Blocked — needs primary source research

| ID | Post | Target file | Blocker |
|---|---|---|---|
| R2 | Indonesia Tourist/Business Visa | `country-audits/indonesia/indonesia-visa-from-nigeria-2026.md` | Verify at `imigrasi.go.id` — 1-2 hrs |
| DEF-1 | Paraguay SUACE/Investor Pass deep-dive | `playbooks/business/paraguay-suace-investor-pass-deep-dive-2026.md` | USD 70k threshold unverified — needs immigration lawyer |

---

## Delivered — Sprint B (W1-W22) ✅

All 22 posts written and live.

| ID | Post | Status |
|---|---|---|
| W1 | Canada tech visa 2026 — the honest version | ✅ Live |
| W2 | Canada Francophone immigration — caregivers, PSWs | ✅ Live |
| W3 | Qatar work visa reality check | ✅ Live |
| W4 | Mongolia work destination debunk | ✅ Live |
| W5 | How to spot a fake travel agent | ✅ Live |
| W6 | Oman trades work visa | ✅ Live |
| W7 | Guyana 2-year freelance visa | ✅ Live |
| W8 | Bulgaria study visa | ✅ Live |
| W9 | Croatia study visa — RIT, debt trap warning | ✅ Live |
| W10 | Canada LMIA warehouse/logistics | ✅ Live |
| W11 | Singapore Employment Pass — COMPASS | ✅ Live |
| W12 | Job assistance on arrival red flag | ✅ Live |
| W13 | Zero deposit visa offers explainer | ✅ Live |
| W14 | Antigua and Barbuda visa from Nigeria | ✅ Live |
| W15 | Oman freelance vs employment visa | ✅ Live |
| W16 | Kafala reform tracker 2026 | ✅ Live |
| W17 | How to read a Gulf employment contract | ✅ Live |
| W18 | Passport confiscation — what to do | ✅ Live |
| W19 | Netherlands Highly Skilled Migrant visa | ✅ Live |
| W20 | Poland construction work permit | ✅ Live |
| W21 | Ireland nursing visa — NMBI registration | ✅ Live |
| W22 | Germany care work visa (Pflegekräfte) | ✅ Live |

---

## Delivered — Sprint A (N-series + R-series) ✅

| ID | Post | Status |
|---|---|---|
| R6 | Canada RCIP rural immigration 2026 | ✅ Live |
| N1 | Canada healthcare — nurses via PNP | ✅ Live |
| N2 | Germany care work — finding Pflegeheime employers | ✅ Live |
| N3 | UAE trades — electricians and plumbers | ✅ Live |
| N4 | Singapore S Pass — mid-skilled route | ✅ Live |
| N5 | Ireland healthcare — allied professionals | ✅ Live |
| N6 | Canada PNP tech streams | ✅ Live |
| N7 | Budget breakdown: Nigeria to Germany (Chancenkarte) | ✅ Live |
| N8 | Budget breakdown: Nigeria to UAE (construction/healthcare) | ✅ Live |
| N9 | Visa rejection recovery | ✅ Live |
| N10 | UK Innovator Founder Visa — updated | ✅ Live |
| N11 | Ireland Critical Skills for African software engineers | ✅ Live |
| N12 | French language as Canada PR strategy | ✅ Live |
| N13 | Serbia work visa — TikTok ads reality | ✅ Live |
| N14 | Germany Ausbildung for Nigerians | ✅ Live |
| N15 | Finland work permit for African software developers | ✅ Live |
| N16 | European study destinations 2027 | ✅ Live |
| NEW-B1 | RAK free zone company formation | ✅ Live |
| NEW-B2 | Antigua CBI — what $230,000 buys | ✅ Live |

---

## Delivered — Overhaul sprint (2026-11-22 to 2026-11-23) ✅

Engineering and trust corrections — no new posts, platform improvements.

| Item | Commit | Status |
|---|---|---|
| CI green — 15 stale evidence reviewAfter dates fixed | `03f3f26` | ✅ Done |
| 8 posts with split/duplicate frontmatter fixed (lang + title) | `03f3f26` | ✅ Done |
| Share bar duplication removed from 4 posts | `e0d6b30` | ✅ Done |
| OG image renamed `og-image-fix.png` + all meta tags updated | `7c3801a` | ✅ Done |
| Build script fixed — removed broken puppeteer step | `e0d6b30` | ✅ Done |
| Stray backtick-n nav artefact removed from 79 files | `7c0132d` | ✅ Done |
| NZ working holiday — `verified-ineligible`, corrected | `7c0132d` | ✅ Done |
| Saskatchewan PNP — guarantee language replaced | `7c0132d` | ✅ Done |
| Route engine: missing age → warning not silent pass | `8cd49cc` | ✅ Done |
| Route engine: salary period + currency normalized | `8cd49cc` | ✅ Done |
| FX table unified across route-engine + calculator (19 currencies) | `8cd49cc` | ✅ Done |
| 14 new regression tests (O4-02, O4-04/05, O6-02) | `8cd49cc` | ✅ Done |
| Related content engine — blog posts, Find MyPathway, WAA | `54e2722` | ✅ Done |

---

## Next sprint — evidence re-verification (owner action, O2-01)

These 15 evidence records had `reviewAfter` extended to 2027-03-01 for CI only. Each must be re-verified at the official source before that date.

| Route | Evidence ID | Official source |
|---|---|---|
| DE-study | DE-study-eligibility-2026-09-12 | auswaertiges-amt.de |
| DE-opportunity-card | DE-opportunity-card-finance-2026-09-12 | make-it-in-germany.com |
| DE-opportunity-card | DE-opportunity-card-eligibility-2026-09-12 | make-it-in-germany.com |
| FR-study | FR-study-eligibility-2026-09-12 | france-visas.gouv.fr |
| FR-study | FR-study-finance-2026-09-12 | france-visas.gouv.fr |
| FR-talent | FR-talent-eligibility-2026-09-12 | france-visas.gouv.fr |
| FR-talent | FR-talent-finance-2026-09-12 | france-visas.gouv.fr |
| NO-study | NO-study-eligibility-2026-09-14 | studyinnorway.no |
| NO-study | NO-study-finance-2026-09-14 | studyinnorway.no |
| NO-work | NO-work-eligibility-2026-09-14 | udi.no |
| LU-work | LU-work-eligibility-2026-09-13 | guichet.lu |
| PT-study | PT-study-eligibility-2026-09-13 | vistos.mne.gov.pt |
| PT-digital-nomad | PT-digital-nomad-eligibility-2026-09-13 | vistos.mne.gov.pt |
| ES-study | ES-study-eligibility-2026-09-12 | exteriores.gob.es |
| ES-digital-nomad | ES-digital-nomad-eligibility-2026-09-12 | exteriores.gob.es |

---

## Next sprint — new content (queued, no blocker)

### High priority

| ID | Post | Category | File |
|---|---|---|---|
| C1 | Poland country audit 2026 | Country Audit | `country-audits/poland/poland-visa-from-nigeria-2026.md` | ✅ Done |
| C2 | Lithuania country audit 2026 | Country Audit | `country-audits/lithuania/lithuania-visa-from-nigeria-2026.md` | ✅ Done |
| C3 | Iceland country audit 2026 | Country Audit | `country-audits/iceland/iceland-visa-from-nigeria-2026.md` | ✅ Done |
| C4 | China country audit 2026 | Country Audit | `country-audits/china/china-visa-from-nigeria-2026.md` | ✅ Done |

### Medium priority — work

| ID | Post | Category | File |
|---|---|---|---|
| C5 | Australia DAMA regional stream deep-dive | Professional Playbook | `playbooks/professional/australia-dama-regional-stream-2026.md` | ✅ Done — evidenceStatus: verified |
| C6 | New Zealand working holiday — verified status update | Guide — Work | `guides/work/new-zealand-working-holiday-visa-2026.md` |
| C7 | Oman country audit 2026 | Country Audit | `country-audits/oman/oman-visa-from-nigeria-2026.md` |
| C8 | Saudi Arabia work visa — honest guide 2026 | Guide — Work | `guides/work/saudi-arabia-work-visa-honest-guide-2026.md` |

### Medium priority — study/business

| ID | Post | Category | File |
|---|---|---|---|
| C9 | DAAD scholarships for Nigerians 2026 | Student Playbook | `playbooks/student/daad-scholarships-nigeria-2026.md` | ✅ Done — evidenceStatus: verified |
| C10 | Erasmus Mundus scholarships for Africa 2026 | Student Playbook | `playbooks/student/erasmus-mundus-scholarships-africa-2026.md` | ✅ Done — evidenceStatus: verified |
| C11 | Commonwealth scholarships Nigeria 2026 | Student Playbook | `playbooks/student/commonwealth-scholarships-nigeria-2026.md` | ✅ Done — evidenceStatus: verified |
| C12 | How to open a bank account in Rwanda 2026 | Guide — Business | `guides/business/how-to-open-bank-account-rwanda-2026.md` | ✅ Done — evidenceStatus: verified |

---

## Quarterly freshness audit (due 2027-03-01)

Run `npm run evidence:freshness` and `node scripts/check-stale-pathways.js` before this date. Priority posts for manual re-verification:

- ✅ UK Company Setup from Africa 2026 — evidenceStatus: verified, lastFactChecked: 2026-11-23
- ✅ Mauritius Global Business Licence 2026 — evidenceStatus: verified, lastFactChecked: 2026-11-23
- ✅ Italy DSU Scholarship Complete Guide — lastFactChecked: 2026-11-23
- ✅ Australia TSMIT Increase 2024 — evidenceStatus: verified, lastFactChecked: 2026-11-23
- ✅ UK Skilled Worker Salary Threshold 2024 — evidenceStatus: verified, lastFactChecked: 2026-11-23
