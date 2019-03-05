// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

document.addEventListener('DOMContentLoaded', event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  // ---------------------------------------------------------------------------
  // Keyboard helper functions
  // ---------------------------------------------------------------------------

  const isHome = theKey =>
    (theKey === 'Home' || theKey === 122);
  const isEnd = theKey =>
    (theKey === 'End' || theKey === 123);
  const isTab = theKey =>
    (theKey === 'Tab' || theKey === 9);
  const isEsc = theKey =>
    (theKey === 'Escape' || theKey === 'Esc' || theKey === 27);
  const isSpace = theKey =>
    (theKey === ' ' || theKey === 'Spacebar' || theKey === 32);
  const isEnter = theKey =>
    (theKey === 'Enter' || theKey === 13);
  const isLeftArrow = theKey =>
    (theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37);
  const isRightArrow = theKey =>
    (theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39);
  const isUpArrow = theKey =>
    (theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38);
  const isDownArrow = theKey =>
    (theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40);

  // ---------------------------------------------------------------------------
  // Helper classes
  // ---------------------------------------------------------------------------

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
  class NavItem {

    /**
     * Create a NavItem
     * @param {HTMLLIElement}   item  - The <li> that is the NavItem in the DOM.
     * @param {HTMLElement|Nav} nav   - The Nav that contains the element. May
     *                                  be a main nav (<nav>) or a subnav (Nav).
     */
    constructor(item, nav) {
      this.item = item;
      this.nav = nav;
      this.link = this.item.querySelector('a');
      this.subNav = null;
      this.item.addEventListener('keydown', this);

      if (this.isSubNavTrigger()) {
        this.subNav = new Nav(this);
        // Maintain global list of subnavs for closeAllSubNavs().
        theSubNavs.push(this);
        this.item.addEventListener('click', this);
      }
    }

    // -------------------------------------------------------------------------
    // Helper Methods.
    // -------------------------------------------------------------------------

    /**
     * Is this the first item in the containing Nav?
     *
     * @return {Boolean}
     *  Wether or not the item is the first item.
     */
    isFirstItem() {
      return this.nav.items.indexOf(this) === 0;
    }

    /**
     * Is this the last item in the containing Nav?
     *
     * @return {Boolean}
     *  Wether or not the item is the last item.
     */
    isLastItem() {
      return this.nav.items.indexOf(this) === (this.nav.items.length - 1);
    }

    /**
     * Is this a trigger that opens / closes a subnav?
     *
     * @return {Boolean}
     *  Wether or not the item is the sub nav trigger item.
     */
    isSubNavTrigger() {
      return this.item.lastElementChild.tagName.toUpperCase() === 'UL';
    }

    /**
     * Is this a component of a subnav - either the trigger or a nav item?
     *
     * @return {Boolean}
     *  Wether or not the item is a subnav item.
     */
    isSubNavItem() {
      return (this.isSubNavTrigger() || this.nav.isSubNav());
    }

    /**
     * Is this expanded? Can only return TRUE if this is a subnav trigger.
     *
     * @return {Boolean}
     *  Wether or not the item is expanded.
     */
    isExpanded() {
      return this.link.getAttribute('aria-expanded') === 'true';
    }

    /**
     * Set whether or not this is expanded.
     * Only meaningful if this is a subnav trigger.
     *
     * @param {String} value - What to set the aria-expanded attribute of this's
     *                         link to.
     */
    setExpanded(value) {
      this.link.setAttribute('aria-expanded', value);
    }

    // -------------------------------------------------------------------------
    // Functional Methods.
    // -------------------------------------------------------------------------

    /**
     * Handles the opening of a sub-nav.
     *
     * If this is a subnav trigger, open the corresponding subnav.
     * Optionally force focus on the first element in the subnav
     * (for keyboard nav).
     *
     * @param {Boolean} focusOnFirst - whether or not to also focus on the first
     *                                 element in the subnav
     */
    openSubNav(focusOnFirst = true) {
      closeAllSubNavs();

      if (this.isSubNavTrigger()) {
        this.item.classList.add('su-main-nav__item--expanded');
        this.setExpanded('true');
        if (focusOnFirst) {
          this.subNav.focusOn('first');
        }
      }
    }

    /**
     * Handles the closing of a subnav.
     *
     * If this is a subnav trigger or an item in a subnav, close the
     * corresponding subnav. Optionally force focus on the trigger.
     *
     * @param {Boolean} focusOnTrigger - Whether or not to also focus on the
     *                                 subnav's trigger.
     */
    closeSubNav(focusOnTrigger = false) {
      if (this.isSubNavTrigger()) {
        this.item.classList.remove('su-main-nav__item--expanded');
        this.setExpanded('false');
        if (focusOnTrigger) {
          this.link.focus();
        }
      }
      else if (this.isSubNavItem()) {
        // This.nav.elem should be a subNavTrigger.
        this.nav.elem.closeSubNav(focusOnTrigger);
      }
    }

    // -------------------------------------------------------------------------
    // Event Handlers.
    // -------------------------------------------------------------------------

    /**
     * Handler for all events attached to an instance of this class. This method
     * must exist when events are bound to an instance of a class
     * (vs a function). This method is called for all events bound to an
     * instance. It inspects the instance (this) for an appropriate handler
     * based on the event type. If found, it dispatches the event to the
     * appropriate handler.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     *
     * @return {*}
     *   Whatever the dispatched handler returns (in our case nothing)
     */
    handleEvent(event) {
      event = event || window.event;

      // If this class has an onEvent method (onClick, onKeydown) invoke it.
      const handler = 'on'
        + event.type.charAt(0).toUpperCase()
        + event.type.slice(1);

      if (typeof this[handler] === 'function') {
        // The element that was clicked.
        const target = event.target || event.srcElement;
        return this[handler](event, target);
      }
    }

    /**
     * Handler for keydown events. keydown is bound to all NavItem's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @param {HTMLElement} target  - The HTML element target.
     */
    onKeydown(event, target) {
      const theKey = event.key || event.keyCode;

      // Handler for the space and enter key.
      if (isSpace(theKey) || isEnter(theKey)) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isSubNavTrigger()) {
          this.openSubNav();
        }
        else {
          window.location = this.link;
        }
      }
      // Handler for the down arrow key.
      else if (isDownArrow(theKey)) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nav.isDesktopNav()) {
          if (this.isSubNavTrigger()) {
            this.openSubNav();
          }
          else {
            this.nav.focusOn('next', this);
          }
        }
        else {
          this.nav.focusOn('next', this);
        }
      }
      // Handler for the up arrow key.
      else if (isUpArrow(theKey)) {
        event.preventDefault();
        event.stopPropagation();
        this.nav.focusOn('prev', this);
      }
      // Handler for the left arrow key.
      else if (isLeftArrow(theKey)) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nav.isDesktopNav()) {
          if (this.nav.isSubNav()) {
            this.closeSubNav();
            let parent = this.nav.getParentNav();
            // Focus on the previous item in the parent nav.
            parent.focusOn('prev', this.nav.elem);
          }
          else {
            this.nav.focusOn('prev', this);
          }
        }
        else {
          if (this.isSubNavItem()) {
            // Close the subnav and put the focus on the trigger.
            this.closeSubNav(true);
          }
        }
      }
      // Handler for the right arrow key.
      else if (isRightArrow(theKey)) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nav.isDesktopNav()) {
          if (this.nav.isSubNav()) {
            this.closeSubNav();
            let parent = this.nav.getParentNav();
            // Focus on the next item in the parent nav.
            parent.focusOn('next', this.nav.elem);
          }
          else {
            this.nav.focusOn('next', this);
          }
        }
        else {
          if (this.isSubNavTrigger()) {
            this.openSubNav();
          }
        }
      }
      // Handler for the home key.
      else if (isHome(theKey)) {
        this.nav.focusOn('first');
      }
      // Handler for the end key.
      else if (isEnd(theKey)) {
        this.nav.focusOn('last');
      }
      // Handler for the tab key.
      else if (isTab(theKey)) {
        event.stopPropagation();
        const shifted = event.shiftKey;
        if (this.isSubNavItem()
          && ((!shifted && this.isLastItem())
          || (shifted && this.isFirstItem()))
        ) {
          this.closeSubNav(true);
        }
      }
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
      if (this.isExpanded()) {
        this.closeSubNav();
      }
      else {
        this.openSubNav(false);
      }
      // If the click is directly on the trigger, then we're done.
      if (target === this.link) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

  }

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
  class Nav {

    /**
     * Create a Nav
     *
     * @param {HTMLElement|NavItem} elem - The element that is the nav menu.
     *                                     May be a main nav (<nav>) or a subnav
     *                                     (NavItem).
     */
    constructor(elem) {
      this.elem = elem;
      this.topNav = this.getTopNav();
      // If this is a subnav, we need the correpsonding HTMLElement for
      // .querySelector()
      if (elem instanceof NavItem) {
        elem = elem.item;
      }
      this.toggle = elem.querySelector(elem.tagName + ' > button');
      this.toggleText = this.toggle ? this.toggle.innerText : '';
      this.items = [];
      let items = elem.querySelectorAll(elem.tagName + ' > ul > li');
      items.forEach(
        item => {
          this.items.push(new NavItem(item, this));
        }
      );

      elem.addEventListener('keydown', this);

      if (this.toggle) {
        this.toggle.addEventListener('click', this);
      }
    }

    // -------------------------------------------------------------------------
    // Helper Methods.
    // -------------------------------------------------------------------------

    /**
     * Get the instance of Nav that represents the top level nav of this
     * instance.
     *
     * @return {Nav}
     */
    getTopNav() {
      let nav = this;
      while (nav.elem instanceof NavItem) {
        // If nav is the main nav, nav.elem will be an HTMLElement
        // (the <nav> element).
        // If nav.elem is a NavItem, then this is a subNav, so get the Nav that
        // contains the NavItem.
        nav = nav.elem.nav;
      }
      return nav;
    }

    /**
     * Get the instance of Nav that represents the parent of this instance.
     * If this is the top nav, return this so you can safely call methods on it.
     *
     * @return {Nav}
     */
    getParentNav() {
      return this.isSubNav() ? this.elem.nav : this;
    }


    /**
     * Is this expanded?
     * If this is a subnav, ask the subnav (NavItem) if it's expanded.
     * Otherwise (this is the top nav), check aria-expanded.
     *
     * @return {Boolean}
     */
    isExpanded() {

      if (this.elem instanceof NavItem) {
        return this.elem.isExpanded();
      }

      return this.elem.getAttribute('aria-expanded') === 'true';
    }

    /**
     * Set whether or not this is expanded.
     * If this is a subnav, let the subnav (NavItem) handled it.
     * Otherwise (this is the top nav), set aria-expanded.
     *
     * @param {String} value - What to set the aria-expanded attribute of
     *                         this's link to.
     */
    setExpanded(value) {
      if (this.elem instanceof NavItem) {
        this.elem.setExpanded(value);
      }
      else {
        this.elem.setAttribute('aria-expanded', value);
        if (this.toggle) {
          this.toggle.setAttribute('aria-expanded', value);
        }
      }
    }

    /**
     * Is this rendering the desktop style for the nav?
     * @return {Boolean}
     */
    isDesktopNav() {
      return getComputedStyle(this.topNav.toggle).display === 'none';
    }

    /**
     * Is this the top nav?
     * @return {Boolean}
     */
    isTopNav() {
      return this.topNav === this;
    }

    /**
     * Is this a subnav?
     * @return {Boolean}
     */
    isSubNav() {
      return this.topNav !== this;
    }

    /**
     * Get the first item in this nav.
     * @return {NavItem}
     */
    getFirstItem() {
      return this.items.length ? this.items[0] : null;
    }

    /**
     * Get the last item in this nav.
     * @return {NavItem}
     */
    getLastItem() {
      return this.items.length ? this.items[this.items.length - 1] : null;
    }

    /**
     * Get the link associated with the first item in this nav.
     * @return {HTMLAnchorElement}
     */
    getFirstLink() {
      return this.items.length ? this.getFirstItem().link : null;
    }

    /**
     * Get the link associated with the last item in this nav.
     * @return {HTMLAnchorElement}
     */
    getLastLink() {
      return this.items.length ? this.getLastItem().link : null;
    }

    // -------------------------------------------------------------------------
    // Functional methods
    // -------------------------------------------------------------------------

    /**
     * Set the focus on the specified link in this nav.
     *
     * @param {String|Number} link - 'first' | 'last' | 'next'
     *                                | 'prev' | numerical index
     * @param {NavItem} currentItem - If link is 'next' or 'prev', currentItem
     *                                is the NavItem that next / prev is
     *                                relative to.
     */
    focusOn(link, currentItem = null) {
      var currentIndex, lastIndex = null;
      if (currentItem) {
        currentIndex = this.items.indexOf(currentItem);
        lastIndex = this.items.length - 1;
      }
      switch (link) {
        case 'first':
          this.getFirstLink().focus();
          break;

        case 'last':
          this.getLastLink().focus();
          break;

        case 'next':
          if (currentIndex === lastIndex) {
            this.getFirstLink().focus();
          }
          else {
            this.items[currentIndex + 1].link.focus();
          }
          break;

        case 'prev':
          if (currentIndex === 0) {
            this.getLastLink().focus();
          }
          else {
            this.items[currentIndex - 1].link.focus();
          }
          break;

        default:
          if (Number.isInteger(link) && link >= 0 && link < this.items.length) {
            this.items[link].link.focus();
          }
          break;
      }
    }

    /**
     * Close any mobile navs that might be open, then mark this mobile nav open.
     * Optionally force focus on the first element in the nav (for keyboard nav)
     *
     * @param {Boolean} focusOnFirst - Whether or not to also focus on the
     *                                 first element in the subnav.
     */
    openMobileNav(focusOnFirst = true) {
      closeAllMobileNavs();

      this.setExpanded('true');
      this.toggle.innerText = 'Close';
      if (focusOnFirst) {
        this.focusOn('first'); // Focus on the first top level link
      }
    };

    /**
     * Mark this mobile closed, and restore the button text to what it was
     * initially.
     */
    closeMobileNav() {
      this.setExpanded('false');
      this.toggle.innerText = this.toggleText;
    };

    // -------------------------------------------------------------------------
    // Event handlers
    // -------------------------------------------------------------------------

    /**
     * Handler for all events attached to an instance of this class. This method
     * must exist when events are bound to an instance of a class
     * (vs a function). This method is called for all events bound to an
     * instance. It inspects the instance (this) for an appropriate handler
     * based on the event type. If found, it dispatches the event to the
     * appropriate handler.
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     *
     * @return {*}
     *  Whatever the dispatched handler returns (in our case nothing)
     */
    handleEvent(event) {
      event = event || window.event;
      // If this class has an onEvent method, e.g. onClick, onKeydown,
      // invoke it.
      const handler = 'on'
        + event.type.charAt(0).toUpperCase()
        + event.type.slice(1);

      if (typeof this[handler] === 'function') {
        // The element that was clicked.
        const target = event.target || event.srcElement;
        return this[handler](event, target);
      }
    }

    /**
     * Handler for click events. click is only bound to the mobile toggle.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event   - The keyboard event object.
     * @param {HTMLElement}   target  - The HTML Element target object.
     */
    onClick(event, target) {
      if (target === this.toggle) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isExpanded()) {
          this.closeMobileNav();
        }
        else {
          this.openMobileNav(false);
        }
      }
    }

    /**
     * Handler for keydown events. keydown is bound to all Nav's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event   - The keyboard event object.
     * @param {HTMLElement}   target  - The HTML Element target object.
     */
    onKeydown(event, target) {
      const theKey  = event.key || event.keyCode;

      if (isEsc(theKey)) {
        if (this.isTopNav()) {
          if (!this.isDesktopNav()) {
            event.preventDefault();
            event.stopPropagation();
            this.closeMobileNav();
            this.toggle.focus();
          }
        }
        else {
          if (this.isExpanded()) {
            event.preventDefault();
            event.stopPropagation();
            this.elem.closeSubNav(true);
          }
        }
      }
      else if (isEnter(theKey) || isSpace(theKey)) {
        if (target === this.toggle) {
          event.preventDefault();
          event.stopPropagation();
          if (!this.isExpanded()) {
            this.openMobileNav();
          }
        }
      }
    }

  }

  // ---------------------------------------------------------------------------
  // Globals.
  // ---------------------------------------------------------------------------

  // Variables.

  // All main navs.
  const navs = document.querySelectorAll('.' + navClass);
  // Global record of all main navs - used by closeAllMobileNavs.
  let theNavs = [];
  // Global record of all sub navs - used by closeAllSubNavs.
  let theSubNavs = [];

  // Functions
  const closeAllSubNavs = () => {
    theSubNavs.forEach(
      subNav => { subNav.closeSubNav(); }
    );
  };
  const closeAllMobileNavs = () => {
    theNavs.forEach(
      theNav => { theNav.closeMobileNav(); }
    );
  };


  // ---------------------------------------------------------------------------
  // Execution Code.
  // ---------------------------------------------------------------------------

  // Process each nav.
  let firstZindex;
  navs.forEach((nav, index) => {
    const theNav = new Nav(nav);
    theNavs.push(theNav);

    if (index === 0) {
      firstZindex = getComputedStyle(nav, null).zIndex;
    }
    else {
      nav.style.zIndex = firstZindex - 300 * index;
    }
  }); // navs.forEach

  // Clicking anywhere outside a nav closes all navs.
  document.addEventListener('click', event => {
    // The element that was clicked.
    const target = event.target || event.srcElement;
    // If target is not under a main nav close all navs.
    if (!target.matches('.' + navClass + ' ' + target.tagName)) {
      closeAllSubNavs();
      closeAllMobileNavs();
    }
  }, false);

}); // on DOMContentLoaded.
