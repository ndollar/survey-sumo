import React from 'react';
import { Link } from 'react-router';
import { isLoggedIn } from 'app/helpers/auth';

const AdminLink = () => (
  <span className="header-link">{
    isLoggedIn() ?
      (<Link to="/admin">Admin</Link>) :
      (<Link to="/signin">Sign In</Link>)}
  </span>
);

export default AdminLink;
