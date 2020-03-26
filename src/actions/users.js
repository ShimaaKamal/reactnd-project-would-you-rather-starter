import { getUsers } from "../utils/api";

export const RECIEVE_USERS = "RECIEVE_USERS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

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
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}
