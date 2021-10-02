import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Tweet from "./Tweets";
import "./styles/home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [
        {
          _id: "61495d840bfa5ceca1afb2f4",
          author: "anonymous",
          content: "xd",
          date: "2021-09-21T04:20:20.182Z",
          __v: 0,
        },
        {
          _id: "614a42925f905b960ba90987",
          author: "Santiago",
          content: "Inicia proyecto GIWEB",
          date: "2021-09-21T20:37:38.448Z",
          type: "GIWEB",
          __v: 0,
        },
        {
          _id: "614a42b65f905b960ba90989",
          author: "Santiago",
          content: "Ojala acabemos hoy con React",
          date: "2021-09-21T20:38:14.479Z",
          type: "GIWEB",
          __v: 0,
        },
        {
          _id: "614a42de5f905b960ba9098b",
          author: "Santiago",
          content: "Pilas con el manejo de objetos",
          date: "2021-09-21T20:38:54.851Z",
          type: "GIWEB",
          __v: 0,
        },
      ],

      estadoPagina: 2,
    };

    this.cambiarNumero = this.cambiarNumero.bind(this);
    setTimeout(this.cambiarNumero, 2000);
  }

  cambiarNumero() {
    this.setState({
      ...this.state,
      estadoPagina: 55,
    });
  }

  renderTweets = () => {
    return (
      <Row>
        <Tweet tweets={this.state.tweets} />
      </Row>
    );
  };

  //Constructor
  render() {
    return (
      <row>
        <h1>{this.state.estadoPagina}</h1>
        {this.renderTweets()}
      </row>
    );
  }
}

export default Home;

//Esto hice yo para el Home v:
