# Global Route: Complete Project Structure

## 📁 Full Directory Tree

```
Global Route/
│
├── 📄 README.md                              # Project overview & quick start
├── 📄 .gitignore                             # Git exclusions
├── 📄 package.json                           # Node.js dependencies & scripts
├── 📄 netlify.toml                           # Netlify deployment config
├── 📄 PROJECT_STRUCTURE.md                   # This file
│
├── 📂 docs/                                  # PUBLIC DOCUMENTATION
│   ├── MISSION_STATEMENT.md                  # Vision, values, core purpose
│   ├── ARCHITECTURE.md                       # Tech stack & system design
│   ├── CONTENT_STRATEGY.md                   # Editorial roadmap & SEO
│   ├── ADMOB_INTEGRATION.md                  # Monetization strategy
│   ├── DEPLOYMENT.md                         # Build & deployment guide
│   └── CONTRIBUTING.md                       # Contribution guidelines
│
├── 📂 internal/                              # 🔒 INTERNAL PLANNING (Confidential)
│   ├── blueprint.md                          # Original project blueprint
│   ├── timeline.md                           # Project phases & milestones
│   ├── team-roles.md                         # Team structure & roles
│   ├── financial-model.md                    # Revenue & budget
│   └── data-structure.json                   # Database schema
│
├── 📂 src/                                   # SOURCE CODE
│   ├── index.html                            # Homepage
│   │
│   ├── css/
│   │   ├── styles.css                        # Main styles (mobile-first)
│   │   └── responsive.css                    # Responsive breakpoints
│   │
│   ├── js/
│   │   ├── app.js                            # Core app logic
│   │   ├── calculator.js                     # Budget calculator
│   │   ├── search.js                         # Search functionality
│   │   ├── admob-loader.js                   # AdMob integration
│   │   └── utils/                            # Utility functions (future)
│   │
│   ├── data/
│   │   ├── countries.json                    # Country database
│   │   ├── playbooks.json                    # Sector playbooks (future)
│   │   └── keywords.json                     # SEO keywords (future)
│   │
│   ├── pages/                                # Page templates (to create)
│   │   ├── countries.html
│   │   ├── student-playbook.html
│   │   ├── professional-playbook.html
│   │   ├── business-playbook.html
│   │   ├── calculator.html
│   │   ├── about.html
│   │   ├── blog.html
│   │   └── contact.html
│   │
│   └── components/                           # Reusable components (to create)
│       ├── header.html
│       ├── footer.html
│       ├── country-card.html
│       └── blog-card.html
│
├── 📂 content/                               # EDITORIAL CONTENT
│   ├── blog/
│   │   ├── 01-germany-blocked-account.md
│   │   ├── 02-italy-dsu-scholarship.md
│   │   ├── 03-canada-visa-reality.md
│   │   ├── 04-us-llc-setup.md
│   │   └── _index.md
│   │
│   ├── pages/
│   │   ├── student-guide.md
│   │   ├── professional-guide.md
│   │   └── business-guide.md
│   │
│   └── faq.md
│
├── 📂 public/                                # STATIC ASSETS
│   ├── assets/
│   │   ├── icons/
│   │   │   └── favicon.svg
│   │   ├── flags/                            # Country flag SVGs
│   │   └── logos/
│   │       └── logo.svg
│   │
│   ├── robots.txt                            # SEO robots directive
│   └── sitemap.xml                           # SEO sitemap
│
├── 📂 scripts/                               # BUILD SCRIPTS (to create)
│   ├── build-css.js
│   ├── build-js.js
│   ├── validate-data.js
│   └── generate-sitemap.js
│
├── 📂 netlify/                               # NETLIFY FUNCTIONS (optional)
│   └── functions/
│       ├── submit-contact.js
│       └── track-conversion.js
│
├── 📂 tests/                                 # TEST FILES (to create)
│   ├── calculator.test.js
│   ├── search.test.js
│   └── data-validation.test.js
│
└── 📂 .kiro/                                 # KIRO IDE CONFIG
    └── specs/
        └── project-setup.md                  # Project setup spec

```

---

## 📊 File Organization by Purpose

### 🎯 For Public Release (Deploy)
These files are served to end users:
- `/src/index.html` - Homepage
- `/src/css/` - All stylesheets
- `/src/js/` - All JavaScript
- `/src/data/countries.json` - Country data
- `/public/` - Static assets
- `/content/` - Blog posts & guides

### 👥 For Team Collaboration
These files guide the team:
- `/docs/` - All documentation
- `README.md` - Quick reference
- `package.json` - Dependencies
- `netlify.toml` - Deployment config
- `.gitignore` - Git rules

### 🔒 For Internal Planning Only
These files contain sensitive business info (DO NOT COMMIT PUBLIC):
- `/internal/financial-model.md`
- `/internal/timeline.md`
- `/internal/team-roles.md`

### 🛠️ For Development
These files support the build process:
- `/scripts/` - Build automation
- `/tests/` - Test suites
- `netlify/functions/` - Backend (optional)

---

## 🚀 File Creation Timeline

### ✅ Phase 1: COMPLETED (Week 1-2)
- [x] `.gitignore`
- [x] `README.md`
- [x] `package.json`
- [x] `netlify.toml`
- [x] `/docs/` - All 6 docs
- [x] `/internal/` - All 4 internal files
- [x] `/src/index.html`
- [x] `/src/css/styles.css`
- [x] `/src/css/responsive.css`
- [x] `/src/js/app.js`
- [x] `/src/js/calculator.js`
- [x] `/src/js/search.js`
- [x] `/src/js/admob-loader.js`
- [x] `/src/data/countries.json` (sample)
- [x] `.kiro/specs/project-setup.md`

### 📋 Phase 2: TODO (Week 3-6)
- [ ] `/src/pages/` - All 8 page templates
- [ ] `/src/components/` - All 4 components
- [ ] `/content/blog/` - 5+ cornerstone articles
- [ ] `/content/pages/` - Playbook guides
- [ ] `/public/assets/` - Flags, icons, logos
- [ ] `/scripts/` - Build automation
- [ ] `/tests/` - Test suites
- [ ] Database completion (26 countries)

### 🔄 Phase 3: TODO (Week 7-12)
- [ ] Content expansion (80+ articles)
- [ ] Community features (comments, testimonials)
- [ ] Advanced calculators
- [ ] Newsletter integration
- [ ] Social media content
- [ ] SEO optimization

---

## 💾 File Categories & Purposes

### Documentation Files
| File | Purpose | Audience |
|------|---------|----------|
| MISSION_STATEMENT.md | Vision & values | Team, stakeholders |
| ARCHITECTURE.md | Tech decisions | Developers |
| CONTENT_STRATEGY.md | Editorial plan | Content team |
| ADMOB_INTEGRATION.md | Monetization | Business lead |
| DEPLOYMENT.md | DevOps guide | Tech lead |
| CONTRIBUTING.md | How to help | External contributors |

### Data Files
| File | Purpose | Format |
|------|---------|--------|
| countries.json | Country database | JSON |
| playbooks.json | Sector strategies | JSON (future) |
| keywords.json | SEO targets | JSON (future) |

### Source Code Files
| File | Purpose | Type |
|------|---------|------|
| index.html | Entry point | HTML |
| styles.css | Main stylesheet | CSS |
| responsive.css | Mobile styles | CSS |
| app.js | Core logic | JavaScript |
| calculator.js | Calculator module | JavaScript |
| search.js | Search module | JavaScript |
| admob-loader.js | AdMob integration | JavaScript |

### Configuration Files
| File | Purpose | Used By |
|------|---------|---------|
| .gitignore | Git rules | Git |
| package.json | Dependencies | npm |
| netlify.toml | Deployment | Netlify |
| .env | Secrets | App (not versioned) |

---

## 🎯 File Relationships

```
User Request
    ↓
index.html (entry point)
    ↓
    ├→ styles.css + responsive.css
    ├→ app.js (initialization)
    │   ├→ countries.json (load data)
    │   ├→ calculator.js (if calc page)
    │   ├→ search.js (if search used)
    │   └→ admob-loader.js (display ads)
    │
    └→ Page templates (pages/*.html)
        ├→ Reusable components (components/*.html)
        └→ Content files (content/*.md)

Deployment
    ↓
netlify.toml (build config)
    ├→ package.json (install deps)
    ├→ scripts/build-*.js (compile assets)
    └→ dist/ (output)
        ↓
        Netlify CDN
        ↓
        User browser
```

---

## 📈 Code Statistics

**HTML:** ~500 lines
**CSS:** ~800 lines
**JavaScript:** ~700 lines
**JSON Data:** ~500 lines
**Documentation:** ~15,000 lines
**Total:** ~17,500 lines

**Estimated delivery:** Full project = 50,000+ lines
- Documentation: 25,000+ lines
- Content: 15,000+ lines
- Code: 10,000+ lines

---

## 🔐 Security & Privacy

### Public Files (safe to share)
- `/docs/` - All documentation
- `/src/` - Source code
- `/content/` - Blog posts
- `/public/` - Static assets
- README.md, package.json, netlify.toml

### Confidential Files (DO NOT COMMIT)
- `/internal/` - All planning files
- `.env` - Environment secrets
- `secrets.json` - API keys
- `.kiro/settings/` - Private config

### Git Protection
```bash
# .gitignore prevents accidental commits
.env
.env.*
secrets.json
/internal/
```

---

## 🧪 Testing & Quality

### Code Quality Tools
- ESLint - JavaScript linting
- Prettier - Code formatting
- Jest - Unit testing
- Lighthouse - Performance audits

### Testing Files (to create)
- `/tests/calculator.test.js` - Calculator logic
- `/tests/search.test.js` - Search functionality
- `/tests/data-validation.test.js` - Data integrity

### Run Tests
```bash
npm run test           # Run all tests
npm run lint          # Check code quality
npm run format        # Auto-format code
npm run data:validate # Validate country data
```

---

## 📦 Deployment Checklist

Before deploying to production:

- [ ] All files committed to Git
- [ ] `.env` file created (not committed)
- [ ] Tests passing (`npm run test`)
- [ ] Lint clean (`npm run lint`)
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Performance acceptable (<2s load)
- [ ] SEO tags in place
- [ ] Analytics configured
- [ ] AdMob setup complete

---

## 📞 Quick Reference

| Need | File |
|------|------|
| Understand project | README.md |
| Understand vision | /docs/MISSION_STATEMENT.md |
| Technical setup | /docs/ARCHITECTURE.md |
| Write content | /docs/CONTRIBUTING.md |
| Deploy changes | /docs/DEPLOYMENT.md |
| Add monetization | /docs/ADMOB_INTEGRATION.md |
| SEO strategy | /docs/CONTENT_STRATEGY.md |

---

**Last Updated:** January 15, 2026
**Status:** Phase 1 Complete ✅
**Next:** Phase 2 Content Expansion 📝
