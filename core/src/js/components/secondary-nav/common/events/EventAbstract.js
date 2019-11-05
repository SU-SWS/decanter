import ElementFetcher from '../../../nav/ElementFetcher';

/**
 * EventAbstract
 *
 * An abstract class for creating an interface for working with the
 * EventHandlerDispatch class. This is the signature for all instances
 * that are evoked through the eventRegistry.
 */
export default class EventAbstract {

  /**
   * Initialize.
   *
   * @param {Object|Mixed} item The javascript object instance that this is bound to.
   * @param {KeyboardEvent|MouseEvent} event - The event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  constructor(item, event, target) {
    this.item = item;
    this.elem = item.elem;
    this.masterNav = item.masterNav;
    this.parentNav = item.parentNav;
    this.target = target;
    this.event = event;
  }

  /**
   * A validation shorcut that should pass before running exec().
   *
   * @return {Boolean} Wether or not the event target is what this instance is bound to.
   */
  isOnTarget() {
    // Check to see if the event target is what this instance is bound to.
    if (this.target === this.elem) {
      return true;
    }
    return false;
  }

  /**
   * A validation method that should pass before running exec().
   *
   * @return {Boolean} Wether or not validation passes.
   */
  validate() {
    // Only act on me.
    if (!this.isOnTarget()) {
      return false;
    }
    return true;
  }

  /**
   * Interface method.
   *
   * When evoking this abstract instance you should use this method as your
   * iterface for calling the action.
   */
  init() {
    if (this.validate()) {
      this.exec();
    }
  }

  /**
   * Shortcut function to find a DOM element.
   *
   * This is a helper function that uses a ElementFetcher instance to navigate
   * and traverse the DOM relative to the current context.
   *
   * @param  {String} what A keyword for what we are trying to find.
   * @param  {HTMLElement} context The relative starting location for the finder.
   * @return {Boolean|HTMLElement} False if not found or an HTMLElement.
   */
  getElement(what, context = this.elem.parentNode) {
    var fetcher = new ElementFetcher(context, what);
    return fetcher.fetch();
  }

  /**
   * Check the screen width to determine if mobile or not.
   * @return {Boolean} [description]
   */
  isDesktop() {
    // 992 is the LG breakpoint.
    if (window.innerWidth >= 992) {
      return true;
    }
    return false;
  }

}
