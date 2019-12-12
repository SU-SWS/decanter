import EventAbstract from '../../common/events/EventAbstract';

/**
 * OnTab
 *
 * Event action handler class.
 */
export default class OnTab extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    // Only act on backwards options as we want to allow the tab to go
    // to the toggle.
    const shifted = event.shiftKey;
    if (!shifted) {
      if (!this.getElement('nextElement') && this.item.getDepth() === 1) {
        this.masterNav.closeAllSubNavs();
      }
      return;
    }

    // If no previous element we are going up a level and should close
    // up behind us.
    let node = this.getElement('prev');
    if (!node) {
      this.parentNav.closeSubNav();
    }
  }
}
