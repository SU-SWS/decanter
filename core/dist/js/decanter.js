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
/******/ 	return __webpack_require__(__webpack_require__.s = "./core/js/decanter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/js/components/components.js":
/*!******************************************!*\
  !*** ./core/js/components/components.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_nav_main_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav/main-nav.js */ \"./core/js/components/main-nav/main-nav.js\");\n\n\n//# sourceURL=webpack:///./core/js/components/components.js?");

/***/ }),

/***/ "./core/js/components/main-nav/main-nav.js":
/*!*************************************************!*\
  !*** ./core/js/components/main-nav/main-nav.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/core.js */ \"./core/js/core/core.js\");\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_core_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  // The css class that this following behaviour is applied to.\n  var navClass = 'su-main-nav'; // ---------------------------------------------------------------------------\n  // Keyboard helper functions\n  // ---------------------------------------------------------------------------\n\n  var isHome = function isHome(theKey) {\n    return theKey === 'Home' || theKey === 122;\n  };\n\n  var isEnd = function isEnd(theKey) {\n    return theKey === 'End' || theKey === 123;\n  };\n\n  var isTab = function isTab(theKey) {\n    return theKey === 'Tab' || theKey === 9;\n  };\n\n  var isEsc = function isEsc(theKey) {\n    return theKey === 'Escape' || theKey === 'Esc' || theKey === 27;\n  };\n\n  var isSpace = function isSpace(theKey) {\n    return theKey === ' ' || theKey === 'Spacebar' || theKey === 32;\n  };\n\n  var isEnter = function isEnter(theKey) {\n    return theKey === 'Enter' || theKey === 13;\n  };\n\n  var isLeftArrow = function isLeftArrow(theKey) {\n    return theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37;\n  };\n\n  var isRightArrow = function isRightArrow(theKey) {\n    return theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39;\n  };\n\n  var isUpArrow = function isUpArrow(theKey) {\n    return theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38;\n  };\n\n  var isDownArrow = function isDownArrow(theKey) {\n    return theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40;\n  }; // ---------------------------------------------------------------------------\n  // Helper classes\n  // ---------------------------------------------------------------------------\n\n  /**\n   * Represent an item in a navigation menu. May be a direct link or a subnav\n   * trigger.\n   *\n   * @prop {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem\n   * @prop {HTMLElement|Nav} nav    - the Nav that contains the element.\n   *                                  May be a main nav (<nav>) or subnav (Nav).\n   * @prop {HTMLLIElement}   link   - the <a> in the DOM that is contained in\n   *                                  item (the <li>).\n   * @prop {Nav}             subNav - if item is the trigger for a subnav, this\n   *                                  is an instonce Nav that models the subnav.\n   */\n\n\n  var NavItem =\n  /*#__PURE__*/\n  function () {\n    /**\n     * Create a NavItem\n     * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.\n     * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May\n     *                                  be a main nav (<nav>) or a subnav (Nav).\n     */\n    function NavItem(item, nav) {\n      _classCallCheck(this, NavItem);\n\n      this.item = item;\n      this.nav = nav;\n      this.link = this.item.querySelector('a');\n      this.subNav = null;\n      this.item.addEventListener('keydown', this);\n\n      if (this.isSubNavTrigger()) {\n        this.subNav = new Nav(this); // Maintain global list of subnavs for closeAllSubNavs().\n\n        theSubNavs.push(this);\n        this.item.addEventListener('click', this);\n      }\n    } // -------------------------------------------------------------------------\n    // Helper Methods.\n    // -------------------------------------------------------------------------\n\n    /**\n     * Is this the first item in the containing Nav?\n     *\n     * @return {Boolean}\n     *  Wether or not the item is the first item.\n     */\n\n\n    _createClass(NavItem, [{\n      key: \"isFirstItem\",\n      value: function isFirstItem() {\n        return this.nav.items.indexOf(this) === 0;\n      }\n      /**\n       * Is this the last item in the containing Nav?\n       *\n       * @return {Boolean}\n       *  Wether or not the item is the last item.\n       */\n\n    }, {\n      key: \"isLastItem\",\n      value: function isLastItem() {\n        return this.nav.items.indexOf(this) === this.nav.items.length - 1;\n      }\n      /**\n       * Is this a trigger that opens / closes a subnav?\n       *\n       * @return {Boolean}\n       *  Wether or not the item is the sub nav trigger item.\n       */\n\n    }, {\n      key: \"isSubNavTrigger\",\n      value: function isSubNavTrigger() {\n        return this.item.lastElementChild.tagName.toUpperCase() === 'UL';\n      }\n      /**\n       * Is this a component of a subnav - either the trigger or a nav item?\n       *\n       * @return {Boolean}\n       *  Wether or not the item is a subnav item.\n       */\n\n    }, {\n      key: \"isSubNavItem\",\n      value: function isSubNavItem() {\n        return this.isSubNavTrigger() || this.nav.isSubNav();\n      }\n      /**\n       * Is this expanded? Can only return TRUE if this is a subnav trigger.\n       *\n       * @return {Boolean}\n       *  Wether or not the item is expanded.\n       */\n\n    }, {\n      key: \"isExpanded\",\n      value: function isExpanded() {\n        return this.link.getAttribute('aria-expanded') === 'true';\n      }\n      /**\n       * Set whether or not this is expanded.\n       * Only meaningful if this is a subnav trigger.\n       *\n       * @param {String} value - What to set the aria-expanded attribute of this's\n       *                         link to.\n       */\n\n    }, {\n      key: \"setExpanded\",\n      value: function setExpanded(value) {\n        this.link.setAttribute('aria-expanded', value);\n      } // -------------------------------------------------------------------------\n      // Functional Methods.\n      // -------------------------------------------------------------------------\n\n      /**\n       * Handles the opening of a sub-nav.\n       *\n       * If this is a subnav trigger, open the corresponding subnav.\n       * Optionally force focus on the first element in the subnav\n       * (for keyboard nav).\n       *\n       * @param {Boolean} focusOnFirst - whether or not to also focus on the first\n       *                                 element in the subnav\n       */\n\n    }, {\n      key: \"openSubNav\",\n      value: function openSubNav() {\n        var focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n        closeAllSubNavs();\n\n        if (this.isSubNavTrigger()) {\n          this.item.classList.add('su-main-nav__item--expanded');\n          this.setExpanded('true');\n\n          if (focusOnFirst) {\n            this.subNav.focusOn('first');\n          }\n        }\n      }\n      /**\n       * Handles the closing of a subnav.\n       *\n       * If this is a subnav trigger or an item in a subnav, close the\n       * corresponding subnav. Optionally force focus on the trigger.\n       *\n       * @param {Boolean} focusOnTrigger - Whether or not to also focus on the\n       *                                 subnav's trigger.\n       */\n\n    }, {\n      key: \"closeSubNav\",\n      value: function closeSubNav() {\n        var focusOnTrigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n        if (this.isSubNavTrigger()) {\n          this.item.classList.remove('su-main-nav__item--expanded');\n          this.setExpanded('false');\n\n          if (focusOnTrigger) {\n            this.link.focus();\n          }\n        } else if (this.isSubNavItem()) {\n          // This.nav.elem should be a subNavTrigger.\n          this.nav.elem.closeSubNav(focusOnTrigger);\n        }\n      } // -------------------------------------------------------------------------\n      // Event Handlers.\n      // -------------------------------------------------------------------------\n\n      /**\n       * Handler for all events attached to an instance of this class. This method\n       * must exist when events are bound to an instance of a class\n       * (vs a function). This method is called for all events bound to an\n       * instance. It inspects the instance (this) for an appropriate handler\n       * based on the event type. If found, it dispatches the event to the\n       * appropriate handler.\n       *\n       * @param {KeyboardEvent} event - The keyboard event.\n       *\n       * @return {*}\n       *   Whatever the dispatched handler returns (in our case nothing)\n       */\n\n    }, {\n      key: \"handleEvent\",\n      value: function handleEvent(event) {\n        event = event || window.event; // If this class has an onEvent method (onClick, onKeydown) invoke it.\n\n        var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);\n\n        if (typeof this[handler] === 'function') {\n          // The element that was clicked.\n          var target = event.target || event.srcElement;\n          return this[handler](event, target);\n        }\n      }\n      /**\n       * Handler for keydown events. keydown is bound to all NavItem's.\n       * Dispatched from this.handleEvent().\n       *\n       * @param {KeyboardEvent} event - The keyboard event object.\n       * @param {HTMLElement} target  - The HTML element target.\n       */\n\n    }, {\n      key: \"onKeydown\",\n      value: function onKeydown(event, target) {\n        var theKey = event.key || event.keyCode; // Handler for the space and enter key.\n\n        if (isSpace(theKey) || isEnter(theKey)) {\n          event.preventDefault();\n          event.stopPropagation();\n\n          if (this.isSubNavTrigger()) {\n            this.openSubNav();\n          } else {\n            window.location = this.link;\n          }\n        } // Handler for the down arrow key.\n        else if (isDownArrow(theKey)) {\n            event.preventDefault();\n            event.stopPropagation();\n\n            if (this.nav.isDesktopNav()) {\n              if (this.isSubNavTrigger()) {\n                this.openSubNav();\n              } else {\n                this.nav.focusOn('next', this);\n              }\n            } else {\n              this.nav.focusOn('next', this);\n            }\n          } // Handler for the up arrow key.\n          else if (isUpArrow(theKey)) {\n              event.preventDefault();\n              event.stopPropagation();\n              this.nav.focusOn('prev', this);\n            } // Handler for the left arrow key.\n            else if (isLeftArrow(theKey)) {\n                event.preventDefault();\n                event.stopPropagation();\n\n                if (this.nav.isDesktopNav()) {\n                  if (this.nav.isSubNav()) {\n                    this.closeSubNav();\n                    var parent = this.nav.getParentNav(); // Focus on the previous item in the parent nav.\n\n                    parent.focusOn('prev', this.nav.elem);\n                  } else {\n                    this.nav.focusOn('prev', this);\n                  }\n                } else {\n                  if (this.isSubNavItem()) {\n                    // Close the subnav and put the focus on the trigger.\n                    this.closeSubNav(true);\n                  }\n                }\n              } // Handler for the right arrow key.\n              else if (isRightArrow(theKey)) {\n                  event.preventDefault();\n                  event.stopPropagation();\n\n                  if (this.nav.isDesktopNav()) {\n                    if (this.nav.isSubNav()) {\n                      this.closeSubNav();\n\n                      var _parent = this.nav.getParentNav(); // Focus on the next item in the parent nav.\n\n\n                      _parent.focusOn('next', this.nav.elem);\n                    } else {\n                      this.nav.focusOn('next', this);\n                    }\n                  } else {\n                    if (this.isSubNavTrigger()) {\n                      this.openSubNav();\n                    }\n                  }\n                } // Handler for the home key.\n                else if (isHome(theKey)) {\n                    this.nav.focusOn('first');\n                  } // Handler for the end key.\n                  else if (isEnd(theKey)) {\n                      this.nav.focusOn('last');\n                    } // Handler for the tab key.\n                    else if (isTab(theKey)) {\n                        event.stopPropagation();\n                        var shifted = event.shiftKey;\n\n                        if (this.isSubNavItem() && (!shifted && this.isLastItem() || shifted && this.isFirstItem())) {\n                          this.closeSubNav(true);\n                        }\n                      }\n      }\n      /**\n       * Handler for click events.\n       *\n       * Dispatched from this.handleEvent().\n       * Click is only bound to subnav triggers. However, click bubbles up from\n       * subnav items to the trigger.\n       *\n       * @param {KeyboardEvent} event - The keyboard event object.\n       * @param {HTMLElement} target  - The HTML element target.\n       */\n\n    }, {\n      key: \"onClick\",\n      value: function onClick(event, target) {\n        if (this.isExpanded()) {\n          this.closeSubNav();\n        } else {\n          this.openSubNav(false);\n        } // If the click is directly on the trigger, then we're done.\n\n\n        if (target === this.link) {\n          event.preventDefault();\n          event.stopPropagation();\n        }\n      }\n    }]);\n\n    return NavItem;\n  }();\n  /**\n   * Represent a navigation menu. May be the top nav or a subnav.\n   *\n   * @prop {HTMLElement|NavItem} elem       - The element that is the nav. May\n   *                                          be a main nav (<nav>) or a subnav\n   *                                          (NavItem).\n   * @prop {Nav}                 topNav     - The instance of Nav that models\n   *                                          the top nav. If this is the top\n   *                                          nav, topNav === this.\n   * @prop {HTMLButtonElement}   toggle     - The <button> in the DOM that\n   *                                          toggles the menu on mobile. NULL\n   *                                          if this is a subnav.\n   * @prop {String}              toggleText - The initial text of the mobile\n   *                                          toggle (so we can reset it when\n   *                                          the mobile nav is closed).\n   * @prop {Array}               items      - Instances of NavItem that model\n   *                                          each element in the nav\n   */\n\n\n  var Nav =\n  /*#__PURE__*/\n  function () {\n    /**\n     * Create a Nav\n     *\n     * @param {HTMLElement|NavItem} elem - The element that is the nav menu.\n     *                                     May be a main nav (<nav>) or a subnav\n     *                                     (NavItem).\n     */\n    function Nav(elem) {\n      var _this = this;\n\n      _classCallCheck(this, Nav);\n\n      this.elem = elem;\n      this.topNav = this.getTopNav(); // If this is a subnav, we need the correpsonding HTMLElement for\n      // .querySelector()\n\n      if (elem instanceof NavItem) {\n        elem = elem.item;\n      }\n\n      this.toggle = elem.querySelector(elem.tagName + ' > button');\n      this.toggleText = this.toggle ? this.toggle.innerText : '';\n      this.items = [];\n      var items = elem.querySelectorAll(elem.tagName + ' > ul > li');\n      items.forEach(function (item) {\n        _this.items.push(new NavItem(item, _this));\n      });\n      elem.addEventListener('keydown', this);\n\n      if (this.toggle) {\n        this.toggle.addEventListener('click', this);\n      }\n    } // -------------------------------------------------------------------------\n    // Helper Methods.\n    // -------------------------------------------------------------------------\n\n    /**\n     * Get the instance of Nav that represents the top level nav of this\n     * instance.\n     *\n     * @return {Nav}\n     *  Returns the navigation instance.\n     */\n\n\n    _createClass(Nav, [{\n      key: \"getTopNav\",\n      value: function getTopNav() {\n        var nav = this;\n\n        while (nav.elem instanceof NavItem) {\n          // If nav is the main nav, nav.elem will be an HTMLElement\n          // (the <nav> element).\n          // If nav.elem is a NavItem, then this is a subNav, so get the Nav that\n          // contains the NavItem.\n          nav = nav.elem.nav;\n        }\n\n        return nav;\n      }\n      /**\n       * Get the instance of Nav that represents the parent of this instance.\n       * If this is the top nav, return this so you can safely call methods on it.\n       *\n       * @return {Nav}\n       *   Returns the navigation instance.\n       */\n\n    }, {\n      key: \"getParentNav\",\n      value: function getParentNav() {\n        return this.isSubNav() ? this.elem.nav : this;\n      }\n      /**\n       * Is this expanded?\n       * If this is a subnav, ask the subnav (NavItem) if it's expanded.\n       * Otherwise (this is the top nav), check aria-expanded.\n       *\n       * @return {Boolean}\n       *   Returns wether or not the item is expanded.\n       */\n\n    }, {\n      key: \"isExpanded\",\n      value: function isExpanded() {\n        if (this.elem instanceof NavItem) {\n          return this.elem.isExpanded();\n        }\n\n        return this.elem.getAttribute('aria-expanded') === 'true';\n      }\n      /**\n       * Set whether or not this is expanded.\n       * If this is a subnav, let the subnav (NavItem) handled it.\n       * Otherwise (this is the top nav), set aria-expanded.\n       *\n       * @param {String} value - What to set the aria-expanded attribute of\n       *                         this's link to.\n       */\n\n    }, {\n      key: \"setExpanded\",\n      value: function setExpanded(value) {\n        if (this.elem instanceof NavItem) {\n          this.elem.setExpanded(value);\n        } else {\n          this.elem.setAttribute('aria-expanded', value);\n\n          if (this.toggle) {\n            this.toggle.setAttribute('aria-expanded', value);\n          }\n        }\n      }\n      /**\n       * Is this rendering the desktop style for the nav?\n       *\n       * @return {Boolean}\n       *  Returns wether or not it is desktop navigation.\n       */\n\n    }, {\n      key: \"isDesktopNav\",\n      value: function isDesktopNav() {\n        return getComputedStyle(this.topNav.toggle).display === 'none';\n      }\n      /**\n       * Is this the top nav?\n       *\n       * @return {Boolean}\n       *  Returns wether or not it is the top nav item.\n       */\n\n    }, {\n      key: \"isTopNav\",\n      value: function isTopNav() {\n        return this.topNav === this;\n      }\n      /**\n       * Is this a subnav?\n       *\n       * @return {Boolean}\n       *  Returns wether or not this is a subnav item.\n       */\n\n    }, {\n      key: \"isSubNav\",\n      value: function isSubNav() {\n        return this.topNav !== this;\n      }\n      /**\n       * Get the first item in this nav.\n       *\n       * @return {NavItem}\n       *  Returns wether or not this is the first item.\n       */\n\n    }, {\n      key: \"getFirstItem\",\n      value: function getFirstItem() {\n        return this.items.length ? this.items[0] : null;\n      }\n      /**\n       * Get the last item in this nav.\n       *\n       * @return {NavItem}\n       *  Returns wether or not this is the last item.\n       */\n\n    }, {\n      key: \"getLastItem\",\n      value: function getLastItem() {\n        return this.items.length ? this.items[this.items.length - 1] : null;\n      }\n      /**\n       * Get the link associated with the first item in this nav.\n       *\n       * @return {HTMLAnchorElement}\n       *  Returns the very first link.\n       */\n\n    }, {\n      key: \"getFirstLink\",\n      value: function getFirstLink() {\n        return this.items.length ? this.getFirstItem().link : null;\n      }\n      /**\n       * Get the link associated with the last item in this nav.\n       *\n       * @return {HTMLAnchorElement}\n       *  Returns the very last link.\n       */\n\n    }, {\n      key: \"getLastLink\",\n      value: function getLastLink() {\n        return this.items.length ? this.getLastItem().link : null;\n      } // -------------------------------------------------------------------------\n      // Functional methods\n      // -------------------------------------------------------------------------\n\n      /**\n       * Set the focus on the specified link in this nav.\n       *\n       * @param {String|Number} link - 'first' | 'last' | 'next'\n       *                                | 'prev' | numerical index\n       * @param {NavItem} currentItem - If link is 'next' or 'prev', currentItem\n       *                                is the NavItem that next / prev is\n       *                                relative to.\n       */\n\n    }, {\n      key: \"focusOn\",\n      value: function focusOn(link) {\n        var currentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n        var currentIndex = null;\n        var lastIndex = null;\n\n        if (currentItem) {\n          currentIndex = this.items.indexOf(currentItem);\n          lastIndex = this.items.length - 1;\n        }\n\n        switch (link) {\n          case 'first':\n            this.getFirstLink().focus();\n            break;\n\n          case 'last':\n            this.getLastLink().focus();\n            break;\n\n          case 'next':\n            if (currentIndex === lastIndex) {\n              this.getFirstLink().focus();\n            } else {\n              this.items[currentIndex + 1].link.focus();\n            }\n\n            break;\n\n          case 'prev':\n            if (currentIndex === 0) {\n              this.getLastLink().focus();\n            } else {\n              this.items[currentIndex - 1].link.focus();\n            }\n\n            break;\n\n          default:\n            if (Number.isInteger(link) && link >= 0 && link < this.items.length) {\n              this.items[link].link.focus();\n            }\n\n            break;\n        }\n      }\n      /**\n       * Close any mobile navs that might be open, then mark this mobile nav open.\n       * Optionally force focus on the first element in the nav (for keyboard nav)\n       *\n       * @param {Boolean} focusOnFirst - Whether or not to also focus on the\n       *                                 first element in the subnav.\n       */\n\n    }, {\n      key: \"openMobileNav\",\n      value: function openMobileNav() {\n        var focusOnFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n        closeAllMobileNavs();\n        this.setExpanded('true');\n        this.toggle.innerText = 'Close';\n\n        if (focusOnFirst) {\n          this.focusOn('first'); // Focus on the first top level link\n        }\n      }\n      /**\n       * Mark this mobile closed, and restore the button text to what it was\n       * initially.\n       */\n\n    }, {\n      key: \"closeMobileNav\",\n      value: function closeMobileNav() {\n        this.setExpanded('false');\n        this.toggle.innerText = this.toggleText;\n      } // -------------------------------------------------------------------------\n      // Event handlers\n      // -------------------------------------------------------------------------\n\n      /**\n       * Handler for all events attached to an instance of this class. This method\n       * must exist when events are bound to an instance of a class\n       * (vs a function). This method is called for all events bound to an\n       * instance. It inspects the instance (this) for an appropriate handler\n       * based on the event type. If found, it dispatches the event to the\n       * appropriate handler.\n       *\n       * @param {KeyboardEvent} event - The keyboard event object.\n       *\n       * @return {*}\n       *  Whatever the dispatched handler returns (in our case nothing)\n       */\n\n    }, {\n      key: \"handleEvent\",\n      value: function handleEvent(event) {\n        event = event || window.event; // If this class has an onEvent method, e.g. onClick, onKeydown,\n        // invoke it.\n\n        var handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);\n\n        if (typeof this[handler] === 'function') {\n          // The element that was clicked.\n          var target = event.target || event.srcElement;\n          return this[handler](event, target);\n        }\n      }\n      /**\n       * Handler for click events. click is only bound to the mobile toggle.\n       * Dispatched from this.handleEvent().\n       *\n       * @param {KeyboardEvent} event   - The keyboard event object.\n       * @param {HTMLElement}   target  - The HTML Element target object.\n       */\n\n    }, {\n      key: \"onClick\",\n      value: function onClick(event, target) {\n        if (target === this.toggle) {\n          event.preventDefault();\n          event.stopPropagation();\n\n          if (this.isExpanded()) {\n            this.closeMobileNav();\n          } else {\n            this.openMobileNav(false);\n          }\n        }\n      }\n      /**\n       * Handler for keydown events. keydown is bound to all Nav's.\n       * Dispatched from this.handleEvent().\n       *\n       * @param {KeyboardEvent} event   - The keyboard event object.\n       * @param {HTMLElement}   target  - The HTML Element target object.\n       */\n\n    }, {\n      key: \"onKeydown\",\n      value: function onKeydown(event, target) {\n        var theKey = event.key || event.keyCode;\n\n        if (isEsc(theKey)) {\n          if (this.isTopNav()) {\n            if (!this.isDesktopNav()) {\n              event.preventDefault();\n              event.stopPropagation();\n              this.closeMobileNav();\n              this.toggle.focus();\n            }\n          } else {\n            if (this.isExpanded()) {\n              event.preventDefault();\n              event.stopPropagation();\n              this.elem.closeSubNav(true);\n            }\n          }\n        } else if (isEnter(theKey) || isSpace(theKey)) {\n          if (target === this.toggle) {\n            event.preventDefault();\n            event.stopPropagation();\n\n            if (!this.isExpanded()) {\n              this.openMobileNav();\n            }\n          }\n        }\n      }\n    }]);\n\n    return Nav;\n  }(); // ---------------------------------------------------------------------------\n  // Globals.\n  // ---------------------------------------------------------------------------\n  // Variables.\n  // All main navs.\n\n\n  var navs = document.querySelectorAll('.' + navClass); // Global record of all main navs - used by closeAllMobileNavs.\n\n  var theNavs = []; // Global record of all sub navs - used by closeAllSubNavs.\n\n  var theSubNavs = []; // Functions\n\n  var closeAllSubNavs = function closeAllSubNavs() {\n    theSubNavs.forEach(function (subNav) {\n      subNav.closeSubNav();\n    });\n  };\n\n  var closeAllMobileNavs = function closeAllMobileNavs() {\n    theNavs.forEach(function (theNav) {\n      theNav.closeMobileNav();\n    });\n  }; // ---------------------------------------------------------------------------\n  // Execution Code.\n  // ---------------------------------------------------------------------------\n  // Process each nav.\n\n\n  var firstZindex;\n  navs.forEach(function (nav, index) {\n    var theNav = new Nav(nav);\n    theNavs.push(theNav);\n\n    if (index === 0) {\n      firstZindex = getComputedStyle(nav, null).zIndex;\n    } else {\n      nav.style.zIndex = firstZindex - 300 * index;\n    }\n  }); // navs.forEach\n  // Clicking anywhere outside a nav closes all navs.\n\n  document.addEventListener('click', function (event) {\n    // The element that was clicked.\n    var target = event.target || event.srcElement; // If target is not under a main nav close all navs.\n\n    if (!target.matches('.' + navClass + ' ' + target.tagName)) {\n      closeAllSubNavs();\n      closeAllMobileNavs();\n    }\n  }, false);\n}); // on DOMContentLoaded.\n\n//# sourceURL=webpack:///./core/js/components/main-nav/main-nav.js?");

/***/ }),

/***/ "./core/js/core/core.js":
/*!******************************!*\
  !*** ./core/js/core/core.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// if NodeList doesn't support forEach, use Array's forEach()\nNodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;\n\n//# sourceURL=webpack:///./core/js/core/core.js?");

/***/ }),

/***/ "./core/js/decanter.js":
/*!*****************************!*\
  !*** ./core/js/decanter.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ \"./core/js/components/components.js\");\n/* harmony import */ var _scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/decanter.scss */ \"./core/scss/decanter.scss\");\n/* harmony import */ var _scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_decanter_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./core/js/decanter.js?");

/***/ }),

/***/ "./core/scss/decanter.scss":
/*!*********************************!*\
  !*** ./core/scss/decanter.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./core/scss/decanter.scss?");

/***/ })

/******/ });