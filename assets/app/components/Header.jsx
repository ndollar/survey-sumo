import React from 'react';
import { Link } from 'react-router';
import { isLoggedIn } from 'app/helpers/auth';
import Logo from 'app/components/Logo';

require('app/stylesheets/components/header.css');

const Header = () => (
  <header>
    <span id="admin-link">{
      isLoggedIn() ?
        (<Link to="/admin">Admin</Link>) :
        (<Link to="/signin">Sign In</Link>)}
    </span>
    <div id="header-logo-wrapper">
      <Logo />
    </div>
  </header>
);

export default Header;
