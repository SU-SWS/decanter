import {closeAllMobileNavs} from './globals';
import {isEsc, isSpace, isEnter} from '../../utilities/keyboard';
import {createEvent} from '../../utilities/events';
import NavItem from './NavItem';

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
  constructor(elem) {
    this.elem = elem;
    this.topNav = this.getTopNav();
    // If this is a subnav, we need the correpsonding HTMLElement for
    // .querySelector()
    if (elem instanceof NavItem) {
      elem = elem.item;
    }
    this.toggle = elem.querySelector(elem.tagName + ' > button');
    this.toggleText = this.toggle ? this.toggle.innerText : '';
    this.items = [];
    // Add custom events to alert others when the mobile nav
    // opens or closes.
    // this.openEvent is dispatched in this.openMobileNav().
    this.openEvent = createEvent('openNav');
    // this.closeEvent is dispatched in this.closeMobileNav().
    this.closeEvent = createEvent('closeNav');

    // Initialize items
    let items = elem.querySelectorAll(elem.tagName + ' > ul > li');
    items.forEach(
      item => {
        this.items.push(new NavItem(item, this));
      }
    );

    elem.addEventListener('keydown', this);

    if (this.toggle) {
      this.toggle.addEventListener('click', this);
    }
  }

  // -------------------------------------------------------------------------
  // Helper Methods.
  // -------------------------------------------------------------------------

  /**
   * Get the instance of Nav that represents the top level nav of this
   * instance.
   *
   * @return {Nav}
   *  Returns the navigation instance.
   */
  getTopNav() {
    let nav = this;
    while (nav.elem instanceof NavItem) {
      // If nav is the main nav, nav.elem will be an HTMLElement
      // (the <nav> element).
      // If nav.elem is a NavItem, then this is a subNav, so get the Nav that
      // contains the NavItem.
      nav = nav.elem.nav;
    }
    return nav;
  }

  /**
   * Get the instance of Nav that represents the parent of this instance.
   * If this is the top nav, return this so you can safely call methods on it.
   *
   * @return {Nav}
   *   Returns the navigation instance.
   */
  getParentNav() {
    return this.isSubNav() ? this.elem.nav : this;
  }


  /**
   * Is this expanded?
   * If this is a subnav, ask the subnav (NavItem) if it's expanded.
   * Otherwise (this is the top nav), check aria-expanded.
   *
   * @return {Boolean}
   *   Returns wether or not the item is expanded.
   */
  isExpanded() {
    if (this.elem instanceof NavItem) {
      return this.elem.isExpanded();
    }

    return this.elem.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Set whether or not this is expanded.
   * If this is a subnav, let the subnav (NavItem) handled it.
   * Otherwise (this is the top nav), set aria-expanded.
   *
   * @param {String} value - What to set the aria-expanded attribute of
   *                         this's link to.
   */
  setExpanded(value) {
    if (this.elem instanceof NavItem) {
      this.elem.setExpanded(value);
    }
    else {
      this.elem.setAttribute('aria-expanded', value);
      if (this.toggle) {
        this.toggle.setAttribute('aria-expanded', value);
      }
    }
  }

  /**
   * Is this rendering the desktop style for the nav?
   *
   * @return {Boolean}
   *  Returns wether or not it is desktop navigation.
   */
  isDesktopNav() {
    return getComputedStyle(this.topNav.toggle).display === 'none';
  }

  /**
   * Is this the top nav?
   *
   * @return {Boolean}
   *  Returns wether or not it is the top nav item.
   */
  isTopNav() {
    return this.topNav === this;
  }

  /**
   * Is this a subnav?
   *
   * @return {Boolean}
   *  Returns wether or not this is a subnav item.
   */
  isSubNav() {
    return this.topNav !== this;
  }

  /**
   * Get the first item in this nav.
   *
   * @return {NavItem}
   *  Returns wether or not this is the first item.
   */
  getFirstItem() {
    return this.items.length ? this.items[0] : null;
  }

  /**
   * Get the last item in this nav.
   *
   * @return {NavItem}
   *  Returns wether or not this is the last item.
   */
  getLastItem() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }

  /**
   * Get the link associated with the first item in this nav.
   *
   * @return {HTMLAnchorElement}
   *  Returns the very first link.
   */
  getFirstLink() {
    return this.items.length ? this.getFirstItem().link : null;
  }

  /**
   * Get the link associated with the last item in this nav.
   *
   * @return {HTMLAnchorElement}
   *  Returns the very last link.
   */
  getLastLink() {
    return this.items.length ? this.getLastItem().link : null;
  }

  // -------------------------------------------------------------------------
  // Functional methods
  // -------------------------------------------------------------------------

  /**
   * Set the focus on the specified link in this nav.
   *
   * @param {String|Number} link - 'first' | 'last' | 'next'
   *                                | 'prev' | numerical index
   * @param {NavItem} currentItem - If link is 'next' or 'prev', currentItem
   *                                is the NavItem that next / prev is
   *                                relative to.
   */
  focusOn(link, currentItem = null) {
    let currentIndex = null;
    let lastIndex = null;
    if (currentItem) {
      currentIndex = this.items.indexOf(currentItem);
      lastIndex = this.items.length - 1;
    }
    switch (link) {
      case 'first':
        this.getFirstLink().focus();
        break;

      case 'last':
        this.getLastLink().focus();
        break;

      case 'next':
        if (currentIndex === lastIndex) {
          this.getFirstLink().focus();
        }
        else {
          this.items[currentIndex + 1].link.focus();
        }
        break;

      case 'prev':
        if (currentIndex === 0) {
          this.getLastLink().focus();
        }
        else {
          this.items[currentIndex - 1].link.focus();
        }
        break;

      default:
        if (Number.isInteger(link) && link >= 0 && link < this.items.length) {
          this.items[link].link.focus();
        }
        break;
    }
  }

  /**
   * Close any mobile navs that might be open, then mark this mobile nav open.
   * Optionally force focus on the first element in the nav (for keyboard nav)
   *
   * @param {Boolean} focusOnFirst - Whether or not to also focus on the
   *                                 first element in the subnav.
   */
  openMobileNav(focusOnFirst = true) {
    closeAllMobileNavs();

    this.setExpanded('true');
    this.toggle.innerText = 'Close';
    if (focusOnFirst) {
      // Focus on the first top level link.
      this.focusOn('first');
    }
    // Alert others the mobile nav has opened.
    this.elem.dispatchEvent(this.openEvent);
  }

  /**
   * Mark this mobile closed, and restore the button text to what it was
   * initially.
   */
  closeMobileNav() {
    if (this.isExpanded()) {
      this.setExpanded('false');
      this.toggle.innerText = this.toggleText;
      // Alert others the mobile nav has closed.
      this.elem.dispatchEvent(this.closeEvent);
    }
  }

  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------

  /**
   * Handler for all events attached to an instance of this class. This method
   * must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   *
   * @return {*}
   *  Whatever the dispatched handler returns (in our case nothing)
   */
  handleEvent(event) {
    event = event || window.event;
    // If this class has an onEvent method, e.g. onClick, onKeydown,
    // invoke it.
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
   * Handler for click events. click is only bound to the mobile toggle.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event   - The keyboard event object.
   * @param {HTMLElement}   target  - The HTML Element target object.
   */
  onClick(event, target) {
    if (target === this.toggle) {
      event.preventDefault();
      event.stopPropagation();
      if (this.isExpanded()) {
        this.closeMobileNav();
      }
      else {
        this.openMobileNav(false);
      }
    }
  }

  /**
   * Handler for keydown events. keydown is bound to all Nav's.
   * Dispatched from this.handleEvent().
   *
   * @param {KeyboardEvent} event   - The keyboard event object.
   * @param {HTMLElement}   target  - The HTML Element target object.
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    if (isEsc(theKey)) {
      if (this.isTopNav()) {
        if (!this.isDesktopNav()) {
          event.preventDefault();
          event.stopPropagation();
          this.closeMobileNav();
          this.toggle.focus();
        }
      }
      else {
        if (this.isExpanded()) {
          event.preventDefault();
          event.stopPropagation();
          this.elem.closeSubNav(true);
        }
      }
    }
    else if (isEnter(theKey) || isSpace(theKey)) {
      if (target === this.toggle) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.isExpanded()) {
          this.openMobileNav();
        }
      }
    }
  }

}
