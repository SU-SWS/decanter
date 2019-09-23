import Nav from '../nav/Nav.js';
import ToggleNav from '../nav/ToggleNav.js';
import MainNavItem from './MainNavItem';
import MainSubNavItem from './MainSubNavItem';
import MainNavToggleItem from './MainNavToggleItem';
import MainSubNavToggleItem from './MainSubNavToggleItem';
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
    if (this.options.toggleClass !== undefined) {
      this.itemClasses['sub'] = MainSubNavToggleItem;
      this.itemClasses['single'] = MainNavToggleItem;
    }
    else {
      this.itemClasses['sub'] = MainSubNavItem;
      this.itemClasses['single'] = MainNavItem;
    }
    super.createNavItems();
  }

  /**
   * Expand open the active path.
   */
  expandActivePath() {
    if (this.options.toggleClass !== undefined) {
      let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
      if (actives.length) {
        actives.forEach(
          item => {

            // While we have parents go up and add the active class.
            while (item) {

              // End when we get to the parent nav item stop.
              if (item.getAttribute('id') === this.id) {
                // Stop at the top most level.
                break;
              }

              // If we are on a LI element we need to add the active class.
              if (item.tagName === 'LI') {
                item.classList.add(this.itemExpandedClass);
                let toggleButton = item.querySelector('.' + this.options.toggleClass);
                if (toggleButton) {
                  toggleButton.setAttribute('aria-expanded', true);
                }
              }

              // Always increment.
              item = item.parentNode;
            }
          }
        );
      }
    }
    else {
      // Let super do its thing.
      super.expandActivePath();
    }

    // On Desktop with initial expanded menu items we need to
    // collapse the first level only and leave the rest expanded.
    if (window.innerWidth > 768) {
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
   *
   * Close all the nav when window resized so we don't have weird hangers.
   */
  onResize() {
    if (window.innerWidth > 768) {
      this.closeAllSubNavs();
    }
  }

}
