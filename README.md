# Global Route: African Mobility & Global Migration Blueprint

**Radical Transparency for African Students, Professionals & Business Owners**

**Current status (2026-10-11):** Active development — **release NO-GO**. Phase 0 production exit is blocked; Phases 1–5 remain incomplete and Phase 6 is deferred. See [active sprint](docs/sprints/ACTIVE_SPRINT.md), [phase tracker](docs/project/PHASE_STATUS.md), and [release verification](docs/project/RELEASE_VERIFICATION_2026-10-08.md).  
**Current data baseline:** 26 countries, 56 pathways (52 publishable / 4 research-required), 193 evidence records; country source review is in progress. Aggregate approval rates, costs and timelines remain null where field-level evidence is missing.

---

## 📋 Project Overview

Global Route is an evidence-gated mobility platform for African passport holders. It organizes migration pathways, official source trails and requirements for students and professionals. It does not claim true acceptance rates or total costs where reliable field-level evidence and a defensible methodology are unavailable.

**Mission:** Empower African talent to navigate global mobility with honesty, strategy, and confidence.

---

## Historical milestone — July 21, 2026 (not current project status)

### Blog Foundation Launched
- ✅ **5 cornerstone articles** written (25,400+ words)
- ✅ **27 category directories** organized
- ✅ **All content types** covered: Country Audits, Playbooks, Case Studies, Policy Updates
- ✅ **SEO-optimized** with keywords, meta descriptions, FAQs

**Featured Posts:**
1. [Germany Visa from Nigeria 2026](content/blog/country-audits/germany/) - Complete cost breakdown & approval rates
2. [Italy DSU Scholarship Guide](content/blog/playbooks/student/) - €15-20K/year FREE benefits
3. [US LLC Setup from Africa](content/blog/playbooks/business/) - 5-minute setup guide
4. [Chisom's Canada Success Story](content/blog/case-studies/success-stories/) - ₦11.4M budget breakdown
5. [Canada SDS Cancellation](content/blog/policy-updates/2026/) - Policy update & alternatives

---

## 🎯 Core Features

- **Country/source registry:** Evidence-gated country metadata; unsupported approval rates, costs and timelines remain unknown
- **Budget Calculators:** Interactive tools to find affordable pathways
- **Sector-Specific Playbooks:** Student, Professional, and Business strategies
- **Cost Breakdowns:** Transparent financial barriers (tuition, blocked accounts, etc.)
- **Blog Content:** 25K+ words across 5 cornerstone articles
- **SEO-Optimized Content:** High-intent keywords for organic discovery
- **Monetization:** Consent-aware foundations only; no live provider, partner or revenue status is implied

---

## 📁 Project Structure

```
Global Route/
├── README.md                          # Project overview & quick start
├── .gitignore                         # Git exclusions
├── package.json                       # Dependencies & scripts
├── netlify.toml                       # Deployment configuration
│
├── 📂 /docs
│   ├── MISSION_STATEMENT.md           # Vision, values, core purpose
│   ├── ARCHITECTURE.md                # Tech stack & system design
│   ├── CONTENT_STRATEGY.md            # Editorial roadmap & keywords
│   ├── ADMOB_INTEGRATION.md           # Monetization strategy
│   ├── DEPLOYMENT.md                  # Build & deployment guide
│   └── CONTRIBUTING.md                # Developer contribution guidelines
│
├── 📂 /internal
│   ├── blueprint.md                   # Original editorial blueprint (REFERENCE ONLY)
│   ├── data-structure.json            # Country database schema
│   ├── timeline.md                    # Project phase timeline
│   ├── team-roles.md                  # Team structure & responsibilities
│   └── financial-model.md             # Revenue projections & cost breakdown
│
├── 📂 /src
│   ├── index.html                     # Homepage entry point
│   ├── css/
│   │   ├── styles.css                 # Main stylesheet
│   │   └── responsive.css             # Mobile-first responsive design
│   ├── js/
│   │   ├── app.js                     # Core application logic
│   │   ├── search.js                  # Semantic search functionality
│   │   ├── calculator.js              # Budget calculator logic
│   │   └── admob-loader.js            # AdMob integration
│   ├── pages/
│   │   ├── home.html                  # Homepage template
│   │   ├── countries.html             # Country directory
│   │   ├── student-playbook.html      # Student pathways
│   │   ├── professional-playbook.html # Professional pathways
│   │   ├── business-playbook.html     # Business & wealth pathways
│   │   ├── calculator.html            # Budget calculator
│   │   ├── about.html                 # About & mission
│   │   ├── blog.html                  # Blog listing
│   │   └── contact.html               # Contact form
│   ├── data/
│   │   ├── countries.json             # Master country database
│   │   ├── playbooks.json             # Sector playbooks data
│   │   └── keywords.json              # SEO target keywords
│   └── components/
│       ├── header.html                # Navigation header
│       ├── footer.html                # Footer with links
│       ├── country-card.html          # Reusable country card
│       └── blog-card.html             # Reusable blog card
│
├── 📂 /content
│   ├── blog/
│   │   ├── 01-germany-blocked-account.md
│   │   ├── 02-italy-dsu-scholarship.md
│   │   ├── 03-canada-visa-reality.md
│   │   ├── 04-us-llc-setup.md
│   │   └── _index.md
│   ├── pages/
│   │   ├── student-guide.md
│   │   ├── professional-guide.md
│   │   └── business-guide.md
│   └── faq.md
│
├── 📂 /public
│   ├── assets/
│   │   ├── icons/
│   │   ├── flags/
│   │   └── logos/
│   ├── robots.txt                     # SEO robots file
│   └── sitemap.xml                    # SEO sitemap
│
└── 📂 /tests
    ├── calculator.test.js             # Budget calculator tests
    ├── search.test.js                 # Search functionality tests
    └── data-validation.test.js        # Country data validation
