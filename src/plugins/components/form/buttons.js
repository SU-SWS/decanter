/**
 * Buttons base styles.
 */
module.exports = function () {
  return function ({ addComponents, config }) {
    const sans = config('theme.fontFamily.sans').join(', ');
    const components = {
      '.button': {
        fontFamily: sans,
        cursor: 'pointer',
        display: 'inline-block',
        border: 'none',
        fontWeight: config('theme.fontWeight.normal'),
        lineHeight: '1',
        textAlign: 'center',
        textDecoration: 'none',
        width: 'auto',
        transition:
          'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
        padding: '1rem 2rem',
        backgroundColor: config('theme.colors.digital-red.DEFAULT'),
        color: config('theme.colors.white'),
        '&:active, &:hover, &:focus': {
          textDecoration: 'underline',
        },
        '&:hover, &:focus': {
          backgroundColor: config('theme.colors.black.DEFAULT'),
          color: config('theme.colors.white'),
        },
        '&:focus': {
          boxShadow: config('theme.boxShadow.md'),
        },
      },
    };

    addComponents(components);
  };
};
