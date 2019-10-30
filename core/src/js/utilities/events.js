/**
 * Create an event with the specified name in a browser-agnostic way.
 *
 * @param {string} eventName - the name of the event
 * @param {Object} data - Additional data along with the event.
 *
 * @return {Event} - instance of event which can be dispatched / listened for
 */
export const createEvent = (eventName, data) => {
  if (typeof eventName !== 'string' || eventName.length <= 0) {
    return null;
  }
  // Modern browsers.
  if (typeof Event == 'function') {
    return new Event(eventName, data);
  }
  // IE
  else {
    let ev = document.createEvent('UIEvent');
    ev.initEvent(eventName, true, true, data);
    return ev;
  }
};
