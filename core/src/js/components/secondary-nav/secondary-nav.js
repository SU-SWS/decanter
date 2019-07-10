import '../../core/core';
import Nav from '../main-nav/Nav';
import ToggleNav from './ToggleNav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav';

  // All secondary navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Generate the Accordion toggle for each nav.
  navs.forEach((nav) => {

    // Secondary nav specific settings.
    let options = {
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      itemActiveClass: 'su-secondary-nav__item--current',
      toggleClass: 'su-secondary-nav__toggle',
      activePath: true,
      expandActivePath: true,
    };

    if (nav.className.match(/--buttons/)) {
      // Create an instance of ToggleNav, which in turn create appropriate
      // instances of ToggleSubNavItems.
      new ToggleNav(nav, options);
    }
    else {
      // Create an instance of Nav, which in turn creates appropriate instances
      // of NavItem.
      new Nav(nav, options);
    }
  });

});
