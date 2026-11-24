# ACTIVE SPRINT TASKFILE — MyPathway2Global
**Updated:** 2026-11-23 | **Commit:** `54e2722` | **Tests:** 19/19, 228/228
**Posts:** 145 | **Countries:** 35 | **Pathways:** 75 | **Demand records:** 24 | **Evidence records:** 222
**Data validation:** PASSED | **CI:** Quality Gate ✅ | Browser Smoke ✅ | Lint ✅ | Deploy ✅
**Overhaul:** Gates 0–3 PASS, Gate 4 PARTIAL — see `docs/project/OVERHAUL_TASKFILE.md`

Single source of truth for all outstanding work. Completed sprints are in `docs/project/CONTENT_PIPELINE.md`.

---

## PRIORITY 0 — Overhaul gates

| Gate | Status | Notes |
|---|---|---|
| Gate 0 — Baseline | ✅ PASS | CI green `54e2722`, deploy confirmed |
| Gate 1 — User trust | ✅ PASS | NZ verified-ineligible; SK guarantee fixed; backtick-n removed from 79 files |
| Gate 2 — Evidence/data | ⚠️ PARTIAL | 15 reviewAfter dates extended (CI fix); source re-verification pending owner — see CONTENT_PIPELINE.md |
| Gate 3 — Decision logic | ✅ PASS | Age missing=warning; salary period+currency normalized; FX unified 19 currencies; 228/228 tests |
| Gate 4 — Experience | ⚠️ PARTIAL | Related content engine live; country profile expansion (O8), calculator missing-zero (O6-03/05) pending |
| Gate 5 — Release | 🔲 PENDING | O5 wizard nationality trace, O8 country profiles, O9 WAA audit |

Full task register: `docs/project/OVERHAUL_TASKFILE.md`

---

## PRIORITY 1 — Owner actions (blocked on owner)

| ID | Task | Status |
|---|---|---|
| OW-01 | Verify AU working holiday Nigerian eligibility at `immi.homeaffairs.gov.au` | BLOCKED — owner |
| OW-02 | Verify IE working holiday Nigerian eligibility at `irishimmigration.ie` | BLOCKED — owner |
| OW-03 | Re-verify 15 stale evidence records at official sources (see CONTENT_PIPELINE.md) | BLOCKED — owner |
| OW-04 | WAA: set Resend API key secret + deploy agent-lead Worker | BLOCKED — owner |
| OW-05 | WAA: vet first agent, sign commercial agreement, add to `agents.json` | BLOCKED — owner |
| OW-06 | Legal review of privacy/disclaimer/terms | BLOCKED — owner |
| OW-07 | Live-browser ARIA audit (axe on homepage, Find MyPathway, Visa Wizard, Calculator) | BLOCKED — owner |
| OW-08 | OG image: re-render `og-image-design.html` in Firefox at 1200×630, save as `public/assets/og-image-fix.png` | BLOCKED — owner |

---

## PRIORITY 2 — Overhaul gates pending (next executable)

### O5 — Visa Wizard nationality trace
| ID | Task | Acceptance criteria | Status |
|---|---|---|---|
| O5-01 | Trace passport/nationality through wizard state end-to-end | Data flow documented; no missing transition | PENDING |
| O5-02 | Fix passport propagation if dropped | Selected passport used in every route decision | PENDING |
| O5-03 | Test nationality outcomes | Eligible/ineligible/unknown/missing all produce correct result | PENDING |

### O6-03/O6-05 — Calculator honesty
| ID | Task | Acceptance criteria | Status |
|---|---|---|---|
| O6-03 | Fix missing-vs-zero cost values | Unknown costs never appear as zero/free | PENDING |
| O6-05 | Suppress unsupported affordability ranking | No ranking unless comparable verified cost coverage is sufficient | PENDING |

### O8 — Country profiles
| ID | Task | Acceptance criteria | Status |
|---|---|---|---|
| O8-03 | Add server-visible fallback to country directory | Core country links accessible without JS | PENDING |
| O8-04 | Add pathway/article cross-links to country profiles | Links resolve to valid canonical records | PENDING |

### O3 — Canonical counts
| ID | Task | Acceptance criteria | Status |
|---|---|---|---|
| O3-04 | Align homepage, About, directory, Find MyPathway counts | All comparable metrics match | PENDING |

---

## PRIORITY 3 — Quality gates (run before every deploy)

| Gate | Command | Status |
|---|---|---|
| Tests | `npm test` | 19/19, 228/228 PASS |
| Data validation | `npm run data:validate` | PASS |
| Agent registry | `npm run agents:validate` | PASS (0 verified agents) |
| Commercial registry | `npm run commercial:validate` | PASS |
| Build integrity | `npm run build:verify` | PASS |
| SEO/A11Y | `npm run seo:a11y:verify` | PASS — 360 files checked |
| Stale pathways | `node scripts/check-stale-pathways.js` | 1 stale (IE-critical-skills — evidence-locked) |

---

## PRIORITY 4 — Next content sprint

See `docs/project/CONTENT_PIPELINE.md` for full queue. Top items:

| ID | Post | Category | Priority |
|---|---|---|---|
| C1 | Poland country audit 2026 | Country Audit | High |
| C2 | Lithuania country audit 2026 | Country Audit | High |
| C3 | Iceland country audit 2026 | Country Audit | High |
| C4 | China country audit 2026 | Country Audit | High |
| C5 | Australia DAMA regional stream deep-dive | Professional Playbook | Medium |
| C9 | DAAD scholarships for Nigerians 2026 | Student Playbook | Medium |
| C10 | Erasmus Mundus scholarships for Africa 2026 | Student Playbook | Medium |

---

## Platform state

| Metric | Current (`54e2722`) |
|---|---|
| Blog posts | 145 |
| Countries | 35 |
| Pathways | 75 |
| Demand records | 24 |
| Evidence records | 222 |
| Sitemap URLs | 199 |
| Tests | 228/228 PASS |
| Data validation | PASSED |
| Agent records (verified) | 0 — blocked on owner |
| Posts under correction | 2 (AU/IE working holiday) |
| OG image | og-image-fix.png live — re-render pending owner |
