/**
 * Spacing - used in various classes such as margin, padding, gap and width
 * Values include curated steps from the modular (responsive) spacing system, plus some extra values for convenience
 */
module.exports = function () {
  return {
    px: '1px',
    0: '0',
    // Spacing utilities in em units are mostly used for typography elements,
    // e.g., spacing below headings, between paragraphs, list items, etc.
    '01em': '0.1em',
    '02em': '0.2em',
    '03em': '0.3em',
    '04em': '0.4em',
    '05em': '0.5em',
    '06em': '0.6em',
    '07em': '0.7em',
    '08em': '0.8em',
    '09em': '0.9em',
    '1em': '1em',
    // Spacing utilities in rem units are mostly used for layout elements and do not scale with container font size
    // From 1 to 50px in rem units, we have spacing values in 1px (0.1rem) increments
    1: '0.1rem',
    2: '0.2rem',
    3: '0.3rem',
    4: '0.4rem',
    5: '0.5rem',
    6: '0.6rem',
    7: '0.7rem',
    8: '0.8rem',
    9: '0.9rem',
    10: '1rem',
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
    31: '3.1em',
    32: '3.2rem',
    33: '3.3rem',
    34: '3.4rem',
    35: '3.5rem',
    36: '3.6rem',
    37: '3.7rem',
    38: '3.8rem',
    39: '3.9rem',
    40: '4rem',
    41: '4.1rem',
    42: '4.2rem',
    43: '4.3rem',
    44: '4.4rem',
    45: '4.5rem',
    46: '4.6rem',
    47: '4.7rem',
    48: '4.8rem',
    49: '4.9rem',
    50: '5rem',
    // From 50 to 100px in rem units, we have spacing values in 5px (0.5rem) increments
    // plus curated values we have for our modular (responsive) spacing system, ie, in rs-p- rs-m- classes
    55: '5.5rem',
    58: '5.8rem',
    60: '6rem',
    61: '6.1rem',
    65: '6.5rem',
    70: '7rem',
    72: '7.2rem',
    75: '7.5rem',
    76: '7.6rem',
    80: '8rem',
    85: '8.5rem',
    90: '9rem',
    95: '9.5rem',
    100: '10rem',
    108: '10.8rem',
    // From 100 to 300px in rem units, we have spacing values in 10px (1rem) increments
    // plus curated values we have for our modular (responsive) spacing system, ie, in rs-p- rs-m- classes
    110: '11rem',
    120: '12rem',
    114: '11.4rem',
    126: '12.6rem',
    130: '13rem',
    133: '13.3rem',
    140: '14rem',
    150: '15rem',
    160: '16rem',
    162: '16.2rem',
    170: '17rem',
    171: '17.1rem',
    180: '18rem',
    190: '19rem',
    200: '20rem',
    216: '21.6rem',
    220: '22rem',
    228: '22.8rem',
    230: '23rem',
    240: '24rem',
    250: '25rem',
    260: '26rem',
    270: '27rem',
    280: '28rem',
    290: '29rem',
    // From 300 to 1000px in rem units, we have spacing values in 50px (5rem) increments
    300: '30rem',
    350: '35rem',
    400: '40rem',
    450: '45rem',
    500: '50rem',
    550: '55rem',
    600: '60rem',
    650: '65rem',
    700: '70rem',
    750: '75rem',
    800: '80rem',
    850: '85rem',
    900: '90rem',
    950: '95rem',
    // From 1000 to 1500px in rem units, we have spacing values in 100px (10em) increments
    1000: '100rem',
    1100: '110rem',
    1200: '120rem',
    1300: '130rem',
    1400: '140rem',
    1500: '150rem',
  };
};
