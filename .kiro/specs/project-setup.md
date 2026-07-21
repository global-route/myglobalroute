# Global Route: Project Setup & Structure

## Overview
Global Route is a content-driven platform providing verified migration pathways for African passport holders. The project includes comprehensive documentation, source code, and internal planning files organized for easy navigation.

## File Organization

### Public Documentation (✅ For External Use)
Located in `/docs/` - These files are public-facing and should be shared with team members, contributors, and stakeholders.

- **MISSION_STATEMENT.md** - Vision, values, and long-term strategy
- **ARCHITECTURE.md** - Technical stack, system design, and development guidelines
- **CONTENT_STRATEGY.md** - Editorial roadmap, SEO strategy, and content calendar
- **ADMOB_INTEGRATION.md** - Monetization setup and best practices
- **DEPLOYMENT.md** - Build process, deployment, and DevOps
- **CONTRIBUTING.md** - How to contribute content and code

### Internal Planning (🔒 Internal Use Only)
Located in `/internal/` - These files contain sensitive business information and should not be shared publicly.

- **blueprint.md** - Original project blueprint (reference document)
- **timeline.md** - Project phases, milestones, and timeline
- **team-roles.md** - Team structure, roles, and responsibilities
- **financial-model.md** - Revenue projections and budget
- **data-structure.json** - Country database schema

### Source Code
Located in `/src/` - Application files for development and deployment.

```
/src
  ├── index.html              # Homepage entry point
  ├── css/
  │   ├── styles.css          # Main stylesheet (mobile-first)
  │   └── responsive.css      # Responsive breakpoints
  ├── js/
  │   ├── app.js              # Core application logic
  │   ├── calculator.js       # Budget calculator module
  │   ├── search.js           # Search functionality
  │   └── admob-loader.js     # AdMob integration
  ├── data/
  │   └── countries.json      # Country database
  ├── pages/                  # Page templates (to be created)
  └── components/             # Reusable components (to be created)
```

### Content Files
Located in `/content/` - Blog posts, guides, and editorial content.

```
/content
  ├── blog/
  │   ├── 01-germany-blocked-account.md
  │   ├── 02-italy-dsu-scholarship.md
  │   ├── 03-canada-visa-reality.md
  │   ├── 04-us-llc-setup.md
  │   └── _index.md
  ├── pages/
  │   ├── student-guide.md
  │   ├── professional-guide.md
  │   └── business-guide.md
  └── faq.md
```

### Configuration Files
- **.gitignore** - Git exclusions (node_modules, .env, etc.)
- **package.json** - Node.js dependencies and scripts
- **netlify.toml** - Netlify deployment configuration
- **README.md** - Project overview and quick start

### Public Assets
Located in `/public/` - Images, icons, and static files served to users.

```
/public
  ├── assets/
  │   ├── icons/
  │   ├── flags/
  │   └── logos/
  ├── robots.txt              # SEO robots directive
  └── sitemap.xml             # SEO sitemap
```

---

## Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/yourusername/global-route.git
cd global-route
npm install
```

### 2. Development
```bash
npm run dev
# Starts local dev server at http://localhost:8888
```

### 3. Build
```bash
npm run build
# Compiles CSS, JS, and optimizes assets to /dist
```

### 4. Deploy
```bash
npm run deploy
# Deploys to Netlify (production)
```

---

## Key Features Implemented

✅ **Homepage** - Hero section, mission statement, featured content
✅ **Navigation** - Responsive header with mobile menu
✅ **Styling** - Mobile-first CSS with responsive breakpoints
✅ **Data Structure** - Countries database (JSON)
✅ **Calculator Module** - Budget affordability logic
✅ **Search Module** - Semantic search functionality
✅ **AdMob Integration** - Monetization framework
✅ **Analytics** - Google Analytics tracking
✅ **Accessibility** - WCAG compliance basics

---

## Next Steps (Phase 1 Week 2)

### Content
- [ ] Write 5 cornerstone articles (Germany, Italy, Canada, Portugal, US LLC)
- [ ] Complete 26-country database entries
- [ ] Create playbook guides (students, professionals, business)

### Development
- [ ] Build individual country pages (/pages/countries.html)
- [ ] Create calculator page (/pages/calculator.html)
- [ ] Implement student/professional/business playbook pages
- [ ] Add comment section (moderation system)

### Deployment
- [ ] Connect GitHub to Netlify
- [ ] Set up environment variables (AdMob Publisher ID, Analytics ID)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (auto via Netlify)

### Marketing
- [ ] Create social media accounts (Twitter, LinkedIn)
- [ ] Write launch announcement
- [ ] Reach out to African diaspora communities
- [ ] Submit to African tech blogs/publications

---

## File Size & Performance Targets

| Asset | Target Size | Status |
|-------|-------------|--------|
| HTML (gzipped) | <50KB | ✅ On track |
| CSS (minified) | <30KB | ✅ On track |
| JS (minified) | <50KB | ✅ On track |
| Total page | <500KB | ✅ On track |
| Load time (4G) | <2s | ✅ Target met |

---

## Environment Variables Needed

Create `.env.production` file:
```
ADMOB_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NETLIFY_SITE_ID=your-site-id
```

---

## Contributing

See `/docs/CONTRIBUTING.md` for:
- Content contribution guidelines
- Code contribution standards
- Pull request process
- Fact-checking protocol

---

## Security & Privacy

- ✅ HTTPS only (auto via Netlify)
- ✅ Content Security Policy headers
- ✅ No personal data collection
- ✅ Privacy policy compliant (GDPR/CCPA)
- ✅ No sensitive secrets in repo

---

## Team Access

- **GitHub:** Repository access
- **Netlify:** Deploy access
- **Google Analytics:** Viewing access
- **AdMob:** Publisher account (main lead only)

---

## Support

**Questions about structure?** See README.md
**Technical issues?** See ARCHITECTURE.md
**Content guidelines?** See CONTRIBUTING.md
**Deployment help?** See DEPLOYMENT.md

---

**Last Updated:** January 15, 2026
**Status:** ✅ Phase 1 Foundation Complete
