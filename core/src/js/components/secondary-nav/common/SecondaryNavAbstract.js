import ActivePath from '../../nav/ActivePath';
import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import OnEsc from './events/OnEsc';
import OnSpace from './events/OnSpace';

/**
 * SecondaryNav Class
 *
 * The most abstract version of a SecondaryNav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */
export default class SecondaryNavAbstract {

  /**
   * Nav Abstract Constructor class.
   *
   * @param {HTMLElement} element    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   */
  constructor(element, options = {}) {
    // What HTML element this is bound to.
    this.elem = element;

    // Set some default options.
    var defaultOptions = {
      itemClass: 'su-secondary-nav__item',
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      itemActiveClass: 'su-secondary-nav__item--current',
      itemActiveTrailClass: 'su-secondary-nav__item--active-trail',
      itemParentClass: 'su-secondary-nav__item--parent',
      eventRegistry: {},
    };

    // Merge with passed in options.
    this.options = Object.assign(defaultOptions, options);

    // Remove the no-js class.
    this.elem.classList.remove('no-js');

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);

    // Handle the active state.
    this.activePath = new ActivePath(element, this.options);
    this.activePath.setActivePath();
    this.activePath.expandActivePath();

    // Helper Item Variables.
    this.navItems = [];
    this.subNavItems = [];
    this.parentItemSelector = ':scope > ul > .' + this.options.itemParentClass;
    this.navItemSelector = ':scope > ul > .' + this.options.itemClass + ":not(." + this.options.itemParentClass + ")";
  }

  /**
   * Creates an event registry for handling types of events.
   * @return {[type]} [description]
   */
  createEventRegistry(options) {

    var registryDefaults = {
      onKeydownEscape: OnEsc,
      onKeydownSpace: OnSpace,
    };

    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * [createSubNavItems description]
   * @return {[type]} [description]
   */
  createSubNavItems() {

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
   * [createParentItems description]
   * @param  {[type]} items [description]
   * @return {[type]}       [description]
   */
  createParentItems(items, depth = 1) {
    items.forEach(
      item => {
        var itemLink = item.querySelector("a");
        var parentItems = item.querySelectorAll(this.parentItemSelector);
        var leafItems = item.querySelectorAll(this.navItemSelector);
        var nextDepth = depth + 1;

        // If we have a link add to it.
        if (itemLink) {
          this.newParentItem(itemLink, depth);
        }

        // Nested Sub Nav Items.
        if (parentItems.length >= 1) {
          this.createParentItems(parentItems, nextDepth);
        }

        // Nested Nav Items.
        if (leafItems.length >= 1) {
          this.createNavItems(leafItems, nextDepth);
        }
      }
    );
  }

  /**
   * [createNavItems description]
   * @param  {[type]} items [description]
   * @return {[type]}       [description]
   */
  createNavItems(items, depth) {
    items.forEach(
      item => {
        var itemLink = item.querySelector("a");
        if (itemLink) {
          this.newNavItem(itemLink, depth);
        }
      }
    );
  }

  /**
   * Close all subNavItems in this Nav.
   */
  closeAllSubNavs() {
    this.subNavItems.forEach(
      (item, event) => {
        item.closeSubNav();
      }
    );
  }

}
