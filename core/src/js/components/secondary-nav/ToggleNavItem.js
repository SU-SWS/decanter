import NavItem from '../main-nav/NavItem';

/**
 * Represent an item in a navigation menu. May be a direct link or a subnav
 * trigger.
 *
 * @prop {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem
 * @prop {HTMLElement|Nav} nav    - the Nav that contains the element.
 *                                  May be a main nav (<nav>) or subnav (Nav).
 * @prop {HTMLLIElement}   link   - the <a> in the DOM that is contained in
 *                                  item (the <li>).
 * @prop {Nav}             subNav - if item is the trigger for a subnav, this
 *                                  is an instonce Nav that models the subnav.
 */
export default class ToggleNavItem extends NavItem {

  /**
   * Build.
   * @param {[type]} item    [description]
   * @param {[type]} nav     [description]
   * @param {[type]} options [description]
   */
  constructor(item, nav, options) {
    super(item, nav, options);
  }

  // Override event keys.
  /**
   * [onKeydownTab description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownTab(event, target) {
    // If the tab was shift tabbed prevent the nav from collapsing.
    if (event.shiftKey) {
      event.stopPropagation();
    }
  }

}
