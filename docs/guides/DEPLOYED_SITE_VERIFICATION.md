# Deployed Site Verification

## Purpose

Verify an authoritative deployed Global Route origin without guessing a hostname or restoring stale production metadata.

## Required input

Set `PRODUCTION_URL` to the verified deployment origin, for example:

```bash
PRODUCTION_URL=https://verified.example npm run deploy:verify
```

Do not use `myglobalroute.com` until DNS/deployment ownership has been independently verified. Historical `*.netlify.app` references are documentation hints only, not proof of the active deployment.

## Routes checked

- `/`
- `/pages/find-my-route.html`
- `/pages/countries.html`
- `/pages/calculator.html`
- `/data/countries.json`
- `/data/pathways.json`
- `/robots.txt`
- `/sitemap.xml`

The verifier rejects non-2xx/3xx responses and unexpected cross-origin redirects.

## Release use

This check is intentionally not part of the normal offline `npm run verify` command because the authoritative origin is not yet known. Once the deployment is verified, run it as a release gate and then regenerate canonical, Open Graph, robots and sitemap URLs from the same origin source of truth.


## Evidence refresh and CSP hardening — 2026-10-11

Official source review completed for four evidence claims across Canada, Australia and Sweden. Canada study-finance records now explicitly reflect the living-funds schedule effective 2026-09-01 (CAD 23,448 for one person outside Quebec, excluding tuition/transportation; Quebec has separate rules). Australia SkillSelect EOI guidance was rechecked; the processing-priority claim was corrected from the superseded Direction 119 to Directions 121/122 effective 2026-09-19. Sweden salary guidance was rechecked: SEK 34,470/month is the current 90%-of-median threshold for covered cases, with transitional/exempt categories retained. Two duplicate Canada finance records were refreshed consistently. Only these checked records had retrieval/review metadata changed.

CSP config in `public/_headers` and `netlify.toml` now includes `base-uri 'self'`, `object-src 'none'` and `upgrade-insecure-requests`; a regression test is added to enforce parity. Cloudflare reports a successful production build check on the previous head, but public origin/deployed-content equality remains unverified. Repository visibility is public; branch protection could not be inspected due integration permissions, so issue #2 remains open.


## Origin validation hardening — 2026-10-11

The deployed-site verifier now rejects HTTP origins and requires HTTPS before making any network requests. This aligns the manual production check with the project's HTTPS-only security baseline. An origin must still be independently confirmed; a successful Cloudflare production build check alone does not prove the public hostname or deployed registry equality.
