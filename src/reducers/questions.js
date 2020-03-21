import { RECIEVE_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    default:
      return state;
  }
}
