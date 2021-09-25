import React, { Component } from "react";
import "./styles/home.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class Carta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        {this.props.tweets.map((tweet) => {
          return (
            <Col sm={4}>
              <Card className="carta">
                <Card.Body className="carta">
                  <Card.Title>{tweet.author}</Card.Title>
                  <Card.Text>{tweet.content}</Card.Text>
                  <Card.Text>{tweet.date}</Card.Text>
                  <Card.Text>{tweet.type}</Card.Text>
                  <Card.Text>{tweet.__v}</Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Carta;
