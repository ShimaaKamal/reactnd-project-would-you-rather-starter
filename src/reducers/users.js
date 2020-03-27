import {
  RECIEVE_USERS,
  ANSWER_QUESTION_USER,
  ADD_QUESTION_USER
} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.id])
        }
      };
    default:
      return state;
  }
}
