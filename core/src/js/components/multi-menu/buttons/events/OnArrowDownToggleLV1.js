import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import SubNavToggleSpace from '../../../secondary-nav/buttons/events/SubNavToggleSpace';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowDownToggleLV1 extends EventAbstract {

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
    this.parentNav.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }

  /**
   * handleMobile
   * @return {[type]} [description]
   */
  handleMobile() {
    var expandEvent = new SubNavToggleSpace(this.item, this.event, this.target);
    expandEvent.init();
  }

}
