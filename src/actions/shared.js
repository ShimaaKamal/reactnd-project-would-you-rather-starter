import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import {
  recieveQuestions,
  addAnswerToQuestion,
  addQuestion
} from "./questions";
import { recieveUsers, addAnswerToUser, addQuestionToUser } from "./users";
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

export function handleAddQuestion(optionOneText, optionTwoText, callBack) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();
    const question = {
      author: loggedInUser,
      optionOneText,
      optionTwoText
    };
    var questionAfterSave = {};
    dispatch(showLoading());
    return saveQuestion(question)
      .then(questionWithId => {
        questionAfterSave = questionWithId;
        dispatch(addQuestion(questionWithId));
      })
      .then(() => {
        dispatch(addQuestionToUser(questionAfterSave));
      })
      .then(() => dispatch(hideLoading()))
      .then(() => callBack());
  };
}
