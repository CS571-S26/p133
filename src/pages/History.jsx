import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import HistoryList from "../components/HistoryList";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("decisionHistory")) || [];
    setHistory(savedHistory);
  }, []);

  function clearHistory() {
    localStorage.setItem("decisionHistory", JSON.stringify([]));
    setHistory([]);
  }

  return (
    <Container className="py-5">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <h1 className="mb-1">Decision History</h1>
              <p className="text-muted mb-0">
                View your previous random choices and clear them when needed.
              </p>
            </Col>
            <Col xs="auto">
              <Button
                variant="outline-danger"
                onClick={clearHistory}
                disabled={history.length === 0}
              >
                Clear History
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <HistoryList history={history} />
    </Container>
  );
}

export default History;