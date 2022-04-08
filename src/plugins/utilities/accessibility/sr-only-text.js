/**
 * Screen Reader Only Text.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.sr-only-text': {
        overflow: 'hidden',
        textIndent: '101%',
        whiteSpace: 'nowrap',
      },
    };

    addUtilities(newUtilities);
  };
};
