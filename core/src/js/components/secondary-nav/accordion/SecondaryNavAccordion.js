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
  newParentItem(item, depth) {
    this.subNavItems.push(
      new SecondarySubNavAccordion(
        item,
        this,
        {
          itemExpandedClass: this.options.itemExpandedClass,
          depth: depth,
        }
      )
    );
  }

  /**
   * [newNavItem description]
   * @param  {[type]} item  [description]
   * @param  {[type]} depth [description]
   * @return {[type]}       [description]
   */
  newNavItem(item, depth) {
    this.navItems.push(
      new SecondaryNavItem(item, this, { depth: depth })
    );
  }
}
