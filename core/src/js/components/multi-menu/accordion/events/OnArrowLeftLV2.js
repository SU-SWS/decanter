import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';

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
   * [handleDesktop description]
   * @return {[type]} [description]
   */
  handleDesktop() {
    if (this.getElement('parentNavPrevItem')) {
      this.getElement('parentNavPrevItem').focus();
    }
    else {
      this.getElement('parentNavLast').focus();
    }
    this.parentNav.clseSubNav();
  }

  /**
   * [handleDesktop description]
   * @return {[type]} [description]
   */
  handleMobile() {
    var classicEvent = new OnArrowRight(this.item, this.event, this.target);
    classicEvent.init();
  }

}
