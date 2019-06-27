import '../../core/core';
import Nav from './Nav';
import NavToggle from './NavToggle';
import ToggleNav from './ToggleNav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Main nav default constructor options.
  let options = {
    'zIndex': null,
    'toggle': null,
    'itemExpandedClass': 'su-main-nav__item--expanded',
    'itemActiveClass': 'su-main-nav__item--current',
    'triggerClass': "su-main-nav__toggle",
    'activePath': true,
  };

  // Loop through each of the navs and create a new instance.
  navs.forEach((nav, index) => {

    // Manage z-indexes in case there are multiple navs near each other.
    if (index >= 1) {
      let zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    }

    // Create the toggle element to pass in to the nav constructor.
    let toggleElement = nav.querySelector(nav.tagName + ' > button');
    let toggleOptions = {
      'navElement': nav,
    };
    options.toggle = new NavToggle(toggleElement, toggleOptions);

    if (nav.className.match(/--buttons/)) {
      // Create an instance of ToggleNav, which in turn create appropriate
      // instances of ToggleSubNavItems.
      new ToggleNav(nav, options);
    }
    else {
      // Create an instance of Nav,
      // which in turn creates appropriate instances of NavItem.
      new Nav(nav, options);
    }
  });

}); // on DOMContentLoaded.
