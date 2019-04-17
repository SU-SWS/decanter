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
 * @param {string} eventName - the name of the event
 * @return {Event} - instance of event which can be dispatched / listened for
 */
var createEvent = function createEvent(eventName) {
  if (typeof eventName !== 'string' || eventName.length <= 0) {
    return null;
  } // Modern browsers


  if (typeof Event == 'function') {
    return new Event(eventName);
  } // IE
  else {
      var ev = document.createEvent('UIEvent');
      ev.initEvent(eventName, true, true);
      return ev;
    }
};

/***/ }),

/***/ "./core/src/js/utilities/keyboard.js":
/*!*******************************************!*\
  !*** ./core/src/js/utilities/keyboard.js ***!
  \*******************************************/
/*! exports provided: isHome, isEnd, isTab, isEsc, isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow */
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