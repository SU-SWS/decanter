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
          }
        },
        'a': {
          fontWeight: theme('fontWeight.regular'),
          textDecoration: 'none',
        },
        '&__cell1': {
          width: 'auto',
          fontSize: '36px',
          minHeight: '26px',
          verticalAlign: 'botton',
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
          }
        },
        '&__cell2': {
          '@screen md': {
            paddingTop: '0',
            paddingLeft: '7px',
            alignSelf: 'flex-end',
            borderLeft: '1px solid ' + theme('colors.black.default'),
            flexGrow: '1',
            verticalAlign: 'bottom',
          }
        },
        '.logo': {
          color: theme('colors.cardinal-red.default'),
          fontSize: '36px',
          lineHeight: '17px',
          verticalAlign: 'bottom',

          '@screen md': {
            fontSize: '46px',
            lineHeight: '21px',
          }
        },
        '&__wordmark-wrapper': {
          lineHeight: '26px',

          '@screen md': {
            lineHeight: '32px',
          }
        },
        '&__line1, &__line2, &__line3, &__line4, &__line5': {
          display: 'block',
          color: theme('colors.black.default'),
        }
      },
    }

    addComponents(components)
  }
}
