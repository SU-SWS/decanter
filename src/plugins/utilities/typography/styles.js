/**
 * Custom typography styles.
 */
module.exports = function () {
  return function ({ addUtilities, theme }) {

    // Default styles for the headings.
    const headings = theme('decanter.typography.headings');

    const newUtilities = {
      '.types': {
        ...headings,
      },
      '.type-6': {
        ...theme('decanter.typography.type6'),
      },
      '.type-5': {
        ...theme('decanter.typography.type5'),
      },
      '.type-4': {
        ...theme('decanter.typography.type4'),
      },
      '.type-3': {
        ...theme('decanter.typography.type3'),
      },
      '.type-2': {
        ...theme('decanter.typography.type2'),
      },
      '.type-1': {
        ...theme('decanter.typography.type1'),
      },
      '.type-0': {
        ...theme('decanter.typography.type0'),
      },
      '.intro-text': {
        ...theme('decanter.typography.type1'),
        lineHeight: theme('lineHeight.DEFAULT'),
        maxWidth: theme('maxWidth.prose'),
        '@screen md': {
          ...theme('decanter.typography.type2'),
        },
      },
      '.splash-text': {
        ...headings,
        ...theme('decanter.typography.type6'),
      },
      '.quote-text': {
        fontSize: '1.25em',
        fontStyle: 'italic',
      },
      '.caption, .credits': {
        fontSize: 'max(1.6rem, 0.9em)',
        lineHeight: theme('lineHeight.snug'),
        color: theme('colors.cool-grey'),
      },
      '.caption': {
        marginTop: '0.4em',
      },
      '.credits': {
        fontStyle: 'italic',
      },
      '.subheading': {
        ...theme('decanter.typography.type1'),
      },
      '.big-paragraph': {
        fontSize: '1.15em',
        lineHeight: theme('lineHeight.cozy'),
        '@screen md': {
          lineHeight: theme('lineHeight.DEFAULT'),
        },
      },
      '.card-paragraph': {
        fontSize: 'max(1.6rem, 0.93em)',
        lineHeight: theme('lineHeight.snug'),
        '@screen md': {
          lineHeight: theme('lineHeight.cozy'),
        },
      },
      '.body-basefont-19': {
        fontSize: '1.6rem',
        '@screen md': {
          fontSize: '1.8rem',
        },
        '@screen 2xl': {
          fontSize: '1.9rem',
        },
      },
      '.body-basefont-20': {
        fontSize: '1.8rem',
        '@screen md': {
          fontSize: '1.9rem',
        },
        '@screen 2xl': {
          fontSize: '2rem',
        },
      },
      '.body-basefont-22': {
        fontSize: '1.8rem',
        '@screen md': {
          fontSize: '2rem',
        },
        '@screen 2xl': {
          fontSize: '2.2rem',
        },
      },
      '.body-basefont-23': {
        fontSize: '1.8rem',
        '@screen md': {
          fontSize: '2.1rem',
        },
        '@screen 2xl': {
          fontSize: '2.3rem',
        },
      },
    }

    addUtilities(newUtilities)
  }
}
