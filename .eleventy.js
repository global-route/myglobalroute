const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("public");
  
  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor);
  
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Create blog post collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md");
  });
  
  // Add filters for dates
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Add filter for reading time
  eleventyConfig.addFilter("readingTime", text => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });
  
  // Add filter to get excerpt
  eleventyConfig.addFilter("excerpt", content => {
    const excerpt = content.substring(0, 200);
    return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '...';
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
