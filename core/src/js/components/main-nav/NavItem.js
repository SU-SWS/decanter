import {isHome, isEnd, isTab, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow} from "../../utilities/keyboard";
import Nav from './Nav';
import {createEvent} from '../../utilities/events';

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
export default class NavItem {

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
    this.link.addEventListener('keydown', this);
    this.link.addEventListener('click', this);
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

    // What was clicked.
    let target = event.target || event.srcElement;

    // If the caller passed in their own event handling use that instead.
    if (this.options.itemEvents && this.options.itemEvents[handler]) {
      new this.options.itemEvents[handler](event, this);
    }
    // Otherwise, check to see if we have an event available.
    else if (typeof this[handler] === 'function') {
      return this[handler](event, target);
    }
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
    console.log(theKey);
  }

  /**
   * [onClick description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onClick(event, target) {
    console.log(target);
  }

}
