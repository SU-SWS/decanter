/**
 * Centered container.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme('screens');
    const maxWdiths = {};
    let largestScreen = 0;
    let largestGutter = 0;
    let smallestGutter = 999999;

    // Create max widths for each screen size which equals to the screen margin
    // setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      if (largestScreen < parseInt(screens[key])) largestScreen = parseInt(screens[key]);

      if (theme(`decanter.screenMargins.${key}`)) {
        const gutterWidth = parseInt(theme(`decanter.screenMargins.${key}`));
        if (largestGutter < gutterWidth) largestGutter = gutterWidth;
        if (smallestGutter > gutterWidth) smallestGutter = gutterWidth;

        maxWdiths[`@screen ${key}`] = {
          maxWidth: 'calc(100vw - ' + (gutterWidth * 2) + 'px)',
        };
      }
    });
      
    const key = `@media only screen and (min-width: ${largestScreen + (largestGutter * 2)}px)`
    const components = {
      // Center an element horizontally.
      '.centered-container, .cc': {
        maxWidth: 'calc(100vw - ' + (smallestGutter * 2) + 'px)',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...maxWdiths,
        [key]: {
          maxWidth: `${largestScreen}px`,
        },
      },
    };

    addComponents(components);
  };
};
