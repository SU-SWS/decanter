/**
 * [mainEvents description]
 * @return {[type]} [description]
 */
export const mainEvents = () => {
  return {
    SubNavItem: {
      1: {
        onKeydownArrowRight: function (event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowRight(event, instance.link);
          }
          else {
            instance.onKeydownArrowDown(event, instance.link);
          }

        },
        onKeydownArrowDown: function (event, instance) {
          // Only change the behaviour when in desktop mode. If not in desktop
          // mode go with the default.
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowDown(event, instance.link);
          }
          else {
            instance.onKeydownArrowRight(event, instance.link);
          }
        }
      }
    }
  };
};
