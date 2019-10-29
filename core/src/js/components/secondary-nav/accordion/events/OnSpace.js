import EventAbstract from '../../common/events/EventAbstract';
import OnClick from './OnClick';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnSpace extends EventAbstract {

  /**
   * Prevent the spacebar from jumping to anywhere.
   */
  exec() {
    // Do the rest of the stuff click does.
    var eventClick = new OnClick(this.item, this.event, this.target);
    eventClick.init();

    // Focus on the first element for keyboard but not clicks.
    if (this.item.isExpanded()) {
      this.getElement('firstSubnavLink').focus();
    }
  }

}
