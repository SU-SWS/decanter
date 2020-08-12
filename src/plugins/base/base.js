/**
 * Base Styles
 */

module.exports = function () {
  return function ({ addBase, config }) {

    // Create a string from the config array.
    var sans = config('theme.fontFamily.sans').join(", ");

    // Heading defaults.
    var headings = config('theme.decanter.typography.headings');

    // Input base styles.
    var inputBase = {
      margin: '0.2em 0',
      padding: '1rem 0.7em',
      display: 'block',
      boxSizing: 'border-box',
      maxWidth: config('theme.decanter.base.inputMaxWidth'),
      width: '100%',
      border: '0.1rem solid ' + config('theme.colors.fog.dark'),
      borderRadius: '0',
      color: config('theme.colors.black.default'),
      fontSize: config('theme.decanter.base.baseFontSize'),
      height: '4.8rem',
      lineHeight: '1.3',
    };

    // Add the elements.
    addBase({
      'html': {
        fontFamily: sans,
        color: config('theme.colors.black.default'),
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
      'figure': {
        margin: '0',
      },
      'img': {
        margin: '0',
        padding: '0',
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
      },
      'fieldset': {
        border: '0',
      },
      'label': {
        display: 'block',
        marginTop: '3rem',
        maxWidth: config('theme.decanter.base.inputMaxWidth'),
      },
      'legend': {
        ...config('theme.decanter.typography.typeB'),
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'input': {
        ...inputBase,
        outline: 'none',
      },
      'textarea': {
        ...inputBase,
        height: '16rem',
      },
      'select': {
        ...inputBase,
        outline: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        backgroundColor: config('theme.color.white'),
        // background: url("#{$su-image-path}/arrow-down.png"),
        // background-image: url("#{$su-image-path}/arrow-down.svg"),
        backgroundPosition: 'right 1.3rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.3rem',
      }
    })
  }
}
