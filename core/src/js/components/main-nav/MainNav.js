import Nav from '../nav/Nav.js';
import MainNavItem from './MainNavItem';
import MainSubNavItem from './MainSubNavItem';

/**
 * Represent a main navigation menu
 */
export default class MainNav extends Nav {

  /**
   * Create all the children items.
   *
   * @see ../nav/NavAbstract.js
   */
  createNavItems() {
    this.itemClasses['sub'] = MainSubNavItem;
    this.itemClasses['single'] = MainNavItem;
    super.createNavItems();
  }

}
