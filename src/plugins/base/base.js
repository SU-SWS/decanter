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
      display: 'block',
      maxWidth: config('theme.decanter.base.inputMaxWidth'),
      borderColor: config('theme.colors.foggy.dark'),
      color: config('theme.colors.black.DEFAULT'),
      fontSize: config('theme.decanter.base.inputFontSize'),
      lineHeight: '1.3',
    };

    // Add the elements.
    addBase({
      'html': {
        fontFamily: sans,
        color: config('theme.colors.black.DEFAULT'),
        ...config('theme.decanter.base.fontSmoothing'),
        fontSize: config('theme.decanter.base.rootFontSize'),
        lineHeight: '1.15', // This is our original html line height using normalize
      },
      'body': {
        backgroundColor: config('theme.colors.white'),
        overflowX: 'hidden',
        color: config('theme.colors.black.DEFAULT'),
        fontSize: '1.6rem',
        '@screen md': {
          fontSize: '1.8rem',
        },
        '@screen 2xl': {
          fontSize: '1.9rem',
        },
      },
      'p': {
        lineHeight: config('theme.decanter.base.baseLineHeight'),
        marginTop: '0',
        marginBottom: '1em',
      },
      // HEADINGS
      // -----------------------------------------------------------------------
      'h1': {
        ...headings,
        ...config('theme.decanter.typography.type5'),
      },
      'h2': {
        ...headings,
        ...config('theme.decanter.typography.type4'),
      },
      'h3': {
        ...headings,
        ...config('theme.decanter.typography.type3'),
      },
      'h4': {
        ...headings,
        ...config('theme.decanter.typography.type2'),
      },
      'h5': {
        ...headings,
        ...config('theme.decanter.typography.type1'),
      },
      'h6': {
        ...headings,
        ...config('theme.decanter.typography.type0'),
      },
      // MISC
      // -----------------------------------------------------------------------
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
      // Images
      // -----------------------------------------------------------------------
      'figure': {
        margin: '0',
      },
      'figcaption': {
        fontSize: '0.9em',
        lineHeight: '1.3',
        color: config('theme.colors.cool-grey'),
      },
      'img': {
        margin: '0',
        padding: '0',
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
      },
      // FORMS
      // -----------------------------------------------------------------------
      'fieldset': {
        border: '0',
      },
      'label': {
        display: 'block',
        maxWidth: config('theme.decanter.base.inputMaxWidth'),
        fontSize: config('theme.decanter.base.inputFontSize'),
      },
      'legend': {
        ...config('theme.decanter.typography.typeB'),
        fontWeight: config('theme.fontWeight.bold'),
        lineHeight: config('theme.decanter.base.displayLineHeight')
      },
      'input[type="text"], input[type="email"], input[type="password"], input[type="url"]': {
        ...inputBase,
      },
      'input[type="radio"], input[type="checkbox"]': {
        backgroundColor: config('theme.colors.white'),
        borderWidth: '3px',
        borderColor: config('theme.colors.digital-blue.DEFAULT'),
        width: '2.4rem',
        height: '2.4rem',
      },
      'input[type="radio"]:checked, input[type="checkbox"]:checked': {
        backgroundColor: config('theme.colors.digital-blue.DEFAULT'),
      },
      'textarea': {
        ...inputBase,
        height: '16rem',
      },
      'select': {
        ...inputBase,
        backgroundColor: config('theme.color.white'),
      },
      'button, [type="button"], [type="submit"], [type="reset"], [type="image"]': {
        fontFamily: sans,
        ...config('theme.decanter.base.fontSmoothing'),
        cursor: 'pointer',
        display: 'inline-block',
        border: '0',
        fontSize: config('theme.decanter.base.baseFontSize'),
        fontWeight: config('theme.fontWeight.regular'),
        lineHeight: '1',
        textAlign: 'center',
        textDecoration: 'none',
        width: 'auto',
        transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
        padding: '1rem 2rem 1.15rem',
        backgroundColor: config('theme.colors.digital-red.DEFAULT'),
        color: config('theme.colors.white'),
        '&:active, &:hover, &:focus': {
          textDecoration: 'underline',
        },
        '&:hover, &:focus': {
          backgroundColor: config('theme.colors.black.DEFAULT'),
          color: config('theme.colors.white'),
        },
        '&:focus': {
          boxShadow: config('theme.boxShadow.DEFAULT'),
        },
      },
      //
      // LINKS
      // -----------------------------------------------------------------------
      'a': {
        color: config('theme.colors.digital-blue.DEFAULT'),
        textDecoration: 'underline',
        fontWeight: config('theme.fontWeight.semibold'),
        '&:hover, &:focus, &:active': {
          color: config('theme.colors.black.DEFAULT')
        },
      },
      // LISTS
      // -----------------------------------------------------------------------
      'ul': {
        margin: '1em inherit',
        paddingLeft: '1em',
        listStyleType: 'disc',
      },
      'ol': {
        margin: '1em inherit',
        paddingLeft: '1em',
        listStyleType: 'decimal',
      },
      'li': {
        lineHeight: config('theme.decanter.base.baseLineHeight'),
        marginBottom: '0.5em',
        '&:last-child': {
          marginBottom: '0',
        },
      },
      // TABLES
      // -----------------------------------------------------------------------
      'table': {
        margin: '2em 0',
        borderSpacing: '0',
        minWidth: '100%',
        'th': {
          padding: '1.5rem',
          border: '1px solid ' + config('theme.colors.foggy.dark'),
          backgroundColor: config('theme.colors.stone.light'),
          color: config('theme.colors.black.DEFAULT'),
          fontWeight: config('theme.fontWeight.regular'),
          textAlign: 'left',
        },
        'td': {
          padding: '1.5rem',
          border: '1px solid ' + config('theme.colors.foggy.dark'),
          backgroundColor: config('theme.colors.white'),
        },
        'thead': {
          'th': {
            backgroundColor: config('theme.colors.stone.light'),
          },
          'td': {
            backgroundColor: config('theme.colors.stone.light'),
          },
        },
        'tbody': {
          'th': {
            fontWeight: config('theme.fontWeight.regular'),
          },
        },
      },
    })
  }
}
