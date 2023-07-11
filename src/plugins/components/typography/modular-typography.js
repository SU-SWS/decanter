/**
 * Decanter's responsive modular typography utilities
 * type-0 is the base step = 1em; type-9 is the largest available currently
 * Each step up is progressively larger with different font sizes for mobile, tablet and desktop breakpoints
 * For example, try type-2 for a medium sized card headline and type-7 for a hero banner splash text
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.type-9': {
        ...theme('decanter.typography.type9'),
      },
      '.type-8': {
        ...theme('decanter.typography.type8'),
      },
      '.type-7': {
        ...theme('decanter.typography.type7'),
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
    };

    addComponents(components);
  };
};
