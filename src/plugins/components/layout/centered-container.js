/**
 * Centered container.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme('screens');
    const maxWdiths = {};

    // Create max widths for each screen size which equals to the screen margin
    // setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      if (theme(`decanter.screenMargins.${key}`)) {
        const gutterWidth = parseInt(theme(`decanter.screenMargins.${key}`));

        maxWdiths[`@screen ${key}`] = {
          maxWidth: 'calc(100vw - ' + (gutterWidth * 2) + 'px)',
        };
      }
    });

    const components = {
      // Center an element horizontally.
      '.centered-container, .cc': {
        maxWidth: 'calc(100vw - ' + (parseInt(theme(`decanter.screenMargins.xs`)) * 2) + 'px)',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...maxWdiths,
        '@media only screen and (min-width: 1700px)': {
          maxWidth: '1500px'
        },
      },
    };

    addUtilities(components);
  };
};
