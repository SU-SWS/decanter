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
        lineHeight: '1.15', // This is our original html line height using normalize
      },
      'body': {
        backgroundColor: config('theme.colors.white'),
        overflowX: 'hidden',
        color: config('theme.colors.black.default'),
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
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      // HEADINGS
      // -----------------------------------------------------------------------
      'h1': {
        ...headings,
        ...config('theme.decanter.typography.typeA'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      'h2': {
        ...headings,
        ...config('theme.decanter.typography.typeB'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      'h3': {
        ...headings,
        ...config('theme.decanter.typography.typeC'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      'h4': {
        ...headings,
        ...config('theme.decanter.typography.typeD'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      'h5': {
        ...headings,
        ...config('theme.decanter.typography.typeE'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
      },
      'h6': {
        ...headings,
        ...config('theme.decanter.typography.typeF'),
        '+ ul': {
          marginBottom: '0',
        },
        '+ ol': {
          marginBottom: '0',
        },
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
        backgroundColor: config('theme.colors.digital-red.default'),
        color: config('theme.colors.white'),
        '&:active, &:hover, &:focus': {
          textDecoration: 'underline',
        },
        '&:hover, &:focus': {
          backgroundColor: config('theme.colors.black.default'),
          color: config('theme.colors.white'),
        },
        '&:focus': {
          boxShadow: config('theme.boxShadow.default'),
        },
      },
      // Checkbox and Radio Buttons.
      '[type="checkbox"], [type="radio"]': {
        border: 0,
        clip: "rect(1px, 1px, 1px, 1px)",
        '-webkit-clip-path': "inset(100%)",
        clipPath: "inset(100%)",
        height: "1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
        // Sibling Label.
        '+ label': {
          cursor: "pointer",
          fontWeight: config('theme.fontWeight.regular'),
          marginBottom: "0.5em",
          '&::before': {
            background: config('theme.colors.white'),
            borderRadius: '3px',
            boxShadow: '0 0 0 1px ' + config('theme.colors.fog.dark'),
            content: '""',
            display: 'inline-block',
            height: '1.8rem',
            lineHeight: '1.8rem',
            marginRight: '0.6em',
            textIndent: '0.15em',
            verticalAlign: 'middle',
            // Target IE 11 and below to vertically center inputs.
            width: '1.8rem',
          },
        },
        // Checked styles.
        '&:checked': {
          '+ label::before': {
            backgroundColor: config('theme.colors.digital-red.default'),
            boxShadow: '0 0 0 1px ' + config('theme.colors.digital-red.default'),
          },
        },
      },
      '[type="checkbox"]': {
        '&:checked': {
          '+ label::before': {
            backgroundColor: 'transparent',
            color: config('theme.colors.digital-red.default'),
            content: "'\\2713'",
          },
        },
      },
      // Radio only styles.
      '[type="radio"]': {
        '&:checked': {
          '+ label::before': {
            boxShadow: '0 0 0 2px ' + config('theme.colors.white') + ', 0 0 0 4px ' + config('theme.colors.digital-red.default'),
          },
        },
        '&:focus': {
          '+ label::before': {
            boxShadow: '0 0 0 2px ' + config('theme.colors.white') + ', 0 0 0 4px ' + config('theme.colors.digital-red.default') + ', 0 0 3px 4px ' + config('theme.colors.black.default') + ', 0 0 7px 4px ' + config('theme.colors.black.default'),
          },
        },
        '+ label': {
          '&::before': {
            boxShadow: '0 0 0 2px ' + config('theme.colors.white') + ', 0 0 0 3px ' + config('theme.colors.fog.dark'),
            height: '1.6rem',
            lineHeight: '1.6rem',
            width: '1.6rem',
            borderRadius: '100%',
          },
        },
      },
      // Range element.
      '[type="range"]': {
        '-webkit-appearance': 'none',
        border: 0,
        paddingLeft: 0,
        width: '100%',
      },
      '[type="range"]:focus': {
        boxShadow: 'none',
        outline: 'none',
      },
      '[type="range"]::-webkit-slider-runnable-track': {
        background: config('theme.colors.cool-grey'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        cursor: 'pointer',
        height: '1.2rem',
        width: '100%',
      },
      '[type="range"]::-moz-range-track': {
        background: config('theme.colors.cardinal-red.default'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        cursor: 'pointer',
        height: '1.2rem',
        width: '100%',
      },
      '[type="range"]::-ms-track': {
        background: 'transparent',
        color: 'transparent',
        cursor: 'pointer',
        height: '1.2rem',
        width: '100%',
      },
      '[type="range"]::-webkit-slider-thumb': {
        '-webkit-appearance': 'none',
        border: '1px solid ' + config('theme.colors.fog.dark'),
        height: '2.2rem',
        borderRadius: '1.5rem',
        background: config('theme.colors.cool-grey'),
        cursor: 'pointer',
        marginTop: '-0.65rem',
        width: '2.2rem',
      },
      '[type"range"]::-moz-range-thumb': {
        background: config('theme.colors.cool-grey'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        borderRadius: '1.5rem',
        cursor: 'pointer',
        height: '2.2rem',
        width: '2.2rem',
      },
      '[type="range"]::-ms-thumb': {
        background: config('theme.colors.cool-grey'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        borderRadius: '1.5rem',
        cursor: 'pointer',
        height: '2.2rem',
        width: '2.2rem',
      },
      '[type="range"]::-ms-fill-lower': {
        background: config('theme.colors.cool-grey'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        borderRadius: '2rem',
      },
      '[type="range"]::-ms-fill-upper': {
        background: config('theme.colors.cool-grey'),
        border: '1px solid ' + config('theme.colors.fog.dark'),
        borderRadius: '2rem',
      },
      '[type="range"]:focus::-webkit-slider-thumb': {
        border: '2px solid ' + config('theme.colors.fog.dark'),
      },
      '[type="range"]:focus::-moz-range-thumb': {
        border: '2px solid ' + config('theme.colors.fog.dark'),
      },
      '[type="range"]:focus::-ms-thumb': {
        border: '2px solid ' + config('theme.colors.fog.dark'),
      },
      //
      // LINKS
      // -----------------------------------------------------------------------
      'a': {
        color: config('theme.colors.bright-blue.default'),
        textDecoration: 'underline',
        fontWeight: config('theme.fontWeight.semibold'),
        '&:hover, &:focus, &:active': {
          color: config('theme.colors.black.default')
        },
      },
      // LISTS
      // -----------------------------------------------------------------------
      'ul': {
        margin: '1em inherit',
        paddingLeft: '1em',
      },
      'ol': {
        margin: '1em inherit',
        paddingLeft: '1em',
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
          border: '1px solid ' + config('theme.colors.fog.dark'),
        },
        'td': {
          padding: '1.5rem',
          border: '1px solid ' + config('theme.colors.fog.dark'),
        },
        'th': {
          backgroundColor: config('theme.colors.stone.light'),
          color: config('theme.colors.black.default'),
          fontWeight: config('theme.fontWeight.regular'),
          textAlign: 'left',
        },
        'td': {
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
