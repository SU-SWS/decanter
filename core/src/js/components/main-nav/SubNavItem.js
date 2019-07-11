import 'custom-event-polyfill'; // @see https://github.com/krambuhl/custom-event-polyfill
import NavItem from './NavItem';

/**
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it.
 */
export default class SubNavItem extends NavItem {

  /**
   * Create an instance.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  constructor(item, nav, options) {

    // I'm feelin supa!
    super(item, nav, options);

    // Create the children navs based on the parent constructor as we can
    // have different parent nav classes.
    let construct = nav.constructor;
    let navOptions = options;
    navOptions.depth = nav.getDepth() + 1;
    this.subNav = new construct(this.item, navOptions);

    // Create the custom events.
    this.createCustomEvents();
  }

  /**
   * Handler for click events.
   *
   * Dispatched from this.handleEvent().
   * Click is only bound to subnav triggers. However, click bubbles up from
   * subnav items to the trigger.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onClick(event, target) {

    // If the click is not on the trigger then ignore.
    if (target !== this.link) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (this.isExpanded()) {
      this.closeSubNav();
      this.link.focus();
    }
    else {
      this.openSubNav();
      this.getElement('firstSubnavLink').focus();
    }
  }

  /**
   * Handles the opening of a sub-nav.
   *
   * If this is a subnav trigger, open the corresponding subnav.
   * Optionally force focus on the first element in the subnav
   * (for keyboard nav).
   */
  openSubNav() {
    this.setSubNav('open');
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.setSubNav('close');
  }

  /**
   * Open or close the subnav.
   *
   * @param  {String} state Either open or close.
   */
  setSubNav(state = 'open') {

    let hooks = {
      open: {
        pre: this.preOpenEvent,
        post: this.openEvent
      },
      close: {
        pre: this.preCloseEvent,
        post: this.closeEvent
      }
    };

    // Pre event dispatch.
    this.item.dispatchEvent(hooks[state].pre);

    // Toggle the state.
    if (state === 'open') {
      this.setExpanded(false);
    }
    else {
      this.setExpanded(false);
    }

    // Post event dispatch.
    this.item.dispatchEvent(hooks[state].post);
  }



  /**
   * Is this expanded? Can only return TRUE if this is a subnav trigger.
   *
   * @return {Boolean}
   *  Wether or not the item is expanded.
   */
  isExpanded() {
    return this.link.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Set whether or not this is expanded.
   * Only meaningful if this is a subnav trigger.
   *
   * @param {String} value - What to set the aria-expanded attribute of this's
   *                         link to.
   */
  setExpanded(value) {
    this.link.setAttribute('aria-expanded', value);
    if (value) {
      this.item.classList.add(this.options.itemExpandedClass);
    }
    else {
      this.item.classList.remove(this.options.itemExpandedClass);
    }
  }

  /**
   * Event handler for key press: Left Arrow
   *
   * Go and focus on the previous sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowLeft(event, target) {
    // Go up a level and close the nav.
    event.preventDefault();

    if (this.getDepth() > 1) {
      this.getElement('parentItem').focus();
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
    }
    else {
      super.onKeydownArrowLeft(event, target);
    }
  }

  /**
   * Event handler for key press: Right Arrow
   *
   * Go and focus on the next sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {
    // Go down a level and open the SubNav.
    event.preventDefault();
    this.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }

  /**
   * Event handler for key press: Space
   *
   * Do what the click would have done by passing through the event.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownSpace(event, target) {
    this.onClick(event, target);
  }

  /**
   * Event handler for key press: Enter
   *
   * Do what the click would have done by passing through the event.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownEnter(event, target) {
    this.onClick(event, target);
  }

  /**
   * Returns an HTML element relative to this current item.
   *
   * @param {String} what A key for the switch statement. (first, last, etc).
   *
   * @return {HTMLElement|False} The HTMLElement related to the passed in key.
   */
  getElement(what) {
    switch (what) {
      case 'firstSubnavLink':
        return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li a');

      case 'firstSubnavItem':
        return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li');

      case 'subnav':
        return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul');
    }

    // Carry along to the parent class for more.
    return super.getElement(what);
  }

  /**
   * Create some custom event listeners.
   *
   * Before and after opening a subnav item fire off custom events. These are
   * the custom events.
   */
  createCustomEvents() {
    // CustomEvent Options.
    let opts = {
      bubbles: true,
      detail: {
        nav: this.nav
      }
    };
    // this.preOpenEvent is dispatched in this.openSubNav().
    this.preOpenEvent = new CustomEvent(
      'preOpenSubnav',
      opts
    );
    // this.openEvent is dispatched in this.openSubNav().
    this.openEvent = new CustomEvent(
      'openSubnav',
      opts
    );
    // this.preCloseEvent is dispatched in this.closeSubNav().
    this.preCloseEvent = new CustomEvent(
      'preCloseSubnav',
      opts
    );
    // this.closeEvent is dispatched in this.closeSubNav().
    this.closeEvent = new CustomEvent(
      'closeSubnav',
      opts
    );
  }
}
