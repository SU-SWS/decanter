/**
 * Base Styles
 */

module.exports = function () {
  return function ({ addBase, config }) {

    // Create a string from the config array.
    var sans = config('theme.fontFamily.sans').join(", ");
    // Heading defaults.
    var headings = config('theme.decanter.typography.headings');

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
        ...headings,
        ...config('theme.decanter.typography.typeA'),
      },
      'h2': {
        ...headings,
        ...config('theme.decanter.typography.typeB'),
      },
      'h3': {
        ...headings,
        ...config('theme.decanter.typography.typeC'),
      },
      'h4': {
        ...headings,
        ...config('theme.decanter.typography.typeD'),
      },
      'h5': {
        ...headings,
        ...config('theme.decanter.typography.typeE'),
      },
      'h6': {
        ...headings,
        ...config('theme.decanter.typography.typeF'),
      },
      'cite': {
        fontStyle: 'normal',
      },
      'var': {
        fontStyle: 'normal',
      },
      'address': {
        fontStyle: 'normal',
      },
      'dfn': {
        fontStyle: 'normal',
      },
    })
  }
}
