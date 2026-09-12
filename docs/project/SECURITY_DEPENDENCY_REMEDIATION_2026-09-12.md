# Dependency Security Remediation — 2026-09-12

## Trigger
GitHub Actions Quality Gate run `105` failed at the dependency-audit step after installing dependencies successfully.

## Finding
The audit reported **64 vulnerabilities** in the dependency tree: 5 low, 21 moderate, 33 high and 5 critical. The affected tree was dominated by `netlify-cli@17.x` and its transitive deployment dependencies, including vulnerable versions of `@fastify/static`, `tar`, `sharp`, `fastify`, `lodash`, `js-yaml`, `brace-expansion` and related packages.

The audit explicitly reported that the available remediation path upgrades Netlify CLI to `26.2.0`.

## Remediation shipped
- Updated `netlify-cli` from `^17.30.0` to `^26.2.0` in `package.json`.
- Preserved the existing local `npm run deploy` workflow.
- Kept the dependency audit as a blocking CI quality gate rather than suppressing the vulnerabilities.

## Verification
A new Quality Gate run is triggered by the remediation commit. The audit result must be rechecked before the dependency/security gate can be marked passed.

## Important distinction
The failed audit was a **real dependency-tree finding**, not a CI infrastructure failure. The correct response is remediation and re-verification, not weakening or bypassing `npm audit`.

## Release impact
Production remains blocked until the new audit completes successfully and the remaining build, test, browser/E2E and deployment-origin gates are verified.
