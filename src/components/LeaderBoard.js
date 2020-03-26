import React, { Component } from "react";
import { connect } from "react-redux";
import "./LeaderBoard.css";

class LeaderBoard extends Component {
  render() {
    const { newUsers } = this.props;
    console.log(newUsers);
    return newUsers.map(user => (
      <div key={user.authorName} className="user">
        <div className="author-avatar-container">
          <img
            src={user.authorAvatar}
            className="author-avatar"
            alt={`Avatar of ${user.authorName}`}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="user-info">
          <h5>{user.authorName}</h5>
          <span>
            Answered Question
            <span className="score-value ">
              {user.answeredQuestionsNumbers}
            </span>
          </span>
          <hr className="hr-width" />
          <span>
            Created Question
            <span className="score-value ">{user.createdQuestionsNumbers}</span>
          </span>
        </div>
        <div className="vertical-line"></div>
        <div className="score-container">
          <div className="score">Score</div>
          <div className="total-score">
            <span className="total-score-value">
              {user.answeredQuestionsNumbers + user.createdQuestionsNumbers}
            </span>
          </div>
        </div>
      </div>
    ));
  }
}
function mapStateToProps({ users }) {
  const newUsers = Object.keys(users).map(key => ({
    authorName: users[key].name,
    authorAvatar: users[key].avatarURL,
    answeredQuestionsNumbers: Object.keys(users[key].answers).length,
    createdQuestionsNumbers: users[key].questions.length
  }));
  return { newUsers };
}
export default connect(mapStateToProps)(LeaderBoard);
