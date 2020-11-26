/**
 * Skip to content/something links.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {
    const sans = config('theme.fontFamily.sans');

    const components = {
      '.skiplinks': {
        '@media print': {
          display: 'none',
        },
        padding: '0',
        fontFamily: sans,
        backgroundColor: theme('colors.black.DEFAULT'),
        color: theme('colors.white'),
        fontSize: '0.75em',
        fontWeight: theme('fontWeight.regular'),
        textDecoration: 'none',
        minHeight: '1px',
        position: 'absolute',
        top: '-500px',
        left: '0.8em',
        transitionDuration: '0.25s',
        transitionProperty: 'top',
        transitionTimingFunction: 'ease-in-out',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        '&:hover': {
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
        '&:visited': {
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
        '&:active': {
          padding: '.4em .8em',
          height: 'auto',
          width: 'auto',
          color: theme('colors.white'),
          border: '1px solid ' + theme('colors.black.DEFAULT'),
          borderRadius: '3px',
          position: 'fixed',
          left: '.8em',
          top: '.8em',
          zIndex: '11222',
        },
        '&:focus': {
          padding: '.4em .8em',
          height: 'auto',
          width: 'auto',
          color: theme('colors.white'),
          border: '1px solid ' + theme('colors.black.DEFAULT'),
          borderRadius: '3px',
          position: 'fixed',
          left: '.8em',
          top: '.8em',
          zIndex: '11222',
        },
      },
    }

    addComponents(components)
  }
}
