import SubNavItem from '../nav/SubNavItem';

/**
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it.
 */
export default class MainSubNavItem extends SubNavItem {

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
   * Go and focus on the next sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {

    // When the main menu focus is at level 1 and not on mobile move to the
    // next sibling.
    if (!this.isMobileExpanded() && this.getDepth() == 1) {
      super.onKeydownArrowDown(event, target);
      return;
    }

    // When the mobile menu is active do the secondary nav thing.
    if (this.isMobileExpanded() && this.getDepth() == 1) {
      super.onKeydownArrowRight(event, target);
      return;
    }

    super.onKeydownArrowRight(event, target);
  }

  /**
   * Event handler for key press: Down Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowDown(event, target) {
    if (!this.isMobileExpanded() && this.getDepth() == 1) {
      super.onKeydownArrowRight(event, target);
    }
    else {
      super.onKeydownArrowDown(event, target);
    }
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
