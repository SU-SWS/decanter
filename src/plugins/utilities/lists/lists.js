/**
 * List styles.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      // For no styles at all.
      '.list-unstyled': {
        marginTop: '0',
        marginBottom: '0',
        paddingLeft: '0',
        listStyleType: 'none',
      },
      // Horizontal Lists.
      '.list-horizontal': {
        padding: '0',
        margin: '0',
        listStyleType: 'none',
        overflow: 'hidden',
        '> li': {
          display: 'block',
          float: 'left',
          '&:last-child': {
            marginRight: '0',
          },
        },
      },
    }

    addUtilities(newUtilities)
  }
}
