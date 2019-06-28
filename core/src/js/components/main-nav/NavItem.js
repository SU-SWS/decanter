import {normalizeKey} from "../../utilities/keyboard";
import {createEvent} from '../../utilities/events';
import Nav from './Nav';
import NavItemAbstract from './NavItemAbstract';

/**
 * Represent an item in a navigation menu. May be a direct link or a subnav
 * trigger.
 *
 * @prop {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem
 * @prop {HTMLElement|Nav} nav    - the Nav that contains the element.
 *                                  May be a main nav (<nav>) or subnav (Nav).
 * @prop {HTMLLIElement}   link   - the <a> in the DOM that is contained in
 *                                  item (the <li>).
 */
export default class NavItem extends NavItemAbstract {

  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  constructor(item, nav, options) {
    super(item, nav, options);
    this.link.addEventListener('keydown', this);
    this.link.addEventListener('click', this);
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownHome(event, target) {
    event.preventDefault();
    // Focus on the first item in the same level of this list.
    this.link.parentNode.parentNode.firstElementChild.firstChild.focus();
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownEnd(event, target) {
    event.preventDefault();
    // Focus on the last item in the same level of this list.
    this.link.parentNode.parentNode.lastElementChild.firstChild.focus();
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownTab(event, target) {
    // Nada. Let the browser default run.
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownEscape(event, target) {
    event.preventDefault();
    // Close everything.
    this.nav.closeAllSubNavs();
  }

  /**
   * Handler for keypress of
   **/
  onKeydownSpace(event, target) {
    // Nada, let the browser default run.
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownEnter(event, target) {
    // Nada, let the browser default run.
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownArrowUp(event, target) {
    event.preventDefault();
    this.nav.closeAllSubNavs();

    // Go to the previous item.
    let node = this.link.parentNode.previousElementSibling;
    if (node !== null) {
      node.firstChild.focus();
    }
    else {
      this.onKeydownEnd(event, target);
    }
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownArrowDown(event, target) {
    event.preventDefault();
    // Go to the next item.
    let node = this.link.parentNode.nextElementSibling;
    if (node !== null) {
      node.firstChild.focus();
    }
    else {
      this.onKeydownHome(event, target);
    }
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownArrowLeft(event, target) {
    event.preventDefault();
    let node = null;

    // If the very first level of the nav move horizontally,
    // If the second level or deeper meetings move up and left.
    if (this.item.parentNode.parentNode.tagName == "NAV") {
      node = this.link.parentNode.previousElementSibling;
    }
    else {
      node = this.item.parentNode.parentNode.previousElementSibling;
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
    }

    // Validate that an element exists.
    if (node !== null) {
      node.firstChild.focus();
    }
    // Jump to the other end.
    else {
      this.onKeydownEnd(event, target);
    }
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownArrowRight(event, target) {
    event.preventDefault();
    let node = null;

    // If the very first level of the nav move horizontally,
    // If the second level or deeper meetings move up and left.
    if (this.item.parentNode.parentNode.tagName == "NAV") {
      node = this.link.parentNode.nextElementSibling;
    }
    else {
      node = this.item.parentNode.parentNode.nextElementSibling;
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
    }

    // Validate that an element exists.
    if (node !== null) {
      node.firstChild.focus();
    }
    // Jump to the other end.
    else {
      this.onKeydownHome(event, target);
    }
  }

}
