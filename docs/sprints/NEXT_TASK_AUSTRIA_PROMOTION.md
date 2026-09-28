# Next Active Task — Austria Other Key Workers Promotion Validation

**Priority:** P0-S1 Exact Pathway Closure  
**Status:** Ready to execute  
**Estimated effort:** 1-2 hours  
**Confidence:** High (all evidence complete, application-document and points matrices attached)

## What's Done

✅ All evidence is complete and attached to the exact candidate  
✅ Application-document matrix present (official requirements)  
✅ Points-validation matrix present (deterministic scoring)  
✅ Data validation passes (129 records, 0 duplicates)  
✅ Unit tests all passing (30/30)  
✅ Build integrity verified

## What's Next

Execute final promotion validation for Austria Other Key Workers:

**Route Details:**
- ID: `AT-rwr-other-key-workers`
- Parent pathway: `AT-red-white-red` (Red-White-Red Card)
- Type: work
- Evidence records: 5 complete
  - eligibility ✓
  - financial-requirement ✓
  - process ✓
  - application-document-matrix ✓
  - points-validation ✓

**Current Status:**
- Candidate status: `research_required`
- Missing material fields: `["promotion-validation"]`
- Scope note: "Exact sub-route candidate. Official application-document and points-validation matrices are now attached; final promotion validation remains open."

## Promotion Gate Criteria

For Austria Other Key Workers, verify:
- [ ] All 5 required evidence IDs are present and valid
- [ ] Evidence scope matches the exact subroute ID (not parent pathway)
- [ ] No parent-pathway evidence is being used
- [ ] Application-document matrix covers all required applicant materials
- [ ] Points-validation matrix covers all scoring criteria
- [ ] Material fields are complete (missingMaterialFields = [])
- [ ] Route remains research_required until explicitly promoted

## Evidence Records to Validate

1. **AT-rwr-other-key-workers-eligibility-exact-2026-09-14**
   - Field: eligibility
   - Authority: Austrian Federal Government migration portal
   - Scope: Exact subroute

2. **AT-rwr-other-key-workers-financial-2026-09-14**
   - Field: financial-requirement
   - Authority: Austrian Federal Government migration portal
   - Scope: Exact subroute

3. **AT-rwr-other-key-workers-process-exact-2026-09-14**
   - Field: process
   - Authority: Austrian Federal Government migration portal
   - Scope: Exact subroute

4. **AT-rwr-other-key-workers-application-document-matrix-2026-09-14**
   - Field: application-document-matrix
   - Authority: Austrian Federal Government migration portal
   - Scope: Exact subroute (deterministic requirements)

5. **AT-rwr-other-key-workers-points-validation-2026-09-14**
   - Field: points-validation
   - Authority: Austrian Federal Government migration portal
   - Scope: Exact subroute (deterministic scoring)

## Files to Modify

1. `src/data/pathway-candidates.json` — Update status from `research_required` to `promoted` (if promotion gate passes)
2. `src/data/pathways.json` — Add canonical pathway record with evidenceIds (if promoting to publishable)
3. `src/data/pathway-subroutes.json` — Update status from `research_required` to `promoted` (if promotion gate passes)

## Verification Commands

```bash
# Run data validation
npm run data:validate

# Run all tests
npm test

# Build and verify
npm run build && npm run build:verify
```

## Exit Criteria

- [ ] Austria Other Key Workers has explicit promotion status (publishable or research_required with documented reason)
- [ ] All tests remain passing
- [ ] Data validation passes
- [ ] Build integrity verified
- [ ] Documentation updated

## Key Principle

**Do not promote routes without current authoritative evidence.** If the route cannot meet the promotion gate, document the explicit material gap rather than inferring or generalizing from parent-pathway evidence.

## Decision Tree

**If all promotion gates pass:**
1. Update `pathway-candidates.json`: status = `promoted`
2. Add canonical pathway to `pathways.json`: status = `publishable`
3. Update `pathway-subroutes.json`: status = `promoted`
4. Run full verification suite
5. Commit with message: "feat: promote Austria Other Key Workers to canonical pathway"

**If promotion gate fails:**
1. Document explicit material gap in `missingMaterialFields`
2. Update scope note with reason for blocking
3. Keep status as `research_required`
4. Run full verification suite
5. Commit with message: "docs: document Austria Other Key Workers promotion blocker"

---

**Current head:** `4ca8cbd` (docs: add NZ SMC promotion completion checkpoint)  
**Last verified:** 2026-09-27  
**Next checkpoint:** After Austria promotion validation complete

## P0-S1 Progress After This Task

If promoted:
- Completed: 16/18 items (89%)
- Remaining: 2 items (Italy + Australia)

If blocked:
- Completed: 15/18 items (83%)
- Remaining: 3 items (Italy + Australia + Austria)
