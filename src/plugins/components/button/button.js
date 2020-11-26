/**
 * [description]
 * @return {[type]} [description]
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {
    const sans = config('theme.fontFamily.sans');

    const button = {
      '.button': {
        padding: '1rem 2rem 1.15rem',
        display: 'inline-block',
        width: 'auto',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: theme('colors.digital-red.DEFAULT'),
        color: theme('colors.white'),
        textAlign: 'center',
        fontFamily: sans,
        fontWeight: theme('fontWeight.regular'),
        lineHeight: theme('lineHeight.none'),
        transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
        '&:hover, &:focus, &:active': {
          backgroundColor: theme('colors.black.DEFAULT'),
          textDecoration: 'underline',
        },
      },
      '.button--big': {
        padding: '1.3rem 2.8rem 1.5rem',
        fontSize: '2.5rem',
        '@screen md': {
          padding: '1.5rem 3rem 1.8rem',
          fontSize: '2.8rem',
        },
        '@screen 2xl': {
          padding: '1.5rem 3rem 1.8rem',
          fontSize: '3rem',
        },
      },
      '.button--secondary': {
        backgroundColor: theme('colors.white'),
        color: theme('colors.digital-red.DEFAULT'),
        boxShadow: 'inset 0 0 0 2px ' + theme('colors.digital-red.DEFAULT'),
        '&:hover, &:focus, &:active': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.black.DEFAULT'),
          boxShadow: 'inset 0 0 0 2px ' + theme('colors.black.DEFAULT'),
        },
      },
    }

    addComponents(button)
  }
}
