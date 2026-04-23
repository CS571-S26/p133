import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function OptionForm(props) {
  const [optionText, setOptionText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddOption(optionText);
    setOptionText("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-2">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Enter an option"
            value={optionText}
            onChange={(event) => setOptionText(event.target.value)}
          />
        </Col>
        <Col md={4} className="d-grid">
          <Button type="submit">Add Option</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default OptionForm;
