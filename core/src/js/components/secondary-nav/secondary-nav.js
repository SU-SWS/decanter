import '../../core/core';
import Nav from '../main-nav/Nav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav';

  // All secondary navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Secondary nav specific settings.
  let options = {
    'toggleElement': null,
    'expandedClass': 'su-secondary-nav__item--expanded',
    'idPrefix': "su-"
  };

  // Generate the Accordion toggle for each nav.
  navs.forEach((nav) => {
    // Create an instance of Nav, which in turn creates appropriate instances of NavItem.
    let theNav = new Nav(nav, options);
  });

});
