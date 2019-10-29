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
  init() {
  if (!this.isOnTarget()) {
      return;
    }

    const shifted = this.event.shiftKey;
    let node = null;

    if (shifted) {
      node = this.getElement('prev');
    }
    else {
      node = this.getElement('next');
    }

    // if (!node) {
    //   this.nav.closeThisSubNav();
    //   if (this.getDepth() === 1) {
    //     this.nav.closeAllSubNavs();
    //   }
    // }
  }

}
