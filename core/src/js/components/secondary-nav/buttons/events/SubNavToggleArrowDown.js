import EventAbstract from '../../common/events/EventAbstract';

/**
 * SubNavToggleArrowDown
 *
 * Event action handler class.
 */
export default class SubNavToggleArrowDown extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If on the toggle item and the menu is expanded go down in to the first
    // menu item link as the focus.
    if (this.parentNav.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.getElement('firstSubnavLink').focus();
    }
    // If current focus is on the toggle and the menu is not open, go to the
    // next sibling menu item.
    else {
      var node =
        this.getElement('next') ||
        this.getElement('parentNavNext') ||
        this.getElement('last');
      if (node) {
        node.focus();
      }
    }
  }
}
