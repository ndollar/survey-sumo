import React from 'react';
import Logo from 'app/components/Logo';
import AdminLink from 'app/components/admin/AdminLink';

require('app/stylesheets/components/header-common.css');

const Header = () => (
  <header>
    <AdminLink />
    <div id="header-logo-wrapper">
      <Logo />
    </div>
  </header>
);

export default Header;
