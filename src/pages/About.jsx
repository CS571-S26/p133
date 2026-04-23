import { Container, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Body>
          <h1 className="mb-3">About This Project</h1>
          <p>
            Random Decision Maker is a simple website that helps users choose
            between multiple options when they are unsure what to pick.
          </p>
          <p>
            The goal of this project is to make decision-making faster, easier,
            and more interactive. Users can enter different choices, remove
            options, clear the list, and let the website randomly make a choice.
          </p>
          <p className="mb-0">
            This project uses React, React Router, React Bootstrap, and browser
            storage to create a cleaner and more useful user experience.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;