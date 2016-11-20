import React from 'react';
import Logo from 'app/components/Logo';
import SignOutLink from 'app/components/SignOutLink';

require('app/stylesheets/components/header-common.css');

const Header = () => (
  <header>
    <SignOutLink />
    <div id="header-logo-wrapper">
      <Logo />
    </div>
  </header>
);

export default Header;
