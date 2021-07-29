/**
 * Writing mode
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      ".text-vertical-lr": {
        writingMode: "vertical-lr",
      },
    };

    addUtilities(newUtilities);
  };
};
