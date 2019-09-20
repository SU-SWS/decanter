import '../../core/core';
import MainNav from './MainNav';

/**
 * Initiate the main nav elements on the page when the dom content is loaded.
 */
document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Loop through each of the navs and create a new instance.
  navs.forEach((nav, index) => {

    // Main nav default constructor options.
    let options = {
      zIndex: null,
      toggleSelector: ' > button',
      itemExpandedClass: 'su-main-nav__item--expanded',
      itemActiveClass: 'su-main-nav__item--current',
      itemActiveTrailClass: 'su-main-nav__item--active-trail',
      activePath: true,
      expandActivePath: true
    };

    // Manage z-indexes in case there are multiple navs near each other.
    if (index >= 1) {
      let zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    }

    // Create instances of toggle buttons instead of accordions.
    if (nav.className.match(/--buttons/)) {
      options.toggleClass = 'su-nav-toggle';
    }

    // Create an instance of Nav,
    // which in turn creates appropriate instances of NavItem and SubNavItem.
    new MainNav(nav, options);

  });

}); // on DOMContentLoaded.
