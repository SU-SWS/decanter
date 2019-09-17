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

  /**
   * Expand open the active path.
   */
  expandActivePath() {
    // Let super do its thing first.
    super.expandActivePath();

    // On Desktop with initial expanded menu items we need to
    // collapse the first level only and leave the rest expanded.
    if (this.toggle && window.innerWidth > 768) {
      this.closeAllSubNavs();
    }
  }

  /**
   * Create new event listeners for the nav element and our custom events.
   */
  createEventListeners() {
    super.createEventListeners()
    // Listen to the close so we can act on it.
    window.addEventListener('resize', this);
  }

  /**
   * Handle window resize event.
   * @return {[type]} [description]
   */
  onResize() {
    if (this.toggle && window.innerWidth > 768) {
      this.closeAllSubNavs();
    }
  }

}
