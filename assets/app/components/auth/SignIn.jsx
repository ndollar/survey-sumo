import React from 'react';
import SignInForm from 'app/components/auth/SignInForm';

require('app/stylesheets/components/auth/signin.css');

const SignIn = () => (
  <main>
    <div className="signin-form-wrapper">
      <SignInForm />
    </div>
  </main>
);

export default SignIn;
