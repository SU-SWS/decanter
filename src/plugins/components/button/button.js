module.exports = function () {
  return function ({ addComponents, theme, config }) {
    const sans = config('theme.fontFamily.sans').join(', ');

    const button = {
      '.button': {
        padding: '1rem 2rem 1.15rem',
        display: 'inline-block',
        width: 'auto',
        border: 'none',
        backgroundColor: theme('colors.digital-red.default'),
        color: theme('colors.white'),
        textAlign: 'center',
        fontFamily: sans,
        fontWeight: '400',
        transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
      },
    }

    addComponents(button)
  }
}
