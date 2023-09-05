import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => (
  <Container className="mt-3 pt-5 pb-2 bg-primary text-white rounded">
    <Row className="justify-content-center">
      <Col sm={4}>
        <h3>The Bouquinist</h3>
        <p>Where dreams come true</p>
      </Col>
      <Col sm={4}>
        <p>cell. 343.758.8975</p>
        <p>e-mail: TheBouquinist@info.com</p>
      </Col>
      <Col sm={4}>
        <p>P.IVA: 9489H98F00S</p>
      </Col>
    </Row>
    <Row className="mt-3 text-warning">
      <Col>
        <h4>Made with LOVE by Leodor</h4>
      </Col>
    </Row>
  </Container>
);

export default MyFooter;
