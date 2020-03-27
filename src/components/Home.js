import React, { Component } from "react";
import Question from "./Question";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import "./Home.css";

class Home extends Component {
  render() {
    const { answeredQuestionsIds, unansweredQuestionsIds } = this.props;
    return (
      <div className="home-container align-self-center">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="home" title="Unanswered Questions" align="center">
            {unansweredQuestionsIds.map(qId => (
              <Question key={qId} id={qId} />
            ))}
          </Tab>
          <Tab eventKey="profile" title="Answered Questions" align="center">
            {answeredQuestionsIds.map(qId => (
              <Question key={qId} id={qId} />
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}
function mapStateToProps({ questions, loggedInUser }) {
  return {
    answeredQuestionsIds: Object.keys(questions)
      .filter(questionId => {
        return (
          questions[questionId].optionOne.votes.includes(loggedInUser) ||
          questions[questionId].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    unansweredQuestionsIds: Object.keys(questions)
      .filter(questionId => {
        return (
          !questions[questionId].optionOne.votes.includes(loggedInUser) &&
          !questions[questionId].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}
export default connect(mapStateToProps)(Home);
