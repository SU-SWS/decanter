module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      'body': {
        backgroundColor: theme('colors.white'),
        overflowX: 'hidden',
      }
    })
  }
}
