import '../../core/core';
import { secondaryNavs } from './globals';
import SecondaryNavButtons from './elements/SecondaryNavButtons';

document.addEventListener('DOMContentLoaded', event => {

  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--buttons/)) {
      new SecondaryNavButtons(nav);
    }
  });

});
