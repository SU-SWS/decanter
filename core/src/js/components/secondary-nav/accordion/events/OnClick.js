import EventAbstract from '../../common/events/EventAbstract';

/**
 * OnClick
 *
 * Event action handler class.
 */
export default class OnClick extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    if (this.item.isExpanded()) {
      this.item.closeSubNav();
      // We blur then focus so that the browser announces the collapse to
      // those using screen readers and other assistive devices.
      this.elem.blur();
      this.elem.focus();
    }
    else {
      this.item.openSubNav();
    }
  }

}
