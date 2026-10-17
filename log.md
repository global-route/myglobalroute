2026-10-04T03:39:38.316Z	Initializing build environment...
2026-10-04T03:39:40.355Z	Success: Finished initializing build environment
2026-10-04T03:39:41.059Z	Cloning repository...
2026-10-04T03:39:43.186Z	No build output detected to cache. Skipping.
2026-10-04T03:39:43.186Z	No dependencies detected to cache. Skipping.
2026-10-04T03:39:43.194Z	Detected the following tools from environment: bun@1.2.15, nodejs@24.18.0
2026-10-04T03:39:43.197Z	Installing project dependencies: bun install
2026-10-04T03:39:44.121Z	bun install v1.2.15 (df017990)
2026-10-04T03:39:44.130Z	Resolving dependencies
2026-10-04T03:39:45.868Z	Resolved, downloaded and extracted [2120]
2026-10-04T03:39:46.077Z	Saved lockfile
2026-10-04T03:39:46.078Z	
2026-10-04T03:39:46.079Z	+ @11ty/eleventy@3.1.6
2026-10-04T03:39:46.080Z	+ @babel/core@7.29.7 (v8.0.6 available)
2026-10-04T03:39:46.080Z	+ @babel/preset-env@7.29.7 (v8.0.6 available)
2026-10-04T03:39:46.080Z	+ @playwright/test@1.44.1 (v1.63.0 available)
2026-10-04T03:39:46.081Z	+ eslint@8.57.1 (v10.12.0 available)
2026-10-04T03:39:46.081Z	+ jest@29.7.0 (v30.5.2 available)
2026-10-04T03:39:46.081Z	+ markdown-it@14.3.2 (v15.0.2 available)
2026-10-04T03:39:46.082Z	+ markdown-it-anchor@9.2.1 (v10.0.0 available)
2026-10-04T03:39:46.082Z	+ postcss@8.5.28
2026-10-04T03:39:46.082Z	+ postcss-cli@11.0.1 (v12.0.0 available)
2026-10-04T03:39:46.082Z	+ prettier@3.9.9
2026-10-04T03:39:46.082Z	+ fuse.js@7.5.0
2026-10-04T03:39:46.083Z	
2026-10-04T03:39:46.083Z	542 packages installed [2.02s]
2026-10-04T03:39:46.328Z	Executing user build command: npm run build && npx wrangler deploy
2026-10-04T03:39:48.388Z	
2026-10-04T03:39:48.388Z	> global-route@1.0.0 build
2026-10-04T03:39:48.388Z	> npx @11ty/eleventy
2026-10-04T03:39:48.388Z	
2026-10-04T03:39:50.542Z	[11ty] Writing ./dist/pages/countries/GB/index.html from ./content/countries.njk
2026-10-04T03:39:50.543Z	[11ty] Writing ./dist/pathways/GB-skilled-worker/index.html from ./content/pathways.njk
2026-10-04T03:39:50.545Z	[11ty] Writing ./dist/blog/index.html from ./content/blog/index.njk
2026-10-04T03:39:50.545Z	[11ty] Writing ./dist/pages/pathways/GB-skilled-worker/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.554Z	[11ty] Writing ./dist/pages/countries/CA/index.html from ./content/countries.njk
2026-10-04T03:39:50.554Z	[11ty] Writing ./dist/pathways/GB-student/index.html from ./content/pathways.njk
2026-10-04T03:39:50.556Z	[11ty] Writing ./dist/pages/pathways/GB-student/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.557Z	[11ty] Writing ./dist/pages/countries/AU/index.html from ./content/countries.njk
2026-10-04T03:39:50.557Z	[11ty] Writing ./dist/pathways/CA-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.559Z	[11ty] Writing ./dist/pages/pathways/CA-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.560Z	[11ty] Writing ./dist/pages/countries/NZ/index.html from ./content/countries.njk
2026-10-04T03:39:50.561Z	[11ty] Writing ./dist/pathways/CA-federal-skilled-worker/index.html from ./content/pathways.njk
2026-10-04T03:39:50.562Z	[11ty] Writing ./dist/pages/pathways/CA-federal-skilled-worker/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.565Z	[11ty] Writing ./dist/pages/countries/IE/index.html from ./content/countries.njk
2026-10-04T03:39:50.565Z	[11ty] Writing ./dist/pathways/AU-student/index.html from ./content/pathways.njk
2026-10-04T03:39:50.567Z	[11ty] Writing ./dist/pages/pathways/AU-student/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.567Z	[11ty] Writing ./dist/pages/countries/DE/index.html from ./content/countries.njk
2026-10-04T03:39:50.567Z	[11ty] Writing ./dist/pathways/AU-skilled/index.html from ./content/pathways.njk
2026-10-04T03:39:50.567Z	[11ty] Writing ./dist/pages/pathways/AU-skilled/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.568Z	[11ty] Writing ./dist/pages/countries/IT/index.html from ./content/countries.njk
2026-10-04T03:39:50.568Z	[11ty] Writing ./dist/pathways/NZ-student/index.html from ./content/pathways.njk
2026-10-04T03:39:50.570Z	[11ty] Writing ./dist/pages/pathways/NZ-student/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.571Z	[11ty] Writing ./dist/pages/countries/FR/index.html from ./content/countries.njk
2026-10-04T03:39:50.571Z	[11ty] Writing ./dist/pathways/NZ-smc-points-based/index.html from ./content/pathways.njk
2026-10-04T03:39:50.575Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-points-based/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.575Z	[11ty] Writing ./dist/pages/countries/HU/index.html from ./content/countries.njk
2026-10-04T03:39:50.576Z	[11ty] Writing ./dist/pathways/NZ-smc-skilled-work-experience/index.html from ./content/pathways.njk
2026-10-04T03:39:50.576Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-skilled-work-experience/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.576Z	[11ty] Writing ./dist/pages/countries/FI/index.html from ./content/countries.njk
2026-10-04T03:39:50.576Z	[11ty] Writing ./dist/pathways/NZ-smc-trades-technician/index.html from ./content/pathways.njk
2026-10-04T03:39:50.577Z	[11ty] Writing ./dist/pages/pathways/NZ-smc-trades-technician/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.578Z	[11ty] Writing ./dist/pages/countries/SE/index.html from ./content/countries.njk
2026-10-04T03:39:50.579Z	[11ty] Writing ./dist/pathways/NZ-skilled/index.html from ./content/pathways.njk
2026-10-04T03:39:50.580Z	[11ty] Writing ./dist/pages/pathways/NZ-skilled/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.581Z	[11ty] Writing ./dist/pages/countries/NO/index.html from ./content/countries.njk
2026-10-04T03:39:50.581Z	[11ty] Writing ./dist/pathways/IE-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.583Z	[11ty] Writing ./dist/pages/pathways/IE-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.584Z	[11ty] Writing ./dist/pages/countries/LU/index.html from ./content/countries.njk
2026-10-04T03:39:50.584Z	[11ty] Writing ./dist/pathways/IE-critical-skills/index.html from ./content/pathways.njk
2026-10-04T03:39:50.586Z	[11ty] Writing ./dist/pages/pathways/IE-critical-skills/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.586Z	[11ty] Writing ./dist/pages/countries/LT/index.html from ./content/countries.njk
2026-10-04T03:39:50.587Z	[11ty] Writing ./dist/pathways/DE-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.588Z	[11ty] Writing ./dist/pages/pathways/DE-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.589Z	[11ty] Writing ./dist/pages/countries/IS/index.html from ./content/countries.njk
2026-10-04T03:39:50.590Z	[11ty] Writing ./dist/pathways/DE-opportunity-card/index.html from ./content/pathways.njk
2026-10-04T03:39:50.592Z	[11ty] Writing ./dist/pages/pathways/DE-opportunity-card/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.593Z	[11ty] Writing ./dist/pages/countries/PT/index.html from ./content/countries.njk
2026-10-04T03:39:50.593Z	[11ty] Writing ./dist/pathways/IT-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.595Z	[11ty] Writing ./dist/pages/pathways/IT-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.596Z	[11ty] Writing ./dist/pages/countries/ES/index.html from ./content/countries.njk
2026-10-04T03:39:50.596Z	[11ty] Writing ./dist/pathways/IT-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.598Z	[11ty] Writing ./dist/pages/pathways/IT-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.599Z	[11ty] Writing ./dist/pages/countries/AT/index.html from ./content/countries.njk
2026-10-04T03:39:50.600Z	[11ty] Writing ./dist/pathways/FR-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.601Z	[11ty] Writing ./dist/pages/pathways/FR-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.603Z	[11ty] Writing ./dist/pages/countries/JP/index.html from ./content/countries.njk
2026-10-04T03:39:50.603Z	[11ty] Writing ./dist/pathways/FR-talent/index.html from ./content/pathways.njk
2026-10-04T03:39:50.604Z	[11ty] Writing ./dist/pages/pathways/FR-talent/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.605Z	[11ty] Writing ./dist/pages/countries/KR/index.html from ./content/countries.njk
2026-10-04T03:39:50.605Z	[11ty] Writing ./dist/pathways/HU-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.607Z	[11ty] Writing ./dist/pages/pathways/HU-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.608Z	[11ty] Writing ./dist/pages/countries/CN/index.html from ./content/countries.njk
2026-10-04T03:39:50.608Z	[11ty] Writing ./dist/pathways/HU-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.610Z	[11ty] Writing ./dist/pages/pathways/HU-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.610Z	[11ty] Writing ./dist/pages/countries/PL/index.html from ./content/countries.njk
2026-10-04T03:39:50.611Z	[11ty] Writing ./dist/pathways/FI-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.613Z	[11ty] Writing ./dist/pages/pathways/FI-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.613Z	[11ty] Writing ./dist/pages/countries/MT/index.html from ./content/countries.njk
2026-10-04T03:39:50.615Z	[11ty] Writing ./dist/pathways/FI-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.617Z	[11ty] Writing ./dist/pages/pathways/FI-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.624Z	[11ty] Writing ./dist/pages/countries/RU/index.html from ./content/countries.njk
2026-10-04T03:39:50.624Z	[11ty] Writing ./dist/pathways/SE-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.624Z	[11ty] Writing ./dist/pages/pathways/SE-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pages/countries/CH/index.html from ./content/countries.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pathways/SE-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pages/pathways/SE-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pages/countries/CZ/index.html from ./content/countries.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pathways/NO-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pages/pathways/NO-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.626Z	[11ty] Writing ./dist/pathways/NO-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.627Z	[11ty] Writing ./dist/pages/pathways/NO-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.628Z	[11ty] Writing ./dist/pathways/LU-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.629Z	[11ty] Writing ./dist/pages/pathways/LU-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.630Z	[11ty] Writing ./dist/pathways/LU-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.632Z	[11ty] Writing ./dist/pages/pathways/LU-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.632Z	[11ty] Writing ./dist/pathways/LT-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.634Z	[11ty] Writing ./dist/pages/pathways/LT-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.634Z	[11ty] Writing ./dist/pathways/LT-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.636Z	[11ty] Writing ./dist/pages/pathways/LT-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.636Z	[11ty] Writing ./dist/pathways/IS-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pages/pathways/IS-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pathways/IS-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pages/pathways/IS-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pathways/PT-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pages/pathways/PT-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pathways/PT-digital-nomad/index.html from ./content/pathways.njk
2026-10-04T03:39:50.644Z	[11ty] Writing ./dist/pages/pathways/PT-digital-nomad/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.648Z	[11ty] Writing ./dist/pathways/ES-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.648Z	[11ty] Writing ./dist/pages/pathways/ES-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.648Z	[11ty] Writing ./dist/pathways/ES-digital-nomad/index.html from ./content/pathways.njk
2026-10-04T03:39:50.649Z	[11ty] Writing ./dist/pages/pathways/ES-digital-nomad/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.650Z	[11ty] Writing ./dist/pathways/AT-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.651Z	[11ty] Writing ./dist/pages/pathways/AT-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.652Z	[11ty] Writing ./dist/pathways/AT-rwr-other-key-workers/index.html from ./content/pathways.njk
2026-10-04T03:39:50.653Z	[11ty] Writing ./dist/pages/pathways/AT-rwr-other-key-workers/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.654Z	[11ty] Writing ./dist/pathways/AT-red-white-red/index.html from ./content/pathways.njk
2026-10-04T03:39:50.655Z	[11ty] Writing ./dist/pages/pathways/AT-red-white-red/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.656Z	[11ty] Writing ./dist/pathways/JP-student/index.html from ./content/pathways.njk
2026-10-04T03:39:50.657Z	[11ty] Writing ./dist/pages/pathways/JP-student/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.658Z	[11ty] Writing ./dist/pathways/JP-engineer/index.html from ./content/pathways.njk
2026-10-04T03:39:50.660Z	[11ty] Writing ./dist/pages/pathways/JP-engineer/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.661Z	[11ty] Writing ./dist/pathways/KR-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.662Z	[11ty] Writing ./dist/pages/pathways/KR-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.663Z	[11ty] Writing ./dist/pathways/KR-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.664Z	[11ty] Writing ./dist/pages/pathways/KR-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.665Z	[11ty] Writing ./dist/pathways/CN-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.667Z	[11ty] Writing ./dist/pages/pathways/CN-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.668Z	[11ty] Writing ./dist/pathways/CN-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.669Z	[11ty] Writing ./dist/pages/pathways/CN-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.671Z	[11ty] Writing ./dist/pathways/PL-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.672Z	[11ty] Writing ./dist/pages/pathways/PL-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.673Z	[11ty] Writing ./dist/pathways/PL-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.675Z	[11ty] Writing ./dist/pages/pathways/PL-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.676Z	[11ty] Writing ./dist/pathways/MT-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.678Z	[11ty] Writing ./dist/pages/pathways/MT-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.679Z	[11ty] Writing ./dist/pathways/MT-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.680Z	[11ty] Writing ./dist/pages/pathways/MT-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.681Z	[11ty] Writing ./dist/pathways/RU-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.683Z	[11ty] Writing ./dist/pages/pathways/RU-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.684Z	[11ty] Writing ./dist/pathways/RU-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.685Z	[11ty] Writing ./dist/pages/pathways/RU-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.686Z	[11ty] Writing ./dist/pathways/CH-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.687Z	[11ty] Writing ./dist/pages/pathways/CH-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.688Z	[11ty] Writing ./dist/pathways/CH-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.689Z	[11ty] Writing ./dist/pages/pathways/CH-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.690Z	[11ty] Writing ./dist/pathways/CZ-study/index.html from ./content/pathways.njk
2026-10-04T03:39:50.692Z	[11ty] Writing ./dist/pages/pathways/CZ-study/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.693Z	[11ty] Writing ./dist/pathways/CZ-work/index.html from ./content/pathways.njk
2026-10-04T03:39:50.694Z	[11ty] Writing ./dist/pages/pathways/CZ-work/index.html from ./content/pathways/pathway.njk
2026-10-04T03:39:50.696Z	[11ty] Writing ./dist/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer/index.html from ./content/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer.md (njk)
2026-10-04T03:39:50.697Z	[11ty] Writing ./dist/blog/country-audits/germany/germany-visa-from-nigeria-2026/index.html from ./content/blog/country-audits/germany/germany-visa-from-nigeria-2026.md (njk)
2026-10-04T03:39:50.697Z	[11ty] Writing ./dist/blog/playbooks/business/us-llc-setup-from-africa-2026/index.html from ./content/blog/playbooks/business/us-llc-setup-from-africa-2026.md (njk)
2026-10-04T03:39:50.697Z	[11ty] Writing ./dist/blog/playbooks/professional/canada-express-entry-2026/index.html from ./content/blog/playbooks/professional/canada-express-entry-2026.md (njk)
2026-10-04T03:39:50.697Z	[11ty] Writing ./dist/blog/playbooks/professional/germany-chancenkarte-visa-2026/index.html from ./content/blog/playbooks/professional/germany-chancenkarte-visa-2026.md (njk)
2026-10-04T03:39:50.697Z	[11ty] Writing ./dist/blog/playbooks/student/italy-dsu-scholarship-complete-guide/index.html from ./content/blog/playbooks/student/italy-dsu-scholarship-complete-guide.md (njk)
2026-10-04T03:39:50.698Z	[11ty] Writing ./dist/blog/playbooks/student/uk-masters-true-cost-2026/index.html from ./content/blog/playbooks/student/uk-masters-true-cost-2026.md (njk)
2026-10-04T03:39:50.698Z	[11ty] Writing ./dist/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026/index.html from ./content/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026.md (njk)
2026-10-04T03:39:50.776Z	[11ty] Copied 79 Wrote 147 files in 0.97 seconds (v3.1.6)
2026-10-04T03:39:54.221Z	npm warn exec The following package was not found and will be installed: wrangler@4.147.0
2026-10-04T03:40:06.523Z	
2026-10-04T03:40:06.523Z	 ⛅️ wrangler 4.147.0
2026-10-04T03:40:06.523Z	────────────────────
2026-10-04T03:40:06.603Z	
2026-10-04T03:40:06.603Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2026-10-04T03:40:06.604Z	
2026-10-04T03:40:06.676Z	✘ [ERROR] Cannot use assets with a binding in an assets-only Worker.
2026-10-04T03:40:06.676Z	
2026-10-04T03:40:06.676Z	  Please remove the asset binding from your configuration file, or provide a Worker script in your configuration file (`main`).
2026-10-04T03:40:06.676Z	
2026-10-04T03:40:06.676Z	
2026-10-04T03:40:06.753Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-10-04_03-40-06_102.log"
2026-10-04T03:40:06.908Z	Failed: error occurred while running build command