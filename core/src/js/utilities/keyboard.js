// ---------------------------------------------------------------------------
// Keyboard helper functions
// ---------------------------------------------------------------------------

export const isHome = theKey => (theKey === 'Home' || theKey === 122);
export const isEnd = theKey => (theKey === 'End' || theKey === 123);
export const isTab = theKey => (theKey === 'Tab' || theKey === 9);
export const isEsc = theKey => (theKey === 'Escape' || theKey === 'Esc' || theKey === 27);
export const isSpace = theKey => (theKey === ' ' || theKey === 'Spacebar' || theKey === 32);
export const isEnter = theKey => (theKey === 'Enter' || theKey === 13);
export const isLeftArrow = theKey => (theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37);
export const isRightArrow = theKey => (theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39);
export const isUpArrow = theKey => (theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38);
export const isDownArrow = theKey => (theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40);

/**
 * Return a consistent string for each key validation.
 *
 * @param {*} theKey the code from a keypress event.
 *
 * @return {String} A string name for the key that was pressed.
 */
export const normalizeKey = (theKey) => {

  // Key Value Map of the normalized string and the check function.
  const map = {
    home: isHome,
    end: isEnd,
    tab: isTab,
    escape: isEsc,
    space: isSpace,
    enter: isEnter,
    arrowLeft: isLeftArrow,
    arrowRight: isRightArrow,
    arrowUp: isUpArrow,
    arrowDown: isDownArrow
  };

  // Loop through the key/val object and run the check function (val) in order
  // to return the normalized string (key)
  for (var entry of Object.entries(map)) {
    if (entry[1](theKey)) {
      return entry[0];
    }
  }

  return false;
};
