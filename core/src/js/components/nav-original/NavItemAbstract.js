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
   */
  handleEvent(event) {
    event = event || window.event;
    let target = event.target || event.srcElement;
    let handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

    // If this class has an onEvent method (onClick, onKeydown) invoke it.
    this.callEvent(event, target, handler);
  }

  /**
   * Handler for keydown events. keydown is bound to all NavItem's.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
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

    // Do eet.
    this.callEvent(event, target, handler);
  }

  /**
   * After handling has been done, actually execute the event.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   * @param  {String} handler     - the name of the function handler.
   */
  callEvent(event, target, handler) {

    let constructorName = this.constructor.name;
    let depth = this.getDepth();

    // If the caller passed in their own event handling use their function.
    // See `MainEvents.js` and `main-nav.js` for an example.
    if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
      return;
    }
    // Otherwise, check to see if we have an event available on this class.
    else if (typeof this[handler] === 'function') {
      this[handler](event, target);
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
   * Returns an HTML element relative to this current item.
   *
   * @param  {String} what A key for the switch statement. (first, last, etc).
   *
   * @return {HTMLElement|False} The HTMLElement related to the passed in key.
   */
  getElement(what) {
    try {
      switch (what) {
        case 'first':
          return this.item.parentNode.firstElementChild.firstChild;
        case 'last':
          return this.item.parentNode.lastElementChild.firstChild;
        case 'firstElement':
          return this.item.parentNode.firstElementChild;
        case 'lastElement':
          return this.item.parentNode.lastElementChild;
        case 'next':
          return this.item.nextElementSibling.querySelector('a');
        case 'prev':
          return this.item.previousElementSibling.querySelector('a');
        case 'nextElement':
          return this.item.nextElementSibling;
        case 'prevElement':
          return this.item.previousElementSibling;
        case 'parentItem':
          var node = this.item.parentNode.parentNode;
          if (node.tagName === 'NAV') { return false; }
          return node.querySelector('a');
        case 'parentButton':
          return this.item.parentNode.parentNode.querySelector('button');
        case 'parentNav':
          return this.item.parentNode.parentNode;
        case 'parentNavLast':
          return this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a');
        case 'parentNavFirst':
          return this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a');
        case 'parentNavNext':
          return this.item.parentNode.parentNode.nextElementSibling;
        case 'parentNavPrev':
          return this.item.parentNode.parentNode.previousElementSibling;
        case 'parentNavPrevItem':
          return this.item.parentNode.parentNode.previousElementSibling.querySelector('a');
        default:
          return false;
      }
    }
    catch (err) {
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
   * @return {Integer} Which level of the nav we are on starting at 1.
   */
  getDepth() {
    return this.nav.getDepth();
  }

}
