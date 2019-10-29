import EventAbstract from './EventAbstract';
import OnEnd from './OnEnd';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowUp extends EventAbstract {

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
    // Only fire if the event is targeting my assigned target.
    if (!this.isOnTarget()) {
      return;
    }

    this.event.preventDefault();

    // Go to the previous item.
    let node = this.getElement('prev');
    // No previous node? Go to the last one then.
    if (!node) {
      node = this.getElement('last');
    }
    // If we have something to focus on.
    if (node) {
      node.focus();
    }
  }
}
