/**
 * Form elements styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.radio, .checkbox': {
        backgroundColor: theme('colors.white'),
        borderWidth: '3px',
        borderColor: theme('colors.digital-blue.DEFAULT'),
        width: '2.4rem',
        height: '2.4rem',
      },

      '.radio:checked, .checkbox:checked': {
        backgroundColor: theme('colors.digital-blue.DEFAULT'),
      },

      '.fieldset': {
        border: '0',
      },

      '.label': {
        display: 'block',
        fontSize: theme('decanter.base.inputFontSize'),
      },

      '.legend': {
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('decanter.base.displayLineHeight'),
      },

      '.textarea': {
        height: '16rem',
        display: 'block',
        borderColor: theme('colors.black.20'),
        color: theme('colors.black.DEFAULT'),
        fontSize: theme('decanter.base.inputFontSize'),
        lineHeight: theme('lineHeight.snug'),
      },

      '.select': {
        display: 'block',
        borderColor: theme('colors.black.20'),
        color: theme('colors.black.DEFAULT'),
        fontSize: theme('decanter.base.inputFontSize'),
        lineHeight: theme('lineHeight.snug'),
        backgroundColor: theme('colors.white'),
      },
    };

    addComponents(components);
  };
};
