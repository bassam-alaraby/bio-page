module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    assets: "assets",
    "style.css": "style.css",
    "script.js": "script.js",
    CNAME: "CNAME",
  });

  // Repo tooling and docs are not part of the published site.
  for (const entry of [".github", "test", "node_modules"]) {
    eleventyConfig.ignores.add(entry);
  }

  return {
    dir: { input: ".", output: "_site" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
};
