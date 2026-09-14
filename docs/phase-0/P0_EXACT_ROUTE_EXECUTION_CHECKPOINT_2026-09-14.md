# P0 Exact-Route Execution Checkpoint — 2026-09-14

## Scope completed in this execution wave

This checkpoint records the implementation state after the exact-route expansion wave.

### Australia

- Subclass 189 Points-tested stream is now a named research candidate.
- Official SkillSelect evidence confirms EOI, eligible occupation, English/skills-assessment inputs, 65-point invitation threshold and the 60-day post-invitation application window.
- Promotion remains blocked because the current work-pathway material-field profile requires financial-requirement evidence and the canonical registry has not yet been split into an AU-189 route.

### New Zealand

- The SMC umbrella is explicitly modeled as three child routes: Points-based, Skilled Work Experience, and Trades and Technician.
- Current official guidance confirms separate eligibility logic, wage settings, occupation-list treatment and qualification/work-experience requirements.
- Candidate registry and route-model documentation prevent the generic `NZ-skilled` record from inheriting child-route evidence.
- Canonical child pathway IDs and child-scoped evidence migration remain the next architecture task.

### Austria

- Other Key Workers is staged as an exact Red-White-Red candidate.
- It remains research-required until all material fields are complete.

### Italy

- 2026 non-seasonal subordinate work / Flussi is staged as an exact temporal candidate.
- Employer authorization/nulla-osta and applicant-side evidence remain required before promotion.

## Data-integrity rule

The canonical registry remains **26 countries / 52 pathways**. Candidate routes are deliberately outside that count until canonicalized. This prevents the project from solving legal granularity by silently inflating or corrupting the country registry.

## Verification state

- Candidate-route regression tests have been added.
- Latest CI status is **Not Tested — no workflow/status result reported**.
- Production verification remains blocked pending an independently verified Netlify origin.
- No approval rates, generalized timelines, or unsupported cost claims have been introduced.

## Next execution sequence

1. Run local data validation and the expanded evidence test suite.
2. Canonicalize New Zealand child routes without breaking the 26/52 registry invariant.
3. Migrate child evidence IDs to exact child pathway IDs.
4. Complete AU-189 material evidence and make a promotion decision.
5. Complete Austria/Italy material evidence and make independent promotion decisions.
6. Re-run build, generated-output, SEO/accessibility and lint gates.
7. Verify Netlify project/origin and run deployed-site verification.
8. Close or explicitly carry remaining hardening/release blockers.
