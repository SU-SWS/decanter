import '../../core/core';
import {multiMenus} from './common/globals';
import MultiMenuButtons from './buttons/MultiMenuButtons';

document.addEventListener('DOMContentLoaded', event => {
  multiMenus.forEach((nav, index) => {
    if (nav.className.match(/su-multi-menu--buttons/)) {
      new MultiMenuButtons(nav);
    }
  });
});
