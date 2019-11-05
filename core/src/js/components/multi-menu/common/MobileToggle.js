import {createEvent} from '../../../utilities/events';
import {isEnter, isSpace} from '../../../utilities/keyboard';

/**
 * Nav Toggle for the mobile/desktop button. Opens and closes the navigation
 */
export default class MobileToggle {

  /**
   * Create a new toggle.
   *
   * @param {HTMLLIElement} element  - The <li> that is the NavItem in the DOM.
   * @param {Object} options         - A simple object of key values used as
   *                                   configuration options for each instance.
   */
  constructor(element, nav, options) {
    // Params.
    this.elem = element;
    this.nav = nav;

    // Merge options with defualts.
    this.options = Object.assign({
      toggleText: element.innerText || 'Open',
      closeText: 'Close',
      firstLevelSelector: ':scope > .su-multi-menu__menu'
    }, options);

    this.openEvent = createEvent('openNav');
    this.closeEvent = createEvent('closeNav');
    this.firstLevel = this.nav.elem.querySelector(this.options.firstLevelSelector);

    // Event listeners.
    this.elem.addEventListener('click', this);
    this.elem.addEventListener('keydown', this);

    // Hide mobile menu by default.
    this.closeNav();

    // Clicking anywhere outside of attached nav closes all the children.
    document.addEventListener('click', event => {
      // The element that was clicked.
      const target = event.target || event.srcElement;
      // If the clicked element was not in my nav wrapper, close me.
      let found = target.closest('#' + this.nav.id);
      if (!found) {
        this.closeNav();
        this.nav.closeAllSubNavs();
      }
    });

  }

 /**
  * Handler for all events attached to an instance of this class. This method
  * must exist when events are bound to an instance of a class
  * (vs a function). This method is called for all events bound to an
  * instance. It inspects the instance (this) for an appropriate handler
  * based on the event type. If found, it dispatches the event to the
  * appropriate handler.
  *
  * @param {KeyboardEvent} event - The keyboard event object.
  *
  * @return {*}
  *  Whatever the dispatched handler returns (in our case nothing)
  */
  handleEvent(event) {
    event = event || window.event;
    // If this class has an onEvent method, e.g. onClick, onKeydown,
    // invoke it.
    const handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

    if (typeof this[handler] === 'function') {
      // The element that was clicked.
      const target = event.target || event.srcElement;
      return this[handler](event, target);
    }
  }

  /**
   * Handle the click event on the toggle.
   *
   * @param {Event} event         - The event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onClick(event, target) {

    // Only act if the target is my element.
    if (target !== this.elem) {
      return;
    }

    // Don't go nowhere.
    event.preventDefault();

    // Toggle open and close.
    if (this.isExpanded()) {
      this.closeNav();
    }
    else {
      this.openNav();
      this.nav.elem.querySelector('a').focus();
    }
  }

  /**
   * Event handler for key: Down Arrow.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;
    // Do the click toggle for enter and space keys.
    if (isEnter(theKey) || isSpace(theKey)) {
      this.onClick(event, this.elem);
    }
  }

  /**
   * Close any  navs that might be open, then mark this  nav open.
   * Optionally force focus on the first element in the nav (for keyboard nav)
   */
  openNav() {
    this.setExpanded('true');
    this.elem.innerText = this.options.closeText;
    this.firstLevel.classList.remove('mobile-hidden');
    // Alert others the nav has opened.
    this.elem.dispatchEvent(this.openEvent);
  }

  /**
   * Mark this  closed, and restore the button text to what it was
   * initially.
   */
  closeNav() {
    this.setExpanded('false');
    this.elem.innerText = this.options.toggleText;
    this.firstLevel.classList.add('mobile-hidden');
    // Alert others the  nav has closed.
    this.elem.dispatchEvent(this.closeEvent);
  }

  /**
   * Set whether or not this is expanded.
   *
   * @param {Boolean} val true for an expanded menu.
   */
  setExpanded(val) {
    this.elem.setAttribute('aria-expanded', val);
  }

  /**
   * Is this expanded?
   *
   * @return {Boolean}
   *   Returns wether or not the item is expanded.
   */
  isExpanded() {
    return this.elem.getAttribute('aria-expanded') === 'true';
  }

}
