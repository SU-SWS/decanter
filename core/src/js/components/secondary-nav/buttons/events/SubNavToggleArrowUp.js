import EventAbstract from '../../common/events/EventAbstract';

/**
 * SubNavToggleArrowUp
 *
 * Event action handler class.
 */
export default class SubNavToggleArrowUp extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // If the current focus is on the toggle and the menu is expanded, close
    // this nav menu and go to the parent list item.
    if (this.parentNav.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.parentNav.closeSubNav();
      this.getElement('parentItem').focus();
    }
    // If the focus is on the toggle and the menu is not expanded, go to the
    // previous sibling item by calling the super method.
    else {
      var node =
        this.getElement('prev') ||
        this.getElement('parentNavPrev') ||
        this.getElement('first');
      if (node) {
        node.focus();
      }
    }
  }
}
