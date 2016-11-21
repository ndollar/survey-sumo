import { Question, Answer } from 'app/api';
import {
  saveAnsweredQuestion,
  clearAnsweredQuestions,
} from 'app/helpers/storage/answered-questions';
import { checkStatus } from 'app/helpers/fetch-response';

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

const clearSaveAnswerError = () => ({
  type: 'CLEAR_SAVE_ANSWER_ERROR',
});

const saveAnswerError = error => dispatch => {
  dispatch({
    type: 'SAVE_ANSWER_ERROR',
    error,
  });
  setTimeout(() => (
    dispatch(clearSaveAnswerError())
  ), 5000);
};

const questionAnswered = (questionId, choiceId) => dispatch => (
  Answer.create(choiceId)
  .then(checkStatus)
  .then(() => {
    dispatch({
      type: 'QUESTION_ANSWERED',
      questionId,
      choiceId,
    });
    saveAnsweredQuestion(questionId);
  })
  .catch(error => {
    if (error.response) {
      error.response
        .json()
        .then(err => dispatch(saveAnswerError(err)));
    } else {
      throw error;
    }
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
