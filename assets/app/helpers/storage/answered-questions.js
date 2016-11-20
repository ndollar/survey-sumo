
const ANSWERED_KEY = 'surveysumo:answered_questions';

export const clearAnsweredQuestions = () => (
  window.localStorage.setItem(ANSWERED_KEY, '')
);

export const answeredQuestions = () => (
  (window.localStorage.getItem(ANSWERED_KEY) || '')
    .split(',')
    .filter(id => id.length > 0)
    .map(id => parseInt(id, 10))
);

export const saveAnsweredQuestion = questionId => (
  window.localStorage.setItem(
    ANSWERED_KEY,
    answeredQuestions().concat([questionId]).join(',')
  )
);
