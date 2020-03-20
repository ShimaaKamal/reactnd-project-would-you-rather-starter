export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, users, id) {
  return {
    questionOptionOneText: question.optionOne.text,
    questionOptionTwoText: question.optionTwo.text,
    authorName: users[question.author].name,
    authorAvatar: users[question.author].avatarURL,
    id: id
  };
}
