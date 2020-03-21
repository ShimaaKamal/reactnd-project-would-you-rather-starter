export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

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
