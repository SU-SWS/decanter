import EventAbstract from '../../common/events/EventAbstract';

/**
 * SubNavToggleArrowLeft
 *
 * Event action handler class.
 */
export default class SubNavToggleArrowLeft extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    event.stopPropagation();
    event.preventDefault();
    this.parentNav.elem.focus();
  }
}
