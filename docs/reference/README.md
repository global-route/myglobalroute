# Reference Documentation

This directory contains stable technical and product standards, not the current sprint board.

## Architecture and operations

- `DEPLOYMENT.md` — build, deployment and verification procedures. **Note:** written Sept 2026 for Netlify. Platform is now on Cloudflare Workers — see correction notice at top of file.
- `PRIVACY_SECURITY_COMPLIANCE.md` — privacy and security implementation notes.
- Architecture, Tech Stack and Dependencies docs moved to `docs/archive/` (pre-Cloudflare, pre-rebrand — superseded 2026-10-30). Current stack: Cloudflare Workers, Eleventy, `wrangler.jsonc` — see `package.json` for dependencies.

## Product, content and trust

- `DESIGN_BLUEPRINT.md` — visual and interaction reference.
- `DATA_TRUST_STANDARD.md` — evidence policy and handling of unknown values. Updated 2026-11-05.
- `EVIDENCE_SCHEMA.md` — evidence record structure.
- `SEO_ARCHITECTURE.md` — metadata and indexing principles.
- `BLOG_POST_BLUEPRINT.md` — editorial article structure.
- `PAGES_REQUIRED.md` — intended page inventory.

## Planning references

- `BLUEPRINT_TO_EXECUTION.md` — **ARCHIVED** (Jan 2026). All Phase 2/3 tasks now complete. See `docs/project/PHASE_STATUS.md`.
- `Global Route Blueprint.md` — original/historical blueprint. Older claims are not authoritative when they conflict with current official evidence or the Data Trust Standard.
- `INDEX.md` — this directory's detailed index.

For the complete map, use [`docs/INDEX.md`](../INDEX.md). For current work, use [`docs/sprints/ACTIVE_SPRINT.md`](../sprints/ACTIVE_SPRINT.md) and [`docs/project/PHASE_STATUS.md`](../project/PHASE_STATUS.md).

## Maintenance rules

- Keep technical documentation aligned with the current code and configuration.
- Move superseded execution records into `docs/archive/`.
- Do not store credentials, private team details, confidential financial forecasts or private agreements in the public repository.
