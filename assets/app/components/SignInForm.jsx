import React from 'react';
import { connect } from 'react-redux';
import { Auth } from 'app/api';
import { saveToken } from 'app/helpers/auth';
import { loginSuccess, authError } from 'app/actions/auth';
import { browserHistory } from 'react-router';

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
        dispatch(authError(error))
      });
  },
});

const SignInForm = ({ onSubmit }) => {
  let email;
  let password;
  return (
    <form
      className="form-horizontal"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email.value, password.value);
      }}
    >
      <div className="form-group">
        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input ref={node => (email = node)} type="email" className="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
        <div className="col-sm-10">
          <input ref={node => (password = node)} type="password" className="form-control" id="inputPassword3" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default">Sign in</button>
        </div>
      </div>
    </form>);
};

export default connect(null, mapDispatchToProps)(SignInForm);
