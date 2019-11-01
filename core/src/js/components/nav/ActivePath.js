/**
 * ActivePath
 *
 * This class contains features and functionality for handling the finding and
 * setting of the active trail of a menu.
 */
export default class ActivePath {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element The DOM object of the navigation menu.
   * @param {Mixed} item          The Navigation Class.
   * @param {Object} options      An optional object of meta information.
   */
  constructor(element, item, options = {}) {
    this.elem = element;
    this.item = item;
    // CSS Class properties.
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemActiveTrailClass = options.itemActiveTrailClass || 'active-trail';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';
  }

  /**
   * Dynamically add an active path to the menu tree.
   *
   * Find all links with the current window's url and add the
   * options.itemActiveClass class to the LI element container all the way up
   * the menu tree back to the root.
   */
  setActivePath() {
    let path = window.location.pathname;
    let anchor = window.location.hash || '';
    let query = window.location.search || '';
    let currentItem = false;

    // Queries to run to find matching active paths in order of unqiueness.
    let finders = [
      this.elem.querySelector("a[href*='" + anchor + "']"),
      this.elem.querySelector("a[href*='" + query + "']"),
      this.elem.querySelector("a[href='" + path + query + anchor + "']"),
      this.elem.querySelector("a[href*='" + path + query + "']")
    ];

    // Go through the queries and see if we have any results.
    finders.forEach(function (val) {
      if (!currentItem && val) {
        currentItem = val;
      }
    });

    // Can't find anything. End.
    if (!currentItem) {
      return;
    }

    // While we have parents go up and add the active class.
    while (currentItem) {

      // If we are on a LI element we need to add the active class.
      if (currentItem.tagName === 'LI') {
        currentItem.classList.add(this.itemActiveClass);
        break;
      }

      // Always increment.
      currentItem = currentItem.parentNode;
    }
  }

  /**
   * Set active trail.
   *
   * After this.setActivePath() has been run or the itemActiveClass has been set
   * on all the appropriate menu items go through the nav and set the trail on
   * subNavItems that contain activeClass items.
   */
  setActiveTrail() {
    let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
    if (actives.length) {
      actives.forEach(
        element => {

          // While we have parents go up and add the active class.
          while (element) {
            // End when we get to the parent nav item stop.
            if (element === this.elem) {
              // Stop at the top most level.
              break;
            }

            // If we are on a LI element we need to add the active class.
            if (element.tagName === 'LI') {
              element.classList.add(this.itemActiveTrailClass);
              // "Hook" of sorts.
              if (typeof this.item.setActiveTrialItem == 'function') {
                this.item.setActiveTrialItem(element);
              }
            }

            // Always increment.
            element = element.parentNode;
          }
        }
      );
    }
  }

  /**
   * Expand all menus in the active path.
   *
   * After this.setActivePath() has been run or the itemActiveClass has been set
   * on all the appropriate menu items go through the nav and expand the
   * subNavItems that contain activeClass items.
   */
  expandActivePath() {
    let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
    if (actives.length) {
      actives.forEach(
        element => {

          // While we have parents go up and add the active class.
          while (element) {
            // End when we get to the parent nav item stop.
            if (element === this.elem) {
              // Stop at the top most level.
              break;
            }

            // If we are on a LI element we need to add the active class.
            if (element.tagName === 'LI') {
              element.classList.add(this.itemExpandedClass);
              // "Hook" of sorts.
              if (typeof this.item.expandActivePathItem == 'function') {
                this.item.expandActivePathItem(element);
              }
            }

            // Always increment.
            element = element.parentNode;
          }
        }
      );
    }
  }
}
