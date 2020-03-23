import { combineReducers } from "redux";
import { questions } from "./questions";
import { loggedInUser } from "./loggedUser";
import { users } from "./users";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  users,
  loggedInUser,
  loadingBar: loadingBarReducer
});
