import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowLeft from '../../../secondary-nav/common/events/OnArrowLeft';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeftLV2 extends EventAbstract {

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
    if (this.getElement('parentNavPrevItem')) {
      this.getElement('parentNavPrevItem').focus();
    }
    else {
      this.getElement('parentNavLast').focus();
    }

    this.parentNav.closeSubNav();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var classicEvent = new OnArrowLeft(this.item, this.event, this.target);
    classicEvent.init();
  }

}
