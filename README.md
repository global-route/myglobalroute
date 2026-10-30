# MyPathway2Global: African Mobility & Global Migration Blueprint

**Evidence-gated migration intelligence for African Students, Professionals & Business Owners**

**Current status (2026-10-30):** Production live. All phases 0-9, B, CP, GOIF, Vertical B and CRS/Tax series complete. 19/19 test suites passing (180/180 tests). See [active sprint](docs/sprints/ACTIVE_SPRINT.md), [phase tracker](docs/project/PHASE_STATUS.md).

**Current data baseline:** 30 countries, 69 pathways (63 publishable / 6 research-required), 218 evidence records; all 63 publishable pathways have structured requirements[].

**Test status:** 19/19 suites PASS, 180/180 tests PASS. 96 blog posts. 145 sitemap URLs.

**Live site:** [https://mypathway2global.org.uk](https://mypathway2global.org.uk)

---

## 📋 Project Overview

MyPathway2Global is an evidence-gated mobility platform for African passport holders. It organizes migration pathways, official source trails and requirements for students and professionals. It does not claim true acceptance rates or total costs where reliable field-level evidence and a defensible methodology are unavailable.

**Mission:** Empower African talent to navigate global mobility with honesty, strategy, and confidence.

---

## 🎯 Core Features

- **Find MyPathway:** Filter 55 evidence-gated pathways by goal, passport country and current visa
- **Visa Wizard:** Guided 5-step tool for tourists, nomads and undecided movers
- **Country Directory:** 27 countries with official source trails and evidence status
- **Budget Calculator:** Planning aid for migration costs (not eligibility assessment)
- **Research Blog:** 31 posts across 7 categories — country audits, playbooks, case studies, guides, policy updates

---

## 📝 Blog Content (31 posts)

### Country Audits (15)
- [Germany Visa from Nigeria 2026](/blog/country-audits/germany/germany-visa-from-nigeria-2026/) — Zero tuition, €11,208 blocked account, 18-month job search visa
- [Canada Visa from Nigeria 2026](/blog/country-audits/canada/canada-visa-from-nigeria-2026/)
- [UK Visa from Nigeria 2026](/blog/country-audits/uk/uk-visa-from-nigeria-2026/)
- [Italy Visa from Nigeria 2026](/blog/country-audits/italy/italy-visa-from-nigeria-2026/)
- [Portugal Visa from Nigeria 2026](/blog/country-audits/portugal/portugal-visa-from-nigeria-2026/)
- [USA Visa from Nigeria 2026](/blog/country-audits/usa/usa-visa-from-nigeria-2026/)
- [Australia Visa from Nigeria 2026](/blog/country-audits/australia/australia-visa-from-nigeria-2026/)
- [France Visa from Nigeria 2026](/blog/country-audits/france/france-visa-from-nigeria-2026/)
- [Netherlands Visa from Nigeria 2026](/blog/country-audits/netherlands/netherlands-visa-from-nigeria-2026/)
- [Ireland Visa from Nigeria 2026](/blog/country-audits/ireland/ireland-visa-from-nigeria-2026/) — Critical Skills EUR 38,000, stamp 4 after 2 years
- [Spain Visa from Nigeria 2026](/blog/country-audits/spain/spain-visa-from-nigeria-2026/) — Digital nomad EUR 2,646/month, Beckham Law
- [Austria Visa from Nigeria 2026](/blog/country-audits/austria/austria-visa-from-nigeria-2026/) — RWR Card 55 points, EUR 1,217/month study funds
- [New Zealand Visa from Nigeria 2026](/blog/country-audits/new-zealand/new-zealand-visa-from-nigeria-2026/) — SMC direct residence, NZD 20,000 student funds
- [Japan Visa from Nigeria 2026](/blog/country-audits/japan/japan-visa-from-nigeria-2026/) — MEXT JPY 117,000/month, Engineer visa
- [South Korea Visa from Nigeria 2026](/blog/country-audits/south-korea/south-korea-visa-from-nigeria-2026/) — KGSP KRW 900,000/month, USD 9,000 student funds

### Student Playbooks (3)
- [Italy DSU Scholarship Complete Guide](/blog/playbooks/student/italy-dsu-scholarship-complete-guide/) — €15-20K/year in free benefits
- [UK Masters True Cost 2026](/blog/playbooks/student/uk-masters-true-cost-2026/)
- [Italy DSU vs. Germany Public Universities 2026](/blog/playbooks/student/italy-dsu-vs-germany-public-universities-2026/)

### Professional Playbooks (3)
- [Canada Express Entry 2026](/blog/playbooks/professional/canada-express-entry-2026/) — Points calculator and CRS breakdown
- [Germany Chancenkarte Visa 2026](/blog/playbooks/professional/germany-chancenkarte-visa-2026/)
- [Germany Chancenkarte vs. Canada Express Entry 2026](/blog/playbooks/professional/germany-chancenkarte-vs-canada-express-entry-2026/)

### Business Playbooks (1)
- [US LLC Setup from Africa 2026](/blog/playbooks/business/us-llc-setup-from-africa-2026/)

### Case Studies (2)
- [Chisom: Nigeria to Canada Software Engineer](/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer/) — Real ₦11.4M budget breakdown
- [Visa Rejection Patterns for African Applicants 2026](/blog/case-studies/rejection-analysis/visa-rejection-patterns-african-applicants-2026/)

### Guides (6)
- [Passport Tiers Explained 2026](/blog/guides/mobility/passport-tiers-explained-2026/)
- [How to Write a Visa Motivation Letter 2026](/blog/guides/applications/how-to-write-visa-motivation-letter-2026/)
- [Document Authentication Nigeria Visa 2026](/blog/guides/documentation/document-authentication-nigeria-visa-2026/)
- [How to Fund German Blocked Account from Nigeria 2026](/blog/guides/financial/how-to-fund-german-blocked-account-from-nigeria-2026/)
- [Tuition-Free & Low-Cost Study in Northern Europe & Asia 2026](/blog/guides/study/tuition-free-low-cost-study-northern-europe-asia-2026/)
- [How to Write a Visa Motivation Letter 2026](/blog/guides/applications/how-to-write-visa-motivation-letter-2026/)

### Policy Updates (1)
- [Canada SDS Program Cancelled January 2026](/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026/)

---

## 📁 Repository Structure

```text
/
├── README.md, CHANGELOG.md, package.json
├── src/
│   ├── data/                          # Countries, pathways, requirements, evidence
│   ├── js/                            # App, route engine, wizard engine, calculator, analytics
│   ├── css/                           # styles.css, responsive.css, enhancements.css
│   ├── pages/                         # Static HTML pages (incl. 404.html, visa-wizard.html)
│   └── templates/                     # Eleventy templates
├── content/
│   └── blog/                          # 31 blog posts (markdown)
├── scripts/                           # Validation, build, deploy, stale-audit scripts
├── tests/                             # Jest unit tests (19 suites, 168 tests)
├── docs/
│   ├── project/                       # Phase status, roadmap, task spec
│   ├── sprints/                       # Active sprint, walkthrough, owner actions
│   ├── reference/                     # Architecture, design blueprint, SEO
│   ├── monetization/                  # Revenue roadmap, ad placement
│   ├── data/                          # Country source manifest
│   └── archive/                       # Superseded sprint and planning documents
├── public/                            # Static assets (sitemap, robots, manifest, ads.txt)
└── wrangler.jsonc                     # Cloudflare Workers config
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Deploy to Cloudflare Workers
npx wrangler deploy
```

---

## 📚 Documentation

- [Active Sprint](docs/sprints/ACTIVE_SPRINT.md)
- [Phase Status](docs/project/PHASE_STATUS.md)
- [Owner Actions](docs/sprints/OWNER_ACTIONS.md)
- [Blog Content Inventory](docs/project/BLOG_CONTENT_INVENTORY.md)
- [Design Blueprint](docs/reference/DESIGN_BLUEPRINT.md)
- [Architecture](docs/reference/ARCHITECTURE.md)

---

## 🔗 Links

- **Live site:** [https://mypathway2global.org.uk](https://mypathway2global.org.uk)
- **Find MyPathway:** [https://mypathway2global.org.uk/pages/find-mypathway.html](https://mypathway2global.org.uk/pages/find-mypathway.html)
- **Visa Wizard:** [https://mypathway2global.org.uk/pages/visa-wizard.html](https://mypathway2global.org.uk/pages/visa-wizard.html)
- **Countries:** [https://mypathway2global.org.uk/pages/countries.html](https://mypathway2global.org.uk/pages/countries.html)
- **Blog:** [https://mypathway2global.org.uk/blog/](https://mypathway2global.org.uk/blog/)
