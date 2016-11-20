import { Question } from 'app/api';
const setAdminResponses = (responses) => ({
  type: 'SET_ADMIN_RESPONSES',
  responses,
});

const questionsWithAnswers = dispatch => (
  Question.allWithAnswers()
    .then(response => response.json())
    .then(json => {
      dispatch(setAdminResponses(json));
    })
);

// TODO: Replace polling with socket
let interval;
const fetchAdminResponses = () => dispatch => {
  clearInterval(interval);
  questionsWithAnswers(dispatch);
  interval = setInterval(() => (
    questionsWithAnswers(dispatch)
  ), 5000);
};

export { setAdminResponses, fetchAdminResponses };
