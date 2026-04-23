import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="site-navbar">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="brand-text">
          Random Decision Maker
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/how-it-works">
              How It Works
            </Nav.Link>
            <Nav.Link as={NavLink} to="/history">
              History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;