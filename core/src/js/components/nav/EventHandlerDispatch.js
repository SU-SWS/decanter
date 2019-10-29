/**
 * EventHandlerDispatch Class
 *
 * NEEDS DESCRIPTION.
 */
export default class EventHandlerDispatch {

  /**
   * [constructor description]
   * @param {[type]} element [description]
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

    // Check to see if we have an event available.
    if (typeof this.handler[eventMethod] === 'function') {
      this.handler[eventMethod](event, target);
    }
  }

}
