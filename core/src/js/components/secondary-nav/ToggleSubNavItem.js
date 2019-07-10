import SubNavItem from '../main-nav/SubNavItem';

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
export default class ToggleSubNavItem extends SubNavItem {
  /**
   * Create a NavItem
   * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
   * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
   *                                  be a main nav (<nav>) or a subnav (Nav).
   */
  constructor(item, nav, options) {
    // I'm feelin supa!
    super(item, nav, options);

    // Set text.
    this.toggleText = options.subNavToggleText || '+';
    this.toggleClass = options.toggleClass || 'nav-toggle';

    // Create the buttons.
    this.toggle = this.createToggleButton();
    this.item.insertBefore(this.toggle, this.item.querySelector('ul'));

    // Create the toggle events.
    this.toggle.addEventListener('click', this);
    this.toggle.addEventListener('keydown', this);
  }

  /**
   * [createToggleButton description]
   * @return {[type]} [description]
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

    if (target === this.toggle) {
      if (this.isExpanded()) {
        this.closeSubNav();
      }
      else {
        this.openSubNav();
      }
      return;
    }
  }

  /**
   * [onKeydownTab description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownTab(event, target) {
    // If the target is the link and no shift then go to the button.
    if (target === this.link && event.shiftKey) {
      event.stopPropagation();
    }
  }

  /**
   * [onKeydownSpace description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownSpace(event, target) {
    event.stopPropagation();
    event.preventDefault();
    this.onClick(event, target);
  }

  /**
   * [onKeydownEnter description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownEnter(event, target) {
    this.onKeydownSpace(event, target);
  }

  /**
   * [onKeydownArrowRight description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowRight(event, target) {
    event.stopPropagation();
    event.preventDefault();

    // If on the link go to the toggle.
    if (target == this.link) {
      this.toggle.focus();
    }

  }

  /**
   * [onKeydownArrowLeft description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowLeft(event, target) {

    // If on the toggle go to the link.
    if (target == this.toggle) {
      event.stopPropagation();
      event.preventDefault();
      this.link.focus();
      return;
    }

    super.onKeydownArrowLeft(event, target);
  }

  /**
   * [onKeydownArrowDown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowDown(event, target) {

    if (target === this.toggle && this.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.item.querySelector("#" + this.item.getAttribute('id') + ' > ul > li > a').focus();
      return;
    }

    if (target === this.toggle && !this.isExpanded()) {
      super.onKeydownArrowRight(event, this.link);
      return;
    }

    super.onKeydownArrowDown(event, this.link);
  }

  /**
   * [onKeydownArrowDown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  onKeydownArrowUp(event, target) {
    if (target === this.toggle && this.isExpanded()) {
      event.stopPropagation();
      event.preventDefault();
      this.closeNav();
      this.item.parentElementNode.parentElementNode.querySelector('a').focus();
      return;
    }

    if (target === this.toggle && !this.isExpanded()) {
      super.onKeydownArrowLeft(event, this.link);
      return;
    }

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
   * Only meaningful if this is a subnav trigger.
   *
   * @param {String} value - What to set the aria-expanded attribute of this's
   *                         link to.
   */
  setExpanded(value) {
    this.toggle.setAttribute('aria-expanded', value);
    if (value) {
      this.item.classList.add(this.options.itemExpandedClass);
    }
    else {
      this.item.classList.remove(this.options.itemExpandedClass);
    }
  }

}
