import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import {createEvent} from '../../../utilities/events';
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
 * SecondarySubNavAccordion Class
 *
 * A sub menu class for creating a menu with accordion functionality.
 */
export default class SecondarySubNavAccordion {

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
    this.preOpenSubnav = createEvent('preOpenSubnav', {bubbles: true, data: this.item});
    this.postOpenSubnav = createEvent('postOpenSubnav', {bubbles: true, data: this.item});
    this.preCloseSubnav = createEvent('preCloseSubnav', {bubbles: true, data: this.item});
    this.postCloseSubnav = createEvent('postCloseSubnav', {bubbles: true, data: this.item});

    // Merge in defaults.
    this.options = Object.assign({
      itemExpandedClass: 'su-secondary-nav__item--expanded'
    }, options);

    // Assign the event dispatcher and event registry.
    this.eventRegistry = this.createEventRegistry(options);
    this.dispatch = new EventHandlerDispatch(element, this);

    // Generate the Aria labels.
    this.initAccessibility();
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
      onKeydownArrowLeft: OnArrowLeft
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
    this.elem.dispatchEvent(this.preOpenSubnav);
    this.elem.setAttribute('aria-expanded', 'true');
    this.item.classList.add(this.options.itemExpandedClass);
    this.elem.dispatchEvent(this.postOpenSubnav);
  }

  /**
   * Handles the closing of a subnav.
   *
   * If this is a subnav trigger or an item in a subnav, close the
   * corresponding subnav. Optionally force focus on the trigger.
   */
  closeSubNav() {
    this.elem.dispatchEvent(this.preCloseSubnav);
    this.elem.setAttribute('aria-expanded', 'false');
    this.item.classList.remove(this.options.itemExpandedClass);
    this.elem.dispatchEvent(this.postCloseSubnav);
  }

  /**
   * Get the level of nesting for this nav.
   *
   * @return {Integer} The integer of depth starting at 1.
   */
  getDepth() {
    return this.depth;
  }

  /**
   * Adds ids, labels, and other meta-information.
   */
  initAccessibility() {
    var elementIndex = Array.from(this.item.parentNode.children).indexOf(this.item);
    var elemID = this.elem.getAttribute('id');
    var section = this.item.querySelector(':scope > ul');
    var sectionID = section.getAttribute('id');

    // If there isnt an ID on the element add one.
    if (!elemID) {
      elemID = 'su-acc-' + this.getDepth() + '-' + elementIndex;
      this.elem.setAttribute('id', elemID);
    }

    // If there isnt an ID on the section add one.
    if (!sectionID) {
      sectionID = 'su-acs-' + this.getDepth() + '-' + elementIndex;
      section.setAttribute('id', sectionID);
    }

    // Add the aria stuff.
    this.elem.setAttribute('aria-controls', sectionID);
    section.setAttribute('aria-labelledby', elemID);
  }
}
