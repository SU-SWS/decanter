import SecondaryNavAbstract from '../common/SecondaryNavAbstract';
import SecondaryNavItem from '../common/SecondaryNavItem';
import SecondarySubNavButtons from './SecondarySubNavButtons';

/**
 * A secondary menu with toggle buttons.
 */
export default class SecondaryNavButtons extends SecondaryNavAbstract {

  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem, options = {}) {

    // Merge with the default options.
    options = Object.assign({
      itemExpandedClass: 'su-secondary-nav__item--expanded',
      toggleClass: 'su-nav-toggle',
      toggleLabel: 'expand menu',
      subNavToggleText: '+'
    }, options);

    // Call the super.
    super(elem, options);

    // Ok do the creation.
    this.createSubNavItems();

    // Add additional eventListeners.
    this.addEventListeners();

    // Expand the path.
    // Expand the active path.
    if (this.options.expand) {
      this.activePath.expandActivePath();
    }
  }

  /**
   * Add the additional state handling after the abstract option has run.
   *
   * @param  {HTMLElement} item The HTMLElement being acted upon.
   */
  expandActivePathItem(item) {
    var node = item.querySelector('.' + this.options.toggleClass);
    if (node) {
      node.setAttribute('aria-expanded', 'true');
    }
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavButtons} A brand new instance.
   */
  newParentItem(item, depth, parent) {
    var opts = Object.assign(this.options, {
      itemExpandedClass: this.options.itemExpandedClass,
      depth: depth
    });
    var nav = new SecondarySubNavButtons(
      item,
      this,
      parent,
      opts
    );
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * Function for creating a new single tier navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondaryNavItem} A brand new instance.
   */
  newNavItem(item, depth, parent) {
    var nav = new SecondaryNavItem(
      item,
      this,
      parent,
      {depth: depth}
    );
    this.navItems.push(nav);
    return nav;
  }

  /**
   * Adds additional event listeners.
   */
  addEventListeners() {
    // Clicking anywhere outside of attached nav closes all the children.
    document.addEventListener('preOpenSubnav', event => {
      this.subNavItems.forEach(
        (subnav, index) => {
          if (typeof subnav.item == undefined) {
            return;
          }

          if (subnav.item.contains(event.target)) {
            return;
          }
          subnav.closeSubNav();
        }
      );
    });
  }

}
