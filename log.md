2026-10-17T21:27:36.686Z	Initializing build environment...
2026-10-17T21:27:38.264Z	Success: Finished initializing build environment
2026-10-17T21:27:39.137Z	Cloning repository...
2026-10-17T21:27:40.470Z	No build output detected to cache. Skipping.
2026-10-17T21:27:40.470Z	No dependencies detected to cache. Skipping.
2026-10-17T21:27:40.473Z	Detected the following tools from environment: bun@1.4.3, nodejs@24.21.0
2026-10-17T21:27:40.475Z	Installing project dependencies: bun install
2026-10-17T21:27:40.646Z	bun install v1.4.3 (c6da4a4d3)
2026-10-17T21:27:40.660Z	Resolving dependencies
2026-10-17T21:27:42.871Z	Resolved, downloaded and extracted [2351]
2026-10-17T21:27:43.771Z	Saved lockfile
2026-10-17T21:27:43.772Z	
2026-10-17T21:27:43.772Z	+ @11ty/eleventy@3.1.7
2026-10-17T21:27:43.772Z	+ @babel/core@7.29.7 (v8.0.7 available)
2026-10-17T21:27:43.772Z	+ @babel/preset-env@7.29.7 (v8.0.7 available)
2026-10-17T21:27:43.772Z	+ @playwright/test@1.44.1 (v1.64.1 available)
2026-10-17T21:27:43.772Z	+ eslint@8.57.1 (v10.13.0 available)
2026-10-17T21:27:43.772Z	+ jest@29.7.0 (v30.5.2 available)
2026-10-17T21:27:43.772Z	+ markdown-it@14.3.3 (v15.0.3 available)
2026-10-17T21:27:43.773Z	+ markdown-it-anchor@9.2.1 (v10.0.0 available)
2026-10-17T21:27:43.773Z	+ postcss@8.5.30
2026-10-17T21:27:43.773Z	+ postcss-cli@11.0.1 (v12.0.0 available)
2026-10-17T21:27:43.773Z	+ prettier@3.9.10
2026-10-17T21:27:43.773Z	+ wrangler@4.147.0 (v4.151.1 available)
2026-10-17T21:27:43.773Z	+ fuse.js@7.5.0
2026-10-17T21:27:43.773Z	
2026-10-17T21:27:43.773Z	577 packages installed [3.15s]
2026-10-17T21:27:43.956Z	Executing user build command: npm run build && npx wrangler deploy
2026-10-17T21:27:44.306Z	
2026-10-17T21:27:44.307Z	> global-route@1.0.0 build
2026-10-17T21:27:44.307Z	> npx @11ty/eleventy
2026-10-17T21:27:44.307Z	
2026-10-17T21:27:46.533Z	[11ty] Writing ./dist/pages/countries/GB/index.html from ./content/countries.njk
2026-10-17T21:27:46.534Z	[11ty] Writing ./dist/pathways/GB-skilled-worker/index.html from ./content/pathways.njk
2026-10-17T21:27:46.536Z	[11ty] Writing ./dist/blog/index.html from ./content/blog/index.njk
2026-10-17T21:27:46.536Z	[11ty] Writing ./dist/pages/pathways/GB-skilled-worker/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.548Z	[11ty] Writing ./dist/pages/countries/CA/index.html from ./content/countries.njk
2026-10-17T21:27:46.548Z	[11ty] Writing ./dist/pathways/GB-student/index.html from ./content/pathways.njk
2026-10-17T21:27:46.550Z	[11ty] Writing ./dist/pages/pathways/GB-student/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.552Z	[11ty] Writing ./dist/pages/countries/AU/index.html from ./content/countries.njk
2026-10-17T21:27:46.552Z	[11ty] Writing ./dist/pathways/CA-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.554Z	[11ty] Writing ./dist/pages/pathways/CA-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.556Z	[11ty] Writing ./dist/pages/countries/NZ/index.html from ./content/countries.njk
2026-10-17T21:27:46.556Z	[11ty] Writing ./dist/pathways/CA-federal-skilled-worker/index.html from ./content/pathways.njk
2026-10-17T21:27:46.558Z	[11ty] Writing ./dist/pages/pathways/CA-federal-skilled-worker/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.559Z	[11ty] Writing ./dist/pages/countries/IE/index.html from ./content/countries.njk
2026-10-17T21:27:46.560Z	[11ty] Writing ./dist/pathways/AU-student/index.html from ./content/pathways.njk
2026-10-17T21:27:46.563Z	[11ty] Writing ./dist/pages/pathways/AU-student/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.563Z	[11ty] Writing ./dist/pages/countries/DE/index.html from ./content/countries.njk
2026-10-17T21:27:46.563Z	[11ty] Writing ./dist/pathways/AU-skilled/index.html from ./content/pathways.njk
2026-10-17T21:27:46.564Z	[11ty] Writing ./dist/pages/pathways/AU-skilled/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.565Z	[11ty] Writing ./dist/pages/countries/IT/index.html from ./content/countries.njk
2026-10-17T21:27:46.566Z	[11ty] Writing ./dist/pathways/NZ-student/index.html from ./content/pathways.njk
2026-10-17T21:27:46.568Z	[11ty] Writing ./dist/pages/pathways/NZ-student/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.569Z	[11ty] Writing ./dist/pages/countries/FR/index.html from ./content/countries.njk
2026-10-17T21:27:46.569Z	[11ty] Writing ./dist/pathways/NZ-smc-points-based/index.html from ./content/pathways.njk
2026-10-17T21:27:46.576Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-points-based/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.576Z	[11ty] Writing ./dist/pages/countries/HU/index.html from ./content/countries.njk
2026-10-17T21:27:46.577Z	[11ty] Writing ./dist/pathways/NZ-smc-skilled-work-experience/index.html from ./content/pathways.njk
2026-10-17T21:27:46.577Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-skilled-work-experience/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.577Z	[11ty] Writing ./dist/pages/countries/FI/index.html from ./content/countries.njk
2026-10-17T21:27:46.577Z	[11ty] Writing ./dist/pathways/NZ-smc-trades-technician/index.html from ./content/pathways.njk
2026-10-17T21:27:46.577Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-trades-technician/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.578Z	[11ty] Writing ./dist/pages/countries/SE/index.html from ./content/countries.njk
2026-10-17T21:27:46.578Z	[11ty] Writing ./dist/pathways/NZ-skilled/index.html from ./content/pathways.njk
2026-10-17T21:27:46.580Z	[11ty] Writing ./dist/pages/pathways/NZ-skilled/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.581Z	[11ty] Writing ./dist/pages/countries/NO/index.html from ./content/countries.njk
2026-10-17T21:27:46.582Z	[11ty] Writing ./dist/pathways/IE-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.584Z	[11ty] Writing ./dist/pages/pathways/IE-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.585Z	[11ty] Writing ./dist/pages/countries/LU/index.html from ./content/countries.njk
2026-10-17T21:27:46.585Z	[11ty] Writing ./dist/pathways/IE-critical-skills/index.html from ./content/pathways.njk
2026-10-17T21:27:46.588Z	[11ty] Writing ./dist/pages/pathways/IE-critical-skills/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.589Z	[11ty] Writing ./dist/pages/countries/LT/index.html from ./content/countries.njk
2026-10-17T21:27:46.589Z	[11ty] Writing ./dist/pathways/DE-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.591Z	[11ty] Writing ./dist/pages/pathways/DE-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.592Z	[11ty] Writing ./dist/pages/countries/IS/index.html from ./content/countries.njk
2026-10-17T21:27:46.592Z	[11ty] Writing ./dist/pathways/DE-opportunity-card/index.html from ./content/pathways.njk
2026-10-17T21:27:46.594Z	[11ty] Writing ./dist/pages/pathways/DE-opportunity-card/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.595Z	[11ty] Writing ./dist/pages/countries/PT/index.html from ./content/countries.njk
2026-10-17T21:27:46.595Z	[11ty] Writing ./dist/pathways/IT-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.597Z	[11ty] Writing ./dist/pages/pathways/IT-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.598Z	[11ty] Writing ./dist/pages/countries/ES/index.html from ./content/countries.njk
2026-10-17T21:27:46.598Z	[11ty] Writing ./dist/pathways/IT-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.600Z	[11ty] Writing ./dist/pages/pathways/IT-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.601Z	[11ty] Writing ./dist/pages/countries/AT/index.html from ./content/countries.njk
2026-10-17T21:27:46.602Z	[11ty] Writing ./dist/pathways/FR-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.604Z	[11ty] Writing ./dist/pages/pathways/FR-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.605Z	[11ty] Writing ./dist/pages/countries/JP/index.html from ./content/countries.njk
2026-10-17T21:27:46.605Z	[11ty] Writing ./dist/pathways/FR-talent/index.html from ./content/pathways.njk
2026-10-17T21:27:46.607Z	[11ty] Writing ./dist/pages/pathways/FR-talent/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.609Z	[11ty] Writing ./dist/pages/countries/KR/index.html from ./content/countries.njk
2026-10-17T21:27:46.609Z	[11ty] Writing ./dist/pathways/HU-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.611Z	[11ty] Writing ./dist/pages/pathways/HU-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.612Z	[11ty] Writing ./dist/pages/countries/CN/index.html from ./content/countries.njk
2026-10-17T21:27:46.613Z	[11ty] Writing ./dist/pathways/HU-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.614Z	[11ty] Writing ./dist/pages/pathways/HU-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.615Z	[11ty] Writing ./dist/pages/countries/PL/index.html from ./content/countries.njk
2026-10-17T21:27:46.616Z	[11ty] Writing ./dist/pathways/FI-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.618Z	[11ty] Writing ./dist/pages/pathways/FI-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.619Z	[11ty] Writing ./dist/pages/countries/MT/index.html from ./content/countries.njk
2026-10-17T21:27:46.619Z	[11ty] Writing ./dist/pathways/FI-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.621Z	[11ty] Writing ./dist/pages/pathways/FI-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.622Z	[11ty] Writing ./dist/pages/countries/RU/index.html from ./content/countries.njk
2026-10-17T21:27:46.623Z	[11ty] Writing ./dist/pathways/SE-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.625Z	[11ty] Writing ./dist/pages/pathways/SE-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.627Z	[11ty] Writing ./dist/pages/countries/CH/index.html from ./content/countries.njk
2026-10-17T21:27:46.627Z	[11ty] Writing ./dist/pathways/SE-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.629Z	[11ty] Writing ./dist/pages/pathways/SE-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.630Z	[11ty] Writing ./dist/pages/countries/CZ/index.html from ./content/countries.njk
2026-10-17T21:27:46.630Z	[11ty] Writing ./dist/pathways/NO-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.632Z	[11ty] Writing ./dist/pages/pathways/NO-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.633Z	[11ty] Writing ./dist/pathways/NO-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.635Z	[11ty] Writing ./dist/pages/pathways/NO-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.636Z	[11ty] Writing ./dist/pathways/LU-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.638Z	[11ty] Writing ./dist/pages/pathways/LU-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.640Z	[11ty] Writing ./dist/pathways/LU-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.641Z	[11ty] Writing ./dist/pages/pathways/LU-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.643Z	[11ty] Writing ./dist/pathways/LT-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.645Z	[11ty] Writing ./dist/pages/pathways/LT-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.646Z	[11ty] Writing ./dist/pathways/LT-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.648Z	[11ty] Writing ./dist/pages/pathways/LT-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.651Z	[11ty] Writing ./dist/pathways/IS-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.651Z	[11ty] Writing ./dist/pages/pathways/IS-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.655Z	[11ty] Writing ./dist/pathways/IS-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.655Z	[11ty] Writing ./dist/pages/pathways/IS-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.656Z	[11ty] Writing ./dist/pathways/PT-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.657Z	[11ty] Writing ./dist/pages/pathways/PT-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.659Z	[11ty] Writing ./dist/pathways/PT-digital-nomad/index.html from ./content/pathways.njk
2026-10-17T21:27:46.661Z	[11ty] Writing ./dist/pages/pathways/PT-digital-nomad/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.664Z	[11ty] Writing ./dist/pathways/ES-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.664Z	[11ty] Writing ./dist/pages/pathways/ES-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.665Z	[11ty] Writing ./dist/pathways/ES-digital-nomad/index.html from ./content/pathways.njk
2026-10-17T21:27:46.666Z	[11ty] Writing ./dist/pages/pathways/ES-digital-nomad/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.667Z	[11ty] Writing ./dist/pathways/AT-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.669Z	[11ty] Writing ./dist/pages/pathways/AT-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.670Z	[11ty] Writing ./dist/pathways/AT-rwr-other-key-workers/index.html from ./content/pathways.njk
2026-10-17T21:27:46.672Z	[11ty] Writing ./dist/pages/pathways/AT-rwr-other-key-workers/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.673Z	[11ty] Writing ./dist/pathways/AT-red-white-red/index.html from ./content/pathways.njk
2026-10-17T21:27:46.675Z	[11ty] Writing ./dist/pages/pathways/AT-red-white-red/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.676Z	[11ty] Writing ./dist/pathways/JP-student/index.html from ./content/pathways.njk
2026-10-17T21:27:46.678Z	[11ty] Writing ./dist/pages/pathways/JP-student/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.679Z	[11ty] Writing ./dist/pathways/JP-engineer/index.html from ./content/pathways.njk
2026-10-17T21:27:46.681Z	[11ty] Writing ./dist/pages/pathways/JP-engineer/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.682Z	[11ty] Writing ./dist/pathways/KR-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.685Z	[11ty] Writing ./dist/pages/pathways/KR-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.686Z	[11ty] Writing ./dist/pathways/KR-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.687Z	[11ty] Writing ./dist/pages/pathways/KR-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.689Z	[11ty] Writing ./dist/pathways/CN-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.690Z	[11ty] Writing ./dist/pages/pathways/CN-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.691Z	[11ty] Writing ./dist/pathways/CN-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.693Z	[11ty] Writing ./dist/pages/pathways/CN-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.694Z	[11ty] Writing ./dist/pathways/PL-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.696Z	[11ty] Writing ./dist/pages/pathways/PL-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.697Z	[11ty] Writing ./dist/pathways/PL-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.699Z	[11ty] Writing ./dist/pages/pathways/PL-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.700Z	[11ty] Writing ./dist/pathways/MT-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.702Z	[11ty] Writing ./dist/pages/pathways/MT-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.703Z	[11ty] Writing ./dist/pathways/MT-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.705Z	[11ty] Writing ./dist/pages/pathways/MT-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.706Z	[11ty] Writing ./dist/pathways/RU-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.708Z	[11ty] Writing ./dist/pages/pathways/RU-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.709Z	[11ty] Writing ./dist/pathways/RU-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.712Z	[11ty] Writing ./dist/pages/pathways/RU-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.713Z	[11ty] Writing ./dist/pathways/CH-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.715Z	[11ty] Writing ./dist/pages/pathways/CH-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.716Z	[11ty] Writing ./dist/pathways/CH-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.718Z	[11ty] Writing ./dist/pages/pathways/CH-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.719Z	[11ty] Writing ./dist/pathways/CZ-study/index.html from ./content/pathways.njk
2026-10-17T21:27:46.720Z	[11ty] Writing ./dist/pages/pathways/CZ-study/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.721Z	[11ty] Writing ./dist/pathways/CZ-work/index.html from ./content/pathways.njk
2026-10-17T21:27:46.723Z	[11ty] Writing ./dist/pages/pathways/CZ-work/index.html from ./content/pathways/pathway.njk
2026-10-17T21:27:46.724Z	[11ty] Writing ./dist/blog/country-audits/germany/germany-visa-from-nigeria-2026/index.html from ./content/blog/country-audits/germany/germany-visa-from-nigeria-2026.md (njk)
2026-10-17T21:27:46.724Z	[11ty] Writing ./dist/blog/playbooks/business/us-llc-setup-from-africa-2026/index.html from ./content/blog/playbooks/business/us-llc-setup-from-africa-2026.md (njk)
2026-10-17T21:27:46.725Z	[11ty] Writing ./dist/blog/playbooks/student/italy-dsu-scholarship-complete-guide/index.html from ./content/blog/playbooks/student/italy-dsu-scholarship-complete-guide.md (njk)
2026-10-17T21:27:46.725Z	[11ty] Writing ./dist/blog/playbooks/student/uk-masters-true-cost-2026/index.html from ./content/blog/playbooks/student/uk-masters-true-cost-2026.md (njk)
2026-10-17T21:27:46.726Z	[11ty] Writing ./dist/blog/playbooks/professional/canada-express-entry-2026/index.html from ./content/blog/playbooks/professional/canada-express-entry-2026.md (njk)
2026-10-17T21:27:46.726Z	[11ty] Writing ./dist/blog/playbooks/professional/germany-chancenkarte-visa-2026/index.html from ./content/blog/playbooks/professional/germany-chancenkarte-visa-2026.md (njk)
2026-10-17T21:27:46.727Z	[11ty] Writing ./dist/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer/index.html from ./content/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer.md (njk)
2026-10-17T21:27:46.727Z	[11ty] Writing ./dist/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026/index.html from ./content/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026.md (njk)
2026-10-17T21:27:46.819Z	[11ty] Copied 84 Wrote 147 files in 1.13 seconds (7.7ms each, v3.1.7)
2026-10-17T21:27:48.634Z	
2026-10-17T21:27:48.634Z	 ⛅️ wrangler 4.147.0
2026-10-17T21:27:48.635Z	────────────────────
2026-10-17T21:27:48.800Z	▲ [WARNING] Failed to match Worker name. Your config file is using the Worker name "myglobalroute", but the CI system expected "globalroute". Overriding using the CI provided Worker name. Workers Builds connected builds will attempt to open a pull request to resolve this config name mismatch.
2026-10-17T21:27:48.801Z	
2026-10-17T21:27:48.801Z	
2026-10-17T21:27:49.699Z	🌀 Building list of assets...
2026-10-17T21:27:49.716Z	✨ Read 398 files from the assets directory /opt/buildhome/repo/dist
2026-10-17T21:27:49.921Z	🌀 Starting asset upload...
2026-10-17T21:27:51.223Z	No updated asset files to upload. Proceeding with deployment...
2026-10-17T21:27:51.239Z	Total Upload: 0.31 KiB / gzip: 0.22 KiB
2026-10-17T21:27:52.529Z	Uploaded globalroute (3.00 sec)
2026-10-17T21:27:53.043Z	▲ [WARNING] Because 'workers_dev' is not in your Wrangler file, it will be disabled for this deployment by default.
2026-10-17T21:27:53.043Z	
2026-10-17T21:27:53.043Z	  To override this setting, you can enable workers.dev by explicitly setting 'workers_dev = true' in your Wrangler file.
2026-10-17T21:27:53.043Z	
2026-10-17T21:27:53.044Z	
2026-10-17T21:27:53.045Z	▲ [WARNING] Because your 'workers.dev' route is disabled and your 'preview_urls' setting is not in your Wrangler file, Preview URLs will be disabled for this deployment by default.
2026-10-17T21:27:53.045Z	
2026-10-17T21:27:53.046Z	  To override this setting, you can enable Preview URLs by explicitly setting 'preview_urls = true' in your Wrangler file.
2026-10-17T21:27:53.046Z	
2026-10-17T21:27:53.046Z	
2026-10-17T21:27:53.727Z	No targets deployed for globalroute (1.20 sec)
2026-10-17T21:27:53.729Z	
2026-10-17T21:27:53.729Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2026-10-17T21:27:53.730Z	
2026-10-17T21:27:53.731Z	✘ [ERROR] Trigger configuration for "globalroute" was only partially updated:
2026-10-17T21:27:53.731Z	
2026-10-17T21:27:53.731Z	  
2026-10-17T21:27:53.731Z	    Custom domains:
2026-10-17T21:27:53.731Z	      - A request to the Cloudflare API (/accounts/80702c3c1f624a6f05dc1671e3c64652/workers/scripts/globalroute/domains/records) failed.
2026-10-17T21:27:53.731Z	        - Hostname 'vrenum.app' already has externally managed DNS records (A, CNAME, etc). Delete them first or try a different hostname. [code: 100117]
2026-10-17T21:27:53.731Z	  
2026-10-17T21:27:53.731Z	  Successful trigger changes were not rolled back.
2026-10-17T21:27:53.731Z	
2026-10-17T21:27:53.732Z	
2026-10-17T21:27:53.753Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-10-17_21-27-48_193.log"
2026-10-17T21:27:53.826Z	Failed: error occurred while running build comman