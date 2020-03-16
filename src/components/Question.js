import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helper";
import "./Question.css";

class Question extends Component {
  render() {
    const question = this.props.question;
    if (question == null) {
      return <p>This question doesn't exist</p>;
    }
    const {
      questionOptionOneText,
      authorName,
      authorAvatar
    } = this.props.question;
    return (
      <div className="question-container">
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
                <Button>View Poll</Button>
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
    question: question ? formatQuestion(question, users) : null
  };
}
export default connect(mapStateToProps)(Question);
