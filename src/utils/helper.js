export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function getCurrentDate() {
  const date = new Date();
  return date.getTime();
}

export function formatQuestion(question, users, qid, loggedInUser) {
  return {
    questionOptionOneText: question.optionOne.text,
    questionOptionTwoText: question.optionTwo.text,
    questionOneNumberOfVotes: question.optionOne.votes.length,
    questionTwoNumberOfVotes: question.optionTwo.votes.length,
    userAnswer: question.optionOne.votes.includes(loggedInUser)
      ? question.optionOne.text
      : question.optionTwo.votes.includes(loggedInUser)
      ? question.optionTwo.text
      : null,
    authorName: users[question.author].name,
    authorAvatar: users[question.author].avatarURL,
    id: qid
  };
}
