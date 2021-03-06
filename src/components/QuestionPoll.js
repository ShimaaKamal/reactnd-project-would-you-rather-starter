import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";
import QuestionPollForm from "./QuestionPollForm";
import QuestionResult from "./QuestionResult";
import LoadingBar from "react-redux-loading-bar";
import Error from "./Error";

class QuestionPoll extends Component {
  handleSubmit = optionSelected => {
    const { dispatch, qid, loggedInUser } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        authedUser: loggedInUser,
        qid: qid,
        answer: optionSelected
      })
    );
  };

  render() {
    const { question, isVoted } = this.props;
    if (!question) {
      return <Error></Error>;
    }
    const { authorName, authorAvatar } = this.props.question;

    return (
      <Fragment>
        <LoadingBar />
        <div className="card-container align-self-center">
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
                {!isVoted && (
                  <QuestionPollForm
                    question={question}
                    handleSaveQuestionAnswer={this.handleSubmit}
                  />
                )}
                {isVoted && <QuestionResult question={question} />}
              </div>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ questions, users, loggedInUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users, id, loggedInUser)
      : null,
    loggedInUser: loggedInUser,
    qid: id,
    isVoted: question
      ? questions[id].optionOne.votes.includes(loggedInUser) ||
        questions[id].optionTwo.votes.includes(loggedInUser)
      : null
  };
}
export default connect(mapStateToProps)(QuestionPoll);
