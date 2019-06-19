import '../../core/core';
import { theNavs, theSubNavs, closeAllSubNavs, closeAllMobileNavs } from './globals';
import Nav from './Nav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';
  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);
  // Main nav specific settings.
  let options = {
    'zIndex': null,
    'toggleElement': null,
    'toggleText': '',
    'expandedClass': 'su-main-nav__item--expanded',
    'idPrefix': "su-"
  };

  navs.forEach((nav, index) => {

    // Manage zindexes in case there are multiple navs near enough for subnavs to overlap.
    // Rare, but it happens in the styleguide.
    if (index >= 1) {
      let zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx++;
      options.zindex = zndx;
    }

    // Define the toggle element.
    options.toggleElement = nav.querySelector(nav.tagName + ' > button');

    // Create an instance of Nav, which in turn creates appropriate instances of NavItem.
    let theNav = new Nav(nav, options);

    // Remember the nav for closeAllMobileNavs().
    theNavs.push(theNav);
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
