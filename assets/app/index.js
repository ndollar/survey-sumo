import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import socketIo from 'socket.io-client';

import reducers from 'app/reducers';
import GuestApp from 'app/components/guest/GuestApp';
import AdminApp from 'app/components/admin/AdminApp';
import SignIn from 'app/components/auth/SignIn';
import onEnter from 'app/helpers/on-enter';
import { addListeners } from 'app/helpers/socket-listeners';

require('app/stylesheets/base.css');

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const socket = socketIo();
addListeners(socket, store.dispatch);

const { onEnterAdmin, onEnterGuest, onEnterSignIn } = onEnter(store.dispatch);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GuestApp} onEnter={onEnterGuest} />
      <Route path="/admin" component={AdminApp} onEnter={onEnterAdmin} />
      <Route path="/signin" component={SignIn} onEnter={onEnterSignIn} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
