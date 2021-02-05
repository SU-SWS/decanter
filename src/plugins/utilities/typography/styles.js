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
        ...theme('decanter.typography.type1'),
        lineHeight: theme('lineHeight.DEFAULT'),
        maxWidth: '85rem',
        '@screen md': {
          ...theme('decanter.typography.type2'),
        },
      },
      '.font-splash': {
        ...headings,
        ...theme('decanter.typography.type6'),
      },
      '.caption': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '0.9em',
        lineHeight: theme('lineHeight.snug'),
        color: theme('colors.cool-grey'),
      },
      '.credits': {
        ...theme('decanter.base.fontSmoothing'),
        fontSize: '0.9rem',
        lineHeight: theme('lineHeight.snug'),
        color: theme('colors.cool-grey'),
        fontStyle: 'italic',
      },
      '.subheading': {
        ...theme('decanter.typography.type1'),
      },
      '.quote-text': {
        fontSize: '1.25em',
        fontStyle: 'italic',
      },
      '.big-paragraph': {
        fontSize: '1.8rem',
        lineHeight: theme('lineHeight.cozy'),
        '@screen md': {
          fontSize: '2.3rem',
          lineHeight: theme('lineHeight.DEFAULT'),
        },
      },
      '.legacy-body': {
        fontSize: '1.6rem',
        '@screen md': {
          fontSize: '1.8rem',
        },
        '@screen 2xl': {
          fontSize: '1.9rem',
        },
      },
      '.card-paragraph': {
        fontSize: '1.6rem',
        lineHeight: theme('lineHeight.snug'),
        '@screen md': {
          fontSize: '2.1rem',
          lineHeight: theme('lineHeight.cozy'),
        },
      },
    }

    addUtilities(newUtilities)
  }
}
