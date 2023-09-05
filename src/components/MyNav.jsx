import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = ({ brand }) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid="lg">
      <Navbar.Brand href="#home">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
