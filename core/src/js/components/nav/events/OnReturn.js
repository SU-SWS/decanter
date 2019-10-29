import EventAbstract from './EventAbstract';

/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class OnReturn extends EventAbstract {

  constructor() {
    super();
    this.hello = "return was called";
  }

}
