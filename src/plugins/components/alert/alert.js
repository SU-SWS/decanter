/**
 * [description]
 * @return {[type]} [description]
 */
module.exports = function () {
  return function ({ addComponents, theme, variants }) {
    const alert = {
      '.alert': {
        padding: '2rem',
        backgroundColor: theme('colors.foggy.light'),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '4rem',
        color: theme('colors.black.DEFAULT')
      }
    }

    addComponents(alert)
  }
}
