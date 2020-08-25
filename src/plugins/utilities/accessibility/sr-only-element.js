/**
 * Screen Reader Only Element.
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.sr-only-element': {
        'border': 0,
        'clip': "rect(1px, 1px, 1px, 1px)",
        '-webkit-clip-path': "inset(100%)",
        'clip-path': "inset(100%)",
        'height': "1px",
        'overflow': "hidden",
        'padding': 0,
        'position': "absolute",
        'white-space': "nowrap",
        'width': "1px",
      },
    }

    addUtilities(newUtilities)
  }
}
