/**
 * @see https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/flattenColorPalette.js
 */
const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(colors).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  )

/**
 * Link colors in paragraphs, WYSIWYG, or nested in components with open fields.
 */
module.exports = function () {
  return function ({ addUtilities, theme, variants }) {
    const colors = flattenColorPalette(theme('textColor'))
    const utilities = {}

    for (const [key, value] of Object.entries(colors)) {
      utilities['.link-' + key] = {
        'a': {
          color: value
        }
      }
    }

    addUtilities(utilities, variants('linkColor'))
  }
}
