import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./QuestionResult.css";

class QuestionResult extends Component {
  handleDisplayedData = () => {
    const {
      questionOneNumberOfVotes,
      questionTwoNumberOfVotes
    } = this.props.question;

    const totalNumberOfAnswers =
      questionOneNumberOfVotes + questionTwoNumberOfVotes;
    const questionOneAnswersPercentage = (
      (questionOneNumberOfVotes / totalNumberOfAnswers) *
      100
    ).toFixed(2);
    const questionTwoAnswersPercentage = (
      (questionTwoNumberOfVotes / totalNumberOfAnswers) *
      100
    ).toFixed(2);

    return {
      ...this.props.question,
      totalNumberOfAnswers,
      questionOneAnswersPercentage,
      questionTwoAnswersPercentage
    };
  };
  render() {
    const {
      questionOneAnswersPercentage,
      questionTwoAnswersPercentage,
      questionOneNumberOfVotes,
      questionTwoNumberOfVotes,
      totalNumberOfAnswers,
      questionOptionOneText,
      questionOptionTwoText,
      userAnswer
    } = this.handleDisplayedData();
    return (
      <div className="question-info">
        <h4>Results:</h4>
        <span>Would you rather?</span>
        <div
          className={
            questionOneNumberOfVotes > questionTwoNumberOfVotes
              ? "highest-option"
              : "option"
          }
        >
          {userAnswer === questionOptionOneText && (
            <div className="check-user-option">
              <FaCheckCircle />
              <span>Your Vote</span>
            </div>
          )}

          <span>{questionOptionOneText}</span>
          <ProgressBar
            variant="success"
            now={questionOneAnswersPercentage}
            label={`${questionOneAnswersPercentage}%`}
          />
          <span>
            {questionOneNumberOfVotes} of {totalNumberOfAnswers}
          </span>
        </div>
        <div
          className={
            questionOneNumberOfVotes > questionTwoNumberOfVotes
              ? "option"
              : "highest-option"
          }
        >
          {userAnswer === questionOptionTwoText && (
            <div className="check-user-option">
              <FaCheckCircle />
              <span>Your Vote</span>
            </div>
          )}

          <span>{questionOptionTwoText}</span>
          <ProgressBar
            variant="success"
            now={questionTwoAnswersPercentage}
            label={`${questionTwoAnswersPercentage}%`}
          />
          <span>
            {questionTwoNumberOfVotes} of {totalNumberOfAnswers}
          </span>
        </div>
      </div>
    );
  }
}
export default QuestionResult;
