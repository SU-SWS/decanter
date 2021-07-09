/**
 * Input base styles to compensate for HTML font size difference between TW and Decanter
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      ".input": {
        display: "block",
        borderColor: theme("color.foggy-dark"),
        color: theme("colors.black.DEFAULT"),
        fontSize: theme("decanter.base.inputFontSize"),
        lineHeight: theme("lineHeight.snug"),
      },
    };

    addComponents(components);
  };
};
