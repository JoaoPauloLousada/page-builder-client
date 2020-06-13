import React from "react";
import "./app.scss";
import Row from "../components/bootstrap/Row/Row";
import Container from "../components/bootstrap/Container/Container";
import Col from "../components/bootstrap/Col/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8} sm={10} md={7} lg={4} xl={1}>
            col left
          </Col>
          <Col>col right</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
