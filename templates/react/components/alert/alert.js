const Alert = (props) => (
  <div className="su-alert su-alert--warning">
    <div className="su-alert__body">
      {props.deprecated ? <h4>This component has been deprecated.</h4> : null }
      {props.experimental ? <h4>This component has experimental features.</h4> : null }
      {props.msg}
    </div>
  </div>
);

export default Alert;
