import Nav from '../nav/Nav';
import SecondaryNavItem from './SecondaryNavItem';
import SecondarySubNavItem from './SecondarySubNavItem';

/**
 * Represent a secondary navigation menu
 */
export default class SecondaryNav extends Nav {

  /**
   * Create all the children items.
   *
   * @see ../nav/NavAbstract.js
   */
  createNavItems() {
    this.itemClasses['sub'] = SecondarySubNavItem;
    this.itemClasses['single'] = SecondaryNavItem;
    super.createNavItems();
  }

}
