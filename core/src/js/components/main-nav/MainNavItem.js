import NavItem from '../nav/NavItem';

/**
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */
export default class MainNavItem extends NavItem {

  /**
   * Wether or not the mobile option is active.
   * @return {Boolean} [description]
   */
  isMobileExpanded() {
    if (this.options.toggle) {
      if (this.options.toggle.isExpanded()) {
        return true;
      }
    }
    return false;
  }

  /**
   * Event handler for key press: Right Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {

    // When on Desktop and greater than 2 deep don't do nothing.
    if (!this.isMobileExpanded() && this.getDepth() > 2) {
      return;
    }

    // When mobile menu is enabled just do nothing.
    if (this.isMobileExpanded()) {
      return;
    }

    // Ok, you can do stuff.
    super.onKeydownArrowRight(event, target);
  }

  /**
   * Event handler for key press: Left Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowLeft(event, target) {
    // For top level don't do nothing.
    if (this.isMobileExpanded() && this.getDepth() == 1) {
      return;
    }

    // For everything else just do the lefty thing but change the focus.
    super.onKeydownArrowLeft(event, target);
    if (!this.isMobileExpanded() && this.getDepth() == 2) {
      let node = this.getElement('parentNavPrevItem');
      if (node) {
        node.focus();
      }
    }
  }

  /**
   * Event handler for key press: Tab
   *
   * Allow the natural tab order but when traversing levels close previous
   * sub nav items as we go.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownTab(event, target) {
    const shifted = event.shiftKey;
    const isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search');

    if (!shifted || !isSearch || this.getDepth() > 1) {
      super.onKeydownTab(event, target);
      return;
    }

    node = this.getElement('prev');
    if (!node) {
      event.stopPropagation();
      return;
    }
  }

}
