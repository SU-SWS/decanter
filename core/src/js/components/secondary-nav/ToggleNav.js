import ToggleNavItem from './ToggleNavItem';
import ToggleSubNavItem from './ToggleSubNavItem';
import Nav from '../main-nav/Nav';

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

    // Override the subnav classes unless they are provided.
    options.itemClasses = options.itemClasses || {
      single: ToggleNavItem,
      sub: ToggleSubNavItem
    };

    super(elem, options);
  }

  /**
   * [closeThisSubNav description]
   */
  closeThisSubNav() {
    this.elem.classList.remove(this.options.itemExpandedClass);
    let toggle = this.elem.querySelector('#' + this.id + ' .' + this.options.toggleClass);
    toggle.setAttribute('aria-expanded', false);
  }

}
