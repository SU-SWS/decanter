import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowRight from '../../../secondary-nav/accordion/events/OnArrowRight';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightLV1 extends EventAbstract {

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
      this.getElement('first').focus();
    }
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var classicEvent = new OnArrowRight(this.item, this.event, this.target);
    classicEvent.init();
  }

}
