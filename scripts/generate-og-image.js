#!/usr/bin/env node
// Generates public/assets/og-default.png (1200x630) using sharp + SVG
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const W = 1200, H = 630;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b409c"/>
      <stop offset="100%" stop-color="#082f75"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.06" stroke="white" stroke-width="1">
    ${Array.from({length: 13}, (_, i) => `<line x1="${i*100}" y1="0" x2="${i*100}" y2="${H}"/>`).join('')}
    ${Array.from({length: 7}, (_, i) => `<line x1="0" y1="${i*105}" x2="${W}" y2="${i*105}"/>`).join('')}
  </g>

  <!-- Accent bar bottom -->
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="url(#accent)"/>

  <!-- Globe circle decoration -->
  <circle cx="980" cy="200" r="220" fill="none" stroke="white" stroke-width="1.5" opacity="0.08"/>
  <circle cx="980" cy="200" r="160" fill="none" stroke="white" stroke-width="1" opacity="0.06"/>
  <circle cx="980" cy="200" r="100" fill="none" stroke="white" stroke-width="1" opacity="0.05"/>

  <!-- Main title -->
  <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white" letter-spacing="-1">MyPathway2Global</text>

  <!-- Tagline -->
  <text x="80" y="310" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="#93c5fd">Evidence-gated migration intelligence</text>
  <text x="80" y="355" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="#93c5fd">for African Students &amp; Professionals</text>

  <!-- Stats row -->
  <rect x="80" y="420" width="2" height="60" fill="#16a34a"/>
  <text x="100" y="448" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="white">35 Countries · 75 Pathways · 222+ Evidence Records</text>
  <text x="100" y="478" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#93c5fd">mypathway2global.org.uk</text>
</svg>`;

const outPath = path.join(__dirname, '../public/assets/og-default.png');
fs.mkdirSync(path.dirname(outPath), { recursive: true });

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => console.log(`✓ og-default.png written to ${outPath}`))
  .catch(err => { console.error(err); process.exit(1); });
