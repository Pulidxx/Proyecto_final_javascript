import React, { Component } from "react";
// react bootstrap
import { Nav, Navbar } from "react-bootstrap";

// iconos del navBar
import home from "../assets/home.svg";
import explore from "../assets/explore.svg";
import notifications from "../assets/notifications.svg";
import messages from "../assets/messages.svg";
import bookmarks from "../assets/bookmarks.svg";
import lists from "../assets/lists.svg";
import profile from "../assets/profile.svg";
import more from "../assets/more.svg";

class NavBar extends Component {
  // constructor(){}
  render() {
    return (
      <Navbar variant="dark">
        <Nav className="flex-column" ActiveKey="/home">
          {/* logo de twitter */}
          <Navbar.Brand href="#home" className="p-3">
            <center>
              <img
                width="30%"
                src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
              ></img>
            </center>
          </Navbar.Brand>
          {/* iEnlaces con sus respectivos iconos */}
          <Nav.Link eventKey="link-2">
            <img src={home} className="svg-icon"></img>
            Home
          </Nav.Link>
          <Nav.Link eventKey="link-3">
            <img src={explore} className="svg-icon"></img>
            Explore
          </Nav.Link>
          <Nav.Link eventKey="link-4">
            <img src={notifications} className="svg-icon"></img>
            Notifications
          </Nav.Link>
          <Nav.Link eventKey="link-5">
            <img src={messages} className="svg-icon"></img>
            Messages
          </Nav.Link>
          <Nav.Link eventKey="link-6">
            <img src={bookmarks} className="svg-icon"></img>
            Bookmarks
          </Nav.Link>
          <Nav.Link eventKey="link-7">
            <img src={lists} className="svg-icon"></img>
            Lists
          </Nav.Link>
          <Nav.Link eventKey="link-8">
            <img src={profile} className="svg-icon"></img>
            Profile
          </Nav.Link>
          <Nav.Link eventKey="link-8">
            <img src={more} className="svg-icon"></img>
            More
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
