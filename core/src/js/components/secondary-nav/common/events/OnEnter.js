import EventAbstract from './EventAbstract';

/**
 * OnEnter
 *
 * Event action handler class.
 */
export default class OnEnter extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.stopPropagation();
    this.event.preventDefault();
    window.location = this.target.getAttribute('href');
  }

}
