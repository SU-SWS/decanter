import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnClick extends EventAbstract {

  /**
   * [init description]
   */
  exec() {
    this.event.stopPropagation();
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
