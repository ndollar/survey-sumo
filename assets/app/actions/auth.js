const loginSuccess = token => ({
  type: 'LOGIN_SUCCESS',
  token,
});

const authError = response => ({
  type: 'AUTH_ERROR',
  response,
});

export { loginSuccess, authError };
