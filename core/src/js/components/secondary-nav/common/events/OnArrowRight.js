import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowRight extends EventAbstract {

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
    if (!this.isOnTarget()) {
      return;
    }

    // If we are in the second level or more we check about traversing
    // the parent.
    // if (this.getDepth() > 1) {
      let node = this.getElement('parentNavNext');
      // this.nav.closeAllSubNavs();
      // this.nav.closeThisSubNav();

      if (node) {
        node.querySelector('a').focus();
      }
      // Go back to start.
      else {
        node = this.getElement('parentNavFirst');
        if (node) {
          node.focus();
        }
      }
    // }
    // else {
    //   this.onKeydownArrowDown(event, target);
    // }
  }

}
