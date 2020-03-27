export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions: questions
  };
}

export function addAnswerToQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}
