/**
 * A Stanford global footer as specified by the Identity Guidelines.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {

    const components = {
      '.global-footer': {
        backgroundColor: theme('colors.cardinal-red.DEFAULT'),
        color: theme('colors.white'),
        paddingTop: '2.31rem',
        paddingBottom: '2.31rem', // Todo: modular-spacing later
        '@screen md': {
          paddingTop: '2.6rem',
          paddingBottom: '2.6rem',
        },
        '@screen 2xl': {
          paddingTop: '2.74rem',
          paddingBottom: '2.74rem',
        },
        'a': {
          color: theme('colors.white'),
          textDecoration: 'none',
          fontWeight: theme('fontWeight.semibold'),
          '&:hover, &:focus': {
            color: theme('colors.white'),
            textDecoration: 'underline',
          }
        },
        'nav': {
          marginBottom: '1rem',
          display: 'flex',
          flex: '0 0 auto',
          justifyContent: 'center',
          '@screen sm': {
            display: 'block',
            marginBottom: '1.3rem',
          }
        },
      },
      '.global-footer__container': {
        '@screen lg': {
          display: 'flex',
        }
      },
      '.global-footer__brand': {
        paddingTop: '0.5rem',
        textAlign: 'center',
        marginBottom: '0.8rem',
        '@screen xl': {
          marginBottom: '0',
        },
        'a': {
          color: theme('colors.white'),
          fontSize: '3.2rem',
          fontWeight: theme('fontWeight.regular'),
          '@screen sm': {
            fontSize: '3.4rem',
          },
          '&:hover, &:focus': {
            textDecoration: 'none',
          },
        },
      },
      '.global-footer__content': {
        flexGrow: '1',
        '@screen sm': {
          textAlign: 'center',
        },
        '@screen md': {
          textAlign: 'center',
        },
        '@screen lg': {
          textAlign: 'left',
          paddingLeft: '4.5rem',
        },
        '@screen xl': {
          paddingLeft: '5.2rem',
        },
      },
      '.global-footer__menu': {
        marginBottom: '1rem',
        padding: '0',
        fontSize: '1.5rem',
        listStyleType: 'none',
        'li': {
          margin: '0',
          padding: '0.25em 0',
          display: 'block',
          '@screen sm': {
            display: 'inline-block',
            marginRight: '1rem',
            lineHeight: '1.1',
          },
          '@screen md': {
            marginRight: '2rem',
          },
          '@screen lg': {
            marginRight: '2.8rem',
            padding: '0',
            textAlign: 'left',
          },
          '&:last-child': {
            marginRight: '0',
          },
        },
        '&--global': {
          paddingRight: '1.9rem',
          '@screen sm': {
            paddingRight: '0',
          },
          '@screen md': {
            fontSize: '1.7rem',
          },
          '@screen 2xl': {
            fontSize: '1.8rem',
          },
        },
        '&--policy': {
          paddingLeft: '1.9rem',
          '@screen sm': {
            paddingLeft: '0',
            fontSize: '1.4rem',
            'a': {
              fontWeight: theme('fontWeight.regular'),
            }
          },
          '@screen md': {
            fontSize: '1.5rem',
          },
          '@screen xl': {
            fontSize: '1.6rem',
          },
        },
      },
      '.global-footer__copyright': {
        fontSize: '1.34rem',
        textAlign: 'center',
        '@screen sm': {
          fontSize: '1.4rem',
        },
        '@screen lg': {
          textAlign: 'left',
        },
        'span': {
          whiteSpace:'nowrap',
        },
      },
    }

    addComponents(components)
  }
}
