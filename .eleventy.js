const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // include css, images and cms admin files to public. without this, only html will make it to /public
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
// a filter to format date of post to a locale string
  // used in template files like so: {{ post.date | postDate }}
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'public',
    },
    // allows .html files to contain nunjucks templating language
    htmlTemplateEngine: 'njk',
  };
};