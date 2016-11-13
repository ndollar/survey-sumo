import { combineReducers } from 'redux';

import newQuestion from 'app/reducers/new-question';
import adminResponses from 'app/reducers/admin-responses';
import guestQuestions from 'app/reducers/guest-questions';
import auth from 'app/reducers/auth';

export default combineReducers({
  newQuestion,
  adminResponses,
  guestQuestions,
  auth,
});
