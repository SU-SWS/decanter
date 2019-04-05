/**
 * Create an event with the specified name in a browser-agnostic way.
 * @param string eventName
 * @return Event
 */
export const createEvent = ( eventName = '' ) => {
  if ( typeof eventName !== 'string' || eventName.length <= 0 ) return;
  if ( typeof Event == 'function' ) { // modern browsers
    return new Event( eventName );
  }
  else { // IE :(
    let ev = document.createEvent( 'UIEvent' );
    ev.initEvent( eventName, true, true );
    return ev;
  }
}
