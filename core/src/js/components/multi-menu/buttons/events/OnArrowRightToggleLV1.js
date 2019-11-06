import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';

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
   * [handleDesktop description]
   * @return {[type]} [description]
   */
  handleDesktop() {
    console.log("HELLO!");
    if (this.getElement('next')) {
      this.getElement('next').focus();
    }
    else {
      this.getElement('parentNavFirst').focus();
    }
  }

  /**
   * handleMobile
   * @return {[type]} [description]
   */
  handleMobile() {
    // expando.
  }

}
