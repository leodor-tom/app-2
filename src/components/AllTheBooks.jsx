import Books from "../data/romance.json";
import { Card, Container, Row, Col } from "react-bootstrap";

const AllTheBooks = () => (
  <Container>
    <h2> Our Books</h2>
    <Row className="g-3">
      {Books.map((book, index) => (
        <Col key={`book-${index}`} sm="3">
          <Card style={{ height: "500px" }}>
            <Card.Img
              variant="top"
              src={book.img}
              alt={book.category}
              style={{ height: "350px", objectFit: `contain` }}
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text className="mt-3">{book.price}€</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
