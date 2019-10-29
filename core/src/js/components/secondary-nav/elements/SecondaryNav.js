import ActivePath from '../../nav/ActivePath';
import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import OnEsc from '../../nav/events/OnEsc';
import OnSpace from '../../nav/events/OnSpace';

/**
 * SecondaryNav Class
 *
 * The most abstract version of a SecondaryNav. All Nav types should extend
 * this class in order to have a psuedo interface and default methods.
 */
export default class SecondaryNav {

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
