import SecondaryNavItem from '../../secondary-nav/common/SecondaryNavItem';
import OnArrowLeftLV2 from './events/OnArrowLeftLV2';

/**
 * SecondarySubNavAccordion Class
 *
 * A sub menu class for creating a menu with accordion functionality.
 */
export default class MultiNavItem extends SecondaryNavItem {

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

    if (this.getDepth() == 2) {
      registryDefaults = Object.assign(registryDefaults, {
        onKeydownArrowLeft: OnArrowLeftLV2
      });
    }

    return registryDefaults;
  }

}
