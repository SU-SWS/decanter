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

    // Expand the active path.
    this.activePath.expandActivePath();
  }

  /**
   * Add the additional state handling after the abstract option has run.
   */
  expandActivePathItem(item) {
    item.firstElementChild.setAttribute('aria-expanded', 'true');
  }

  /**
   * [newParentItem description]
   * @param  {[type]} item  [description]
   * @param  {[type]} depth [description]
   * @return {[type]}       [description]
   */
  newParentItem(item, depth, parent) {
    var opts = this.options;
    opts.depth = depth;

    var nav = new SecondarySubNavAccordion(
      item,
      this,
      parent,
      opts
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
    var opts = this.options;
    opts.depth = depth;

    var nav = new SecondaryNavItem(
      item,
      this,
      parent,
      opts
    );
    this.navItems.push(nav);
    return nav;
  }
}
