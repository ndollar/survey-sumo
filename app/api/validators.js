var auth = require('../helpers/auth');

module.exports = {
  isAuthenticated: function (value) {
    try {
      auth.verifyToken(value);
      return true;
    } catch (e) {
      return false;
    }
  }
};
