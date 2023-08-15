(self["webpackChunkdecanter"] = self["webpackChunkdecanter"] || []).push([[73],{

/***/ 514:
/***/ (function() {

const accordions = document.querySelectorAll('.su-accordion');
const titleButtons = document.querySelectorAll('.su-accordion__button');
const expandButtons = document.querySelectorAll('.su-accordion__expand-all');
const collapseButtons = document.querySelectorAll('.su-accordion__collapse-all');
const isExpanded = x => x.getAttribute('aria-expanded') === 'true';
const setExpanded = (x, value) => x.setAttribute('aria-expanded', value);
const setHidden = (x, value) => x.setAttribute('aria-hidden', value);
document.addEventListener('DOMContentLoaded', event => {
  Array.prototype.forEach.call(accordions, acc => {
    acc.classList.remove('no-js');
  });
  Array.prototype.forEach.call(titleButtons, btn => {
    setExpanded(btn, 'false');
    setHidden(btn.parentNode.nextElementSibling, 'true');
  });
});
Array.prototype.forEach.call(titleButtons, btn => {
  btn.addEventListener('click', function (e) {
    if (!isExpanded(btn)) {
      setExpanded(btn, 'true');
      setHidden(btn.parentNode.nextElementSibling, 'false');
    } else {
      setExpanded(btn, 'false');
      setHidden(btn.parentNode.nextElementSibling, 'true');
    }
  }, false);
});
Array.prototype.forEach.call(expandButtons, expandBtn => {
  expandBtn.addEventListener('click', function (e) {
    const closestAccordion = expandBtn.closest('.su-accordion');
    const closestBtns = closestAccordion.querySelectorAll('.su-accordion__button');
    Array.prototype.forEach.call(closestBtns, closestBtn => {
      setExpanded(closestBtn, 'true');
      setHidden(closestBtn.parentNode.nextElementSibling, 'false');
    });
  }, false);
});
Array.prototype.forEach.call(collapseButtons, collapseBtn => {
  collapseBtn.addEventListener('click', function (e) {
    const closestAccordion = collapseBtn.closest('.su-accordion');
    const closestBtns = closestAccordion.querySelectorAll('.su-accordion__button');
    Array.prototype.forEach.call(closestBtns, closestBtn => {
      setExpanded(closestBtn, 'false');
      setHidden(closestBtn.parentNode.nextElementSibling, 'true');
    });
  }, false);
});

/***/ }),

/***/ 821:
/***/ (function() {

/**
 * Alert components.
 **/
const alertDismiss = document.querySelectorAll('.su-alert__dismiss-button');

// Fire when ready.
document.addEventListener('DOMContentLoaded', event => {
  // Loop through each alert with a dismiss button.
  Array.prototype.forEach.call(alertDismiss, alrt => {
    alrt.addEventListener('click', function (e) {
      // When a dismiss button is pressed. Find the nearest parent wrapper and
      // remove it all from the dom.
      e.target.closest('.su-alert').remove();
    }, false);
  });
});

/***/ }),

/***/ 360:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./core/src/js/components/alert/alert.js
var alert_alert = __webpack_require__(821);
// EXTERNAL MODULE: ./core/src/js/components/accordion/accordion.js
var accordion = __webpack_require__(514);
// EXTERNAL MODULE: ./core/src/js/core/core.js
var core = __webpack_require__(71);
;// CONCATENATED MODULE: ./core/src/js/components/main-nav/globals.js
// ---------------------------------------------------------------------------
// Global variables and functions shared amongst the nav code
// ---------------------------------------------------------------------------

// Variables

/**
 *  Global record of all main navs on the page
 *  - populated in the document.ready function in main-nav.js
 *  - used by closeAllMobileNavs
 * @type {Array}
 */
var theNavs = [];

/**
 *  Global record of all sub navs on the page (may be in different main navs
 *  - populated by the NavItem constructor
 *  - used by closeAllSubNavs
 * @type {Array}
 */
var theSubNavs = [];

// Functions

/**
 * Close all subnavs on the page
 */
const closeAllSubNavs = () => {
  theSubNavs.forEach(subNav => {
    subNav.closeSubNav();
  });
};

/**
 * Close all mobile navs on the page
 */
const closeAllMobileNavs = () => {
  theNavs.forEach(theNav => {
    theNav.closeMobileNav();
  });
};
;// CONCATENATED MODULE: ./core/src/js/utilities/keyboard.js
// ---------------------------------------------------------------------------
// Keyboard helper functions
// ---------------------------------------------------------------------------

const isHome = theKey => theKey === 'Home' || theKey === 122;
const isEnd = theKey => theKey === 'End' || theKey === 123;
const isTab = theKey => theKey === 'Tab' || theKey === 9;
const isEsc = theKey => theKey === 'Escape' || theKey === 'Esc' || theKey === 27;
const isSpace = theKey => theKey === ' ' || theKey === 'Spacebar' || theKey === 32;
const isEnter = theKey => theKey === 'Enter' || theKey === 13;
const isLeftArrow = theKey => theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37;
const isRightArrow = theKey => theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39;
const isUpArrow = theKey => theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38;
const isDownArrow = theKey => theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40;

/**
 * Return a consistent string for each key validation.
 *
 * @param {*} theKey the code from a keypress event.
 *
 * @return {String} A string name for the key that was pressed.
 */
const normalizeKey = theKey => {
  // Key Value Map of the normalized string and the check function.
  const map = {
    home: isHome,
    end: isEnd,
    tab: isTab,
    escape: isEsc,
    space: isSpace,
    enter: isEnter,
    arrowLeft: isLeftArrow,
    arrowRight: isRightArrow,
    arrowUp: isUpArrow,
    arrowDown: isDownArrow
  };

  // Loop through the key/val object and run the check function (val) in order
  // to return the normalized string (key)
  for (var entry of Object.entries(map)) {
    if (entry[1](theKey)) {
      return entry[0];
    }
  }
  return false;
};
;// CONCATENATED MODULE: ./core/src/js/utilities/events.js
/**
 * Create an event with the specified name in a browser-agnostic way.
 *
 * @param {string} eventName - the name of the event
 * @param {Object} data - Additional data along with the event.
 *
 * @return {Event} - instance of event which can be dispatched / listened for
 */
const createEvent = (eventName, data) => {
  if (typeof eventName !== 'string' || eventName.length <= 0) {
    return null;
  }
  // Modern browsers.
  if (typeof Event == 'function') {
    return new Event(eventName, data);
  }
  // IE
  else {
    let ev = document.createEvent('UIEvent');
    ev.initEvent(eventName, true, true, data);
    return ev;
  }
};
;// CONCATENATED MODULE: ./core/src/js/components/main-nav/NavItem.js





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
class NavItem {
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
    return this.nav.items.indexOf(this) === this.nav.items.length - 1;
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
    return this.isSubNavTrigger() || this.nav.isSubNav();
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
  openSubNav() {
    let focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
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
  closeSubNav() {
    let focusOnTrigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this.isSubNavTrigger()) {
      if (this.isExpanded()) {
        this.item.classList.remove('su-main-nav__item--expanded');
        this.setExpanded('false');
        if (focusOnTrigger) {
          this.link.focus();
        }
        this.item.dispatchEvent(this.closeEvent);
      }
    } else if (this.isSubNavItem()) {
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
    const handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);
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
      } else {
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
        } else {
          this.nav.focusOn('next', this);
        }
      } else {
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
        } else {
          this.nav.focusOn('prev', this);
        }
      } else {
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
        } else {
          this.nav.focusOn('next', this);
        }
      } else {
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
      if (this.isSubNavItem() && (!shifted && this.isLastItem() || shifted && this.isFirstItem())) {
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
    } else {
      this.openSubNav(false);
    }
    // If the click is directly on the trigger, then we're done.
    if (target === this.link) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/main-nav/Nav.js





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
class Nav {
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
    items.forEach(item => {
      this.items.push(new NavItem(item, this));
    });
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
    } else {
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
  focusOn(link) {
    let currentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
        } else {
          this.items[currentIndex + 1].link.focus();
        }
        break;
      case 'prev':
        if (currentIndex === 0) {
          this.getLastLink().focus();
        } else {
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
  openMobileNav() {
    let focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
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
    const handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);
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
      } else {
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
      } else {
        if (this.isExpanded()) {
          event.preventDefault();
          event.stopPropagation();
          this.elem.closeSubNav(true);
        }
      }
    } else if (isEnter(theKey) || isSpace(theKey)) {
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
;// CONCATENATED MODULE: ./core/src/js/components/main-nav/main-nav.js



document.addEventListener('DOMContentLoaded', event => {
  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';
  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);

  // Process each nav.
  let firstZindex;
  navs.forEach((nav, index) => {
    // Remove the class that formats the nav for browsers with javascript disabled.
    nav.classList.remove('no-js');

    // Create an instance of Nav, which in turn creates appropriate instances of NavItem.
    const theNav = new Nav(nav);

    // Remember the nav for closeAllMobileNavs().
    theNavs.push(theNav);

    // Manage zindexes in case there are multiple navs near enough for subnavs to overlap.
    // Rare, but it happens in the styleguide.
    if (index === 0) {
      firstZindex = getComputedStyle(nav, null).zIndex;
    } else {
      nav.style.zIndex = firstZindex - 300 * index;
    }
  }); // navs.forEach

  // Clicking anywhere outside a nav closes all navs.
  document.addEventListener('click', event => {
    // The element that was clicked.
    const target = event.target || event.srcElement;
    // If target is not under a main nav close all navs.
    if (!target.matches('.' + navClass + ' ' + target.tagName)) {
      closeAllSubNavs();
      closeAllMobileNavs();
    }
  }, false);
}); // on DOMContentLoaded.
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/globals.js
// The css class that this following behaviour is applied to.
const secondaryNavClass = 'su-secondary-nav';

// All Secondary navs.
var secondaryNavs = document.querySelectorAll('.' + secondaryNavClass);
;// CONCATENATED MODULE: ./core/src/js/components/nav/ActivePath.js
/**
 * ActivePath
 *
 * This class contains features and functionality for handling the finding and
 * setting of the active trail of a menu.
 */
class ActivePath {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element The DOM object of the navigation menu.
   * @param {Mixed} item          The Navigation Class.
   * @param {Object} options      An optional object of meta information.
   */
  constructor(element, item) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.elem = element;
    this.item = item;
    // CSS Class properties.
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemActiveTrailClass = options.itemActiveTrailClass || 'active-trail';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';
  }

  /**
   * Dynamically add an active path to the menu tree.
   *
   * Find all links with the current window's url and add the
   * options.itemActiveClass class to the LI element container all the way up
   * the menu tree back to the root.
   */
  setActivePath() {
    let path = window.location.pathname;
    let anchor = window.location.hash || '';
    let query = window.location.search || '';
    let currentItem = false;

    // Queries to run to find matching active paths in order of unqiueness.
    let finders = [this.elem.querySelector("a[href*='" + anchor + "']"), this.elem.querySelector("a[href*='" + query + "']"), this.elem.querySelector("a[href='" + path + query + anchor + "']"), this.elem.querySelector("a[href*='" + path + query + "']")];

    // Go through the queries and see if we have any results.
    finders.forEach(function (val) {
      if (!currentItem && val) {
        currentItem = val;
      }
    });

    // Can't find anything. End.
    if (!currentItem) {
      return;
    }

    // While we have parents go up and add the active class.
    while (currentItem) {
      // If we are on a LI element we need to add the active class.
      if (currentItem.tagName === 'LI') {
        currentItem.classList.add(this.itemActiveClass);
        break;
      }

      // Always increment.
      currentItem = currentItem.parentNode;
    }
  }

  /**
   * Expand all menus in the active path.
   *
   * After this.setActivePath() has been run or the itemActiveClass has been set
   * on all the appropriate menu items go through the nav and expand the
   * subNavItems that contain activeClass items.
   */
  expandActivePath() {
    let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
    if (actives.length) {
      actives.forEach(element => {
        // While we have parents go up and add the active class.
        while (element) {
          // End when we get to the parent nav item stop.
          if (element === this.elem) {
            // Stop at the top most level.
            break;
          }

          // If we are on a LI element we need to add the active class.
          if (element.tagName === 'LI') {
            element.classList.add(this.itemExpandedClass);
            element.classList.add(this.itemActiveTrailClass);
            // "Hook" of sorts.
            if (typeof this.item.expandActivePathItem == 'function') {
              this.item.expandActivePathItem(element);
            }
          }

          // Always increment.
          element = element.parentNode;
        }
      });
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/nav/EventHandlerDispatch.js


/**
 * EventHandlerDispatch Class
 *
 * This class provides dynamic handling of click and keyboard events and can be
 * attached to any class/HTMLElement.
 */
class EventHandlerDispatch {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The HTMLElement to bind listeners to.
   * @param {type}      handler   The Javascript Class instance with the
   *                                eventRegistry property.
   */
  constructor(element, handler) {
    this.elem = element;
    this.handler = handler;
    this.createEventListeners();
  }

  /**
   * Create new event listeners.
   */
  createEventListeners() {
    // What to do when a key is down?
    this.elem.addEventListener('keydown', this);

    // Listen to the click so we can act on it.
    this.elem.addEventListener('click', this);

    // Listen to custom events so we can act on it.
    this.elem.addEventListener('preOpenSubnav', this);

    // Listen to custom events so we can act on it.
    this.elem.addEventListener('postOpenSubnav', this);
  }

  /**
   * Handler for all events attached to an instance of this class.
   *
   * This method must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {Event} event - The triggering event.
   */
  handleEvent(event) {
    event = event || window.event;

    // Create an event signature.
    const eventMethod = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);

    // What was clicked.
    const target = event.target || event.srcElement;
    if (eventMethod === 'onKeydown') {
      this.onKeydown(event, target);
    } else if (eventMethod === 'onClick') {
      this.onClick(event, target);
    } else {
      this.callEvent(eventMethod, event, target);
    }
  }

  /**
   * Handler for keydown events.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydown(event, target) {
    let theKey = event.key || event.keyCode;
    let normalized = normalizeKey(theKey);

    // We don't know or need to handle the key that was pressed.
    if (!normalized) {
      return;
    }

    // Prepare a dynamic handler.
    let eventMethod = 'onKeydown' + normalized.charAt(0).toUpperCase() + normalized.slice(1);

    // Do eet.
    this.callEvent(eventMethod, event, target);
  }

  /**
   * Handler for click events.
   *
   * @param  {Event} event  A Javascript event.
   * @param  {HTMLElement} target The target of the event.
   */
  onClick(event, target) {
    this.callEvent('onClick', event, target);
  }

  /**
   * The event handler
   *
   * Initializes and executes an object to handle the Javascript Event as
   * defined by the handlers eventRegistry.
   *
   * @param  {String} eventMethod A string key for the eventRegistry;
   * @param  {Event} event        The Javascript event.
   * @param  {HTMLElement} target The DOM object that the event is triggered on.
   */
  callEvent(eventMethod, event, target) {
    if (typeof this.handler.eventRegistry[eventMethod] === 'function') {
      var eventObj = new this.handler.eventRegistry[eventMethod](this.handler, event, target);
      eventObj.init();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/nav/ElementFetcher.js
/**
 * ElementFetcher Class
 *
 * Provides a relative named DOM navigator for quickly getting elements relative
 * to the provided context.
 */
class ElementFetcher {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The DOM object to use.
   * @param {String} what           A named string.
   */
  constructor(element, what) {
    this.item = element;
    this.what = what;
  }

  /**
   * Attempt to retrieve an item.
   *
   * @return {Boolean|HTMLElement} An element or false if `what` is not found.
   */
  fetch() {
    try {
      switch (this.what) {
        case 'first':
          return this.item.parentNode.firstElementChild.firstChild;
        case 'last':
          return this.item.parentNode.lastElementChild.firstChild;
        case 'firstElement':
          return this.item.parentNode.firstElementChild;
        case 'lastElement':
          return this.item.parentNode.lastElementChild;
        case 'next':
          return this.item.nextElementSibling.querySelector('a');
        case 'prev':
          return this.item.previousElementSibling.querySelector('a');
        case 'nextElement':
          return this.item.nextElementSibling;
        case 'prevElement':
          return this.item.previousElementSibling;
        case 'parentItem':
          var node = this.item.parentNode.parentNode;
          if (node.tagName === 'NAV') {
            return false;
          }
          return node.querySelector('a');
        case 'parentButton':
          return this.item.parentNode.parentNode.querySelector('button');
        case 'parentNav':
          return this.item.parentNode.parentNode;
        case 'parentNavLast':
          return this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a');
        case 'parentNavFirst':
          return this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a');
        case 'parentNavNext':
          return this.item.parentNode.parentNode.nextElementSibling;
        case 'parentNavNextItem':
          return this.item.parentNode.parentNode.nextElementSibling.querySelector('a');
        case 'parentNavPrev':
          return this.item.parentNode.parentNode.previousElementSibling;
        case 'parentNavPrevItem':
          return this.item.parentNode.parentNode.previousElementSibling.querySelector('a');
        case 'firstSubnavLink':
          return this.item.querySelector(':scope > ul li a');
        case 'firstSubnavItem':
          return this.item.querySelector(':scope > ul li');
        case 'subnav':
          return this.item.querySelector(':scope > ul');
        default:
          return false;
      }
    } catch (err) {
      return false;
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/EventAbstract.js


/**
 * EventAbstract
 *
 * An abstract class for creating an interface for working with the
 * EventHandlerDispatch class. This is the signature for all instances
 * that are evoked through the eventRegistry.
 */
class EventAbstract {
  /**
   * Initialize.
   *
   * @param {Object|Mixed} item The javascript object instance that this is bound to.
   * @param {KeyboardEvent|MouseEvent} event - The event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  constructor(item, event, target) {
    this.item = item;
    this.elem = item.elem;
    this.masterNav = item.masterNav;
    this.parentNav = item.parentNav;
    this.target = target;
    this.event = event;
  }

  /**
   * A validation shorcut that should pass before running exec().
   *
   * @return {Boolean} Wether or not the event target is what this instance is bound to.
   */
  isOnTarget() {
    // Check to see if the event target is what this instance is bound to.
    if (this.target === this.elem) {
      return true;
    }
    return false;
  }

  /**
   * A validation method that should pass before running exec().
   *
   * @return {Boolean} Wether or not validation passes.
   */
  validate() {
    // Only act on me.
    if (!this.isOnTarget()) {
      return false;
    }
    return true;
  }

  /**
   * Interface method.
   *
   * When evoking this abstract instance you should use this method as your
   * iterface for calling the action.
   */
  init() {
    if (this.validate()) {
      this.exec();
    }
  }

  /**
   * Shortcut function to find a DOM element.
   *
   * This is a helper function that uses a ElementFetcher instance to navigate
   * and traverse the DOM relative to the current context.
   *
   * @param  {String} what A keyword for what we are trying to find.
   * @param  {HTMLElement} context The relative starting location for the finder.
   * @return {Boolean|HTMLElement} False if not found or an HTMLElement.
   */
  getElement(what) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.elem.parentNode;
    var fetcher = new ElementFetcher(context, what);
    return fetcher.fetch();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnEsc.js


/**
 * OnEsc
 *
 * Event action handler class.
 */
class OnEsc extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    let node = false;
    if (this.item.getDepth() > 1) {
      this.event.stopPropagation();
      this.parentNav.closeSubNav();
      node = this.getElement('parentItem');
    } else {
      this.masterNav.closeAllSubNavs();
      node = this.getElement('first', this.item.parentNode);
    }
    if (node) {
      node.focus();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnSpace.js


/**
 * OnSpace
 *
 * Event action handler class.
 */
class OnSpace extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/SecondaryNavAbstract.js





/**
 * SecondaryNav Class
 *
 * The most abstract version of a SecondaryNav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */
class SecondaryNavAbstract {
  /**
   * Nav Abstract Constructor class.
   *
   * @param {HTMLElement} element    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   */
  constructor(element) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // What HTML element this is bound to.
    this.elem = element;

    // Set some default options.
    var defaultOptions = {
      itemClass: 'su-secondary-nav__item',
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      itemActiveClass: 'su-secondary-nav__item--current',
      itemActiveTrailClass: 'su-secondary-nav__item--active-trail',
      itemParentClass: 'su-secondary-nav__item--parent',
      eventRegistry: {}
    };

    // Merge with passed in options.
    this.options = Object.assign(defaultOptions, options);

    // Remove the no-js class.
    this.elem.classList.remove('no-js');

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);

    // Handle the active state.
    this.activePath = new ActivePath(element, this, this.options);
    this.activePath.setActivePath();

    // Helper Item Variables.
    this.navItems = [];
    this.subNavItems = [];
    this.parentItemSelector = ':scope > ul > .' + this.options.itemParentClass;
    this.navItemSelector = ':scope > ul > .' + this.options.itemClass + ':not(.' + this.options.itemParentClass + ')';
  }

  /**
   * Add the additional state handling after the abstract option has run.
   *
   * @param  {HTMLElement} item The HTMLElement being acted upon.
   */
  expandActivePathItem(item) {
    // For any additional items outside of the core functions.
  }

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {
    var registryDefaults = {
      onKeydownEscape: OnEsc,
      onKeydownSpace: OnSpace
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Kickoff method for generating single and multi-tier nav instances.
   */
  createSubNavItems() {
    // Find all the single and multi-tier items.
    var parentItems = this.elem.querySelectorAll(this.parentItemSelector);
    var leafItems = this.elem.querySelectorAll(this.navItemSelector);

    // Sub Nav Items.
    if (parentItems.length >= 1) {
      this.createParentItems(parentItems);
    }

    // Regular Ol Items.
    if (leafItems.length >= 1) {
      this.createNavItems(leafItems);
    }
  }

  /**
   * Recursive loop for creating nested navigation instances.
   *
   * @param  {NodeList} items A set of sibling parent menu items.
   * @param  {Number} depth The current depth of recursion.
   * @param  {Object|Mixed} parentMenu The instance of the parent menu.
   */
  createParentItems(items) {
    let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let parentMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    items.forEach(item => {
      var itemLink = item.querySelector('a');
      var parentItems = item.querySelectorAll(this.parentItemSelector);
      var leafItems = item.querySelectorAll(this.navItemSelector);
      var nextDepth = depth + 1;
      var parentNav = null;

      // If we have a link add to it.
      if (itemLink) {
        parentNav = this.newParentItem(itemLink, depth, parentMenu);
      }

      // Nested Sub Nav Items.
      if (parentItems.length >= 1) {
        this.createParentItems(parentItems, nextDepth, parentNav);
      }

      // Nested Nav Items.
      if (leafItems.length >= 1) {
        this.createNavItems(leafItems, nextDepth, parentNav);
      }
    });
  }

  /**
   * Recursive loop for creating single level navigation instances.
   *
   * @param  {NodeList} items A set of sibling parent menu items.
   * @param  {Number} depth The current depth of recursion.
   * @param  {Object|Mixed} parentMenu The instance of the parent menu.
   */
  createNavItems(items) {
    let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let parentMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    items.forEach(item => {
      var itemLink = item.querySelector('a');
      if (itemLink) {
        this.newNavItem(itemLink, depth, parentMenu);
      }
    });
  }

  /**
   * Close all subNavItems in this Nav.
   */
  closeAllSubNavs() {
    this.subNavItems.forEach((item, event) => {
      item.closeSubNav();
    });
  }

  /**
   * Close only this subnav.
   */
  closeSubNav() {
    this.closeAllSubNavs();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnHome.js


/**
 * OnHome
 *
 * Event action handler class.
 */
class OnHome extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    var node = this.getElement('first');
    if (node) {
      node.focus();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnArrowDown.js



/**
 * OnArrowDown
 *
 * Event action handler class.
 */
class OnArrowDown extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Go to the next item.
    let node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    // If a node is not found go to home.
    var eventHome = new OnHome(this.item, this.event, this.target);
    eventHome.init();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnEnd.js


/**
 * OnEnd
 *
 * Event action handler class.
 */
class OnEnd extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    var node = this.getElement('last');
    if (node) {
      node.focus();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnArrowUp.js



/**
 * OnArrowUp
 *
 * Event action handler class.
 */
class OnArrowUp extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Go to the previous item.
    let node = this.getElement('prev');
    if (node) {
      node.focus();
      return;
    }

    // Default to the end..
    var eventEnd = new OnEnd(this.item, this.event, this.target);
    eventEnd.init();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnArrowLeft.js



/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
class OnArrowLeft_OnArrowLeft extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If this is a nested item. Go back up a level.
    if (this.item.getDepth() > 1) {
      this.nestedLeft();
    }
    // Otherwise just to to the previous sibling.
    else if (this.item.getDepth() === 1) {
      this.firstLevelLeft();
    }
  }

  /**
   * Action to take on a first level left key press.
   */
  firstLevelLeft() {
    var upevent = new OnArrowUp(this.item, this.event, this.target);
    upevent.init();
  }

  /**
   * Action to take on a nested level left key press
   */
  nestedLeft() {
    let node = this.getElement('parentItem') || this.getElement('parentNavLast');
    this.parentNav.closeSubNav();
    if (node) {
      node.focus();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnArrowRight.js



/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class OnArrowRight extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    // If we are in the second level or more we check about traversing
    // the parent.
    if (this.item.getDepth() > 1) {
      let node = this.getElement('parentNavNext');
      this.parentNav.closeSubNav();
      if (node) {
        node.querySelector('a').focus();
      }
      // Go back to start.
      else {
        this.getElement('parentNavFirst').focus();
      }
    } else {
      var eventDown = new OnArrowDown(this.item, this.event, this.target);
      eventDown.init();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnEnter.js


/**
 * OnEnter
 *
 * Event action handler class.
 */
class OnEnter extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/events/OnTab.js


/**
 * OnTab
 *
 * Event action handler class.
 */
class OnTab extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    const shifted = event.shiftKey;
    let node = null;
    let firstItem = this.masterNav.elem.querySelector('a');
    let lastItem = this.masterNav.elem.firstElementChild.lastElementChild.querySelector('li:last-child');

    // If shift key is held.
    if (shifted) {
      node = this.getElement('prev');
      if (this.target === firstItem) {
        this.masterNav.closeAllSubNavs();
        return;
      }
    }
    // No shift key, just regular ol tab.
    else {
      node = this.getElement('next');
      if (this.target.parentNode === lastItem) {
        this.masterNav.closeAllSubNavs();
        return;
      }
    }

    // No nodes were found. Close up behind us.
    if (!node) {
      if (this.item.getDepth() > 1) {
        this.parentNav.closeSubNav();
      }
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/common/SecondaryNavItem.js


// Keyboard control events.











/**
 * SecondaryNav Class
 */
class SecondaryNavItem {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element      The HTMLElement to bind to.
   * @param {Object|Mixed} masterNav   The top most navigation instance.
   * @param {Object|Mixed} parentNav   The parent nav instance if available.
   * @param {Object} options           An object of metadata.
   */
  constructor(element, masterNav) {
    let parentNav = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    this.elem = element;
    this.item = element.parentNode;
    this.masterNav = masterNav;
    this.parentNav = parentNav;
    this.depth = options.depth || 1;

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);
  }

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {
    var registryDefaults = {
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownSpace: OnSpace,
      onKeydownEnter: OnEnter,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft_OnArrowLeft
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Get the level of nesting for this nav.
   *
   * @return {Integer} The integer of depth starting at 1.
   */
  getDepth() {
    return this.depth;
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/events/OnClick.js


/**
 * OnClick
 *
 * Event action handler class.
 */
class OnClick extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    if (this.item.isExpanded()) {
      this.item.closeSubNav();
      // We blur then focus so that the browser announces the collapse to
      // those using screen readers and other assistive devices.
      this.elem.blur();
      this.elem.focus();
    } else {
      this.item.openSubNav();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/events/OnSpace.js



/**
 * OnSpace
 *
 * Event action handler class.
 */
class OnSpace_OnSpace extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Do the rest of the stuff click does.
    var eventClick = new OnClick(this.item, this.event, this.target);
    eventClick.init();

    // Focus on the first element for keyboard but not clicks.
    if (this.item.isExpanded()) {
      this.getElement('firstSubnavLink').focus();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/events/OnArrowRight.js


/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class OnArrowRight_OnArrowRight extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    // Go down a level and open the SubNav.
    this.event.preventDefault();
    this.item.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/events/OnArrowLeft.js



/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
class OnArrowLeft extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    // Go up a level and close the nav.
    this.event.preventDefault();

    // Previous nav parents link item to focus on.
    var node = this.getElement('parentItem');
    this.parentNav.closeSubNav();

    // If we found a previous item focus on it.
    if (node) {
      node.focus();
    }
    // Overwise do what the navigate left option does.
    else {
      var otherLeft = new OnArrowLeft_OnArrowLeft(this.item, this.event, this.target);
      otherLeft.init();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/SecondarySubNavAccordion.js

// Click handler.

// Keyboard events.










/**
 * SecondarySubNavAccordion Class
 *
 * A sub menu class for creating a menu with accordion functionality.
 */
class SecondarySubNavAccordion {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element     The container wrapper for the nav.
   * @param {Object|Mixed} masterNav  The top most level navigation.
   * @param {Object|Mixed} parentNav  The parent navigation instance if this
   *                                  instance is nested.
   * @param {Object} options          A meta object of information and options.
   */
  constructor(element, masterNav) {
    let parentNav = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    // Vars.
    this.elem = element;
    this.item = element.parentNode;
    this.masterNav = masterNav;
    this.parentNav = parentNav;
    this.depth = options.depth || 1;

    // Merge in defaults.
    this.options = Object.assign({
      itemExpandedClass: 'su-secondary-nav__item--expanded'
    }, options);

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);
  }

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {
    var registryDefaults = {
      onClick: OnClick,
      onKeydownSpace: OnSpace_OnSpace,
      onKeydownEnter: OnSpace_OnSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: OnArrowRight_OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Is this expanded? Can only return TRUE if this is a subnav trigger.
   *
   * @return {Boolean}
   *  Wether or not the item is expanded.
   */
  isExpanded() {
    return this.elem.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Handles the opening of a sub-nav.
   *
   * If this is a subnav trigger, open the corresponding subnav.
   * Optionally force focus on the first element in the subnav
   * (for keyboard nav).
   */
  openSubNav() {
    this.elem.setAttribute('aria-expanded', 'true');
    this.item.classList.add(this.options.itemExpandedClass);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.elem.setAttribute('aria-expanded', 'false');
    this.item.classList.remove(this.options.itemExpandedClass);
  }

  /**
   * Get the level of nesting for this nav.
   *
   * @return {Integer} The integer of depth starting at 1.
   */
  getDepth() {
    return this.depth;
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/accordion/SecondaryNavAccordion.js




/**
 * A secondary menu with accordion buttons.
 */
class SecondaryNavAccordion extends SecondaryNavAbstract {
  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Let super do what super does.
    super(elem, options);

    // Ok do the creation.
    this.createSubNavItems();

    // Expand the active path.
    this.activePath.expandActivePath();
  }

  /**
   * Add the additional state handling after the abstract option has run.
   *
   * @param  {HTMLElement} item The HTMLElement being acted upon.
   */
  expandActivePathItem(item) {
    item.firstElementChild.setAttribute('aria-expanded', 'true');
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavAccordion} A brand new instance.
   */
  newParentItem(item, depth, parent) {
    var opts = this.options;
    opts.depth = depth;
    var nav = new SecondarySubNavAccordion(item, this, parent, opts);
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * Function for creating a new single tier navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondaryNavItem} A brand new instance.
   */
  newNavItem(item, depth, parent) {
    var opts = this.options;
    opts.depth = depth;
    var nav = new SecondaryNavItem(item, this, parent, opts);
    this.navItems.push(nav);
    return nav;
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/secondary-nav-accordion.js



document.addEventListener('DOMContentLoaded', event => {
  // Process each secondary nav accordion.
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--accordion/)) {
      new SecondaryNavAccordion(nav);
    }
  });
});
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleClick.js


/**
 * SubNavToggleClick
 *
 * Event action handler class.
 */
class SubNavToggleClick extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    if (this.parentNav.isExpanded()) {
      this.parentNav.closeSubNav();
      this.elem.blur();
      this.elem.focus();
    } else {
      this.parentNav.openSubNav();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleSpace.js



/**
 * SubNavToggleSpace
 *
 * Event action handler class.
 */
class SubNavToggleSpace extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    // No jumping around.
    this.event.preventDefault();

    // Call the click because it is pretty much the same thing.
    var eventClick = new SubNavToggleClick(this.item, this.event, this.target);
    eventClick.init();

    // Only focus on keyboard nav not on click.
    if (this.parentNav.isExpanded()) {
      var node = this.getElement('firstSubnavLink');
      if (node) {
        node.focus();
      }
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowDown.js


/**
 * SubNavToggleArrowDown
 *
 * Event action handler class.
 */
class SubNavToggleArrowDown extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If on the toggle item and the menu is expanded go down in to the first
    // menu item link as the focus.
    if (this.parentNav.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.getElement('firstSubnavLink').focus();
    }
    // If current focus is on the toggle and the menu is not open, go to the
    // next sibling menu item.
    else {
      var node = this.getElement('next') || this.getElement('parentNavNext') || this.getElement('last');
      if (node) {
        node.focus();
      }
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowLeft.js


/**
 * SubNavToggleArrowLeft
 *
 * Event action handler class.
 */
class SubNavToggleArrowLeft extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    event.stopPropagation();
    event.preventDefault();
    this.parentNav.elem.focus();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowUp.js


/**
 * SubNavToggleArrowUp
 *
 * Event action handler class.
 */
class SubNavToggleArrowUp extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If the current focus is on the toggle and the menu is expanded, close
    // this nav menu and go to the parent list item.
    if (this.parentNav.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.parentNav.closeSubNav();
      this.getElement('parentItem').focus();
    }
    // If the focus is on the toggle and the menu is not expanded, go to the
    // previous sibling item by calling the super method.
    else {
      var node = this.getElement('prev') || this.getElement('parentNavPrev') || this.getElement('first');
      if (node) {
        node.focus();
      }
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/SubNavToggle.js

// Events









/**
 * A stoggle button.
 */
class SubNavToggle {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The element to bind to.
   * @param {Object|Mixed} item     The parent nav instance.
   * @param {Object} options        Mixed meta information.
   */
  constructor(element, item, options) {
    this.parentNav = item;
    this.masterNav = item.masterNav;
    this.toggle = element;
    this.elem = element;
    this.options = options;

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);
  }

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {
    var registryDefaults = {
      onClick: SubNavToggleClick,
      onKeydownSpace: SubNavToggleSpace,
      onKeydownEnter: SubNavToggleSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: SubNavToggleArrowUp,
      onKeydownArrowRight: SubNavToggleSpace,
      onKeydownArrowDown: SubNavToggleArrowDown,
      onKeydownArrowLeft: SubNavToggleArrowLeft
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/OnTab.js


/**
 * OnTab
 *
 * Event action handler class.
 */
class OnTab_OnTab extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    // Only act on backwards options as we want to allow the tab to go
    // to the toggle.
    const shifted = event.shiftKey;
    if (!shifted) {
      if (!this.getElement('nextElement') && this.item.getDepth() === 1) {
        this.masterNav.closeAllSubNavs();
      }
      return;
    }

    // If no previous element we are going up a level and should close
    // up behind us.
    let node = this.getElement('prev');
    if (!node) {
      this.parentNav.closeSubNav();
    }
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/events/OnArrowRight.js


/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class events_OnArrowRight_OnArrowRight extends EventAbstract {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.item.toggleElement.focus();
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/SecondarySubNavButtons.js

// Events

// Keyboard events.










/**
 * SecondarySubNavButtons Class
 *
 * A sub menu class for creating a menu with toggle button functionality.
 */
class SecondarySubNavButtons {
  /**
   * Initialize.
   *
   * @param {HTMLElement} element     The container wrapper for the nav.
   * @param {Object|Mixed} masterNav  The top most level navigation.
   * @param {Object|Mixed} parentNav  The parent navigation instance if this
   *                                  instance is nested.
   * @param {Object} options          A meta object of information and options.
   */
  constructor(element, masterNav) {
    let parentNav = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    // Vars.
    this.elem = element;
    this.item = element.parentNode;
    this.masterNav = masterNav;
    this.parentNav = parentNav;
    this.depth = options.depth || 1;

    // Merge in defaults.
    this.options = Object.assign({
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      toggleClass: 'su-nav-toggle',
      toggleLabel: 'expand menu',
      subNavToggleText: '+'
    }, options);

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);

    // Create the toggle buttons.
    this.toggleElement = this.createToggleButton();
    this.item.insertBefore(this.toggleElement, this.item.querySelector('ul'));
    this.toggle = new SubNavToggle(this.toggleElement, this, options);
  }

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {
    var registryDefaults = {
      onKeydownSpace: OnSpace,
      onKeydownEnter: OnSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab_OnTab,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: events_OnArrowRight_OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft_OnArrowLeft
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Create and a button for the expand/collapse actions.
   *
   * @return {HTMLElement} The button toggle.
   */
  createToggleButton() {
    let element = document.createElement('button');
    let label = document.createTextNode(this.options.toggleText);

    // Give this instance a unique ID.
    let id = 'toggle-' + Math.random().toString(36).substr(2, 9);
    element.setAttribute('class', this.options.toggleClass);
    element.setAttribute('aria-expanded', 'false');
    // element.setAttribute('aria-controls', this.subNav.id);
    element.setAttribute('aria-label', this.options.toggleLabel);
    element.setAttribute('id', id);
    element.appendChild(label);
    return element;
  }

  /**
   * Is this expanded? Can only return TRUE if this is a subnav trigger.
   *
   * @return {Boolean}
   *  Wether or not the item is expanded.
   */
  isExpanded() {
    return this.toggleElement.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Handles the opening of a sub-nav.
   *
   * If this is a subnav trigger, open the corresponding subnav.
   * Optionally force focus on the first element in the subnav
   * (for keyboard nav).
   */
  openSubNav() {
    this.toggleElement.setAttribute('aria-expanded', true);
    this.item.classList.add(this.options.itemExpandedClass);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.toggleElement.setAttribute('aria-expanded', false);
    this.item.classList.remove(this.options.itemExpandedClass);
  }

  /**
   * Get the level of nesting for this nav.
   *
   * @return {Integer} The integer of depth starting at 1.
   */
  getDepth() {
    return this.depth;
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/buttons/SecondaryNavButtons.js




/**
 * A secondary menu with toggle buttons.
 */
class SecondaryNavButtons extends SecondaryNavAbstract {
  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Merge with the default options.
    options = Object.assign({
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      toggleClass: 'su-nav-toggle',
      toggleLabel: 'expand menu',
      subNavToggleText: '+'
    }, options);

    // Call the super.
    super(elem, options);

    // Ok do the creation.
    this.createSubNavItems();

    // Expand the path.
    this.activePath.expandActivePath();
  }

  /**
   * Add the additional state handling after the abstract option has run.
   *
   * @param  {HTMLElement} item The HTMLElement being acted upon.
   */
  expandActivePathItem(item) {
    var node = item.querySelector('.' + this.options.toggleClass);
    if (node) {
      node.setAttribute('aria-expanded', 'true');
    }
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavButtons} A brand new instance.
   */
  newParentItem(item, depth, parent) {
    var nav = new SecondarySubNavButtons(item, this, parent, {
      itemExpandedClass: this.options.itemExpandedClass,
      depth: depth
    });
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * Function for creating a new single tier navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondaryNavItem} A brand new instance.
   */
  newNavItem(item, depth, parent) {
    var nav = new SecondaryNavItem(item, this, parent, {
      depth: depth
    });
    this.navItems.push(nav);
    return nav;
  }
}
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/secondary-nav-buttons.js



document.addEventListener('DOMContentLoaded', event => {
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--buttons/)) {
      new SecondaryNavButtons(nav);
    }
  });
});
;// CONCATENATED MODULE: ./core/src/js/components/secondary-nav/secondary-nav.js
// Get'm


;// CONCATENATED MODULE: ./core/src/js/components/components.js
/**
 * Primary roll up file for all javascript components.
 */

// The Alert Component.

// The Accordion Component.

// The Primary Navigation Component.

// The Secondary Navigation Component.


/***/ }),

/***/ 71:
/***/ (function() {

// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

/***/ }),

/***/ 932:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(932));
/******/ }
]);