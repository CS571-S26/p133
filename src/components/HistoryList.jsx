import { Card, ListGroup } from "react-bootstrap";

function HistoryList(props) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Previous Decisions</Card.Title>

        {props.history.length === 0 ? (
          <p className="text-muted mb-0">No decisions have been made 
yet.</p>
        ) : (
          <ListGroup>
            {props.history.map((item, index) => (
              <ListGroup.Item key={index}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default HistoryList;
