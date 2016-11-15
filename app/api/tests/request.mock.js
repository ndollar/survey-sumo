var sinon = require('sinon');

module.exports = {
  createSpys: function () {
    return {
      request: { body: {} },
      response: { json: sinon.spy() }
    };
  }
};
