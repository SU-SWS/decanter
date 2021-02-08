/**
 * Smooth scrolling - use this in the HTML tag to enable scrolling animation when clicking on anchor links
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.smooth-scroll': {
        scrollBehavior: 'smooth'
      },
    }

    addUtilities(newUtilities)
  }
}
