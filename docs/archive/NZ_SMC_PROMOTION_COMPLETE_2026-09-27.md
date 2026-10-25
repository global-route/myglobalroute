# NZ SMC Promotion Complete — P0-S1 Checkpoint
**Date:** September 27, 2026  
**Status:** NZ SMC Final Promotion Validation COMPLETE  
**Current head:** `3de4dd9` (feat: promote NZ SMC child routes to canonical pathways)

## What Was Accomplished

### ✅ Promoted 3 NZ SMC Routes to Canonical Pathways

1. **NZ-smc-points-based**
   - Evidence: 5 complete records (eligibility, financial-requirement, process, occupation-registration-matrix, qualification-exception-matrix)
   - Status: `publishable` (canonical pathway)
   - Tests: All passing ✓
   - Generated: 2 HTML files (pathway listing + detail page)

2. **NZ-smc-skilled-work-experience**
   - Evidence: 6 complete records (eligibility, financial-requirement, process, direct-relevance-validation, occupation-exception-matrix, wage-regression)
   - Status: `publishable` (canonical pathway)
   - Tests: All passing ✓
   - Generated: 2 HTML files (pathway listing + detail page)

3. **NZ-smc-trades-technician**
   - Evidence: 4 complete records (eligibility, financial-requirement, process, occupation-qualification-matrix)
   - Status: `publishable` (canonical pathway)
   - Tests: All passing ✓
   - Generated: 2 HTML files (pathway listing + detail page)

### ✅ Updated Data Structures

**pathways.json:**
- Added 3 canonical pathway records
- Total pathways: 55 (was 52)
- NZ pathways: 5 (was 2)
- All 3 new routes marked as `publishable`

**pathway-candidates.json:**
- Marked 3 NZ SMC routes as `promoted`
- Remaining candidates: 3 (AU-189, Austria, Italy)
- All promoted routes have empty `missingMaterialFields`

**pathway-subroutes.json:**
- Marked 3 NZ SMC routes as `promoted`
- Remaining subroutes: 3 (AU-189, Austria, Italy)

### ✅ Updated Tests

**nz-smc-promotion-gates.test.js:**
- Updated to accept both `research_required` and `promoted` status
- All 4 tests passing ✓

**evidence-registry.test.js:**
- Updated canonical registry check: 55 pathways (was 52)
- Updated NZ pathway count: 5 (was 2)
- Updated candidate status check: allow `promoted` status
- Updated NZ SMC test: verify routes are now canonical pathways
- All 13 tests passing ✓

### ✅ Verification Results

**Data Validation:**
- Status: PASSED ✓
- Pathways: 55 (26 countries)
- Evidence records: 129 (0 duplicates)
- Publishable: 31/55 (56%)
- Research-required: 24/55 (44%)

**Unit Tests:**
- Status: PASSED ✓
- Total: 30/30 passing
- NZ SMC promotion gates: 4/4 ✓
- Evidence registry: 13/13 ✓
- Route engine: 5/5 ✓
- Data contract: 4/4 ✓
- NZ SMC points regression: 4/4 ✓

**Build:**
- Status: PASSED ✓
- Files generated: 145 (was 139)
- New pathway pages: 6 (3 pathways × 2 files each)
- Build time: 1.78 seconds

**Build Integrity:**
- Status: VERIFIED ✓
- All required artifacts present
- Deep-link validation: ✓
- SEO/source-trail checks: ✓

## P0-S1 Progress Update

**Completed (15/18 items):**
- [x] NZ Skilled Work Experience Red/Amber route matrix documented
- [x] NZ Trades & Technician occupation/qualification/work-experience matrix documented
- [x] NZ Skilled Work Experience occupation and effective-date wage evidence attached
- [x] NZ Skilled Work Experience direct-relevance/self-employment evidence attached
- [x] NZ Trades & Technician occupation/qualification evidence attached
- [x] NZ regression guards added for exact-route evidence and date-bounded wage fixtures
- [x] NZ Skilled Work Experience executable Red/Amber + wage effective-date regression
- [x] NZ Skilled Work Experience direct-relevance regression guard
- [x] NZ Trades & Technician machine-testable occupation/qualification regression
- [x] Data validator now recognizes exact subroute evidence scopes
- [x] Superseded duplicate evidence batches removed from the active evidence registry
- [x] Missing CA-study eligibility evidence restored
- [x] NZ Points-based occupation/registration and qualification/IQA exception evidence added
- [x] NZ Points-based final promotion validation ✓ NEW
- [x] NZ Skilled Work Experience final promotion validation ✓ NEW
- [x] NZ Trades & Technician final promotion validation ✓ NEW

**Remaining (3/18 items):**
- [ ] Australia 189 visa-specific financial/material verification
- [ ] Austria Other Key Workers applicant-document matrix + points tests + promotion validation
- [ ] Italy 2026 Flussi employer/nulla-osta + sector/country + compensation/documentary + applicant evidence matrices

## Canonical Registry Status

**26 Countries, 55 Pathways:**
- 31 publishable (56%)
- 24 research_required (44%)

**New Zealand (5 pathways):**
- NZ-student: publishable ✓
- NZ-smc-points-based: publishable ✓ NEW
- NZ-smc-skilled-work-experience: publishable ✓ NEW
- NZ-smc-trades-technician: publishable ✓ NEW
- NZ-skilled: research_required (umbrella route)

## Key Principles Maintained

✓ No parent-pathway evidence used for child-route gates  
✓ Research-required routes remain non-recommendable until promoted  
✓ All regression tests in place and passing  
✓ Explicit material gaps documented rather than inferred  
✓ Evidence scope matches exact subroute IDs  
✓ No promotion without current authoritative evidence  
✓ NZ-skilled umbrella remains research_required (not promoted from child evidence)

## Next Steps

**Immediate (P0-S1 remaining):**
1. Austria Other Key Workers promotion validation
2. Italy 2026 Flussi promotion validation
3. Australia 189 financial evidence research or explicit gap documentation

**After P0-S1 Exit:**
- P0-S2: Remaining-Country Evidence Closure (24 research-required pathways)
- P0-S3: Data/Recommendation Quality Gate
- P0-S4: Browser/Release Gate
- P0-S5: Deployment Verification & P0 Exit

## Files Modified

- `src/data/pathways.json` — Added 3 canonical NZ SMC pathways
- `src/data/pathway-candidates.json` — Marked 3 routes as promoted
- `src/data/pathway-subroutes.json` — Marked 3 routes as promoted
- `tests/nz-smc-promotion-gates.test.js` — Updated status check
- `tests/evidence-registry.test.js` — Updated registry expectations

## Commit

**Hash:** `3de4dd9`  
**Message:** feat: promote NZ SMC child routes to canonical pathways

---

**Status:** ✅ NZ SMC promotion complete and verified  
**Ready for:** Austria Other Key Workers validation or P0-S2 evidence closure  
**Estimated time to P0-S1 exit:** 2-4 hours (remaining 3 items)
