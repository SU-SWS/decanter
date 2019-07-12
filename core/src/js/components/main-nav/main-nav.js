import '../../core/core';
import Nav from './Nav';
import {mainEvents} from './MainEvents';

/**
 * Initiate the main nav elements on the page when the dom content is loaded.
 */
document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Event Overrides. These custom functions are for the first level items on
  // desktop only as they have different behaviour than all other items.
  let customEvents = mainEvents();

  // Loop through each of the navs and create a new instance.
  navs.forEach((nav, index) => {

    // Main nav default constructor options.
    let options = {
      zIndex: null,
      toggleSelector: ' > button',
      toggleClass: 'su-main-nav__toggle',
      itemExpandedClass: 'su-main-nav__item--expanded',
      itemActiveClass: 'su-main-nav__item--current',
      activePath: true,
      expandActivePath: true,
      itemEvents: customEvents
    };

    // Manage z-indexes in case there are multiple navs near each other.
    if (index >= 1) {
      let zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    }

    // Create an instance of Nav,
    // which in turn creates appropriate instances of NavItem and SubNavItem.
    new Nav(nav, options);

  });

}); // on DOMContentLoaded.
