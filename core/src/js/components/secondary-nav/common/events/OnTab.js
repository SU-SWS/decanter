import EventAbstract from './EventAbstract';

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
    const shifted = event.shiftKey;
    let node = null;
    let firstItem = false;
    let lastItem = false;

    try {
      firstItem = this.masterNav.elem.querySelector('a');
    }
    catch (err) {
      firstItem = this.masterNav.elem.firstElementChild;
    }

    try {
      lastItem = this.masterNav.elem.querySelector(':scope > ul > li:last-child');
    }
    catch (err) {
      lastItem = this.masterNav.elem.lastElementChild.lastElementChild;
    }

    // If shift key is held.
    if (shifted) {
      node = this.getElement('prev');
      if (this.target === firstItem) {
        this.masterNav.closeAllSubNavs();
        return;
      }
    }
    // No shift key, just regular ol tab.
    else {
      node = this.getElement('next');
      if (this.target.parentNode === lastItem) {
        this.masterNav.closeAllSubNavs();
        return;
      }
    }

    // No nodes were found. Close up behind us.
    if (!node) {
      if (this.item.getDepth() > 1) {
        this.parentNav.closeSubNav();
      }
    }
  }
}
