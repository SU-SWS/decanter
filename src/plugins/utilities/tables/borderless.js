/**
 * Borderless table styles.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      // For no borders at all.
      '.table-borderless': {
        'thead, tbody, tfoot': {
          'tr, th, td': {
            border: '0',
          },
        },
        'thead + tbody': {
          border: '0',
        }
      }
    }

    addUtilities(newUtilities)
  }
}
