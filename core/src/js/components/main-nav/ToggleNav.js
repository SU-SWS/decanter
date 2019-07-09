import ToggleSubNavItem from './ToggleSubNavItem';
import NavItem from './NavItem';
import Nav from './Nav';

/**
 * Represent a navigation menu. May be the top nav or a subnav.
 *
 * @prop {HTMLElement|NavItem} elem       - The element that is the nav. May
 *                                          be a main nav (<nav>) or a subnav
 *                                          (NavItem).
 * @prop {Nav}                 topNav     - The instance of Nav that models
 *                                          the top nav. If this is the top
 *                                          nav, topNav === this.
 * @prop {HTMLButtonElement}   toggle     - The <button> in the DOM that
 *                                          toggles the menu on mobile. NULL
 *                                          if this is a subnav.
 * @prop {String}              toggleText - The initial text of the mobile
 *                                          toggle (so we can reset it when
 *                                          the mobile nav is closed).
 * @prop {Array}               items      - Instances of NavItem that model
 *                                          each element in the nav
 */
export default class ToggleNav extends Nav {

  /**
   * [constructor description]
   * @param {[type]} elem    [description]
   * @param {[type]} options [description]
   */
  constructor(elem, options) {
    super(elem, options);
  }

  /**
   * Create the children nav items.
   * @return {[type]} [description]
   */
  createNavItems() {
    let items = this.elem.querySelectorAll('#' + this.id + ' > ul > li');
    items.forEach(
      item => {
        // Subnav items have special behaviour.
        if (item.querySelector(item.tagName + ' > ul')) {
          this.subNavItems.push(new ToggleSubNavItem(item, this, this.options));
        }
        // NavItems have specific event handling.
        else {
          this.navItems.push(new NavItem(item, this, this.options));
        }
      }
    );
  }

}
