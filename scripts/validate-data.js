const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '..', 'src', 'data', 'countries.json');
const payload = JSON.parse(fs.readFileSync(file, 'utf8'));
const countries = payload.countries;
const required = ['id', 'name', 'category', 'sweetSpot', 'trueCost', 'timeline'];
const errors = [];
const warnings = [];

if (!Array.isArray(countries) || countries.length === 0) {
  errors.push('countries must be a non-empty array');
} else {
  const ids = new Set();
  countries.forEach((country, index) => {
    required.forEach(field => {
      if (country[field] === undefined || country[field] === null || country[field] === '') {
        errors.push(`countries[${index}] ${field} is required`);
      }
    });
    if (ids.has(country.id)) errors.push(`duplicate country id: ${country.id}`);
    ids.add(country.id);
    if (!country.trueCost || !country.trueCost.currency || !Number.isFinite(Number(country.trueCost.total))) {
      errors.push(`countries[${index}] trueCost must include currency and numeric total`);
    }
    if (country.africanRate && !/^\\d+\\s*-\\s*\\d+%?$/.test(country.africanRate)) {
      warnings.push(`countries[${index}] africanRate is not a simple range: ${country.africanRate}`);
    }
  });
}

if (payload.lastUpdated && payload.lastUpdated < '2026-06-01') {
  warnings.push(`dataset lastUpdated is stale: ${payload.lastUpdated}`);
}
if (countries.length < 26) {
  warnings.push(`dataset contains ${countries.length}/26 blueprint countries; expansion requires evidence-backed research`);
}

if (errors.length) {
  console.error('DATA VALIDATION FAILED');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`DATA VALIDATION PASSED: ${countries.length} countries`);
warnings.forEach(warning => console.warn(`WARNING: ${warning}`));
