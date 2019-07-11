import ToggleNavItem from './ToggleNavItem';
import ToggleSubNavItem from './ToggleSubNavItem';
import Nav from '../main-nav/Nav';

/**
 * A Navigation class for where the submenus have toggle buttons instead of
 * toggle links.
 */
export default class ToggleNav extends Nav {

  /**
   * Constructor
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  constructor(elem, options) {

    // Override the subnav classes unless they are provided.
    options.itemClasses = options.itemClasses || {
      single: ToggleNavItem,
      sub: ToggleSubNavItem
    };

    // Let the parent do it all.
    super(elem, options);
  }

  /**
   * Closes this nav.
   *
   * Overrides parent class with behaviour to target the toggle button.
   */
  closeThisSubNav() {
    this.elem.classList.remove(this.options.itemExpandedClass);
    let toggle = this.elem.querySelector('#' + this.id + ' .' + this.options.toggleClass);
    toggle.setAttribute('aria-expanded', false);
  }

}
