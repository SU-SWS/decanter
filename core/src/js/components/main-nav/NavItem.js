import {theSubNavs, closeAllSubNavs} from './globals';
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
    this.link = this.item.querySelector('a');
    this.item.addEventListener('keydown', this);
  }

  // -------------------------------------------------------------------------
  // Helper Methods.
  // -------------------------------------------------------------------------

  /**
   * Is this the first item in the containing Nav?
   *
   * @return {Boolean}
   *  Wether or not the item is the first item.
   */
  isFirstItem() {
    return this.nav.items.indexOf(this) === 0;
  }

  /**
   * Is this the last item in the containing Nav?
   *
   * @return {Boolean}
   *  Wether or not the item is the last item.
   */
  isLastItem() {
    return this.nav.items.indexOf(this) === (this.nav.items.length - 1);
  }


  // -------------------------------------------------------------------------
  // Functional Methods.
  // -------------------------------------------------------------------------



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
    const handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

    // What was clicked.
    const target = event.target || event.srcElement;

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
    const theKey = event.key || event.keyCode;

    // Handler for the space and enter key.
    if (isSpace(theKey) || isEnter(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      if (this.isSubNavTrigger()) {
        this.openSubNav();
      }
      else {
        window.location = this.link;
      }
    }
    // Handler for the down arrow key.
    else if (isDownArrow(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      if (this.nav.isDesktopNav()) {
        if (this.isSubNavTrigger()) {
          this.openSubNav();
        }
        else {
          this.nav.focusOn('next', this);
        }
      }
      else {
        this.nav.focusOn('next', this);
      }
    }
    // Handler for the up arrow key.
    else if (isUpArrow(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      this.nav.focusOn('prev', this);
    }
    // Handler for the left arrow key.
    else if (isLeftArrow(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      if (this.nav.isDesktopNav()) {
        if (this.nav.isSubNav()) {
          this.closeSubNav();
          let parent = this.nav.getParentNav();
          // Focus on the previous item in the parent nav.
          parent.focusOn('prev', this.nav.elem);
        }
        else {
          this.nav.focusOn('prev', this);
        }
      }
      else {
        if (this.isSubNavItem()) {
          // Close the subnav and put the focus on the trigger.
          this.closeSubNav(true);
        }
      }
    }
    // Handler for the right arrow key.
    else if (isRightArrow(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      if (this.nav.isDesktopNav()) {
        if (this.nav.isSubNav()) {
          this.closeSubNav();
          let parent = this.nav.getParentNav();
          // Focus on the next item in the parent nav.
          parent.focusOn('next', this.nav.elem);
        }
        else {
          this.nav.focusOn('next', this);
        }
      }
      else {
        if (this.isSubNavTrigger()) {
          this.openSubNav();
        }
      }
    }
    // Handler for the home key.
    else if (isHome(theKey)) {
      this.nav.focusOn('first');
    }
    // Handler for the end key.
    else if (isEnd(theKey)) {
      this.nav.focusOn('last');
    }
    // Handler for the tab key.
    else if (isTab(theKey)) {
      event.stopPropagation();
      const shifted = event.shiftKey;
      if (this.isSubNavItem()
        && ((!shifted && this.isLastItem())
          || (shifted && this.isFirstItem()))
      ) {
        this.closeSubNav(true);
      }
    }
  }

}
