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
export default class NavAbstract {

  /**
   * [constructor description]
   * @param {[type]} elem    [description]
   * @param {[type]} options [description]
   */
  constructor(elem, options) {
    // Save the passed in configuration options.
    this.options = options;
    // Prefixing the random ids.
    this.idPrefix = options.idPrefix || 'su-';
    // The nav element.
    this.elem = elem;
    // Depth of menu item.
    this.depth = options.depth || 1;
    // The toggle menu button or none.
    this.toggle = options.toggle || false;
    // The JS Classes to use for building nav items.
    this.itemClasses = options.itemClasses || {
      single: NavItem,
      sub: SubNavItem
    };
    // Set the z-index if configured.
    if (this.options.zIndex > 1) {
      this.elem.style.zIndex = this.options.zIndex;
    }
    // Give this instance a unique ID.
    let id = Math.random().toString(36).substr(2, 9);
    this.id = this.idPrefix + id;
    this.elem.id = this.idPrefix + id;
    // Remove the no-js class.
    this.elem.classList.remove('no-js');
    // Initialize items.
    this.navItems = [];
    this.subNavItems = [];
    // Class properties.
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';

    if (this.options.activePath === true) {
      this.setActivePath();
    }

  }

  /**
   * [createNavItems description]
   */
  createNavItems() {
    let items = this.elem.querySelectorAll('#' + this.id + ' > ul > li');
    items.forEach(
      item => {
        // SubNavItems have special behaviour.
        if (item.querySelector(item.tagName + ' > ul')) {
          this.subNavItems.push(new this.itemClasses['sub'](item, this, this.options));
        }
        // NavItems have specific event handling.
        else {
          this.navItems.push(new this.itemClasses['single'](item, this, this.options));
        }
      }
    );
  }

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
   * [setActivePath description]
   */
  setActivePath() {
    var pathname = window.location.pathname;
    var anchor = window.location.hash;
    if (pathname.length) {
      let currentLink;

      if (!anchor) {
        currentLink = this.elem.querySelector("a[href*='" + pathname + "']");
      }
      else {
        currentLink = this.elem.querySelector("a[href*='" + anchor + "']");
      }

      if (currentLink) {
        while (currentLink) {
          if (currentLink.getAttribute('id') === this.id) {
            currentLink = false;
          }
          else if (currentLink.tagName === 'LI') {
            currentLink.classList.add(this.itemActiveClass);
          }
          currentLink = currentLink.parentNode;
        }
      }
    }
  }

  /**
   * [expandActivePath description]
   */
  expandActivePath() {
    let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
    if (actives.length) {
      actives.forEach(
        item => {
          item.classList.add(this.itemExpandedClass);
          item.firstElementChild.setAttribute('aria-expanded', true);
        }
      );
    }
  }

  /**
   * Gotta close em all.
   * @return {[type]} [description]
   */
  closeAllSubNavs() {
    this.subNavItems.forEach(
      (item, event) => {
        item.closeSubNav();
      }
    );
  }

  /**
   * [closeParentSubNavs description]
   * @return {[type]} [description]
   */
  closeThisSubNav() {
    this.elem.classList.remove(this.options.itemExpandedClass);
    this.elem.firstElementChild.setAttribute('aria-expanded', false);
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
  focusOn(link, currentItem = null) {
    // console.log('This function has been deprecated.');
  }

  /**
   * [getDepth description]
   */
  getDepth() {
    return this.depth;
  }

}
