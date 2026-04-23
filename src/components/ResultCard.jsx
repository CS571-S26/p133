import { Card, Button } from "react-bootstrap";

function ResultCard(props) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>Result</Card.Title>

        {props.isPicking ? (
          <p className="result-text text-primary">Choosing...</p>
        ) : props.result ? (
          <p className="result-text">{props.result}</p>
        ) : (
          <p className="text-muted">Your random choice will appear 
here.</p>
        )}

        <div className="d-grid">
          <Button
            onClick={props.onPick}
            disabled={props.options.length === 0 || props.isPicking}
          >
            Pick for Me
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResultCard;
