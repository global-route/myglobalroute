/**
 * Related content engine.
 * Scores blog posts against a context object and returns the top N matches.
 * Used by blog posts, Find MyPathway results and Work Abroad Agent results.
 *
 * Context fields (all optional):
 *   country   {string}   — country name e.g. "Germany"
 *   goal      {string}   — "work" | "study" | "business" | "nomad"
 *   category  {string}   — post category e.g. "Professional Playbooks"
 *   tags      {string[]} — tag array e.g. ["germany","chancenkarte"]
 *   excludeUrl {string}  — current page URL to exclude from results
 */
(function (root) {
  'use strict';

  // Category → goal mapping for cross-matching
  const CATEGORY_GOAL = {
    'professional playbooks': 'work',
    'student playbooks': 'study',
    'business playbooks': 'business',
    'country audits': null, // matches any goal
    'guides': null,
    'case studies': null,
    'policy updates': null,
  };

  // Goal → relevant categories
  const GOAL_CATEGORIES = {
    work: ['professional playbooks', 'guides', 'country audits', 'case studies'],
    study: ['student playbooks', 'guides', 'country audits', 'case studies'],
    business: ['business playbooks', 'guides', 'country audits'],
    nomad: ['business playbooks', 'guides', 'country audits'],
  };

  function normalise(str) {
    return String(str || '').toLowerCase().trim();
  }

  function scorePost(post, ctx) {
    let score = 0;
    const postCountry = normalise(post.data ? post.data.country : post.country);
    const postCategory = normalise(post.data ? post.data.category : post.category);
    const postGoal = normalise(post.data ? post.data.goal : post.goal);
    const postTags = (post.data ? post.data.tags : post.tags) || [];
    const normTags = postTags.map(normalise);

    const ctxCountry = normalise(ctx.country);
    const ctxGoal = normalise(ctx.goal);
    const ctxCategory = normalise(ctx.category);
    const ctxTags = (ctx.tags || []).map(normalise);

    // Country match — strongest signal
    if (ctxCountry && postCountry && postCountry === ctxCountry) score += 40;

    // Goal match
    if (ctxGoal && postGoal && postGoal === ctxGoal) score += 20;

    // Goal → category cross-match
    if (ctxGoal && GOAL_CATEGORIES[ctxGoal]) {
      if (GOAL_CATEGORIES[ctxGoal].includes(postCategory)) score += 15;
    }

    // Category match
    if (ctxCategory && postCategory && postCategory === normalise(ctxCategory)) score += 15;

    // Tag overlap
    if (ctxTags.length && normTags.length) {
      const overlap = ctxTags.filter(t => normTags.includes(t)).length;
      score += Math.min(overlap * 8, 24); // cap at 24
    }

    // Country name appears in tags
    if (ctxCountry && normTags.includes(ctxCountry)) score += 10;

    return score;
  }

  /**
   * Returns top N related posts for a given context.
   * @param {Array}  posts      — array of post objects (Eleventy collections or blog-posts.json)
   * @param {Object} ctx        — context: { country, goal, category, tags, excludeUrl }
   * @param {number} [limit=3]
   */
  function getRelated(posts, ctx, limit) {
    limit = limit || 3;
    const excludeUrl = normalise(ctx.excludeUrl || '');

    return posts
      .filter(p => {
        const url = normalise(p.url || p.slug || '');
        return !excludeUrl || !url.includes(excludeUrl.replace(/^\/|\/$/g, ''));
      })
      .map(p => ({ post: p, score: scorePost(p, ctx) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);
  }

  root.MP2G = root.MP2G || {};
  root.MP2G.RelatedContent = { getRelated, scorePost };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.MP2G.RelatedContent;
})(typeof window !== 'undefined' ? window : globalThis);
