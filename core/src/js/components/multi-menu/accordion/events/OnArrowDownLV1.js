import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowDown from '../../../secondary-nav/common/events/OnArrowDown';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowDownLV1 extends EventAbstract {

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
    this.item.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var classicEvent = new OnArrowDown(this.item, this.event, this.target);
    classicEvent.init();
  }

}
