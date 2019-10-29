import ElementFetcher from '../../../nav/ElementFetcher';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class EventAbstract {

  /**
   * [constructor description]
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
   * [validate description]
   * @return {[type]} [description]
   */
  isOnTarget() {
    if (this.target === this.elem) {
      return true;
    }
    return false;
  }

  /**
   * [validate description]
   * @return {[type]} [description]
   */
  validate() {
    // Only act on me.
    if (!this.isOnTarget()) {
      return false;
    }
    return true;
  }

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
    if (this.validate()) {
      this.exec();
    }
  }

  /**
   * [getElement description]
   * @param  {[type]} what [description]
   * @return {[type]}      [description]
   */
  getElement(what, context = this.elem.parentNode) {
    var fetcher = new ElementFetcher(context, what);
    return fetcher.fetch();
  }

}
