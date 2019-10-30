import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnArrowRight extends EventAbstract {

  /**
   * [exec description]
   * @return {[type]} [description]
   */
  exec() {
    this.item.toggleElement.focus();
  }
}
