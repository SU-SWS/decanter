/**
 * Flex row container with Decanter responsive gutter
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {
    const newUtilities = {
      '.flex-container': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginLeft: parseInt(theme('gap.xs'), 10) / -2,
        marginRight: parseInt(theme('gap.xs'), 10) / -2,
        ' > *': {
          paddingLeft: parseInt(theme('gap.xs'), 10) / 2,
          paddingRight: parseInt(theme('gap.xs'), 10) / 2,
        },
        '@screen lg': {
          marginLeft: parseInt(theme('gap.lg'), 10) / -2,
          marginRight: parseInt(theme('gap.lg'), 10) / -2,
          ' > *': {
            paddingLeft: parseInt(theme('gap.lg'), 10) / 2,
            paddingRight: parseInt(theme('gap.lg'), 10) / 2,
          }
        },
        '@screen xl': {
          marginLeft: parseInt(theme('gap.xl'), 10) / -2,
          marginRight: parseInt(theme('gap.xl'), 10) / -2,
          ' > *': {
            paddingLeft: parseInt(theme('gap.xl'), 10) / 2,
            paddingRight: parseInt(theme('gap.xl'), 10) / 2,
          }
        },
        '@screen 2xl': {
          marginLeft: parseInt(theme('gap.2xl'), 10) / -2,
          marginRight: parseInt(theme('gap.2xl'), 10) / -2,
          ' > *': {
            paddingLeft: parseInt(theme('gap.2xl'), 10) / 2,
            paddingRight: parseInt(theme('gap.2xl'), 10) / 2,
          }
        }
      },
    }

    addUtilities(newUtilities)
  }
}
