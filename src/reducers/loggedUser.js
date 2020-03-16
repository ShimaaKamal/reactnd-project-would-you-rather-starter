import { SET_LOGGED_IN_USER } from "../actions/loggedUser";

export function loggedInUser(state = null, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.id;
    default:
      return state;
  }
}
