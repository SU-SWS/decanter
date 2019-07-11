import NavItem from '../main-nav/NavItem';

/**
 * Toggle Navigation item.
 *
 * This class represents the most basic list item with a link. Because it has
 * toggles instead of just links the keyboard events are different.
 */
export default class ToggleNavItem extends NavItem {

  /**
   * Constructor Method.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  constructor(item, nav, options) {
    super(item, nav, options);
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
    // If the tab was shift tabbed prevent the nav from collapsing.
    if (event.shiftKey) {
      event.stopPropagation();
    }
  }

}
