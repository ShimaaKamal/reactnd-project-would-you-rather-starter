import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { recieveQuestions, addAnswerToQuestion } from "./questions";
import { recieveUsers } from "./users";

export function handleInitData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveQuestions(questions));
      dispatch(recieveUsers(users));
    });
  };
}

export function handleSaveQuestionAnswer(info) {
  console.log(info);
  return dispatch => {
    return saveQuestionAnswer(info).then(() =>
      dispatch(addAnswerToQuestion(info))
    );
  };
}
