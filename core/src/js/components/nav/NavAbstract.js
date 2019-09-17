import NavItem from './NavItem';
import SubNavItem from './SubNavItem';

/**
 * NavAbstract Class
 *
 * The most abstract version of a Nav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */
export default class NavAbstract {

  /**
   * Nav Abstract Constructor class.
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  constructor(elem, options) {
    // Save the passed in configuration options.
    this.options = options;
    // Prefixing the random ids.
    this.idPrefix = options.idPrefix || 'su-';
    // The nav element.
    this.elem = elem;
    // Depth of menu item.
    this.depth = options.depth || 1;
    // The toggle menu button or none.
    this.toggle = options.toggle || false;
    // The JS Classes to use for building children nav items.
    this.itemClasses = options.itemClasses || {
      single: NavItem,
      sub: SubNavItem
    };
    // Set the z-index if configured.
    if (this.options.zIndex > 1 && this.depth === 1) {
      this.elem.style.zIndex = this.options.zIndex;
    }
    // Give this instance a unique ID.
    let id = Math.random().toString(36).substr(2, 9);
    this.id = this.idPrefix + id;
    this.elem.id = this.idPrefix + id;
    // Remove the no-js class.
    this.elem.classList.remove('no-js');
    // Initialize items.
    this.navItems = [];
    this.subNavItems = [];
    // Class properties.
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemActiveTrailClass = options.itemActiveTrailClass || 'active-trail';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';
    // Set the active path on the menu tree.
    if (this.options.activePath === true) {
      // Set it from the parent most nav.
      this.setActivePath();
      // Only run once.
      this.options.activePath = false;
    }
  }

  /**
   * Create all the children items.
   *
   * Loop through each LI element and either create a single level NavItem, or,
   * create another nav through a SubNavItem.
   */
  createNavItems() {
    // Navs are only responsible for their direct descendant items.
    let items = this.elem.querySelectorAll('#' + this.id + ' > ul > li');
    items.forEach(
      item => {
        // SubNavItems have special behaviour so they have their own class.
        // Caller can pass in different classes but must extend or interface
        // subNavItem.
        if (item.querySelector(item.tagName + ' > ul')) {
          this.subNavItems.push(
            new this.itemClasses['sub'](item, this, this.options)
          );
        }
        // NavItems have specific event handling.
        // Caller can pass in different classes but must extend or interface
        // navItemAbstract.
        else {
          this.navItems.push(
            new this.itemClasses['single'](item, this, this.options)
          );
        }
      }
    );
  }

  /**
   * Handler for all events attached to an instance of this class.
   *
   * This method must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {Event} event - The triggering event.
   */
  handleEvent(event) {
    event = event || window.event;

    // If this class has an onEvent method (onClick, onKeydown) invoke it.
    const handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

    // What was clicked.
    const target = event.target || event.srcElement;

    // If the caller passed in their own event handling use that instead.
    if (this.options.itemEvents && this.options.itemEvents[handler]) {
      new this.options.itemEvents[handler](event, this);
    }
    // Otherwise, check to see if we have an event available.
    else if (typeof this[handler] === 'function') {
      this[handler](event, target);
    }
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
        item => {

          // While we have parents go up and add the active class.
          while (item) {

            // End when we get to the parent nav item stop.
            if (item.getAttribute('id') === this.id) {
              // Stop at the top most level.
              break;
            }

            // If we are on a LI element we need to add the active class.
            if (item.tagName === 'LI') {
              item.classList.add(this.itemExpandedClass);
              item.classList.add(this.itemActiveTrailClass);
              item.firstElementChild.setAttribute('aria-expanded', true);
            }

            // Always increment.
            item = item.parentNode;
          }
        }
      );
    }
  }

  /**
   * Close all subNavItems in this Nav.
   */
  closeAllSubNavs() {
    this.subNavItems.forEach(
      (item, event) => {
        item.closeSubNav();
      }
    );

    if (this.toggle) {
      this.toggle.closeNav();
    }
  }

  /**
   * Close this nav.
   */
  closeThisSubNav() {
    this.elem.classList.remove(this.options.itemExpandedClass);
    this.elem.firstElementChild.setAttribute('aria-expanded', false);
  }

  /**
   * Get the depth of nesting for this menu. (starts at 1).
   *
   * @return {Integer} The depth of the menu.
   */
  getDepth() {
    return this.depth;
  }

  /**
   * Get the id attribute of the nav dom object.
   *
   * @return {String} The id attribute
   */
  getId() {
    return this.id;
  }

}
