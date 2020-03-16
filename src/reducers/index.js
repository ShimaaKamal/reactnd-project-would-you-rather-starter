import { combineReducers } from "redux";
import { questions } from "./questions";
import { loggedInUser } from "./loggedUser";
import { users } from "./users";

export default combineReducers({
  questions,
  users,
  loggedInUser
});
