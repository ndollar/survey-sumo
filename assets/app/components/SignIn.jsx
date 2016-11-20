import React from 'react';
import SignInForm from 'app/components/SignInForm';

require('app/stylesheets/components/signin.css');

const SignIn = () => (
  <main>
    <div className="signin-form-wrapper">
      <SignInForm />
    </div>
  </main>
);

export default SignIn;
