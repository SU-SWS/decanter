import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import OnHome from './events/OnHome';
import OnEnd from './events/OnEnd';
import OnTab from './events/OnTab';
import OnSpace from './events/OnSpace';
import OnArrowUp from './events/OnArrowUp';
import OnArrowRight from './events/OnArrowRight';
import OnArrowDown from './events/OnArrowDown';
import OnArrowLeft from './events/OnArrowLeft';
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
     this.depth = options.depth || 1;

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

   /**
    * [getDepth description]
    * @return {[type]} [description]
    */
   getDepth() {
     return this.depth;
   }

}
