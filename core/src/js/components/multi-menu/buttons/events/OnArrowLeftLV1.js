import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowLeft from '../../../secondary-nav/common/events/OnArrowLeft';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeftLV1 extends EventAbstract {

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
    var element =
      this.getElement('prevToggle') ||
      this.getElement('prev') ||
      this.getElement('lastToggle') ||
      this.getElement('last') ;

    element.focus()
  }

  /**
   * handleMobile
   * @return {[type]} [description]
   */
  handleMobile() {
    var classicEvent = new OnArrowLeft(this.item, this.event, this.target);
    classicEvent.init();
  }

}
