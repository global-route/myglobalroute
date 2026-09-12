const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

function loadMigrationEvidence() {
  const evidenceDir = path.join(__dirname, "src", "data", "evidence");
  const records = [];
  const primaryPath = path.join(evidenceDir, "primary-source-verified.json");
  if (fs.existsSync(primaryPath)) {
    const primary = JSON.parse(fs.readFileSync(primaryPath, "utf8"));
    records.push(...(primary.records || []));
  }
  const addendaDir = path.join(evidenceDir, "addenda");
  if (fs.existsSync(addendaDir)) {
    for (const filename of fs.readdirSync(addendaDir).filter(name => name.endsWith(".json")).sort()) {
      const addendum = JSON.parse(fs.readFileSync(path.join(addendaDir, filename), "utf8"));
      records.push(...(addendum.records || []));
    }
  }
  return { records };
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/index.html": "/index.html" });
  eleventyConfig.addPassthroughCopy({ "src/data": "/data" });
  eleventyConfig.addPassthroughCopy({ "src/pages": "/pages" });

  eleventyConfig.addGlobalData("migrationEvidence", loadMigrationEvidence);

  let markdownLibrary = markdownIt({ html: true, breaks: true, linkify: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md");
  });

  eleventyConfig.addFilter("readableDate", dateObj => new Date(dateObj).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  }));
  eleventyConfig.addFilter("readingTime", text => Math.ceil(text.split(/\s/g).length / 200));
  eleventyConfig.addFilter("excerpt", content => {
    const excerpt = content.substring(0, 200);
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "...";
  });

  return {
    dir: {
      input: "content",
      output: "dist",
      includes: "../src/templates",
      data: "../src/data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
