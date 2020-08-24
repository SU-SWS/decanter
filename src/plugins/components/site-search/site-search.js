/**
 * Site search
 * Can be included in the Stanford global header
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {
    //const assetPath = './src/assets/'; // Todo: do this later

    const components = {
      '.site-search': {
        position: 'relative',
        '&__input': {
          display: 'inline-block',
          padding: '0.6rem 2rem',
          maxWidth: '100%',
          height: '4rem',
          borderRadius: '3rem',
          fontSize: '1.6rem',
        },
        '&__input::placeholder': {
          color: theme('colors.black.default'),
          opacity: '1', // For Firefox
        },
        '&__submit': {
          position: 'absolute',
          top: '1.1rem',
          right: '1.2rem',
          width: '24px',
          height: '25px',
          padding: '0',
          marginTop: '0',
          marginRight: '0',
          marginBottom: '0',
          opacity: '0.6',
          //background: 'url("#{$su-image-path}/icon-search.svg") no-repeat 0 0',
          '&:hover, &:active, &:focus': {
            backgroundColor: 'transparent',
            opacity: '1',
          },
          '&:active, &:focus': {
            boxShadow: 'none',
          },
        },
      },
    }

    addComponents(components)
  }
}
