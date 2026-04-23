import { Card, ListGroup, Button } from "react-bootstrap";
import OptionItem from "./OptionItem";

function OptionList(props) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>Options</Card.Title>

        {props.options.length === 0 ? (
          <p className="text-muted mb-3">No options added yet.</p>
        ) : (
          <ListGroup className="mb-3">
            {props.options.map((option, index) => (
              <OptionItem
                key={index}
                option={option}
                onDelete={props.onDeleteOption}
              />
            ))}
          </ListGroup>
        )}

        <div className="d-grid">
          <Button
            variant="outline-secondary"
            onClick={props.onClearOptions}
            disabled={props.options.length === 0}
          >
            Clear All
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OptionList;