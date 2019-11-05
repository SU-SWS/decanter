import '../../core/core';
import {multiMenus} from './common/globals';
import MultiMenuButtons from './buttons/MultiMenuButtons';
import MobileToggle from './common/MobileToggle';

document.addEventListener('DOMContentLoaded', event => {
  multiMenus.forEach((nav, index) => {
    if (nav.className.match(/su-multi-menu--buttons/)) {
      var theNav = new MultiMenuButtons(nav);
      var toggleElem = nav.querySelector(':scope .su-multi-menu__nav-toggle');
      if (toggleElem) {
        var theToggle = new MobileToggle(toggleElem, theNav);
      }
    }
  });
});
