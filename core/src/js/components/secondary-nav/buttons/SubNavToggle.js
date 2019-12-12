import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
// Events
import SubNavToggleClick from './events/SubNavToggleClick';
import SubNavToggleSpace from './events/SubNavToggleSpace';
import SubNavToggleArrowDown from './events/SubNavToggleArrowDown';
import SubNavToggleArrowLeft from './events/SubNavToggleArrowLeft';
import SubNavToggleArrowUp from './events/SubNavToggleArrowUp';

import OnHome from '../common/events/OnHome';
import OnEnd from '../common/events/OnEnd';
import OnEsc from '../common/events/OnEsc';

/**
 * A stoggle button.
 */
export default class SubNavToggle {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The element to bind to.
   * @param {Object|Mixed} item     The parent nav instance.
   * @param {Object} options        Mixed meta information.
   */
  constructor(element, item, options) {
    this.parentNav = item;
    this.masterNav = item.masterNav;
    this.toggle = element;
    this.elem = element;
    this.options = options;

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
      onClick: SubNavToggleClick,
      onKeydownSpace: SubNavToggleSpace,
      onKeydownEnter: SubNavToggleSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: SubNavToggleArrowUp,
      onKeydownArrowRight: SubNavToggleSpace,
      onKeydownArrowDown: SubNavToggleArrowDown,
      onKeydownArrowLeft: SubNavToggleArrowLeft
    };

    return Object.assign(registryDefaults, options.eventRegistry);
  }
}
