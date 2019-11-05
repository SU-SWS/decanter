import SecondarySubNavAccordion from '../../secondary-nav/accordion/SecondarySubNavAccordion';
import OnArrowRightHorizontal from './events/OnArrowRightHorizontal';

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
    var registryDefaults = Object.assign(registryDefaults, {
      onKeydownArrowRight: OnArrowRightHorizontal
    });

    return registryDefaults;
  }

}
