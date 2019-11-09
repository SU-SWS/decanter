import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import SubNavToggleClick from '../../../secondary-nav/buttons/events/SubNavToggleClick';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnClickToggleLV1 extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    if (this.isDesktop()) {
      this.handleDesktop();
    }
    else {
      this.handleMobile();
    }
  }

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    this.event.preventDefault();
    var node = this.parentNav.elem;
    node.focus();
    node.click();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var clickEvent = new SubNavToggleClick(this.item, this.event, this.target);
    clickEvent.init();
  }

}
