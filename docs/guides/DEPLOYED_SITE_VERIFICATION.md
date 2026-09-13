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
