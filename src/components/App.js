import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitData } from "../actions/shared";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import QuestionPoll from "./QuestionPoll";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData());
  }
  render() {
    return (
      <Router>
        <div className="container d-flex flex-column container">
          {this.props.loggedInUser === null ? (
            <Route render={() => <Login />} />
          ) : (
            <Fragment>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/question/:id" component={QuestionPoll} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leader" component={LeaderBoard} />
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
