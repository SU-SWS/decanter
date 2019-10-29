import EventAbstract from './EventAbstract';
import OnArrowUp from './OnArrowUp';

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
   * [topLeft description]
   * @return {[type]} [description]
   */
  firstLevelLeft() {
    var upevent = new OnArrowUp(this.item, this.event, this.target);
    upevent.init();
  }

  /**
   * [nestedLeft description]
   * @return {[type]} [description]
   */
  nestedLeft() {
    let node = this.getElement('parentItem') || this.getElement('parentNavLast');
    this.parentNav.closeSubNav();

    if (node) {
      node.focus();
    }
  }

}
