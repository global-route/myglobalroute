# Next Active Task — NZ SMC Final Promotion Validation

**Priority:** P0-S1 Exact Pathway Closure  
**Status:** Ready to execute  
**Estimated effort:** 1-2 hours per route (3 routes total)  
**Confidence:** High (all evidence complete, tests passing)

## What's Done

✅ All evidence is complete and attached to the exact candidates  
✅ All regression tests are passing (4/4 NZ SMC promotion gates)  
✅ Data validation passes (129 records, 0 duplicates)  
✅ Build integrity verified  
✅ Unit tests all passing (30/30)

## What's Next

Execute final promotion validation for the three NZ SMC child routes:

1. **NZ-smc-points-based**
   - File: `src/data/pathway-candidates.json` (line ~20)
   - Evidence IDs: 5 complete records
   - Test: `tests/nz-smc-promotion-gates.test.js` (passing)
   - Action: Validate against promotion gate criteria and mark status

2. **NZ-smc-skilled-work-experience**
   - File: `src/data/pathway-candidates.json` (line ~10)
   - Evidence IDs: 6 complete records (including wage regression)
   - Test: `tests/nz-smc-promotion-gates.test.js` (passing)
   - Action: Validate against promotion gate criteria and mark status

3. **NZ-smc-trades-technician**
   - File: `src/data/pathway-candidates.json` (line ~15)
   - Evidence IDs: 4 complete records
   - Test: `tests/nz-smc-promotion-gates.test.js` (passing)
   - Action: Validate against promotion gate criteria and mark status

## Promotion Gate Criteria

For each route, verify:
- [ ] All required evidence IDs are present and valid
- [ ] Evidence scope matches the exact subroute ID (not parent pathway)
- [ ] No parent-pathway evidence is being used
- [ ] Regression tests pass
- [ ] Material fields are complete (missingMaterialFields = [])
- [ ] Route remains research_required until explicitly promoted

## Files to Modify

1. `src/data/pathway-candidates.json` — Update status from `research_required` to `publishable` (if promotion gate passes)
2. `src/data/pathways.json` — Add canonical pathway record with evidenceIds (if promoting to publishable)
3. `tests/nz-smc-promotion-gates.test.js` — Already passing; no changes needed

## Verification Commands

```bash
# Run NZ SMC promotion gate tests
npm test -- nz-smc-promotion-gates.test.js

# Run all tests
npm test

# Validate data
npm run data:validate

# Build and verify
npm run build && npm run build:verify
```

## Exit Criteria

- [ ] All 3 NZ SMC routes have explicit promotion status (publishable or research_required with documented reason)
- [ ] All tests remain passing
- [ ] Data validation passes
- [ ] Build integrity verified
- [ ] Documentation updated

## Key Principle

**Do not promote routes without current authoritative evidence.** If a route cannot meet the promotion gate, document the explicit material gap rather than inferring or generalizing from parent-pathway evidence.

---

**Current head:** `5d3f091` (docs: update P0-S1 checkpoint and active sprint status)  
**Last verified:** 2026-09-27  
**Next checkpoint:** After NZ SMC promotion validation complete
