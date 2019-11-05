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
  createParentItems(items, depth = 1, parentMenu = null) {
    items.forEach(
      item => {
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
      }
    );
  }

  /**
   * Recursive loop for creating single level navigation instances.
   *
   * @param  {NodeList} items A set of sibling parent menu items.
   * @param  {Number} depth The current depth of recursion.
   * @param  {Object|Mixed} parentMenu The instance of the parent menu.
   */
  createNavItems(items, depth = 1, parentMenu = null) {
    items.forEach(
      item => {
        var itemLink = item.querySelector('a');
        if (itemLink) {
          this.newNavItem(itemLink, depth, parentMenu);
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

  /**
   * Close only this subnav.
   */
  closeSubNav() {
    this.closeAllSubNavs();
  }
}
