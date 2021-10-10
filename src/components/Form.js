import React, { Component } from "react";
// Libreria con el componente de icono
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Iconos
import {
  faUser,
  faEnvelope,
  faCalendar,
  faBullhorn,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
// react bootstrap
import { Row, Col, Button, Form } from "react-bootstrap";
import "./styles/home.css";

class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <center>
          <h1 className="pt-5">¿Qué estas pensando?</h1>
        </center>
        <Form>
          <Form.Group className="mb-3" controlId="formAutor">
            <Form.Label>
              <FontAwesomeIcon icon={faUser} className="mx-1" />
              Autor
            </Form.Label>
            <Form.Control type="name" placeholder="Autor" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTweet">
            <Form.Label>
              <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
              Tweet
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Tweet"
              style={{ maxHeight: "100px", minHeight: "100px" }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formFecha">
                <Form.Label>
                  <FontAwesomeIcon icon={faCalendar} className="mx-1" />
                  Fecha
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formHora">
                <Form.Label>.</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formVersion">
                <Form.Label>
                  <FontAwesomeIcon icon={faBullhorn} className="mx-1" />
                  Version
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formTema">
                <Form.Label>
                  <FontAwesomeIcon icon={faClipboard} className="mx-1" />
                  Tema
                </Form.Label>
                <Form.Select defaultValue="Elige...">
                  <option>Elige...</option>
                  <option>Programacion</option>
                  <option>GIWEB</option>
                  <option>Noticias</option>
                  <option>Salud</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <center>
            <Button variant="outline-light" type="submit">
              Publicar
            </Button>
          </center>
        </Form>
      </Row>
    );
  }
}
export default Forms;
