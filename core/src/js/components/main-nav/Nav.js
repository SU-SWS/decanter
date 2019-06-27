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
    this.navItems = [];
    this.subNavItems = [];
    this.createNavItems();
    // Initialize the event listeners.
    this.createEventListeners();
    // Once initialized pass me back to the toggle.
    if (this.toggle) {
      this.toggle.setNav(this);
    }
    // Add an active class to the children.
    this.itemActiveClass = options.itemActiveClass || "active";
    this.setActivePath();
  }

  /**
   * Create the children nav items.
   * @return {[type]} [description]
   */
  createNavItems() {
    let items = this.elem.querySelectorAll("#" + this.id + ' > ul > li');
    items.forEach(
      item => {
        // Subnav items have special behaviour.
        if (item.querySelector(item.tagName + " > ul")) {
          this.subNavItems.push(new SubNavItem(item, this, this.options));
        }
        // NavItems have specific event handling.
        else {
          this.navItems.push(new NavItem(item, this, this.options));
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

    // Listen to the close so we can act on it.
    this.elem.addEventListener('preOpenSubnav', this);
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
   * [preOpenSubnav description]
   * @param  {[type]} event     [description]
   * @param  {[type]} parentNav [description]
   * @return {[type]}           [description]
   */
  onPreOpenSubnav(event) {
    // Somebody clicked a subnav trigger. Check to see if it is one of my
    // subnavitems. If it is one of my subnav items, close all of the subnav
    // items so that everything on the same level are shut.
    let triggerId = event.detail.nav.id || null;
    if (triggerId == this.id) {
      this.closeAllSubNavs();
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
   * [onKeydown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    if (isEsc(theKey)) {
      this.closeAllSubNavs();
    }
  }

  /**
   * [setActivePath description]
   */
  setActivePath() {
    if (this.options.activePath !== true) {
      return;
    }

    var pathname = window.location.pathname;
    var anchor = window.location.hash;
    if (pathname.length) {
      let currentLink;

      if (!anchor) {
        currentLink = this.elem.querySelector("a[href*='" + pathname + "']");
      } else {
        currentLink = this.elem.querySelector("a[href*='" + anchor + "']");
      }

      if (currentLink) {
        while(currentLink) {
          if (currentLink.getAttribute('id') == this.id) {
            currentLink = false;
          }
          else if (currentLink.tagName == "LI") {
            currentLink.classList.add(this.itemActiveClass);
          }
          currentLink = currentLink.parentNode;
        }
      }
    }
  }

}
