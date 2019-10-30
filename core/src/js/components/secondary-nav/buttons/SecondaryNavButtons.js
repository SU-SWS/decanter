import SecondaryNavAbstract from '../common/SecondaryNavAbstract';
import SecondaryNavItem from '../common/SecondaryNavItem';
import SecondarySubNavButtons from './SecondarySubNavButtons';

/**
 * A secondary menu with toggle buttons.
 */
export default class SecondaryNavButtons extends SecondaryNavAbstract {
  /**
   * [constructor description]
   * @param {[type]} elem         [description]
   * @param {Object} [options={}] [description]
   */
  constructor(elem, options = {}) {

    // Merge with the default options.
    options = Object.assign({
      'itemExpandedClass': 'su-secondary-nav__item--expanded',
      'toggleClass': 'su-nav-toggle',
      'toggleLabel': 'expand menu',
      'subNavToggleText': "+",
    }, options);

    // Call the super.
    super(elem, options);

    // Ok do the creation.
    this.createSubNavItems();

    // Expand the path.
    this.activePath.expandActivePath();
  }

  /**
   * Add the additional state handling after the abstract option has run.
   */
  expandActivePathItem(item) {
    var node = item.querySelector("." + this.options.toggleClass);
    if (node) {
      node.setAttribute('aria-expanded', 'true');
    }
  }

  /**
   * [newParentItem description]
   * @param  {[type]} item  [description]
   * @param  {[type]} depth [description]
   * @return {[type]}       [description]
   */
  newParentItem(item, depth, parent) {
    var nav = new SecondarySubNavButtons(
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
