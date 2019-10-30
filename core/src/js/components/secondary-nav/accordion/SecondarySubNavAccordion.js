import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
// Click handler.
import OnClick from './events/OnClick';
// Keyboard events.
import OnHome from '../common/events/OnHome';
import OnEnd from '../common/events/OnEnd';
import OnTab from '../common/events/OnTab';
import OnEsc from '../common/events/OnEsc';
import OnSpace from './events/OnSpace';
import OnArrowUp from '../common/events/OnArrowUp';
import OnArrowRight from './events/OnArrowRight';
import OnArrowDown from '../common/events/OnArrowDown';
import OnArrowLeft from './events/OnArrowLeft';

/**
 * SecondarySubNav Class
 */
export default class SecondarySubNavAccordion {

  /**
   * [constructor description]
   * @param {[type]} element      [description]
   * @param {Object} [options={}] [description]
   */
  constructor(element, masterNav, parentNav = null, options = {}) {
    // Vars.
    this.elem = element;
    this.item = element.parentNode;
    this.masterNav = masterNav;
    this.parentNav = parentNav;
    this.depth = options.depth || 1;

    // Merge in defaults.
    this.options = Object.assign({
      'itemExpandedClass': 'su-secondary-nav__item--expanded',
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
      onClick: OnClick,
      onKeydownSpace: OnSpace,
      onKeydownEnter: OnSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownEscape: OnEsc,
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
    this.elem.setAttribute('aria-expanded', 'true');
    this.item.classList.add(this.options.itemExpandedClass);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.elem.setAttribute('aria-expanded', 'false');
    this.item.classList.remove(this.options.itemExpandedClass);
  }

  /**
   * [getDepth description]
   * @return {[type]} [description]
   */
  getDepth() {
    return this.depth;
  }

}
