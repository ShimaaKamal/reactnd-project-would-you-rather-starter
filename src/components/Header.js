import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Leader Board
            </Nav.Link>
          </Nav>
          <div>
            <img src={logo} className="user-logo" alt="logo" />
            <span>Hello shimaa</span>
            <a href="#logout" variant="outline-light">
              logout
            </a>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
