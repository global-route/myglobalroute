const fs = require('node:fs');
const path = require('node:path');

const ALLOWED_STATUSES = new Set(['pending', 'verified', 'suspended', 'expired', 'disabled']);
const ALLOWED_CATEGORIES = new Set(['relocation', 'education', 'insurance', 'accommodation']);
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00.000Z');
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function validHttpsDestination(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && Boolean(url.hostname) && !url.username && !url.password;
  } catch (_) {
    return false;
  }
}

function validateRegistry(registry) {
  const errors = [];
  if (!registry || typeof registry !== 'object' || Array.isArray(registry)) {
    return ['registry must be an object'];
  }
  if (registry.schemaVersion !== '1.0.0') errors.push('schemaVersion must be 1.0.0');
  if (!Array.isArray(registry.entries)) errors.push('entries must be an array');
  if (registry.lastReviewedAt !== null && !validDate(registry.lastReviewedAt)) {
    errors.push('lastReviewedAt must be null or an ISO date (YYYY-MM-DD)');
  }
  if (!Array.isArray(registry.entries)) return errors;

  const seen = new Set();
  registry.entries.forEach((entry, index) => {
    const prefix = `entries[${index}]`;
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      errors.push(`${prefix} must be an object`);
      return;
    }
    if (typeof entry.id !== 'string' || !ID_PATTERN.test(entry.id)) errors.push(`${prefix}.id must be a lowercase slug`);
    else if (seen.has(entry.id)) errors.push(`${prefix}.id duplicates ${entry.id}`);
    else seen.add(entry.id);

    if (!ALLOWED_STATUSES.has(entry.status)) errors.push(`${prefix}.status is not supported`);
    if (!ALLOWED_CATEGORIES.has(entry.category)) errors.push(`${prefix}.category is not supported`);
    if (typeof entry.name !== 'string' || !entry.name.trim()) errors.push(`${prefix}.name is required`);
    if (typeof entry.disclosure !== 'string' || !entry.disclosure.trim()) errors.push(`${prefix}.disclosure is required`);

    if (entry.status === 'verified') {
      if (!validHttpsDestination(entry.destinationUrl)) errors.push(`${prefix}.destinationUrl must be a credential-free HTTPS URL when verified`);
      if (!validDate(entry.reviewedAt)) errors.push(`${prefix}.reviewedAt must be an ISO date when verified`);
      if (!validDate(entry.expiresAt)) errors.push(`${prefix}.expiresAt must be an ISO date when verified`);
      if (validDate(entry.reviewedAt) && validDate(entry.expiresAt) && entry.expiresAt <= entry.reviewedAt) {
        errors.push(`${prefix}.expiresAt must be later than reviewedAt`);
      }
    }
  });
  return errors;
}

if (require.main === module) {
  const file = path.resolve(__dirname, '../src/data/commercial-registry.json');
  let registry;
  try {
    registry = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`COMMERCIAL REGISTRY INVALID: unable to read JSON (${error.message})`);
    process.exit(1);
  }
  const errors = validateRegistry(registry);
  if (errors.length) {
    console.error('COMMERCIAL REGISTRY INVALID');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
  console.log(`COMMERCIAL REGISTRY VALID: ${registry.entries.length} entries; no unverified destination is activated by validation.`);
}

module.exports = { validateRegistry, validDate, validHttpsDestination };
