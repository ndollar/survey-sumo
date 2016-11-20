
const TOKEN_KEY = 'surveysumo:authtoken';

export const saveToken = token => (
  window.localStorage.setItem(TOKEN_KEY, token)
);

export const getToken = () => (
  window.localStorage.getItem(TOKEN_KEY)
);

export const clearToken = () => (
  window.localStorage.removeItem(TOKEN_KEY)
);

export const signOut = clearToken;

export const isLoggedIn = () => (typeof getToken() === 'string');

export const authRoute = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({
      pathname: '/signin',
    });
  }
};
