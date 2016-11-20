import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Auth } from 'app/api';
import { saveToken } from 'app/helpers/auth';
import { loginSuccess, authError } from 'app/actions/auth';
import { browserHistory } from 'react-router';


require('app/stylesheets/components/signin-form.css');

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email, password) {
    Auth.login(email, password)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((json) => {
        saveToken(dispatch(loginSuccess(json)).token.token);
        browserHistory.push('/admin');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  },
});

const SignInForm = ({ onSubmit }) => {
  let email;
  let password;
  return (
    <div className="signin-form-container">
      <h3 className="signin-title">Sign In</h3>
      <form
        className="form-horizontal"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email.value, password.value);
        }}
      >
        <div className="form-group">
          <input
            ref={node => (email = node)}
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            ref={node => (password = node)}
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Sign in</button>
        </div>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignInForm);
