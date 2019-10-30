import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class SubNavToggleArrowLeft extends EventAbstract {

  /**
   * [exec description]
   * @return {[type]} [description]
   */
  exec() {
    event.stopPropagation();
    event.preventDefault();
    this.parentNav.elem.focus();
  }
}
