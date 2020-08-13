/**
 * Flex row container with Decanter responsive gutter
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

      var screens = theme('gap');
      var padding = {};
      var margin = {};

      for (var key in screens) {
        padding['@screen ' + key] = {
          paddingLeft:  parseInt(theme('gap.' + key), 10) / 2,
          paddingRight:  parseInt(theme('gap.' + key), 10) / 2,
        };

        margin['@screen ' + key] = {
          marginLeft:  parseInt(theme('gap.' + key), 10) / -2,
          marginRight:  parseInt(theme('gap.' + key), 10) / -2,
        };
      }

    const newUtilities = {
      '.flex-container': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        ...margin,
        ' > *': {
          ...padding,
        },
      },
    }

    addUtilities(newUtilities)
  }
}
