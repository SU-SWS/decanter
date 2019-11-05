import EventAbstract from '../../common/events/EventAbstract';

/**
 * OnArrowRight
 *
 * Event action handler class.
 */
export default class OnArrowRight extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    // Go down a level and open the SubNav.
    this.event.preventDefault();
    this.item.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }
}
