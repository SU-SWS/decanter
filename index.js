var path = require("path");

module.exports = {
  includePaths: [
    path.join(__dirname, "core/src/js"),
    path.join(__dirname, "core/src/scss"),
    path.resolve("../", "bourbon/core")
  ]
};
