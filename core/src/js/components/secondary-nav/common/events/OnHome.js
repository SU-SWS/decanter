import EventAbstract from './EventAbstract';

/**
 * OnHome
 *
 * Event action handler class.
 */
export default class OnHome extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    var node = this.getElement('first');
    if (node) {
      node.focus();
    }
  }

}
