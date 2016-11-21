import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Auth } from 'app/api';
import { saveToken } from 'app/helpers/auth';
import { loginSuccess, authError } from 'app/actions/auth';
import { browserHistory } from 'react-router';
import { checkStatus } from 'app/helpers/fetch-response';
import ErrorBlock from 'app/components/ErrorBlock';

require('app/stylesheets/components/signin-form.css');

const messageFromState = state => (state.auth.errorResponse.error);

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email, password) {
    Auth.login(email, password)
      .then(checkStatus)
      .then(json => {
        saveToken(dispatch(loginSuccess(json)).token.token);
        browserHistory.push('/admin');
      })
      .catch(error => {
        if (error.response) {
          error.response
          .json().then(err => {
            dispatch(authError(err));
          });
        } else {
          throw error;
        }
      });
  },
});

const SignInForm = ({ onSubmit }) => {
  let email = '';
  let password = '';
  return (
    <div className="signin-form-container">
      <h3 className="signin-title">Sign In</h3>
      <ErrorBlock messageFromState={messageFromState} />
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
            required
          />
        </div>
        <div className="form-group">
          <input
            ref={node => (password = node)}
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >Sign in</button>
        </div>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignInForm);
