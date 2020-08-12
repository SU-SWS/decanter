module.exports = function () {
  return function ({ addComponents, config }) {
    const button = {
      '.button': {
        padding: '1rem 2rem 1.15rem',
      },
    }

    addComponents(button)
  }
}
