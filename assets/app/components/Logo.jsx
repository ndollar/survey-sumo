import React from 'react';
import { Link } from 'react-router';

require('app/stylesheets/components/logo.css');

const Logo = () => (
  <span className="survey-sumo-logo">
    <Link to="/">
      <img
        alt="Sumo Logo"
        src="https://pbs.twimg.com/profile_images/1640023585/appsumo-twitter.png"
        height="160"
        align="middle"
      />
      <span className="survey-sumo-name">Survey Sumo</span>
    </Link>
  </span>
);

export default Logo;
