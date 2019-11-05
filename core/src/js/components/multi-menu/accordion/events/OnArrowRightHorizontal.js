import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowRight from '../../../secondary-nav/accordion/events/onArrowRight';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightHorizontal extends EventAbstract {

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

    // Handle like a mobile page if deeper than the top most.
    if (this.item.getDepth() > 1) {
      this.handleMobile();
      return;
    }

    if (this.getElement('next')) {
      this.getElement('next').focus();
    }
    else {
      this.getElement('first').focus();
    }
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
