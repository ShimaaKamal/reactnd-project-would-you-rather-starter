import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { authorName, authorAvatar } = this.props;
    return (
      <div className="header">
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            Would you rather?
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={Link} to="/leader">
              Leader Board
            </Nav.Link>
          </Nav>
          <div>
            <img
              src={authorAvatar}
              className="user-logo"
              alt={`Avatar of ${authorName}`}
            />
            <span>{authorName}</span>
            <a href="#logout" variant="outline-light">
              logout
            </a>
          </div>
        </Navbar>
      </div>
    );
  }
}
function mapStateToprops({ loggedInUser, users }) {
  return {
    authorName: users[loggedInUser].name,
    authorAvatar: users[loggedInUser].avatarURL
  };
}
export default connect(mapStateToprops)(Header);
