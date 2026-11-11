# SPRINT TASKFILE — MyPathway2Global
**Created:** 2026-11-09 | **Commit baseline:** `2f4689c` | **Tests:** 19/19, 214/214

This is the single source of truth for all active work. Updated as tasks complete.
Status: DONE / IN-PROGRESS / BLOCKED / PENDING

---

## SPRINT A — Watermark (trust layer on all blog posts)

**Why:** Every post landing from Google has no visible trust signal. Reader cannot tell when it was verified, who the source is, or that the platform is independent. This is the highest-trust gap on the platform.

| ID | Task | Status | File(s) |
|---|---|---|---|
| WM-1 | Add `.post-source-trail` CSS block to `enhancements.css` | **DONE** `168070d` | `src/css/enhancements.css` |
| WM-2 | Add source trail block to `blog-post.njk` template | **DONE** `168070d` | `src/templates/blog-post.njk` |
| WM-3 | Bump CSS version in `blog-post.njk` to v12 | **DONE** `168070d` | `src/templates/blog-post.njk` |
| WM-4 | Add watermark fields to new posts going forward | **DONE** — standard on all new posts | All new content files |
| WM-5 | Backfill watermark fields on 5 WAA supporting posts | **DONE** `168070d` | `content/blog/guides/work/` (5 files) |
| WM-6 | Test build — confirm amber/green states render correctly | **DONE** — 284 files, 0 errors | `npm run build` |
| WM-7 | Commit + push watermark sprint | **DONE** `168070d` | — |

**Watermark spec (dictated):**

Renders as a single compact row immediately after the article H1, before body content. Four elements:

1. **Evidence status badge** — `verified` (green) / `under-correction` (amber) / `research-required` (red). Reads from `evidenceStatus` frontmatter. If missing: renders amber "Not yet audited".
2. **Source authority** — linked to `sourceUrl`. Reads from `sourceAuthority` frontmatter. If missing: renders muted "Source not recorded".
3. **Verified date** — "Verified [date]". Reads from `lastFactChecked`. If missing: renders amber "Date not recorded" — this is the visible audit queue signal.
4. **Independence notice** — always present, always the same: "Independent platform. Not affiliated with any government or immigration authority."

CSS classes:
- `.post-source-trail` — flex row, border-bottom, padding, muted background
- `.post-source-badge` — pill, 3 colour variants
- `.post-source-badge--verified` — green `#dcfce7 / #15803d`
- `.post-source-badge--under-correction` — amber `#fef9c3 / #a16207`
- `.post-source-badge--research-required` — red `#fee2e2 / #b91c1c`
- `.post-source-badge--unaudited` — amber, used when `evidenceStatus` missing
- `.post-source-authority` — normal weight, linked
- `.post-source-date` — muted, small
- `.post-source-unaudited` — amber text, used when date missing
- `.post-source-independence` — muted, smallest, always shown

---

## SPRINT B — Content queue (W1-W22 from WAA research)

Active posts being written. Each post requires: frontmatter with watermark fields, body content, no emoji, no em dashes, FAQs where applicable.

| ID | Post | Category | File | Status |
|---|---|---|---|---|
| W1 | Canada tech visa 2026 — the honest version | Professional Playbook | `playbooks/professional/canada-tech-express-entry-honest-guide-2026.md` | **DONE** `168070d` |
| W2 | Canada Francophone immigration — caregivers, PSWs | Professional Playbook | `playbooks/professional/canada-francophone-immigration-caregivers-2026.md` | **DONE** `168070d` |
| W3 | Qatar work visa reality check | Guide — Work | `guides/work/qatar-work-visa-reality-check-2026.md` | **DONE** `168070d` |
| W4 | Is Mongolia a real work destination? | Guide — Work | `guides/work/mongolia-work-visa-nigeria-reality-2026.md` | **PENDING** |
| W5 | How to spot a fake travel agent — Nigerian checklist | Guide — Work | `guides/work/how-to-spot-fake-travel-agent-nigeria-2026.md` | **PENDING** |
| W6 | Oman work visa for mechanics and electricians | Guide — Work | `guides/work/oman-trades-work-visa-mechanic-electrician-2026.md` | **PENDING** |
| W7 | Guyana 2-year freelance work visa | Country Audit | `country-audits/guyana/guyana-visa-from-nigeria-2026.md` | **PENDING** |
| W8 | Bulgaria study visa for Nigerians 2026 | Country Audit | `country-audits/bulgaria/bulgaria-visa-from-nigeria-2026.md` | **PENDING** |
| W9 | Croatia study visa 2026 — RIT University, debt trap warning | Country Audit | `country-audits/croatia/croatia-visa-from-nigeria-2026.md` | **PENDING** |
| W10 | Canada LMIA warehouse and logistics work permit | Guide — Work | `guides/work/canada-lmia-warehouse-logistics-2026.md` | **PENDING** |
| W11 | Singapore Employment Pass — COMPASS explained | Guide — Work | `guides/work/singapore-employment-pass-compass-guide-2026.md` | **PENDING** |
| W12 | "Job assistance when you get there" — red flag guide | Guide — Work | `guides/work/job-assistance-on-arrival-red-flag-2026.md` | **PENDING** |
| W13 | What "zero deposit" visa offers actually mean | Guide — Work | `guides/work/zero-deposit-visa-offers-what-they-mean-2026.md` | **PENDING** |
| W14 | Antigua and Barbuda visa from Nigeria | Country Audit | `country-audits/antigua-barbuda/antigua-barbuda-visa-from-nigeria-2026.md` | **PENDING** |
| W15 | Oman freelance visa vs employment visa | Guide — Work | `guides/work/oman-freelance-visa-vs-employment-visa-2026.md` | **PENDING** |
| W16 | Kafala reform tracker 2026 | Guide — Work | `guides/work/kafala-reform-tracker-2026.md` | **PENDING** |
| W17 | How to read a Gulf employment contract | Guide — Work | `guides/work/gulf-employment-contract-guide-2026.md` | **PENDING** |
| W18 | What to do if your employer confiscates your passport | Guide — Work | `guides/work/passport-confiscation-what-to-do-2026.md` | **PENDING** |
| W19 | Netherlands Highly Skilled Migrant visa | Guide — Work | `guides/work/netherlands-highly-skilled-migrant-visa-2026.md` | **PENDING** |
| W20 | Poland construction work permit 2026 | Guide — Work | `guides/work/poland-construction-work-permit-2026.md` | **PENDING** |
| W21 | Ireland nursing visa — NMBI registration | Guide — Work | `guides/work/ireland-nursing-visa-nmbi-registration-2026.md` | **PENDING** |
| W22 | Germany care work visa (Pflegekrafte) | Guide — Work | `guides/work/germany-care-work-visa-pflegekrafte-2026.md` | **PENDING** |

**Batch commit plan:**
- Batch 1: W1 + W2 + W3 + WM sprint → commit
- Batch 2: W4 + W5 + W6 + W7 → commit
- Batch 3: W8 + W9 + W10 + W11 → commit
- Batch 4: W12-W15 → commit
- Batch 5: W16-W18 (WAA-4 safety content) → commit
- Batch 6: W19-W22 (platform expansion) → commit

---

## SPRINT C — Data records (occupation-demand.json additions)

New demand records needed to power WAA wizard results for new corridors.

| ID | Record ID | Country | Occupation | Status |
|---|---|---|---|---|
| D1 | `CA-healthcare-semiskilled-francophone-2026` | CA | care_work / semi_skilled | **PENDING** — add with W2 commit |
| D2 | `CA-logistics-semiskilled-2026` | CA | logistics / semi_skilled | **PENDING** — add with W10 commit |
| D3 | `OM-trades-unskilled-2026` | OM | trades / trades | **PENDING** — add with W6 commit |
| D4 | `QA-trades-unskilled-2026` | QA | trades / unskilled | **PENDING** — add with W3 commit |
| D5 | `SG-software-it-skilled-2026` | SG | software_it / skilled | **PENDING** — add with W11 commit |
| D6 | `DE-care-work-skilled-2026` | DE | care_work / skilled | **PENDING** — add with W22 commit |
| D7 | `IE-healthcare-skilled-2026` | IE | healthcare / skilled | **PENDING** — add with W21 commit |
| D8 | `NL-software-it-skilled-2026` | NL | software_it / skilled | **PENDING** — add with W19 commit |

---

## SPRINT D — New countries (countries.json + pathways.json)

| ID | Country | ISO | Route | Status |
|---|---|---|---|---|
| C1 | Bulgaria | BG | Study visa | **PENDING** — add with W8 commit |
| C2 | Croatia | HR | Study visa | **PENDING** — add with W9 commit |
| C3 | Guyana | GY | Freelance work visa | **PENDING** — add with W7 commit |
| C4 | Oman pathway record | OM | Employer-sponsored trades | **PENDING** — add with W6 commit (country exists, pathway missing) |

---

## SPRINT E — Production deployment

Pre-deployment checklist. All items must be green before `npx wrangler deploy`.

| ID | Check | Status |
|---|---|---|
| E1 | `npm test` — 19/19 suites, 214/214 passing | **PASSING** (baseline `2f4689c`) |
| E2 | `node scripts/validate-agent-registry.js` — 0 errors | **PASSING** |
| E3 | `node scripts/validate-commercial-registry.js` — 0 errors | **PASSING** |
| E4 | `node scripts/verify-build.js` — BUILD INTEGRITY PASSED | **PASSING** |
| E5 | `npm run build` — 0 Eleventy errors | **PASSING** (281 files) |
| E6 | Watermark sprint (WM-1 to WM-7) complete | **DONE** `168070d` |
| E7 | Batch 1 content (W1+W2+W3) committed | **DONE** `168070d` |
| E8 | All tests still passing after content additions | **DONE** — 214/214 |
| E9 | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` run in PowerShell | **OWNER ACTION** |
| E10 | `npx wrangler deploy` from `myglobalroute/` directory | **OWNER ACTION** |

**Deploy command sequence (owner):**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
cd C:\github\mypathway\myglobalroute
npx wrangler deploy
```

---

## SPRINT F — WAA-3a (blocked on owner)

| ID | Task | Status | Owner |
|---|---|---|---|
| F1 | Define agent vetting checklist | **BLOCKED** | Owner |
| F2 | Sign first commercial agreement (suggested: NG-DE tech corridor) | **BLOCKED** | Owner |
| F3 | Confirm lead fee structure | **BLOCKED** | Owner |
| F4 | Choose Formspree vs Cloudflare Worker for form submission | **BLOCKED** | Owner |
| F5 | Add first verified agent to `src/data/agents.json` | **BLOCKED** | Owner + dev |

When F1-F4 are resolved, F5 takes 10 minutes. WAA-3b/3c/3d code is already live and will activate automatically.

---

## SPRINT G — Ongoing quality gates

These run on every deploy. No action needed unless they fail.

| Gate | Command | Last result |
|---|---|---|
| Tests | `npm test` | 19/19, 214/214 PASS |
| Agent registry | `node scripts/validate-agent-registry.js` | PASS (0 agents) |
| Commercial registry | `node scripts/validate-commercial-registry.js` | PASS |
| Build integrity | `node scripts/verify-build.js` | PASS |
| Build | `npm run build` | PASS (281 files) |
| Stale pathways | `node scripts/check-stale-pathways.js` | 0 stale |

---

## Assessment — platform state for production deployment

**What is production-ready now:**
- All 19 test suites passing, 214 tests
- Build clean at 281 files, 0 errors
- WAA wizard fully wired (steps 1-4, demand matching, safety callouts, agent matching engine, intake form, WAA-4 safety gate)
- 31 countries, 71 pathways, 107 blog posts
- Quality gates all passing
- Commit `2f4689c` is deployable

**What is missing before deploy is ideal (not blocking):**
- Watermark sprint (WM-1 to WM-7) — trust layer on all posts. High value, low risk. Should ship with this deploy.
- W1 + W2 content — already written, not committed. Should ship with this deploy.
- W3 Qatar post — in progress. Should ship with this deploy.

**What is blocked and does NOT block deploy:**
- WAA-3a (first verified agent) — owner action only
- W4-W22 content — can ship in subsequent deploys

**Recommendation:** Complete WM sprint + commit W1/W2/W3, run full test suite, then deploy. Do not wait for W4-W22.

---

## Remaining task count

| Sprint | Total | Done | In-progress | Pending | Blocked |
|---|---|---|---|---|---|
| A — Watermark | 7 | 7 | 0 | 0 | 0 |
| B — Content W1-W22 | 22 | 3 | 0 | 19 | 0 |
| C — Demand records | 8 | 0 | 0 | 8 | 0 |
| D — New countries | 4 | 0 | 0 | 4 | 0 |
| E — Deploy | 10 | 8 | 0 | 0 | 2 |
| F — WAA-3a | 5 | 0 | 0 | 0 | 5 |
| G — Quality gates | 6 | 6 | 0 | 0 | 0 |
| **Total** | **62** | **24** | **0** | **31** | **7** |
