import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import OptionForm from "../components/OptionForm";
import OptionList from "../components/OptionList";
import ResultCard from "../components/ResultCard";
import AlertMessage from "../components/AlertMessage";

function Home() {
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("danger");
  const [isPicking, setIsPicking] = useState(false);

  useEffect(() => {
    const savedOptions = localStorage.getItem("decisionOptions");
    const savedHistory = localStorage.getItem("decisionHistory");

    if (savedOptions) {
      setOptions(JSON.parse(savedOptions));
    }

    if (!savedHistory) {
      localStorage.setItem("decisionHistory", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("decisionOptions", JSON.stringify(options));
  }, [options]);

  function showMessage(text, variant) {
    setMessage(text);
    setMessageType(variant);
  }

  function addOption(newOption) {
    const trimmedOption = newOption.trim();

    if (trimmedOption === "") {
      showMessage("Please enter an option before adding.", "danger");
      return;
    }

    if (options.includes(trimmedOption)) {
      showMessage("That option already exists.", "warning");
      return;
    }

    const updatedOptions = [...options, trimmedOption];
    setOptions(updatedOptions);
    setMessage("");
  }

  function deleteOption(optionToDelete) {
    const updatedOptions = options.filter((option) => option !== optionToDelete);
    setOptions(updatedOptions);

    if (result === optionToDelete) {
      setResult("");
    }
  }

  function clearOptions() {
    setOptions([]);
    setResult("");
    setMessage("");
    localStorage.setItem("decisionOptions", JSON.stringify([]));
  }

  function pickRandomOption() {
    if (options.length === 0) {
      showMessage("Add at least one option first.", "danger");
      return;
    }

    setIsPicking(true);
    setResult("");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const chosenOption = options[randomIndex];

      setResult(chosenOption);
      setIsPicking(false);
      setMessage("");

      const oldHistory = JSON.parse(localStorage.getItem("decisionHistory")) || [];
      const newHistory = [chosenOption, ...oldHistory];
      localStorage.setItem("decisionHistory", JSON.stringify(newHistory));
    }, 1000);
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col lg={10}>
          <Card className="hero-card shadow-sm">
            <Card.Body>
              <h1 className="display-4 fw-bold">Random Decision Maker</h1>
              <p className="lead mb-0">
                Enter your options and let the website choose for you.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col lg={10}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Add an Option</Card.Title>
              <OptionForm onAddOption={addOption} />
              <AlertMessage message={message} variant={messageType} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center g-4">
        <Col lg={5}>
          <OptionList
            options={options}
            onDeleteOption={deleteOption}
            onClearOptions={clearOptions}
          />
        </Col>

        <Col lg={5}>
          <ResultCard
            result={result}
            options={options}
            onPick={pickRandomOption}
            isPicking={isPicking}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;