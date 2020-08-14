/**
 * For displaying the Stanford University department signature
 * Links to the site's homepage
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {

    const components = {
      '.lockup': {
        '&, > a': {
          '@screen md': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            JustifyContent: 'flex-start',
            verticalAlign: 'bottom',
          },
        },
        'a': {
          fontWeight: theme('fontWeight.regular'),
          textDecoration: 'none',
        },
        '&__cell1': {
          width: 'auto',
          fontSize: '36px',
          minHeight: '26px',
          verticalAlign: 'bottom',
          '@screen md': {
            display: 'flex',
            flexShrink: '1',
            alignSelf: 'flex-end',
            marginRight: '-1px',
            paddingRight: '7px',
            paddingBottom: '0',
            maxWidth: '160px',
            minHeight: '32px',
            borderRight: '1px solid ' + theme('colors.black.default'),
          },
        },
        '&__cell2': {
          '@screen md': {
            paddingTop: '0',
            paddingLeft: '7px',
            alignSelf: 'flex-end',
            borderLeft: '1px solid ' + theme('colors.black.default'),
            flexGrow: '1',
            verticalAlign: 'bottom',
          },
        },
        '.logo': {
          color: theme('colors.cardinal-red.default'),
          fontSize: '36px',
          lineHeight: '17px',
          verticalAlign: 'bottom',

          '@screen md': {
            fontSize: '46px',
            lineHeight: '21px',
          },
        },
        '&__wordmark-wrapper': {
          lineHeight: '26px',

          '@screen md': {
            lineHeight: '32px',
          },
        },
        '&__line1, &__line2, &__line3, &__line4, &__line5': {
          display: 'block',
          color: theme('colors.black.default'),
        },
        '&__line1': {
          fontSize: '2.6rem',
          '@screen md': {
            fontSize: '2.8rem',
          },
        },
        '&__line2': {
          fontSize: '2.6rem',
        },
        '&__line3': {
          margin: '0',
          fontStyle: 'italic',
          fontSize: '1.9rem',
          '@screen md': {
            marginTop: '0.5rem',
            fontSize: '2.6rem',
          },
        },
        '&__line4': {
          marginTop: '0.5rem',
          marginLeft: '-0.2rem',
          fontSize: '2.5rem',
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '0.05rem',
          lineHeight: theme('lineHeight.none'),
          textTransform: 'uppercase',
        },
        '&__line5': {
          fontSize: '2.7rem',
          lineHeight: theme('lineHeight.none'),
          width: '100%',
          '@screen md': {
            marginTop: '8px',
            fontSize: '3rem',
          },
        },
      },
      // Lockup option D: Unit + Level (1 line)
      '.lockup--option-d': {
        '.lockup__line2, .lockup__line4, .lockup__line5': {
          display: 'none',
        },
        '.lockup__line1': {
          marginTop: '0.5rem',
          marginBottom: '0.2rem',
          marginLeft: '-0.2rem',
          '@screen md': {
            marginTop: '-0.7rem',
          },
        },
        '.lockup__line3': {
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '0.7em',
          },
        },
      },
      // Lockup option N: Unit (1 line)
      '.lockup--option-n': {
        '.lockup__line2, .lockup__line3, .lockup__line4, .lockup__line5': {
          display: 'none',
        },
        '.lockup__line1': {
          marginTop: '0.5rem',
          marginLeft: '-0.2rem',
          lineHeight: '2.6rem',
          '@screen md': {
            fontSize: '3.2rem',
            lineHeight: '2.24rem',
          },
        },
      },
    }

    addComponents(components)
  }
}
