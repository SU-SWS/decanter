/**
 * Writing mode
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      // @deprecated One-off utility for a rarely used property. Use the arbitrary
      // property `[writing-mode:vertical-lr]` instead. Will be removed in v8.
      '.text-vertical-lr': {
        writingMode: 'vertical-lr',
      },
    };

    addUtilities(newUtilities);
  };
};
