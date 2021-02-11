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
  return function ({ addUtilities, theme, prefix }) {
    const colors = flattenColorPalette(theme('textColor'))
    const utilities = {}

    for (const [key, value] of Object.entries(colors)) {
      utilities[prefix('.link-' + key)] = {
        'a': {
          color: value
        }
      }

      utilities['.hover\\:' + prefix('.link-').replace('.', '') + key] = {
        'a:hover': {
          color: value
        }
      }

      utilities['.focus\\:' + prefix('.link-').replace('.', '') + key] = {
        'a:focus': {
          color: value
        }
      }

      utilities['.visited\\:' + prefix('.link-').replace('.', '') + key] = {
        'a:visited': {
          color: value
        }
      }
    }

    addUtilities(utilities, { variants: [], respectPrefix: false })
  }
}
