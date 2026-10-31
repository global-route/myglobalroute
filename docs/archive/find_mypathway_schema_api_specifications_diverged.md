# Find MyPathway — Data Schema & API Contract

## Overview
This document specifies the TypeScript interfaces, JSON schemas, validation rules, and concrete examples for the `Find MyPathway` engine on **MyPathway2Global**. All migration pathways stored or served by the platform must strictly comply with this schema to maintain primary-source verification and evidence tracking.

---

## TypeScript Definitions

```typescript
export type RouteType = 'study' | 'work' | 'business' | 'nomad' | 'tourist';

export type ConfidenceScore = 'verified_primary' | 'partially_verified' | 'research_required';

export interface LanguageRequirement {
  code: string; // e.g., 'IELTS', 'TOEFL', 'GOETHE'
  min_score: string; // e.g., '6.5', 'B2', '80'
  mandatory: boolean;
}

export interface ProcessingTimeWindow {
  min_weeks: number;
  max_weeks: number;
  notes?: string;
}

export interface ProofOfFunds {
  amount_usd: number;
  original_currency: string;
  original_amount: number;
  mechanism: 'blocked_account' | 'liquid_savings' | 'sponsor_guarantee' | 'income_threshold';
  holding_period_days?: number;
}

export interface ProvenanceTrail {
  primary_source_url: string;
  publishing_authority: string;
  last_audited_utc: string; // ISO 8601 string
  confidence_score: ConfidenceScore;
  blockers?: string[];
}

export interface Pathway {
  pathway_id: string; // Format: {iso_country}_{route_type}_{unique_slug}
  country_code: string; // ISO 3166-1 alpha-3 (e.g., 'DEU', 'CAN')
  country_name: string;
  route_type: RouteType;
  title: string;
  summary: string;
  dependents_allowed: boolean;
  min_experience_years: number;
  proof_of_funds: ProofOfFunds;
  processing_time: ProcessingTimeWindow;
  language_requirements: LanguageRequirement[];
  provenance: ProvenanceTrail;
}
```

---

## JSON Schema Specification

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Pathway",
  "type": "object",
  "required": [
    "pathway_id",
    "country_code",
    "country_name",
    "route_type",
    "title",
    "dependents_allowed",
    "proof_of_funds",
    "provenance"
  ],
  "properties": {
    "pathway_id": {
      "type": "string",
      "pattern": "^[a-z]{3}_(study|work|business|nomad|tourist)_[a-z0-9_]+$"
    },
    "country_code": {
      "type": "string",
      "pattern": "^[A-Z]{3}$"
    },
    "country_name": {
      "type": "string"
    },
    "route_type": {
      "type": "string",
      "enum": ["study", "work", "business", "nomad", "tourist"]
    },
    "title": {
      "type": "string",
      "maxLength": 120
    },
    "summary": {
      "type": "string"
    },
    "dependents_allowed": {
      "type": "boolean"
    },
    "min_experience_years": {
      "type": "integer",
      "minimum": 0
    },
    "proof_of_funds": {
      "type": "object",
      "required": ["amount_usd", "original_currency", "original_amount", "mechanism"],
      "properties": {
        "amount_usd": { "type": "number", "minimum": 0 },
        "original_currency": { "type": "string", "length": 3 },
        "original_amount": { "type": "number", "minimum": 0 },
        "mechanism": {
          "type": "string",
          "enum": ["blocked_account", "liquid_savings", "sponsor_guarantee", "income_threshold"]
        },
        "holding_period_days": { "type": "integer", "minimum": 0 }
      }
    },
    "provenance": {
      "type": "object",
      "required": ["primary_source_url", "publishing_authority", "last_audited_utc", "confidence_score"],
      "properties": {
        "primary_source_url": { "type": "string", "format": "uri" },
        "publishing_authority": { "type": "string" },
        "last_audited_utc": { "type": "string", "format": "date-time" },
        "confidence_score": {
          "type": "string",
          "enum": ["verified_primary", "partially_verified", "research_required"]
        }
      }
    }
  }
}
```

---

## Concrete JSON Pathway Example

```json
{
  "pathway_id": "deu_study_blocked_account_2026",
  "country_code": "DEU",
  "country_name": "Germany",
  "route_type": "study",
  "title": "German Student Visa (Sperrkonto / Blocked Account Route)",
  "summary": "Standard higher education pathway requiring a verified blocked account for living costs. Tuition is €0 at public universities.",
  "dependents_allowed": false,
  "min_experience_years": 0,
  "proof_of_funds": {
    "amount_usd": 12200,
    "original_currency": "EUR",
    "original_amount": 11208,
    "mechanism": "blocked_account",
    "holding_period_days": 365
  },
  "processing_time": {
    "min_weeks": 6,
    "max_weeks": 14,
    "notes": "Varies by embassy backlog in West African regions"
  },
  "language_requirements": [
    { "code": "IELTS", "min_score": "6.5", "mandatory": true },
    { "code": "GOETHE", "min_score": "B2", "mandatory": false }
  ],
  "provenance": {
    "primary_source_url": "https://www.make-it-in-germany.com/en/study-training/studies-in-germany/visa",
    "publishing_authority": "Federal Foreign Office (Auswärtiges Amt)",
    "last_audited_utc": "2026-09-15T10:00:00Z",
    "confidence_score": "verified_primary"
  }
}
```