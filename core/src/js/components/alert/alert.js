/**
 * Alert components.
 **/
const alertDismiss = document.querySelectorAll('.su-alert__dismiss-button');

// Fire when ready.
document.addEventListener('DOMContentLoaded', event => {
  // Loop through each alert with a dismiss button.
  Array.prototype.forEach.call(alertDismiss, alrt => {
    alrt.addEventListener('click', function (e) {
      // When a dismiss button is pressed. Find the nearest parent wrapper and
      // remove it all from the dom.
      e.target.closest('.su-alert').remove();
    }, false);
  });
});
