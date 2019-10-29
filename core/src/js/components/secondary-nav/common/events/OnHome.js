import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnHome extends EventAbstract {

  /**
   * [exec description]
   * @return {[type]} [description]
   */
  exec() {
    this.event.preventDefault();
    var node = this.getElement('first');
    if (node) {
      node.focus();
    }
  }

}
