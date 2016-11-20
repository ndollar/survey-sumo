import { fetchAdminResponses } from 'app/actions/admin-responses';
import { fetchGuestQuestions } from 'app/actions/guest-questions';
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
  },
  onEnterGuest() {
    dispatch(fetchGuestQuestions());
  },
});

export default onEnter;
