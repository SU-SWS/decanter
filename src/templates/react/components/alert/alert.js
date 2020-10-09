const Alert = (props) => (
  <div className="su-alert su-alert--warning">
    <div className="su-alert__body">
      {props.msg}
    </div>
  </div>
);

export default Alert;
