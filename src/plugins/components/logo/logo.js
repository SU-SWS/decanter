/**
 * For displaying the Stanford University logo using custom font and glyphs.
 * Can be used with the generic logo twig template.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {
    const stanford = config('theme.fontFamily.stanford').join(', ');

    const components = {
      '.logo': {
        display: 'inline-block',
        fontFamily: stanford,
        color: theme('colors.cardinal-red.default'),
        fontStyle: 'normal',
        fontWeight: theme('fontWeight.regular'),
        fontVariant: 'normal',
        textTransform: 'none',
        textDecoration: 'none',
        lineHeight: '0.75',
        '-webkit-transform': 'translateZ(0)',
        transform: 'translateZ(0)',
        letterSpacing: 0,
        '-webkit-font-feature-settings': '"liga"',
        '-ms-font-feature-settings': '"liga" 1',
        fontFeatureSettings: '"liga"',
        '-webkit-font-variant-ligatures': 'discretionary-ligatures',
        'font-variant-ligatures': 'discretionary-ligatures',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '&:active': {
          color: theme('colors.cardinal-red.default'),
        },
        '&:focus': {
          color: theme('colors.cardinal-red.default'),
        },
        '&:hover': {
          color: theme('colors.cardinal-red.default'),
        },
      },
    }

    addComponents(components)
  }
}
