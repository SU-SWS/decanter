import { isEsc, isSpace, isEnter } from "../../utilities/keyboard";
import { createEvent } from '../../utilities/events';
import NavItem from './NavItem';
import SubNavItem from './SubNavItem';
import NavAbstract from './NavAbstract';

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
export default class Nav extends NavAbstract {

  /**
   * Create a Nav
   *
   * @param {HTMLElement|NavItem} elem - The element that is the nav menu.
   *                                     May be a main nav (<nav>) or a subnav
   *                                     (NavItem).
   */
  constructor(elem, options) {
    super(elem, options);
    // Create navItems.
    this.createNavItems();
    // Initialize the event listeners.
    this.createEventListeners();
    // Once initialized pass me back to the toggle.
    if (this.toggle) {
      this.toggle.setNav(this);
    }
    // Add an active class to the children.
    this.setActivePath();
  }

  /**
   * [createEventListeners description]
   * @return {[type]} [description]
   */
  createEventListeners() {
    // What do when key down?
    this.elem.addEventListener('keydown', this);

    // Listen to the close so we can act on it.
    this.elem.addEventListener('preOpenSubnav', this);
  }

  // -------------------------------------------------------------------------
  // Event Handlers.
  // -------------------------------------------------------------------------



  /**
   * [preOpenSubnav description]
   * @param  {[type]} event     [description]
   * @param  {[type]} parentNav [description]
   * @return {[type]}           [description]
   */
  onPreOpenSubnav(event) {
    // Somebody clicked a subnav trigger. Check to see if it is one of my
    // subnavitems. If it is one of my subnav items, close all of the subnav
    // items so that everything on the same level are shut.
    let triggerId = event.detail.nav.id || null;
    if (triggerId == this.id) {
      this.closeAllSubNavs();
    }
  }

  /**
   * [onKeydown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    if (isEsc(theKey)) {
      this.closeAllSubNavs();
    }
  }

}
