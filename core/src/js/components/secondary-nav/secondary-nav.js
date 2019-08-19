import '../../core/core';
import Nav from '../main-nav/Nav';
import ToggleNav from './ToggleNav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav:not(.su-secondary-nav--no-interactivity)';

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
      expandActivePath: true
    };

    // Create an instance of ToggleNav, which in turn create appropriate
    // instances of ToggleSubNavItems.
    if (nav.className.match(/--buttons/)) {
      new ToggleNav(nav, options);
    }
    // Create an instance of Nav, which in turn creates appropriate instances
    // of NavItem.
    else {
      new Nav(nav, options);
    }
  });

});
