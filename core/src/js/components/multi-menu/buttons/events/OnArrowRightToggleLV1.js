import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import SubNavToggleSpace from '../../../secondary-nav/buttons/events/SubNavToggleSpace';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightToggleLV1 extends EventAbstract {

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
    if (this.getElement('next')) {
      this.getElement('next').focus();
    }
    else {
      this.getElement('parentNavFirst').focus();
    }
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var expandEvent = new SubNavToggleSpace(this.item, this.event, this.target);
    expandEvent.init();
  }

}
