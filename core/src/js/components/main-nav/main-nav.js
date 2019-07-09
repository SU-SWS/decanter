import '../../core/core';
import Nav from './Nav';
import NavToggle from './NavToggle';

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Event Overrides.
  let customEvents = {
    SubNavItem: {
      1: {
        onKeydownArrowRight: function (event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowRight(event, instance.link);
          }
          else {
            instance.onKeydownArrowDown(event, instance.link);
          }

        },
        onKeydownArrowDown: function (event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowDown(event, instance.link);
          }
          else {
            instance.onKeydownArrowRight(event, instance.link);
          }
        }
      }
    }
  };

  // Loop through each of the navs and create a new instance.
  navs.forEach((nav, index) => {

    // Main nav default constructor options.
    let options = {
      zIndex: null,
      toggle: null,
      itemExpandedClass: 'su-main-nav__item--expanded',
      itemActiveClass: 'su-main-nav__item--current',
      triggerClass: "su-main-nav__toggle",
      activePath: true,
      itemEvents: customEvents
    };

    // Manage z-indexes in case there are multiple navs near each other.
    if (index >= 1) {
      let zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    }

    // Create the toggle element to pass in to the nav constructor.
    let toggleElement = nav.querySelector(nav.tagName + ' > button');
    let toggleOptions = {
      navElement: nav
    };
    options.toggle = new NavToggle(toggleElement, toggleOptions);

    // Create an instance of Nav,
    // which in turn creates appropriate instances of NavItem and SubNavItem.
    new Nav(nav, options);
  });

}); // on DOMContentLoaded.
