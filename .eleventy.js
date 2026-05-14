// Eleventy configuration for Maudlin Street.
//
// Build target switching:
//   - GitHub Pages project site (initial):
//       URL: https://<username>.github.io/maudlin-street/
//       Set: pathPrefix = "/maudlin-street/"   (default below)
//   - Custom domain (later: maudlinstreet.mgv.com):
//       URL: https://maudlinstreet.mgv.com/
//       Set: pathPrefix = "/"
//   - Longer-term apex (maudlinstreet.com):
//       URL: https://maudlinstreet.com/
//       Set: pathPrefix = "/"
//
// To switch, override the SITE_PATH_PREFIX env var at build time:
//
//     SITE_PATH_PREFIX=/ npx eleventy
//
// Doctrinal note: this scaffold installs no dependencies, runs no
// build, and configures no remote. The actual build wiring lands in a
// later phase. This file is a placeholder configuration that documents
// the intended build shape.

const sitePathPrefix = process.env.SITE_PATH_PREFIX || "/maudlin-street/";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: sitePathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
}
