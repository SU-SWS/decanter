// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

document.addEventListener("DOMContentLoaded", event => {

  // The css class that this following behaviour is applied to.
  const navClass = 'su-main-nav';

  //////
  // Keyboard helper functions
  const isHome = theKey => ( theKey === 'Home' || theKey === 122 );
  const isEnd = theKey => ( theKey === 'End' || theKey === 123 );
  const isTab = theKey => ( theKey === 'Tab' || theKey === 9 );
  const isEsc = theKey => ( theKey === 'Escape' || theKey === 'Esc' || theKey === 27 );
  const isSpace = theKey => ( theKey === ' ' || theKey === 'Spacebar' || theKey === 32 );
  const isEnter = theKey => ( theKey === 'Enter' || theKey === 13 );
  const isLeftArrow = theKey => ( theKey === 'ArrowLeft' || theKey === 'Left' || theKey === 37 );
  const isRightArrow = theKey => ( theKey === 'ArrowRight' || theKey === 'Right' || theKey === 39 );
  const isUpArrow = theKey => ( theKey === 'ArrowUp' || theKey === 'Up' || theKey === 38 );
  const isDownArrow = theKey => ( theKey === 'ArrowDown' || theKey === 'Down' || theKey === 40 );

  //////
  // Helper classes

  /**
   * Represent an item in a navigation menu. May be a direct link or a subnav trigger.
   *
   * @property {HTMLLIElement}   item   - the <li> in the DOM that is the NavItem
   * @property {HTMLElement|Nav} nav    - the Nav that contains the element. May be a main nav (<nav>) or a subnav (Nav).
   * @property {HTMLLIElement}   link   - the <a> in the DOM that is contained in item (the <li>)
   * @property {Nav}             subNav - if item is the trigger for a subnav, this is an instonce Nav that models the subnav
   */
  class NavItem {
    /**
     * Create a NavItem
     * @param {HTMLLIElement} item - the <li> that is the NavItem in the DOM
     * @param {HTMLElement|Nav} nav - the Nav that contains the element. May be a main nav (<nav>) or a subnav (Nav).
     */
    constructor( item, nav ) {
      this.item = item;
      this.nav = nav;
      this.link = this.item.querySelector( 'a' );
      this.subNav = null;

      this.item.addEventListener( 'keydown', this );

      if ( this.isSubNavTrigger() ) {
        this.subNav = new Nav( this );
        theSubNavs.push( this ); // maintain globsl list of subnavs for closeAllSubNavs()
        this.item.addEventListener( 'click', this );
      }
    }

    /********************
     * Helper methods
     ********************/

    /**
     * is this the first item in the containing Nav?
     * @returns {Boolean}
     */
    isFirstItem() { return this.nav.items.indexOf( this ) === 0; }

    /**
     * is this the last item in the containing Nav?
     * @returns {Boolean}
     */
    isLastItem() { return this.nav.items.indexOf( this ) === ( this.nav.items.length - 1 ); }

    /**
     * is this a trigger that opens / closes a subnav?
     * @returns {Boolean}
     */
    isSubNavTrigger() { return this.item.lastElementChild.tagName.toUpperCase() === 'UL'; }

    /**
     * is this a component of a subnav - either the trigger or a nav item?
     * @returns {Boolean}
     */
    isSubNavItem() { return ( this.isSubNavTrigger() || this.nav.isSubNav() ); }

    /**
     * is this expanded? Can only return TRUE if this is a subnav trigger.
     * @returns {Boolean}
     */
    isExpanded() { return this.link.getAttribute( 'aria-expanded' ) === 'true'; }

    /**
     * Set whether or not this is expanded. Only meaningful if this is a subnav trigger.
     * @param {String} value - what to set the aria-expanded attribute of this's link to
     */
    setExpanded( value ) { this.link.setAttribute( 'aria-expanded', value ); }

    /********************
     * Functional methods
     ********************/

    /**
     * If this is a subnav trigger, open the corresponding subnav.
     * Optionally force focus on the first element in the subnav (for keyboard nav).
     *
     * @param {Boolean} focusOnFirst - whether or not to also focus on the first element in the subnav
     */
    openSubNav( focusOnFirst = true ) {
      closeAllSubNavs();

      if ( this.isSubNavTrigger() ) {
        this.item.classList.add( 'su-main-nav__item--expanded' );
        this.setExpanded( 'true' );
        if ( focusOnFirst ) {
          this.subNav.focusOn( 'first' );
        }
      }
    };

    /**
     * If this is a subnav trigger or an item in a subnav, close the corresponding subnav.
     * Optionally force focus on the trigger.
     *
     * @param {Boolean} focusOnFirst - whether or not to also focus on the subnav's trigger
     */
    closeSubNav( focusOnTrigger = false ) {
      if ( this.isSubNavTrigger() ) {
        this.item.classList.remove( 'su-main-nav__item--expanded' );
        this.setExpanded( 'false' );
        if ( focusOnTrigger ) {
          this.link.focus();
        }
      }
      else if ( this.isSubNavItem() ) {
        this.nav.elem.closeSubNav( focusOnTrigger ); // this.nav.elem should be a subNavTrigger
      }
    };

    /********************
     * Event handlers
     ********************/

    /**
     * Handler for all events attached to an instance of this class. This method must exist when events are bound
     * to an instance of a class (vs a function). This method is called for all events bound to an instance. It
     * inspects the instance (this) for an appropriate handler based on the event type. If found, it dispatches
     * the event to the appropriate handler.
     *
     * @param {KeyboardEvent} event
     * @returns {*} whatever the dispatched handler returns (in our case nothing)
     */
    handleEvent( event ) {
      event = event || window.event;
      // if this class has an onEvent method, e.g. onClick, onKeydown, invoke it
      const handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);
      if ( typeof this[ handler ] === 'function' ) {
        const target = event.target || event.srcElement; // the element that was clicked
        return this[ handler ]( event, target );
      }
    }

    /**
     * Handler for keydown events. keydown is bound to all NavItem's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event
     * @param {HTMLElement} target
     */
    onKeydown( event, target ) {
      const theKey  = event.key || event.keyCode;

      if ( isSpace( theKey ) || isEnter( theKey ) ) {
        event.preventDefault();
        event.stopPropagation();
        if ( this.isSubNavTrigger() ) {
          this.openSubNav();
        }
        else {
          window.location = this.link;
        }
      }
      else if ( isDownArrow( theKey ) ) {
        event.preventDefault();
        event.stopPropagation();
        if ( this.nav.isDesktopNav() ) {
          if ( this.isSubNavTrigger() ) {
            this.openSubNav();
          } else {
            this.nav.focusOn( 'next', this );
          }
        }
        else {
          this.nav.focusOn( 'next', this );
        }
      }
      else if ( isUpArrow( theKey ) ) {
        event.preventDefault();
        event.stopPropagation();
        this.nav.focusOn( 'prev', this );
      }
      else if ( isLeftArrow( theKey ) ) {
        event.preventDefault();
        event.stopPropagation();
        if ( this.nav.isDesktopNav() ) {
          if ( this.nav.isSubNav() ) {
            this.closeSubNav();
            let parent = this.nav.getParentNav();
            parent.focusOn( 'prev', this.nav.elem ); // focus on the previous item in the parent nav
          }
          else {
            this.nav.focusOn('prev', this);
          }
        }
        else {
          if ( this.isSubNavItem() ) {
            this.closeSubNav( true ); // close the subnav and put the focus on the trigger
          }
        }
      }
      else if ( isRightArrow( theKey ) ) {
        event.preventDefault();
        event.stopPropagation();
        if ( this.nav.isDesktopNav() ) {
          if ( this.nav.isSubNav() ) {
            this.closeSubNav();
            let parent = this.nav.getParentNav();
            parent.focusOn( 'next', this.nav.elem ); // focus on the next item in the parent nav
          }
          else {
            this.nav.focusOn( 'next', this );
          }
        }
        else {
          if ( this.isSubNavTrigger() ) {
            this.openSubNav();
          }
        }
      }
      else if ( isHome( theKey ) ) {
        this.nav.focusOn( 'first' );
      }
      else if ( isEnd( theKey ) ) {
        this.nav.focusOn( 'last' );
      }
      else if ( isTab( theKey ) ) {
        event.stopPropagation();
        const shifted = event.shiftKey;
        if ( this.isSubNavItem() && ( ( !shifted && this.isLastItem() ) || ( shifted && this.isFirstItem() ) ) ) {
          this.closeSubNav( true );
        }
      }
    }

    /**
     * Handler for click events.
     * Dispatched from this.handleEvent().
     *
     * click is only bound to subnav triggers. However, click bubbles up from subnav items to the trigger.
     *
     * @param {KeyboardEvent} event
     * @param {HTMLElement} target
     */
    onClick( event, target ) {
      if ( this.isExpanded() ) {
        this.closeSubNav();
      }
      else {
        this.openSubNav( false );
      }
      if ( target == this.link ) { // if the click is directly on the trigger, then we're done
        event.preventDefault();
        event.stopPropagation();
      }
    }

  }

  /** Represent a navigation menu, either top level or nested. */
  /**
   * Represent a navigation menu. May be the top nav or a subnav.
   *
   * @property {HTMLElement|NavItem} elem       - the element that is the nav. May be a main nav (<nav>) or a subnav (NavItem).
   * @property {Nav}                 topNav     - the instance of Nav that models the top nav. If this is the top nav, topNav === this.
   * @property {HTMLButtonElement}   toggle     - the <button> in the DOM that toggles the menu on mobile. NULL if this is a subnav.
   * @property {String}              toggleText - the initial text of the mobile toggle (so we can reset it when the mobile nav is closed)
   * @property {Array}               items      - instances of NavItem that model each element in the nav
   */
  class Nav {
    /**
     * Create a Nav
     *
     * @param {HTMLElement|NavItem} elem - the element that is the nav menu. May be a main nav (<nav>) or a subnav (NavItem).
     */
    constructor( elem ) {
      this.elem = elem;
      this.topNav = this.getTopNav();
      if ( elem instanceof NavItem ) elem = elem.item; // if this is a subnav, we need the correpsonding HTMLElement for .querySelector()
      this.toggle = elem.querySelector( elem.tagName + " > button" );
      this.toggleText = this.toggle ? this.toggle.innerText : '';
      this.items = [];
      let items = elem.querySelectorAll( elem.tagName + " > ul > li" );
      items.forEach( item => { this.items.push( new NavItem( item, this ) ); } );

      elem.addEventListener( 'keydown', this );

      if ( this.toggle ) {
        this.toggle.addEventListener( 'click', this );
      }
    }

    /********************
     * Helper methods
     ********************/

    /**
     * Get the instance of Nav that represents the top level nav of this instance.
     *
     * @returns {Nav}
     */
    getTopNav() {
      let nav = this;
      while ( nav.elem instanceof NavItem ) {
        // if nav is the main nav, nav.elem will be an HTMLElement (the <nav> element)
        // if nav.elem is a NavItem, then this is a subNav, so get the Nav that contains the NavItem
        nav = nav.elem.nav;
      }
      return nav;
    }

    /**
     * Get the instance of Nav that represents the parent of this instance.
     * If this is the top nav, return this so you can safely call methods on it.
     *
     * @returns {Nav}
     */
    getParentNav() { return this.isSubNav() ? this.elem.nav : this; }


    /**
     * Is this expanded?
     * If this is a subnav, ask the subnav (NavItem) if it's expanded.
     * Otherwise (this is the top nav), check aria-expanded.
     *
     * @returns {Boolean}
     */
    isExpanded() { return this.elem instanceof NavItem ? this.elem.isExpanded() : this.elem.getAttribute( 'aria-expanded' ) === 'true'; }

    /**
     * Set whether or not this is expanded.
     * If this is a subnav, let the subnav (NavItem) handled it.
     * Otherwise (this is the top nav), set aria-expanded.
     *
     * @param {String} value - what to set the aria-expanded attribute of this's link to
     */
    setExpanded( value ) {
      if ( this.elem instanceof NavItem ) {
        this.elem.setExpanded( value );
      }
      else {
        this.elem.setAttribute( 'aria-expanded', value );
        if ( this.toggle ) this.toggle.setAttribute( 'aria-expanded', value );
      }
    }

    /**
     * Is this rendering the desktop style for the nav?
     * @return {Boolean}
     */
    isDesktopNav() { return getComputedStyle( this.topNav.toggle ).display === 'none'; }

    /**
     * Is this the top nav?
     * @return {Boolean}
     */
    isTopNav() { return this.topNav === this; }

    /**
     * Is this a subnav?
     * @return {Boolean}
     */
    isSubNav() { return this.topNav !== this; }

    /**
     * Get the first item in this nav.
     * @return {NavItem}
     */
    getFirstItem() { return this.items.length ? this.items[ 0 ] : null; }

    /**
     * Get the last item in this nav.
     * @return {NavItem}
     */
    getLastItem() { return this.items.length ? this.items[ this.items.length - 1 ] : null; }

    /**
     * Get the link associated with the first item in this nav.
     * @return {HTMLAnchorElement}
     */
    getFirstLink() { return this.items.length ? this.getFirstItem().link : null; }

    /**
     * Get the link associated with the last item in this nav.
     * @return {HTMLAnchorElement}
     */
    getLastLink() { return this.items.length ? this.getLastItem().link : null; }

    /********************
     * Functional methods
     ********************/

    /**
     * Set the focus on the specified link in this nav.
     *
     * @param {String|Number} link - 'first' | 'last' | 'next' | 'prev' | numerical index
     * @param {NavItem} currentItem - if link is 'next' or 'prev', currentItem is the NavItem that next / prev is relative to
     */
    focusOn( link, currentItem = null ) {
      var currentIndex, lastIndex = null;
      if ( currentItem ) {
        currentIndex = this.items.indexOf( currentItem );
        lastIndex = this.items.length - 1;
      }
      switch ( link ) {
        case 'first':
          this.getFirstLink().focus();
          break;
        case 'last':
          this.getLastLink().focus();
          break;
        case 'next':
          if ( currentIndex === lastIndex ) {
            this.getFirstLink().focus();
          }
          else {
            this.items[ currentIndex + 1 ].link.focus();
          }
          break;
        case 'prev':
          if ( currentIndex === 0 ) {
            this.getLastLink().focus();
          }
          else {
            this.items[ currentIndex - 1 ].link.focus();
          }
          break;
        default:
          if ( Number.isInteger( link ) && link >= 0 && link < this.items.length ) {
            this.items[ link ].link.focus();
          }
          break;
      }
    }

    /**
     * Close any mobile navs that might be open, then mark this mobile nav open.
     * Optionally force focus on the first element in the nav (for keyboard nav).
     *
     * @param {Boolean} focusOnFirst - whether or not to also focus on the first element in the subnav
     */
    openMobileNav( focusOnFirst = true ) {
      closeAllMobileNavs();

      this.setExpanded( 'true' );
      this.toggle.innerText = 'Close';
      if ( focusOnFirst ) {
        this.focusOn( 'first' ); // Focus on the first top level link
      }
    };

    /**
     * Mark this mobile closed, and restore the button text to what it was initially
     */
    closeMobileNav() {
      this.setExpanded( 'false' );
      this.toggle.innerText = this.toggleText;
    };

    // Event handlers

    /**
     * Handler for all events attached to an instance of this class. This method must exist when events are bound
     * to an instance of a class (vs a function). This method is called for all events bound to an instance. It
     * inspects the instance (this) for an appropriate handler based on the event type. If found, it dispatches
     * the event to the appropriate handler.
     *
     * @param {KeyboardEvent} event
     * @returns {*} whatever the dispatched handler returns (in our case nothing)
     */
    handleEvent( event ) {
      event = event || window.event;
      // if this class has an onEvent method, e.g. onClick, onKeydown, invoke it
      const handler = 'on' + event.type.charAt(0).toUpperCase() + event.type.slice(1);
      if ( typeof this[ handler ] === 'function' ) {
        const target = event.target || event.srcElement; // the element that was clicked
        return this[ handler ]( event, target );
      }
    }

    /**
     * Handler for click events. click is only bound to the mobile toggle.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event
     * @param {HTMLElement} target
     */
    onClick( event, target ) {
      if ( target == this.toggle ) {
        event.preventDefault();
        event.stopPropagation();
        if ( this.isExpanded() ) {
          this.closeMobileNav();
        }
        else {
          this.openMobileNav( false );
        }
      }
    }

    /**
     * Handler for keydown events. keydown is bound to all Nav's.
     * Dispatched from this.handleEvent().
     *
     * @param {KeyboardEvent} event
     * @param {HTMLElement} target
     */
    onKeydown( event, target ) {
      const theKey  = event.key || event.keyCode;
      const shifted = event.shiftKey;

      if ( isEsc( theKey ) ) {
        if ( this.isTopNav() ) {
          if ( !this.isDesktopNav() ) {
            event.preventDefault();
            event.stopPropagation();
            this.closeMobileNav();
            this.toggle.focus();
          }
        }
        else {
          if ( this.isExpanded() ) {
            event.preventDefault();
            event.stopPropagation();
            this.elem.closeSubNav( true );
          }
        }
      }
      else if ( isEnter( theKey ) || isSpace( theKey ) ) {
        if ( target == this.toggle ) {
          event.preventDefault();
          event.stopPropagation();
          if ( !this.isExpanded() ) {
            this.openMobileNav();
          }
        }
      }
    }

  }

  //////
  // Globals

  // variables
  const navs = document.querySelectorAll( '.' + navClass ); // all main navs
  let theNavs = []; // global record of all main navs - used by closeAllMobileNavs
  let theSubNavs = []; // global record of all sub navs - used by closeAllSubNavs

  // functions
  const closeAllSubNavs = () => { theSubNavs.forEach( subNav => { subNav.closeSubNav(); } ); };
  const closeAllMobileNavs = () => { theNavs.forEach( theNav => { theNav.closeMobileNav(); } ); };


  //////
  // Code (at last!)

  // process each nav
  let firstZindex;
  navs.forEach( ( nav, index ) => {
    const theNav = new Nav( nav );
    theNavs.push( theNav );

    if ( index === 0 ) {
      firstZindex = getComputedStyle( nav, null ).zIndex;
    }
    else {
      nav.style.zIndex = firstZindex - 300 * index; //
    }
  } ); // navs.forEach

  // clicking anywhere outside a nav closes all navs
  document.addEventListener('click', event => {
    const target = event.target || event.srcElement; // the element that was clicked
    if ( !target.matches( '.' + navClass + ' ' + target.tagName ) ) { // if target is not under a main nav
      closeAllSubNavs();
      closeAllMobileNavs();
    }
  }, false );

} ); // on DOMContentLoaded
