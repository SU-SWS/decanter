/**
 * Custom typography styles.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Default styles for the headings.
    const headings = theme('decanter.typography.headings');

    const newUtilities = {
      '.type-a': {
        ...headings,
        ...theme('decanter.typography.typeA'),
      },
      '.type-b': {
        ...headings,
        ...theme('decanter.typography.typeB'),
      },
      '.type-c': {
        ...headings,
        ...theme('decanter.typography.typeC'),
      },
      '.type-d': {
        ...headings,
        ...theme('decanter.typography.typeD'),
      },
      '.type-e': {
        ...headings,
        ...theme('decanter.typography.typeE'),
      },
      '.type-f': {
        ...headings,
        ...theme('decanter.typography.typeF'),
      },
      '.intro-text': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.5625em',
        fontWeight: theme('fontWeight.regular'),
        lineHeight: '1.5',
        maxWidth: '85rem',
        letterSpacing: '-0.012em',
      },
      '.font-splash': {
        ...headings,
        marginBottom: '0',
        fontSize: '2.59em',
        letterSpacing: '-0.016em',
        '@screen md': {
          fontSize: '3.05em',
        },
      },
      '.caption': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.4rem',
        lineHeight: '1.3',
        color: theme('colors.cool-grey'),
        '@screen md': {
          fontSize: '1.6rem',
        },
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
        '@screen md': {
          fontSize: '2.1rem',
          lineHeight: '1.7',
        },
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
