/**
 * ElementFetcher Class
 *
 * Provides a relative named DOM navigator for quickly getting elements relative
 * to the provided context.
 */
export default class ElementFetcher {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element   The DOM object to use.
   * @param {String} what           A named string.
   */
  constructor(element, what) {
    this.item = element;
    this.what = what;
  }

  /**
   * Attempt to retrieve an item.
   *
   * @return {Boolean|HTMLElement} An element or false if `what` is not found.
   */
  fetch() {
    try {
      switch (this.what) {
        case 'first':
          return this.item.parentNode.firstElementChild.firstChild;
        case 'last':
          return this.item.parentNode.lastElementChild.firstChild;
        case 'firstElement':
          return this.item.parentNode.firstElementChild;
        case 'lastElement':
          return this.item.parentNode.lastElementChild;
        case 'lastToggle':
          return this.item.parentNode.lastElementChild.querySelector(':scope .su-nav-toggle');
        case 'next':
          return this.item.nextElementSibling.querySelector(':scope a');
        case 'prev':
          return this.item.previousElementSibling.querySelector(':scope a');
        case 'nextElement':
          return this.item.nextElementSibling;
        case 'prevElement':
          return this.item.previousElementSibling;
        case 'prevToggle':
          return this.item.previousElementSibling.querySelector(':scope .su-nav-toggle');
        case 'prevElementSiblingSubnavLast':
          return this.item.previousElementSibling.querySelector(':scope > ul li a:last-child');
        case 'parentItem':
          var node = this.item.parentNode.parentNode;
          if (node.tagName === 'NAV') { return false; }
          return node.querySelector('a');
        case 'parentButton':
          return this.item.parentNode.parentNode.querySelector('button');
        case 'parentNav':
          return this.item.parentNode.parentNode;
        case 'parentNavLast':
          return this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a');
        case 'parentNavFirst':
          return this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a');
        case 'parentNavNext':
          return this.item.parentNode.parentNode.nextElementSibling;
        case 'parentNavNextItem':
          return this.item.parentNode.parentNode.nextElementSibling.querySelector('a');
        case 'parentNavPrev':
          return this.item.parentNode.parentNode.previousElementSibling;
        case 'parentNavPrevItem':
          return this.item.parentNode.parentNode.previousElementSibling.querySelector('a');
        case 'firstSubnavLink':
          return this.item.querySelector(':scope > ul li a');
        case 'firstSubnavItem':
          return this.item.querySelector(':scope > ul li');
        case 'subnav':
          return this.item.querySelector(':scope > ul');
        default:
          return false;
      }
    }
    catch (err) {
      return false;
    }
  }
}
