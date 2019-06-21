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
 * [normalizeKey description]
 * @param  {[type]} theKey [description]
 * @return {[type]}        [description]
 */
export const normalizeKey = (theKey) => {
  if(isHome(theKey)) {
    return "home";
  }
  if(isEnd(theKey)) {
    return "end";
  }
  if(isTab(theKey)) {
    return "tab";
  }
  if(isEsc(theKey)) {
    return "escape";
  }
  if(isSpace(theKey)) {
    return "space";
  }
  if(isEnter(theKey)) {
    return "enter";
  }
  if(isLeftArrow(theKey)) {
    return "arrowLeft";
  }
  if(isRightArrow(theKey)) {
    return "arrowRight";
  }
  if(isUpArrow(theKey)) {
    return "arrowUp";
  }
  if(isDownArrow(theKey)) {
    return "arrowDown";
  }

  return false;
}
