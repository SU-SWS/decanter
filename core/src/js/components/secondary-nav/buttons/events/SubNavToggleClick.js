import EventAbstract from '../../common/events/EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class SubNavToggleClick extends EventAbstract {

  /**
   * [init description]
   */
  exec() {
    if (this.parentNav.isExpanded()) {
      this.parentNav.closeSubNav();
      this.elem.blur();
      this.elem.focus();
    }
    else {
      this.parentNav.openSubNav();
    }
  }

}
