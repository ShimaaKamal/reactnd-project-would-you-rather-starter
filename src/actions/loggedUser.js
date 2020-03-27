export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
export const UNSET_LOGGED_IN_USER = "UNSET_LOGGED_IN_USER";

export function setLoggedINUser(id) {
  return {
    type: SET_LOGGED_IN_USER,
    id
  };
}

export function unSetLoggedInUser() {
  return {
    type: UNSET_LOGGED_IN_USER
  };
}
