import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnEsc extends EventAbstract {

  /**
   * [exec description]
   * @return {[type]} [description]
   */
  exec() {
    this.event.preventDefault();
    let node = false;

    if (this.item.getDepth() > 1) {
      this.event.stopPropagation();
      this.parentNav.closeSubNav();
      node = this.getElement('parentItem');
    }
    else {
      this.masterNav.closeAllSubNavs();
      node = this.getElement('first', this.item.parentNode);
    }

    if (node) {
      node.focus();
    }
  }

}
