/**
 * For displaying the Stanford University logo using custom font and glyphs.
 * Can be used with the generic logo twig template.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {

    var stanford = config('theme.fontFamily.stanford').join(", ");

    const components = {
      '.brand-bar': {
        width: '100%',
        height: '30px',
        backgroundColor: theme('colors.digital-red.DEFAULT'),
        '.logo': {
          fontFamily: stanford,
          marginTop: '8px',
          fontSize: '20px'
        },
      },
    }

    addComponents(components)
  }
}
