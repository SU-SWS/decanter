import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowLeft extends EventAbstract {

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
    if (!this.isOnTarget()) {
      return;
    }

    // Get parent item.
    let node = this.getElement('parentItem');

    // Go to parent's end.
    if (!node) {
      node = this.getElement('parentNavLast');
    }

    if (node) {
      // this.nav.closeAllSubNavs();
      // this.nav.closeThisSubNav();
      node.focus();
    }

  }

}
