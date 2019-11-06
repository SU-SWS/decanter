import SecondarySubNavButtons from '../../secondary-nav/buttons/SecondarySubNavButtons';
import OnArrowRightToggleLV1 from './events/OnArrowRightToggleLV1';
import OnArrowLeftLV1 from './events/OnArrowLeftLV1';
import OnArrowDownToggleLV1 from './events/OnArrowDownToggleLV1';

/**
 * SecondarySubNavAccordion Class
 *
 * A sub menu class for creating a menu with accordion functionality.
 */
export default class MultiSubNavButtons extends SecondarySubNavButtons {

  /**
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {

    var registryDefaults = super.createEventRegistry({});

    // If we are the first level (top) we need to adjust for mobile vs desktop.
    if (this.getDepth() == 1) {
      registryDefaults = Object.assign(registryDefaults, {
        onKeydownArrowLeft: OnArrowLeftLV1
      });
    }

    // if (this.getDepth() == 2) {
    //   registryDefaults = Object.assign(registryDefaults, {
    //     onKeydownArrowLeft: OnArrowLeftLV2
    //   });
    // }

    return registryDefaults;
  }

  /**
   * Initialize the toggle button.
   */
  initToggleButton() {
    var options = this.options;

    // Overrides for level 1 desktop.
    if (this.getDepth() === 1) {
      options.eventRegistry = Object.assign(options.eventRegistry, {
        onKeydownArrowRight: OnArrowRightToggleLV1,
        onKeydownArrowDown: OnArrowDownToggleLV1,
      });
    }

    // Do eet.
    super.initToggleButton(options);
  }

}
