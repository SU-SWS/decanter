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
    this.item.parentNode.firstElementChild.firstChild.focus();
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownEnd(event, target) {
    event.preventDefault();
    // Focus on the last item in the same level of this list.
    this.item.parentNode.lastElementChild.firstChild.focus();
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
   *
   **/
  onKeydownTab(event, target) {

    const shifted = event.shiftKey;
    let node = null;

    if (shifted) {
      node = this.item.previousElementSibling;
    }
    else {
      node = this.item.nextElementSibling;
    }

    if (!node) {
      if (this.options.toggle && this.getDepth() === 1) {
        this.options.toggle.closeNav();
      }
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
    }
  }

  /**
   * Handler for keypress of
   **/
  onKeydownSpace(event, target) {
    event.preventDefault();
    window.location = this.link.getAttribute("href");
  }

  /**
   * Handler for keypress of
   *
   **/
  onKeydownArrowUp(event, target) {
    event.preventDefault();

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
  onKeydownArrowLeft(event, target) {
    // If this is a nested item. Go back up a level.
    if (this.getDepth() > 1) {
      let node = this.item.parentNode.parentNode.firstElementChild;
      if (node) {
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
        node.focus();
      }
      // Go to parent's end.
      else {
        this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector("a").focus();
      }
    }
    // Otherwise just to to the previous sibling.
    else {
      this.onKeydownArrowUp(event, target);
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
  onKeydownArrowRight(event, target) {
    // If we are in the second level or more we check about traversing
    // the parent.
    if (this.getDepth() > 1) {
      let node = this.item.parentNode.parentNode.nextElementSibling;
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();

      if (node) {
        node.querySelector("a").focus();
      }
      // Go back to start.
      else {
        this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector("a").focus();
      }
    }
    else {
      this.onKeydownArrowDown(event, target);
    }
  }

}
