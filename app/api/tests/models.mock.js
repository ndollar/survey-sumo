var sinon = require('sinon');
var questionsData = require('./questions.data');

var buildThenAndCatch = function (arg) {
  var catcher = sinon.spy();
  return {
    catch: catcher,
    then: function (callback) {
      callback(arg);
      return { catch: catcher };
    }
  };
};

var createQuestion = function () {
  var createReturn = buildThenAndCatch(questionsData.test.question);
  var findAllReturn = buildThenAndCatch([questionsData.test.question]);
  return {
    createReturn: createReturn,
    create: sinon.stub().returns(createReturn),
    findAllReturn: findAllReturn,
    findAll: sinon.stub().returns(findAllReturn)
  };
};

var createChoice = function () {
  var thenAndCatch = buildThenAndCatch();
  return {
    thenAndCatch: thenAndCatch,
    bulkCreate: sinon.stub().returns(thenAndCatch)
  };
};

var createAnswer = function () {
  var createReturn = buildThenAndCatch();
  return {
    createReturn: createReturn,
    create: sinon.stub().returns(createReturn)
  };
};

module.exports = {
  createModels: function () {
    return {
      Question: createQuestion(),
      Choice: createChoice(),
      Answer: createAnswer()
    };
  }
};
