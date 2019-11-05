import EventAbstract from './EventAbstract';
import OnArrowUp from './OnArrowUp';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeft extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If this is a nested item. Go back up a level.
    if (this.item.getDepth() > 1) {
      this.nestedLeft();
    }
    // Otherwise just to to the previous sibling.
    else if (this.item.getDepth() === 1) {
      this.firstLevelLeft();
    }
  }

  /**
   * Action to take on a first level left key press.
   */
  firstLevelLeft() {
    var upevent = new OnArrowUp(this.item, this.event, this.target);
    upevent.init();
  }

  /**
   * Action to take on a nested level left key press
   */
  nestedLeft() {
    let node = this.getElement('parentItem') || this.getElement('parentNavLast');
    this.parentNav.closeSubNav();

    if (node) {
      node.focus();
    }
  }

}
