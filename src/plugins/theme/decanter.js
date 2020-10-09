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
        clear: 'both',
        fontWeight: theme.fontWeight.bold,
        ...fontSmoothing,
        'a': {
          textDecoration: 'none',
          fontWeight: theme.fontWeight.bold,
        },
      },
      typeA: {
        fontSize: '2.08em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: '2.44em',
        },
      },
      typeB: {
        fontSize: '1.66em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: '1.95em',
        }
      },
      typeC: {
        fontSize: '1.56em',
        letterSpacing: '-0.012em',
      },
      typeD: {
        fontSize: '1.25em',
        letterSpacing: '-0.01em',
      },
      typeE: {
        fontSize: '1em',
      },
      typeF: {
        fontSize: '0.9em',
      },
    },
  }
}
