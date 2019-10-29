import EventHandlerDispatch from '../../nav/EventHandlerDispatch';

// Keyboard control events.
import OnArrowDown from './events/OnArrowDown';
import OnArrowLeft from './events/OnArrowLeft';
import OnArrowRight from './events/OnArrowRight';
import OnArrowUp from './events/OnArrowUp';
import OnEnd from './events/OnEnd';
import OnEsc from './events/OnEsc';
import OnHome from './events/OnHome';
import OnEnter from './events/OnEnter';
import OnSpace from './events/OnSpace';
import OnTab from './events/OnTab';

/**
 * SecondaryNav Class
 */
export default class SecondaryNavItem {

   /**
    * [constructor description]
    * @param {[type]} element      [description]
    * @param {Object} [options={}] [description]
    */
   constructor(element, masterNav, parentNav = null, options = {}) {
     this.elem = element;
     this.item = element.parentNode;
     this.masterNav = masterNav;
     this.parentNav = parentNav;
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
       onKeydownEnter: OnEnter,
       onKeydownEscape: OnEsc,
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
