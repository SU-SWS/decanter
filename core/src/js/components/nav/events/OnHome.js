import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnHome extends EventAbstract {

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
    var node = this.getElement('first');
    if (node) {
      node.focus();
    }
  }

}
