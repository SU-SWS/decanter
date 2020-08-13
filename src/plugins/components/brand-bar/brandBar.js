module.exports = function () {
  return function ({ addComponents, theme, config }) {

    const brandBar = {
      '.brand-bar': {
        width: '100%',
        height: '30px',
        backgroundColor: theme('colors.cardinal-red.default'),
        ' .logo': {
          marginTop: '8px',
          fontSize: '20px',
          color: theme('colors.white'),
        },
      },
    }

    addComponents(brandBar)
  }
}
