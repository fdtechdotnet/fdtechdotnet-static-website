const _ = require("lodash");
const { DateTime } = require("luxon");

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
    config.addCollection("postsByYear", (collection) => {
        return _
            .chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/articles/'))
            .groupBy((post) => post.date.getFullYear())
            .toPairs()
            .reverse()
            .value();
    });
    config.addCollection("postsByCategory", (collection) => {
        return _
            .chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/articles/'))
            .groupBy((post) => post.data.category)
            .toPairs()
            .reverse()
            .value();
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}