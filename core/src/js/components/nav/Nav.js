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
      // If this nav has a toggle element, close that too.
      if (this.toggle) {
        this.toggle.closeNav();
      }
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

}