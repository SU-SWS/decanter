import EventAbstract from './EventAbstract';

/**
 * OnSpace
 *
 * Event action handler class.
 */
export default class OnSpace extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }

}
