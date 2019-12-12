import EventAbstract from './EventAbstract';

/**
 * OnEnd
 *
 * Event action handler class.
 */
export default class OnEnd extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    var node = this.getElement('last');
    if (node) {
      node.focus();
    }
  }

}
