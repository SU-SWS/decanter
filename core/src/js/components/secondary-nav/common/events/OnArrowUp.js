import EventAbstract from './EventAbstract';
import OnEnd from './OnEnd';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowUp extends EventAbstract {

  /**
   * [exec description]
   * @return {[type]} [description]
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
