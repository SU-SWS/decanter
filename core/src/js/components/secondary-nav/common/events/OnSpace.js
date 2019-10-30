import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnSpace extends EventAbstract {

  /**
   * Prevent the spacebar from jumping to anywhere.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }

}
