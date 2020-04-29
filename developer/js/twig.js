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
/******/ 	return __webpack_require__(__webpack_require__.s = "./developer/twig.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./developer/index.twig":
/*!******************************!*\
  !*** ./developer/index.twig ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Decanter Preview Environment</title>\n  </head>\n  <body>\n        <section class=\"su-masthead i-am-a-modifier\">\n  \n  \n<a href=\"#su-main-content-1891\" class=\"su-skiplinks \">Skip to main content</a>\n\n      \n<div class=\"su-brand-bar \">\n  <div class=\"su-brand-bar__container\"><a  class=\"su-brand-bar__logo\" href=\"https://stanford.edu\">Stanford University</a></div>\n</div>\n  \n  <section>\n  \n<div  class=\"su-lockup su-lockup--option-n\">\n    \n  <div class=\"su-lockup__cell1\">\n          <div class=\"su-lockup__wordmark-wrapper\">\n        <span class=\"su-lockup__wordmark\">Stanford</span>\n              </div>\n      </div>\n\n  \n      <div class=\"su-lockup__cell2\">\n        <span class=\"su-lockup__line1\" >Decanter Preview Environment</span>\n    \n    \n      </div>\n      </div>\n\n  \n<div  class=\"su-site-search \" role=\"search\">\n <form action=\"\" method=\"\" accept-charset=\"UTF-8\">\n  <label class=\"su-site-search__sr-label\" for=\"search-field\">Search this site</label>\n  <input  type=\"text\" id=\"search-field\" name=\"search-field\" class=\"su-site-search__input\" placeholder=\"Search this site\" maxlength=\"128\">\n  <button  type=\"submit\" name=\"search\" class=\"su-site-search__submit su-sr-only-text\" aria-label=\"Search\">Submit Search</button>\n  </form>\n</div>\n  <nav class=\"su-main-nav no-js \" aria-label=\"main menu\">\n  <button class=\"su-main-nav__toggle \" aria-expanded=\"false\">Menu</button>\n  <ul class=\"su-main-nav__menu-lv1\">        \n        \n        </ul>\n  </nav>\n  </section>\n</section>\n<main><div class=\"su-stuff centered-container\">\n  <div class=\"flex-12-of-12\">\n  <h2>Things and stuff.</h2>\n  <p>More things and stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n  \n<div  class=\"su-accordion no-js i-am-a-modifier\">\n      <h2>I'm the Accordion Title</h2>\n        <button class=\"su-accordion__collapse-all su-button--secondary\">Collapse all -</button>\n    <button class=\"su-accordion__expand-all su-button--secondary\">Expand all +</button>\n        <ul class=\"su-accordion__list\">\n              <li class=\"su-accordion__item\">\n                      <h2 class=\"su-accordion__title\"><button class=\"su-accordion__button\">Section Heading</button></h2>\n                    <div class=\"su-accordion__content\">\n            <p>Aliquam erat volutpat. Nulla facilisi. <strong>Nunc porttitor, elit non eleifend aliquam</strong>, est leo scelerisque nibh, nec faucibus odio urna ac nulla.</p><p>Maecenas laoreet in metus eget convallis. Vivamus at eleifend felis. Proin non vehicula neque. Etiam eleifend sapien ut nulla malesuada, ac condimentum nisl efficitur.</p>\n          </div>\n        </li>\n              <li class=\"su-accordion__item\">\n                      <h2 class=\"su-accordion__title\"><button class=\"su-accordion__button\">What am I? I'm an example FAQ title.</button></h2>\n                    <div class=\"su-accordion__content\">\n            <p>Aliquam erat volutpat. Nulla facilisi. Nunc porttitor, elit non eleifend aliquam, est leo scelerisque nibh, nec faucibus odio urna ac nulla.</p><p>Maecenas laoreet in metus eget convallis. <em>Vivamus at eleifend felis</em>. Proin non vehicula neque. Etiam eleifend sapien ut nulla malesuada, ac condimentum nisl efficitur.</p>\n          </div>\n        </li>\n              <li class=\"su-accordion__item\">\n                      <h2 class=\"su-accordion__title\"><button class=\"su-accordion__button\">Who am I? What planet am I on?</button></h2>\n                    <div class=\"su-accordion__content\">\n            <p>Aliquam erat volutpat. <a href='https://stanford.edu'>Nulla facilisi</a>. Nunc porttitor, elit non eleifend aliquam, est leo scelerisque nibh, nec faucibus odio urna ac nulla.</p><p>Maecenas laoreet in metus eget convallis. <em>Vivamus at eleifend felis</em>. Proin non vehicula neque. Etiam eleifend sapien ut nulla malesuada, ac condimentum nisl efficitur.</p>\n          </div>\n        </li>\n          </ul>\n        <a href=\"https://stanford.edu\" class=\"su-accordion__cta su-button \" target='_blank'>CTA Button Text</a>\n  </div>  </div>\n</div>\n</main>\n<section class=\"su-global-footer i-am-a-modifier\">\n  <div class=\"su-global-footer__container\">\n    <div class=\"su-global-footer__brand\">\n<a  class=\"su-logo i-am-a-modifier\" href=\"https://www.stanford.edu\">Stanford<br>University</a>\n</div>\n    <div class=\"su-global-footer__content\">\n      <nav aria-label=\"global footer menu\">\n        <ul class=\"su-global-footer__menu su-global-footer__menu--global\">\n          <li><a href=\"https://www.stanford.edu\">Stanford Home</a></li>\n          <li><a href=\"https://visit.stanford.edu/plan/\">Maps &amp; Directions</a></li>\n          <li><a href=\"https://www.stanford.edu/search/\">Search Stanford</a></li>\n          <li><a href=\"https://emergency.stanford.edu\">Emergency Info</a></li>\n        </ul>\n        <ul class=\"su-global-footer__menu su-global-footer__menu--policy\">\n          <li><a href=\"https://www.stanford.edu/site/terms/\"\n                 title=\"Terms of use for sites\">Terms of Use</a></li>\n          <li><a href=\"https://www.stanford.edu/site/privacy/\"\n                 title=\"Privacy and cookie policy\">Privacy</a></li>\n          <li><a href=\"https://uit.stanford.edu/security/copyright-infringement\"\n                 title=\"Report alleged copyright infringement\">Copyright</a></li>\n          <li><a href=\"https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4\"\n                 title=\"Ownership and use of Stanford trademarks and images\">Trademarks</a></li>\n          <li><a href=\"http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/\"\n                 title=\"Non-discrimination policy\">Non-Discrimination</a></li>\n          <li><a href=\"https://www.stanford.edu/site/accessibility\"\n                 title=\"Report web accessibility issues\">Accessibility</a></li>\n        </ul>\n      </nav>\n      <div class=\"su-global-footer__copyright\">\n        <span>&copy; Stanford University.</span>\n        <span>&nbsp; Stanford, California 94305.</span>\n      </div>\n    </div>\n  </div>\n</section> <!-- su-global-footer end --></body>\n</html>");

/***/ }),

/***/ "./developer/twig.js":
/*!***************************!*\
  !*** ./developer/twig.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var template = __webpack_require__(/*! ./index.twig */ "./developer/index.twig");

/***/ })

/******/ });
//# sourceMappingURL=twig.js.map