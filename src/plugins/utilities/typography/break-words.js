/**
 * Adds to break-words utility provided by default Tailwind CSS.
 * https://tailwindcss.com/docs/word-break#break-words
 * It needs the extra CSS property word-break: break-word to work.
 */

module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.break-words': {
        wordBreak: 'break-word',
      },
    };

    addUtilities(newUtilities);
  };
};
