import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Container, Row, Col } from "react-bootstrap";

//JSX
//npm install bootstrap@4.0.2

function App() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2}>
            <NavBar />
          </Col>
          <Col md={6}>
            <Home />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
