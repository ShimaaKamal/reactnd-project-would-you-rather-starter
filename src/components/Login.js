import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { setLoggedINUser } from "../actions/loggedUser";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    id: "Choose user..."
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      id: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { id } = this.state;
    this.props.dispatch(setLoggedINUser(id));

    this.props.history.push("/");
  };
  render() {
    return (
      <Card className="align-self-center">
        <Card.Header>
          <h4> Welcome to the Would You Rather App!</h4>
          <h5> Please Sing in to continue</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>Sign in</Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formLogin">
              <Form.Control
                as="select"
                value={this.state.id}
                onChange={this.handleChange}
              >
                <option value="Choose user..." disabled>
                  Choose user...
                </option>
                {this.props.users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button block type="submit" variant="success">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map(key => {
      return users[key];
    })
  };
}
export default withRouter(connect(mapStateToProps)(Login));
