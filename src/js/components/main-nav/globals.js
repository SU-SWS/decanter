// ---------------------------------------------------------------------------
// Global variables and functions shared amongst the nav code
// ---------------------------------------------------------------------------

// Variables

/**
 *  Global record of all main navs on the page
 *  - populated in the document.ready function in main-nav.js
 *  - used by closeAllMobileNavs
 * @type {Array}
 */
export var theNavs = [];

/**
 *  Global record of all sub navs on the page (may be in different main navs
 *  - populated by the NavItem constructor
 *  - used by closeAllSubNavs
 * @type {Array}
 */
export var theSubNavs = [];

// Functions

/**
 * Close all subnavs on the page
 */
export const closeAllSubNavs = () => {
  theSubNavs.forEach(
    subNav => { subNav.closeSubNav(); }
  );
};

/**
 * Close all mobile navs on the page
 */
export const closeAllMobileNavs = () => {
  theNavs.forEach(
    theNav => { theNav.closeMobileNav(); }
  );
};
