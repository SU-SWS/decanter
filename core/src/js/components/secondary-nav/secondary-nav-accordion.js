import '../../core/core';
import { secondaryNavs } from './globals';
import SecondaryNavAccordion from './elements/SecondaryNavAccordion';

document.addEventListener('DOMContentLoaded', event => {

  // Process each secondary nav accordion.
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--accordion/)) {
      new SecondaryNavAccordion(nav);
    }
  });

});
