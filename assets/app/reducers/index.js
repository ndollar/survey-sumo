import { combineReducers } from 'redux';

import newQuestion from 'app/reducers/admin/new-question';
import responses from 'app/reducers/admin/responses';
import questions from 'app/reducers/guest/questions';
import auth from 'app/reducers/auth';

export default combineReducers({
  admin: combineReducers({ responses, newQuestion }),
  guest: combineReducers({ questions }),
  auth,
});
