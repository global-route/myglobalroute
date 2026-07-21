# Global Route: African Mobility & Global Migration Blueprint

**Radical Transparency for African Students, Professionals & Business Owners**

---

## 📋 Project Overview

Global Route is a content-driven platform providing verified, actionable migration pathways for African passport holders. Unlike inflated visa approval statistics, we audit **true acceptance rates** and hidden costs across 26 countries, offering sector-specific strategies for students, professionals, and business owners.

**Mission:** Empower African talent to navigate global mobility with honesty, strategy, and confidence.

---

## 🎯 Core Features

- **Country Reality Audits:** True visa approval rates for African applicants
- **Budget Calculators:** Interactive tools to find affordable pathways
- **Sector-Specific Playbooks:** Student, Professional, and Business strategies
- **Cost Breakdowns:** Transparent financial barriers (tuition, blocked accounts, etc.)
- **SEO-Optimized Content:** High-intent keywords for organic discovery
- **AdMob Monetization:** Contextually relevant travel & financial services ads

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
