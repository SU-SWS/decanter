/**
 * @see https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/flattenColorPalette.js
 */
const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(colors).flatMap(([color, values]) =>
      typeof values === "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  );

/**
 * Link colors in paragraphs, WYSIWYG, or nested in components with open fields.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {
    const colors = flattenColorPalette(theme("textColor"));
    const utilities = {};

    Object.entries(colors).forEach((entry) => {
      const [key, value] = entry;
      utilities[`.link-${key}`] = {
        a: {
          color: value,
        },
      };
    });

    addUtilities(utilities);
  };
};
