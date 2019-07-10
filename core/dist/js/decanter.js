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



/***/ }),

/***/ "./core/src/js/components/main-nav/MainEvents.js":
/*!*******************************************************!*\
  !*** ./core/src/js/components/main-nav/MainEvents.js ***!
  \*******************************************************/
/*! exports provided: mainEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainEvents", function() { return mainEvents; });
/**
 * [mainEvents description]
 * @return {[type]} [description]
 */
var mainEvents = function mainEvents() {
  return {
    SubNavItem: {
      1: {
        onKeydownArrowRight: function onKeydownArrowRight(event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowRight(event, instance.link);
          } else {
            instance.onKeydownArrowDown(event, instance.link);
          }
        },
        onKeydownArrowDown: function onKeydownArrowDown(event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowDown(event, instance.link);
          } else {
            instance.onKeydownArrowRight(event, instance.link);
          }
        }
      }
    }
  };
};

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
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
/* harmony import */ var _NavAbstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavAbstract */ "./core/src/js/components/main-nav/NavAbstract.js");
/* harmony import */ var _NavToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavToggle */ "./core/src/js/components/main-nav/NavToggle.js");
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
function (_NavAbstract) {
  _inherits(Nav, _NavAbstract);

  /**
   * Create a Nav
   *
   * @param {HTMLElement|NavItem} elem - The element that is the nav menu.
   *                                     May be a main nav (<nav>) or a subnav
   *                                     (NavItem).
   */
  function Nav(elem, options) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, elem, options)); // Create navItems.

    _this.createNavItems(); // Initialize the event listeners.


    _this.createEventListeners(); // Gobble gobble toggle toggle.


    if (options.toggleSelector) {
      _this.createNavToggle();
    } // Add an active class to the children.


    if (options.activePath) {
      _this.setActivePath();
    } // Expand to the active path.


    if (options.expandActivePath) {
      _this.expandActivePath();
    }

    return _this;
  }
  /**
   * [createEventListeners description]
   */


  _createClass(Nav, [{
    key: "createEventListeners",
    value: function createEventListeners() {
      // What do when key down?
      this.elem.addEventListener('keydown', this); // Listen to the close so we can act on it.

      this.elem.addEventListener('preOpenSubnav', this);
    } // -------------------------------------------------------------------------
    // Event Handlers.
    // -------------------------------------------------------------------------

    /**
     * [preOpenSubnav description]
     * @param  {[type]} event     [description]
     * @param  {[type]} parentNav [description]
     */

  }, {
    key: "onPreOpenSubnav",
    value: function onPreOpenSubnav(event) {
      // Somebody clicked a subnav trigger. Check to see if it is one of my
      // subnavitems. If it is one of my subnav items, close all of the subnav
      // items so that everything on the same level are shut.
      var triggerId = event.detail.nav.id || null;

      if (triggerId === this.id) {
        this.closeAllSubNavs();
      }
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode;

      if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__["isEsc"])(theKey)) {
        this.closeAllSubNavs();
      }
    }
    /**
     * Create the toggle element.
     */

  }, {
    key: "createNavToggle",
    value: function createNavToggle() {
      // Find the element.
      var toggleElement = this.elem.querySelector(this.elem.tagName + this.options.toggleSelector); // If we cannot find a toggle element return null.

      if (!toggleElement) {
        return;
      } // Attach the behaviour.


      var toggleOptions = {
        navElement: this.elem,
        nav: this
      };
      this.toggle = this.options.toggle = new _NavToggle__WEBPACK_IMPORTED_MODULE_2__["default"](toggleElement, toggleOptions);
    }
  }]);

  return Nav;
}(_NavAbstract__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./core/src/js/components/main-nav/NavAbstract.js":
/*!********************************************************!*\
  !*** ./core/src/js/components/main-nav/NavAbstract.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavAbstract; });
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/main-nav/NavItem.js");
/* harmony import */ var _SubNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNavItem */ "./core/src/js/components/main-nav/SubNavItem.js");
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

var NavAbstract =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} elem    [description]
   * @param {[type]} options [description]
   */
  function NavAbstract(elem, options) {
    _classCallCheck(this, NavAbstract);

    // Save the passed in configuration options.
    this.options = options; // Prefixing the random ids.

    this.idPrefix = options.idPrefix || 'su-'; // The nav element.

    this.elem = elem; // Depth of menu item.

    this.depth = options.depth || 1; // The toggle menu button or none.

    this.toggle = options.toggle || false; // The JS Classes to use for building nav items.

    this.itemClasses = options.itemClasses || {
      single: _NavItem__WEBPACK_IMPORTED_MODULE_0__["default"],
      sub: _SubNavItem__WEBPACK_IMPORTED_MODULE_1__["default"]
    }; // Set the z-index if configured.

    if (this.options.zIndex > 1) {
      this.elem.style.zIndex = this.options.zIndex;
    } // Give this instance a unique ID.


    var id = Math.random().toString(36).substr(2, 9);
    this.id = this.idPrefix + id;
    this.elem.id = this.idPrefix + id; // Remove the no-js class.

    this.elem.classList.remove('no-js'); // Initialize items.

    this.navItems = [];
    this.subNavItems = []; // Class properties.

    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';

    if (this.options.activePath === true) {
      this.setActivePath();
    }
  }
  /**
   * [createNavItems description]
   */


  _createClass(NavAbstract, [{
    key: "createNavItems",
    value: function createNavItems() {
      var _this = this;

      var items = this.elem.querySelectorAll('#' + this.id + ' > ul > li');
      items.forEach(function (item) {
        // SubNavItems have special behaviour.
        if (item.querySelector(item.tagName + ' > ul')) {
          _this.subNavItems.push(new _this.itemClasses['sub'](item, _this, _this.options));
        } // NavItems have specific event handling.
        else {
            _this.navItems.push(new _this.itemClasses['single'](item, _this, _this.options));
          }
      });
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

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event; // If this class has an onEvent method (onClick, onKeydown) invoke it.

      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1); // What was clicked.

      var target = event.target || event.srcElement; // If the caller passed in their own event handling use that instead.

      if (this.options.itemEvents && this.options.itemEvents[handler]) {
        new this.options.itemEvents[handler](event, this);
      } // Otherwise, check to see if we have an event available.
      else if (typeof this[handler] === 'function') {
          return this[handler](event, target);
        }
    }
    /**
     * [setActivePath description]
     */

  }, {
    key: "setActivePath",
    value: function setActivePath() {
      var pathname = window.location.pathname;
      var anchor = window.location.hash;

      if (pathname.length) {
        var currentLink;

        if (!anchor) {
          currentLink = this.elem.querySelector("a[href*='" + pathname + "']");
        } else {
          currentLink = this.elem.querySelector("a[href*='" + anchor + "']");
        }

        if (currentLink) {
          while (currentLink) {
            if (currentLink.getAttribute('id') === this.id) {
              currentLink = false;
            } else if (currentLink.tagName === 'LI') {
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

  }, {
    key: "expandActivePath",
    value: function expandActivePath() {
      var _this2 = this;

      var actives = this.elem.querySelectorAll('.' + this.itemActiveClass);

      if (actives.length) {
        actives.forEach(function (item) {
          item.classList.add(_this2.itemExpandedClass);
          item.firstElementChild.setAttribute('aria-expanded', true);
        });
      }
    }
    /**
     * Gotta close em all.
     * @return {[type]} [description]
     */

  }, {
    key: "closeAllSubNavs",
    value: function closeAllSubNavs() {
      this.subNavItems.forEach(function (item, event) {
        item.closeSubNav();
      });
    }
    /**
     * [closeParentSubNavs description]
     * @return {[type]} [description]
     */

  }, {
    key: "closeThisSubNav",
    value: function closeThisSubNav() {
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

  }, {
    key: "focusOn",
    value: function focusOn(link) {
      var currentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    } // console.log('This function has been deprecated.');

    /**
     * [getDepth description]
     */

  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }]);

  return NavAbstract;
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
/* harmony import */ var _NavItemAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItemAbstract */ "./core/src/js/components/main-nav/NavItemAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Represent an item in a navigation menu. May be a direct link or a subnav
 * trigger.
 *
 * @prop {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem
 * @prop {HTMLElement|Nav} nav    - the Nav that contains the element.
 *                                  May be a main nav (<nav>) or subnav (Nav).
 * @prop {HTMLLIElement}   link   - the <a> in the DOM that is contained in
 *                                  item (the <li>).
 */

var NavItem =
/*#__PURE__*/
function (_NavItemAbstract) {
  _inherits(NavItem, _NavItemAbstract);

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  function NavItem(item, nav, options) {
    var _this;

    _classCallCheck(this, NavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavItem).call(this, item, nav, options));

    _this.link.addEventListener('keydown', _assertThisInitialized(_this));

    _this.link.addEventListener('click', _assertThisInitialized(_this));

    return _this;
  }
  /**
   * [onKeydownHome description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   */


  _createClass(NavItem, [{
    key: "onKeydownHome",
    value: function onKeydownHome(event, target) {
      event.preventDefault(); // Focus on the first item in the same level of this list.

      this.item.parentNode.firstElementChild.firstChild.focus();
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownEnd",
    value: function onKeydownEnd(event, target) {
      event.preventDefault(); // Focus on the last item in the same level of this list.

      this.item.parentNode.lastElementChild.firstChild.focus();
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownEscape",
    value: function onKeydownEscape(event, target) {
      event.preventDefault(); // Close everything.

      this.nav.closeAllSubNavs();
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      var shifted = event.shiftKey;
      var node = null;

      if (shifted) {
        node = this.item.previousElementSibling;
      } else {
        node = this.item.nextElementSibling;
      }

      if (!node) {
        if (this.options.toggle && this.getDepth() === 1) {
          this.options.toggle.closeNav();
        }

        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
      }
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      event.preventDefault();
      window.location = this.link.getAttribute('href');
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowUp",
    value: function onKeydownArrowUp(event, target) {
      event.preventDefault(); // Go to the previous item.

      var node = this.link.parentNode.previousElementSibling;

      if (node !== null) {
        node.firstChild.focus();
      } else {
        this.onKeydownEnd(event, target);
      }
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // If this is a nested item. Go back up a level.
      if (this.getDepth() > 1) {
        var node = this.item.parentNode.parentNode.firstElementChild;

        if (node) {
          this.nav.closeAllSubNavs();
          this.nav.closeThisSubNav();
          node.focus();
        } // Go to parent's end.
        else {
            this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a').focus();
          }
      } // Otherwise just to to the previous sibling.
      else {
          this.onKeydownArrowUp(event, target);
        }
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowDown",
    value: function onKeydownArrowDown(event, target) {
      event.preventDefault(); // Go to the next item.

      var node = this.link.parentNode.nextElementSibling;

      if (node !== null) {
        node.firstChild.focus();
      } else {
        this.onKeydownHome(event, target);
      }
    }
    /**
     * [onKeydownHome description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // If we are in the second level or more we check about traversing
      // the parent.
      if (this.getDepth() > 1) {
        var node = this.item.parentNode.parentNode.nextElementSibling;
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();

        if (node) {
          node.querySelector('a').focus();
        } // Go back to start.
        else {
            this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a').focus();
          }
      } else {
        this.onKeydownArrowDown(event, target);
      }
    }
  }]);

  return NavItem;
}(_NavItemAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/main-nav/NavItemAbstract.js":
/*!************************************************************!*\
  !*** ./core/src/js/components/main-nav/NavItemAbstract.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavItemAbstract; });
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
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
 */

var NavItemAbstract =
/*#__PURE__*/
function () {
  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  function NavItemAbstract(item, nav, options) {
    _classCallCheck(this, NavItemAbstract);

    this.options = options;
    this.item = item;
    this.nav = nav;
    this.link = this.item.querySelector(this.item.tagName + ' > a');
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


  _createClass(NavItemAbstract, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event; // If this class has an onEvent method (onClick, onKeydown) invoke it.

      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);
      var target = event.target || event.srcElement;
      var constructorName = this.constructor.name;
      var depth = this.getDepth(); // If the caller passed in their own event handling use that instead.

      if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
        return true;
      } // Otherwise, check to see if we have an event available.
      else if (typeof this[handler] === 'function') {
          return this[handler](event, target);
        }
    }
    /**
     * [getUserEvent description]
     * @param  {[type]} constructorName [description]
     * @param  {[type]} depth           [description]
     * @param  {[type]} handler         [description]
     * @return {[type]}                 [description]
     */

  }, {
    key: "handleUserEvent",
    value: function handleUserEvent(constructorName, depth, handler, event, target) {
      // Check the deep nesting for the event.
      if (this.options.itemEvents && this.options.itemEvents[constructorName] && this.options.itemEvents[constructorName][depth] && this.options.itemEvents[constructorName][depth][handler]) {
        this.options.itemEvents[constructorName][depth][handler](event, this);
        return true;
      } // No event provided


      return false;
    }
    /**
     * Handler for keydown events. keydown is bound to all NavItem's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @param {HTMLElement} target  - The HTML element target.
     * @return {*} - Mixed
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode;
      var normalized = Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__["normalizeKey"])(theKey); // We don't know about that key.

      if (!normalized) {
        return;
      } // Prepare a dynamic handler.


      var handler = 'onKeydown' + normalized.charAt(0).toUpperCase() + normalized.slice(1);
      var constructorName = this.constructor.name;
      var depth = this.getDepth(); // If the caller passed in their own event handling use that instead.

      if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
        return true;
      } // Check if a handling is on this instance.
      else if (typeof this[handler] === 'function') {
          return this[handler](event, target);
        }
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

  }, {
    key: "focusOn",
    value: function focusOn(what) {
      switch (what) {
        case 'first':
          this.item.querySelector('a').focus();
          break;

        case 'last':
          this.item.querySelector(this.item.tagName + ' > ul:lastChild a').focus();
          break;

        case 'next':
          this.item.nextElementSibling.querySelector('a').focus();
          break;

        case 'prev':
          this.item.previousElementSibling.querySelector('a').focus();
          break;

        default:
          this.item.querySelector('a').focus();
          break;
      }
    }
    /**
     * [getDepth description]
     * @return {[type]} [description]
     */

  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.nav.getDepth();
    }
  }]);

  return NavItemAbstract;
}();



/***/ }),

/***/ "./core/src/js/components/main-nav/NavToggle.js":
/*!******************************************************!*\
  !*** ./core/src/js/components/main-nav/NavToggle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavToggle; });
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/events */ "./core/src/js/utilities/events.js");
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 *
 */

var NavToggle =
/*#__PURE__*/
function () {
  /**
   * [constructor description]
   * @param {[type]} element [description]
   * @param {[type]} options [description]
   */
  function NavToggle(element, options) {
    var _this = this;

    _classCallCheck(this, NavToggle);

    // Params.
    this.element = element;
    this.options = options;
    this.nav = options.nav || null;
    this.navElement = options.navElement;
    this.toggleText = options.toggleText || element.innerText;
    this.closeText = options.closeText || 'Close';
    this.openEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_0__["createEvent"])('openNav');
    this.closeEvent = Object(_utilities_events__WEBPACK_IMPORTED_MODULE_0__["createEvent"])('closeNav'); // Event listeners.

    this.element.addEventListener('click', this);
    this.element.addEventListener('keydown', this); // Clicking anywhere outside of attached nav closes all the children.

    document.addEventListener('click', function (event) {
      // The element that was clicked.
      var target = event.target || event.srcElement; // If the clicked element was not in my nav wrapper, close me.

      var found = target.closest('#' + _this.nav.id);

      if (!found) {
        _this.closeNav();

        _this.nav.closeAllSubNavs();
      }
    });
  }
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


  _createClass(NavToggle, [{
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
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      // Only act if the target is my element.
      if (target !== this.element) {
        return;
      } // Don't go nowhere.


      event.preventDefault();
      event.stopPropagation(); // Toggle open and close.

      if (this.isExpanded()) {
        this.closeNav();
      } else {
        this.openNav(true);
      }
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode; // Do the click toggle for enter and space keys.

      if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isEnter"])(theKey) || Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(theKey)) {
        this.onClick(event, this.element);
      }
    }
    /**
     * Close any  navs that might be open, then mark this  nav open.
     * Optionally force focus on the first element in the nav (for keyboard nav)
     *
     * @param {Boolean} focusOnFirst - Whether or not to also focus on the
     *                                 first element in the subnav.
     */

  }, {
    key: "openNav",
    value: function openNav() {
      var focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setExpanded(true);
      this.element.innerText = this.closeText; // Focus on the first link in the nav.

      if (focusOnFirst) {
        this.nav.elem.querySelector('a').focus();
      } // Alert others the nav has opened.


      this.element.dispatchEvent(this.openEvent);
    }
    /**
     * Mark this  closed, and restore the button text to what it was
     * initially.
     */

  }, {
    key: "closeNav",
    value: function closeNav() {
      if (this.isExpanded()) {
        this.setExpanded('false');
        this.element.innerText = this.toggleText; // Alert others the  nav has closed.

        this.element.dispatchEvent(this.closeEvent);
      }
    }
    /**
     * Set whether or not this is expanded.
     */

  }, {
    key: "setExpanded",
    value: function setExpanded(value) {
      this.element.setAttribute('aria-expanded', value);
      this.nav.elem.setAttribute('aria-expanded', value);
    }
    /**
     * Is this expanded?
     *
     * @return {Boolean}
     *   Returns wether or not the item is expanded.
     */

  }, {
    key: "isExpanded",
    value: function isExpanded() {
      return this.element.getAttribute('aria-expanded') === 'true';
    }
    /**
     * Setter for nav property.
     * @param {[type]} nav [description]
     */

  }, {
    key: "setNav",
    value: function setNav(nav) {
      this.nav = nav;
    }
  }]);

  return NavToggle;
}();



/***/ }),

/***/ "./core/src/js/components/main-nav/SubNavItem.js":
/*!*******************************************************!*\
  !*** ./core/src/js/components/main-nav/SubNavItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubNavItem; });
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/main-nav/NavItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // @see https://github.com/krambuhl/custom-event-polyfill


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

var SubNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(SubNavItem, _NavItem);

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  function SubNavItem(item, nav, options) {
    var _this;

    _classCallCheck(this, SubNavItem);

    // I'm feelin supa!
    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubNavItem).call(this, item, nav, options)); // Create the children navs based on the parent constructor.

    var construct = nav.constructor;
    var navOptions = options;
    navOptions.depth = nav.getDepth() + 1;
    _this.subNav = new construct(_this.item, navOptions); // Create the custom events.

    _this.createCustomEvents();

    return _this;
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


  _createClass(SubNavItem, [{
    key: "onClick",
    value: function onClick(event, target) {
      // If the click is not on the trigger then ignore.
      if (target !== this.link) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.isExpanded()) {
        this.closeSubNav();
        this.link.focus();
      } else {
        this.openSubNav();
        this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li a').focus();
      }
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

  }, {
    key: "closeSubNav",
    value: function closeSubNav() {
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

      if (value) {
        this.item.classList.add(this.options.itemExpandedClass);
      } else {
        this.item.classList.remove(this.options.itemExpandedClass);
      }
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // Go up a level and close the nav.
      event.preventDefault();

      if (this.getDepth() > 1) {
        this.item.parentNode.parentNode.firstElementChild.focus();
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
      } else {
        _get(_getPrototypeOf(SubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);
      }
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // Go down a level and open the SubNav.
      event.preventDefault();
      this.openSubNav();
      this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li a').focus();
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      this.onClick(event, target);
    }
    /**
     * [onKeydown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownEnter",
    value: function onKeydownEnter(event, target) {
      this.onClick(event, target);
    }
    /**
     * [createCustomEvents description]
     */

  }, {
    key: "createCustomEvents",
    value: function createCustomEvents() {
      // Add custom events to alert others when a subnav opens or closes.
      // this.openEvent is dispatched in this.openSubNav().
      this.preOpenEvent = new CustomEvent('preOpenSubnav', {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }); // this.closeEvent is dispatched in this.closeSubNav().

      this.openEvent = new CustomEvent('openSubnav', {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }); // this.closeEvent is dispatched in this.closeSubNav().

      this.preCloseEvent = new CustomEvent('preCloseSubnav', {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      });
      this.closeEvent = new CustomEvent('closeSubnav', {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      });
    }
  }]);

  return SubNavItem;
}(_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./core/src/js/components/main-nav/Nav.js");
/* harmony import */ var _MainEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainEvents */ "./core/src/js/components/main-nav/MainEvents.js");



document.addEventListener('DOMContentLoaded', function (event) {
  // The css class that this following behaviour is applied to.
  var navClass = 'su-main-nav'; // All main navs.

  var navs = document.querySelectorAll('.' + navClass); // Event Overrides.

  var customEvents = Object(_MainEvents__WEBPACK_IMPORTED_MODULE_2__["mainEvents"])(); // Loop through each of the navs and create a new instance.

  navs.forEach(function (nav, index) {
    // Main nav default constructor options.
    var options = {
      zIndex: null,
      toggle: null,
      toggleSelector: ' > button',
      toggleClass: 'su-main-nav__toggle',
      itemExpandedClass: 'su-main-nav__item--expanded',
      itemActiveClass: 'su-main-nav__item--current',
      activePath: true,
      itemEvents: customEvents
    }; // Manage z-indexes in case there are multiple navs near each other.

    if (index >= 1) {
      var zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    } // Create an instance of Nav,
    // which in turn creates appropriate instances of NavItem and SubNavItem.


    new _Nav__WEBPACK_IMPORTED_MODULE_1__["default"](nav, options);
  });
}); // on DOMContentLoaded.

/***/ }),

/***/ "./core/src/js/components/secondary-nav/ToggleNav.js":
/*!***********************************************************!*\
  !*** ./core/src/js/components/secondary-nav/ToggleNav.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleNav; });
/* harmony import */ var _ToggleNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleNavItem */ "./core/src/js/components/secondary-nav/ToggleNavItem.js");
/* harmony import */ var _ToggleSubNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleSubNavItem */ "./core/src/js/components/secondary-nav/ToggleSubNavItem.js");
/* harmony import */ var _main_nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-nav/Nav */ "./core/src/js/components/main-nav/Nav.js");
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

var ToggleNav =
/*#__PURE__*/
function (_Nav) {
  _inherits(ToggleNav, _Nav);

  /**
   * [constructor description]
   * @param {[type]} elem    [description]
   * @param {[type]} options [description]
   */
  function ToggleNav(elem, options) {
    _classCallCheck(this, ToggleNav);

    // Override the subnav classes unless they are provided.
    options.itemClasses = options.itemClasses || {
      single: _ToggleNavItem__WEBPACK_IMPORTED_MODULE_0__["default"],
      sub: _ToggleSubNavItem__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleNav).call(this, elem, options));
  }
  /**
   * [closeThisSubNav description]
   */


  _createClass(ToggleNav, [{
    key: "closeThisSubNav",
    value: function closeThisSubNav() {
      this.elem.classList.remove(this.options.itemExpandedClass);
      var toggle = this.elem.querySelector('#' + this.id + ' .' + this.options.toggleClass);
      toggle.setAttribute('aria-expanded', false);
    }
  }]);

  return ToggleNav;
}(_main_nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/ToggleNavItem.js":
/*!***************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/ToggleNavItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleNavItem; });
/* harmony import */ var _main_nav_NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-nav/NavItem */ "./core/src/js/components/main-nav/NavItem.js");
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

var ToggleNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(ToggleNavItem, _NavItem);

  /**
   * Build.
   * @param {[type]} item    [description]
   * @param {[type]} nav     [description]
   * @param {[type]} options [description]
   */
  function ToggleNavItem(item, nav, options) {
    _classCallCheck(this, ToggleNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleNavItem).call(this, item, nav, options));
  }
  /**
   * [onKeydownTab description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   */


  _createClass(ToggleNavItem, [{
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      // If the tab was shift tabbed prevent the nav from collapsing.
      if (event.shiftKey) {
        event.stopPropagation();
      }
    }
  }]);

  return ToggleNavItem;
}(_main_nav_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/ToggleSubNavItem.js":
/*!******************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/ToggleSubNavItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleSubNavItem; });
/* harmony import */ var _main_nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-nav/SubNavItem */ "./core/src/js/components/main-nav/SubNavItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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

var ToggleSubNavItem =
/*#__PURE__*/
function (_SubNavItem) {
  _inherits(ToggleSubNavItem, _SubNavItem);

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  function ToggleSubNavItem(item, nav, options) {
    var _this;

    _classCallCheck(this, ToggleSubNavItem);

    // I'm feelin supa!
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleSubNavItem).call(this, item, nav, options)); // Set text.

    _this.toggleText = options.subNavToggleText || '+';
    _this.toggleClass = options.toggleClass || 'nav-toggle'; // Create the buttons.

    _this.toggle = _this.createToggleButton();

    _this.item.insertBefore(_this.toggle, _this.item.querySelector('ul')); // Create the toggle events.


    _this.toggle.addEventListener('click', _assertThisInitialized(_this));

    _this.toggle.addEventListener('keydown', _assertThisInitialized(_this));

    return _this;
  }
  /**
   * [createToggleButton description]
   * @return {[type]} [description]
   */


  _createClass(ToggleSubNavItem, [{
    key: "createToggleButton",
    value: function createToggleButton() {
      var element = document.createElement('button');
      var label = document.createTextNode(this.toggleText); // Give this instance a unique ID.

      var id = 'toggle-' + Math.random().toString(36).substr(2, 9);
      element.setAttribute('class', this.toggleClass);
      element.setAttribute('aria-expanded', this.item.classList.contains(this.options.itemActiveClass));
      element.setAttribute('aria-controls', this.subNav.id);
      element.setAttribute('id', id);
      element.appendChild(label);
      return element;
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
     * @return {[type]}        [description]
     */

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      // If the click is on the trigger then ignore.
      if (target === this.link) {
        return;
      }

      if (target === this.toggle) {
        if (this.isExpanded()) {
          this.closeSubNav();
        } else {
          this.openSubNav();
        }

        return;
      }
    }
    /**
     * [onKeydownTab description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      // If the target is the link and no shift then go to the button.
      if (target === this.link && event.shiftKey) {
        event.stopPropagation();
      }
    }
    /**
     * [onKeydownSpace description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      event.stopPropagation();
      event.preventDefault();
      this.onClick(event, target);
    }
    /**
     * [onKeydownEnter description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownEnter",
    value: function onKeydownEnter(event, target) {
      this.onKeydownSpace(event, target);
    }
    /**
     * [onKeydownArrowRight description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      event.stopPropagation();
      event.preventDefault(); // If on the link go to the toggle.

      if (target === this.link) {
        this.toggle.focus();
      }
    }
    /**
     * [onKeydownArrowLeft description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // If on the toggle go to the link.
      if (target === this.toggle) {
        event.stopPropagation();
        event.preventDefault();
        this.link.focus();
        return;
      }

      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);
    }
    /**
     * [onKeydownArrowDown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "onKeydownArrowDown",
    value: function onKeydownArrowDown(event, target) {
      if (target === this.toggle && this.isExpanded()) {
        event.stopPropagation();
        event.preventDefault();
        this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul > li > a').focus();
        return;
      }

      if (target === this.toggle && !this.isExpanded()) {
        _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowRight", this).call(this, event, this.link);

        return;
      }

      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowDown", this).call(this, event, this.link);
    }
    /**
     * [onKeydownArrowDown description]
     * @param  {[type]} event  [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "onKeydownArrowUp",
    value: function onKeydownArrowUp(event, target) {
      if (target === this.toggle && this.isExpanded()) {
        event.stopPropagation();
        event.preventDefault();
        this.closeNav();
        this.item.parentElementNode.parentElementNode.querySelector('a').focus();
        return;
      }

      if (target === this.toggle && !this.isExpanded()) {
        _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, this.link);

        return;
      }

      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowUp", this).call(this, event, this.link);
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
      return this.toggle.getAttribute('aria-expanded') === 'true';
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
      this.toggle.setAttribute('aria-expanded', value);

      if (value) {
        this.item.classList.add(this.options.itemExpandedClass);
      } else {
        this.item.classList.remove(this.options.itemExpandedClass);
      }
    }
  }]);

  return ToggleSubNavItem;
}(_main_nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/secondary-nav.js":
/*!***************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/secondary-nav.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core */ "./core/src/js/core/core.js");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-nav/Nav */ "./core/src/js/components/main-nav/Nav.js");
/* harmony import */ var _ToggleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleNav */ "./core/src/js/components/secondary-nav/ToggleNav.js");



document.addEventListener('DOMContentLoaded', function (event) {
  // The css class that this following behaviour is applied to.
  var navClass = 'su-secondary-nav'; // All secondary navs.

  var navs = document.querySelectorAll('.' + navClass); // Generate the Accordion toggle for each nav.

  navs.forEach(function (nav) {
    // Secondary nav specific settings.
    var options = {
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      itemActiveClass: 'su-secondary-nav__item--current',
      toggleClass: 'su-secondary-nav__toggle',
      activePath: true,
      expandActivePath: true
    }; // Create an instance of ToggleNav, which in turn create appropriate
    // instances of ToggleSubNavItems.

    if (nav.className.match(/--buttons/)) {
      new _ToggleNav__WEBPACK_IMPORTED_MODULE_2__["default"](nav, options);
    } // Create an instance of Nav, which in turn creates appropriate instances
    // of NavItem.
    else {
        new _main_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"](nav, options);
      }
  });
});

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
var createEvent = function createEvent(eventName, data) {
  if (typeof eventName !== 'string' || eventName.length <= 0) {
    return null;
  } // Modern browsers.


  if (typeof Event == 'function') {
    return new Event(eventName, data);
  } // IE.
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
 * [normalizeKey description]
 * @param  {[type]} theKey [description]
 * @return {[type]}        [description]
 */

var normalizeKey = function normalizeKey(theKey) {
  var ret = false;

  if (isHome(theKey)) {
    ret = 'home';
  } else if (isEnd(theKey)) {
    ret = 'end';
  } else if (isTab(theKey)) {
    ret = 'tab';
  } else if (isEsc(theKey)) {
    ret = 'escape';
  } else if (isSpace(theKey)) {
    ret = 'space';
  } else if (isEnter(theKey)) {
    ret = 'enter';
  }

  if (isLeftArrow(theKey)) {
    ret = 'arrowLeft';
  } else if (isRightArrow(theKey)) {
    ret = 'arrowRight';
  } else if (isUpArrow(theKey)) {
    ret = 'arrowUp';
  } else if (isDownArrow(theKey)) {
    ret = 'arrowDown';
  }

  return ret;
};

/***/ }),

/***/ "./core/src/scss/decanter.scss":
/*!*************************************!*\
  !*** ./core/src/scss/decanter.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/custom-event-polyfill/polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/custom-event-polyfill/polyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ })

/******/ });
//# sourceMappingURL=decanter.js.map