/**
 * Backface visibility utility for resolving performance/rendering issues
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
    };

    addUtilities(newUtilities);
  };
};
