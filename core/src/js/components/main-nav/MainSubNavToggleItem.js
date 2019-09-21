import ToggleSubNavItem from '../nav/ToggleSubNavItem';

/**
 * Represent a toggle link
 */
export default class MainSubNavToggleItem extends ToggleSubNavItem {

  /**
   * Handle the click event on the toggle.
   *
   * @param {Event} event         - The event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onClick(event, target) {
    if (!this.isMobileExpanded() && this.getDepth() === 1) {
      let subNavItems = this.nav.subNavItems;
      subNavItems.forEach(
        (item, event) => {
          if (item.link !== target) {
            item.closeSubNav();
          }
        }
      );
    }

    super.onClick(event, target);
  }

}
