var logger = require('winston');
var internalServerError = require('./error-response').internalServerError;

module.exports = function exports(models) {
  var create = function create(request, response) {
    models.Answer.create({
      ChoiceId: request.body.choiceId
    }).then(function (answer) {
      response.json(answer);
    }).catch(function (err) {
      logger.warn('Error saving answer[ChoiceId=%s]', request.body.choiceId, err);
      internalServerError(response);
    });
  };

  return {
    create: create
  };
};
