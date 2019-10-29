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
    this.handler = item;
    this.elem = item.elem;
    this.nav = item.nav;
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
   * [getElement description]
   * @param  {[type]} what [description]
   * @return {[type]}      [description]
   */
  getElement(what) {
    var fetcher = new ElementFetcher(this.elem.parentNode, what);
    return fetcher.fetch();
  }

}
