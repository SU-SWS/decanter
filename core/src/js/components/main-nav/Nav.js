import { closeAllMobileNavs } from './globals';
import { isEsc, isSpace, isEnter } from "../../utilities/keyboard";
import { createEvent } from '../../utilities/events';
import NavItem from './NavItem';
import SubNavItem from './SubNavItem';

/**
 * Represent a navigation menu. May be the top nav or a subnav.
 *
 * @prop {HTMLElement|NavItem} elem       - The element that is the nav. May
 *                                          be a main nav (<nav>) or a subnav
 *                                          (NavItem).
 * @prop {Nav}                 topNav     - The instance of Nav that models
 *                                          the top nav. If this is the top
 *                                          nav, topNav === this.
 * @prop {HTMLButtonElement}   toggle     - The <button> in the DOM that
 *                                          toggles the menu on mobile. NULL
 *                                          if this is a subnav.
 * @prop {String}              toggleText - The initial text of the mobile
 *                                          toggle (so we can reset it when
 *                                          the mobile nav is closed).
 * @prop {Array}               items      - Instances of NavItem that model
 *                                          each element in the nav
 */
export default class Nav {

  /**
   * Create a Nav
   *
   * @param {HTMLElement|NavItem} elem - The element that is the nav menu.
   *                                     May be a main nav (<nav>) or a subnav
   *                                     (NavItem).
   */
  constructor(elem, options) {

    // Save the passed in configuration options.
    this.options = options;

    // Prefixing the random ids.
    this.idPrefix = options.idPrefix || 'su-';

    // The nav element.
    this.elem = elem;

    // The toggle menu button or none.
    this.toggle = options.toggle || false;

    // Set the z-index if configured.
    if (this.options.zIndex > 1) {
      this.elem.style.zIndex = this.options.zIndex;
    }

    // Remove the class that formats the nav for browsers with javascript disabled.
    this.elem.classList.remove('no-js');

    // Give this instance a unique ID.
    let id = Math.random().toString(36).substr(2, 9);
    this.id = this.idPrefix + id;
    this.elem.id = this.idPrefix + id;

    // Initialize items.
    this.items = [];
    this.createNavItems();

    // Initialize the event listeners.
    this.createEventListeners();
  }

  /**
   * Create the children nav items.
   * @return {[type]} [description]
   */
  createNavItems() {
    let items = this.elem.querySelectorAll(this.elem.tagName + ' > ul > li');
    items.forEach(
      item => {
        // Subnav items have special behaviour.
        if (item.querySelector(item.tagName + " > ul")) {
          this.items.push(new SubNavItem(item, this, this.options));
        }
        else {
          this.items.push(new NavItem(item, this, this.options));
        }
      }
    );
  }

  /**
   * [createEventListeners description]
   * @return {[type]} [description]
   */
  createEventListeners() {
    // What do when key down?
    this.elem.addEventListener('keydown', this);

    // If this nav has a toggle to open and close it on mobile, add a handler
    // to account for clicking off of the mobile nav.
    if (this.toggle) {
      // Clicking anywhere outside of this nav closes all children.
      document.addEventListener('click', event => {
        // The element that was clicked.
        const target = event.target || event.srcElement;
        // If the clicked element was not in my nav wrapper, close me.
        let found = target.closest('#' + this.id);
        if (!found) {
          event.stopPropagation();
          event.preventDefault();
          this.toggle.closeNav();
        }
      }, false);
    }
  }

  // /**
  //  * Is this rendering the desktop style for the nav?
  //  *
  //  * @return {Boolean}
  //  *  Returns wether or not it is desktop navigation.
  //  */
  // isDesktopNav() {
  //   return getComputedStyle(this.topNav.toggle).display === 'none';
  // }

  // -------------------------------------------------------------------------
  // Functional methods
  // -------------------------------------------------------------------------

  // /**
  //  * Set the focus on the specified link in this nav.
  //  *
  //  * @param {String|Number} link - 'first' | 'last' | 'next'
  //  *                                | 'prev' | numerical index
  //  * @param {NavItem} currentItem - If link is 'next' or 'prev', currentItem
  //  *                                is the NavItem that next / prev is
  //  *                                relative to.
  //  */
  // focusOn(link, currentItem = null) {
  //   let currentIndex = null;
  //   let lastIndex = null;
  //   if (currentItem) {
  //     currentIndex = this.items.indexOf(currentItem);
  //     lastIndex = this.items.length - 1;
  //   }
  //   switch (link) {
  //     case 'first':
  //       this.getFirstLink().focus();
  //       break;
  //
  //     case 'last':
  //       this.getLastLink().focus();
  //       break;
  //
  //     case 'next':
  //       if (currentIndex === lastIndex) {
  //         this.getFirstLink().focus();
  //       }
  //       else {
  //         this.items[currentIndex + 1].link.focus();
  //       }
  //       break;
  //
  //     case 'prev':
  //       if (currentIndex === 0) {
  //         this.getLastLink().focus();
  //       }
  //       else {
  //         this.items[currentIndex - 1].link.focus();
  //       }
  //       break;
  //
  //     default:
  //       if (Number.isInteger(link) && link >= 0 && link < this.items.length) {
  //         this.items[link].link.focus();
  //       }
  //       break;
  //   }
  // }
  //


  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------



  // /**
  //  * Handler for keydown events. keydown is bound to all Nav's.
  //  * Dispatched from this.handleEvent().
  //  *
  //  * @param {KeyboardEvent} event   - The keyboard event object.
  //  * @param {HTMLElement}   target  - The HTML Element target object.
  //  */
  // onKeydown(event, target) {
  //   const theKey = event.key || event.keyCode;
  //
  //   if (isEsc(theKey)) {
  //     if (this.isTopNav()) {
  //       if (!this.isDesktopNav()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //         this.closeMobileNav();
  //         this.toggle.focus();
  //       }
  //     }
  //     else {
  //       if (this.()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //         this.elem.closeSubNav(true);
  //       }
  //     }
  //   }
  //   else if (isEnter(theKey) || isSpace(theKey)) {
  //     if (target === this.toggle) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       if (!this.isExpanded()) {
  //         this.openMobileNav();
  //       }
  //     }
  //   }
  // }

}
