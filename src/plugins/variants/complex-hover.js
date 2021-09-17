/**
 * Writing mode
 */
module.exports = function () {
  return function ({ addVariant, e }) {
    addVariant("complex-hover", ({ modifySelectors, separator }) => {
      modifySelectors(({ selector }) => {
        let saniselector = selector.substr(1, selector.length);
        return `.hover${separator}${saniselector}:hover`;
      });
    });
  };
};
