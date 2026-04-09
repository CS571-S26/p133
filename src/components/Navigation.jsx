import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: "1.8rem" }}>
          Random Decision Maker
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={{ fontSize: "1.2rem", marginRight: "15px" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ fontSize: "1.2rem" }}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;