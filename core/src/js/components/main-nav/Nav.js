import {isEsc} from '../../utilities/keyboard';
import NavAbstract from './NavAbstract';
import NavToggle from './NavToggle';

/**
 * Represent a navigation menu. May be the top nav or a subnav.
 */
export default class Nav extends NavAbstract {

  /**
   * Create a nav container istance.
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
    // Run the NavAbstract class first.
    super(elem, options);

    // Create navItems.
    this.createNavItems();

    // Initialize the event listeners.

    this.createEventListeners();

    // Create the Mobile/Desktop nav toggle..
    if (options.toggleSelector) {
      this.createNavToggle();
    }

    // Add an active class to items that match the current url.
    if (options.activePath) {
      this.setActivePath();
    }

    // Expand to the active items.
    if (options.expandActivePath) {
      this.expandActivePath();
    }
  }

  /**
   * Create new event listeners for the nav element and our custom events.
   */
  createEventListeners() {
    // What do when key down?
    this.elem.addEventListener('keydown', this);

    // Listen to the close so we can act on it.
    this.elem.addEventListener('preOpenSubnav', this);
  }

  // -------------------------------------------------------------------------
  // Event Handlers.
  // -------------------------------------------------------------------------

  /**
   * A subnav event was called. Handle it.
   *
   * @param {Event} event - The event object.
   */
  onPreOpenSubnav(event) {
    // Somebody clicked a subnav trigger. Check to see if it is one of my
    // subnavitems. If it is one of my subnav items, close all of the subnav
    // items so that everything on the same level are shut.
    let triggerId = event.detail.nav.id || null;
    if (triggerId === this.id) {
      this.closeAllSubNavs();
    }
  }

  /**
   * Handle the key press events.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    // Close all the navs.
    if (isEsc(theKey)) {
      this.closeAllSubNavs();
    }
  }

  /**
   * Create the toggle element.
   *
   * The toggle element is the item that opens and closes the mobile nav menu.
   */
  createNavToggle() {
    // Find the element.
    let toggleElement = this.elem.querySelector(this.elem.tagName + this.options.toggleSelector);

    // If we cannot find a toggle element return null.
    if (!toggleElement) {
      return;
    }

    // Attach the behaviour.
    let toggleOptions = {
      navElement: this.elem,
      nav: this
    };
    this.toggle =
    this.options.toggle = new NavToggle(toggleElement, toggleOptions);
  }

  /**
   * Expand open the active path.
   */
  expandActivePath() {
    // Let super do its thing first.
    super.expandActivePath();

    // This condition is specific for the main menu nav only as identified by
    // the toggle item. On Desktop with initial expanded menu items we need to
    // collapse the first level only and leave the rest expanded.
    if (this.toggle && window.innerWidth > 768) {
      this.closeAllSubNavs();
    }
  }

  // ---------------------------------------------------------------------------
  // Deprecated functions
  // ---------------------------------------------------------------------------

  /**
   * @deprecated since 5.0.1 to be removed in 6.0
   */
  getTopNav() {}
  getParentNav() {}
  isExpanded() {}
  setExpanded() {}
  isDesktopNav() {}
  isTopNav() {}
  isSubNav() {}
  getFirstItem() {}
  getLastItem() {}
  getFirstLink() {}
  getLastLink() {}
  focusOn() {}
  openMobileNav() {}
  closeMobileNav() {}
  onClick() {}

}
