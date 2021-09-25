import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
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
          <Navbar.Brand href="#home" nameClass="logo">
            <img
              width="25%"
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
            ></img>
          </Navbar.Brand>
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
