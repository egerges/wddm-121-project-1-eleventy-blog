module.exports = function (eleventyConfig) {
    // Add CSS support
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addWatchTarget("./src/assets/css");
    // Add img support
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    
    // Returns the current year
    eleventyConfig.addNunjucksShortcode("year", () => {
      return `${new Date().getFullYear()}`;
    });

    // Return your Object options:
    return {
      dir: {
        input: "src",
      },
    };
  };
  