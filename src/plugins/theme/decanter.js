/**
 * Decanter Variables.
 */
module.exports = function () {

  // Shared vars.
  const fontSmoothing = {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  };

  // Psuedo storage since we don't have access to the `theme()` at this point.
  var theme = {};
  theme.fontWeight = require('./fontWeight')();
  theme.lineHeight = require('./lineHeight')();

  // Returned values.
  return {
    base: {
      rootFontSize: '62.5%',
      baseFontSize: '2rem',
      mobileFontScale: '0.85',
      baseLineHeight: '1.4',
      fontSmoothing: fontSmoothing,
      inputMaxWidth: '46rem',
      inputFontSize: '1.8rem',
      modularScale: '1.25',
    },
    screenMargins: {
      'xs': '20px',
      'sm': '30px',
      'md': '50px',
      'lg': '80px',
      'xl': '100px',
      '2xl': '100px',
    },
    baseBodyFontSize: {
      'xs': '1.6rem',
      'md': '1.8rem',
      '2xl': '1.9rem',
    },
    // Shared settings between base and components.
    typography: {
      headings: {
        lineHeight: theme.lineHeight.display,
        marginBottom: '0.6em',
        clear: 'both',
        fontWeight: theme.fontWeight.bold,
        ...fontSmoothing,
        'a': {
          textDecoration: 'none',
          fontWeight: theme.fontWeight.bold,
        },
      },
      type6: {
        fontSize: '2.6em',
        letterSpacing: '-0.018em',
        '@screen md': {
          fontSize: (1.25 ** 6).toFixed(2) + 'em',
        },
      },
      type5: {
        fontSize: '2.6em',
        letterSpacing: '-0.018em',
        '@screen md': {
          fontSize: (1.25 ** 5).toFixed(2) + 'em',
        },
      },
      type4: {
        fontSize: '2.08em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: (1.25 ** 4).toFixed(2) + 'em',
        },
      },
      type3: {
        fontSize: '1.66em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: (1.25 ** 3).toFixed(2) + 'em',
        }
      },
      type2: {
        fontSize: (1.25 ** 2).toFixed(2) + 'em',
        letterSpacing: '-0.012em',
      },
      type1: {
        fontSize: '1.25em',
        letterSpacing: '-0.01em',
      },
      type0: {
        fontSize: '1em',
      },
    },
  }
}
