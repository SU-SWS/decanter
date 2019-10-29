import EventAbstract from './EventAbstract';

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
  init() {
    if (!this.isOnTarget()) {
      return;
    }

    // Prevent the browser from doing funny stuff.
    this.event.preventDefault();

    // Go to the next item.
    let node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    // No node yet, try home.
    node = this.getElement('first');
    if (node) {
      node.focus();
    }
  }

}
