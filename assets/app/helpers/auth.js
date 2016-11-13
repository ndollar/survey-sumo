
const TOKEN_KEY = 'surveysumo:authtoken';

export const saveToken = (token) => {
  console.log('*** token', token);
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = token => (
  window.localStorage.getItem(TOKEN_KEY)
);

export const isLoggedIn = () => (typeof getToken() === 'string');

export const authRoute = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({
      pathname: '/signin',
    });
  }
};
