import NavItem from '../nav/NavItem';

/**
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */
export default class SecondaryNavItem extends NavItem {

  /**
   * Event handler for key press: Right
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }




}
