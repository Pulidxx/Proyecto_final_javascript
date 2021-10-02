import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCode,
  faFootballBall,
  faFileInvoice,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Button, Col } from "react-bootstrap";
import "./styles/home.css";

class Filtro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="g-0">
        <Row className="g-0">
          <h4 className="p-3 borde-b">Home</h4>
        </Row>
        <Row className="g-0 borde-b">
          <Col md={12}>
            <h4 className="p-2">
              <FontAwesomeIcon icon={faFilter} /> Filtrar por tema:
            </h4>
          </Col>
          <Col>
            <Button variant="outline-light" className="m-3">
              <FontAwesomeIcon icon={faCode} />
              Programacion
            </Button>
            <Button variant="outline-light" className="m-3">
              <FontAwesomeIcon icon={faFootballBall} />
              Deportes
            </Button>
            <Button variant="outline-light" className="m-3">
              <FontAwesomeIcon icon={faFileInvoice} />
              Noticias
            </Button>
            <Button variant="outline-light" className="m-3">
              <FontAwesomeIcon icon={faHeartbeat} />
              Salud
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
export default Filtro;