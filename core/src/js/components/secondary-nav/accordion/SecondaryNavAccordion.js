import SecondaryNavAbstract from '../common/SecondaryNavAbstract';
import SecondaryNavItem from '../common/SecondaryNavItem';
import SecondarySubNavAccordion from './SecondarySubNavAccordion';

/**
 * A secondary menu with toggle buttons.
 */
export default class SecondaryNavAccordion extends SecondaryNavAbstract {
  /**
   * [constructor description]
   * @param {[type]} elem         [description]
   * @param {Object} [options={}] [description]
   */
  constructor(elem, options = {}) {
    // Let super do what super does.
    super(elem, options);

    // Ok do the creation.
    this.createSubNavItems();
  }

  /**
   * [newParentItem description]
   * @param  {[type]} item  [description]
   * @param  {[type]} depth [description]
   * @return {[type]}       [description]
   */
  newParentItem(item, depth, parent) {
    var nav = new SecondarySubNavAccordion(
      item,
      this,
      parent,
      {
        itemExpandedClass: this.options.itemExpandedClass,
        depth: depth,
      }
    );
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * [newNavItem description]
   * @param  {[type]} item  [description]
   * @param  {[type]} depth [description]
   * @return {[type]}       [description]
   */
  newNavItem(item, depth, parent) {
    var nav = new SecondaryNavItem(
      item,
      this,
      parent,
      { depth: depth }
    );
    this.navItems.push(nav);
    return nav;
  }
}
