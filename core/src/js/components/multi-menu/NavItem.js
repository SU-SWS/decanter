import {theSubNavs, closeAllSubNavs} from './globals';
import {
  isHome,
  isEnd,
  isTab,
  isSpace,
  isEnter,
  isLeftArrow,
  isRightArrow,
  isUpArrow,
  isDownArrow
} from '../../utilities/keyboard';
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
 * @prop {Nav}             subNav - if item is the trigger for a subnav, this
 *                                  is an instonce Nav that models the subnav.
 */
export default class NavItem {

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  constructor(item, nav) {
    this.item = item;
    this.nav = nav;
    this.link = this.item.querySelector('a');
    this.subNav = null;
    this.item.addEventListener('keydown', this);

    if (this.isSubNavTrigger()) {
      this.subNav = new Nav(this);
      // Add custom events to alert others when a subnav opens or closes.
      // this.openEvent is dispatched in this.openSubNav().
      this.openEvent = createEvent('openSubnav');
      // this.closeEvent is dispatched in this.closeSubNav().
      this.closeEvent = createEvent('closeSubnav');

      // Maintain global list of subnavs for closeAllSubNavs().
      theSubNavs.push(this);
      this.item.addEventListener('click', this);
    }
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

  /**
   * Is this a trigger that opens / closes a subnav?
   *
   * @return {Boolean}
   *  Wether or not the item is the sub nav trigger item.
   */
  isSubNavTrigger() {
    return this.item.lastElementChild.tagName.toUpperCase() === 'UL';
  }

  /**
   * Is this a component of a subnav - either the trigger or a nav item?
   *
   * @return {Boolean}
   *  Wether or not the item is a subnav item.
   */
  isSubNavItem() {
    return (this.isSubNavTrigger() || this.nav.isSubNav());
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
  }

  // -------------------------------------------------------------------------
  // Functional Methods.
  // -------------------------------------------------------------------------

  /**
   * Handles the opening of a sub-nav.
   *
   * If this is a subnav trigger, open the corresponding subnav.
   * Optionally force focus on the first element in the subnav
   * (for keyboard nav).
   *
   * @param {Boolean} focusOnFirst - whether or not to also focus on the first
   *                                 element in the subnav
   */
  openSubNav(focusOnFirst = true) {
    closeAllSubNavs();

    if (this.isSubNavTrigger()) {
      this.item.classList.add('su-main-nav__item--expanded');
      this.setExpanded('true');
      if (focusOnFirst) {
        this.subNav.focusOn('first');
      }
      this.item.dispatchEvent(this.openEvent);
    }
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   *
   * @param {Boolean} focusOnTrigger - Whether or not to also focus on the
   *                                 subnav's trigger.
   */
  closeSubNav(focusOnTrigger = false) {
    if (this.isSubNavTrigger()) {
      if (this.isExpanded()) {
        this.item.classList.remove('su-main-nav__item--expanded');
        this.setExpanded('false');
        if (focusOnTrigger) {
          this.link.focus();
        }
        this.item.dispatchEvent(this.closeEvent);
      }
    }
    else if (this.isSubNavItem()) {
      // This.nav.elem should be a subNavTrigger.
      this.nav.elem.closeSubNav(focusOnTrigger);
    }
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
    if (this.isExpanded()) {
      this.closeSubNav();
    }
    else {
      this.openSubNav(false);
    }
    // If the click is directly on the trigger, then we're done.
    if (target === this.link) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
