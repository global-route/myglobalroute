# MyPathway2Global — Documentation Index

> **Updated:** 2026-10-27  
> **Purpose:** Canonical map for public project documentation. Keep one current source of truth per topic; dated or superseded execution notes belong in `archive/`.

## Start here

| Need | Canonical document |
|---|---|
| Current sprint, priorities and blockers | [Active Sprint](sprints/ACTIVE_SPRINT.md) |
| Owner-side actions and external dependencies | [Owner Actions](sprints/OWNER_ACTIONS.md) |
| Phase status and exit gates | [Phase Status](project/PHASE_STATUS.md) |
| Overall delivery plan | [Execution Roadmap](project/EXECUTION_ROADMAP.md) |
| Release evidence / deployment state | [Release Verification](project/RELEASE_VERIFICATION_2026-10-08.md) |
| UI redesign findings and Figma handoff | [UI/UX Audit & Classic Design Roadmap](product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md) |
| Documentation structure and ownership | [Documentation Map](README.md) |

## Project planning

- [Phase Status](project/PHASE_STATUS.md) — phase completion and open gates.
- [Execution Roadmap](project/EXECUTION_ROADMAP.md) — overall sequence and dependencies.
- [Task Specification](project/TASK_SPEC.md) — task-level requirements.
- [Active Sprint](sprints/ACTIVE_SPRINT.md) — current source of truth for sprint execution.
- [Master Delivery Plan](sprints/MASTER_DELIVERY_PLAN.md) — longer-horizon plan.
- [P0 Delivery Plan](sprints/P0_DELIVERY_PLAN.md) — release-critical work and acceptance conditions.
- [Production Readiness Tasks](sprints/PRODUCTION_READINESS_TASKS.md) — production readiness checklist.
- [Enhancement Tasks](sprints/ENHANCEMENT_TASKS.md) — product improvements.
- [Owner Actions](sprints/OWNER_ACTIONS.md) — owner-managed actions and dependencies.
- [Archive](archive/) — historical/superseded planning and execution records; not current status.

## Product and design

- [UI/UX Audit & Classic Design Roadmap](product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md) — screenshot findings, classic UI principles, Figma workflow and proposed UI sprints.
- [UI Optimisation Sprint](sprints/UI_OPTIMISATION_SPRINT.md)
- [UI Overwork Specification](sprints/UI_OVERWORK_SPEC.md)
- [UI Transformation](sprints/UI_UX_TRANSFORM.md)
- [UI Spotlight Plan](sprints/UI_SPOTLIGHT_PLAN.md)
- [Wizard Plan](sprints/WIZARD_PLAN.md)

## Technical reference

- [Architecture](reference/ARCHITECTURE.md)
- [Technology Stack](reference/TECH_STACK.md)
- [Dependencies](reference/DEPENDENCIES.md)
- [Deployment](reference/DEPLOYMENT.md)
- [Design Blueprint](reference/DESIGN_BLUEPRINT.md)
- [Data Trust Standard](reference/DATA_TRUST_STANDARD.md)
- [Evidence Schema](reference/EVIDENCE_SCHEMA.md)
- [Privacy and Security](reference/PRIVACY_SECURITY_COMPLIANCE.md)
- [SEO Architecture](reference/SEO_ARCHITECTURE.md)
- [Pages Required](reference/PAGES_REQUIRED.md)
- [Blueprint to Execution](reference/BLUEPRINT_TO_EXECUTION.md)
- [Original Project Blueprint](reference/Global%20Route%20Blueprint.md) — retained as a historical vision/reference; current evidence and trust standards take precedence where older claims conflict.

## Data and evidence

- [Country Source Review Manifest](data/country-source-review-manifest.json) — country-source review status and sign-off tracking.
- [Evidence Schema](reference/EVIDENCE_SCHEMA.md)
- [Data Trust Standard](reference/DATA_TRUST_STANDARD.md)

## Monetization and revenue

- [Monetization Roadmap](monetization/MONETIZATION_ROADMAP.md)
- [Monetization Registry](monetization/MONETIZATION_REGISTRY.md) — runtime inventory and commercial firewall.
- [Revenue Architecture](monetization/REVENUE_ARCHITECTURE.md)
- [AdSense Strategy](monetization/ADSENSE_STRATEGY.md)
- [Ad Placement Map](monetization/AD_PLACEMENT_MAP.md)
- [Affiliate Strategy](monetization/AFFILIATE_STRATEGY.md)
- [Partner Revenue](monetization/PARTNER_REVENUE.md)
- [Measurement Implementation](monetization/MEASUREMENT_IMPLEMENTATION.md)
- [Revenue Metrics](monetization/REVENUE_METRICS.md)
- [MRR Model](monetization/MRR_MODEL.md)

> Monetization strategy and implementation documentation is public repository documentation. Do not store credentials, publisher secrets, private contracts, bank details or confidential forecasts in these files.

## Guides and content

- [Quick Start](guides/QUICK_START.md)
- [Contributing](guides/CONTRIBUTING.md)
- [Content Strategy](guides/CONTENT_STRATEGY.md)
- [Blueprint Implementation](guides/BLUEPRINT_IMPLEMENTATION.md)
- [AdMob Integration Guide](guides/ADMOB_INTEGRATION.md) — historical/general guide; verify against current AdSense and monetization registry before following.
- [Blog Structure](phase-3/BLOG_STRUCTURE.md)
- [Blog Posts Guide](phase-3/BLOG_POSTS_GUIDE.md)
- [Privacy Data Inventory](phase-4/PRIVACY_DATA_INVENTORY.md)

## Historical material

Use `docs/archive/` for dated handovers, old task plans, checkpoint reports and superseded assessments. Do not treat archived metrics, test counts, hosting claims or checkboxes as current without checking the active sprint, phase tracker and latest release evidence.

## Confidential/local-only documents

Private operational plans, individual role details, internal timelines and financial forecasts are not stored in this public repository. Keep local copies under ignored paths such as `docs/internal/`, `docs/private/` or `internal/`. See the root `.gitignore`.

**Important:** Git ignore rules do not hide files that are already tracked. Never put credentials or sensitive commercial details in a committed document; if a secret was committed, rotate it and remove it from repository history as appropriate.
