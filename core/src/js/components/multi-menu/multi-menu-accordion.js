import '../../core/core';
import {multiMenus} from './common/globals';
import MultiMenuAccordion from './accordion/MultiMenuAccordion';

document.addEventListener('DOMContentLoaded', event => {
  multiMenus.forEach((nav, index) => {
    if (nav.className.match(/su-multi-menu--accordion/)) {
      new MultiMenuAccordion(nav);
    }
  });
});
