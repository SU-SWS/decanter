import EventAbstract from './EventAbstract';
import {createEvent} from '../../../../utilities/events';

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
      if (this.isDesktop()) {
        this.masterNav.closeAllSubNavs();
        node = this.getElement('first', this.item.parentNode);
      }
      else {
        var closeAllEvent = createEvent('closeAllMobileNavs', {bubbles: true, data: this.item});
        this.elem.dispatchEvent(closeAllEvent);
      }
    }

    if (node) {
      node.focus();
    }
  }

}
