import '../../core/core';
import Nav from '../main-nav/Nav';
import ToggleNav from '../main-nav/ToggleNav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav';

  // All secondary navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Secondary nav specific settings.
  let options = {
    'itemExpandedClass': 'su-secondary-nav__item--expanded',
    'itemActiveClass': 'su-secondary-nav__item--current',
    'triggerClass': "su-secondary-nav__toggle",
    'activePath': true,
  };

  // Generate the Accordion toggle for each nav.
  navs.forEach((nav) => {

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
