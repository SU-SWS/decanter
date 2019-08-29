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

/***/ "./core/src/js/components/main-nav/MainNav.js":
/*!****************************************************!*\
  !*** ./core/src/js/components/main-nav/MainNav.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNav; });
/* harmony import */ var _nav_Nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/Nav.js */ "./core/src/js/components/nav/Nav.js");
/* harmony import */ var _MainNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavItem */ "./core/src/js/components/main-nav/MainNavItem.js");
/* harmony import */ var _MainSubNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainSubNavItem */ "./core/src/js/components/main-nav/MainSubNavItem.js");
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
 * Represent a main navigation menu
 */

var MainNav =
/*#__PURE__*/
function (_Nav) {
  _inherits(MainNav, _Nav);

  function MainNav() {
    _classCallCheck(this, MainNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainNav).apply(this, arguments));
  }

  _createClass(MainNav, [{
    key: "createNavItems",

    /**
     * Create all the children items.
     *
     * @see ../nav/NavAbstract.js
     */
    value: function createNavItems() {
      this.itemClasses['sub'] = _MainSubNavItem__WEBPACK_IMPORTED_MODULE_2__["default"];
      this.itemClasses['single'] = _MainNavItem__WEBPACK_IMPORTED_MODULE_1__["default"];

      _get(_getPrototypeOf(MainNav.prototype), "createNavItems", this).call(this);
    }
  }]);

  return MainNav;
}(_nav_Nav_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/main-nav/MainNavItem.js":
/*!********************************************************!*\
  !*** ./core/src/js/components/main-nav/MainNavItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavItem; });
/* harmony import */ var _nav_NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/NavItem */ "./core/src/js/components/nav/NavItem.js");
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
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */

var MainNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(MainNavItem, _NavItem);

  function MainNavItem() {
    _classCallCheck(this, MainNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainNavItem).apply(this, arguments));
  }

  _createClass(MainNavItem, [{
    key: "isMobileExpanded",

    /**
     * Wether or not the mobile option is active.
     * @return {Boolean} [description]
     */
    value: function isMobileExpanded() {
      if (this.options.toggle) {
        if (this.options.toggle.isExpanded()) {
          return true;
        }
      }

      return false;
    }
    /**
     * Event handler for key press: Right Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // When on Desktop and greater than 2 deep don't do nothing.
      if (!this.isMobileExpanded() && this.getDepth() > 2) {
        return;
      } // When mobile menu is enabled just do nothing.


      if (this.isMobileExpanded()) {
        return;
      } // Ok, you can do stuff.


      _get(_getPrototypeOf(MainNavItem.prototype), "onKeydownArrowRight", this).call(this, event, target);
    }
    /**
     * Event handler for key press: Left Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // For top level don't do nothing.
      if (this.isMobileExpanded() && this.getDepth() == 1) {
        return;
      } // For everything else just do the lefty thing but change the focus.


      _get(_getPrototypeOf(MainNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);

      if (!this.isMobileExpanded() && this.getDepth() == 2) {
        var _node = this.getElement('parentNavPrevItem');

        if (_node) {
          _node.focus();
        }
      }
    }
    /**
     * Event handler for key press: Tab
     *
     * Allow the natural tab order but when traversing levels close previous
     * sub nav items as we go.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      var shifted = event.shiftKey;
      var isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search');

      if (!shifted || !isSearch || this.getDepth() > 1) {
        _get(_getPrototypeOf(MainNavItem.prototype), "onKeydownTab", this).call(this, event, target);

        return;
      }

      node = this.getElement('prev');

      if (!node) {
        event.stopPropagation();
        return;
      }
    }
  }]);

  return MainNavItem;
}(_nav_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/main-nav/MainSubNavItem.js":
/*!***********************************************************!*\
  !*** ./core/src/js/components/main-nav/MainSubNavItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSubNavItem; });
/* harmony import */ var _nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/SubNavItem */ "./core/src/js/components/nav/SubNavItem.js");
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
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it.
 */

var MainSubNavItem =
/*#__PURE__*/
function (_SubNavItem) {
  _inherits(MainSubNavItem, _SubNavItem);

  function MainSubNavItem() {
    _classCallCheck(this, MainSubNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainSubNavItem).apply(this, arguments));
  }

  _createClass(MainSubNavItem, [{
    key: "isMobileExpanded",

    /**
     * Wether or not the mobile option is active.
     * @return {Boolean} [description]
     */
    value: function isMobileExpanded() {
      if (this.options.toggle) {
        if (this.options.toggle.isExpanded()) {
          return true;
        }
      }

      return false;
    }
    /**
     * Event handler for key press: Right Arrow
     *
     * Go and focus on the next sibling of this item.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // When the main menu focus is at level 1 and not on mobile move to the
      // next sibling.
      if (!this.isMobileExpanded() && this.getDepth() == 1) {
        _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowDown", this).call(this, event, target);

        return;
      } // When the mobile menu is active do the secondary nav thing.


      if (this.isMobileExpanded() && this.getDepth() == 1) {
        _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowRight", this).call(this, event, target);

        return;
      }

      _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowRight", this).call(this, event, target);
    }
    /**
     * Event handler for key press: Down Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowDown",
    value: function onKeydownArrowDown(event, target) {
      if (!this.isMobileExpanded() && this.getDepth() == 1) {
        _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowRight", this).call(this, event, target);
      } else {
        _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowDown", this).call(this, event, target);
      }
    }
    /**
     * Event handler for key press: Left Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // For top level don't do nothing.
      if (this.isMobileExpanded() && this.getDepth() == 1) {
        return;
      } // For everything else just do the lefty thing but change the focus.


      _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);

      if (!this.isMobileExpanded() && this.getDepth() == 2) {
        var _node = this.getElement('parentNavPrevItem');

        if (_node) {
          _node.focus();
        }
      }
    }
    /**
     * Event handler for key press: Tab
     *
     * Allow the natural tab order but when traversing levels close previous
     * sub nav items as we go.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      var shifted = event.shiftKey;
      var isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search');

      if (!shifted || !isSearch || this.getDepth() > 1) {
        _get(_getPrototypeOf(MainSubNavItem.prototype), "onKeydownTab", this).call(this, event, target);

        return;
      }

      node = this.getElement('prev');

      if (!node) {
        event.stopPropagation();
        return;
      }
    }
  }]);

  return MainSubNavItem;
}(_nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNav */ "./core/src/js/components/main-nav/MainNav.js");


/**
 * Initiate the main nav elements on the page when the dom content is loaded.
 */

document.addEventListener('DOMContentLoaded', function (event) {
  // The css class that this following behaviour is applied to.
  var navClass = 'su-main-nav'; // All main navs.

  var navs = document.querySelectorAll('.' + navClass); // Loop through each of the navs and create a new instance.

  navs.forEach(function (nav, index) {
    // Main nav default constructor options.
    var options = {
      zIndex: null,
      toggleSelector: ' > button',
      toggleClass: 'su-main-nav__toggle',
      itemExpandedClass: 'su-main-nav__item--expanded',
      itemActiveClass: 'su-main-nav__item--current',
      activePath: true,
      expandActivePath: true
    }; // Manage z-indexes in case there are multiple navs near each other.

    if (index >= 1) {
      var zndx = getComputedStyle(navs[index - 1], null).zIndex;
      zndx--;
      options.zIndex = zndx;
    } // Create an instance of Nav,
    // which in turn creates appropriate instances of NavItem and SubNavItem.


    new _MainNav__WEBPACK_IMPORTED_MODULE_1__["default"](nav, options);
  });
}); // on DOMContentLoaded.

/***/ }),

/***/ "./core/src/js/components/nav/Nav.js":
/*!*******************************************!*\
  !*** ./core/src/js/components/nav/Nav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keyboard */ "./core/src/js/utilities/keyboard.js");
/* harmony import */ var _NavAbstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavAbstract */ "./core/src/js/components/nav/NavAbstract.js");
/* harmony import */ var _NavToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavToggle */ "./core/src/js/components/nav/NavToggle.js");
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
 * Represent a navigation menu. May be the top nav or a subnav.
 */

var Nav =
/*#__PURE__*/
function (_NavAbstract) {
  _inherits(Nav, _NavAbstract);

  /**
   * Create a nav container istance.
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  function Nav(elem, options) {
    var _this;

    _classCallCheck(this, Nav);

    // Run the NavAbstract class first.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, elem, options)); // Create navItems.

    _this.createNavItems(); // Initialize the event listeners.


    _this.createEventListeners(); // Create the Mobile/Desktop nav toggle..


    if (options.toggleSelector) {
      _this.createNavToggle();
    } // Add an active class to items that match the current url.


    if (options.activePath) {
      _this.setActivePath();
    } // Expand to the active items.


    if (options.expandActivePath) {
      _this.expandActivePath();
    }

    return _this;
  }
  /**
   * Create new event listeners for the nav element and our custom events.
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
     * A subnav event was called. Handle it.
     *
     * @param {Event} event - The event object.
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
     * Handle the key press events.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event, target) {
      var theKey = event.key || event.keyCode; // Close all the navs.

      if (Object(_utilities_keyboard__WEBPACK_IMPORTED_MODULE_0__["isEsc"])(theKey)) {
        this.closeAllSubNavs(); // If this nav has a toggle element, close that too.

        if (this.toggle) {
          this.toggle.closeNav();
        }
      }
    }
    /**
     * Create the toggle element.
     *
     * The toggle element is the item that opens and closes the mobile nav menu.
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
    /**
     * Expand open the active path.
     */

  }, {
    key: "expandActivePath",
    value: function expandActivePath() {
      // Let super do its thing first.
      _get(_getPrototypeOf(Nav.prototype), "expandActivePath", this).call(this); // This condition is specific for the main menu nav only.
      // On Desktop with initial expanded menu items we need to
      // collapse the first level only and leave the rest expanded.


      if (this.toggle && window.innerWidth > 768) {
        this.closeAllSubNavs();
      }
    }
  }]);

  return Nav;
}(_NavAbstract__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/NavAbstract.js":
/*!***************************************************!*\
  !*** ./core/src/js/components/nav/NavAbstract.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavAbstract; });
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/nav/NavItem.js");
/* harmony import */ var _SubNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNavItem */ "./core/src/js/components/nav/SubNavItem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * NavAbstract Class
 *
 * The most abstract version of a Nav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */

var NavAbstract =
/*#__PURE__*/
function () {
  /**
   * Nav Abstract Constructor class.
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  function NavAbstract(elem, options) {
    _classCallCheck(this, NavAbstract);

    // Save the passed in configuration options.
    this.options = options; // Prefixing the random ids.

    this.idPrefix = options.idPrefix || 'su-'; // The nav element.

    this.elem = elem; // Depth of menu item.

    this.depth = options.depth || 1; // The toggle menu button or none.

    this.toggle = options.toggle || false; // The JS Classes to use for building children nav items.

    this.itemClasses = options.itemClasses || {
      single: _NavItem__WEBPACK_IMPORTED_MODULE_0__["default"],
      sub: _SubNavItem__WEBPACK_IMPORTED_MODULE_1__["default"]
    }; // Set the z-index if configured.

    if (this.options.zIndex > 1 && this.depth === 1) {
      this.elem.style.zIndex = this.options.zIndex;
    } // Give this instance a unique ID.


    var id = Math.random().toString(36).substr(2, 9);
    this.id = this.idPrefix + id;
    this.elem.id = this.idPrefix + id; // Remove the no-js class.

    this.elem.classList.remove('no-js'); // Initialize items.

    this.navItems = [];
    this.subNavItems = []; // Class properties.

    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded'; // Set the active path on the menu tree.

    if (this.options.activePath === true) {
      // Set it from the parent most nav.
      this.setActivePath(); // Only run once.

      this.options.activePath = false;
    }
  }
  /**
   * Create all the children items.
   *
   * Loop through each LI element and either create a single level NavItem, or,
   * create another nav through a SubNavItem.
   */


  _createClass(NavAbstract, [{
    key: "createNavItems",
    value: function createNavItems() {
      var _this = this;

      // Navs are only responsible for their direct descendant items.
      var items = this.elem.querySelectorAll('#' + this.id + ' > ul > li');
      items.forEach(function (item) {
        // SubNavItems have special behaviour so they have their own class.
        // Caller can pass in different classes but must extend or interface
        // subNavItem.
        if (item.querySelector(item.tagName + ' > ul')) {
          _this.subNavItems.push(new _this.itemClasses['sub'](item, _this, _this.options));
        } // NavItems have specific event handling.
        // Caller can pass in different classes but must extend or interface
        // navItemAbstract.
        else {
            _this.navItems.push(new _this.itemClasses['single'](item, _this, _this.options));
          }
      });
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
      event = event || window.event; // If this class has an onEvent method (onClick, onKeydown) invoke it.

      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1); // What was clicked.

      var target = event.target || event.srcElement; // If the caller passed in their own event handling use that instead.

      if (this.options.itemEvents && this.options.itemEvents[handler]) {
        new this.options.itemEvents[handler](event, this);
      } // Otherwise, check to see if we have an event available.
      else if (typeof this[handler] === 'function') {
          this[handler](event, target);
        }
    }
    /**
     * Dynamically add an active path to the menu tree.
     *
     * Find all links with the current window's url and add the
     * options.itemActiveClass class to the LI element container all the way up
     * the menu tree back to the root.
     */

  }, {
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
      var _this2 = this;

      var actives = this.elem.querySelectorAll('.' + this.itemActiveClass);

      if (actives.length) {
        actives.forEach(function (item) {
          // While we have parents go up and add the active class.
          while (item) {
            // End when we get to the parent nav item stop.
            if (item.getAttribute('id') === _this2.id) {
              // Stop at the top most level.
              break;
            } // If we are on a LI element we need to add the active class.


            if (item.tagName === 'LI') {
              item.classList.add(_this2.itemExpandedClass);
              item.firstElementChild.setAttribute('aria-expanded', true);
            } // Always increment.


            item = item.parentNode;
          }
        });
      }
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

      if (this.toggle) {
        this.toggle.closeNav();
      }
    }
    /**
     * Close this nav.
     */

  }, {
    key: "closeThisSubNav",
    value: function closeThisSubNav() {
      this.elem.classList.remove(this.options.itemExpandedClass);
      this.elem.firstElementChild.setAttribute('aria-expanded', false);
    }
    /**
     * Get the depth of nesting for this menu. (starts at 1).
     *
     * @return {Integer} The depth of the menu.
     */

  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
    /**
     * Get the id attribute of the nav dom object.
     *
     * @return {String} The id attribute
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);

  return NavAbstract;
}();



/***/ }),

/***/ "./core/src/js/components/nav/NavItem.js":
/*!***********************************************!*\
  !*** ./core/src/js/components/nav/NavItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavItem; });
/* harmony import */ var _NavItemAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItemAbstract */ "./core/src/js/components/nav/NavItemAbstract.js");
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
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */

var NavItem =
/*#__PURE__*/
function (_NavItemAbstract) {
  _inherits(NavItem, _NavItemAbstract);

  /**
   * Create a new list item.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
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
   * Event handler for key press: Home
   *
   * Go and focus on the first sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */


  _createClass(NavItem, [{
    key: "onKeydownHome",
    value: function onKeydownHome(event, target) {
      event.preventDefault();
      this.getElement('first').focus();
    }
    /**
     * Event handler for key press: End
     *
     * Go and focus on the last sibling of this item.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownEnd",
    value: function onKeydownEnd(event, target) {
      event.preventDefault();
      this.getElement('last').focus();
    }
    /**
     * Event handler for key press: ESC
     *
     * Stop, drop, and close everything.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownEscape",
    value: function onKeydownEscape(event, target) {
      event.preventDefault();

      if (this.getDepth() > 1) {
        event.stopPropagation();
        var node = this.getElement('parentItem');
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
        node.focus();
      } else {
        this.nav.closeAllSubNavs();

        if (this.nav.toggle) {
          this.nav.toggle.element.focus();
        }
      }
    }
    /**
     * Event handler for key press: Tab
     *
     * Allow the natural tab order but when traversing levels close previous
     * sub nav items as we go.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      var shifted = event.shiftKey;
      var node = null;

      if (shifted) {
        node = this.getElement('prev');
      } else {
        node = this.getElement('next');
      }

      if (!node) {
        this.nav.closeThisSubNav();

        if (this.getDepth() === 1) {
          this.nav.closeAllSubNavs();
        }
      }
    }
    /**
     * Event handler for key press: Space
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      event.stopPropagation();
      event.preventDefault();
      window.location = target.getAttribute('href');
    }
    /**
     * Event handler for key press: Up Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowUp",
    value: function onKeydownArrowUp(event, target) {
      event.preventDefault(); // Go to the previous item.

      var node = this.getElement('prev');

      if (node) {
        node.focus();
        return;
      } // Default.


      this.onKeydownEnd(event, target);
    }
    /**
     * Event handler for key press: Left Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // If this is a nested item. Go back up a level.
      if (this.getDepth() > 1) {
        var node = this.getElement('parentItem');
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();

        if (node) {
          node.focus();
        } // Go to parent's end.
        else {
            this.getElement('parentNavLast').focus();
          }
      } // Otherwise just to to the previous sibling.
      else if (this.getDepth() == 1) {
          this.onKeydownArrowUp(event, target);
        }
    }
    /**
     * Event handler for key press: Down Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowDown",
    value: function onKeydownArrowDown(event, target) {
      event.preventDefault(); // Go to the next item.

      var node = this.getElement('next');

      if (node) {
        node.focus();
        return;
      }

      this.onKeydownHome(event, target);
    }
    /**
     * Event handler for key press: Right Arrow
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // If we are in the second level or more we check about traversing
      // the parent.
      if (this.getDepth() > 1) {
        var node = this.getElement('parentNavNext');
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();

        if (node) {
          node.querySelector('a').focus();
        } // Go back to start.
        else {
            this.getElement('parentNavFirst').focus();
          }
      } else {
        this.onKeydownArrowDown(event, target);
      }
    }
  }]);

  return NavItem;
}(_NavItemAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/NavItemAbstract.js":
/*!*******************************************************!*\
  !*** ./core/src/js/components/nav/NavItemAbstract.js ***!
  \*******************************************************/
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
 * NavItemAbstract Class
 *
 * The most abstract version of a NavItem. All NavItem types should extend
 * this class in order to have a psuedo interface and default methods.
 */

var NavItemAbstract =
/*#__PURE__*/
function () {
  /**
   * Constructor magic method.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  function NavItemAbstract(item, nav, options) {
    _classCallCheck(this, NavItemAbstract);

    // Save all configuration options somewhere handy.
    this.options = options; // A reference to the HTML item this instance is attached to.

    this.item = item; // A reference to the Nav instance this NavItem is created by.

    this.nav = nav; // The link <a> html element reference.

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
   */


  _createClass(NavItemAbstract, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1); // If this class has an onEvent method (onClick, onKeydown) invoke it.

      this.callEvent(event, target, handler);
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


      var handler = 'onKeydown' + normalized.charAt(0).toUpperCase() + normalized.slice(1); // Do eet.

      this.callEvent(event, target, handler);
    }
    /**
     * After handling has been done, actually execute the event.
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @param {HTMLElement} target  - The HTML element target.
     * @param  {String} handler     - the name of the function handler.
     */

  }, {
    key: "callEvent",
    value: function callEvent(event, target, handler) {
      var constructorName = this.constructor.name;
      var depth = this.getDepth(); // If the caller passed in their own event handling use their function.
      // See `MainEvents.js` and `main-nav.js` for an example.

      if (this.handleUserEvent(constructorName, depth, handler, event, target)) {
        return;
      } // Otherwise, check to see if we have an event available on this class.
      else if (typeof this[handler] === 'function') {
          this[handler](event, target);
        } // If an event has happened and we don't have a handler just let the browser
      // do its defualt thing.

    }
    /**
     * Check and call creator supplied event override functions.
     *
     * When constructing a new Nav item the developer can pass in functions to
     * override keyboard and mouse events to provide specific behaviour to a
     * single depth of item in specific nav.
     *
     * @param {NavItemAbstract} constructorName An extension of the NavItemAbstract class.
     * @param {int}             depth           The current navItem's depth. (starts at 1)
     * @param {String}          handler         The name of the method to call.
     * @param {KeyboardEvent}   event           The keyboard event.
     * @param {HTMLElement}     target          The HTML element target.
     *
     * @return {Boolean}          Success status.
     */

  }, {
    key: "handleUserEvent",
    value: function handleUserEvent(constructorName, depth, handler, event, target) {
      // Check the deep nesting for the event.
      // We look for the following nesting
      // ClassName
      //  |_ Depth of menu item
      //    |_ Formatted name of event (eg: onEventName)
      if (this.options.itemEvents && this.options.itemEvents[constructorName] && this.options.itemEvents[constructorName][depth] && this.options.itemEvents[constructorName][depth][handler]) {
        this.options.itemEvents[constructorName][depth][handler](event, this);
        return true;
      } // No event provided.


      return false;
    }
    /**
     * Returns an HTML element relative to this current item.
     *
     * @param  {String} what A key for the switch statement. (first, last, etc).
     *
     * @return {HTMLElement|False} The HTMLElement related to the passed in key.
     */

  }, {
    key: "getElement",
    value: function getElement(what) {
      try {
        switch (what) {
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

            if (node.tagName == "NAV") {
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

          default:
            return false;
        }
      } catch (err) {
        return false;
      }
    }
    /**
     * Get this item's nav depth.
     *
     * Each time we create a SubNav we increment the item by one and attach it to
     * the nav element. This function gets the containing Nav instance and
     * retreives the depth as each item in the nav is at the same depth.
     *
     * @return {Integer} Which level of the nav we are on starting at 1.
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

/***/ "./core/src/js/components/nav/NavToggle.js":
/*!*************************************************!*\
  !*** ./core/src/js/components/nav/NavToggle.js ***!
  \*************************************************/
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
 * Nav Toggle for the mobile/desktop button. Opens and closes the navigation
 */

var NavToggle =
/*#__PURE__*/
function () {
  /**
   * Create a new toggle.
   *
   * @param {HTMLLIElement} element  - The <li> that is the NavItem in the DOM.
   * @param {Object} options         - A simple object of key values used as
   *                                   configuration options for each instance.
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
    this.element.addEventListener('keydown', this);
    this.element.addEventListener('focus', this); // Clicking anywhere outside of attached nav closes all the children.

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
     * Handle the focus event on the toggle.
     *
     * @param {Event} event         - The event object.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onFocus",
    value: function onFocus(event, target) {
      // This is a bit of a hack for the nav with the search, if you shift tab
      // back out of the navigation the nav items don't know about this event and
      // the focus goes outside of the nav and on to the toggle. This is to
      // catch that behavior and to close the nav.
      if (this.isExpanded() && event.shiftKey) {
        this.closeNav();
      }
    }
    /**
     * Handle the click event on the toggle.
     *
     * @param {Event} event         - The event object.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      // Only act if the target is my element.
      if (target !== this.element) {
        return;
      }

      var isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search'); // Don't go nowhere.

      event.preventDefault();
      event.stopPropagation(); // Toggle open and close.

      if (this.isExpanded()) {
        this.closeNav();
      } else {
        this.openNav();

        if (isSearch) {
          this.nav.elem.querySelector('.su-site-search__input').focus();
        } else {
          this.nav.elem.querySelector('a').focus();
        }
      }
    }
    /**
     * Event handler for key: Down Arrow.
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @param {HTMLElement} target  - The HTML element target.
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
     */

  }, {
    key: "openNav",
    value: function openNav() {
      this.setExpanded('true');
      this.element.innerText = this.closeText; // Alert others the nav has opened.

      this.element.dispatchEvent(this.openEvent);
    }
    /**
     * Mark this  closed, and restore the button text to what it was
     * initially.
     */

  }, {
    key: "closeNav",
    value: function closeNav() {
      this.setExpanded('false');
      this.element.innerText = this.toggleText; // Alert others the  nav has closed.

      this.element.dispatchEvent(this.closeEvent);
    }
    /**
     * Set whether or not this is expanded.
     *
     * @param {Boolean} val true for an expanded menu.
     */

  }, {
    key: "setExpanded",
    value: function setExpanded(val) {
      this.element.setAttribute('aria-expanded', val);
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
     *
     * @param {NavAbstract} nav The attached navigation item.
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

/***/ "./core/src/js/components/nav/SubNavItem.js":
/*!**************************************************!*\
  !*** ./core/src/js/components/nav/SubNavItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubNavItem; });
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/nav/NavItem.js");
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
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it.
 */

var SubNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(SubNavItem, _NavItem);

  /**
   * Create an instance.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  function SubNavItem(item, nav, options) {
    var _this;

    _classCallCheck(this, SubNavItem);

    // I'm feelin supa!
    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubNavItem).call(this, item, nav, options)); // Create the children navs based on the parent constructor as we can
    // have different parent nav classes.

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
        this.closeSubNav(); // We blur then focus so that the browser announces the collapse to
        // those using screen readers and other assistive devices.

        this.link.blur();
        this.link.focus();
      } else {
        this.openSubNav();
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
      this.setSubNav('open');
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
      this.setSubNav('close');
    }
    /**
     * Open or close the subnav.
     *
     * @param  {String} state Either open or close.
     */

  }, {
    key: "setSubNav",
    value: function setSubNav() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'open';
      var hooks = {
        open: {
          pre: this.preOpenEvent,
          post: this.openEvent
        },
        close: {
          pre: this.preCloseEvent,
          post: this.closeEvent
        }
      }; // Pre event dispatch.

      this.item.dispatchEvent(hooks[state].pre); // Toggle the state.

      if (state === 'open') {
        this.setExpanded(true);
      } else {
        this.setExpanded(false);
      } // Post event dispatch.


      this.item.dispatchEvent(hooks[state].post);
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
     * Event handler for key press: Left Arrow
     *
     * Go and focus on the previous sibling of this item.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowLeft",
    value: function onKeydownArrowLeft(event, target) {
      // Go up a level and close the nav.
      event.preventDefault(); // Previous nav parents link item to focus on.

      var node = this.getElement('parentItem');
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();

      if (node) {
        node.focus();
      } else {
        _get(_getPrototypeOf(SubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);
      }
    }
    /**
     * Event handler for key press: Right Arrow
     *
     * Go and focus on the next sibling of this item.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowRight",
    value: function onKeydownArrowRight(event, target) {
      // Go down a level and open the SubNav.
      event.preventDefault();
      this.openSubNav();
      this.getElement('firstSubnavLink').focus();
    }
    /**
     * Event handler for key press: Space
     *
     * Do what the click would have done by passing through the event.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      // Do the rest of the stuff click does.
      this.onClick(event, target); // Focus on the first element for keyboard but not clicks.

      if (this.isExpanded()) {
        this.getElement('firstSubnavLink').focus();
      }
    }
    /**
     * Event handler for key press: Enter
     *
     * Do what the click would have done by passing through the event.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownEnter",
    value: function onKeydownEnter(event, target) {
      this.onClick(event, target); // Focus on the first element for keyboard but not clicks.

      if (this.isExpanded()) {
        this.getElement('firstSubnavLink').focus();
      }
    }
    /**
     * Returns an HTML element relative to this current item.
     *
     * @param {String} what A key for the switch statement. (first, last, etc).
     *
     * @return {HTMLElement|False} The HTMLElement related to the passed in key.
     */

  }, {
    key: "getElement",
    value: function getElement(what) {
      switch (what) {
        case 'firstSubnavLink':
          return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li a');

        case 'firstSubnavItem':
          return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul li');

        case 'subnav':
          return this.item.querySelector('#' + this.item.getAttribute('id') + ' > ul');
      } // Carry along to the parent class for more.


      return _get(_getPrototypeOf(SubNavItem.prototype), "getElement", this).call(this, what);
    }
    /**
     * Create some custom event listeners.
     *
     * Before and after opening a subnav item fire off custom events. These are
     * the custom events.
     */

  }, {
    key: "createCustomEvents",
    value: function createCustomEvents() {
      // CustomEvent Options.
      var opts = {
        bubbles: true,
        detail: {
          nav: this.nav
        }
      }; // this.preOpenEvent is dispatched in this.openSubNav().

      this.preOpenEvent = new CustomEvent('preOpenSubnav', opts); // this.openEvent is dispatched in this.openSubNav().

      this.openEvent = new CustomEvent('openSubnav', opts); // this.preCloseEvent is dispatched in this.closeSubNav().

      this.preCloseEvent = new CustomEvent('preCloseSubnav', opts); // this.closeEvent is dispatched in this.closeSubNav().

      this.closeEvent = new CustomEvent('closeSubnav', opts);
    }
  }]);

  return SubNavItem;
}(_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/ToggleNav.js":
/*!*************************************************!*\
  !*** ./core/src/js/components/nav/ToggleNav.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleNav; });
/* harmony import */ var _ToggleNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleNavItem */ "./core/src/js/components/nav/ToggleNavItem.js");
/* harmony import */ var _ToggleSubNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleSubNavItem */ "./core/src/js/components/nav/ToggleSubNavItem.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./core/src/js/components/nav/Nav.js");
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
 * A Navigation class for where the submenus have toggle buttons instead of
 * toggle links.
 */

var ToggleNav =
/*#__PURE__*/
function (_Nav) {
  _inherits(ToggleNav, _Nav);

  /**
   * Constructor
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  function ToggleNav(elem, options) {
    _classCallCheck(this, ToggleNav);

    // Override the subnav classes unless they are provided.
    options.itemClasses = options.itemClasses || {
      single: _ToggleNavItem__WEBPACK_IMPORTED_MODULE_0__["default"],
      sub: _ToggleSubNavItem__WEBPACK_IMPORTED_MODULE_1__["default"]
    }; // Let the parent do it all.

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleNav).call(this, elem, options));
  }
  /**
   * Closes this nav.
   *
   * Overrides parent class with behaviour to target the toggle button.
   */


  _createClass(ToggleNav, [{
    key: "closeThisSubNav",
    value: function closeThisSubNav() {
      this.elem.classList.remove(this.options.itemExpandedClass);
      var toggle = this.elem.querySelector('#' + this.id + ' .' + this.options.toggleClass);
      toggle.setAttribute('aria-expanded', false);
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
            if (item.getAttribute('id') === _this.id) {
              // Stop at the top most level.
              break;
            } // If we are on a LI element we need to add the active class.


            if (item.tagName === 'LI') {
              item.classList.add(_this.itemExpandedClass);
              var toggleButton = item.querySelector('.' + _this.options.toggleClass);

              if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', true);
              }
            } // Always increment.


            item = item.parentNode;
          }
        });
      }
    }
  }]);

  return ToggleNav;
}(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/ToggleNavItem.js":
/*!*****************************************************!*\
  !*** ./core/src/js/components/nav/ToggleNavItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleNavItem; });
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem */ "./core/src/js/components/nav/NavItem.js");
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
 * Toggle Navigation item.
 *
 * This class represents the most basic list item with a link. Because it has
 * toggles instead of just links the keyboard events are different.
 */

var ToggleNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(ToggleNavItem, _NavItem);

  /**
   * Constructor Method.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  function ToggleNavItem(item, nav, options) {
    _classCallCheck(this, ToggleNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleNavItem).call(this, item, nav, options));
  }
  /**
   * Event handler for key press: Tab
   *
   * Allow the natural tab order but when traversing levels close previous
   * sub nav items as we go.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
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
}(_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/nav/ToggleSubNavItem.js":
/*!********************************************************!*\
  !*** ./core/src/js/components/nav/ToggleSubNavItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleSubNavItem; });
/* harmony import */ var _SubNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubNavItem */ "./core/src/js/components/nav/SubNavItem.js");
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
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it that is
 * triggered by a toggle button instead of the links.
 */

var ToggleSubNavItem =
/*#__PURE__*/
function (_SubNavItem) {
  _inherits(ToggleSubNavItem, _SubNavItem);

  /**
   * Create an instance.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  function ToggleSubNavItem(item, nav, options) {
    var _this;

    _classCallCheck(this, ToggleSubNavItem);

    // I'm feelin supa!
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleSubNavItem).call(this, item, nav, options)); // Set text.

    _this.toggleText = options.subNavToggleText || '+';
    _this.toggleLabel = options.toggleLabel || 'expand menu';
    _this.toggleClass = options.toggleClass || 'nav-toggle'; // Create the toggle buttons.

    _this.toggle = _this.createToggleButton();

    _this.item.insertBefore(_this.toggle, _this.item.querySelector('ul')); // Create the toggle events.


    _this.toggle.addEventListener('click', _assertThisInitialized(_this));

    _this.toggle.addEventListener('keydown', _assertThisInitialized(_this));

    return _this;
  }
  /**
   * Create and a button for the expand/collapse actions.
   *
   * @return {HTMLElement} The button toggle.
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
      element.setAttribute('aria-label', this.toggleLabel);
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
     */

  }, {
    key: "onClick",
    value: function onClick(event, target) {
      // If the click is on the trigger then ignore.
      if (target === this.link) {
        return;
      } // Toggle subnav item when clicking on the toggle.


      if (target === this.toggle) {
        if (this.isExpanded()) {
          this.closeSubNav();
          this.toggle.blur();
          this.toggle.focus();
        } else {
          this.openSubNav();
        }
      }
    }
    /**
     * Event handler for key press: Tab
     *
     * Go and focus on the last sibling of this item.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownTab",
    value: function onKeydownTab(event, target) {
      // If the target is the link and no shift then go to the button and don't
      // collapse anything.
      if (target === this.link && event.shiftKey) {
        event.stopPropagation();
      }
    }
    /**
     * Event handler for key press: Space
     *
     * Just pass through to what the click event would do.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownSpace",
    value: function onKeydownSpace(event, target) {
      event.stopPropagation();
      event.preventDefault(); // Go to the link if a link.

      if (target == this.link) {
        window.location = this.link.getAttribute('href');
      } // Go to the toggle if a toggle.


      if (target == this.toggle) {
        this.onClick(event, target); // Only focus on keyboard nav not on click.

        if (this.isExpanded()) {
          this.getElement('firstSubnavLink').focus();
        }
      }
    }
    /**
     * Event handler for key press: Enter
     *
     * Just pass through to what the click event would do.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownEnter",
    value: function onKeydownEnter(event, target) {
      if (target == this.toggle) {
        this.onKeydownSpace(event, target);
      }
    }
    /**
     * Event handler for key press: Right
     *
     * Go from the link to the button but don't let it go any further.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
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
     * Event handler for key press: Left
     *
     * If on the button, go to the link, otherwise do what the parent class does.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
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
      } // If the current focus is on the link let the parent method handle it.


      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, target);
    }
    /**
     * Event handler for key press: Down
     *
     * Complex event handling depending on focus and submenu state.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowDown",
    value: function onKeydownArrowDown(event, target) {
      if (target === this.toggle) {
        // If on the toggle item and the menu is expanded go down in to the first
        // menu item link as the focus.
        if (this.isExpanded()) {
          event.stopPropagation();
          event.preventDefault();
          this.getElement('firstSubnavLink').focus();
          return;
        } // If current focus is on the toggle and the menu is not open, go to the
        // next sibling menu item.
        else {
            _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowRight", this).call(this, event, this.link);

            return;
          }
      } // If the focus is current not on the toggle, let the super class do it.


      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowDown", this).call(this, event, this.link);
    }
    /**
    * Event handler for key press: Up
    *
    * Complex event handling depending on focus and submenu state.
    *
    * @param {KeyboardEvent} event - The keyboard event.
    * @param {HTMLElement} target  - The HTML element target.
     */

  }, {
    key: "onKeydownArrowUp",
    value: function onKeydownArrowUp(event, target) {
      // If the current focus is on the toggle and the menu is expanded, close
      // this nav menu and go to the parent list item.
      if (target === this.toggle && this.isExpanded()) {
        event.stopPropagation();
        event.preventDefault();
        this.closeNav();
        this.getElement('parentItem').focus();
        return;
      } // If the focus is on the toggle and the menu is not expanded, go to the
      // previous sibling item by calling the super method.


      if (target === this.toggle && !this.isExpanded()) {
        _get(_getPrototypeOf(ToggleSubNavItem.prototype), "onKeydownArrowLeft", this).call(this, event, this.link);

        return;
      } // If the focus is on the link just do what the super method does.


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
     *
     * @param {String} value - What to set the aria-expanded attribute of this's
     *                         link to.
     */

  }, {
    key: "setExpanded",
    value: function setExpanded(value) {
      _get(_getPrototypeOf(ToggleSubNavItem.prototype), "setExpanded", this).call(this, value);

      this.link.removeAttribute('aria-expanded', value);
      this.toggle.setAttribute('aria-expanded', value);
    }
  }]);

  return ToggleSubNavItem;
}(_SubNavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/SecondaryNav.js":
/*!**************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/SecondaryNav.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNav; });
/* harmony import */ var _nav_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/Nav */ "./core/src/js/components/nav/Nav.js");
/* harmony import */ var _SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondaryNavItem */ "./core/src/js/components/secondary-nav/SecondaryNavItem.js");
/* harmony import */ var _SecondarySubNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondarySubNavItem */ "./core/src/js/components/secondary-nav/SecondarySubNavItem.js");
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
 * Represent a secondary navigation menu
 */

var SecondaryNav =
/*#__PURE__*/
function (_Nav) {
  _inherits(SecondaryNav, _Nav);

  function SecondaryNav() {
    _classCallCheck(this, SecondaryNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNav).apply(this, arguments));
  }

  _createClass(SecondaryNav, [{
    key: "createNavItems",

    /**
     * Create all the children items.
     *
     * @see ../nav/NavAbstract.js
     */
    value: function createNavItems() {
      this.itemClasses['sub'] = _SecondarySubNavItem__WEBPACK_IMPORTED_MODULE_2__["default"];
      this.itemClasses['single'] = _SecondaryNavItem__WEBPACK_IMPORTED_MODULE_1__["default"];

      _get(_getPrototypeOf(SecondaryNav.prototype), "createNavItems", this).call(this);
    }
  }]);

  return SecondaryNav;
}(_nav_Nav__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/SecondaryNavItem.js":
/*!******************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/SecondaryNavItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryNavItem; });
/* harmony import */ var _nav_NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/NavItem */ "./core/src/js/components/nav/NavItem.js");
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
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */

var SecondaryNavItem =
/*#__PURE__*/
function (_NavItem) {
  _inherits(SecondaryNavItem, _NavItem);

  function SecondaryNavItem() {
    _classCallCheck(this, SecondaryNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNavItem).apply(this, arguments));
  }

  _createClass(SecondaryNavItem, [{
    key: "onKeydownArrowRight",

    /**
     * Event handler for key press: Right
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {HTMLElement} target  - The HTML element target.
     */
    value: function onKeydownArrowRight(event, target) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }]);

  return SecondaryNavItem;
}(_nav_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/src/js/components/secondary-nav/SecondarySubNavItem.js":
/*!*********************************************************************!*\
  !*** ./core/src/js/components/secondary-nav/SecondarySubNavItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondarySubNavItem; });
/* harmony import */ var _nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/SubNavItem */ "./core/src/js/components/nav/SubNavItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it.
 */

var SecondarySubNavItem =
/*#__PURE__*/
function (_SubNavItem) {
  _inherits(SecondarySubNavItem, _SubNavItem);

  function SecondarySubNavItem() {
    _classCallCheck(this, SecondarySubNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SecondarySubNavItem).apply(this, arguments));
  }

  return SecondarySubNavItem;
}(_nav_SubNavItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
/* harmony import */ var _SecondaryNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondaryNav */ "./core/src/js/components/secondary-nav/SecondaryNav.js");
/* harmony import */ var _nav_ToggleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/ToggleNav */ "./core/src/js/components/nav/ToggleNav.js");



document.addEventListener('DOMContentLoaded', function (event) {
  // The css class that this following behaviour is applied to.
  var navClass = 'su-secondary-nav:not(.su-secondary-nav--no-interactivity)'; // All secondary navs.

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
      new _nav_ToggleNav__WEBPACK_IMPORTED_MODULE_2__["default"](nav, options);
    } // Create an instance of Nav, which in turn creates appropriate instances
    // of NavItem.
    else {
        new _SecondaryNav__WEBPACK_IMPORTED_MODULE_1__["default"](nav, options);
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
 *
 * @param {String} eventName - The name of the event
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

  var _arr = Object.entries(map);

  for (var _i = 0; _i < _arr.length; _i++) {
    var entry = _arr[_i];

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