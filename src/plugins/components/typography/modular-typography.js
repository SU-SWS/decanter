/**
 * Modular typography steps with 1.25 multiplier between steps. type-0 = base font size, ie, 1em.
 * Larger steps (type-3 and up) are scaled down for XS and SM breakpoints by a factor of 0.85.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {

    const components = {
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
    }

    addComponents(components)
  }
}
