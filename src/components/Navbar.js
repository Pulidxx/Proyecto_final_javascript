import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import campana from "./assets/campana.svg";
class NavBar extends Component {
  // constructor(){}
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
          <img
            width="50%"
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
          ></img>
        </Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">
          <img width="50%" src={campana}></img>
        </Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    );
  }
}

export default NavBar;
