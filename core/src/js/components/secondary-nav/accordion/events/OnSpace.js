import EventAbstract from '../../common/events/EventAbstract';
import OnClick from './OnClick';

/**
 * OnSpace
 *
 * Event action handler class.
 */
export default class OnSpace extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Do the rest of the stuff click does.
    var eventClick = new OnClick(this.item, this.event, this.target);
    eventClick.init();

    // Focus on the first element for keyboard but not clicks.
    if (this.item.isExpanded()) {
      var elem = this.getElement('firstSubnavLink');
      elem.focus();
    }
  }

}
