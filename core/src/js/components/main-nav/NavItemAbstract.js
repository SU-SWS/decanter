import {normalizeKey} from '../../utilities/keyboard';

/**
 * NavItemAbstract Class
 *
 * The most abstract version of a NavItem. All NavItem types should extend
 * this class in order to have a psuedo interface and default methods.
 */
export default class NavItemAbstract {

  /**
   * Constructor magic method.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  constructor(item, nav, options) {
    // Save all configuration options somewhere handy.
    this.options = options;
    // A reference to the HTML item this instance is attached to.
    this.item = item;
    // A reference to the Nav instance this NavItem is created by.
    this.nav = nav;
    // The link <a> html element reference.
    this.link = this.item.querySelector(this.item.tagName + ' > a');
  }

  // -------------------------------------------------------------------------
  // Event Handlers.
  // -------------------------------------------------------------------------

  /**
   * Handler for all events attached to an instance of this class. This method
   * must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   *
   * @return {*}
   *   Whatever the dispatched handler returns (in our case nothing)
   */
  handleEvent(event) {
    event = event || window.event;

    // If this class has an onEvent method (onClick, onKeydown) invoke it.
    let handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);
    let target = event.target || event.srcElement;
    let constructorName = this.constructor.name;
    let depth = this.getDepth();

    // If the caller passed in their own event handling use their function.
    // See `MainEvents.js` and `main-nav.js` for an example.
    if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
      return true;
    }
    // Otherwise, check to see if we have an event available on this class.
    else if (typeof this[handler] === 'function') {
      return this[handler](event, target);
    }

    // If an event has happened and we don't have a handler just let the browser
    // do its defualt thing.
  }

  /**
   * Check and call creator supplied event override functions.
   *
   * When constructing a new Nav item the developer can pass in functions to
   * override keyboard and mouse events to provide specific behaviour to a
   * single depth of item in specific nav.
   *
   * @param {NavItemAbstract} constructorName An extension of the NavItemAbstract class.
   * @param {int}             depth           The current navItem's depth. (starts at 1)
   * @param {String}          handler         The name of the method to call.
   * @param {KeyboardEvent}   event           The keyboard event.
   * @param {HTMLElement}     target          The HTML element target.
   *
   * @return {Boolean}          Success status.
   */
  handleUserEvent(constructorName, depth, handler, event, target) {

    // Check the deep nesting for the event.
    // We look for the following nesting
    // ClassName
    //  |_ Depth of menu item
    //    |_ Formatted name of event (eg: onEventName)
    if (this.options.itemEvents &&
    this.options.itemEvents[constructorName] &&
    this.options.itemEvents[constructorName][depth] &&
    this.options.itemEvents[constructorName][depth][handler]) {

      this.options.itemEvents[constructorName][depth][handler](event, this);
      return true;
    }

    // No event provided.
    return false;
  }

  /**
   * Handler for keydown events. keydown is bound to all NavItem's.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   *
   * @return {*} - Mixed
   */
  onKeydown(event, target) {
    let theKey = event.key || event.keyCode;
    let normalized = normalizeKey(theKey);

    // We don't know or need to handle the key that was pressed.
    if (!normalized) {
      return;
    }

    // Prepare a dynamic handler.
    let handler = 'onKeydown'
      + normalized.charAt(0).toUpperCase()
      + normalized.slice(1);
    let constructorName = this.constructor.name;
    let depth = this.getDepth();

    // If the caller passed in their own event handling use their function.
    // See `MainEvents.js` and `main-nav.js` for an example.
    if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
      return true;
    }
    // Check if a handling is on this instance.
    else if (typeof this[handler] === 'function') {
      return this[handler](event, target);
    }

    // If a KeyDown event has happened and we don't have a handler just let the
    // browser do its defualt thing.
  }

  /**
   * Set the focus on an element.
   *
   * The focus to be set on the specified element in relation to this nav item.
   *
   * @param {String|Number} what    A key for the switch in getElement(). Options can
   *                                include but are not limited to:
   *                                first, last, next, prev, parentItem, parentButton
   *                                DEPRECATED - Number, do not pass in numerical index.
   * @param {NavItem} currentItem   DEPRECATED - DO NOT USE.
   */
  focusOn(what, currentItem = null) {
    let element = false;

    // See if `what` in an idex, otherwise get the relative keyword.
    if (Number.isInteger(what)) {
      try {
        element = this.item.parentNode.querySelectorAll("li")[what];
      }
      catch(error) {
        // `what` was an invalid index.
        element = false;
      }
    }
    // Use the relative shortcut function to fetch an HTMLElement.
    else {
      element = this.getElement(what);
    }

    // If after all of that we get an element we should focus on it.
    if (element) {
      element.focus();
    }
  }

  /**
   * Returns an HTML element relative to this current item.
   *
   * @param  {String} what A key for the switch statement. (first, last, etc).
   *
   * @return {HTMLElement|False} The HTMLElement related to the passed in key.
   */
  getElement(what) {
    switch (what) {
      // Focus on the first item in the same level of this list.
      case 'first':
        return this.item.parentNode.firstElementChild.firstChild;

      case 'last':
        return this.item.parentNode.lastElementChild.firstChild;

      case 'next':
        return this.item.nextElementSibling.querySelector('a');

      case 'prev':
        return this.item.previousElementSibling.querySelector('a');

      case 'parentItem':
        return this.item.parentNode.parentNode.querySelector('a');

      case 'parentButton':
        return this.item.parentNode.parentNode.querySelector('button');

      case 'parentNav':
        return this.item.parentNode.parentNode;

      default:
        return false;
    }
  }

  /**
   * Get this item's nav depth.
   *
   * Each time we create a SubNav we increment the item by one and attach it to
   * the nav element. This function gets the containing Nav instance and
   * retreives the depth as each item in the nav is at the same depth.
   *
   * @return {int} Which level of the nav we are on starting at 1.
   */
  getDepth() {
    return this.nav.getDepth();
  }

}
