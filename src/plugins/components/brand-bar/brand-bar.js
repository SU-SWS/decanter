/**
 * For displaying the Stanford University logo using custom font and glyphs.
 * Can be used with the generic logo twig template.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {

    const components = {
      '.brand-bar': {
        width: '100%',
        height: '30px',
        backgroundColor: theme('colors.cardinal-red.default'),
        '.logo': {
          marginTop: '8px',
          fontSize: '20px',
          color: theme('colors.white'),
        },
      },
    }

    addComponents(components)
  }
}
