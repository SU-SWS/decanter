import EventAbstract from '../../common/events/EventAbstract';
import NavItemOnArrowLeft from '../../common/events/OnArrowLeft';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeft extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    // Go up a level and close the nav.
    this.event.preventDefault();

    // Previous nav parents link item to focus on.
    var node = this.getElement('parentItem');
    this.parentNav.closeSubNav();

    // If we found a previous item focus on it.
    if (node) {
      node.focus();
    }
    // Overwise do what the navigate left option does.
    else {
      var otherLeft = new NavItemOnArrowLeft(this.item, this.event, this.target);
      otherLeft.init();
    }
  }
}
