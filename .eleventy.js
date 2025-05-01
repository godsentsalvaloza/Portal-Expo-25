module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/assets");
  eleventyConfig.addPassthroughCopy("./source/images");
  // eleventyConfig.addPassthroughCopy("./source/resources/main");
  // eleventyConfig.addPassthroughCopy("./source/admin");

  return {
    dir: {
      input: "source",
      output: "public",
    },
  };
};
