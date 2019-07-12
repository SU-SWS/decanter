import NavItemAbstract from './NavItemAbstract';

/**
 * Navigation item.
 *
 * This class represents the most basic list item with a link.
 */
export default class NavItem extends NavItemAbstract {

/**
 * Create a new list item.
 *
 * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
 * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
 * @param {Object} options      - A simple object of key values used as
 *                                configuration options for each instance.
 */
  constructor(item, nav, options) {
    super(item, nav, options);
    this.link.addEventListener('keydown', this);
    this.link.addEventListener('click', this);
  }

  /**
   * Event handler for key press: Home
   *
   * Go and focus on the first sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownHome(event, target) {
    event.preventDefault();
    this.focusOn('first');
  }

  /**
   * Event handler for key press: End
   *
   * Go and focus on the last sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownEnd(event, target) {
    event.preventDefault();
    this.focusOn('last');
  }

  /**
   * Event handler for key press: ESC
   *
   * Stop, drop, and close everything.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownEscape(event, target) {
    event.preventDefault();
    this.nav.closeAllSubNavs();
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
    let node = null;

    if (shifted) {
      node = this.getElement('prev');
    }
    else {
      node = this.getElement('next');
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
   * Event handler for key press: Space
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownSpace(event, target) {
    event.stopPropagation();
    // window.location = this.link.getAttribute('href');
  }

  /**
   * Event handler for key press: Up Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowUp(event, target) {
    event.preventDefault();

    // Go to the previous item.
    let node = this.getElement('prevElement');
    if (node !== null) {
      node.firstChild.focus();
    }
    else {
      this.onKeydownEnd(event, target);
    }
  }

  /**
   * [onKeydownHome description]
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowLeft(event, target) {
    // If this is a nested item. Go back up a level.
    if (this.getDepth() > 1) {
      let node = this.getElement('parentItem');
      if (node) {
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
        node.focus();
      }
      // Go to parent's end.
      else {
        this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a').focus();
      }
    }
    // Otherwise just to to the previous sibling.
    else {
      this.onKeydownArrowUp(event, target);
    }
  }

  /**
   * [onKeydownHome description]
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
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
   * [onKeydownHome description]
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {
    // If we are in the second level or more we check about traversing
    // the parent.
    if (this.getDepth() > 1) {
      let node = this.item.parentNode.parentNode.nextElementSibling;
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();

      if (node) {
        node.querySelector('a').focus();
      }
      // Go back to start.
      else {
        this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a').focus();
      }
    }
    else {
      this.onKeydownArrowDown(event, target);
    }
  }

  // Deprecated functions
  // ---------------------------------------------------------------------------

  isFirstItem() {}
  isLastItem() {}
  isSubNavTrigger() {}
  isSubNavItem() {}
  isExpanded() {}
  setExpanded() {}
  openSubNav() {}
  closeSubNav() {}
  onClick() {}

}
