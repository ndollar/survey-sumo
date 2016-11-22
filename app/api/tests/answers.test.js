var chai = require('chai');
var sinonChai = require('sinon-chai');
var answersGenerator = require('../answers');
var requestMock = require('./request.mock');
var createModels = require('./models.mock').createModels;
var expect = chai.expect;
var CHOICE_ID = 1;

chai.use(sinonChai);

describe('#Answers', function () {
  var Answers;
  var models;
  var request;
  var response;

  var answersBeforeEach = function () {
    var requestSpies = requestMock.createSpys();
    request = requestSpies.request;
    response = requestSpies.response;
    models = createModels();
    Answers = answersGenerator(models);
  };

  describe('#create', function () {
    beforeEach(function () {
      answersBeforeEach();
      request.body.choiceId = CHOICE_ID;
    });

    it('should create answer with chioce id', function () {
      Answers.create(request, response);
      expect(models.Answer.create).to.have.been.calledWith({ ChoiceId: CHOICE_ID });
      expect(response.json).to.have.been.calledOnce; // eslint-disable-line
    });

    it('should have error handler ', function () {
      Answers.create(request, response);
      expect(models.Answer.createReturn.catch).to.have.been.calledOnce; // eslint-disable-line
    });
  });
});
