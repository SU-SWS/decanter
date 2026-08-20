/**
 * Font Size Defaults.
 * Also see our custom modular typography classes (.type-0 to .type-6).
 */
module.exports = function () {
  return {
    // Font size under 10px (1rem) is not recommended
    // text-11 to text-30 correspond to font sizes from 11px to 30px (in rem units)
    11: '1.1rem',
    12: '1.2rem',
    13: '1.3rem',
    14: '1.4rem',
    15: '1.5rem',
    16: '1.6rem',
    17: '1.7rem',
    18: '1.8rem',
    19: '1.9rem',
    20: '2rem',
    21: '2.1rem',
    22: '2.2rem',
    23: '2.3rem',
    24: '2.4rem',
    25: '2.5rem',
    26: '2.6rem',
    27: '2.7rem',
    28: '2.8rem',
    29: '2.9rem',
    30: '3rem',
    /**
     * Font sizes classes for use in modular typography utilities.
     * To take full advantage of modular typography which inlude letter spacing adjustments propotional to font sizes,
     * use type-0 to type-9 instead
     * See src/plugins/theme/decanter.js
     *
     * @deprecated The em-based `m*` scale below is removed in v8. Use the modular
     * type classes `type-0` to `type-9`, which are responsive and include the
     * proportional letter spacing these plain font sizes lack. For a one-off
     * size, use an arbitrary value such as `text-[1.25em]`.
     */
    m0: '1em', // text-m0 equals to 1em (modular step 0 = base)
    m1: '1.25em', // text-m1 = 1.25 x 1em (modular step 1)
    m2: '1.56em', // text-m2 = 1.25 x 1.25 x 1em (modular step 2) and so on
    m3: '1.95em',
    m4: '2.44em',
    m5: '3.05em',
    m6: '3.81em',
    m7: '4.77em',
    m8: '5.96em',
    m9: '7.45em',
    // -m1 Doesn't use the 1.25 scale factor. Merely a convenience value for a slightly
    // smaller font size than the base step.
    // NOTE: this key does not produce `text--m1`. Tailwind reads the leading `-` as a
    // negative modifier and emits `.-text-m1`.
    // @deprecated Removed in v8.
    '-m1': '0.9em',
    // Working alias for the `-m1` above. @deprecated Removed in v8.
    '09em': '0.9em',
  };
};
