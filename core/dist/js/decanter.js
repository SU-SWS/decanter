/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./core/src/js/decanter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/src/js/components/components.js":
/*!**********************************************!*\
  !*** ./core/src/js/components/components.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_main_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav/main-nav.js */ "./core/src/js/components/main-nav/main-nav.js");
/* harmony import */ var _secondary_nav_secondary_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-nav/secondary-nav.js */ "./core/src/js/components/secondary-nav/secondary-nav.js");
/**
 * Primary roll up file for all javascript components.
 */
// The Primary Navigation Component.
 // The Secondary Navigation Component.



/***/ }),

/***/ "./core/src/js/components/main-nav/Nav.js":
/*!************************************************!*\
  !*** ./core/src/js/components/main-nav/Nav.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./core/src/js/components/main-nav/globals.js");
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/events */ "./core/src/js/utilities/events.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/main-nav/NavItem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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

var Nav =
/*#__PURE__*/
function () {
  /**
   * Create a Nav
   *
   * @param {HTMLElement|NavItem} elem - The element that is the nav menu.
   *                                     May be a main nav (<nav>) or a subnav
   *                                     (NavItem).
   */
  function Nav(elem) {
    var _this = this;

    _classCallCheck(this, Nav);

    this.elem = elem;
    this.topNav = this.getTopNav(); // If this is a subnav, we need the correpsonding HTMLElement for
    // .querySelector()

    if (elem instanceof _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      elem = elem.item;
    }

    this.toggle = elem.querySelector(elem.tagName + ' > button');
    this.toggleText = this.toggle ? this.toggle.innerText : '';
    this.items = []; // Add custom events to alert others when the mobile nav
    // opens or closes.
    // this.openEvent is dispatched in this.openMobileNav().

    this.openEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_2__["createEvent"])('openNav'); // this.closeEvent is dispatched in this.closeMobileNav().

    this.closeEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_2__["createEvent"])('closeNav'); // Initialize items

    var items = elem.querySelectorAll(elem.tagName + ' > ul > li');
    items.forEach(function (item) {
      _this.items.push(new _NavItem__WEBPACK_IMPORTED_MODULE_3__["default"](item, _this));
    });
    elem.addEventListener('keydown', this);

    if (this.toggle) {
      this.toggle.addEventListener('click', this);
    }
  } // -------------------------------------------------------------------------
  // Helper Methods.
  // -------------------------------------------------------------------------

  /**
   * Get the instance of Nav that represents the top level nav of this
   * instance.
   *
   * @return {Nav}
   *  Returns the navigation instance.
   */


  _createClass(Nav, [{
    key: "getTopNav",
    value: function getTopNav() {
      var nav = this;

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

  }, {
    key: "getParentNav",
    value: function getParentNav() {
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

  }, {
    key: "isExpanded",
    value: function isExpanded() {
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

  }, {
    key: "setExpanded",
    value: function setExpanded(value) {
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

  }, {
    key: "isDesktopNav",
    value: function isDesktopNav() {
      return getComputedStyle(this.topNav.toggle).display === 'none';
    }
    /**
     * Is this the top nav?
     *
     * @return {Boolean}
     *  Returns wether or not it is the top nav item.
     */

  }, {
    key: "isTopNav",
    value: function isTopNav() {
      return this.topNav === this;
    }
    /**
     * Is this a subnav?
     *
     * @return {Boolean}
     *  Returns wether or not this is a subnav item.
     */

  }, {
    key: "isSubNav",
    value: function isSubNav() {
      return this.topNav !== this;
    }
    /**
     * Get the first item in this nav.
     *
     * @return {NavItem}
     *  Returns wether or not this is the first item.
     */

  }, {
    key: "getFirstItem",
    value: function getFirstItem() {
      return this.items.length ? this.items[0] : null;
    }
    /**
     * Get the last item in this nav.
     *
     * @return {NavItem}
     *  Returns wether or not this is the last item.
     */

  }, {
    key: "getLastItem",
    value: function getLastItem() {
      return this.items.length ? this.items[this.items.length - 1] : null;
    }
    /**
     * Get the link associated with the first item in this nav.
     *
     * @return {HTMLAnchorElement}
     *  Returns the very first link.
     */

  }, {
    key: "getFirstLink",
    value: function getFirstLink() {
      return this.items.length ? this.getFirstItem().link : null;
    }
    /**
     * Get the link associated with the last item in this nav.
     *
     * @return {HTMLAnchorElement}
     *  Returns the very last link.
     */

  }, {
    key: "getLastLink",
    value: function getLastLink() {
      return this.items.length ? this.getLastItem().link : null;
    } // -------------------------------------------------------------------------
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

  }, {
    key: "focusOn",
    value: function focusOn(link) {
      var currentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var currentIndex = null;
      var lastIndex = null;

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

  }, {
    key: "openMobileNav",
    value: function openMobileNav() {
      var focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      Object(_globals__WEBPACK_IMPORTED_MODULE_0__["closeAllMobileNavs"])();
      this.setExpanded('true');
      this.toggle.innerText = 'Close';

      if (focusOnFirst) {
        // Focus on the first top level link.
        this.focusOn('first');
      } // Alert others the mobile nav has opened.


      this.elem.dispatchEvent(this.openEvent);
    }
    /**
     * Mark this mobile closed, and restore the button text to what it was
     * initially.
     */

  }, {
    key: "closeMobileNav",
    value: function closeMobileNav() {
      if (this.isExpanded()) {
        this.setExpanded('false');
        this.toggle.innerText = this.toggleText; // Alert others the mobile nav has closed.

        this.elem.dispatchEvent(this.closeEvent);
      }
    } // -------------------------------------------------------------------------
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

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event; // If this class has an onEvent method, e.g. onClick, onKeydown,
      // invoke it.

      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);

      if (typeof this[handler] === 'function') {
        // The element that was clicked.
        var target = event.target || event.srcElement;
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

  }, {
    key: "onClick",
    value: function onClick(event, target) {
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

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode;

      if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isEsc"])(theKey)) {
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
      } else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isEnter"])(theKey) || Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(theKey)) {
        if (target === this.toggle) {
          event.preventDefault();
          event.stopPropagation();

          if (!this.isExpanded()) {
            this.openMobileNav();
          }
        }
      }
    }
  }]);

  return Nav;
}();



/***/ }),

/***/ "./core/src/js/components/main-nav/NavItem.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/main-nav/NavItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavItem; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./core/src/js/components/main-nav/globals.js");
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./core/src/js/components/main-nav/Nav.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ "./core/src/js/utilities/events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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

var NavItem =
/*#__PURE__*/
function () {
  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  function NavItem(item, nav) {
    _classCallCheck(this, NavItem);

    this.item = item;
    this.nav = nav;
    this.link = this.item.querySelector('a');
    this.subNav = null;
    this.item.addEventListener('keydown', this);

    if (this.isSubNavTrigger()) {
      this.subNav = new _Nav__WEBPACK_IMPORTED_MODULE_2__["default"](this); // Add custom events to alert others when a subnav opens or closes.
      // this.openEvent is dispatched in this.openSubNav().

      this.openEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_3__["createEvent"])('openSubnav'); // this.closeEvent is dispatched in this.closeSubNav().

      this.closeEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_3__["createEvent"])('closeSubnav'); // Maintain global list of subnavs for closeAllSubNavs().

      _globals__WEBPACK_IMPORTED_MODULE_0__["theSubNavs"].push(this);
      this.item.addEventListener('click', this);
    }
  } // -------------------------------------------------------------------------
  // Helper Methods.
  // -------------------------------------------------------------------------

  /**
   * Is this the first item in the containing Nav?
   *
   * @return {Boolean}
   *  Wether or not the item is the first item.
   */


  _createClass(NavItem, [{
    key: "isFirstItem",
    value: function isFirstItem() {
      return this.nav.items.indexOf(this) === 0;
    }
    /**
     * Is this the last item in the containing Nav?
     *
     * @return {Boolean}
     *  Wether or not the item is the last item.
     */

  }, {
    key: "isLastItem",
    value: function isLastItem() {
      return this.nav.items.indexOf(this) === this.nav.items.length - 1;
    }
    /**
     * Is this a trigger that opens / closes a subnav?
     *
     * @return {Boolean}
     *  Wether or not the item is the sub nav trigger item.
     */

  }, {
    key: "isSubNavTrigger",
    value: function isSubNavTrigger() {
      return this.item.lastElementChild.tagName.toUpperCase() === 'UL';
    }
    /**
     * Is this a component of a subnav - either the trigger or a nav item?
     *
     * @return {Boolean}
     *  Wether or not the item is a subnav item.
     */

  }, {
    key: "isSubNavItem",
    value: function isSubNavItem() {
      return this.isSubNavTrigger() || this.nav.isSubNav();
    }
    /**
     * Is this expanded? Can only return TRUE if this is a subnav trigger.
     *
     * @return {Boolean}
     *  Wether or not the item is expanded.
     */

  }, {
    key: "isExpanded",
    value: function isExpanded() {
      return this.link.getAttribute('aria-expanded') === 'true';
    }
    /**
     * Set whether or not this is expanded.
     * Only meaningful if this is a subnav trigger.
     *
     * @param {String} value - What to set the aria-expanded attribute of this's
     *                         link to.
     */

  }, {
    key: "setExpanded",
    value: function setExpanded(value) {
      this.link.setAttribute('aria-expanded', value);
    } // -------------------------------------------------------------------------
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

  }, {
    key: "openSubNav",
    value: function openSubNav() {
      var focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      Object(_globals__WEBPACK_IMPORTED_MODULE_0__["closeAllSubNavs"])();

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

  }, {
    key: "closeSubNav",
    value: function closeSubNav() {
      var focusOnTrigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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
    } // -------------------------------------------------------------------------
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

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event; // If this class has an onEvent method (onClick, onKeydown) invoke it.

      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);

      if (typeof this[handler] === 'function') {
        // The element that was clicked.
        var target = event.target || event.srcElement;
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

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode; // Handler for the space and enter key.

      if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(theKey) || Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isEnter"])(theKey)) {
        event.preventDefault();
        event.stopPropagation();

        if (this.isSubNavTrigger()) {
          this.openSubNav();
        } else {
          window.location = this.link;
        }
      } // Handler for the down arrow key.
      else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isDownArrow"])(theKey)) {
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
        } // Handler for the up arrow key.
        else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isUpArrow"])(theKey)) {
            event.preventDefault();
            event.stopPropagation();
            this.nav.focusOn('prev', this);
          } // Handler for the left arrow key.
          else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isLeftArrow"])(theKey)) {
              event.preventDefault();
              event.stopPropagation();

              if (this.nav.isDesktopNav()) {
                if (this.nav.isSubNav()) {
                  this.closeSubNav();
                  var parent = this.nav.getParentNav(); // Focus on the previous item in the parent nav.

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
            } // Handler for the right arrow key.
            else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isRightArrow"])(theKey)) {
                event.preventDefault();
                event.stopPropagation();

                if (this.nav.isDesktopNav()) {
                  if (this.nav.isSubNav()) {
                    this.closeSubNav();

                    var _parent = this.nav.getParentNav(); // Focus on the next item in the parent nav.


                    _parent.focusOn('next', this.nav.elem);
                  } else {
                    this.nav.focusOn('next', this);
                  }
                } else {
                  if (this.isSubNavTrigger()) {
                    this.openSubNav();
                  }
                }
              } // Handler for the home key.
              else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isHome"])(theKey)) {
                  this.nav.focusOn('first');
                } // Handler for the end key.
                else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isEnd"])(theKey)) {
                    this.nav.focusOn('last');
                  } // Handler for the tab key.
                  else if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isTab"])(theKey)) {
                      event.stopPropagation();
                      var shifted = event.shiftKey;

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

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      if (this.isExpanded()) {
        this.closeSubNav();
      } else {
        this.openSubNav(false);
      } // If the click is directly on the trigger, then we're done.


      if (target === this.link) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }]);

  return NavItem;
}();



/***/ }),

/***/ "./core/src/js/components/main-nav/globals.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/main-nav/globals.js ***!
  \****************************************************/
/*! exports provided: theNavs, theSubNavs, closeAllSubNavs, closeAllMobileNavs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theNavs", function() { return theNavs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theSubNavs", function() { return theSubNavs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllSubNavs", function() { return closeAllSubNavs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllMobileNavs", function() { return closeAllMobileNavs; });
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

var theSubNavs = []; // Functions

/**
 * Close all subnavs on the page
 */

var closeAllSubNavs = function closeAllSubNavs() {
  theSubNavs.forEach(function (subNav) {
    subNav.closeSubNav();
  });
};
/**
 * Close all mobile navs on the page
 */

var closeAllMobileNavs = function closeAllMobileNavs() {
  theNavs.forEach(function (theNav) {
    theNav.closeMobileNav();
  });
};

/***/ }),

/***/ "./core/src/js/components/main-nav/main-nav.js":
/*!*****************************************************!*\
  !*** ./core/src/js/components/main-nav/main-nav.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ "./core/src/js/core/core.js");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./core/src/js/components/main-nav/globals.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./core/src/js/components/main-nav/Nav.js");



document.addEventListener('DOMContentLoaded', function (event) {
  // The css class that this following behaviour is applied to.
  var navClass = 'su-main-nav'; // All main navs.

  var navs = document.querySelectorAll('.' + navClass); // Process each nav.

  var firstZindex;
  navs.forEach(function (nav, index) {
    // Remove the class that formats the nav for browsers with javascript disabled.
    nav.classList.remove('no-js'); // Create an instance of Nav, which in turn creates appropriate instances of NavItem.

    var theNav = new _Nav__WEBPACK_IMPORTED_MODULE_2__["default"](nav); // Remember the nav for closeAllMobileNavs().

    _globals__WEBPACK_IMPORTED_MODULE_1__["theNavs"].push(theNav); // Manage zindexes in case there are multiple navs near enough for subnavs to overlap.
    // Rare, but it happens in the styleguide.

    if (index === 0) {
      firstZindex = getComputedStyle(nav, null).zIndex;
    } else {
      nav.style.zIndex = firstZindex - 300 * index;
    }
  }); // navs.forEach
  // Clicking anywhere outside a nav closes all navs.

  document.addEventListener('click', function (event) {
    // The element that was clicked.
    var target = event.target || event.srcElement; // If target is not under a main nav close all navs.

    if (!target.matches('.' + navClass + ' ' + target.tagName)) {
      Object(_globals__WEBPACK_IMPORTED_MODULE_1__["closeAllSubNavs"])();
      Object(_globals__WEBPACK_IMPORTED_MODULE_1__["closeAllMobileNavs"])();
    }
  }, false);
}); // on DOMContentLoaded.

/***/ }),

/***/ "./core/src/js/components/nav/ActivePath.js":
/*!**************************************************!*\
  !*** ./core/src/js/components/nav/ActivePath.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivePath; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
var ActivePath =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element [description]
   */
  function ActivePath(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ActivePath);

    this.elem = element; // Class properties.

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


  _createClass(ActivePath, [{
    key: "setActivePath",
    value: function setActivePath() {
      var path = window.location.pathname;
      var anchor = window.location.hash || '';
      var query = window.location.search || '';
      var currentItem = false; // Queries to run to find matching active paths in order of unqiueness.

      var finders = [this.elem.querySelector("a[href*='" + anchor + "']"), this.elem.querySelector("a[href*='" + query + "']"), this.elem.querySelector("a[href='" + path + query + anchor + "']"), this.elem.querySelector("a[href*='" + path + query + "']")]; // Go through the queries and see if we have any results.

      finders.forEach(function (val) {
        if (!currentItem && val) {
          currentItem = val;
        }
      }); // Can't find anything. End.

      if (!currentItem) {
        return;
      } // While we have parents go up and add the active class.


      while (currentItem) {
        // If we are on a LI element we need to add the active class.
        if (currentItem.tagName === 'LI') {
          currentItem.classList.add(this.itemActiveClass);
          break;
        } // Always increment.


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

  }, {
    key: "expandActivePath",
    value: function expandActivePath() {
      var _this = this;

      var actives = this.elem.querySelectorAll('.' + this.itemActiveClass);

      if (actives.length) {
        actives.forEach(function (item) {
          // While we have parents go up and add the active class.
          while (item) {
            // End when we get to the parent nav item stop.
            if (item === _this.elem) {
              // Stop at the top most level.
              break;
            } // If we are on a LI element we need to add the active class.


            if (item.tagName === 'LI') {
              item.classList.add(_this.itemExpandedClass);
              item.classList.add(_this.itemActiveTrailClass);
              item.firstElementChild.setAttribute('aria-expanded', true);
            } // Always increment.


            item = item.parentNode;
          }
        });
      }
    }
  }]);

  return ActivePath;
}();



/***/ }),

/***/ "./core/src/js/components/nav/ElementFetcher.js":
/*!******************************************************!*\
  !*** ./core/src/js/components/nav/ElementFetcher.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementFetcher; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
var ElementFetcher =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element [description]
   * @param {[type]} what    [description]
   */
  function ElementFetcher(element, what) {
    _classCallCheck(this, ElementFetcher);

    this.item = element;
    this.what = what;
  }
  /**
   * [fetch description]
   * @return {[type]} [description]
   */


  _createClass(ElementFetcher, [{
    key: "fetch",
    value: function fetch() {
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
  }]);

  return ElementFetcher;
}();



/***/ }),

/***/ "./core/src/js/components/nav/EventHandlerDispatch.js":
/*!************************************************************!*\
  !*** ./core/src/js/components/nav/EventHandlerDispatch.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandlerDispatch; });
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * EventHandlerDispatch Class
 *
 * NEEDS DESCRIPTION.
 */

var EventHandlerDispatch =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element [description]
   */
  function EventHandlerDispatch(element, handler) {
    _classCallCheck(this, EventHandlerDispatch);

    this.elem = element;
    this.handler = handler;
    this.createEventListeners();
  }
  /**
   * Create new event listeners.
   */


  _createClass(EventHandlerDispatch, [{
    key: "createEventListeners",
    value: function createEventListeners() {
      // What to do when a key is down?
      this.elem.addEventListener('keydown', this); // Listen to the click so we can act on it.

      this.elem.addEventListener('click', this); // Listen to custom events so we can act on it.

      this.elem.addEventListener('preOpenSubnav', this); // Listen to custom events so we can act on it.

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

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event; // Create an event signature.

      var eventMethod = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1); // What was clicked.

      var target = event.target || event.srcElement;

      if (eventMethod == "onKeydown") {
        this.onKeydown(event, target);
      } else if (eventMethod == "onClick") {
        this.onClick(event, target);
      } else {
        this.callEvent(eventMethod, event, target);
      }
    }
    /**
     * Handler for keydown events. keydown is bound to all NavItem's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode;
      var normalized = Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__["normalizeKey"])(theKey); // We don't know or need to handle the key that was pressed.

      if (!normalized) {
        return;
      } // Prepare a dynamic handler.


      var eventMethod = 'onKeydown' + normalized.charAt(0).toUpperCase() + normalized.slice(1); // Do eet.

      this.callEvent(eventMethod, event, target);
    }
    /**
     * [onClick description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      this.callEvent('onClick', event, target);
    }
    /**
     * [callEvent description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "callEvent",
    value: function callEvent(eventMethod, event, target) {
      if (typeof this.handler.eventRegistry[eventMethod] === 'function') {
        var eventObj = new this.handler.eventRegistry[eventMethod](this.handler, event, target);
        eventObj.init();
      }
    }
  }]);

  return EventHandlerDispatch;
}();



/***/ }),

/***/ "./core/src/js/components/nav/events/EventAbstract.js":
/*!************************************************************!*\
  !*** ./core/src/js/components/nav/events/EventAbstract.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventAbstract; });
/* harmony import */ var _ElementFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ElementFetcher */ "./core/src/js/components/nav/ElementFetcher.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var EventAbstract =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   */
  function EventAbstract(item, event, target) {
    _classCallCheck(this, EventAbstract);

    this.handler = item;
    this.elem = item.elem;
    this.nav = item.nav;
    this.target = target;
    this.event = event;
  }
  /**
   * [validate description]
   * @return {[type]} [description]
   */


  _createClass(EventAbstract, [{
    key: "isOnTarget",
    value: function isOnTarget() {
      if (this.target === this.elem) {
        return true;
      }

      return false;
    }
    /**
     * [getElement description]
     * @param  {[type]} what [description]
     * @return {[type]}      [description]
     */

  }, {
    key: "getElement",
    value: function getElement(what) {
      var fetcher = new _ElementFetcher__WEBPACK_IMPORTED_MODULE_0__["default"](this.elem.parentNode, what);
      return fetcher.fetch();
    }
  }]);

  return EventAbstract;
}();



/***/ }),

/***/ "./core/src/js/components/nav/events/OnArrowDown.js":
/*!**********************************************************!*\
  !*** ./core/src/js/components/nav/events/OnArrowDown.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnArrowDown; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnArrowDown =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnArrowDown, _EventAbstract);

  function OnArrowDown() {
    _classCallCheck(this, OnArrowDown);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnArrowDown).apply(this, arguments));
  }

  _createClass(OnArrowDown, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      if (!this.isOnTarget()) {
        return;
      } // Prevent the browser from doing funny stuff.


      this.event.preventDefault(); // Go to the next item.

      var node = this.getElement('next');

      if (node) {
        node.focus();
        return;
      } // No node yet, try home.


      node = this.getElement('first');

      if (node) {
        node.focus();
      }
    }
  }]);

  return OnArrowDown;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnArrowLeft.js":
/*!**********************************************************!*\
  !*** ./core/src/js/components/nav/events/OnArrowLeft.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnArrowLeft; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnArrowLeft =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnArrowLeft, _EventAbstract);

  function OnArrowLeft() {
    _classCallCheck(this, OnArrowLeft);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnArrowLeft).apply(this, arguments));
  }

  _createClass(OnArrowLeft, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      if (!this.isOnTarget()) {
        return;
      } // Get parent item.


      var node = this.getElement('parentItem'); // Go to parent's end.

      if (!node) {
        node = this.getElement('parentNavLast');
      }

      if (node) {
        // this.nav.closeAllSubNavs();
        // this.nav.closeThisSubNav();
        node.focus();
      }
    }
  }]);

  return OnArrowLeft;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnArrowRight.js":
/*!***********************************************************!*\
  !*** ./core/src/js/components/nav/events/OnArrowRight.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnArrowRight; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnArrowRight =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnArrowRight, _EventAbstract);

  function OnArrowRight() {
    _classCallCheck(this, OnArrowRight);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnArrowRight).apply(this, arguments));
  }

  _createClass(OnArrowRight, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      if (!this.isOnTarget()) {
        return;
      } // If we are in the second level or more we check about traversing
      // the parent.
      // if (this.getDepth() > 1) {


      var node = this.getElement('parentNavNext'); // this.nav.closeAllSubNavs();
      // this.nav.closeThisSubNav();

      if (node) {
        node.querySelector('a').focus();
      } // Go back to start.
      else {
          node = this.getElement('parentNavFirst');

          if (node) {
            node.focus();
          }
        } // }
      // else {
      //   this.onKeydownArrowDown(event, target);
      // }

    }
  }]);

  return OnArrowRight;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnArrowUp.js":
/*!********************************************************!*\
  !*** ./core/src/js/components/nav/events/OnArrowUp.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnArrowUp; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
/* harmony import */ var _OnEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnEnd */ "./core/src/js/components/nav/events/OnEnd.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnArrowUp =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnArrowUp, _EventAbstract);

  function OnArrowUp() {
    _classCallCheck(this, OnArrowUp);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnArrowUp).apply(this, arguments));
  }

  _createClass(OnArrowUp, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      // Only fire if the event is targeting my assigned target.
      if (!this.isOnTarget()) {
        return;
      }

      this.event.preventDefault(); // Go to the previous item.

      var node = this.getElement('prev'); // No previous node? Go to the last one then.

      if (!node) {
        node = this.getElement('last');
      } // If we have something to focus on.


      if (node) {
        node.focus();
      }
    }
  }]);

  return OnArrowUp;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnEnd.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/nav/events/OnEnd.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnEnd; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnEnd =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnEnd, _EventAbstract);

  function OnEnd() {
    _classCallCheck(this, OnEnd);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnEnd).apply(this, arguments));
  }

  _createClass(OnEnd, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      // Only fire if the event is targeting my assigned target.
      if (!this.isOnTarget()) {
        return;
      }

      this.event.preventDefault();
      var node = this.getElement('last');

      if (node) {
        node.focus();
      }
    }
  }]);

  return OnEnd;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnEsc.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/nav/events/OnEsc.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnEsc; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnEsc =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnEsc, _EventAbstract);

  function OnEsc() {
    var _this;

    _classCallCheck(this, OnEsc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OnEsc).call(this));
    _this.hello = "Esc was called";
    return _this;
  }

  return OnEsc;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnHome.js":
/*!*****************************************************!*\
  !*** ./core/src/js/components/nav/events/OnHome.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnHome; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnHome =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnHome, _EventAbstract);

  function OnHome() {
    _classCallCheck(this, OnHome);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnHome).apply(this, arguments));
  }

  _createClass(OnHome, [{
    key: "init",

    /**
     * [init description]
     * @return {[type]} [description]
     */
    value: function init() {
      // Only fire if the event is targeting my assigned target.
      if (!this.isOnTarget()) {
        return;
      }

      this.event.preventDefault();
      var node = this.getElement('first');

      if (node) {
        node.focus();
      }
    }
  }]);

  return OnHome;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnSpace.js":
/*!******************************************************!*\
  !*** ./core/src/js/components/nav/events/OnSpace.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnSpace; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnSpace =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnSpace, _EventAbstract);

  function OnSpace() {
    _classCallCheck(this, OnSpace);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnSpace).apply(this, arguments));
  }

  _createClass(OnSpace, [{
    key: "init",

    /**
     * Prevent the spacebar from jumping to anywhere.
     */
    value: function init() {
      if (!this.isOnTarget()) {
        return;
      }

      this.event.stopPropagation();
      this.event.preventDefault();
      window.location = this.target.getAttribute('href');
    }
  }]);

  return OnSpace;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/events/OnTab.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/nav/events/OnTab.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnTab; });
/* harmony import */ var _EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnTab =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnTab, _EventAbstract);

  function OnTab() {
    _classCallCheck(this, OnTab);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnTab).apply(this, arguments));
  }

  _createClass(OnTab, [{
    key: "init",

    /**
     * Prevent the spacebar from jumping to anywhere.
     */
    value: function init() {
      if (!this.isOnTarget()) {
        return;
      }

      var shifted = this.event.shiftKey;
      var node = null;

      if (shifted) {
        node = this.getElement('prev');
      } else {
        node = this.getElement('next');
      } // if (!node) {
      //   this.nav.closeThisSubNav();
      //   if (this.getDepth() === 1) {
      //     this.nav.closeAllSubNavs();
      //   }
      // }

    }
  }]);

  return OnTab;
}(_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/elements/SecondaryNav.js":
/*!***********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/elements/SecondaryNav.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNav; });
/* harmony import */ var _nav_ActivePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/ActivePath */ "./core/src/js/components/nav/ActivePath.js");
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ "./core/src/js/components/nav/EventHandlerDispatch.js");
/* harmony import */ var _nav_events_OnEsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/events/OnEsc */ "./core/src/js/components/nav/events/OnEsc.js");
/* harmony import */ var _nav_events_OnSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/events/OnSpace */ "./core/src/js/components/nav/events/OnSpace.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * SecondaryNav Class
 *
 * The most abstract version of a SecondaryNav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */

var SecondaryNav =
/*#__PURE__*/
function () {
  /**
   * Nav Abstract Constructor class.
   *
   * @param {HTMLElement} element    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   */
  function SecondaryNav(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SecondaryNav);

    // What HTML element this is bound to.
    this.elem = element; // Set some default options.

    var defaultOptions = {
      itemClass: 'su-secondary-nav__item',
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      itemActiveClass: 'su-secondary-nav__item--current',
      itemActiveTrailClass: 'su-secondary-nav__item--active-trail',
      itemParentClass: 'su-secondary-nav__item--parent',
      eventRegistry: {}
    }; // Merge with passed in options.

    this.options = Object.assign(defaultOptions, options); // Remove the no-js class.

    this.elem.classList.remove('no-js'); // Assign the event dispatcher and event registry.

    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__["default"](element, this); // Handle the active state.

    this.activePath = new _nav_ActivePath__WEBPACK_IMPORTED_MODULE_0__["default"](element, this.options);
    this.activePath.setActivePath();
    this.activePath.expandActivePath();
  }
  /**
   * Creates an event registry for handling types of events.
   * @return {[type]} [description]
   */


  _createClass(SecondaryNav, [{
    key: "createEventRegistry",
    value: function createEventRegistry(options) {
      var registryDefaults = {
        onKeydownEscape: _nav_events_OnEsc__WEBPACK_IMPORTED_MODULE_2__["default"],
        onKeydownSpace: _nav_events_OnSpace__WEBPACK_IMPORTED_MODULE_3__["default"]
      };
      return Object.assign(registryDefaults, options.eventRegistry);
    }
    /**
     * Close all subNavItems in this Nav.
     */

  }, {
    key: "closeAllSubNavs",
    value: function closeAllSubNavs() {
      this.subNavItems.forEach(function (item, event) {
        item.closeSubNav();
      });
    }
  }]);

  return SecondaryNav;
}();



/***/ }),

/***/ "./core/src/js/components/secondary-nav/elements/SecondaryNavAccordion.js":
/*!********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/elements/SecondaryNavAccordion.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNavAccordion; });
/* harmony import */ var _SecondaryNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecondaryNav */ "./core/src/js/components/secondary-nav/elements/SecondaryNav.js");
/* harmony import */ var _SecondarySubNavAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondarySubNavAccordion */ "./core/src/js/components/secondary-nav/elements/SecondarySubNavAccordion.js");
/* harmony import */ var _SecondaryNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondaryNavItem */ "./core/src/js/components/secondary-nav/elements/SecondaryNavItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * A secondary menu with toggle buttons.
 */

var SecondaryNavAccordion =
/*#__PURE__*/
function (_SecondaryNav) {
  _inherits(SecondaryNavAccordion, _SecondaryNav);

  /**
   * [constructor description]
   * @param {[type]} elem         [description]
   * @param {Object} [options={}] [description]
   */
  function SecondaryNavAccordion(elem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SecondaryNavAccordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNavAccordion).call(this, elem, options));

    _this.createSubNavItems();

    return _this;
  }
  /**
   * [createSubNavItems description]
   * @return {[type]} [description]
   */


  _createClass(SecondaryNavAccordion, [{
    key: "createSubNavItems",
    value: function createSubNavItems() {
      var _this2 = this;

      this.navItems = [];
      this.subNavItems = [];
      var parentItems = this.elem.querySelectorAll(':scope .' + this.options.itemParentClass + " > a");
      var leafItems = this.elem.querySelectorAll(':scope .' + this.options.itemClass + ":not(." + this.options.itemParentClass + ")" + " > a"); // Sub Navigation Items.

      if (parentItems.length >= 1) {
        parentItems.forEach(function (item) {
          _this2.subNavItems.push(new _SecondarySubNavAccordion__WEBPACK_IMPORTED_MODULE_1__["default"](item, _this2, {
            itemExpandedClass: _this2.options.itemExpandedClass
          }));
        });
      } // Regular Ol Items.


      if (leafItems.length >= 1) {
        leafItems.forEach(function (item) {
          if (item) _this2.navItems.push(new _SecondaryNavItem__WEBPACK_IMPORTED_MODULE_2__["default"](item, _this2));
        });
      }
    }
  }]);

  return SecondaryNavAccordion;
}(_SecondaryNav__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/elements/SecondaryNavButtons.js":
/*!******************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/elements/SecondaryNavButtons.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNavButtons; });
/* harmony import */ var _SecondaryNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecondaryNav */ "./core/src/js/components/secondary-nav/elements/SecondaryNav.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * A secondary menu with toggle buttons.
 */

var SecondaryNavButtons =
/*#__PURE__*/
function (_SecondaryNav) {
  _inherits(SecondaryNavButtons, _SecondaryNav);

  /**
   * [constructor description]
   * @param {[type]} elem         [description]
   * @param {Object} [options={}] [description]
   */
  function SecondaryNavButtons(elem) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SecondaryNavButtons);

    return _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNavButtons).call(this, elem, options));
  }

  return SecondaryNavButtons;
}(_SecondaryNav__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/elements/SecondaryNavItem.js":
/*!***************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/elements/SecondaryNavItem.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNavItem; });
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ "./core/src/js/components/nav/EventHandlerDispatch.js");
/* harmony import */ var _nav_events_OnHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nav/events/OnHome */ "./core/src/js/components/nav/events/OnHome.js");
/* harmony import */ var _nav_events_OnEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/events/OnEnd */ "./core/src/js/components/nav/events/OnEnd.js");
/* harmony import */ var _nav_events_OnTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/events/OnTab */ "./core/src/js/components/nav/events/OnTab.js");
/* harmony import */ var _nav_events_OnSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav/events/OnSpace */ "./core/src/js/components/nav/events/OnSpace.js");
/* harmony import */ var _nav_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../nav/events/OnArrowUp */ "./core/src/js/components/nav/events/OnArrowUp.js");
/* harmony import */ var _nav_events_OnArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nav/events/OnArrowRight */ "./core/src/js/components/nav/events/OnArrowRight.js");
/* harmony import */ var _nav_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../nav/events/OnArrowDown */ "./core/src/js/components/nav/events/OnArrowDown.js");
/* harmony import */ var _nav_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../nav/events/OnArrowLeft */ "./core/src/js/components/nav/events/OnArrowLeft.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










/**
 * SecondaryNav Class
 */

var SecondaryNavItem =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element      [description]
   * @param {Object} [options={}] [description]
   */
  function SecondaryNavItem(element, nav) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, SecondaryNavItem);

    this.elem = element;
    this.item = element.parentNode;
    this.nav = nav; // Assign the event dispatcher and event registry.

    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_0__["default"](element, this);
  }
  /**
   * Creates an event registry for handling types of events.
   * @return {[type]} [description]
   */


  _createClass(SecondaryNavItem, [{
    key: "createEventRegistry",
    value: function createEventRegistry(options) {
      var registryDefaults = {
        onKeydownHome: _nav_events_OnHome__WEBPACK_IMPORTED_MODULE_1__["default"],
        onKeydownEnd: _nav_events_OnEnd__WEBPACK_IMPORTED_MODULE_2__["default"],
        onKeydownTab: _nav_events_OnTab__WEBPACK_IMPORTED_MODULE_3__["default"],
        onKeydownSpace: _nav_events_OnSpace__WEBPACK_IMPORTED_MODULE_4__["default"],
        onKeydownArrowUp: _nav_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"],
        onKeydownArrowRight: _nav_events_OnArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"],
        onKeydownArrowDown: _nav_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_7__["default"],
        onKeydownArrowLeft: _nav_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_8__["default"]
      };
      return Object.assign(registryDefaults, options.eventRegistry);
    }
  }]);

  return SecondaryNavItem;
}();



/***/ }),

/***/ "./core/src/js/components/secondary-nav/elements/SecondarySubNavAccordion.js":
/*!***********************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/elements/SecondarySubNavAccordion.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondarySubNavAccordion; });
/* harmony import */ var _events_OnClickAccordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/OnClickAccordion */ "./core/src/js/components/secondary-nav/events/OnClickAccordion.js");
/* harmony import */ var _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nav/EventHandlerDispatch */ "./core/src/js/components/nav/EventHandlerDispatch.js");
/* harmony import */ var _nav_events_OnHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/events/OnHome */ "./core/src/js/components/nav/events/OnHome.js");
/* harmony import */ var _nav_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/events/OnEnd */ "./core/src/js/components/nav/events/OnEnd.js");
/* harmony import */ var _nav_events_OnTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav/events/OnTab */ "./core/src/js/components/nav/events/OnTab.js");
/* harmony import */ var _nav_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../nav/events/OnArrowUp */ "./core/src/js/components/nav/events/OnArrowUp.js");
/* harmony import */ var _nav_events_OnArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nav/events/OnArrowRight */ "./core/src/js/components/nav/events/OnArrowRight.js");
/* harmony import */ var _nav_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../nav/events/OnArrowDown */ "./core/src/js/components/nav/events/OnArrowDown.js");
/* harmony import */ var _nav_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../nav/events/OnArrowLeft */ "./core/src/js/components/nav/events/OnArrowLeft.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










/**
 * SecondarySubNav Class
 */

var SecondarySubNavAccordion =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element      [description]
   * @param {Object} [options={}] [description]
   */
  function SecondarySubNavAccordion(element, nav) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, SecondarySubNavAccordion);

    this.elem = element;
    this.item = element.parentNode;
    this.nav = nav;
    this.options = Object.assign({
      'itemExpandedClass': 'expanded'
    }, options); // Assign the event dispatcher and event registry.

    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new _nav_EventHandlerDispatch__WEBPACK_IMPORTED_MODULE_1__["default"](element, this);
  }
  /**
   * Creates an event registry for handling types of events.
   * @return {[type]} [description]
   */


  _createClass(SecondarySubNavAccordion, [{
    key: "createEventRegistry",
    value: function createEventRegistry(options) {
      var registryDefaults = {
        onClick: _events_OnClickAccordion__WEBPACK_IMPORTED_MODULE_0__["default"],
        onKeydownHome: _nav_events_OnHome__WEBPACK_IMPORTED_MODULE_2__["default"],
        onKeydownEnd: _nav_events_OnEnd__WEBPACK_IMPORTED_MODULE_3__["default"],
        onKeydownTab: _nav_events_OnTab__WEBPACK_IMPORTED_MODULE_4__["default"],
        onKeydownArrowUp: _nav_events_OnArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"],
        onKeydownArrowRight: _nav_events_OnArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"],
        onKeydownArrowDown: _nav_events_OnArrowDown__WEBPACK_IMPORTED_MODULE_7__["default"],
        onKeydownArrowLeft: _nav_events_OnArrowLeft__WEBPACK_IMPORTED_MODULE_8__["default"]
      };
      return Object.assign(registryDefaults, options.eventRegistry);
    }
    /**
     * Is this expanded? Can only return TRUE if this is a subnav trigger.
     *
     * @return {Boolean}
     *  Wether or not the item is expanded.
     */

  }, {
    key: "isExpanded",
    value: function isExpanded() {
      return this.elem.getAttribute('aria-expanded') === 'true';
    }
    /**
     * Handles the opening of a sub-nav.
     *
     * If this is a subnav trigger, open the corresponding subnav.
     * Optionally force focus on the first element in the subnav
     * (for keyboard nav).
     */

  }, {
    key: "openSubNav",
    value: function openSubNav() {
      this.elem.setAttribute('aria-expanded', true);
      this.item.classList.add(this.options.itemExpandedClass);
    }
    /**
     * Handles the closing of a subnav.
     *
     * If this is a subnav trigger or an item in a subnav, close the
     * corresponding subnav. Optionally force focus on the trigger.
     */

  }, {
    key: "closeSubNav",
    value: function closeSubNav() {
      this.elem.setAttribute('aria-expanded', false);
      this.item.classList.remove(this.options.itemExpandedClass);
    }
  }]);

  return SecondarySubNavAccordion;
}();



/***/ }),

/***/ "./core/src/js/components/secondary-nav/events/OnClickAccordion.js":
/*!*************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/events/OnClickAccordion.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnClickAccordion; });
/* harmony import */ var _nav_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nav/events/EventAbstract */ "./core/src/js/components/nav/events/EventAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */

var OnClickAccordion =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(OnClickAccordion, _EventAbstract);

  function OnClickAccordion() {
    _classCallCheck(this, OnClickAccordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnClickAccordion).apply(this, arguments));
  }

  _createClass(OnClickAccordion, [{
    key: "init",

    /**
     * [init description]
     */
    value: function init() {
      // Only fire if the event is targeting my assigned target.
      if (!this.isOnTarget()) {
        return;
      }

      this.event.preventDefault();

      if (this.handler.isExpanded()) {
        this.handler.closeSubNav(); // We blur then focus so that the browser announces the collapse to
        // those using screen readers and other assistive devices.

        this.elem.blur();
        this.elem.focus();
      } else {
        this.handler.openSubNav();
      }
    }
  }]);

  return OnClickAccordion;
}(_nav_events_EventAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/globals.js":
/*!*********************************************************!*\
  !*** ./core/src/js/components/secondary-nav/globals.js ***!
  \*********************************************************/
/*! exports provided: secondaryNavs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryNavs", function() { return secondaryNavs; });
// The css class that this following behaviour is applied to.
var secondaryNavClass = 'su-secondary-nav'; // All Secondary navs.

var secondaryNavs = document.querySelectorAll('.' + secondaryNavClass);

/***/ }),

/***/ "./core/src/js/components/secondary-nav/secondary-nav-accordion.js":
/*!*************************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav-accordion.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ "./core/src/js/core/core.js");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./core/src/js/components/secondary-nav/globals.js");
/* harmony import */ var _elements_SecondaryNavAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/SecondaryNavAccordion */ "./core/src/js/components/secondary-nav/elements/SecondaryNavAccordion.js");



document.addEventListener('DOMContentLoaded', function (event) {
  // Process each secondary nav accordion.
  _globals__WEBPACK_IMPORTED_MODULE_1__["secondaryNavs"].forEach(function (nav, index) {
    if (nav.className.match(/su-secondary-nav--accordion/)) {
      new _elements_SecondaryNavAccordion__WEBPACK_IMPORTED_MODULE_2__["default"](nav);
    }
  });
});

/***/ }),

/***/ "./core/src/js/components/secondary-nav/secondary-nav-buttons.js":
/*!***********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav-buttons.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ "./core/src/js/core/core.js");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./core/src/js/components/secondary-nav/globals.js");
/* harmony import */ var _elements_SecondaryNavButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/SecondaryNavButtons */ "./core/src/js/components/secondary-nav/elements/SecondaryNavButtons.js");



document.addEventListener('DOMContentLoaded', function (event) {
  _globals__WEBPACK_IMPORTED_MODULE_1__["secondaryNavs"].forEach(function (nav, index) {
    if (nav.className.match(/su-secondary-nav--buttons/)) {
      new _elements_SecondaryNavButtons__WEBPACK_IMPORTED_MODULE_2__["default"](nav);
    }
  });
});

/***/ }),

/***/ "./core/src/js/components/secondary-nav/secondary-nav.js":
/*!***************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _secondary_nav_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-nav-accordion.js */ "./core/src/js/components/secondary-nav/secondary-nav-accordion.js");
/* harmony import */ var _secondary_nav_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-nav-buttons.js */ "./core/src/js/components/secondary-nav/secondary-nav-buttons.js");
// Get'm



/***/ }),

/***/ "./core/src/js/core/core.js":
/*!**********************************!*\
  !*** ./core/src/js/core/core.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

/***/ }),

/***/ "./core/src/js/decanter.js":
/*!*********************************!*\
  !*** ./core/src/js/decanter.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ "./core/src/js/components/components.js");
/* harmony import */ var _scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/decanter.scss */ "./core/src/scss/decanter.scss");
/* harmony import */ var _scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./core/src/js/utilities/events.js":
/*!*****************************************!*\
  !*** ./core/src/js/utilities/events.js ***!
  \*****************************************/
/*! exports provided: createEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/**
 * Create an event with the specified name in a browser-agnostic way.
 *
 * @param {string} eventName - the name of the event
 * @param {Object} data - Additional data along with the event.
 *
 * @return {Event} - instance of event which can be dispatched / listened for
 */
var createEvent = function createEvent(eventName, data) {
  if (typeof eventName !== 'string' || eventName.length <= 0) {
    return null;
  } // Modern browsers.


  if (typeof Event == 'function') {
    return new Event(eventName, data);
  } // IE
  else {
      var ev = document.createEvent('UIEvent');
      ev.initEvent(eventName, true, true, data);
      return ev;
    }
};

/***/ }),

/***/ "./core/src/js/utilities/keyboard.js":
/*!*******************************************!*\
  !*** ./core/src/js/utilities/keyboard.js ***!
  \*******************************************/
/*! exports provided: isHome, isEnd, isTab, isEsc, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow, normalizeKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTab", function() { return isTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEsc", function() { return isEsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpace", function() { return isSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnter", function() { return isEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeftArrow", function() { return isLeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightArrow", function() { return isRightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpArrow", function() { return isUpArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDownArrow", function() { return isDownArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeKey", function() { return normalizeKey; });
// ---------------------------------------------------------------------------
// Keyboard helper functions
// ---------------------------------------------------------------------------
var isHome = function isHome(theKey) {
  return theKey === 'Home' || theKey === 122;
};
var isEnd = function isEnd(theKey) {
  return theKey === 'End' || theKey === 123;
};
var isTab = function isTab(theKey) {
  return theKey === 'Tab' || theKey === 9;
};
var isEsc = function isEsc(theKey) {
  return theKey === 'Escape' || theKey === 'Esc' || theKey === 27;
};
var isSpace = function isSpace(theKey) {
  return theKey === ' ' || theKey === 'Spacebar' || theKey === 32;
};
var isEnter = function isEnter(theKey) {
  return theKey === 'Enter' || theKey === 13;
};
var isLeftArrow = function isLeftArrow(theKey) {
  return theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37;
};
var isRightArrow = function isRightArrow(theKey) {
  return theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39;
};
var isUpArrow = function isUpArrow(theKey) {
  return theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38;
};
var isDownArrow = function isDownArrow(theKey) {
  return theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40;
};
/**
 * Return a consistent string for each key validation.
 *
 * @param {*} theKey the code from a keypress event.
 *
 * @return {String} A string name for the key that was pressed.
 */

var normalizeKey = function normalizeKey(theKey) {
  // Key Value Map of the normalized string and the check function.
  var map = {
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
  }; // Loop through the key/val object and run the check function (val) in order
  // to return the normalized string (key)

  for (var _i = 0, _Object$entries = Object.entries(map); _i < _Object$entries.length; _i++) {
    var entry = _Object$entries[_i];

    if (entry[1](theKey)) {
      return entry[0];
    }
  }

  return false;
};

/***/ }),

/***/ "./core/src/scss/decanter.scss":
/*!*************************************!*\
  !*** ./core/src/scss/decanter.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=decanter.js.map