/**
 * Responsive grid gaps.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Find and set the padding based on the screen margins
    var screens = theme('screens');
    var gaps = theme('gap');
    var output = [];

    // Create padding for each screen size which equals to the screen margin setting.
    for (var key in screens) {
      if (gaps[key]) {
        output['@screen ' + key] = {
          'grid-gap': gaps[key],
          'gap': gaps[key],
        };
      }
    }

    const newUtilities = {
      // Center an element horizontally.
      '.grid-gap': {
        ...output,
      },
    }

    addUtilities(newUtilities)
  }
}
