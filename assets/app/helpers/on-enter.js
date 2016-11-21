import { fetchAdminResponses } from 'app/actions/admin/responses';
import { clearNewQuestionErrors } from 'app/actions/admin/new-question';
import { fetchGuestQuestions } from 'app/actions/guest/questions';
import { isLoggedIn } from 'app/helpers/auth';

const onEnter = (dispatch) => ({
  onEnterAdmin(nextState, replace) {
    if (!isLoggedIn()) {
      replace({
        pathname: '/signin',
      });
    } else {
      dispatch(fetchAdminResponses());
    }
    dispatch(clearNewQuestionErrors());
  },
  onEnterSignIn(nextState, replace) {
    if (isLoggedIn()) {
      replace({
        pathname: '/admin',
      });
    }
  },
  onEnterGuest() {
    dispatch(fetchGuestQuestions());
  },
});

export default onEnter;
