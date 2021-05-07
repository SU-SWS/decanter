/**
 * Responsive grid gaps.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme("screens");
    const gaps = theme("gap");
    const output = [];

    // Create padding for each screen size which equals to the screen margin setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      if (gaps[key]) {
        output[`@screen ${key}`] = {
          "grid-gap": gaps[key],
          gap: gaps[key],
        };
      }
    });

    const components = {
      // Center an element horizontally.
      ".grid-gap": {
        "grid-gap": gaps.xs,
        gap: gaps.xs,
        ...output,
      },
    };

    addComponents(components);
  };
};
