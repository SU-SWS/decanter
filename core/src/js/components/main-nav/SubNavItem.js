import {isHome, isEnd, isTab, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow} from "../../utilities/keyboard";
import 'custom-event-polyfill'; // @see https://github.com/krambuhl/custom-event-polyfill
import NavItem from './NavItem';

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

    // Create the children navs based on the parent constructor.
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
    }
    else {
      this.openSubNav(false);
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
    this.item.dispatchEvent(this.preOpenEvent);
    this.setExpanded(true);
    this.item.dispatchEvent(this.openEvent);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   *
   */
  closeSubNav() {
    this.item.dispatchEvent(this.preCloseEvent);
    this.setExpanded(false);
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
    if (value) {
      this.item.classList.add(this.options.itemExpandedClass);
    }
    else {
      this.item.classList.remove(this.options.itemExpandedClass);
    }
  }

  /**
   * [onKeydownArrowLeft description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowLeft(event, target) {
    // Go up a level and close the nav.
    event.preventDefault();

    let node = this.item.parentNode.parentNode.previousElementSibling;
    if (node) {
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
      node.querySelector("a").focus();
    }
    else {
      super.onKeydownArrowLeft(event, target);
    }

  }

  /**
   * [onKeydownArrowRight description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowRight(event, target) {
    // Go down a level and open the SubNav.
    event.preventDefault();
    this.openSubNav();
    this.item.querySelector("#" + this.item.getAttribute("id") + " > ul li a").focus();
  }


  /**
   * Handler for keypress of
   *
   **/
  onKeydownSpace(event, target) {
    this.onClick(event, target);
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownEnter(event, target) {
    this.onClick(event, target);
  }

  /**
   * [createCustomEvents description]
   * @return {[type]} [description]
   */
  createCustomEvents() {
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
    // this.closeEvent is dispatched in this.closeSubNav().
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

}
