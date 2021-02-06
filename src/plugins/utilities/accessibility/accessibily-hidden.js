/**
 * Accessibility hidden from screen readers.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.accessibly-hidden, .a11y-hidden': {
        '&[aria-hidden="true"]': {
          display: 'none'
        }
      },
    }

    addUtilities(newUtilities)
  }
}
