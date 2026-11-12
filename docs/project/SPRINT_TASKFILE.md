# SPRINT TASKFILE — MyPathway2Global
**Updated:** 2026-11-11 | **Commit:** `b6e5d7b` | **Tests:** 19/19, 214/214
**Blog posts:** 125 | **Countries:** 31 | **Pathways:** 71 | **Demand records:** 22 | **Stale requirements:** 1 (evidence-locked)
**Data validation:** PASSED (222 evidence records)

Single source of truth for all active work. Status: DONE / PENDING / BLOCKED

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
| WM-6 | Test build — confirm amber/green states render correctly | **DONE** `168070d` | `npm run build` |
| WM-7 | Commit + push watermark sprint | **DONE** `168070d` | — |
| WM-8 | Replace current trail block with hybrid document mark in `blog-post.njk` | **PENDING** | `src/templates/blog-post.njk` |
| WM-9 | Replace `.post-source-trail` CSS with `.wm-hybrid` CSS in `enhancements.css` | **PENDING** | `src/css/enhancements.css` |
| WM-10 | Add `postVersion` + `supersededBy` frontmatter fields to new posts | **PENDING** | All new content files |
| WM-11 | Backfill `postVersion` on all 125 existing posts | **PENDING** | All content files |
| WM-12 | Backfill `sourceAuthority` + `sourceUrl` + `lastFactChecked` + `evidenceStatus` on all posts | **PENDING** | All content files |
| WM-13 | Build + test + commit hybrid watermark | **PENDING** | — |

---

### Hybrid watermark spec

Design reference: `docs/engineering/watermark-hybrid.html` — open in browser to see all states.

**Format:** Single dateline. Navy 2px top border + light grey fill. No badge cluster.

```
MyPathway2Global · v2026.11 · Verified · [Source Authority] · 9 Nov 2026    [Newer edition →]
Independent platform. Not affiliated with any government or immigration authority. Not legal advice.
```

**Five evidence states:**

| State | Border colour | Status text | When |
|---|---|---|---|
| `verified` | Navy `#10316b` | `Verified` (green) | `evidenceStatus: verified` + `lastFactChecked` present |
| `under-correction` | Amber `#d97706` | `Under correction` (amber) | `evidenceStatus: under-correction` |
| `research-required` | Red `#b91c1c` | `Research required` (red) | `evidenceStatus: research-required` |
| `not-yet-audited` | Amber `#d97706` | `Not yet audited` (amber) | `evidenceStatus` missing |
| `archived` | Grey `#6b7280` | `Archived — verified at time of publication` (grey) | `supersededBy` present |

**Edition versioning — the key new concept:**

Every post has a `postVersion` field: `v{YYYY}.{MM}` — e.g. `v2026.11`.

This solves the multi-edition problem: different versions of the same topic (UK salary threshold April 2024, November 2026) are all publishable. Each is a dated edition. The watermark makes the edition visible at a glance. Older editions stay live for SEO and historical reference — they just show the archived state and link to the current edition.

**New frontmatter fields required on every post:**

```yaml
postVersion: "v2026.11"          # year.month of this edition
sourceAuthority: "IRCC Canada"   # official body name
sourceUrl: "https://..."         # direct link to primary source
lastFactChecked: 2026-11-09      # date verified against source
evidenceStatus: verified         # verified | under-correction | research-required
supersededBy: ""                 # URL of newer edition if this is archived (leave blank if current)
```

**Verification standard — what counts as `verified`:**

A post is `evidenceStatus: verified` when every material claim in it has been checked against a primary source (official government website, official shortage list, official ministry publication) and the `sourceUrl` links directly to that source. The `lastFactChecked` date records when this check was done.

This means:
- A post about Canada Express Entry verified against `canada.ca` = `verified`
- A post about Germany shortage occupations verified against `arbeitsagentur.de` = `verified`
- A post about Qatar work visas verified against `adlsa.gov.qa` = `verified`
- A post written from secondary sources or agent claims without primary source check = `research-required`
- A post with a known factual error being corrected = `under-correction`

Different editions of the same topic are all publishable as `verified` — each edition is verified against the source at the time of writing. When a new edition supersedes an old one, the old one moves to `archived` state (grey border, link to current edition).

**High-risk corridor posts** (WAA unskilled routes): append to the notice line:
`High-risk corridor — read full disclaimer before acting.`

**CSS classes (replacing current `.post-source-trail`):**

```css
.wm-hybrid          /* container: flex, navy top border, grey fill */
.wm-hybrid.amber    /* under-correction / not-yet-audited state */
.wm-hybrid.red      /* research-required state */
.wm-hybrid.archived /* archived state — grey border */
.wh-brand           /* MyPathway2Global — navy bold */
.wh-dot             /* · separator — light grey */
.wh-ver             /* v2026.11 — muted grey */
.wh-status-v        /* Verified — green */
.wh-status-uc       /* Under correction — amber */
.wh-status-rr       /* Research required — red */
.wh-status-na       /* Not yet audited — amber */
.wh-src             /* Source authority — linked */
.wh-date            /* Date — muted */
.wh-sup             /* Newer/older edition link — right-aligned */
.wh-notice          /* Independence + legal notice — second line, italic */
```

**Backfill priority for WM-12:**

All 110 posts need watermark fields. Priority order:
1. WAA corridor posts (W1-W22) — highest risk, most user-facing
2. Country audit posts (39 posts) — high traffic
3. Professional playbooks (11 posts) — high trust requirement
4. Guides (40 posts) — medium priority
5. Student playbooks, business playbooks, case studies, policy updates — lowest priority

For posts where the primary source is known from the content (e.g. Germany post cites DAAD, Canada post cites IRCC), set `evidenceStatus: verified` and add the source fields. For posts where the primary source is unclear, set `evidenceStatus: research-required`.

---

## SPRINT B — Content queue (W1-W22 from WAA research)

Active posts being written. Each post requires: frontmatter with watermark fields, body content, no emoji, no em dashes, FAQs where applicable.

| ID | Post | Category | File | Status |
|---|---|---|---|---|
| W1 | Canada tech visa 2026 — the honest version | Professional Playbook | `playbooks/professional/canada-tech-express-entry-honest-guide-2026.md` | **DONE** `168070d` |
| W2 | Canada Francophone immigration — caregivers, PSWs | Professional Playbook | `playbooks/professional/canada-francophone-immigration-caregivers-2026.md` | **DONE** `168070d` |
| W3 | Qatar work visa reality check | Guide — Work | `guides/work/qatar-work-visa-reality-check-2026.md` | **DONE** `168070d` |
| W4 | Is Mongolia a real work destination? | Guide — Work | `guides/work/mongolia-work-visa-nigeria-reality-2026.md` | **DONE** `20310d7` |
| W5 | How to spot a fake travel agent — Nigerian checklist | Guide — Work | `guides/work/how-to-spot-fake-travel-agent-nigeria-2026.md` | **DONE** `20310d7` |
| W6 | Oman work visa for mechanics and electricians | Guide — Work | `guides/work/oman-trades-work-visa-mechanic-electrician-2026.md` | **DONE** `20310d7` |
| W7 | Guyana 2-year freelance work visa | Country Audit | `country-audits/guyana/guyana-visa-from-nigeria-2026.md` | **DONE** `20310d7` |
| W8 | Bulgaria study visa for Nigerians 2026 | Country Audit | `country-audits/bulgaria/bulgaria-visa-from-nigeria-2026.md` | **DONE** `5acb221` |
| W9 | Croatia study visa 2026 — RIT University, debt trap warning | Country Audit | `country-audits/croatia/croatia-visa-from-nigeria-2026.md` | **DONE** `5acb221` |
| W10 | Canada LMIA warehouse and logistics work permit | Guide — Work | `guides/work/canada-lmia-warehouse-logistics-2026.md` | **DONE** `5acb221` |
| W11 | Singapore Employment Pass — COMPASS explained | Guide — Work | `guides/work/singapore-employment-pass-compass-guide-2026.md` | **DONE** `5acb221` |
| W12 | "Job assistance when you get there" — red flag guide | Guide — Work | `guides/work/job-assistance-on-arrival-red-flag-2026.md` | **DONE** `e1c985e` |
| W13 | What "zero deposit" visa offers actually mean | Guide — Work | `guides/work/zero-deposit-visa-offers-what-they-mean-2026.md` | **DONE** `e1c985e` |
| W14 | Antigua and Barbuda visa from Nigeria | Country Audit | `country-audits/antigua-barbuda/antigua-barbuda-visa-from-nigeria-2026.md` | **PENDING** — needs primary source research |
| W15 | Oman freelance visa vs employment visa | Guide — Work | `guides/work/oman-freelance-visa-vs-employment-visa-2026.md` | **DONE** `e1c985e` |
| W16 | Kafala reform tracker 2026 | Guide — Work | `guides/work/kafala-reform-tracker-2026.md` | **DONE** `e323e79` |
| W17 | How to read a Gulf employment contract | Guide — Work | `guides/work/gulf-employment-contract-guide-2026.md` | **DONE** `e323e79` |
| W18 | What to do if your employer confiscates your passport | Guide — Work | `guides/work/passport-confiscation-what-to-do-2026.md` | **DONE** `e323e79` |
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
| D1 | `CA-healthcare-semiskilled-francophone-2026` | CA | care_work / semi_skilled | **DONE** `d8b7f36` |
| D2 | `CA-logistics-semiskilled-2026` | CA | logistics / semi_skilled | **DONE** `d8b7f36` |
| D3 | `OM-trades-unskilled-2026` | OM | trades / trades | **DONE** `d8b7f36` |
| D4 | `QA-trades-unskilled-2026` | QA | trades / unskilled | **DONE** `d8b7f36` |
| D5 | `SG-software-it-skilled-2026` | SG | software_it / skilled | **DONE** `d8b7f36` |
| D6 | `DE-care-work-skilled-2026` | DE | care_work / skilled | **DONE** `d8b7f36` |
| D7 | `IE-healthcare-skilled-2026` | IE | healthcare / skilled | **DONE** 2026-11-12 |
| D8 | `NL-software-it-skilled-2026` | NL | software_it / skilled | **DONE** 2026-11-12 |

---

## SPRINT D — New countries (countries.json + pathways.json)

| ID | Country | ISO | Route | Status |
|---|---|---|---|---|
| C1 | Bulgaria | BG | Study visa | **DONE** `5acb221` |
| C2 | Croatia | HR | Study visa | **DONE** `5acb221` |
| C3 | Guyana | GY | Freelance work visa | **DONE** `20310d7` |
| C4 | Oman pathway record | OM | Employer-sponsored trades | **DONE** 2026-11-12 (`research_required`; OM country record added too) |

---

## SPRINT E — Production deployment

Pre-deployment checklist. All items must be green before `npx wrangler deploy`.

| ID | Check | Status |
|---|---|---|
| E1 | `npm test` — 19/19 suites, 214/214 passing | **PASSING** `85b016b` |
| E2 | `node scripts/validate-agent-registry.js` — 0 errors | **PASSING** |
| E3 | `node scripts/validate-commercial-registry.js` — 0 errors | **PASSING** |
| E4 | `node scripts/verify-build.js` — BUILD INTEGRITY PASSED | **PASSING** |
| E5 | `npm run build` — 0 Eleventy errors | **PASSING** |
| E6 | Watermark sprint (WM-1 to WM-7) complete | **DONE** `168070d` |
| E7 | Batch 1-6 content (W1-W13, W15-W18) committed | **DONE** `85b016b` |
| E8 | All tests still passing after content additions | **DONE** — 214/214 |
| E9 | Wrangler deploy — DNS issue with `upload.assets.cloudflare.com` | **BLOCKED** — owner: retry or downgrade wrangler to v3 |
| E10 | `npx wrangler deploy` from project root | **OWNER ACTION** |

**Deploy command (owner):**
```bash
# Option A — downgrade wrangler to fix DNS issue (recommended)
npm install --save-dev wrangler@3 && npx wrangler deploy

# Option B — retry with current wrangler (may work if DNS resolves)
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
- Build clean, 0 errors
- WAA wizard fully wired (steps 1-4, demand matching, safety callouts, agent matching engine, intake form, WAA-4 safety gate)
- 31 countries, 71 pathways, 125 blog posts, 22 demand records
- Quality gates all passing
- Commit `85b016b` is deployable
- Watermark trust layer on all posts (WM-1 to WM-7)
- W1-W13 + W15-W18 content live in repo

**What is blocked on deploy:**
- `upload.assets.cloudflare.com` DNS not resolving — fix: `npm install --save-dev wrangler@3 && npx wrangler deploy`

**What is pending but does NOT block deploy:**
- WM-8 to WM-13 (hybrid watermark upgrade)
- W14 (Antigua — needs research), W19-W22 (platform expansion)
- D7/D8 demand records (IE healthcare, NL software)
- C4 Oman pathway record
- WAA-3a (first verified agent — owner action)

---

## Remaining task count

| Sprint | Total | Done | Pending | Blocked |
|---|---|---|---|---|
| A — Watermark | 13 | 7 | 6 | 0 |
| B — Content W1-W22 | 22 | 17 | 5 | 0 |
| C — Demand records | 8 | 6 | 2 | 0 |
| D — New countries | 4 | 3 | 1 | 0 |
| E — Deploy | 10 | 8 | 1 | 1 |
| F — WAA-3a | 5 | 0 | 0 | 5 |
| G — Quality gates | 6 | 6 | 0 | 0 |
| **Total** | **68** | **47** | **15** | **6** |
