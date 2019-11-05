import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowRight from '../../../secondary-nav/accordion/events/onArrowRight';

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
   * [handleDesktop description]
   * @return {[type]} [description]
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
   * handleMobile
   * @return {[type]} [description]
   */
  handleMobile() {
    var classicEvent = new OnArrowRight(this.item, this.event, this.target);
    classicEvent.init();
  }

}
