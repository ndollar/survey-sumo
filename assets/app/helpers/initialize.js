import { Question } from 'app/api';
import { setAdminResponses } from 'app/actions/admin-responses';
import { setGuestQuestions } from 'app/actions/guest-questions';

const initializeState = (store) => {
  // Admin responses
  Question.allWithAnswers()
    .then(response => response.json())
    .then(json => {
      store.dispatch(setAdminResponses(json));
    });

  // Guest questions
  Question.findAll()
    .then(response => response.json())
    .then(json => {
      store.dispatch(setGuestQuestions(json));
    });
};


export default initializeState;
