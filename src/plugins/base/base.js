/**
 * Base Styles
 */

module.exports = function () {
  return function ({ addBase, config }) {
    // Create a string from the config array.
    const sans = config('theme.fontFamily.sans').join(', ');

    // Heading defaults.
    const headings = config('theme.decanter.typography.headings');

    // Add the elements.
    addBase({
      html: {
        fontFamily: sans,
        color: config('theme.colors.black.DEFAULT'),
        ...config('theme.decanter.base.fontSmoothing'),
        fontSize: config('theme.decanter.base.rootFontSize'),
        lineHeight: '1.15', // This is our original html line height using normalize
      },
      body: {
        backgroundColor: config('theme.colors.white'),
        color: config('theme.colors.black.DEFAULT'),
        overflowX: 'hidden',
        fontSize: '1.8rem',
        '@screen md': {
          fontSize: '1.9rem',
        },
        '@screen 2xl': {
          fontSize: '2.1rem',
        },
      },
      p: {
        lineHeight: config('theme.lineHeight.cozy'),
        marginTop: '0',
        marginBottom: '1em',
        '@screen md': {
          lineHeight: config('theme.lineHeight.DEFAULT'),
        },
      },
      // HEADINGS
      // -----------------------------------------------------------------------
      h1: {
        ...headings,
        ...config('theme.decanter.typography.type5'),
      },
      h2: {
        ...headings,
        ...config('theme.decanter.typography.type4'),
      },
      h3: {
        ...headings,
        ...config('theme.decanter.typography.type3'),
      },
      h4: {
        ...headings,
        ...config('theme.decanter.typography.type2'),
      },
      h5: {
        ...headings,
        ...config('theme.decanter.typography.type1'),
      },
      h6: {
        ...headings,
        ...config('theme.decanter.typography.type0'),
      },
      // MISC
      // -----------------------------------------------------------------------
      cite: {
        fontStyle: 'normal',
      },
      var: {
        fontStyle: 'normal',
      },
      address: {
        fontStyle: 'normal',
      },
      dfn: {
        fontStyle: 'normal',
      },
      'pre, code, kbd, samp': {
        fontSize: '0.9em',
      },
      // Images
      // -----------------------------------------------------------------------
      figure: {
        margin: '0',
      },
      figcaption: {
        marginTop: '0.4em',
        fontSize: 'max(1.6rem, 0.9em)', //
        lineHeight: '1.3',
        color: config('theme.colors.cool-grey'),
      },
      img: {
        margin: '0',
        padding: '0',
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
      },
      // LINKS
      // -----------------------------------------------------------------------
      a: {
        color: config('theme.colors.digital-blue.DEFAULT'),
        textDecoration: 'underline',
        fontWeight: config('theme.fontWeight.semibold'),
        '&:hover, &:focus': {
          color: config('theme.colors.black.DEFAULT'),
        },
      },
      // LISTS
      // -----------------------------------------------------------------------
      ul: {
        paddingLeft: '1em',
        listStyleType: 'disc',
      },
      ol: {
        paddingLeft: '1em',
        listStyleType: 'decimal',
      },
      'li, dd': {
        lineHeight: config('theme.decanter.base.baseLineHeight'),
        marginBottom: '0.5em',
        '&:last-child': {
          marginBottom: '0',
        },
      },
      dt: {
        fontWeight: config('theme.fontWeight.bold'),
      },
      // TABLES
      // -----------------------------------------------------------------------
      table: {
        margin: '0',
        borderSpacing: '0',
        borderCollapse: 'collapse',
        minWidth: '100%',
        fontSize: '1.6rem',
        '@screen md': {
          fontSize: '1.8rem',
        },
        caption: {
          marginBottom: '0.6em',
          fontSize: '0.9em',
          lineHeight: '1.3',
          color: config('theme.colors.cool-grey'),
        },
        tr: {
          borderTop: `1px solid ${config('theme.colors.black.20')}`,
        },
        'th, td': {
          padding: '1.5rem',
        },
        th: {
          color: config('theme.colors.black.DEFAULT'),
          fontWeight: config('theme.fontWeight.semibold'),
          textAlign: 'left',
        },
        'thead, tbody': {
          'tr:first-of-type': {
            borderTop: '0',
          },
        },
        'thead + tbody': {
          borderTop: `1px solid ${config('theme.colors.black.20')}`,
        },
      },
    });
  };
};
