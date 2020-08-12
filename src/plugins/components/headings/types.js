/**
 * [description]
 * @return {[type]} [description]
 */
module.exports = function () {
  return function ({ addComponents, theme }) {

    // Default styles for the headings.
    const headings = theme('decanter.typography.headings');

    // Each class.
    const newComponents = {
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
    }

    addComponents(newComponents)
  }
}
