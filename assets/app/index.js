import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducers from 'app/reducers';
import GuestApp from 'app/components/GuestApp';
import Admin from 'app/components/Admin';
import SignIn from 'app/components/SignIn';
import initializeState from 'app/helpers/initialize';
import { authRoute } from 'app/helpers/auth';

const reduxLogger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(reduxLogger)
);

initializeState(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GuestApp} />
      <Route path="/admin" component={Admin} onEnter={authRoute} />
      <Route path="/signin" component={SignIn} />
    </Router>
  </Provider>,
  document.getElementById('app')
);

/*
TODO:
- Lint
- Download and bundle dependencies like pure-grids and jquery
- Combine initialization requets, maybe initialze in bundle itself
*/
