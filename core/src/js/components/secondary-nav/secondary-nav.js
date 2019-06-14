import AccordionButton from "./AccordionButton";

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-secondary-nav';

  // All secondary navs.
  const navs = document.querySelectorAll('.' + navClass);

  let settings = {
    'trigger': 'su-secondary-nav__toggle',
    'container': ".su-secondary-nav__item--parent",
    'panel': "ul",
    "trigger_expanded_text": "-",
    "trigger_collapsed_text": "+",
  };

  // Generate the Accordion toggle for each nav.
  navs.forEach((nav) => {
    new AccordionButton(nav, settings);
  });

});
