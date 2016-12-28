/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $, window) {

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.basic = {
    attach: function (context, settings) {

      // Execute code once the DOM is ready. $(document).ready() not required within Drupal.behaviors.

      $(window).load(function () {
        // Execute code once the window is fully loaded.
      });

      $(window).resize(function () {
        // Execute code when the window is resized.
      });

      $(window).scroll(function () {
        // Execute code when the window scrolls.
      });

    }
  };

} (Drupal, jQuery, this));
