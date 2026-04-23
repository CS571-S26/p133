import { Alert } from "react-bootstrap";

function AlertMessage(props) {
  if (!props.message) {
    return null;
  }

  return (
    <Alert variant={props.variant || "danger"} className="mt-3">
      {props.message}
    </Alert>
  );
}

export default AlertMessage;
