/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 514:
/*!*******************************************************!*\
  !*** ./core/src/js/components/accordion/accordion.js ***!
  \*******************************************************/
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
/*!***********************************************!*\
  !*** ./core/src/js/components/alert/alert.js ***!
  \***********************************************/
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

/***/ 757:
/*!**********************************************!*\
  !*** ./core/src/js/components/components.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.js */ 821);
/* harmony import */ var _alert_alert_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alert_alert_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accordion_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion/accordion.js */ 514);
/* harmony import */ var _accordion_accordion_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_nav_main_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav/main-nav.js */ 826);
/* harmony import */ var _secondary_nav_secondary_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-nav/secondary-nav.js */ 252);
/**
 * Primary roll up file for all javascript components.
 */

// The Alert Component.

// The Accordion Component.

// The Primary Navigation Component.

// The Secondary Navigation Component.


/***/ }),

/***/ 797:
/*!************************************************!*\
  !*** ./core/src/js/components/main-nav/Nav.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ 456);
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keyboard */ 346);
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/events */ 674);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem */ 534);





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
    if (elem instanceof _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      elem = elem.item;
    }
    this.toggle = elem.querySelector(elem.tagName + ' > button');
    this.toggleText = this.toggle ? this.toggle.innerText : '';
    this.items = [];
    // Add custom events to alert others when the mobile nav
    // opens or closes.
    // this.openEvent is dispatched in this.openMobileNav().
    this.openEvent = (0,_utilities_events__WEBPACK_IMPORTED_MODULE_2__.createEvent)('openNav');
    // this.closeEvent is dispatched in this.closeMobileNav().
    this.closeEvent = (0,_utilities_events__WEBPACK_IMPORTED_MODULE_2__.createEvent)('closeNav');

    // Initialize items
    let items = elem.querySelectorAll(elem.tagName + ' > ul > li');
    items.forEach(item => {
      this.items.push(new _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"](item, this));
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
    while (nav.elem instanceof _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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
    if (this.elem instanceof _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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
    if (this.elem instanceof _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__.closeAllMobileNavs)();
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
    if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isEsc)(theKey)) {
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
    } else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isEnter)(theKey) || (0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isSpace)(theKey)) {
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

/***/ }),

/***/ 534:
/*!****************************************************!*\
  !*** ./core/src/js/components/main-nav/NavItem.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavItem; }
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ 456);
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keyboard */ 346);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ 797);
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ 674);





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
      this.subNav = new _Nav__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      // Add custom events to alert others when a subnav opens or closes.
      // this.openEvent is dispatched in this.openSubNav().
      this.openEvent = (0,_utilities_events__WEBPACK_IMPORTED_MODULE_3__.createEvent)('openSubnav');
      // this.closeEvent is dispatched in this.closeSubNav().
      this.closeEvent = (0,_utilities_events__WEBPACK_IMPORTED_MODULE_3__.createEvent)('closeSubnav');

      // Maintain global list of subnavs for closeAllSubNavs().
      _globals__WEBPACK_IMPORTED_MODULE_0__.theSubNavs.push(this);
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
    (0,_globals__WEBPACK_IMPORTED_MODULE_0__.closeAllSubNavs)();
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
    if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isSpace)(theKey) || (0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isEnter)(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      if (this.isSubNavTrigger()) {
        this.openSubNav();
      } else {
        window.location = this.link;
      }
    }
    // Handler for the down arrow key.
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isDownArrow)(theKey)) {
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
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isUpArrow)(theKey)) {
      event.preventDefault();
      event.stopPropagation();
      this.nav.focusOn('prev', this);
    }
    // Handler for the left arrow key.
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isLeftArrow)(theKey)) {
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
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isRightArrow)(theKey)) {
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
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isHome)(theKey)) {
      this.nav.focusOn('first');
    }
    // Handler for the end key.
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isEnd)(theKey)) {
      this.nav.focusOn('last');
    }
    // Handler for the tab key.
    else if ((0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__.isTab)(theKey)) {
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

/***/ }),

/***/ 456:
/*!****************************************************!*\
  !*** ./core/src/js/components/main-nav/globals.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeAllMobileNavs: function() { return /* binding */ closeAllMobileNavs; },
/* harmony export */   closeAllSubNavs: function() { return /* binding */ closeAllSubNavs; },
/* harmony export */   theNavs: function() { return /* binding */ theNavs; },
/* harmony export */   theSubNavs: function() { return /* binding */ theSubNavs; }
/* harmony export */ });
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

/***/ }),

/***/ 826:
/*!*****************************************************!*\
  !*** ./core/src/js/components/main-nav/main-nav.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ 71);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ 456);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ 797);



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
    const theNav = new _Nav__WEBPACK_IMPORTED_MODULE_2__["default"](nav);

    // Remember the nav for closeAllMobileNavs().
    _globals__WEBPACK_IMPORTED_MODULE_1__.theNavs.push(theNav);

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
      (0,_globals__WEBPACK_IMPORTED_MODULE_1__.closeAllSubNavs)();
      (0,_globals__WEBPACK_IMPORTED_MODULE_1__.closeAllMobileNavs)();
    }
  }, false);
}); // on DOMContentLoaded.

/***/ }),

/***/ 524:
/*!**************************************************!*\
  !*** ./core/src/js/components/nav/ActivePath.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ActivePath; }
/* harmony export */ });
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

/***/ }),

/***/ 816:
/*!******************************************************!*\
  !*** ./core/src/js/components/nav/ElementFetcher.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ElementFetcher; }
/* harmony export */ });
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

/***/ }),

/***/ 831:
/*!************************************************************!*\
  !*** ./core/src/js/components/nav/EventHandlerDispatch.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EventHandlerDispatch; }
/* harmony export */ });
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keyboard */ 346);


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
    let normalized = (0,_utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)(theKey);

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

/***/ }),

/***/ 442:
/*!*********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/SecondaryNavAccordion.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondaryNavAccordion; }
/* harmony export */ });
/* harmony import */ var _common_SecondaryNavAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/SecondaryNavAbstract */ 251);
/* harmony import */ var _common_SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/SecondaryNavItem */ 485);
/* harmony import */ var _SecondarySubNavAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondarySubNavAccordion */ 983);




/**
 * A secondary menu with accordion buttons.
 */
class SecondaryNavAccordion extends _common_SecondaryNavAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    var nav = new _SecondarySubNavAccordion__WEBPACK_IMPORTED_MODULE_2__["default"](item, this, parent, opts);
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
    var nav = new _common_SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__["default"](item, this, parent, opts);
    this.navItems.push(nav);
    return nav;
  }
}

/***/ }),

/***/ 983:
/*!************************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/SecondarySubNavAccordion.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondarySubNavAccordion; }
/* harmony export */ });
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ 831);
/* harmony import */ var _events_OnClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/OnClick */ 886);
/* harmony import */ var _common_events_OnHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/events/OnHome */ 685);
/* harmony import */ var _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/events/OnEnd */ 533);
/* harmony import */ var _common_events_OnTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/events/OnTab */ 432);
/* harmony import */ var _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/events/OnEsc */ 894);
/* harmony import */ var _events_OnSpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/OnSpace */ 446);
/* harmony import */ var _common_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/events/OnArrowUp */ 976);
/* harmony import */ var _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/OnArrowRight */ 336);
/* harmony import */ var _common_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/events/OnArrowDown */ 656);
/* harmony import */ var _events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/OnArrowLeft */ 557);

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
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__["default"](element, this);
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
      onClick: _events_OnClick__WEBPACK_IMPORTED_MODULE_1__["default"],
      onKeydownSpace: _events_OnSpace__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownEnter: _events_OnSpace__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownHome: _common_events_OnHome__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownEnd: _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__["default"],
      onKeydownTab: _common_events_OnTab__WEBPACK_IMPORTED_MODULE_4__["default"],
      onKeydownEscape: _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_5__["default"],
      onKeydownArrowUp: _common_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_7__["default"],
      onKeydownArrowRight: _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_8__["default"],
      onKeydownArrowDown: _common_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"],
      onKeydownArrowLeft: _events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_10__["default"]
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

/***/ }),

/***/ 557:
/*!******************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/events/OnArrowLeft.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowLeft; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);
/* harmony import */ var _common_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/events/OnArrowLeft */ 312);



/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
class OnArrowLeft extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
      var otherLeft = new _common_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
      otherLeft.init();
    }
  }
}

/***/ }),

/***/ 336:
/*!*******************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/events/OnArrowRight.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowRight; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class OnArrowRight extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 886:
/*!**************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/events/OnClick.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnClick; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * OnClick
 *
 * Event action handler class.
 */
class OnClick extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 446:
/*!**************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/accordion/events/OnSpace.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnSpace; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);
/* harmony import */ var _OnClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnClick */ 886);



/**
 * OnSpace
 *
 * Event action handler class.
 */
class OnSpace extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Do the rest of the stuff click does.
    var eventClick = new _OnClick__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
    eventClick.init();

    // Focus on the first element for keyboard but not clicks.
    if (this.item.isExpanded()) {
      this.getElement('firstSubnavLink').focus();
    }
  }
}

/***/ }),

/***/ 916:
/*!*****************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/SecondaryNavButtons.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondaryNavButtons; }
/* harmony export */ });
/* harmony import */ var _common_SecondaryNavAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/SecondaryNavAbstract */ 251);
/* harmony import */ var _common_SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/SecondaryNavItem */ 485);
/* harmony import */ var _SecondarySubNavButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondarySubNavButtons */ 152);




/**
 * A secondary menu with toggle buttons.
 */
class SecondaryNavButtons extends _common_SecondaryNavAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    var nav = new _SecondarySubNavButtons__WEBPACK_IMPORTED_MODULE_2__["default"](item, this, parent, {
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
    var nav = new _common_SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__["default"](item, this, parent, {
      depth: depth
    });
    this.navItems.push(nav);
    return nav;
  }
}

/***/ }),

/***/ 152:
/*!********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/SecondarySubNavButtons.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondarySubNavButtons; }
/* harmony export */ });
/* harmony import */ var _SubNavToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubNavToggle */ 818);
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ 831);
/* harmony import */ var _common_events_OnHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/events/OnHome */ 685);
/* harmony import */ var _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/events/OnEnd */ 533);
/* harmony import */ var _events_OnTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/OnTab */ 149);
/* harmony import */ var _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/events/OnEsc */ 894);
/* harmony import */ var _common_events_OnSpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/events/OnSpace */ 732);
/* harmony import */ var _common_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/events/OnArrowUp */ 976);
/* harmony import */ var _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/OnArrowRight */ 483);
/* harmony import */ var _common_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/events/OnArrowDown */ 656);
/* harmony import */ var _common_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/events/OnArrowLeft */ 312);

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
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__["default"](element, this);

    // Create the toggle buttons.
    this.toggleElement = this.createToggleButton();
    this.item.insertBefore(this.toggleElement, this.item.querySelector('ul'));
    this.toggle = new _SubNavToggle__WEBPACK_IMPORTED_MODULE_0__["default"](this.toggleElement, this, options);
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
      onKeydownSpace: _common_events_OnSpace__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownEnter: _common_events_OnSpace__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownHome: _common_events_OnHome__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownEnd: _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__["default"],
      onKeydownTab: _events_OnTab__WEBPACK_IMPORTED_MODULE_4__["default"],
      onKeydownEscape: _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_5__["default"],
      onKeydownArrowUp: _common_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_7__["default"],
      onKeydownArrowRight: _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_8__["default"],
      onKeydownArrowDown: _common_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"],
      onKeydownArrowLeft: _common_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_10__["default"]
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

/***/ }),

/***/ 818:
/*!**********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/SubNavToggle.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggle; }
/* harmony export */ });
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ 831);
/* harmony import */ var _events_SubNavToggleClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/SubNavToggleClick */ 625);
/* harmony import */ var _events_SubNavToggleSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/SubNavToggleSpace */ 905);
/* harmony import */ var _events_SubNavToggleArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/SubNavToggleArrowDown */ 508);
/* harmony import */ var _events_SubNavToggleArrowLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/SubNavToggleArrowLeft */ 937);
/* harmony import */ var _events_SubNavToggleArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/SubNavToggleArrowUp */ 121);
/* harmony import */ var _common_events_OnHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/events/OnHome */ 685);
/* harmony import */ var _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/events/OnEnd */ 533);
/* harmony import */ var _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/events/OnEsc */ 894);

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
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__["default"](element, this);
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
      onClick: _events_SubNavToggleClick__WEBPACK_IMPORTED_MODULE_1__["default"],
      onKeydownSpace: _events_SubNavToggleSpace__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownEnter: _events_SubNavToggleSpace__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownHome: _common_events_OnHome__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownEnd: _common_events_OnEnd__WEBPACK_IMPORTED_MODULE_7__["default"],
      onKeydownEscape: _common_events_OnEsc__WEBPACK_IMPORTED_MODULE_8__["default"],
      onKeydownArrowUp: _events_SubNavToggleArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"],
      onKeydownArrowRight: _events_SubNavToggleSpace__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownArrowDown: _events_SubNavToggleArrowDown__WEBPACK_IMPORTED_MODULE_3__["default"],
      onKeydownArrowLeft: _events_SubNavToggleArrowLeft__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    return Object.assign(registryDefaults, options.eventRegistry);
  }
}

/***/ }),

/***/ 483:
/*!*****************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/OnArrowRight.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowRight; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class OnArrowRight extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.item.toggleElement.focus();
  }
}

/***/ }),

/***/ 149:
/*!**********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/OnTab.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnTab; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * OnTab
 *
 * Event action handler class.
 */
class OnTab extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 508:
/*!**************************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowDown.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggleArrowDown; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * SubNavToggleArrowDown
 *
 * Event action handler class.
 */
class SubNavToggleArrowDown extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 937:
/*!**************************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowLeft.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggleArrowLeft; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * SubNavToggleArrowLeft
 *
 * Event action handler class.
 */
class SubNavToggleArrowLeft extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    event.stopPropagation();
    event.preventDefault();
    this.parentNav.elem.focus();
  }
}

/***/ }),

/***/ 121:
/*!************************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleArrowUp.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggleArrowUp; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * SubNavToggleArrowUp
 *
 * Event action handler class.
 */
class SubNavToggleArrowUp extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 625:
/*!**********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleClick.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggleClick; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);


/**
 * SubNavToggleClick
 *
 * Event action handler class.
 */
class SubNavToggleClick extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 905:
/*!**********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/buttons/events/SubNavToggleSpace.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavToggleSpace; }
/* harmony export */ });
/* harmony import */ var _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/events/EventAbstract */ 568);
/* harmony import */ var _SubNavToggleClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNavToggleClick */ 625);



/**
 * SubNavToggleSpace
 *
 * Event action handler class.
 */
class SubNavToggleSpace extends _common_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    // No jumping around.
    this.event.preventDefault();

    // Call the click because it is pretty much the same thing.
    var eventClick = new _SubNavToggleClick__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
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

/***/ }),

/***/ 251:
/*!*****************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/SecondaryNavAbstract.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondaryNavAbstract; }
/* harmony export */ });
/* harmony import */ var _nav_ActivePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/ActivePath */ 524);
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ 831);
/* harmony import */ var _events_OnEsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/OnEsc */ 894);
/* harmony import */ var _events_OnSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/OnSpace */ 732);





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
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__["default"](element, this);

    // Handle the active state.
    this.activePath = new _nav_ActivePath__WEBPACK_IMPORTED_MODULE_0__["default"](element, this, this.options);
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
      onKeydownEscape: _events_OnEsc__WEBPACK_IMPORTED_MODULE_2__["default"],
      onKeydownSpace: _events_OnSpace__WEBPACK_IMPORTED_MODULE_3__["default"]
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

/***/ }),

/***/ 485:
/*!*************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/SecondaryNavItem.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondaryNavItem; }
/* harmony export */ });
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ 831);
/* harmony import */ var _events_OnArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/OnArrowDown */ 656);
/* harmony import */ var _events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/OnArrowLeft */ 312);
/* harmony import */ var _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/OnArrowRight */ 282);
/* harmony import */ var _events_OnArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/OnArrowUp */ 976);
/* harmony import */ var _events_OnEnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/OnEnd */ 533);
/* harmony import */ var _events_OnEsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/OnEsc */ 894);
/* harmony import */ var _events_OnHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/OnHome */ 685);
/* harmony import */ var _events_OnEnter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/OnEnter */ 13);
/* harmony import */ var _events_OnSpace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/OnSpace */ 732);
/* harmony import */ var _events_OnTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/OnTab */ 432);


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
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__["default"](element, this);
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
      onKeydownHome: _events_OnHome__WEBPACK_IMPORTED_MODULE_7__["default"],
      onKeydownEnd: _events_OnEnd__WEBPACK_IMPORTED_MODULE_5__["default"],
      onKeydownTab: _events_OnTab__WEBPACK_IMPORTED_MODULE_10__["default"],
      onKeydownSpace: _events_OnSpace__WEBPACK_IMPORTED_MODULE_9__["default"],
      onKeydownEnter: _events_OnEnter__WEBPACK_IMPORTED_MODULE_8__["default"],
      onKeydownEscape: _events_OnEsc__WEBPACK_IMPORTED_MODULE_6__["default"],
      onKeydownArrowUp: _events_OnArrowUp__WEBPACK_IMPORTED_MODULE_4__["default"],
      onKeydownArrowRight: _events_OnArrowRight__WEBPACK_IMPORTED_MODULE_3__["default"],
      onKeydownArrowDown: _events_OnArrowDown__WEBPACK_IMPORTED_MODULE_1__["default"],
      onKeydownArrowLeft: _events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ }),

/***/ 568:
/*!*****************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/EventAbstract.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EventAbstract; }
/* harmony export */ });
/* harmony import */ var _nav_ElementFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../nav/ElementFetcher */ 816);


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
    var fetcher = new _nav_ElementFetcher__WEBPACK_IMPORTED_MODULE_0__["default"](context, what);
    return fetcher.fetch();
  }
}

/***/ }),

/***/ 656:
/*!***************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnArrowDown.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowDown; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);
/* harmony import */ var _OnHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnHome */ 685);



/**
 * OnArrowDown
 *
 * Event action handler class.
 */
class OnArrowDown extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    var eventHome = new _OnHome__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
    eventHome.init();
  }
}

/***/ }),

/***/ 312:
/*!***************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnArrowLeft.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowLeft; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);
/* harmony import */ var _OnArrowUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnArrowUp */ 976);



/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
class OnArrowLeft extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    var upevent = new _OnArrowUp__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
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

/***/ }),

/***/ 282:
/*!****************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnArrowRight.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowRight; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);
/* harmony import */ var _OnArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnArrowDown */ 656);



/**
 * OnArrowRight
 *
 * Event action handler class.
 */
class OnArrowRight extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
      var eventDown = new _OnArrowDown__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
      eventDown.init();
    }
  }
}

/***/ }),

/***/ 976:
/*!*************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnArrowUp.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnArrowUp; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);
/* harmony import */ var _OnEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnEnd */ 533);



/**
 * OnArrowUp
 *
 * Event action handler class.
 */
class OnArrowUp extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    var eventEnd = new _OnEnd__WEBPACK_IMPORTED_MODULE_1__["default"](this.item, this.event, this.target);
    eventEnd.init();
  }
}

/***/ }),

/***/ 533:
/*!*********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnEnd.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnEnd; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnEnd
 *
 * Event action handler class.
 */
class OnEnd extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 13:
/*!***********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnEnter.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnEnter; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnEnter
 *
 * Event action handler class.
 */
class OnEnter extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }
}

/***/ }),

/***/ 894:
/*!*********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnEsc.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnEsc; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnEsc
 *
 * Event action handler class.
 */
class OnEsc extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 685:
/*!**********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnHome.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnHome; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnHome
 *
 * Event action handler class.
 */
class OnHome extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 732:
/*!***********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnSpace.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnSpace; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnSpace
 *
 * Event action handler class.
 */
class OnSpace extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }
}

/***/ }),

/***/ 432:
/*!*********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/events/OnTab.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnTab; }
/* harmony export */ });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ 568);


/**
 * OnTab
 *
 * Event action handler class.
 */
class OnTab extends _EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ 107:
/*!****************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/common/globals.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   secondaryNavs: function() { return /* binding */ secondaryNavs; }
/* harmony export */ });
// The css class that this following behaviour is applied to.
const secondaryNavClass = 'su-secondary-nav';

// All Secondary navs.
var secondaryNavs = document.querySelectorAll('.' + secondaryNavClass);

/***/ }),

/***/ 301:
/*!*************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav-accordion.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ 71);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/globals */ 107);
/* harmony import */ var _accordion_SecondaryNavAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion/SecondaryNavAccordion */ 442);



document.addEventListener('DOMContentLoaded', event => {
  // Process each secondary nav accordion.
  _common_globals__WEBPACK_IMPORTED_MODULE_1__.secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--accordion/)) {
      new _accordion_SecondaryNavAccordion__WEBPACK_IMPORTED_MODULE_2__["default"](nav);
    }
  });
});

/***/ }),

/***/ 835:
/*!***********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav-buttons.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ 71);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/globals */ 107);
/* harmony import */ var _buttons_SecondaryNavButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/SecondaryNavButtons */ 916);



document.addEventListener('DOMContentLoaded', event => {
  _common_globals__WEBPACK_IMPORTED_MODULE_1__.secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--buttons/)) {
      new _buttons_SecondaryNavButtons__WEBPACK_IMPORTED_MODULE_2__["default"](nav);
    }
  });
});

/***/ }),

/***/ 252:
/*!***************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _secondary_nav_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-nav-accordion.js */ 301);
/* harmony import */ var _secondary_nav_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-nav-buttons.js */ 835);
// Get'm



/***/ }),

/***/ 71:
/*!**********************************!*\
  !*** ./core/src/js/core/core.js ***!
  \**********************************/
/***/ (function() {

// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

/***/ }),

/***/ 674:
/*!*****************************************!*\
  !*** ./core/src/js/utilities/events.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: function() { return /* binding */ createEvent; }
/* harmony export */ });
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

/***/ }),

/***/ 346:
/*!*******************************************!*\
  !*** ./core/src/js/utilities/keyboard.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDownArrow: function() { return /* binding */ isDownArrow; },
/* harmony export */   isEnd: function() { return /* binding */ isEnd; },
/* harmony export */   isEnter: function() { return /* binding */ isEnter; },
/* harmony export */   isEsc: function() { return /* binding */ isEsc; },
/* harmony export */   isHome: function() { return /* binding */ isHome; },
/* harmony export */   isLeftArrow: function() { return /* binding */ isLeftArrow; },
/* harmony export */   isRightArrow: function() { return /* binding */ isRightArrow; },
/* harmony export */   isSpace: function() { return /* binding */ isSpace; },
/* harmony export */   isTab: function() { return /* binding */ isTab; },
/* harmony export */   isUpArrow: function() { return /* binding */ isUpArrow; },
/* harmony export */   normalizeKey: function() { return /* binding */ normalizeKey; }
/* harmony export */ });
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

/***/ }),

/***/ 501:
/*!*************************************!*\
  !*** ./core/src/scss/decanter.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./core/src/js/decanter.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_decanter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/decanter.scss */ 501);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.js */ 757);


}();
/******/ })()
;
//# sourceMappingURL=decanter.js.map