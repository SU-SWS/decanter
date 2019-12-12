import '../../core/core';
import {secondaryNavs} from './common/globals';
import SecondaryNavAccordion from './accordion/SecondaryNavAccordion';

document.addEventListener('DOMContentLoaded', event => {

  // Process each secondary nav accordion.
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--accordion/)) {
      new SecondaryNavAccordion(nav);
    }
  });

});
