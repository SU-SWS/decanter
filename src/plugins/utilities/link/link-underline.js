/**
 * Link underline/no-underline in paragraphs, WYSIWYG, or nested in components with open fields.
 * Only hover/focus variants are available.
 */
module.exports = function () {
  return function ({ addUtilities, prefix }) {
    const utilities = {};

    utilities[`${prefix(".link-")}no-underline`] = {
      a: {
        textDecoration: "none",
      },
    };

    utilities[`${prefix(".link-")}underline`] = {
      a: {
        textDecoration: "underline",
      },
    };

    utilities[`.hover\\:${prefix(".link-").replace(".", "")}no-underline`] = {
      a: {
        "&:hover": {
          textDecoration: "none",
        },
      },
    };

    utilities[`.focus\\:${prefix(".link-").replace(".", "")}no-underline`] = {
      a: {
        "&:focus": {
          textDecoration: "none",
        },
      },
    };

    utilities[`.hover\\:${prefix(".link-").replace(".", "")}underline`] = {
      a: {
        "&:hover": {
          textDecoration: "underline",
        },
      },
    };

    utilities[`.focus\\:${prefix(".link-").replace(".", "")}underline`] = {
      a: {
        "&:focus": {
          textDecoration: "underline",
        },
      },
    };

    addUtilities(utilities, { variants: [], respectPrefix: false });
  };
};
