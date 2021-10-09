import "./App.css";
import "./components/styles/home.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Filtro from "./components/Filtro";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col xs sm md lg={2} className="borde-r">
            <NavBar />
          </Col>
          <Col xs sm md lg={6}>
            <Row>
              <Filtro />
            </Row>
            <Row>
              <Home />
            </Row>
          </Col>
          <Col xs sm md lg={4} className="borde-l"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
