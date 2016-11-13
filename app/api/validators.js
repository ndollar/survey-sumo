var auth = require('../helpers/auth');

module.exports = {
  isAuthenticated: function(value) {
    console.log('***', value);
    try {
      auth.verifyToken(value);
      return true;
    } catch (e) {
      return false;
    }
  },
};
