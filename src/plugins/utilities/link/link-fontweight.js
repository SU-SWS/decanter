/**
 * Link font weight in paragraphs, WYSIWYG, or nested in components with open fields.
 * Only responsive variants are available as font weight shouldn't change when hover/focus.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const utilities = {};

    utilities[".link-regular"] = {
      a: {
        fontWeight: "400",
      },
    };

    utilities[".link-semibold"] = {
      a: {
        fontWeight: "600",
      },
    };

    utilities[".link-bold"] = {
      a: {
        fontWeight: "700",
      },
    };

    addUtilities(utilities, { variants: ["responsive"] });
  };
};
