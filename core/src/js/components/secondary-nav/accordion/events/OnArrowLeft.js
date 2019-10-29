import EventAbstract from '../../common/events/EventAbstract';
import { OnArrowLeft as NavItemOnArrowLeft } from '../../common/events/OnArrowLeft';

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
  exec() {
    // Go up a level and close the nav.
    this.event.preventDefault();

    // Previous nav parents link item to focus on.
    var node = this.getElement('parentItem');
    this.parentNav.closeSubNav();

    if (node) {
      node.focus();
    }
    else {
      var otherLeft = new NavItemOnArrowLeft(this.item, this.event, this.target);
      otherLeft.init();
    }
  }
}
