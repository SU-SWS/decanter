import EventAbstract from './EventAbstract';
import OnHome from './OnHome';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowDown extends EventAbstract {

  /**
   * [init description]
   * @return {[type]} [description]
   */
  exec() {
    this.event.preventDefault();

    // Go to the next item.
    let node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    // If a node is not found go to home.
    var eventHome = new OnHome(this.item, this.event, this.target);
    eventHome.init();
  }

}
