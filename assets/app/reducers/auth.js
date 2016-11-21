
const initialState = {
  token: '',
  errorResponse: {
    error: '',
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        token: action.token,
        errorResponse: initialState.errorResponse,
      });
    case 'AUTH_ERROR':
      return Object.assign({}, state, {
        errorResponse: action.response,
      });

    case 'CLEAR_AUTH_ERROR':
      return Object.assign({}, state, {
        errorResponse: initialState.errorResponse,
      });
    default:
      return state;
  }
};

export default auth;
