import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import socketIo from 'socket.io-client';

import reducers from 'app/reducers';
import GuestApp from 'app/components/GuestApp';
import Admin from 'app/components/Admin';
import SignIn from 'app/components/SignIn';
import onEnter from 'app/helpers/on-enter';

/*
const socket = socketIo();
socket.on('connect', () => {});
socket.on('hello', (world) => {
  console.log(world);
});

socket.emit('hey', { ho: 'lets go' });
*/

const reduxLogger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(reduxLogger, thunk)
);

const { onEnterAdmin, onEnterGuest, onEnterSignIn } = onEnter(store.dispatch);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GuestApp} onEnter={onEnterGuest} />
      <Route path="/admin" component={Admin} onEnter={onEnterAdmin} />
      <Route path="/signin" component={SignIn} onEnter={onEnterSignIn} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
