module.exports = function () {
  return function ({ addComponents, theme, variants }) {
    const alert = {
      '.alert': {
        padding: '2rem',
        backgroundColor: '#f4f4f4',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '4rem',
        color: '#2e2d29'
      },
      '.alert--info': {
        backgroundColor: '#006cb8',
        backgroundImage: 'alert-info.svg',
        color: '#ffffff'
      },
    }

    addComponents(alert)
  }
}
