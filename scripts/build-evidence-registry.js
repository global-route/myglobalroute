const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const evidenceDir = path.join(root, 'src/data/evidence');
const output = path.join(evidenceDir, 'primary-source-verified.json');

const base = JSON.parse(fs.readFileSync(output, 'utf8'));
const shardFiles = fs.readdirSync(evidenceDir)
  .filter(name => name.endsWith('.json') && name !== 'primary-source-verified.json')
  .sort();

const records = [...base.records];
const ids = new Set(records.map(record => record.id));
for (const file of shardFiles) {
  const payload = JSON.parse(fs.readFileSync(path.join(evidenceDir, file), 'utf8'));
  for (const record of payload.records || []) {
    if (ids.has(record.id)) continue;
    records.push(record);
    ids.add(record.id);
  }
}

records.sort((a, b) => a.id.localeCompare(b.id));
const merged = {
  ...base,
  verifiedAt: new Date().toISOString().slice(0, 10),
  records
};
fs.writeFileSync(output, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`EVIDENCE REGISTRY BUILT: ${records.length} records from ${shardFiles.length} shard(s)`);
