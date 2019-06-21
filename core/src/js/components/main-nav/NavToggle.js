import { createEvent } from '../../utilities/events';
import {isHome, isEnd, isTab, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow} from "../../utilities/keyboard";

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
    this.nav = null;
    this.navElement = options.navElement;
    this.toggleText = options.toggleText || element.innerText;
    this.closeText = options.closeText || 'Close';
    this.openEvent = createEvent('openNav');
    this.closeEvent = createEvent('closeNav');

    // Event listeners.
    this.element.addEventListener('click', this);
    this.element.addEventListener('keydown', this);

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
   * Handler for click events. click is only bound to the  toggle.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event   - The keyboard event object.
   */
  onClick(event, target) {

    // Only act if the target is my element.
    if (target !== this.element) {
      return;
    }

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
   * [onKeydown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    // Do the click toggle for enter and space keys.
    if (isEnter(theKey) || isSpace(theKey)) {
      this.onClick(event, target);
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
    this.nav.elem.setAttribute('aria-expanded', value);
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

  /**
   * Setter for nav property.
   * @param {[type]} nav [description]
   */
  setNav(nav) {
    this.nav = nav;
  }

}
