import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowRight extends EventAbstract {

  /**
   * [init description]
   * @return {[type]} [description]
   */
  exec() {
    // Go down a level and open the SubNav.
    this.event.preventDefault();
    this.item.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }
}
