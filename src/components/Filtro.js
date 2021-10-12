import React, { Component } from "react";
// Libreria con el componente de icono
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Iconos
import {
  faFilter,
  faCode,
  faPager,
  faFileInvoice,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
// react bootstrap
import { Row, Button, Col } from "react-bootstrap";
import "./styles/home.css";
import Home from "./Home";
import { text } from "@fortawesome/fontawesome-svg-core";

class Filtro extends Component {
  constructor(props) {
    super(props);

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(filter){
    const tweetFilter = new Home();
    tweetFilter.tweetFilter(filter);

    console.log(filter)
  }

  render() {
    return (
      <Row className="g-0">
        {/* Columna con el titulo */}
        <Row className="g-0">
          <h4 className="p-3 borde-b">Home</h4>
        </Row>
        {/* Columna con el titulo del filtro y los botones  */}
        <Row className="g-0 borde-b">
          <Col md={12}>
            <h4 className="p-2">
              <FontAwesomeIcon icon={faFilter} /> Filtrar por tema:
            </h4>
          </Col>
          <Col>
            <Button variant="outline-light" className="m-3" onClick={this.handleButton}>
              <FontAwesomeIcon icon={faCode} className="mx-1" />
              Programacion
            </Button>
            <Button variant="outline-light" className="m-3" onClick={this.handleButton}>
              <FontAwesomeIcon icon={faPager} className="mx-1" />
              GIWEB
            </Button>
            <Button variant="outline-light" className="m-3" onClick={this.handleButton}>
              <FontAwesomeIcon icon={faFileInvoice} className="mx-1" />
              Noticias
            </Button>
            <Button variant="outline-light" className="m-3" onClick={this.handleButton}>
              <FontAwesomeIcon icon={faHeartbeat} className="mx-1" />
              Salud
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
export default Filtro;
