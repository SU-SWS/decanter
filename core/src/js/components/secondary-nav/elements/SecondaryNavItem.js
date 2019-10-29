import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import OnHome from '../../nav/events/OnHome';
import OnEnd from '../../nav/events/OnEnd';
import OnTab from '../../nav/events/OnTab';
import OnSpace from '../../nav/events/OnSpace';
import OnArrowUp from '../../nav/events/OnArrowUp';
import OnArrowRight from '../../nav/events/OnArrowRight';
import OnArrowDown from '../../nav/events/OnArrowDown';
import OnArrowLeft from '../../nav/events/OnArrowLeft';
/**
 * SecondaryNav Class
 */
export default class SecondaryNavItem {

   /**
    * [constructor description]
    * @param {[type]} element      [description]
    * @param {Object} [options={}] [description]
    */
   constructor(element, nav, options = {}) {
     this.elem = element;
     this.item = element.parentNode;
     this.nav = nav;

     // Assign the event dispatcher and event registry.
     this.eventRegistry = this.createEventRegistry(options);
     this.dispatch = new EventHandlerDispatch(element, this);
   }

   /**
    * Creates an event registry for handling types of events.
    * @return {[type]} [description]
    */
   createEventRegistry(options) {

     var registryDefaults = {
       onKeydownHome: OnHome,
       onKeydownEnd: OnEnd,
       onKeydownTab: OnTab,
       onKeydownSpace: OnSpace,
       onKeydownArrowUp: OnArrowUp,
       onKeydownArrowRight: OnArrowRight,
       onKeydownArrowDown: OnArrowDown,
       onKeydownArrowLeft: OnArrowLeft,
     };

     return Object.assign(registryDefaults, options.eventRegistry);
   }

}
