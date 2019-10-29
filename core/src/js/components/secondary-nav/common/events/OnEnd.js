import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnEnd extends EventAbstract {

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
    var node = this.getElement('last');
    if (node) {
      node.focus();
    }
  }

}
