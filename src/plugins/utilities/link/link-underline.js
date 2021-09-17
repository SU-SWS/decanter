/**
 * Link underline/no-underline in paragraphs, WYSIWYG, or nested in components with open fields.
 * Only hover/focus variants are available.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const utilities = {};

    utilities[".link-no-underline"] = {
      a: {
        textDecoration: "none",
      },
    };

    utilities[".link-underline"] = {
      a: {
        textDecoration: "underline",
      },
    };

    addUtilities(utilities);
  };
};
