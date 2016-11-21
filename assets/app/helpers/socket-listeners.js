import { fetchAdminResponses } from 'app/actions/admin/responses';
import { isLoggedIn } from 'app/helpers/auth';

export const addListeners = (socket, dispatch) => {
  socket.on('answer:create', () => {
    if (isLoggedIn()) {
      dispatch(fetchAdminResponses());
    }
  });
};
