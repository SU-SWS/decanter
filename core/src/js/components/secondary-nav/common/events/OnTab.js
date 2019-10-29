import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnTab extends EventAbstract {

  /**
   * Prevent the spacebar from jumping to anywhere.
   */
  exec() {
    const shifted = event.shiftKey;
    let node = null;

    if (shifted) {
      node = this.getElement('prev');
    }
    else {
      node = this.getElement('next');
    }

    if (!node) {
      if (this.item.getDepth() === 1) {
        this.masterNav.closeAllSubNavs();
      }
      else {
        this.parentNav.closeSubNav();
      }
    }
  }

}
