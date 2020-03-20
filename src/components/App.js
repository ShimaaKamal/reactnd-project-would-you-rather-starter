import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitData } from "../actions/shared";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import QuestionAnswering from "./QuestionAnswering";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData());
  }
  render() {
    return (
      <Router>
        <div className="container d-flex flex-column container">
          {this.props.loggedInUser === null ? (
            <Route path="/" component={Login} />
          ) : (
            <Fragment>
              <Header />
              <Route path="/home" component={Home} />
              <Route path="/question/:id" component={QuestionAnswering} />
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToPorps({ users, loggedInUser }) {
  return {
    users: users,
    loggedInUser: loggedInUser
  };
}
export default connect(mapStateToPorps)(App);
