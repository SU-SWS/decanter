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
        ...config('theme.decanter.base.fontSmoothing'),
        fontSize: config('theme.decanter.base.rootFontSize'),
      },
      'body': {
        backgroundColor: config('theme.colors.white'),
        overflowX: 'hidden',
        color: config('theme.colors.black.default'),
        fontSize: '1.6rem',
      },
      'p': {
        lineHeight: config('theme.decanter.base.baseLineHeight'),
        marginTop: '0',
        marginBottom: '1em',
      },
      'h1': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'h2': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'h3': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'h4': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'h5': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'h6': {
        clear: 'both',
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'img': {
        margin: '0',
        padding: '0',
      },
    })
  }
}
