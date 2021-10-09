import React, { Component } from "react";
// Libreria con el componente de icono
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Iconos
import { faUser } from "@fortawesome/free-solid-svg-icons";
// react bootstrap
import { Card, Row, Col } from "react-bootstrap";
import "./styles/home.css";

class Tweets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="g-0">
        {this.props.tweets.map((tweet) => {
          return (
            <Card className="carta border-0">
              <Card.Body className="carta ">
                <Row className="g-0">
                  {/* Imagen del usuario */}
                  <Col xs sm md lg={4}>
                    <FontAwesomeIcon icon={faUser} size="10x" className="p-3" />
                  </Col>
                  {/* Datos del tweet */}
                  <Col xs sm md lg={8}>
                    <Card.Title>{tweet.author}</Card.Title>
                    <Card.Text>{tweet.content}</Card.Text>
                    <Card.Text>{tweet.date}</Card.Text>
                    <Card.Text>{tweet.type}</Card.Text>
                    <Card.Text>{tweet.__v}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    );
  }
}

export default Tweets;
