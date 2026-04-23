import { Container, Card, ListGroup } from "react-bootstrap";

function HowItWorks() {
  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Body>
          <h1 className="mb-3">How It Works</h1>
          <p>
            This website helps users make quick decisions by randomly selecting
            one option from a list they create.
          </p>

          <ListGroup className="mt-3">
            <ListGroup.Item>Type an option into the input box.</ListGroup.Item>
            <ListGroup.Item>Click Add Option to save it to the list.</ListGroup.Item>
            <ListGroup.Item>Add as many choices as you want.</ListGroup.Item>
            <ListGroup.Item>Click Pick for Me to get a random result.</ListGroup.Item>
            <ListGroup.Item>Your choices and history are saved in the browser.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HowItWorks;