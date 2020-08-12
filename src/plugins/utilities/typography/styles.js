/**
 * Custom typography styles.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {
    const newUtilities = {
      '.intro-text': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.5625em',
        fontWeight: theme('fontWeight.regular'),
        lineHeight: '1.5',
        maxWidth: '85rem',
        letterSpacing: '-0.012em',
      },
      '.font-splash': {
        ...theme('decanter.base.fontSmoothing'),
        marginTop: '0',
        marginBottom: '0',
        clear: 'both',
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.display'),
        fontSize: '2.5939941406em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: '3.0517578125em',
        },
      },
      '.caption': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.4rem',
        lineHeight: '1.3',
        color: theme('colors.cool-grey'),
      },
      '.credits': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.4rem',
        lineHeight: '1.3',
        fontStyle: 'italic',
        '@screen md': {
          fontSize: '1.6rem',
        },
      },
      '.subheading': {
        fontSize: '1.25em',
      },
      '.quote-text': {
        fontSize: '1.25em',
        fontStyle: 'italic',
      },
      '.big-paragraph': {
        fontSize: '2.1rem',
        lineHeight: '1.7',
      },
      '.small-paragraph': {
        fontSize: '1.6rem',
        lineHeight: '1.3',
        '@screen md': {
          fontSize: '1.8rem',
        },
      },
    }

    addUtilities(newUtilities)
  }
}
