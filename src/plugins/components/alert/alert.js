module.exports = function () {
  return function ({ addComponents, theme }) {
    const alert = {
      '.alert': {
        padding: '2rem',
        backgroundColor: theme('colors.fog.light'),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '4rem',
        color: theme('colors.black.default')
      },
      '.alert--info': {
        backgroundColor: theme('colors.sky.dark'),
        backgroundImage: 'alert-info.svg',
        color: theme('colors.white')
      },
    }

    addComponents(alert)
  }
}
