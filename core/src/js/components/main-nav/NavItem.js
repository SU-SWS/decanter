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
    this.getElement('first').focus();
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
    this.getElement('last').focus();
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

    if (this.getDepth() > 1) {
      event.stopPropagation();
      let node = this.getElement('parentItem');
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();
      node.focus();
    }
    else {
      this.nav.closeAllSubNavs();
      if (this.nav.toggle) {
        this.nav.toggle.element.focus();
      }
    }

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
    const isSearch = this.nav.elem.classList.contains('su-main-nav--mobile-search');
    let node = null;

    if (shifted) {
      node = this.getElement('prev');
    }
    else {
      node = this.getElement('next');
    }

    if (!node) {
      if (this.options.toggle && this.getDepth() === 1) {
        // If we are on the last item and there is a search, go focus on that.
        if (shifted && isSearch) {
          event.stopPropagation();
          return;
        }
        // Else, close everything.
        this.options.toggle.closeNav();
        this.nav.closeAllSubNavs();
        this.nav.closeThisSubNav();
      }
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
    event.preventDefault();
    window.location = target.getAttribute('href');
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
    let node = this.getElement('prev');
    if (node) {
      node.focus();
      return;
    }

    // Default.
    this.onKeydownEnd(event, target);
  }

  /**
   * Event handler for key press: Left Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowLeft(event, target) {
    // If this is a nested item. Go back up a level.
    if (this.getDepth() > 1) {
      let node = this.getElement('parentNavPrevItem');
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();

      if (node) {
        node.focus();
      }
      // Go to parent's end.
      else {
        this.getElement('parentNavLast').focus();
      }
    }
    // Otherwise just to to the previous sibling.
    else {
      this.onKeydownArrowUp(event, target);
    }
  }

  /**
   * Event handler for key press: Down Arrow
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowDown(event, target) {
    event.preventDefault();
    // Go to the next item.
    let node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    this.onKeydownHome(event, target);
  }

  /**
   * Event handler for key press: Home
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {
    // If we are in the second level or more we check about traversing
    // the parent.
    if (this.getDepth() > 1) {
      let node = this.getElement('parentNavNext');
      this.nav.closeAllSubNavs();
      this.nav.closeThisSubNav();

      if (node) {
        node.querySelector('a').focus();
      }
      // Go back to start.
      else {
        this.getElement('parentNavFirst').focus();
      }
    }
    else {
      this.onKeydownArrowDown(event, target);
    }
  }

}
