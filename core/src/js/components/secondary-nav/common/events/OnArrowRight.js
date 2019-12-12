import EventAbstract from './EventAbstract';
import OnArrowDown from './OnArrowDown';

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
    // If we are in the second level or more we check about traversing
    // the parent.
    if (this.item.getDepth() > 1) {
      let node = this.getElement('parentNavNext');
      this.parentNav.closeSubNav();

      if (node) {
        node.querySelector('a').focus();
      }
      // Go back to start.
      else {
        this.getElement('parentNavFirst').focus();
      }
    }
    else {
      var eventDown = new OnArrowDown(this.item, this.event, this.target);
      eventDown.init();
    }
  }

}
