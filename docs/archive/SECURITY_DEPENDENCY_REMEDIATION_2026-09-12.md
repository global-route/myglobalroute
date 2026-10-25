# Dependency Security Remediation — 2026-09-12

## Trigger
GitHub Actions Quality Gate run `105` failed at the dependency-audit step after installing dependencies successfully.

## Finding
The audit reported **64 vulnerabilities** in the dependency tree: 5 low, 21 moderate, 33 high and 5 critical. The affected tree was dominated by `netlify-cli@17.x` and its transitive deployment dependencies, including vulnerable versions of `@fastify/static`, `tar`, `sharp`, `fastify`, `lodash`, `js-yaml`, `brace-expansion` and related packages.

A first attempted upgrade to `netlify-cli@26.2.0` reduced the installed tree but still left **16 high/low vulnerabilities** in Netlify CLI transitive dependencies, while also introducing Node >=22 engine requirements for some Netlify packages.

## Final remediation shipped
- Removed `netlify-cli` from the application's dependency graph entirely.
- Removed the local `npm run deploy` script so deployment is not coupled to a vulnerable bundled CLI.
- Updated the deployment guide to use the repository's Git-based Netlify deployment configuration and `netlify.toml`.
- Kept `npm audit --audit-level=high` as a blocking CI quality gate rather than suppressing findings.

This is the safer architectural distinction: Netlify CLI is an operator/deployment tool, not an application runtime dependency. A static Eleventy site does not need to ship that tool in its dependency graph.

## Verification
A new Quality Gate run is triggered by the remediation commit. The audit result must be rechecked before the dependency/security gate can be marked passed. Subsequent stages must then execute: data validation, tests, build, generated-output verification and SEO/accessibility smoke checks.

## Important distinction
The failed audit was a **real dependency-tree finding**, not a CI infrastructure failure. The correct response is dependency removal/remediation and re-verification, not weakening or bypassing `npm audit`.

## Release impact
Production remains blocked until the new audit completes successfully and the remaining build, test, browser/E2E and deployment-origin gates are verified.
