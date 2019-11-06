import '../../core/core';
import {multiMenus} from './common/globals';
import MultiMenuAccordion from './accordion/MultiMenuAccordion';
import MobileToggle from './common/MobileToggle';

document.addEventListener('DOMContentLoaded', event => {
  multiMenus.forEach((nav, index) => {
    if (nav.className.match(/su-multi-menu--accordion/)) {
      var theNav = new MultiMenuAccordion(nav);
      var toggleElem = nav.querySelector(':scope .su-multi-menu__nav-toggle');
      if (toggleElem) {
        new MobileToggle(toggleElem, theNav);
      }
    }
  });
});
