import React, { Component, Fragment } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { handleAddQuestion } from "../actions/questions";
import LoadingBar from "react-redux-loading-bar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./NewQuestion.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleOptionOne = value => {
    this.setState(() => ({
      optionOne: value
    }));
  };

  handleOptionTwo = value => {
    this.setState(() => ({
      optionTwo: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Card className="card-container align-self-center">
          <Card.Header>
            <h4> Create new question</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>Complete the question</Card.Title>
            <div>Would you Rather...</div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Option One Text Here"
                  onChange={e => this.handleOptionOne(e.target.value)}
                />
              </Form.Group>
              <hr className="hr-text" data-content="OR" />
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Option Two Text Here"
                  onChange={e => this.handleOptionTwo(e.target.value)}
                  value={this.state.optionTwo}
                />
              </Form.Group>
              <Button variant="success" type="submit" block>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
function mapStateToProps({ loadingBar }) {
  const isLoading = loadingBar;
  return {
    isLoading
  };
}
export default withRouter(connect(mapStateToProps)(NewQuestion));
