import EventAbstract from '../../common/events/EventAbstract';

/**
 * SubNavToggleClick
 *
 * Event action handler class.
 */
export default class SubNavToggleClick extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    if (this.parentNav.isExpanded()) {
      this.parentNav.closeSubNav();
      this.elem.blur();
      this.elem.focus();
    }
    else {
      this.parentNav.openSubNav();
    }
  }

}
