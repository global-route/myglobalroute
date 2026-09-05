# Evidence Schema

Every material migration claim must eventually resolve to an evidence object.

```json
{
  "claim": "human-readable factual claim",
  "source": {
    "authority": "government / immigration authority",
    "url": "https://...",
    "retrievedAt": "YYYY-MM-DD",
    "effectiveFrom": "YYYY-MM-DD|null",
    "effectiveTo": "YYYY-MM-DD|null"
  },
  "jurisdiction": "country / nationality / pathway scope",
  "methodology": "how the value was produced or published",
  "confidence": "high|medium|low",
  "reviewBy": "YYYY-MM-DD",
  "status": "research_required|verified|superseded"
}
```

## Rules

1. Primary government/immigration sources are preferred for legal requirements, fees, thresholds, forms and processing rules.
2. A secondary source can provide context but cannot override a current primary source.
3. Approval rates are not inferred from unrelated global aggregates. If no credible methodology-disclosed population-specific rate exists, the value remains `null`.
4. Derived values must identify their inputs and calculation method.
5. Every source-backed record gets a review date; high-volatility immigration policy should be reviewed more frequently.
6. Superseded evidence remains auditable but must not drive current recommendations.
7. `publishable` is a product state, not a synonym for “a URL exists”: the underlying claim must actually be checked against the cited source.
