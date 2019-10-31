import SubNavToggle from './SubNavToggle';
// Events
import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
// Keyboard events.
import OnHome from '../common/events/OnHome';
import OnEnd from '../common/events/OnEnd';
import OnTab from './events/OnTab';
import OnEsc from '../common/events/OnEsc';
import OnSpace from '../common/events/OnSpace';
import OnArrowUp from '../common/events/OnArrowUp';
import OnArrowRight from './events/OnArrowRight';
import OnArrowDown from '../common/events/OnArrowDown';
import OnArrowLeft from '../common/events/OnArrowLeft';

/**
 * SecondarySubNavButtons Class
 *
 * A sub menu class for creating a menu with toggle button functionality.
 */
export default class SecondarySubNavButtons {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element     The container wrapper for the nav.
   * @param {Object|Mixed} masterNav  The top most level navigation.
   * @param {Object|Mixed} parentNav  The parent navigation instance if this
   *                                  instance is nested.
   * @param {Object} options          A meta object of information and options.
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
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      toggleClass: 'su-nav-toggle',
      toggleLabel: 'expand menu',
      subNavToggleText: '+'
    }, options);

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);

    // Create the toggle buttons.
    this.toggleElement = this.createToggleButton();
    this.item.insertBefore(this.toggleElement, this.item.querySelector('ul'));
    this.toggle = new SubNavToggle(this.toggleElement, this, options);
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
      onKeydownSpace: OnSpace,
      onKeydownEnter: OnSpace,
      onKeydownHome: OnHome,
      onKeydownEnd: OnEnd,
      onKeydownTab: OnTab,
      onKeydownEscape: OnEsc,
      onKeydownArrowUp: OnArrowUp,
      onKeydownArrowRight: OnArrowRight,
      onKeydownArrowDown: OnArrowDown,
      onKeydownArrowLeft: OnArrowLeft
    };

    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Create and a button for the expand/collapse actions.
   *
   * @return {HTMLElement} The button toggle.
   */
  createToggleButton() {
    let element = document.createElement('button');
    let label = document.createTextNode(this.options.toggleText);

    // Give this instance a unique ID.
    let id = 'toggle-' + Math.random().toString(36).substr(2, 9);

    element.setAttribute('class', this.options.toggleClass);
    element.setAttribute('aria-expanded', 'false');
    // element.setAttribute('aria-controls', this.subNav.id);
    element.setAttribute('aria-label', this.options.toggleLabel);
    element.setAttribute('id', id);
    element.appendChild(label);

    return element;
  }

  /**
   * Is this expanded? Can only return TRUE if this is a subnav trigger.
   *
   * @return {Boolean}
   *  Wether or not the item is expanded.
   */
  isExpanded() {
    return this.toggleElement.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Handles the opening of a sub-nav.
   *
   * If this is a subnav trigger, open the corresponding subnav.
   * Optionally force focus on the first element in the subnav
   * (for keyboard nav).
   */
  openSubNav() {
    this.toggleElement.setAttribute('aria-expanded', true);
    this.item.classList.add(this.options.itemExpandedClass);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.toggleElement.setAttribute('aria-expanded', false);
    this.item.classList.remove(this.options.itemExpandedClass);
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
