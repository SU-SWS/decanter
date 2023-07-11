/**
 * Decanter Variables.
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = function () {
  // Shared vars.
  const fontSmoothing = {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  };

  // Psuedo storage since we don't have access to the `theme()` at this point.
  const theme = {};
  // eslint-disable-next-line global-require
  theme.lineHeight = require('./lineHeight')();

  const modtype = {};

  // Decanter's reponsive modular typography system
  // type-0 is the base step = 1em
  // type-1 to type-9 (largest) available
  // Each step includes difference font sizes and letterspacing for mobile, tablet and desktop breakpoints
  // Generate responsive modular typography steps from 1 to 9
  for (let i = 1; i < 10; i += 1) {
    modtype[`type${i}`] = {
      fontSize: `${(1.15 ** i).toFixed(2)}em`,
      letterSpacing: `${(-0.01 - (i - 1) * 0.002).toFixed(3)}em`,
      '@screen md': {
        fontSize: `${(1.2 ** i).toFixed(2)}em`,
      },
      '@screen lg': {
        fontSize: `${(1.25 ** i).toFixed(2)}em`,
      },
    };
  }

  // Returned values.
  return {
    base: {
      rootFontSize: '62.5%',
      baseLineHeight: '1.5',
      fontSmoothing,
      inputFontSize: '1.8rem',
      modularScale: '1.25',
    },
    screenMargins: {
      xs: '20px',
      sm: '30px',
      md: '50px',
      lg: '80px',
      xl: '100px',
      '2xl': '100px',
    },
    // Shared settings between base and components.
    typography: {
      headings: {
        lineHeight: theme.lineHeight.display,
        marginBottom: '0.6em',
        clear: 'both',
        fontWeight: defaultTheme.fontWeight.bold,
        a: {
          textDecoration: 'none',
          fontWeight: defaultTheme.fontWeight.bold,
        },
      },
      type0: {
        fontSize: '1em', // Base step for our modular typography system
      },
      ...modtype,
    },
  };
};
