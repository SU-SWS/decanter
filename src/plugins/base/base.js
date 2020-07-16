module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      'h1': { fontSize: '5rem' },
      'h2': { fontSize: '4rem' },
      'h3': { fontSize: '3rem' },
    })
  }
}
