import {isHome, isEnd, isTab, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow} from "../../utilities/keyboard";
import Nav from './Nav';
import NavItem from './NavItem';
import 'custom-event-polyfill'; // @see https://github.com/krambuhl/custom-event-polyfill

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
export default class SubNavItem extends NavItem {

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  constructor(item, nav, options) {

    // I'm feelin supa!
    super(item, nav, options);

    // Create the children navs.
    this.subNav = new Nav(this.item, options);

    // Add custom events to alert others when a subnav opens or closes.
    // this.openEvent is dispatched in this.openSubNav().
    this.preOpenEvent = new CustomEvent(
      'preOpenSubnav',
      {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }
    );
    this.openEvent = new CustomEvent(
      'openSubnav',
      {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }
    );

    // this.closeEvent is dispatched in this.closeSubNav().
    this.preCloseEvent = new CustomEvent(
      'preCloseSubnav',
      {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }
    );
    this.closeEvent = new CustomEvent(
      'closeSubnav',
      {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }
    );

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
    }
    else {
      this.openSubNav(false);
    }
  }

  /**
   * [onKeyDown description]
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
    this.item.dispatchEvent(this.preOpenEvent);
    this.item.classList.add(this.options.itemExpandedClass);
    this.setExpanded(true);
    this.item.dispatchEvent(this.openEvent);
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
    this.item.dispatchEvent(this.preCloseEvent);
    this.item.classList.remove(this.options.itemExpandedClass);
    this.setExpanded('false');
    if (focusOnTrigger) {
      this.link.focus();
    }
    this.item.dispatchEvent(this.closeEvent);
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

}
