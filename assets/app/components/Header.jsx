import React from 'react';
import { Link } from 'react-router';
import { isLoggedIn } from 'app/helpers/auth';

require('app/stylesheets/components/header.css')

const Header = () => (
  <header>
    <span id="survey-sumo-logo"><Link to="/">Survey Sumo</Link></span>
    <span id='admin-link'>{
      isLoggedIn() ?
        (<Link to="/admin">Admin</Link>) :
        (<Link to="/signin">Sign In</Link>)
    }</span>
  </header>
);

export default Header;
