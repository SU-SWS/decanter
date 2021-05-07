/**
 * Centered container.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme("screens");
    const padding = {};

    // Create padding for each screen size which equals to the screen margin setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      padding[`@screen ${key}`] = {
        paddingLeft: theme(`decanter.screenMargins.${key}`),
        paddingRight: theme(`decanter.screenMargins.${key}`),
      };
    });

    const components = {
      // Center an element horizontally.
      ".centered-container, .cc": {
        paddingLeft: theme("decanter.screenMargins.xs"),
        paddingRight: theme("decanter.screenMargins.xs"),
        marginLeft: "auto",
        marginRight: "auto",
        ...padding,
        // At 1700px (2xl breakpoint + twice the screen margins at 2xl), the max container width stays at 1500px.
        "@media only screen and (min-width: 1700px)": {
          paddingLeft: "calc((100% - 1500px)/2)",
          paddingRight: "calc((100% - 1500px)/2)",
        },
      },
    };

    addComponents(components);
  };
};
