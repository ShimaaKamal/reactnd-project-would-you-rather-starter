import { getUsers } from "../utils/api";

export const RECIEVE_USERS = "RECIEVE_USERS";
export const ANSWER_QUESTION_USER = "ANSWER_QUESTION_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users: users
  };
}

export function handleRecieveUsers() {
  return dispatch => {
    getUsers().then(users => dispatch(recieveUsers(users)));
  };
}

export function addAnswerToUser({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION_USER,
    authedUser,
    qid,
    answer
  };
}

export function addQuestionToUser({ author, id }) {
  return {
    type: ADD_QUESTION_USER,
    author,
    id
  };
}
