import { createEvent } from '../../utilities/events';

/**
 *
 */

export default class NavToggle {

  /**
   * [constructor description]
   * @param {[type]} element [description]
   * @param {[type]} options [description]
   */
  constructor(element, options) {

    // Params.
    this.element = element;
    this.options = options;
    this.nav = options.nav;
    this.toggleText = options.toggleText || element.innerText;
    this.closeText = options.closeText || 'Close';
    this.clickHandler = options.clickHandler || this;
    this.openEvent = createEvent('openNav');
    this.closeEvent = createEvent('closeNav');

    // Event listeners.
    this.element.addEventListener('click', this.clickHandler);
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
   * Handler for click events. click is only bound to the  toggle.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event   - The keyboard event object.
   */
  onClick(event) {
    // Don't go nowhere.
    event.preventDefault();
    event.stopPropagation();

    // Toggle open and close.
    if (this.isExpanded()) {
      this.closeNav();
    }
    else {
      this.openNav(false);
    }
  }

  /**
   * Close any  navs that might be open, then mark this  nav open.
   * Optionally force focus on the first element in the nav (for keyboard nav)
   *
   * @param {Boolean} focusOnFirst - Whether or not to also focus on the
   *                                 first element in the subnav.
   */
  openNav(focusOnFirst = true) {
    // closeAllNavs();

    this.setExpanded(true);
    this.element.innerText = this.closeText;

    // Focus on the first link in the nav.
    if (focusOnFirst) {
      this.nav.querySelector("a").focus();
    }

    // Alert others the  nav has opened.
    this.element.dispatchEvent(this.openEvent);
  }

  /**
   * Mark this  closed, and restore the button text to what it was
   * initially.
   */
  closeNav() {
    if (this.isExpanded()) {
      this.setExpanded('false');
      this.element.innerText = this.toggleText;
      // Alert others the  nav has closed.
      this.element.dispatchEvent(this.closeEvent);
    }
  }

  /**
   * Set whether or not this is expanded.
   */
  setExpanded(value) {
    this.element.setAttribute('aria-expanded', value);
    this.nav.setAttribute('aria-expanded', value);
  }

  /**
   * Is this expanded?
   *
   * @return {Boolean}
   *   Returns wether or not the item is expanded.
   */
  isExpanded() {
    return this.element.getAttribute('aria-expanded') === 'true';
  }

}
