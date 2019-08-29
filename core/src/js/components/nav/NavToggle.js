import {createEvent} from '../../utilities/events';
import {isEnter, isSpace} from '../../utilities/keyboard';

/**
 * Nav Toggle for the mobile/desktop button. Opens and closes the navigation
 */
export default class NavToggle {

  /**
   * Create a new toggle.
   *
   * @param {HTMLLIElement} element  - The <li> that is the NavItem in the DOM.
   * @param {Object} options         - A simple object of key values used as
   *                                   configuration options for each instance.
   */
  constructor(element, options) {
    // Params.
    this.element = element;
    this.options = options;
    this.nav = options.nav || null;
    this.navElement = options.navElement;
    this.toggleText = options.toggleText || element.innerText;
    this.closeText = options.closeText || 'Close';
    this.openEvent = createEvent('openNav');
    this.closeEvent = createEvent('closeNav');

    // Event listeners.
    this.element.addEventListener('click', this);
    this.element.addEventListener('keydown', this);
    this.element.addEventListener('focus', this);

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
   * Handle the focus event on the toggle.
   *
   * @param {Event} event         - The event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onFocus(event, target) {

    // This is a bit of a hack for the nav with the search, if you shift tab
    // back out of the navigation the nav items don't know about this event and
    // the focus goes outside of the nav and on to the toggle. This is to
    // catch that behavior and to close the nav.
    if (this.isExpanded() && event.shiftKey) {
      this.closeNav();
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
    if (target !== this.element) {
      return;
    }

    var isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search');

    // Don't go nowhere.
    event.preventDefault();
    event.stopPropagation();

    // Toggle open and close.
    if (this.isExpanded()) {
      this.closeNav();
    }
    else {
      this.openNav();

      if (isSearch) {
        this.nav.elem.querySelector('.su-site-search__input').focus();
      }
      else {
        this.nav.elem.querySelector('a').focus();
      }

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
      this.onClick(event, this.element);
    }

  }

  /**
   * Close any  navs that might be open, then mark this  nav open.
   * Optionally force focus on the first element in the nav (for keyboard nav)
   */
  openNav() {
    this.setExpanded('true');
    this.element.innerText = this.closeText;

    // Alert others the nav has opened.
    this.element.dispatchEvent(this.openEvent);
  }

  /**
   * Mark this  closed, and restore the button text to what it was
   * initially.
   */
  closeNav() {
    this.setExpanded('false');
    this.element.innerText = this.toggleText;
    // Alert others the  nav has closed.
    this.element.dispatchEvent(this.closeEvent);
  }

  /**
   * Set whether or not this is expanded.
   *
   * @param {Boolean} val true for an expanded menu.
   */
  setExpanded(val) {
    this.element.setAttribute('aria-expanded', val);
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
   *
   * @param {NavAbstract} nav The attached navigation item.
   */
  setNav(nav) {
    this.nav = nav;
  }

}
