/**
 * Link font weight in paragraphs, WYSIWYG, or nested in components with open fields.
 * Only responsive variants are available as font weight shouldn't change when hover/focus.
 */
module.exports = function () {
  return function ({ addUtilities, prefix }) {
    const utilities = {};

    utilities[prefix('.link-') + 'regular'] = {
      'a': {
        fontWeight: '400'
      }
    }

    utilities[prefix('.link-') + 'semibold'] = {
      'a': {
        fontWeight: '600'
      }
    }

    utilities[prefix('.link-') + 'bold'] = {
      'a': {
        fontWeight: '700'
      }
    }

    utilities['.hover\\:' + prefix('.link-').replace('.', '') + 'no-underline'] = {
      'a:hover': {
        textDecoration: 'none'
      }
    }

      addUtilities(utilities, { variants: ['responsive'], respectPrefix: false })
  }
}
