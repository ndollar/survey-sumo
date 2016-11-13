'use strict';

module.exports = function(models) {

  var create = function(options) {
    return models.Answer.create({
      ChoiceId: options.choiceId
    });
  };

  return {
    create: create
  };
};
