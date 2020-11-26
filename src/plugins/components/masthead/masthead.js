/**
 * The Stanford global header element
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {

    const components = {
      '.masthead': {
        position: 'relative',
        maxWidth: '100%',
        backgroundColor: theme('colors.white'),
        boxShadow: theme('boxShadow.DEFAULT'),
        '> div:last-child': {
          paddingTop: '2.31rem', // Todo: modular-spacing later
          '@screen md': {
            paddingTop: '2.6rem',
          },
          '@screen 2xl': {
            paddingTop: '2.74rem',
          },
        },
        '.lockup': {
          marginBottom: '1.6rem', // Todo: modular-spacing later
          maxWidth: 'fit-content',
          zIndex: '10010',
          '@screen md': {
            marginBottom: '1.8rem',
          },
          '@screen 2xl': {
            marginBottom: '1.9rem',
          },
        },
        '.site-search': {
          display: 'none',
          '@screen lg': {
            display: 'flex',
          },
          '> form': {
            marginLeft: 'auto',
            width: '100%',
            maxWidth: '100%',
            '@screen lg': {
              width: '30rem',
            },
          },
          'main-nav': { // Todo: more main-nav within masthead styles later
            marginTop: '-57px',
            zIndex: '9999',
            '@screen md': {
              marginTop: 'auto',
            },
          },
        },
      },
    }

    addComponents(components)
  }
}
