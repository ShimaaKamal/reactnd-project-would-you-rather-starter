import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helper";
import { withRouter } from "react-router-dom";
import "./Question.css";

class Question extends Component {
  handlePollQuestion = (e, id) => {
    this.props.history.push(`/question/${id}`);
  };

  render() {
    const question = this.props.question;
    if (question == null) {
      return <p>This question doesn't exist</p>;
    }
    const {
      questionOptionOneText,
      authorName,
      authorAvatar,
      id
    } = this.props.question;
    return (
      <div className="card-container">
        <Card>
          <Card.Header as="h5">{authorName}</Card.Header>
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
                <span>...{questionOptionOneText}...</span>
                <Button
                  onClick={e => this.handlePollQuestion(e, id)}
                  variant="success"
                >
                  View Poll
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  return {
    question: question ? formatQuestion(question, users, id) : null
  };
}
export default withRouter(connect(mapStateToProps)(Question));
