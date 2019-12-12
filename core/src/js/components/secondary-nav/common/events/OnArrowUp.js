import EventAbstract from './EventAbstract';
import OnEnd from './OnEnd';

/**
 * OnArrowUp
 *
 * Event action handler class.
 */
export default class OnArrowUp extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Go to the previous item.
    let node = this.getElement('prev');
    if (node) {
      node.focus();
      return;
    }

    // Default to the end..
    var eventEnd = new OnEnd(this.item, this.event, this.target);
    eventEnd.init();

  }
}
