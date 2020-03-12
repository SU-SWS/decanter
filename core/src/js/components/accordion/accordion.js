const accordions = document.querySelectorAll('.su-accordion');
const titleButtons = document.querySelectorAll('.su-accordion__button');

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
