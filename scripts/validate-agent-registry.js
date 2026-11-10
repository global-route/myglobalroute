#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const AGENTS_PATH = path.join(__dirname, '../src/data/agents.json');
const CORRIDOR_RE = /^([A-Z]{2}|\*)-([A-Z]{2}|\*)$/;

let errors = 0;
let warnings = 0;

function err(msg) { console.error(`  ERROR: ${msg}`); errors++; }
function warn(msg) { console.warn(`  WARN:  ${msg}`); warnings++; }

const raw = fs.readFileSync(AGENTS_PATH, 'utf8');
let data;
try { data = JSON.parse(raw); } catch (e) { err(`agents.json is not valid JSON: ${e.message}`); process.exit(1); }

const agents = data.agents || [];
console.log(`Validating ${agents.length} agent record(s)...\n`);

const ids = new Set();

for (const a of agents) {
  const tag = a.id || '(no id)';

  // Required fields
  if (!a.id)                    err(`[${tag}] missing id`);
  if (!a.name)                  err(`[${tag}] missing name`);
  if (!a.verificationStatus)    err(`[${tag}] missing verificationStatus`);
  if (!Array.isArray(a.corridors) || !a.corridors.length)
                                err(`[${tag}] corridors must be a non-empty array`);
  if (!Array.isArray(a.occupationCategories) || !a.occupationCategories.length)
                                err(`[${tag}] occupationCategories must be a non-empty array`);
  if (!Array.isArray(a.skillLevels) || !a.skillLevels.length)
                                err(`[${tag}] skillLevels must be a non-empty array`);

  // Duplicate id check
  if (ids.has(a.id))            err(`[${tag}] duplicate id`);
  ids.add(a.id);

  // verificationStatus values
  const validStatuses = ['pending', 'verified', 'suspended'];
  if (a.verificationStatus && !validStatuses.includes(a.verificationStatus))
    err(`[${tag}] verificationStatus must be one of: ${validStatuses.join(', ')}`);

  // verified agents must have verifiedAt
  if (a.verificationStatus === 'verified' && !a.verifiedAt)
    err(`[${tag}] verified agent must have verifiedAt date`);

  // verified agents must have contactEmail
  if (a.verificationStatus === 'verified' && !a.contactEmail)
    err(`[${tag}] verified agent must have contactEmail`);

  // pending/suspended agents must NOT have contactEmail exposed
  if (a.verificationStatus !== 'verified' && a.contactEmail)
    warn(`[${tag}] non-verified agent has contactEmail — will not be shown in UI but consider removing`);

  // corridor format
  if (Array.isArray(a.corridors)) {
    for (const c of a.corridors) {
      if (!CORRIDOR_RE.test(c))
        err(`[${tag}] corridor "${c}" must be format XX-YY, XX-*, or *-YY (ISO 3166-1 alpha-2)`);
    }
  }

  // tier values
  const validTiers = ['free', 'lead', 'featured'];
  if (a.tier && !validTiers.includes(a.tier))
    err(`[${tag}] tier must be one of: ${validTiers.join(', ')}`);

  // featured/lead agents should have tier set
  if (a.verificationStatus === 'verified' && !a.tier)
    warn(`[${tag}] verified agent has no tier — defaulting to free in UI`);
}

console.log(`\nResult: ${errors} error(s), ${warnings} warning(s)`);
if (errors > 0) {
  console.error('\nagents.json validation FAILED');
  process.exit(1);
}
console.log('agents.json validation PASSED');
