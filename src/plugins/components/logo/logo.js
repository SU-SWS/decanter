module.exports = function () {
  return function ({ addComponents, theme, config }) {
    const stanford = config('theme.fontFamily.stanford').join(', ');

    const logo = {
      '.logo': {
        display: 'inline-block',
        fontFamily: stanford,
        fontWeight: theme('fontWeight.regular'),
        lineHeight: '0.75',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontVariant: 'normal',
        letterSpacing: '0',
        color: theme('colors.cardinal-red.default'),
        fontFeatureSettings: '"liga" 1',
        fontVariantLigatures: 'discretionary-ligatures',
        '&:hover, &:focus, &:active': {
          color: theme('colors.cardinal-red'),
        },
      },
    }

    addComponents(logo)
  }
}
