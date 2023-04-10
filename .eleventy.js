const _ = require("lodash");
const { DateTime } = require("luxon");
const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(config) {
    config.setUseGitIgnore(true);

    // Pass Through
    config.addPassthroughCopy("./src/assets/css/**/*.min.css");
    config.addPassthroughCopy("./src/assets/js/**/*.min.js");
    config.addPassthroughCopy("./src/assets/img/**/*");
    config.addPassthroughCopy("./src/assets/svg/**/*");

    // Short Codes
    config.addShortcode("dateToday", () => `${new Date().toLocaleString(DateTime.DATE_HUGE)}`);
    config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    // Custom Filters
    config.addNunjucksFilter("take", (collection, count) => collection.slice(0, count || 10));
    config.addNunjucksFilter("postDate", (dateObject) => {
        return DateTime
            .fromJSDate(dateObject)
            .toLocaleString(DateTime.DATE_HUGE);
    });
    config.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(" ", 250)) + "...";
    });
    config.addFilter("slugify", (str) => {
        if (!str) { return; }
        return slugify(str, {
            lower: true,
            strict: true,
            remove: /["]/g,
        });
    });
    config.addCollection("postsByCategory", (collection) => {
        return _
            .chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/articles/'))
            .groupBy((post) => post.data.categories)
            .toPairs()
            .reverse()
            .value();
    });

    // Anchor
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [1, 2, 3],
        slugify: (str) => slugify(str, {
            lower: true,
            strict: true,
            remove: /["]/g,
        })
    };

    /* Markdown Overrides */
    let markdownLibrary = markdownIt().use(markdownItAnchor, markdownItAnchorOptions);
    // This is the part that tells 11ty to swap to our custom config
    config.setLibrary("md", markdownLibrary);

    // Plugins
    config.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4'],
        wrapper: 'nav',
        ul: true,
        flat: false
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}