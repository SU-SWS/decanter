import EventAbstract from './EventAbstract';

/**
 * OnEsc
 *
 * Event action handler class.
 */
export default class OnEsc extends EventAbstract {

  /**
   * Execute the action to the event.
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
