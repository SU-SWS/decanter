import {normalizeKey} from '../../utilities/keyboard';

/**
 * Represent an item in a navigation menu. May be a direct link or a subnav
 * trigger.
 *
 * @prop {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem
 * @prop {HTMLElement|Nav} nav    - the Nav that contains the element.
 *                                  May be a main nav (<nav>) or subnav (Nav).
 * @prop {HTMLLIElement}   link   - the <a> in the DOM that is contained in
 *                                  item (the <li>).
 */
export default class NavItemAbstract {

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  constructor(item, nav, options) {
    this.options = options;
    this.item = item;
    this.nav = nav;
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

    // If the caller passed in their own event handling use that instead.
    if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
      return true;
    }
    // Otherwise, check to see if we have an event available.
    else if (typeof this[handler] === 'function') {
      return this[handler](event, target);
    }
  }

  /**
   * [getUserEvent description]
   * @param  {[type]} constructorName [description]
   * @param  {[type]} depth           [description]
   * @param  {[type]} handler         [description]
   * @return {[type]}                 [description]
   */
  handleUserEvent(constructorName, depth, handler, event, target) {

    // Check the deep nesting for the event.
    if (this.options.itemEvents &&
    this.options.itemEvents[constructorName] &&
    this.options.itemEvents[constructorName][depth] &&
    this.options.itemEvents[constructorName][depth][handler]) {

      this.options.itemEvents[constructorName][depth][handler](event, this);
      return true;
    }

    // No event provided
    return false;
  }

  /**
   * Handler for keydown events. keydown is bound to all NavItem's.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   * @return {*} - Mixed
   */
  onKeydown(event, target) {
    let theKey = event.key || event.keyCode;
    let normalized = normalizeKey(theKey);

    // We don't know about that key.
    if (!normalized) {
      return;
    }

    // Prepare a dynamic handler.
    let handler = 'onKeydown'
      + normalized.charAt(0).toUpperCase()
      + normalized.slice(1);
    let constructorName = this.constructor.name;
    let depth = this.getDepth();

    // If the caller passed in their own event handling use that instead.
    if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
      return true;
    }
    // Check if a handling is on this instance.
    else if (typeof this[handler] === 'function') {
      return this[handler](event, target);
    }
  }

  /**
   * Set the focus on the specified link in this nav.
   *
   * @param {String|Number} link - 'first' | 'last' | 'next'
   *                                | 'prev' | numerical index
   * @param {NavItem} currentItem - If link is 'next' or 'prev', currentItem
   *                                is the NavItem that next / prev is
   *                                relative to.
   */
  focusOn(what) {
    switch (what) {
      case 'first':
        this.item.querySelector('a').focus();
        break;

      case 'last':
        this.item.querySelector(this.item.tagName + ' > ul:lastChild a').focus();
        break;

      case 'next':
        this.item.nextElementSibling.querySelector('a').focus();
        break;

      case 'prev':
        this.item.previousElementSibling.querySelector('a').focus();
        break;

      default:
        this.item.querySelector('a').focus();
        break;
    }
  }

  /**
   * [getDepth description]
   * @return {[type]} [description]
   */
  getDepth() {
    return this.nav.getDepth();
  }

}
