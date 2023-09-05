import { Container } from "react-bootstrap";

const Welcome = ({ title, subtitle }) => (
  <Container className=" p-5 bg-primary text-white rounded">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </Container>
);

export default Welcome;
