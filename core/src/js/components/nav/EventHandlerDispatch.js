import {normalizeKey} from '../../utilities/keyboard';

/**
 * EventHandlerDispatch Class
 *
 * This class provides dynamic handling of click and keyboard events and can be
 * attached to any class/HTMLElement.
 */
export default class EventHandlerDispatch {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The HTMLElement to bind listeners to.
   * @param {type}      handler   The Javascript Class instance with the
   *                                eventRegistry property.
   */
  constructor(element, handler) {
    this.elem = element;
    this.handler = handler;
    this.createEventListeners();
  }

  /**
   * Create new event listeners.
   */
  createEventListeners() {
    // What to do when a key is down?
    this.elem.addEventListener('keydown', this);

    // Listen to the click so we can act on it.
    this.elem.addEventListener('click', this);

    // Listen to custom events so we can act on it.
    this.elem.addEventListener('preOpenSubnav', this);

    // Listen to custom events so we can act on it.
    this.elem.addEventListener('postOpenSubnav', this);
  }

  /**
   * Handler for all events attached to an instance of this class.
   *
   * This method must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {Event} event - The triggering event.
   */
  handleEvent(event) {
    event = event || window.event;

    // Create an event signature.
    const eventMethod = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

    // What was clicked.
    const target = event.target || event.srcElement;

    if (eventMethod === 'onKeydown') {
      this.onKeydown(event, target);
    }
    else if (eventMethod === 'onClick') {
      this.onClick(event, target);
    }
    else {
      this.callEvent(eventMethod, event, target);
    }
  }

  /**
   * Handler for keydown events.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydown(event, target) {
    let theKey = event.key || event.keyCode;
    let normalized = normalizeKey(theKey);

    // We don't know or need to handle the key that was pressed.
    if (!normalized) {
      return;
    }

    // Prepare a dynamic handler.
    let eventMethod = 'onKeydown'
      + normalized.charAt(0).toUpperCase()
      + normalized.slice(1);

    // Do eet.
    this.callEvent(eventMethod, event, target);
  }

  /**
   * Handler for click events.
   *
   * @param  {Event} event  A Javascript event.
   * @param  {HTMLElement} target The target of the event.
   */
  onClick(event, target) {
    this.callEvent('onClick', event, target);
  }

  /**
   * The event handler
   *
   * Initializes and executes an object to handle the Javascript Event as
   * defined by the handlers eventRegistry.
   *
   * @param  {String} eventMethod A string key for the eventRegistry;
   * @param  {Event} event        The Javascript event.
   * @param  {HTMLElement} target The DOM object that the event is triggered on.
   */
  callEvent(eventMethod, event, target) {
    if (typeof this.handler.eventRegistry[eventMethod] === 'function') {
      var eventObj = new this.handler.eventRegistry[eventMethod](this.handler, event, target);
      eventObj.init();
    }
  }

}
