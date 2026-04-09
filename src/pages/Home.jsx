import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import OptionList from "../components/OptionList";

function Home() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState("");

  function addOption() {
    if (input.trim() !== "") {
      setOptions([...options, input]);
      setInput("");
    }
  }

  function pickRandom() {
    if (options.length > 0) {
      const randomOption = options[Math.floor(Math.random() * 
options.length)];
      setResult(randomOption);
    }
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <h1>Random Decision Maker</h1>
      <p>Enter your options and let the website choose for you.</p>

      <Form.Control
        type="text"
        placeholder="Enter an option"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <Button onClick={addOption} style={{ marginRight: "10px" }}>
        Add Option
      </Button>

      <Button onClick={pickRandom}>
        Pick for Me
      </Button>

      <h3 style={{ marginTop: "20px" }}>Options:</h3>
      <OptionList options={options} />

      <h2 style={{ marginTop: "20px" }}>Result: {result}</h2>
    </Container>
  );
}

export default Home;
