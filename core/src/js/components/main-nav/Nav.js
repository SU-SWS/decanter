import {isEsc} from '../../utilities/keyboard';
import NavAbstract from './NavAbstract';
import NavToggle from './NavToggle';

/**
 * Represent a navigation menu. May be the top nav or a subnav.
 */
export default class Nav extends NavAbstract {

  /**
   * Create a nav container istance.
   *
   * @param {HTMLElement} elem    The html element to use as the parent for the nav list.
   * @param {Object} options      An object with key value pairs of configuration options.
   *                              zIndex            - css property is set on load.
   *                              toggleSelector    - The css selector for the toggle element.
   *                              toggleClass       - The css class for the toggle element
   *                              itemExpandedClass - The css class to give to expanded items
   *                              itemActiveClass   - The css class to give to the `active path`
   *                              activePath        - Boolean flag to add the itemActiveClass to
   *                                                  the `active path`
   *                              itemEvents        - Object containing custom event functions
   *                              toggle            - The nav's toggle element
   *                              expandActivePath  - Boolean flag to open all SubNavItems of the
   *                                                  active path
   *                              idPrefix          - Prefix string to give to the nav ids.
   *                              depth             - The current depth of the menu.
   *                              itemClasses       - An object containing the JS classes to use to
   *                                                  create single and sub nav items.
   */
  constructor(elem, options) {
    super(elem, options);
    // Create navItems.
    this.createNavItems();
    // Initialize the event listeners.
    this.createEventListeners();
    // Gobble gobble toggle toggle.
    if (options.toggleSelector) {
      this.createNavToggle();
    }
    // Add an active class to the children.
    if (options.activePath) {
      this.setActivePath();
    }
    // Expand to the active path.
    if (options.expandActivePath) {
      this.expandActivePath();
    }
  }

  /**
   * [createEventListeners description]
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
   */
  onPreOpenSubnav(event) {
    // Somebody clicked a subnav trigger. Check to see if it is one of my
    // subnavitems. If it is one of my subnav items, close all of the subnav
    // items so that everything on the same level are shut.
    let triggerId = event.detail.nav.id || null;
    if (triggerId === this.id) {
      this.closeAllSubNavs();
    }
  }

  /**
   * [onKeydown description]
   * @param  {[type]} event  [description]
   * @param  {[type]} target [description]
   */
  onKeydown(event, target) {
    const theKey = event.key || event.keyCode;

    if (isEsc(theKey)) {
      this.closeAllSubNavs();
    }
  }

  /**
   * Create the toggle element.
   */
  createNavToggle() {
    // Find the element.
    let toggleElement = this.elem.querySelector(this.elem.tagName + this.options.toggleSelector);

    // If we cannot find a toggle element return null.
    if (!toggleElement) {
      return;
    }

    // Attach the behaviour.
    let toggleOptions = {
      navElement: this.elem,
      nav: this
    };
    this.toggle =
    this.options.toggle = new NavToggle(toggleElement, toggleOptions);
  }

  /**
   * Expand open the active path.
   */
  expandActivePath() {
    // Let super do its thing first.
    super.expandActivePath();

    // On Desktop with initial expanded menu items we need to collapse the first
    // level only and leave the rest expanded.
    if (this.toggle && window.innerWidth > 768) {
      this.closeAllSubNavs();
    }
  }

  // ---------------------------------------------------------------------------
  // Deprecated functions
  // ---------------------------------------------------------------------------

  /**
   * Deprecated.
   */
  getTopNav() {
    return this.elem.closest('nav');
  }

  /**
   * Deprecated.
   */
  getParentNav() {
    // New version intentionally doesn't know about parents. How to do this?
    return this;
  }

  /**
   * Deprecated
   */
  isExpanded() {
    if (this.toggle) {
      return this.toggle.isExpanded();
    }
    return false;
  }

  /**
   * Deprecated
   */
  setExpanded() {
    if (this.toggle) {
      return this.toggle.setExpanded();
    }
    return false;
  }

  /**
   * Deprecated
   */
  isDesktopNav() {
    return (window.innerWidth > 768);
  }

  /**
   * Deprecated.
   */
  isTopNav() {
    return (this.getDepth() === 1);
  }

  /**
   * Deprecated.
   */
  isSubNav() {
    return (this.subNavItems.length > 0);
  }

  /**
   * Deprecated.
   */
  getFirstItem() {
    return this.elem.firstElementChild;
  }

  /**
   * Deprecated
   */
  getLastItem() {
    return this.elem.lastElementChild;
  }

  /**
   * Deprecated.
   */
  getFirstLink() {
    return this.elem.querySelector('a');
  }

  /**
   * Deprecated.
   */
  getLastLink() {
    return this.elem.querySelector(this.tagName + ' > li > a');
  }

  /**
   * Deprecated.
   */
  focusOn(link, currentItem = null) {
    switch (link) {
      case 'first':
        this.getFirstLink().focus();
        break;

      case 'last':
        this.getLastLink().focus();
        break;

      case 'next':
        this.getLastLink().focus();
        break;

      case 'prev':
        this.getFirstLink().focus();
        break;

      default:
        try {
          this.elem.querySelectorAll('a')[link].focus();
        }
        catch(err) {
          // Nada.
        }
        break;
    }
  }

  /**
   * Deprecated.
   */
  openMobileNav(focusOnFirst = true) {
    if (this.toggle) {
      this.toggle.openNav(focusOnFirst);
    }
  }

  /**
   * Deprecated.
   */
  closeMobileNav() {
    if (this.toggle) {
      this.toggle.closeNav();
    }
  }

  /**
   * Deprecated.
   */
  onClick(event, target) {
    // Functionality moved to the toggle class.
  }

  /**
   * Deprecated.
   */
  onKeydown(event, target) {
    // Events have been moved to navItem and navToggle.
  }

}
