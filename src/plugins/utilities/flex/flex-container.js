/**
 * Flex container with basic flex properties
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    const newUtilities = {
      '.flex-container': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
    }

    addUtilities(newUtilities)
  }
}
