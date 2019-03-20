import '../../core/core';
import { theNavs, theSubNavs, closeAllSubNavs, closeAllMobileNavs } from './globals';
import Nav from './Nav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // Variables.

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // ---------------------------------------------------------------------------
  // Execution Code.
  // ---------------------------------------------------------------------------

  // Process each nav.
  let firstZindex;
  navs.forEach((nav, index) => {
    const theNav = new Nav(nav);
    theNavs.push(theNav);

    if (index === 0) {
      firstZindex = getComputedStyle(nav, null).zIndex;
    }
    else {
      nav.style.zIndex = firstZindex - 300 * index;
    }
  }); // navs.forEach

  // Clicking anywhere outside a nav closes all navs.
  document.addEventListener('click', event => {
    // The element that was clicked.
    const target = event.target || event.srcElement;
    // If target is not under a main nav close all navs.
    if (!target.matches('.' + navClass + ' ' + target.tagName)) {
      closeAllSubNavs();
      closeAllMobileNavs();
    }
  }, false);

}); // on DOMContentLoaded.
