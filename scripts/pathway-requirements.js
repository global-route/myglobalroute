'use strict';

const REQUIREMENT_FIELDS = Object.freeze({
  minimum_funds: { kind: 'money', evidenceField: 'financial-requirement' },
  minimum_monthly_income: { kind: 'money', evidenceField: 'financial-requirement' },
  minimum_experience_years: { kind: 'number', evidenceField: 'eligibility' },
  language_test: { kind: 'language', evidenceField: 'eligibility' },
  qualification: { kind: 'text', evidenceField: 'eligibility' },
  job_offer: { kind: 'boolean', evidenceField: 'eligibility' },
  admission_offer: { kind: 'boolean', evidenceField: 'eligibility' },
  sponsorship: { kind: 'boolean', evidenceField: 'eligibility' }
});

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
function isRealIsoDate(value) {
  if (typeof value !== 'string' || !ISO_DATE.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function validateRequirement(requirement, pathway, evidenceById) {
  const errors = [];
  const fail = message => errors.push(message);
  if (!requirement || typeof requirement !== 'object' || Array.isArray(requirement)) return ['requirement must be an object'];
  if (typeof requirement.id !== 'string' || !requirement.id.trim()) fail('id is required');
  const definition = REQUIREMENT_FIELDS[requirement.field];
  if (!definition) fail(`field must be one of: ${Object.keys(REQUIREMENT_FIELDS).join(', ')}`);
  else if (requirement.kind !== definition.kind) fail(`kind for ${requirement.field} must be ${definition.kind}`);
  if (typeof requirement.jurisdiction !== 'string' || !requirement.jurisdiction.trim()) fail('jurisdiction is required');
  if (typeof requirement.effectiveDate !== 'string' || !isRealIsoDate(requirement.effectiveDate)) fail('effectiveDate must be a real ISO date (YYYY-MM-DD)');
  if (typeof requirement.sourceUrl !== 'string' || !/^https:\/\//i.test(requirement.sourceUrl)) fail('sourceUrl must be HTTPS');
  if (!Array.isArray(requirement.evidenceIds) || requirement.evidenceIds.length === 0) {
    fail('evidenceIds must be a non-empty array');
  } else {
    for (const id of requirement.evidenceIds) {
      const evidence = evidenceById.get(id);
      if (!evidence) fail(`evidence ${id} does not exist`);
      else {
        if (evidence.pathwayId !== pathway.id) fail(`evidence ${id} does not belong to pathway ${pathway.id}`);
        if (definition && evidence.field !== definition.evidenceField) fail(`evidence ${id} must support field ${definition.evidenceField}`);
        if (requirement.sourceUrl && evidence.sourceUrl !== requirement.sourceUrl) fail(`sourceUrl must match cited evidence ${id}`);
        if (requirement.jurisdiction && evidence.jurisdiction !== requirement.jurisdiction) fail(`jurisdiction must match cited evidence ${id}`);
        if (isRealIsoDate(requirement.effectiveDate) && evidence.effectiveDate && evidence.effectiveDate !== requirement.effectiveDate) {
          fail(`effectiveDate must match cited evidence ${id} when evidence declares one`);
        }
      }
    }
  }
  if (definition?.kind === 'money') {
    if (typeof requirement.value !== 'number' || !Number.isFinite(requirement.value) || requirement.value <= 0) fail('money value must be a positive finite number');
    if (typeof requirement.currency !== 'string' || !/^[A-Z]{3}$/.test(requirement.currency)) fail('currency must be a three-letter uppercase code');
    if (!['total', 'monthly', 'annual'].includes(requirement.period)) fail('period must be total, monthly or annual');
  } else if (definition?.kind === 'number') {
    if (typeof requirement.value !== 'number' || !Number.isFinite(requirement.value) || requirement.value < 0) fail('numeric value must be a non-negative finite number');
    if (requirement.unit !== 'years') fail('unit must be years');
  } else if (definition?.kind === 'language') {
    if (typeof requirement.value !== 'object' || requirement.value === null || Array.isArray(requirement.value)) fail('language value must be a structured object');
    else {
      if (typeof requirement.value.name !== 'string' || !requirement.value.name.trim()) fail('language name is required');
      if (requirement.value.test !== undefined && (typeof requirement.value.test !== 'string' || !requirement.value.test.trim())) fail('language test must be a non-empty string when provided');
      if (requirement.value.minimumScore !== undefined && (typeof requirement.value.minimumScore !== 'number' || !Number.isFinite(requirement.value.minimumScore) || requirement.value.minimumScore < 0)) fail('minimumScore must be a non-negative finite number');
    }
  } else if (definition?.kind === 'text') {
    if (typeof requirement.value !== 'string' || !requirement.value.trim()) fail('text value is required');
  } else if (definition?.kind === 'boolean') {
    if (typeof requirement.value !== 'boolean') fail('boolean value is required');
  }
  return errors;
}

function validatePathwayRequirements(pathways, evidenceRecords) {
  const errors = [];
  const evidenceById = new Map(evidenceRecords.map(record => [record.id, record]));
  for (const pathway of pathways) {
    if (pathway.requirements === undefined) continue;
    if (!Array.isArray(pathway.requirements)) {
      errors.push(`pathway ${pathway.id} requirements must be an array`);
      continue;
    }
    const ids = new Set();
    for (const [index, requirement] of pathway.requirements.entries()) {
      const requirementId = requirement?.id || `index ${index}`;
      if (ids.has(requirement?.id)) errors.push(`pathway ${pathway.id} has duplicate requirement id ${requirement.id}`);
      if (requirement?.id) ids.add(requirement.id);
      for (const error of validateRequirement(requirement, pathway, evidenceById)) {
        errors.push(`pathway ${pathway.id} requirement ${requirementId}: ${error}`);
      }
    }
  }
  return errors;
}

module.exports = { REQUIREMENT_FIELDS, isRealIsoDate, validateRequirement, validatePathwayRequirements };
