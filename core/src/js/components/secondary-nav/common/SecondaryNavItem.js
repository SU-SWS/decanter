import EventHandlerDispatch from '../../nav/EventHandlerDispatch';

// Keyboard control events.
import OnArrowDown from './events/OnArrowDown';
import OnArrowLeft from './events/OnArrowLeft';
import OnArrowRight from './events/OnArrowRight';
import OnArrowUp from './events/OnArrowUp';
import OnEnd from './events/OnEnd';
import OnEsc from './events/OnEsc';
import OnHome from './events/OnHome';
import OnEnter from './events/OnEnter';
import OnSpace from './events/OnSpace';
import OnTab from './events/OnTab';

/**
 * SecondaryNav Class
 */
export default class SecondaryNavItem {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element      The HTMLElement to bind to.
   * @param {Object|Mixed} masterNav   The top most navigation instance.
   * @param {Object|Mixed} parentNav   The parent nav instance if available.
   * @param {Object} options           An object of metadata.
   */
  constructor(element, masterNav, parentNav = null, options = {}) {
    this.elem = element;
    this.item = element.parentNode;
    this.masterNav = masterNav;
    this.parentNav = parentNav;
    this.depth = options.depth || 1;

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);
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
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownSpace: OnSpace,
      onKeydownEnter: OnEnter,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft
    };

    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Get the level of nesting for this nav.
   *
   * @return {Integer} The integer of depth starting at 1.
   */
  getDepth() {
    return this.depth;
  }
}
