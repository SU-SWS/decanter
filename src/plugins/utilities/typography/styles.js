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
        lineHeight: '1.5em',
        maxWidth: '85rem',
        letterSpacing: '-0.012em',
      },
      '.font-splash': {
        ...theme('decanter.base.fontSmoothing'),
        marginTop: '0',
        marginBottom: '0',
        clear: 'both',
        fontWeight: theme('fontWeight.bold'),
        lineHeight: '1.2em',
        fontSize: '2.5939941406em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: '3.0517578125em',
        },
      },
      '.caption': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.4rem',
        lineHeight: '1.3rem',
        color: '#4d4f53',
      },
      '.credits': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.6rem',
        lineHeight: '1.3rem',
        fontStyle: 'italic',
        '@screen md': {
          fontSize: '1.4rem',
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
        lineHeight: '1.7em',
      },
      '.small-paragraph': {
        fontSize: '1.6rem',
        lineHeight: '1.3em',
        '@screen md': {
          fontSize: '1.8rem',
        },
      },
    }

    addUtilities(newUtilities)
  }
}
