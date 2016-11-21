import { Question } from 'app/api';
import { fetchAdminResponses } from 'app/actions/admin-responses';
import { checkStatus } from 'app/helpers/fetch-response';

const setQuestionText = (value) => ({
  type: 'SET_QUESTION_TEXT',
  text: value,
});

const clearNewQuestionErrors = () => ({
  type: 'CLEAR_NEW_QUESTION_ERRORS',
});

const saveQuestionError = error => dispatch => {
  dispatch({
    type: 'SAVE_QUESTION_ERROR',
    error,
  });
  setTimeout(() => (
    dispatch(clearNewQuestionErrors())
  ), 5000);
};

let choiceId = 0;
const newChoice = (value) => ({
  type: 'NEW_CHOICE',
  text: value,
  viewId: (choiceId++).toString(),
});

const removeChoice = (viewId) => ({
  type: 'REMOVE_CHOICE',
  viewId,
});

const saveQuestion = () => (dispatch, getState) => {
  Question.create(getState().admin.newQuestion)
  .then(checkStatus)
  .then(() => {
    dispatch(fetchAdminResponses());
    dispatch({ type: 'CLEAR_QUESTION' });
  })
  .catch(error => {
    error.response
      .json()
      .then(err => dispatch(saveQuestionError(err)));
  });
};

export {
  setQuestionText, newChoice, saveQuestion, removeChoice, clearNewQuestionErrors,
};
