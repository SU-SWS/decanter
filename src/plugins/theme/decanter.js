/**
 * Decanter Variables.
 */
module.exports = function () {
  // Shared vars.
  const fontSmoothing = {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  };

  // Psuedo storage since we don't have access to the `theme()` at this point.
  const theme = {};
  // eslint-disable-next-line global-require
  theme.fontWeight = require("./fontWeight")();
  // eslint-disable-next-line global-require
  theme.lineHeight = require("./lineHeight")();

  const modtype = {};


  // Generate modular typography steps from 1 to 9
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 10; i++) {
    modtype[`type${i}`] = {
      fontSize: `${(1.15 ** i).toFixed(2)}em`,
      letterSpacing: `${(-0.01 - (i - 1) * 0.002).toFixed(3)}em`,
      "@screen md": {
        fontSize: `${(1.2 ** i).toFixed(2)}em`,
      },
      "@screen lg": {
        fontSize: `${(1.25 ** i).toFixed(2)}em`,
      },
    };
  }

  // Returned values.
  return {
    base: {
      rootFontSize: "62.5%",
      baseFontSize: "2.1rem",
      mobileFontScale: "0.85",
      baseLineHeight: "1.5",
      fontSmoothing,
      inputMaxWidth: "46rem",
      inputFontSize: "1.8rem",
      modularScale: "1.25",
    },
    screenMargins: {
      xs: "20px",
      sm: "30px",
      md: "50px",
      lg: "80px",
      xl: "100px",
      "2xl": "100px",
    },
    baseBodyFontSize: {
      xs: "1.8rem",
      md: "1.9rem",
      "2xl": "2.1rem",
    },
    // Shared settings between base and components.
    typography: {
      headings: {
        lineHeight: theme.lineHeight.display,
        marginBottom: "0.6em",
        clear: "both",
        fontWeight: theme.fontWeight.bold,
        a: {
          textDecoration: "none",
          fontWeight: theme.fontWeight.bold,
        },
      },
      type0: {
        fontSize: "1em",
      },
      ...modtype,
    },
  };
};
