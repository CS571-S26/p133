import { ListGroup, Button } from "react-bootstrap";

function OptionItem(props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between 
align-items-center">
      <span>{props.option}</span>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => props.onDelete(props.option)}
      >
        Remove
      </Button>
    </ListGroup.Item>
  );
}

export default OptionItem;
