import '../../core/core';
import {theNavs, closeAllSubNavs, closeAllMobileNavs} from './globals';
import Nav from './Nav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';
  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Process each nav.
  let firstZindex;
  navs.forEach((nav, index) => {
    // Remove the class that formats the nav for browsers with javascript disabled.
    nav.classList.remove('no-js');

    // Create an instance of Nav, which in turn creates appropriate instances of NavItem.
    const theNav = new Nav(nav);

    // Remember the nav for closeAllMobileNavs().
    theNavs.push(theNav);

    // Manage zindexes in case there are multiple navs near enough for subnavs to overlap.
    // Rare, but it happens in the styleguide.
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
