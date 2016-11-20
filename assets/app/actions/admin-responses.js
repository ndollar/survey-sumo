import { Question } from 'app/api';
const setAdminResponses = (responses) => ({
  type: 'SET_ADMIN_RESPONSES',
  responses,
});

const fetchAdminResponses = () => (dispatch =>
  Question.allWithAnswers()
    .then(response => response.json())
    .then(json => {
      dispatch(setAdminResponses(json));
    })
);

export { setAdminResponses, fetchAdminResponses };
