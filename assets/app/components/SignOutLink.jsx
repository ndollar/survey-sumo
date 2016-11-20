import React from 'react';
import { browserHistory } from 'react-router';
import { signOut } from 'app/helpers/auth';

const signOutClick = (e) => {
  e.preventDefault();
  signOut();
  browserHistory.push('/');
};

const SignOutLink = () => (
  <a className="header-link" href="#signout" onClick={signOutClick}>Sign Out</a>
);

export default SignOutLink;
