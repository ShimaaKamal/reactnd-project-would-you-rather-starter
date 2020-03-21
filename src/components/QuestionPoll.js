import React, { Component } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";

class QuestionPoll extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    console.log("e.target.value", e.target.value);

    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("insideHandleSubmit");
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch, id, loggedInUser } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        authedUser: loggedInUser,
        qid: id,
        answer: selectedOption
      })
    );
  };

  render() {
    const {
      questionOptionOneText,
      questionOptionTwoText,
      authorName,
      authorAvatar
    } = this.props.question;

    return (
      <div className="question-container align-self-center">
        <Card>
          <Card.Header as="h5">{authorName} asks</Card.Header>
          <Card.Body>
            <div className="question">
              <div className="author-avatar-container">
                <img
                  src={authorAvatar}
                  alt={`Avatar of ${authorName}`}
                  className="author-avatar"
                />
              </div>

              <div className="question-info">
                <h3>Would you Rather?</h3>
                <Form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <Form.Group as={Row}>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label={questionOptionOneText}
                          value="optionOne"
                          name="questionOptionText"
                          id={questionOptionOneText}
                          checked={this.state.selectedOption === "optionOne"}
                          onChange={e => this.handleOptionChange(e)}
                        />
                        <Form.Check
                          type="radio"
                          label={questionOptionTwoText}
                          value="optionTwo"
                          name="questionOptionText"
                          id={questionOptionTwoText}
                          checked={this.state.selectedOption === "optionTwo"}
                          onChange={e => this.handleOptionChange(e)}
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Button type="submit">Submit</Button>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ questions, users, loggedInUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question: question ? formatQuestion(question, users) : null,
    loggedInUser: loggedInUser,
    id: id
  };
}
export default connect(mapStateToProps)(QuestionPoll);
