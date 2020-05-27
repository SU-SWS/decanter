const accordions = document.querySelectorAll('.su-accordion');
const titleButtons = document.querySelectorAll('.su-accordion__button');
const expandButtons = document.querySelectorAll('.su-accordion__expand-all');
const collapseButtons = document.querySelectorAll('.su-accordion__collapse-all');

const isExpanded = x => x.getAttribute('aria-expanded') === 'true';
const setExpanded = (x, value) => x.setAttribute('aria-expanded', value);
const setHidden = (x, value) => x.setAttribute('aria-hidden', value);

document.addEventListener('DOMContentLoaded', event => {
  Array.prototype.forEach.call(accordions, acc => {
    acc.classList.remove('no-js');
  });

  Array.prototype.forEach.call(titleButtons, btn => {
    setExpanded(btn, 'false');
    setHidden(btn.parentNode.nextElementSibling, 'true');
  });
});

Array.prototype.forEach.call(titleButtons, btn => {
  btn.addEventListener('click', function (e) {
    if (!isExpanded(btn)) {
      setExpanded(btn, 'true');
      setHidden(btn.parentNode.nextElementSibling, 'false');
    } else {
      setExpanded(btn, 'false');
      setHidden(btn.parentNode.nextElementSibling, 'true');
    }
  }, false);
});

Array.prototype.forEach.call(expandButtons, expandBtn => {
  expandBtn.addEventListener('click', function (e) {
    const closestAccordion = expandBtn.closest('.su-accordion');
    const closestBtns = closestAccordion.querySelectorAll('.su-accordion__button');
    Array.prototype.forEach.call(closestBtns, closestBtn => {
      setExpanded(closestBtn, 'true');
      setHidden(closestBtn.parentNode.nextElementSibling, 'false');
    });
  }, false);
});

Array.prototype.forEach.call(collapseButtons, collapseBtn => {
  collapseBtn.addEventListener('click', function (e) {
    const closestAccordion = collapseBtn.closest('.su-accordion');
    const closestBtns = closestAccordion.querySelectorAll('.su-accordion__button');
    Array.prototype.forEach.call(closestBtns, closestBtn => {
      setExpanded(closestBtn, 'false');
      setHidden(closestBtn.parentNode.nextElementSibling, 'true');
    });
  }, false);
});
