/**
 * Table styles.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      // For no borders at all.
      '.table-borderless': {
        'thead': {
          'tr': {
            backgroundColor: 'transparent',
          },
          'th': {
            borderTop: '0',
          },
        },
        'th': {
          borderLeft: '0',
          borderRight: '0',
        },
        'td': {
          borderLeft: '0',
          borderRight: '0',
        },
      },
    }

    addUtilities(newUtilities)
  }
}
