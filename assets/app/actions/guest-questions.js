import { Question, Answer } from 'app/api';
import {
  saveAnsweredQuestion,
  clearAnsweredQuestions,
} from 'app/helpers/storage/answered-questions';

const setGuestQuestions = guestQuestions => ({
  type: 'SET_GUEST_QUESTIONS',
  guestQuestions,
});

const fetchGuestQuestions = () => (dispatch =>
  Question.findAll()
    .then(response => response.json())
    .then(json => {
      dispatch(setGuestQuestions(json));
    })
);

const questionAnswered = (questionId, choiceId) => dispatch => (
  Answer.create(choiceId)
  .then(() => {
    dispatch({
      type: 'QUESTION_ANSWERED',
      questionId,
      choiceId,
    });
    saveAnsweredQuestion(questionId);
  })
);

const clearSavedQuestions = () => (dispatch) => {
  clearAnsweredQuestions();
  dispatch({
    type: 'CLEAR_SAVED_QUESTIONS',
  });
};

export {
  setGuestQuestions, questionAnswered, fetchGuestQuestions, clearSavedQuestions,
};
