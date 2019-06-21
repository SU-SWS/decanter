import '../../core/core';
import Nav from '../main-nav/Nav';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav';

  // All secondary navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Secondary nav specific settings.
  let options = {
    'itemExpandedClass': 'su-secondary-nav__item--expanded'
  };

  // Generate the Accordion toggle for each nav.
  navs.forEach((nav) => {
    // Create an instance of Nav, which in turn creates appropriate instances of NavItem.
    new Nav(nav, options);
  });

});
