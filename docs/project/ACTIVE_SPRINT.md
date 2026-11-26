# ACTIVE SPRINT TASKFILE — MyPathway2Global
**Updated:** 2026-11-25 | **Commit:** `c80c588` | **Tests:** 19/19, 228/228
**Posts:** 145 | **Countries:** 35 | **Pathways:** 75 | **Demand records:** 24 | **Evidence records:** 222
**Data validation:** PASSED | **CI:** Quality Gate ✅ | Browser Smoke ✅ | Lint ✅ | Deploy ✅
**Overhaul:** Gates 0–3 PASS, Gate 4 PARTIAL — see `docs/project/OVERHAUL_TASKFILE.md`

Single source of truth for all outstanding work. Completed sprints are in `docs/project/CONTENT_PIPELINE.md`.

---

## PRIORITY 0 — Overhaul gates

| Gate | Status | Notes |
|---|---|---|
| Gate 0 — Baseline | ✅ PASS | CI green `c80c588`, deploy confirmed |
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
| SEO/A11Y | `npm run seo:a11y:verify` | PASS — 361 files checked |
| Stale pathways | `node scripts/check-stale-pathways.js` | 1 stale (IE-critical-skills — evidence-locked) |

---

## PRIORITY 4 — Next content sprint

See `docs/project/CONTENT_PIPELINE.md` for full queue. C1-C12 all done. Next items:

| ID | Post | Category | Priority |
|---|---|---|---|
| MU-3 | YouTube embed — mauritius-all-visas-nomad-guide-2026 | Enhancement | Medium |
| MU-6 | Cross-link Mauritius cluster posts | Enhancement | Low |
| C6 | NZ working holiday update (blocked on owner AU/IE verification) | Guide — Work | Blocked |
| C7 | Oman country audit — expanded ✅ Done `c80c588` | Country Audit | Done |
| C8 | Saudi Arabia country audit — expanded ✅ Done `c80c588` | Country Audit | Done |

---

## MAURITIUS CONTENT CLUSTER — added 2026-11-24

All existing Mauritius content spotted and new comprehensive guide drafted.

### Existing Mauritius posts (5 files)

| File | Category | Status |
|---|---|---|
| `country-audits/mauritius/mauritius-visa-from-nigeria-2026.md` | Country Audit | LIVE — `evidenceStatus: verified` |
| `playbooks/professional/mauritius-premium-visa-2026.md` | Professional Playbook | LIVE — `evidenceStatus: editorial` |
| `playbooks/business/mauritius-global-business-licence-2026.md` | Business Playbook | LIVE — merge conflict in frontmatter (`evidenceStatus`) needs resolution |
| `guides/tax/mauritius-gbl-crs-interaction-2026.md` | Guide — Tax | LIVE — `evidenceStatus: editorial` |
| `guides/work/intra-africa-work-opportunities-2026.md` | Guide — Work | LIVE — covers Mauritius Occupation Permit as part of intra-Africa section |

### New post — DONE 2026-11-24

| ID | Post | File | Status |
|---|---|---|---|
| MU-1 | Mauritius All Visas Nomad Guide 2026 | `playbooks/professional/mauritius-all-visas-nomad-guide-2026.md` | **DONE** — registered in `blog-posts.json` |

### Outstanding Mauritius tasks

| ID | Task | Priority |
|---|---|---|
| MU-2 | ~~Resolve merge conflict in `mauritius-global-business-licence-2026.md`~~ | ✅ Done — `evidenceStatus: verified` confirmed |
| MU-3 | Add YouTube embed to `mauritius-all-visas-nomad-guide-2026.md` — search: `Mauritius visa routes nomad residence permit 2026` | Medium |
| MU-4 | Add YouTube embed to `mauritius-premium-visa-2026.md` — search: `Mauritius Premium Visa remote work how to apply` | Medium |
| MU-5 | Add YouTube embed to `mauritius-visa-from-nigeria-2026.md` — search: `Mauritius visa Nigeria how to apply 2024` | Medium |
| MU-6 | Cross-link new guide from `mauritius-visa-from-nigeria-2026.md` and `mauritius-premium-visa-2026.md` | Low |

---

## Platform state

| Metric | Current (`c80c588`) |
|---|---|
| Blog posts | 145 |
| Countries | 35 |
| Pathways | 75 |
| Demand records | 24 |
| Evidence records | 226 |
| Sitemap URLs | 199 |
| Tests | 228/228 PASS |
| Data validation | PASSED |
| Agent records (verified) | 0 — blocked on owner |
| Posts under correction | 2 (AU/IE working holiday) |
| OG image | og-image-fix.png live — re-render pending owner |
