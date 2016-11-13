
const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        token: action.token,
        errorResponse: null,
      });
    case 'AUTH_ERROR':
      return Object.assign({}, state, {
        errorResponse: action.response,
      });
    default:
      return state;
  }
};

export default auth;
