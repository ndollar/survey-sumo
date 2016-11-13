'use strict';
var bcrypt = require('bcrypt');

var User = {
  username: 'u@u.u',
  password: '$2a$10$QHtfxPynby8Pm34jmc1s3ed9C.ZzQcRnHmA3Kzr8g2lumdTpJA1du',
};

module.exports = {
  login: function (options, callback) {
    if (options.username === User.username) {
      bcrypt.compare(options.password, User.password, function (err, res) {
        callback(err, res);
      });
    } else {
      callback(null, false);
    }
  },
};
