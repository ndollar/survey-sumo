var chai = require('chai');
var sinonChai = require('sinon-chai');
var questionsGenerator = require('../questions');
var requestMock = require('./request.mock');
var createModels = require('./models.mock').createModels;
var questionsData = require('./questions.data');
var expect = chai.expect;

chai.use(sinonChai);

describe('#Questions', function () {
  var Questions;
  var models;
  var question = questionsData.test.question;
  var request;
  var response;

  var questionsBeforeEach = function () {
    var requestSpies = requestMock.createSpys();
    request = requestSpies.request;
    response = requestSpies.response;
    models = createModels();
    Questions = questionsGenerator(models);
  };

  describe('#create', function () {
    var choices = questionsData.test.choices;
    beforeEach(function () {
      questionsBeforeEach();
      request.body.text = question.text;
      request.body.choices = choices;
    });

    it('should create question with choices', function () {
      Questions.create(request, response);
      expect(models.Question.create).to.have.been.calledWith({ text: 'text' });
      expect(models.Choice.bulkCreate).to.have.been.calledWith(
        questionsData.test.choices);
      expect(response.json).to.have.been.calledOnce; // eslint-disable-line
    });

    it('should have error handler ', function () {
      Questions.create(request, response);
      expect(models.Question.createReturn.catch).to.have.been.calledOnce; // eslint-disable-line
    });
  });

  describe('#choicesWithQuesitonId', function () {
    var choices = [{
      text: 'choice 1'
    }, {
      text: 'choice 2'
    }];
    var expectedChoices = [{
      QuestionId: 1,
      text: 'choice 1'
    }, {
      QuestionId: 1,
      text: 'choice 2'
    }];

    beforeEach(questionsBeforeEach);

    it('should create choices with question id', function () {
      var choicesWithQuestionIds = Questions.choicesWithQuestionId(1, choices);
      expect(choicesWithQuestionIds).to.deep.equal(expectedChoices);
    });
  });

  describe('#findAll', function () {
    beforeEach(questionsBeforeEach);

    it('should call question find all and respond with json', function () {
      Questions.findAll(request, response);
      expect(models.Question.findAll).to.have.been.calledWith();
      expect(response.json).to.have.been.calledOnce; // eslint-disable-line
    });

    it('should have error handler ', function () {
      Questions.findAll(request, response);
      expect(models.Question.findAllReturn.catch).to.have.been.calledOnce; // eslint-disable-line
    });
  });
});
