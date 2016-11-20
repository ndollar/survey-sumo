import { Question } from 'app/api';
import { fetchAdminResponses } from 'app/actions/admin-responses';

const setQuestionText = (value) => ({
  type: 'SET_QUESTION_TEXT',
  text: value,
});

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

// TODO: Handle response
const saveQuestion = () => (dispatch, getState) => {
  Question.create(getState().admin.newQuestion)
  .then(() => {
    dispatch(fetchAdminResponses());
    dispatch({ type: 'CLEAR_QUESTION' });
  });
};

export { setQuestionText, newChoice, saveQuestion, removeChoice };
