/**
 * Centered container.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Find and set the max width based on the max screen size.
    var screens = theme('screens');
    var maxWidths = {};

    // Create a max width for each screen size minus the screen margin setting.
    for (var key in screens) {
      var value = screens[key].replace(/\D/g, '');
      var screenMargin = theme('decanter.screenMargins.' + key).replace(/\D/g, '');
      maxWidths['@screen ' + key] = {
        maxWidth: Math.floor(value - screenMargin) + 'px',
      };
    }

    const newUtilities = {
      // Center an element horizontally.
      '.centered-container': {
        margin: '0 auto',
        ...maxWidths,
      },
    }

    addUtilities(newUtilities)
  }
}
