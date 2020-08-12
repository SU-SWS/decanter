/**
 * Decanter Variables.
 */
module.exports = function () {

  // Shared vars.
  const fontSmoothing = {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  };

  // Sudo storage since we don't have access to the `theme()` at this point.
  var theme = {};
  theme.fontWeight = require('./fontWeight')();

  // Returned values.
  return {
    base: {
      rootFontSize: '62.5%',
      baseFontSize: '2rem',
      mobileFontScale: '0.85',
      baseLineHeight: '1.4em',
      fontSmoothing: fontSmoothing,
    },
    // Shared settings between base and components.
    typography: {
      headings: {
        letterSpacing: '-0.016em',
        lineHeight: '1.2em',
        clear: 'both',
        fontWeight: theme.fontWeight.bold,
        ...fontSmoothing,
        'a': {
          textDecoration: 'none',
          fontWeight: theme.fontWeight.bold,
        },
      },
      typeA: {
        fontSize: '2.0751953125em',
        '@screen md': {
          fontSize: '2.44140625em',
        },
      },
      typeB: {
        fontSize: '1.66015625em',
        '@screen md': {
          fontSize: '1.953125em',
        }
      },
      typeC: {
        fontSize: '1.5625em',
      },
      typeD: {
        fontSize: '1.25em',
      },
      typeE: {
        fontSize: '1em',
      },
      typeF: {
        fontSize: '0.9em',
      },
    }
  }
}
