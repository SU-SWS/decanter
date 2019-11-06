import SecondarySubNavAccordion from '../../secondary-nav/accordion/SecondarySubNavAccordion';
import OnArrowRightLV1 from './events/OnArrowRightLV1';
import OnArrowDownLV1 from './events/OnArrowDownLV1';
import OnArrowLeftLV2 from './events/OnArrowLeftLV2';

/**
 * SecondarySubNavAccordion Class
 *
 * A sub menu class for creating a menu with accordion functionality.
 */
export default class MultiSubNavAccordion extends SecondarySubNavAccordion {

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

    var registryDefaults = super.createEventRegistry(options);

    // If we are the first level (top) we need to adjust for mobile vs desktop.
    if (this.getDepth() === 1) {
      registryDefaults = Object.assign(registryDefaults, {
        onKeydownArrowRight: OnArrowRightLV1,
        onKeydownArrowDown: OnArrowDownLV1
      });
    }

    if (this.getDepth() === 2) {
      registryDefaults = Object.assign(registryDefaults, {
        onKeydownArrowLeft: OnArrowLeftLV2
      });
    }

    return registryDefaults;
  }

}
