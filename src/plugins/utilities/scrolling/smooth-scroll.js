/**
 * Smooth scrolling
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      // For no borders at all.
      '.smooth-scroll': {
        scrollBehavior: 'smooth'
      },
    }

    addUtilities(newUtilities)
  }
}
