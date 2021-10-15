/**
 * Custom typography styles.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Default styles for the headings.
    const headings = theme("decanter.typography.headings");

    const components = {
      ".types": {
        ...headings,
      },
      ".intro-text": {
        ...theme("decanter.typography.type2"),
        lineHeight: theme("lineHeight.DEFAULT"),
        maxWidth: theme("maxWidth.prose"),
      },
      ".splash-text": {
        ...headings,
        ...theme("decanter.typography.type6"),
      },
      ".quote-text": {
        fontSize: "1.25em",
        fontStyle: "italic",
      },
      ".caption, .credits": {
        fontSize: "max(1.6rem, 0.9em)",
        lineHeight: theme("lineHeight.snug"),
        color: theme("colors.cool-grey"),
      },
      ".caption": {
        marginTop: "0.4em",
      },
      ".credits": {
        fontStyle: "italic",
      },
      ".subheading": {
        ...theme("decanter.typography.type1"),
      },
      ".big-paragraph": {
        fontSize: "1.15em",
        lineHeight: theme("lineHeight.cozy"),
        "@screen md": {
          lineHeight: theme("lineHeight.DEFAULT"),
        },
      },
      ".card-paragraph": {
        fontSize: "max(1.6rem, 0.93em)",
        lineHeight: theme("lineHeight.snug"),
        "@screen md": {
          lineHeight: theme("lineHeight.cozy"),
        },
      },
      ".basefont-19": {
        fontSize: "1.6rem",
        "@screen md": {
          fontSize: "1.8rem",
        },
        "@screen 2xl": {
          fontSize: "1.9rem",
        },
      },
      ".basefont-20": {
        fontSize: "1.8rem",
        "@screen md": {
          fontSize: "1.9rem",
        },
        "@screen 2xl": {
          fontSize: "2rem",
        },
      },
      ".basefont-21": {
        fontSize: "1.8rem",
        "@screen md": {
          fontSize: "1.9rem",
        },
        "@screen 2xl": {
          fontSize: "2.1rem",
        },
      },
      ".basefont-22": {
        fontSize: "1.8rem",
        "@screen md": {
          fontSize: "2rem",
        },
        "@screen 2xl": {
          fontSize: "2.2rem",
        },
      },
      ".basefont-23": {
        fontSize: "1.8rem",
        "@screen md": {
          fontSize: "2.1rem",
        },
        "@screen 2xl": {
          fontSize: "2.3rem",
        },
      },
    };

    addComponents(components);
  };
};
