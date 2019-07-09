import SubNavItem from './SubNavItem';

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
    this.triggerClass = options.triggerClass || 'nav-toggle';

    // Create the buttons.
    this.toggle = this.createToggleButton();
    this.item.prepend(this.toggle);

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

    element.setAttribute('class', this.triggerClass);
    element.setAttribute('aria-expanded', false);
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
