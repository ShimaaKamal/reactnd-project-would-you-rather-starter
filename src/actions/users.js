import { getUsers } from "../utils/api";
export const RECIEVE_USERS = "RECIEVE_USERS";

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
