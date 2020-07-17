
module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      'body': {
        backgroundColor: config('theme.colors.white'),
        overflowX: 'hidden',
      }
    })
  }
}
