import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { recieveQuestions, addAnswerToQuestion } from "./questions";
import { recieveUsers, addAnswerToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveQuestions(questions));
      dispatch(recieveUsers(users));
    });
  };
}
//ToDo hadle dipatch user too--
export function handleSaveQuestionAnswer(info) {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => dispatch(addAnswerToQuestion(info)))
      .then(() => dispatch(addAnswerToUser(info)))
      .then(() => dispatch(hideLoading()));
  };
}
