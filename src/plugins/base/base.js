/**
 * Base Styles
 */


module.exports = function () {
  return function ({ addBase, config }) {
    // Create a string from the config array.
    var sans = config('theme.fontFamily.sans').join(", ");

    addBase({
      'html': {
        fontFamily: sans,
        color: config('theme.colors.black.default'),
        ...config('theme.decanter.base.fontSmoothing'),
      },
      'body': {
        backgroundColor: config('theme.colors.white'),
        overflowX: 'hidden',
        color: config('theme.colors.black.default'),
      },
      'p': {
        lineHeight: config('theme.decanter.base.baseLineHeight'),
        marginTop: '0',
        marginBottom: '1em',
      },
      'h1': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
      'h2': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
      'h3': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
      'h4': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
      'h5': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
      'h6': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
      },
    })
  }
}
