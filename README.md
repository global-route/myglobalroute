# Global Route: African Mobility & Global Migration Blueprint

**Radical Transparency for African Students, Professionals & Business Owners**

**Current status (2026-10-11):** Active development — **release NO-GO**. Phase 0 production exit is blocked; Phases 1–5 remain incomplete and Phase 6 is deferred. See [active sprint](docs/sprints/ACTIVE_SPRINT.md), [phase tracker](docs/project/PHASE_STATUS.md), and [release verification](docs/project/RELEASE_VERIFICATION_2026-10-08.md).  
**Current data baseline:** 26 countries, 56 pathways (52 publishable / 4 research-required), 193 evidence records; country source review is in progress.
**Structured requirement coverage:** 16 evidence-linked declarations across 6 pathways; 50 pathways still lack structured declarations, which means unknown coverage—not zero requirements or eligibility. Recent schema/data additions have not been validated because testing and CI work is paused by user direction. Aggregate approval rates, costs and timelines remain null where field-level evidence is missing.

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

## 📁 Current Repository Structure

The outline below highlights the current working areas; it is not an exhaustive file listing. The canonical project status and active work are tracked in `docs/project/` and `docs/sprints/ACTIVE_SPRINT.md`.

```text
/
├── README.md, CHANGELOG.md, package.json
├── .github/workflows/                 # Quality Gate, Lint, Browser Smoke
├── src/
│   ├── data/                          # Countries, pathways, subroutes, requirements, evidence
│   ├── js/                            # App, search, calculator, route engine, analytics
│   ├── css/                           # Site and blog styles
│   ├── pages/                         # Generated public pages
│   ├── templates/                     # Eleventy templates
│   └── content/blog/                  # Editorial source content
├── scripts/                           # Validation, manifest, freshness, build and deploy checks
├── tests/                             # Jest unit and regression tests
├── e2e/                               # Browser-level checks
├── docs/
│   ├── project/                       # Phase status, assessment, roadmap, release verification
│   ├── sprints/                       # Active sprint, tasks and historical handovers
│   ├── data/                           # Country source-review manifest
│   ├── reference/                     # Architecture, data trust, privacy, SEO and stack
│   ├── guides/                        # Contributor and operational guides
│   ├── monetization/                  # Monetization design and readiness
│   └── phase-0/, phase-1/, phase-3/   # Legacy phase-organized material; see PHASE_STATUS.md
├── content/                           # Additional editorial content
├── public/                            # Static assets
├── netlify.toml
└── wrangler.jsonc
```

Useful entry points:
- [Documentation index](docs/INDEX.md)
- [Architecture](docs/reference/ARCHITECTURE.md) and [tech stack](docs/reference/TECH_STACK.md)
- [Contribution guide](docs/guides/CONTRIBUTING.md)
- [Active sprint](docs/sprints/ACTIVE_SPRINT.md)
- [Phase status](docs/project/PHASE_STATUS.md)
- [Country source-review manifest](docs/data/country-source-review-manifest.json)
