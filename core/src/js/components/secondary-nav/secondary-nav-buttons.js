import '../../core/core';
import {secondaryNavs} from './common/globals';
import SecondaryNavButtons from './buttons/SecondaryNavButtons';

document.addEventListener('DOMContentLoaded', event => {

  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--buttons/)) {
      new SecondaryNavButtons(nav);
    }
  });

});
