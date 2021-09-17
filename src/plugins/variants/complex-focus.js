/**
 * Writing mode
 */
module.exports = function () {
  return function ({ addVariant, e }) {
    addVariant("complex-focus", ({ modifySelectors, separator }) => {
      modifySelectors(({ selector }) => {
        let saniselector = selector.substr(1, selector.length);
        return `.focus${separator}${saniselector}:focus`;
      });
    });
  };
};
