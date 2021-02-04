/**
 * Custom typography styles.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Default styles for the headings.
    const headings = theme('decanter.typography.headings');

    const newUtilities = {
      '.type-6': {
        ...headings,
        ...theme('decanter.typography.type6'),
      },
      '.type-5': {
        ...headings,
        ...theme('decanter.typography.type5'),
      },
      '.type-4': {
        ...headings,
        ...theme('decanter.typography.type4'),
      },
      '.type-3': {
        ...headings,
        ...theme('decanter.typography.type3'),
      },
      '.type-2': {
        ...headings,
        ...theme('decanter.typography.type2'),
      },
      '.type-1': {
        ...headings,
        ...theme('decanter.typography.type1'),
      },
      '.type-0': {
        ...headings,
        ...theme('decanter.typography.type0'),
      },
      '.intro-text': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '1.56em',
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
        fontSize: '0.9em',
        lineHeight: '1.3',
        color: theme('colors.cool-grey'),
      },
      '.credits': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '0.9rem',
        lineHeight: '1.3',
        color: theme('colors.cool-grey'),
        fontStyle: 'italic',
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
