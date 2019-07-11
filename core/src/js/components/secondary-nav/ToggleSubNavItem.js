import SubNavItem from '../main-nav/SubNavItem';

/**
 * Sub Navigation item.
 *
 * This class represents a menu list item with another menu in it that is
 * triggered by a toggle button instead of the links.
 */
export default class ToggleSubNavItem extends SubNavItem {

  /**
   * Create an instance.
   *
   * @param {HTMLLIElement} item  - The <li> that is the NavItem in the DOM.
   * @param {NavAbstract} nav     - An instance or extension of NavAbstract.
   * @param {Object} options      - A simple object of key values used as
   *                                configuration options for each instance.
   */
  constructor(item, nav, options) {
    // I'm feelin supa!
    super(item, nav, options);

    // Set text.
    this.toggleText = options.subNavToggleText || '+';
    this.toggleClass = options.toggleClass || 'nav-toggle';

    // Create the toggle buttons.
    this.toggle = this.createToggleButton();
    this.item.insertBefore(this.toggle, this.item.querySelector('ul'));

    // Create the toggle events.
    this.toggle.addEventListener('click', this);
    this.toggle.addEventListener('keydown', this);
  }

  /**
   * Create and a button for the expand/collapse actions.
   *
   * @return {HTMLElement} The button toggle.
   */
  createToggleButton() {
    let element = document.createElement('button');
    let label = document.createTextNode(this.toggleText);

    // Give this instance a unique ID.
    let id = 'toggle-' + Math.random().toString(36).substr(2, 9);

    element.setAttribute('class', this.toggleClass);
    element.setAttribute('aria-expanded', this.item.classList.contains(this.options.itemActiveClass));
    element.setAttribute('aria-controls', this.subNav.id);
    element.setAttribute('id', id);
    element.appendChild(label);

    return element;
  }

  /**
   * Handler for click events.
   *
   * Dispatched from this.handleEvent().
   * Click is only bound to subnav triggers. However, click bubbles up from
   * subnav items to the trigger.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onClick(event, target) {

    // If the click is on the trigger then ignore.
    if (target === this.link) {
      return;
    }

    // Toggle subnav item when clicking on the toggle.
    if (target === this.toggle) {
      if (this.isExpanded()) {
        this.closeSubNav();
      }
      else {
        this.openSubNav();
      }
    }
  }

  /**
   * Event handler for key press: Tab
   *
   * Go and focus on the last sibling of this item.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownTab(event, target) {
    // If the target is the link and no shift then go to the button and don't
    // collapse anything.
    if (target === this.link && event.shiftKey) {
      event.stopPropagation();
    }
  }

  /**
   * Event handler for key press: Space
   *
   * Just pass through to what the click event would do.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownSpace(event, target) {
    event.stopPropagation();
    event.preventDefault();
    this.onClick(event, target);
  }

  /**
   * Event handler for key press: Enter
   *
   * Just pass through to what the click event would do.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownEnter(event, target) {
    this.onKeydownSpace(event, target);
  }

  /**
   * Event handler for key press: Right
   *
   * Go from the link to the button but don't let it go any further.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowRight(event, target) {
    event.stopPropagation();
    event.preventDefault();

    // If on the link go to the toggle.
    if (target === this.link) {
      this.toggle.focus();
    }
  }

  /**
   * Event handler for key press: Left
   *
   * If on the button, go to the link, otherwise do what the parent class does.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowLeft(event, target) {

    // If on the toggle go to the link.
    if (target === this.toggle) {
      event.stopPropagation();
      event.preventDefault();
      this.link.focus();
      return;
    }

    // If the current focus is on the link let the parent method handle it.
    super.onKeydownArrowLeft(event, target);
  }

  /**
   * Event handler for key press: Down
   *
   * Complex event handling depending on focus and submenu state.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowDown(event, target) {

    // If on the toggle item and the menu is expanded go down in to the first
    // menu item link as the focus.
    if (target === this.toggle && this.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.getElement('firstSubnavLink').focus();
      return;
    }

    // If current focus is on the toggle and the menu is not open, go to the
    // next sibling menu item.
    if (target === this.toggle && !this.isExpanded()) {
      super.onKeydownArrowRight(event, this.link);
      return;
    }

    // If the focus is current not on the toggle, let the super class do it.
    super.onKeydownArrowDown(event, this.link);
  }

  /**
  * Event handler for key press: Up
  *
  * Complex event handling depending on focus and submenu state.
  *
  * @param {KeyboardEvent} event - The keyboard event.
  * @param {HTMLElement} target  - The HTML element target.
   */
  onKeydownArrowUp(event, target) {

    // If the current focus is on the toggle and the menu is expanded, close
    // this nav menu and go to the parent list item.
    if (target === this.toggle && this.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.closeNav();
      this.getElement('parentItem').focus();
      return;
    }

    // If the focus is on the toggle and the menu is not expanded, go to the
    // previous sibling item by calling the super method.
    if (target === this.toggle && !this.isExpanded()) {
      super.onKeydownArrowLeft(event, this.link);
      return;
    }

    // If the focus is on the link just do what the super method does.
    super.onKeydownArrowUp(event, this.link);
  }

  /**
   * Is this expanded? Can only return TRUE if this is a subnav trigger.
   *
   * @return {Boolean}
   *  Wether or not the item is expanded.
   */
  isExpanded() {
    return this.toggle.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Set whether or not this is expanded.
   *
   * @param {String} value - What to set the aria-expanded attribute of this's
   *                         link to.
   */
  setExpanded(value) {
    super.setExpanded(value);
    this.link.removeAttribute('aria-expanded', value);
    this.toggle.setAttribute('aria-expanded', value);
  }

}
