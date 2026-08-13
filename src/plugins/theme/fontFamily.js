/**
 * Font Family Defaults.
 */
module.exports = function () {
  return {
    // @deprecated Decanter's Roboto Mono stack is removed in v8. Note this key
    // overrides Tailwind's own `mono`, so `font-mono` itself is not going away —
    // only Decanter's stack for it. Define `mono` in your project config if you
    // need Roboto Mono specifically.
    mono: ['"Roboto Mono"', 'Menlo', '"Courier New"', 'monospace'],
    sans: [
      '"Source Sans 3"',
      '"Source Sans Pro"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    serif: [
      '"Source Serif 4"',
      '"Source Serif Pro"',
      'Georgia',
      'Times',
      '"Times New Roman"',
      'serif',
    ],
    // @deprecated Not part of the Stanford Identity type system. Removed in v8,
    // along with the class — `font-slab` has no Tailwind core equivalent. Define
    // `slab` in your project config if you need it.
    slab: ['"Roboto Slab"', 'Georgia', 'Times', '"Times New Roman"', 'serif'],
    stanford: [
      'Stanford',
      '"Source Serif Pro"',
      'Georgia',
      'Times',
      '"Times New Roman"',
      'serif',
    ],
  };
};
