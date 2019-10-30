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
  exec() {
    this.event.preventDefault();
    var node = this.getElement('last');
    if (node) {
      node.focus();
    }
  }

}
