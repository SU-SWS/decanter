import EventAbstract from '../../common/events/EventAbstract';
import SubNavToggleClick from './SubNavToggleClick';

/**
 * SubNavToggleSpace
 *
 * Event action handler class.
 */
export default class SubNavToggleSpace extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    // No jumping around.
    this.event.preventDefault();

    // Call the click because it is pretty much the same thing.
    var eventClick = new SubNavToggleClick(this.item, this.event, this.target);
    eventClick.init();

    // Only focus on keyboard nav not on click.
    if (this.parentNav.isExpanded()) {
      var node = this.getElement('firstSubnavLink');
      if (node) {
        node.focus();
      }
    }
  }
}
