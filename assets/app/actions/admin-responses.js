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
const fetchAdminResponses = () => dispatch => {
  questionsWithAnswers(dispatch);
};

export { setAdminResponses, fetchAdminResponses };
