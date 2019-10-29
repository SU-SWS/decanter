import OnClickAccordion from '../events/OnClickAccordion';
import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import OnHome from '../../nav/events/OnHome';
import OnEnd from '../../nav/events/OnEnd';
import OnTab from '../../nav/events/OnTab';
import OnArrowUp from '../../nav/events/OnArrowUp';
import OnArrowRight from '../../nav/events/OnArrowRight';
import OnArrowDown from '../../nav/events/OnArrowDown';
import OnArrowLeft from '../../nav/events/OnArrowLeft';

/**
 * SecondarySubNav Class
 */
export default class SecondarySubNavAccordion {

  /**
   * [constructor description]
   * @param {[type]} element      [description]
   * @param {Object} [options={}] [description]
   */
  constructor(element, nav, options = {}) {
    this.elem = element;
    this.item = element.parentNode;
    this.nav = nav;
    this.options = Object.assign({
      'itemExpandedClass': 'expanded',
    }, options);
    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);
  }

  /**
   * Creates an event registry for handling types of events.
   * @return {[type]} [description]
   */
  createEventRegistry(options) {

    var registryDefaults = {
      onClick: OnClickAccordion,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft,
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
    this.elem.setAttribute('aria-expanded', true);
    this.item.classList.add(this.options.itemExpandedClass);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.elem.setAttribute('aria-expanded', false);
    this.item.classList.remove(this.options.itemExpandedClass);
  }

}
