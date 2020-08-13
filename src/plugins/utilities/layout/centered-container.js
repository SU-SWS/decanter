/**
 * Centered container.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Find and set the padding based on the screen margins
    var screens = theme('screens');
    var padding = {};

    // Create padding for each screen size which equals to the screen margin setting.
    for (var key in screens) {
      padding['@screen ' + key] = {
        paddingLeft:  theme('decanter.screenMargins.' + key),
        paddingRight:  theme('decanter.screenMargins.' + key),
      };
    }

    const newUtilities = {
      // Center an element horizontally.
      '.centered-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        ...padding,
        // At 1700px (2xs breakpoint + twice the screen margins at 2xl), the max container width stays at 1500px.
        '@media only screen and (min-width: 1700px)': {
          paddingLeft: 'calc((100% - 1500px)/2)',
          paddingRight: 'calc((100% - 1500px)/2)',
        }
      },
    }

    addUtilities(newUtilities)
  }
}
