var logger = require('winston');
var errorResponse = require('./error-response');

module.exports = function (models) {
  var choicesWithQuestionId = function (questionId, choices) {
    return choices.map(function (choice) {
      return {
        QuestionId: questionId,
        text: choice.text
      };
    });
  };

  var create = function (request, response) {
    var text = request.body.text;
    var choices = request.body.choices;

    models.Question.create({ text: text })
    .then(function (question) {
      models.Choice.bulkCreate(
        choicesWithQuestionId(question.id, choices)
      ).then(function () {
        response.json({
          id: question.id,
          text: question.text,
          Choices: choices
        });
      }).catch(function (err) {
        logger.warn('Error saving choices[%s] for question[%s]',
          choices, question, err);
        errorResponse.internalServerError(response);
      });
    }).catch(function (err) {
      logger.warn('Error saving question[%s]', request.body, err);
      errorResponse.internalServerError(response);
    });
  };

  var findAll = function (request, response) {
    models.Question.findAll({
      include: [{
        model: models.Choice,
        required: true
      }]
    })
    .then(function (questions) {
      response.json(questions);
    }).catch(function (err) {
      logger.warn('Error finding questions', err);
      errorResponse.internalServerError(response);
    });
  };

  var allWithAnswers = function (request, response) {
    models.Question.findAll({
      include: [{
        model: models.Choice,
        required: true,
        include: [models.Answer]
      }]
    })
    .then(function (questions) {
      response.json(questions);
    }).catch(function (err) {
      logger.warn('Error finding questions', err);
      errorResponse.internalServerError(response);
    });
  };

  return {
    create: create,
    choicesWithQuestionId: choicesWithQuestionId,
    findAll: findAll,
    allWithAnswers: allWithAnswers
  };
};
