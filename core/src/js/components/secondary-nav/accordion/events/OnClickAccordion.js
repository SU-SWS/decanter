import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnClickAccordion extends EventAbstract {

  /**
   * [init description]
   */
  init() {
    // Only fire if the event is targeting my assigned target.
    if (!this.isOnTarget()) {
      return;
    }

    this.event.preventDefault();

    if (this.handler.isExpanded()) {
      this.handler.closeSubNav();
      // We blur then focus so that the browser announces the collapse to
      // those using screen readers and other assistive devices.
      this.elem.blur();
      this.elem.focus();
    }
    else {
      this.handler.openSubNav();
    }
  }

}
