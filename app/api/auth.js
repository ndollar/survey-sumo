var bcrypt = require('bcrypt');
var logger = require('winston');
var auth = require('../helpers/auth');
var errorResponse = require('./error-response');

/*
 * Hardcoding user information here because:
 * - It would have to be hard coded in a db:seeder anyway
 * - Reduces a network call and point of failure
 * - There is a only one user, which is not referenced in the
 *   data model.
 */
var User = {
  username: 'nick@sumo.me',
  password: '$2a$10$QHtfxPynby8Pm34jmc1s3ed9C.ZzQcRnHmA3Kzr8g2lumdTpJA1du'
};

var invalidUsernameOrPassword = function (response) {
  errorResponse.preCondition(response, {
    error: 'Invalid username or password'
  });
};

var generateTokenCallback = function (response) {
  return function (generateTokenError, token) {
    if (generateTokenError) {
      logger.warn('Unable to generate JWT', generateTokenError);
      errorResponse.internalServerError(response);
    } else {
      response.json({ token: token });
    }
  };
};

var compareCallback = function (response, username) {
  return function (err, result) {
    if (err) {
      logger.warn('Error comparing password for User[%s]', username, err);
      errorResponse.internalServerError(response);
      return;
    }

    if (!result) {
      invalidUsernameOrPassword(response);
      return;
    }

    auth.generateToken(
      { username: username },
      generateTokenCallback(response)
    );
  };
};

module.exports = {
  login: function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    if (username.trim() !== User.username) {
      invalidUsernameOrPassword(response);
      return;
    }

    bcrypt.compare(
      password,
      User.password,
      compareCallback(response, username)
    );
  }
};
