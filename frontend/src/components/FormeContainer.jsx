import { Container, Row, Col } from "react-bootstrap";

const FormeContainer = ({children}) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children} {/* Use children instead of Children */}
        </Col>
      </Row>
    </Container>
  );
}

export default FormeContainer;
