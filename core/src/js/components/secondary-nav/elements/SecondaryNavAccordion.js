import SecondaryNav from './SecondaryNav';
import SecondarySubNavAccordion from './SecondarySubNavAccordion';
import SecondaryNavItem from './SecondaryNavItem';

/**
 * A secondary menu with toggle buttons.
 */
export default class SecondaryNavAccordion extends SecondaryNav {
  /**
   * [constructor description]
   * @param {[type]} elem         [description]
   * @param {Object} [options={}] [description]
   */
  constructor(elem, options = {}) {
    super(elem, options);
    this.createSubNavItems();
  }

  /**
   * [createSubNavItems description]
   * @return {[type]} [description]
   */
  createSubNavItems() {
    this.navItems = [];
    this.subNavItems = [];
    var parentItems = this.elem.querySelectorAll(':scope .' + this.options.itemParentClass + " > a");
    var leafItems = this.elem.querySelectorAll(':scope .' + this.options.itemClass + ":not(." + this.options.itemParentClass + ")" + " > a");

    // Sub Navigation Items.
    if (parentItems.length >= 1) {
      parentItems.forEach(
        item => {
          this.subNavItems.push(
            new SecondarySubNavAccordion(
              item,
              this,
              {
                itemExpandedClass: this.options.itemExpandedClass
              }
            )
          );
        }
      );
    }

    // Regular Ol Items.
    if (leafItems.length >= 1) {
      leafItems.forEach(
        item => {
          if (item)
          this.navItems.push(
            new SecondaryNavItem(item, this)
          );
        }
      );
    }
  }
}
