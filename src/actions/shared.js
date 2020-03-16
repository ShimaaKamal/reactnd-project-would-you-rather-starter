import { getInitialData } from "../utils/api";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";

export function handleInitData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveQuestions(questions));
      dispatch(recieveUsers(users));
    });
  };
}
