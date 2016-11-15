var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

// TODO: Test me!

module.exports = {
  generateToken: function (options, callback) {
    jwt.sign(options, secret, {
      expiresIn: '2 days'
    }, callback);
  },
  verifyToken: function (token) {
    return jwt.verify(token, secret);
  },
  setJwt: function (newJwt) {
    jwt = newJwt;
  }
};
