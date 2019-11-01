import SecondaryNavAbstract from '../../secondary-nav/common/SecondaryNavAbstract';
import SecondaryNavItem from '../../secondary-nav/common/SecondaryNavItem';
import SecondaryNavButtons from '../../secondary-nav/buttons/SecondaryNavButtons';
import SecondarySubNavButtons from '../../secondary-nav/buttons/SecondarySubNavButtons';

/**
 * A secondary menu with toggle buttons.
 */
export default class MultiMenuButtons extends SecondaryNavButtons {

  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem, options = {}) {
    // Set some default options.
    var defaultOptions = {
      itemClass: 'su-multi-menu__item',
      itemExpandedClass: 'su-multi-menu__item--expanded',
      itemActiveClass: 'su-multi-menu__item--current',
      itemActiveTrailClass: 'su-multi-menu__item--active-trail',
      itemParentClass: 'su-multi-menu__item--parent',
      expand: false
    };

    // Merge in defaults.
    options = Object.assign(defaultOptions, options);

    // Kick it.
    super(elem, options);
  }
}
