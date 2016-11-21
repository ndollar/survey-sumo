import React from 'react';
import { Link } from 'react-router';

require('app/stylesheets/components/logo.css');

const Logo = () => (
  <span className="survey-sumo-logo">
    <Link className="logo-link" to="/">
      <img
        alt="Sumo Logo"
        src="/images/appsumo-twitter.png"
        height="160"
      />
      <span className="survey-sumo-name">Survey Sumo</span>
    </Link>
  </span>
);

export default Logo;
